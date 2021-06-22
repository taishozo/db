import pandas as pd
from rdflib import URIRef, BNode, Literal, Graph
from rdflib.namespace import RDF, RDFS, FOAF, XSD
from rdflib import Namespace
import numpy as np
import math
import sys
import argparse
import json
import html
import requests

############

with open("/Users/nakamurasatoru/git/d_sat/u-renja/static/iiif2/collection/top.json") as f:
    df2 = json.load(f)

manifests = df2["manifests"]

images = {}

for m in manifests:
    metadata = m["metadata"]

    num = -1
    identifier = ""

    for obj in metadata:
        if "Description" in obj["label"]:
            num = obj["value"][0].split("通番: ")[1]

            num = int(num)

        elif "identifier" in obj["label"]:
            identifier = obj["value"]

    if num not in images:
        images[num] = []

    images[num].append({
        "id": m["@id"],
        "identifier": identifier
    })

for num in images:
    print(num, images[num])

#############

url = "https://taishozo.github.io/db/iiif/kandomokuroku/manifest.json"

df = requests.get(url).json()

indexMap = {}

canvases = df["sequences"][0]["canvases"]
for i in range(len(canvases)):
    c = canvases[i]
    res = c["images"][0]["resource"]["@id"]
    if "p." in res:
        p = res.split("p.")[1].split(".")[0]
        indexMap[p] = i + 1

for p in indexMap:
    print(p, indexMap[p], int(p) - int(indexMap[p]))

def read_excel(path):
    df = pd.read_excel(path, sheet_name=0, header=None, index_col=None, engine="openpyxl")

    r_count = len(df.index)
    c_count = len(df.columns)

    map = {}

    for i in range(0, c_count):
        label = df.iloc[1, i]
        map[i] = label

    for j in range(2, r_count):
        id = df.iloc[j, 0]
        
        num1 = df.iloc[j, 114]
        if not pd.isnull(num1):
            df.iloc[j, 114] = "[{}](https://taishozo.github.io/u-renja/search/?fc-通番={})".format(num1, num1)

        num2 = df.iloc[j, 118]
        if not pd.isnull(num2):
            df.iloc[j, 118] = "[{}](https://taishozo.github.io/u-renja/search/?fc-通番={})".format(num2, num2)

        kando = df.iloc[j, 122]
        if not pd.isnull(kando):
            pos = int(kando) - 152
            df.iloc[j, 122] = "[{}](http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=https://taishozo.github.io/db/iiif/kandomokuroku/manifest.json&pos={})".format(int(kando), pos)

        folder1 = df.iloc[j, 127]
        if not pd.isnull(folder1):

            uuid1 = folder1 + "_" + str(df.iloc[j, 128]).zfill(4) + "_" + str(df.iloc[j, 129]).zfill(4)

            num1 = int(num1)

            if num1 in images:

                value1 = ""
                    
                arr = images[num1]

                for a in arr:
                    if uuid1 == a["identifier"]:
                        value1 = a["id"]

                if value1 == "":
                    print(uuid1, "value1", value1)
                else:
                    df.iloc[j, 126] = "[{}]({})".format(df.iloc[j, 126], value1)

            # dir1 = df.iloc[j, 127]

        folder2 = df.iloc[j, 131]
        if not pd.isnull(folder2):
            uuid2 = folder2 + "_" + str(df.iloc[j, 132]).zfill(4) + "_" + str(df.iloc[j, 133]).zfill(4)

            num1 = int(num1)

            if num1 in images:

                value2 = ""
                    
                arr = images[num1]

                for a in arr:
                    if uuid2 == a["identifier"]:
                        value2 = a["id"]

                if value2 == "":
                    print(uuid2, "value2", value2)
                else:
                    df.iloc[j, 130] = "[{}]({})".format(df.iloc[j, 130], value2)


        # print(num, kando, title1, dir1, title2, dir2)

        
    writer = pd.ExcelWriter('../static/metadata/data.xlsx', engine="openpyxl")
    df.to_excel(writer, index=False, header=False)

    #Excelファイルを保存
    writer.save()
    #Excelファイルを閉じる
    writer.close()


path = "data/『大正新脩大蔵経』底本・校本一覧データベース20210226.xlsx"
# data1 = read_excel(path)
read_excel(path)