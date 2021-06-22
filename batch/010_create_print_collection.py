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

def read_excel(path):
    df = pd.read_excel(path, sheet_name=0, header=None, index_col=None, engine="openpyxl")

    r_count = len(df.index)
    c_count = len(df.columns)

    map = {}

    for i in range(0, c_count):
        label = df.iloc[1, i]
        map[i] = label

    print(map)

    data = []
    search = []

    uri_context = "https://taishozo.github.io/sat/context.json"

    context = {
        "@context" : [
            {
                "ex" : "http://example.org/",
                "data" : "https://taishozo.github.io/sat/data",
                "keiten" : "https://taishozo.github.io/sat/経典番号/"
            }
        ]
    }

    with open("../static/context.json", 'w') as f:
        json.dump(context, f, ensure_ascii=False, indent=4,
        sort_keys=True, separators=(',', ': '))

    tmp_arr = []

    for j in range(2, r_count):
        id = df.iloc[j, 0]

        if id == "" or pd.isnull(id):
            continue

        id = str(id).zfill(5)

        print(id)

        if id == "00000":
            continue
        
        '''
        if id != "04309":
            continue
        '''

        経典番号 = df.iloc[j, 1]

        uri = "data:"+id+".json"
        uri_経典番号 = "keiten:"+経典番号+".json"

        枝番 = df.iloc[j, 9] if not pd.isnull(df.iloc[j, 9]) else ""

        # print(df.iloc[j, 8], df.iloc[j, 9], df.iloc[j, 10], df.iloc[j, 11], df.iloc[j, 12], df.iloc[j, 13])

        uri_sat = "https://21dzk.l.u-tokyo.ac.jp/SAT2018/"+df.iloc[j, 8]+枝番+"_."+str(df.iloc[j, 10]).zfill(2)+"."+str(df.iloc[j, 11]).zfill(4)+df.iloc[j, 12]+str(df.iloc[j, 13]).zfill(2)+".html"

        # --------

        texts_k = []

        for c in range(0, 5):

            start = c * 10

            if not pd.isnull(df.iloc[j, 22+start]):
                obj = {
                    "@id": uri+"#テキスト"+str(c+1)+"（勘同目録）",
                    "ex:標準名称" : df.iloc[j, 22+start],
                }
                if not pd.isnull(df.iloc[j, 23+start]):
                    obj["ex:巻"] = df.iloc[j, 23+start]
                if not pd.isnull(df.iloc[j, 24+start]):
                    obj["ex:国"] = df.iloc[j, 24+start]
                if not pd.isnull(df.iloc[j, 25+start]):
                    obj["ex:時代"] = df.iloc[j, 25+start]
                if not pd.isnull(df.iloc[j, 26+start]):
                    obj["ex:年"] = df.iloc[j, 26+start]
                if not pd.isnull(df.iloc[j, 27+start]):
                    obj["ex:～年"] = df.iloc[j, 27+start]
                if not pd.isnull(df.iloc[j, 28+start]):
                    obj["ex:刊写者"] = df.iloc[j, 28+start]

                if not pd.isnull(df.iloc[j, 29+start]):
                    obj["ex:刊写形態"] = df.iloc[j, 29+start]

                if not pd.isnull(df.iloc[j, 30+start]):
                    obj["ex:関与者"] = df.iloc[j, 30+start]

                if not pd.isnull(df.iloc[j, 31+start]):
                    obj["ex:関与形態"] = df.iloc[j, 31+start]

                texts_k.append(obj)

        # --------

        holds_k = []

        for c in range(0, 2):

            start = c * 2

            if not pd.isnull(df.iloc[j, 72+start]):
                obj = {
                    "@id": uri+"#所蔵者"+str(c+1)+"（勘同目録）",
                    "ex:国" : df.iloc[j, 72+start],
                }
                if not pd.isnull(df.iloc[j, 73+start]):
                    obj["ex:所蔵者"] = df.iloc[j, 73+start]
                holds_k.append(obj)

        # --------

        obj_k = {
            "@id" : uri+"#勘同目録",
            "ex:texts" : texts_k,
            "ex:所蔵者" : holds_k
        }

        if not pd.isnull(df.iloc[j, 14]):
            obj_k["ex:底本/校本"] = df.iloc[j, 14]

        if not pd.isnull(df.iloc[j, 15]):
            obj_k["ex:❹"] = df.iloc[j, 15]

        if not pd.isnull(df.iloc[j, 16]):
            obj_k["ex:❼"] = df.iloc[j, 16]

        if not pd.isnull(df.iloc[j, 17]):
            obj_k["ex:❼備考"] = df.iloc[j, 17]

        # --------

        texts_f = []
  
        for c in range(0, 3):

            start = c * 10

            if not pd.isnull(df.iloc[j, 79+start]):
                obj = {
                    "@id": uri+"#テキスト"+str(c+1)+"（脚注）",
                    "ex:標準名称" : df.iloc[j, 79+start],
                }
                if not pd.isnull(df.iloc[j, 80+start]):
                    obj["ex:巻"] = df.iloc[j, 80+start]

                if not pd.isnull(df.iloc[j, 81+start]):
                    obj["ex:国"] = df.iloc[j, 81+start]
                if not pd.isnull(df.iloc[j, 82+start]):
                    obj["ex:時代"] = df.iloc[j, 82+start]
                if not pd.isnull(df.iloc[j, 83+start]):
                    obj["ex:年"] = df.iloc[j, 83+start]
                if not pd.isnull(df.iloc[j, 84+start]):
                    obj["ex:～年"] = df.iloc[j, 84+start]
                if not pd.isnull(df.iloc[j, 85+start]):
                    obj["ex:刊写者"] = df.iloc[j, 85+start]

                if not pd.isnull(df.iloc[j, 86+start]):
                    obj["ex:刊写形態"] = df.iloc[j, 86+start]

                if not pd.isnull(df.iloc[j, 87+start]):
                    obj["ex:関与者"] = df.iloc[j, 87+start]

                if not pd.isnull(df.iloc[j, 88+start]):
                    obj["ex:関与形態"] = df.iloc[j, 88+start]

                texts_f.append(obj)
       

        # --------

        holds_f = []

        for c in range(0, 2):

            start = c * 2
            
            index = 109 + start
            if not pd.isnull(df.iloc[j, index]):
                obj = {
                    "@id": uri+"#所蔵者"+str(c+1)+"（脚注）",
                    "ex:国" : df.iloc[j, index],
                }
                index = 110 + start
                if not pd.isnull(df.iloc[j, index]):
                    obj["ex:所蔵者"] = df.iloc[j, index]
                holds_f.append(obj)

        # --------

        obj_f = {
            "@id" : uri+"#脚注",
            "ex:texts" : texts_f,
            "ex:所蔵者" : holds_f
        }

        if not pd.isnull(df.iloc[j, 18]):
            obj_f["ex:底本/校本"] = df.iloc[j, 18]

        if not pd.isnull(df.iloc[j, 19]):
            obj_f["ex:新添"] = df.iloc[j, 19]

        if not pd.isnull(df.iloc[j, 20]):
            obj_f["ex:テキスト"] = df.iloc[j, 20]

        if not pd.isnull(df.iloc[j, 21]):
            obj_f["ex:備考"] = df.iloc[j, 21]

        if not pd.isnull(df.iloc[j, 76]):
            obj_f["ex:底本推定"] = df.iloc[j, 76]

        if not pd.isnull(df.iloc[j, 77]):
            obj_f["ex:略号の使用"] = df.iloc[j, 77]

        if not pd.isnull(df.iloc[j, 78]):
            obj_f["ex:略号解説"] = df.iloc[j, 78]

        # --------

        keiten = {
            "@id" : uri_経典番号,
            "ex:経典番号" : 経典番号,
            "ex:枝番" : df.iloc[j, 2],
            "ex:経典名" : df.iloc[j, 3],
            "ex:収録巻次" : df.iloc[j, 4],
            "ex:部門" : df.iloc[j, 5],
            "ex:配本" : df.iloc[j, 6],
            
        }

        date = str(df.iloc[j, 7]).split(",")
        keiten["ex:出版年月日"] = []

        for d in date:
            d = str(d)
            keiten["ex:出版年月日"].append(d[0:4]+"-"+d[4:6]+"-"+d[6:8])

        # --------
        # 勘同目録IIIFコレクション

        obj_ki = {
            "@id" : uri+"#勘同目録IIIFコレクション",
            "ex:kmID" : df.iloc[j, 121],
            "ex:ページ" : df.iloc[j, 122],
            "ex:段" : df.iloc[j, 123],
            "ex:toページ" : df.iloc[j, 124],
            "ex:to段" : df.iloc[j, 125],
        }

        # --------
        # 酉目

        yus = []

        for c in range(0, 2):

            start = c * 4
            
            index = 113 + start
            if not pd.isnull(df.iloc[j, index]):
                obj = {
                    "@id": uri+"#酉目"+str(c+1)+"",
                    "ex:經典番號" : df.iloc[j, index],
                    "ex:通番" : df.iloc[j, index + 1],
                    "ex:枝番" : df.iloc[j, index + 2],
                    "ex:to枝番" : df.iloc[j, index + 3],
                }
                yus.append(obj)

        # --------
        # 酉蓮社本IIIコレクション

        yu_i = []

        for c in range(0, 2):
            start = c * 4
            index = 126 + start
            if not pd.isnull(df.iloc[j, index]):
                obj = {
                    "@id": uri+"#酉蓮社本IIIコレクション"+str(c+1)+"",
                    "ex:経典名" : df.iloc[j, index],
                    "ex:画像フォルダ" : df.iloc[j, index + 1],
                    "ex:from" : df.iloc[j, index + 2],
                    "ex:to" : df.iloc[j, index + 3],
                }
                yu_i.append(obj)
        # --------
        
        obj = {
            "@id" : uri,
            "@context": uri_context,
            "ex:基本情報" : [
                {
                    "@id" : uri+"#基本情報",
                    "ex:No." : id,
                    "ex:経典" : [
                        keiten
                    ]
                }
            ],
            "ex:sat" : [
                {
                    "@id" : uri+"#SAT頭出し用",
                    "ex:url" : uri_sat,
                }
            ],
            "ex:勘同目録" : [
                obj_k
            ],
            "ex:脚注" : [
                obj_f
            ],
            "ex:勘同目録IIIFコレクション" : [
                obj_ki
            ],
            "ex:酉目" : yus,
            "ex:酉蓮社本IIIコレクション" : yu_i
        }

        # ゆうれんじゃ本の経典名(２)が存在するもの
        if not pd.isnull(df.iloc[j, 130]):
            # print(df.iloc[j, 0], df.iloc[j, 126])
            tmp_arr.append(df.iloc[j, 0])

        # --------

        data.append(obj)

        with open("../static/data/"+id+".json", 'w') as f:
            json.dump(obj, f, ensure_ascii=False, indent=4,
            sort_keys=True, separators=(',', ': '))

        # ------------

        qdata = {
            "No." : df.iloc[j, 0],
            "基-経典番号" : df.iloc[j, 1],
            "基-枝番" : df.iloc[j, 2],
            "基-経典名" : df.iloc[j, 3],
            "基-収録巻次" : df.iloc[j, 4],
            "基-部門" : df.iloc[j, 5],
            "基-配本" : df.iloc[j, 6],
            "基-年月日" : keiten["ex:出版年月日"],
            "sat_id" : df.iloc[j, 8]+枝番+"_."+str(df.iloc[j, 10]).zfill(2)+"."+str(df.iloc[j, 11]).zfill(4)+df.iloc[j, 12]+str(df.iloc[j, 13]).zfill(2)
        }

        if not pd.isnull(df.iloc[j, 14]):
            qdata["勘-底本/校本"] = df.iloc[j, 14]
   
        if not pd.isnull(df.iloc[j, 15]):
            qdata["勘-❹"] = df.iloc[j, 15]
        
        q_texts_k = []
        for text in texts_k:
            name = text["ex:標準名称"]
            if name not in q_texts_k:
                q_texts_k.append(name)
        qdata["勘同目録-テキスト"] = q_texts_k

        q_texts_f = []
        for text in texts_f:
            name = text["ex:標準名称"]
            if name not in q_texts_f:
                q_texts_f.append(name)
        qdata["脚注-テキスト"] = q_texts_f

        if not pd.isnull(df.iloc[j, 16]):
            qdata["勘-❼"] = df.iloc[j, 16]

        if not pd.isnull(df.iloc[j, 17]):
            qdata["勘-備考❼"] = df.iloc[j, 17]

        if not pd.isnull(df.iloc[j, 18]):
            qdata["脚-底本/校本"] = df.iloc[j, 18]

        if not pd.isnull(df.iloc[j, 19]):
            qdata["脚-新添部分"] = df.iloc[j, 19]

        if not pd.isnull(df.iloc[j, 20]):
            qdata["脚-テキスト"] = df.iloc[j, 20]

        if not pd.isnull(df.iloc[j, 21]):
            qdata["脚-備考"] = df.iloc[j, 21]

        if len(yus) > 0:
            qdata["酉目"] = []
            for obj in yus:
                qdata["酉目"].append(obj["ex:通番"])

        if len(yu_i) > 0:
            qdata["酉蓮社本IIIコレクション_経典名"] = []
            qdata["酉蓮社本IIIコレクション_画像フォルダ"] = []
            qdata["酉蓮社本IIIコレクション_from"] = []
            for obj in yu_i:
                qdata["酉蓮社本IIIコレクション_経典名"].append(obj["ex:経典名"])
                qdata["酉蓮社本IIIコレクション_画像フォルダ"].append(obj["ex:画像フォルダ"])
                qdata["酉蓮社本IIIコレクション_from"].append(obj["ex:from"])

        if not pd.isnull(df.iloc[j, 126]):
            qdata["画像"] = "あり"

        search.append(qdata)

    with open("../static/data.json", 'w') as f:
        json.dump(data, f, ensure_ascii=False, indent=4,
        sort_keys=True, separators=(',', ': '))

    with open("../static/index.json", 'w') as f:
        json.dump(search, f, ensure_ascii=False, indent=4,
        sort_keys=True, separators=(',', ': '))

    # return data

    print(tmp_arr)
    print(len(tmp_arr))


def read_excel2(path):
    df = pd.read_excel(path, sheet_name=0, header=None, index_col=None)

    r_count = len(df.index)

    map = {}

    for j in range(2, r_count):

        value = df.iloc[j, 25]
        if not pd.isnull(value) and value != 0:
            uuid = df.iloc[j, 56]

            map[int(value)] = {
                "uuid": uuid,
                "thumbnail":  df.iloc[j, 60]
            }

    return map


path = "data/『大正新脩大蔵経』底本・校本一覧データベース20210226.xlsx"
# data1 = read_excel(path)
read_excel(path)