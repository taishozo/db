(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{431:function(t,e,r){"use strict";r(57);var n=r(15),o=r(26),l=r(29),c=r(25),_=r(16),v=r(6),f=(r(12),r(59));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(_.a)(t);if(e){var o=Object(_.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){Object(l.a)(r,t);var e=d(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="http://localhost:8089",t}return Object(o.a)(r,[{key:"copyLink",value:function(){var t=this.url;document.addEventListener("copy",(function e(r){r.clipboardData.setData("text/plain",t),r.preventDefault(),document.removeEventListener("copy",e)})),document.execCommand("copy")}},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),r}(f.Vue);h([Object(f.Prop)({required:!0})],x.prototype,"url",void 0),h([Object(f.Prop)({required:!0})],x.prototype,"title",void 0);var R=x=h([f.Component],x),y=r(50),m=r(81),k=r.n(m),w=r(180),j=r(426),C=r(165),O=r(492),component=Object(y.a)(R,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},n),[r("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Twitter"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},n),[r("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Facebook"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},n),[r("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),r("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null),B=component.exports;function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(_.a)(t);if(e){var o=Object(_.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}k()(component,{VBtn:w.a,VCard:j.a,VIcon:C.a,VTooltip:O.a});var F=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},V=function(t){Object(l.a)(r,t);var e=I(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),r}(f.Vue);F([Object(f.Prop)()],V.prototype,"item",void 0);var E=V=F([Object(f.Component)({components:{ShareButtons:B}})],V),P=r(361),S=Object(y.a)(E,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{color:"primary",depressed:"",icon:""}},n),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),r("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)}),[],!1,null,null,null);e.a=S.exports;k()(S,{VBtn:w.a,VIcon:C.a,VMenu:P.a})},543:function(t,e,r){"use strict";r.r(e);r(57);var n=r(14),o=r(15),l=r(26),c=r(29),_=r(25),v=r(16),f=r(6),d=(r(53),r(12),r(59)),h=r(431);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(_.a)(this,r)}}var R=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},y=function(t){Object(c.a)(_,t);var e,r=x(_);function _(){var t;return Object(o.a)(this,_),(t=r.apply(this,arguments)).kFields=["標準名称","巻","国","時代","年","刊写者","刊写形態","関与者","関与形態"],t.kando="http://localhost:8089/iiif/kandomokuroku/manifest.json",t.hFields=["国","所蔵者"],t.apiResult=null,t.uri="",t.url="",t.title="",t.id="",t.uRenja="https://taishozo.github.io/u-renja",t}return Object(l.a)(_,[{key:"asyncData",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(e.params.id),n="http://localhost:8089/item/"+r,o="http://localhost:8089/data/"+r+".json",t.next=5,e.$axios.get(o).then((function(t){return t.data})).catch((function(t){console.error(t)}));case 5:return l=t.sent,console.log({apiResult:l}),t.abrupt("return",{id:r,apiResult:l,uri:o,url:n,title:r});case 8:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}},{key:"getUrl",value:function(t){for(var e="",i=0;i<t.length;i++)e+="&fc-通番="+t[i]["ex:通番"];return this.uRenja+"/search/?"+e.substring(1)}}]),_}(d.Vue),m=y=R([Object(d.Component)({components:{ResultOption:h.a}})],y),k=r(50),w=r(81),j=r.n(w),C=r(180),O=r(439),B=r(399),I=r(448),F=r(46),V=r(492),component=Object(k.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.apiResult?r("v-container",[r("h2",{staticClass:"text-center my-5"},[t._v("\n      "+t._s(t.$t("詳細情報"))+"\n    ")]),t._v(" "),r("table",{staticClass:"my-2",staticStyle:{"border-collapse":"collapse"},attrs:{border:"1",width:"100%"}},[r("tr",[r("th",{attrs:{colspan:"7"}},[r("h2",[t._v(t._s("基本情報"))])])]),t._v(" "),r("tr",[r("th",[t._v(t._s("経典番号"))]),t._v(" "),r("th",[t._v(t._s("枝番"))]),t._v(" "),r("th",[t._v(t._s("経典名"))]),t._v(" "),r("th",[t._v(t._s("収録巻次"))]),t._v(" "),r("th",[t._v(t._s("部門"))]),t._v(" "),r("th",[t._v(t._s("配本"))]),t._v(" "),r("th",[t._v(t._s("出版年月日"))])]),t._v(" "),r("tr",{staticClass:"text-center"},[r("td",[t._v("\n          "+t._s(t.apiResult["ex:基本情報"][0]["ex:経典"][0]["ex:経典番号"])+"\n        ")]),t._v(" "),r("td",[t._v(t._s(t.apiResult["ex:基本情報"][0]["ex:経典"][0]["ex:枝番"]))]),t._v(" "),r("td",{staticClass:"pl-1 text-left"},[r("a",{attrs:{href:t.apiResult["ex:sat"][0]["ex:url"],target:"_blank"}},[t._v(t._s(t.apiResult["ex:基本情報"][0]["ex:経典"][0]["ex:経典名"]))])]),t._v(" "),r("td",[t._v("\n          "+t._s(t.apiResult["ex:基本情報"][0]["ex:経典"][0]["ex:収録巻次"])+"\n        ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left"},[t._v("\n          "+t._s(t.apiResult["ex:基本情報"][0]["ex:経典"][0]["ex:部門"])+"\n        ")]),t._v(" "),r("td",[t._v("\n          "+t._s(t.apiResult["ex:基本情報"][0]["ex:経典"][0]["ex:配本"].join(", "))+"\n        ")]),t._v(" "),r("td",[t._v("\n          "+t._s(t.apiResult["ex:基本情報"][0]["ex:経典"][0]["ex:出版年月日"].join(", "))+"\n        ")])])]),t._v(" "),r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{sm:"12"}},[r("table",{staticClass:"my-2",staticStyle:{"border-collapse":"collapse"},attrs:{border:"1",width:"100%"}},[r("tr",[r("th",{attrs:{colspan:"4"}},[r("h2",[t._v(t._s("勘同目録"))])]),t._v(" "),r("th",{attrs:{bgcolor:"#CFD8DC",rowspan:"60",width:"2%"}}),t._v(" "),r("th",{attrs:{colspan:"4"}},[r("h2",[t._v(t._s("脚注"))])])]),t._v(" "),r("tr",[r("th",{attrs:{width:"10%"}},[t._v(t._s("底本/校本"))]),t._v(" "),r("th",{attrs:{width:"10%"}},[t._v(t._s("❹"))]),t._v(" "),r("th",{attrs:{width:"12%"}},[t._v(t._s("❼"))]),t._v(" "),r("th",{attrs:{width:"12%"}},[t._v(t._s("❼備考"))]),t._v(" "),r("th",{attrs:{width:"10%"}},[t._v(t._s("底本/校本"))]),t._v(" "),r("th",{attrs:{width:"10%"}},[t._v(t._s("新添部分"))]),t._v(" "),r("th",{attrs:{width:"12%"}},[t._v(t._s("テキスト"))]),t._v(" "),r("th",{attrs:{width:"12%"}},[t._v(t._s("備考"))])]),t._v(" "),r("tr",{staticClass:"text-center"},[r("td",[t._v(t._s(t.apiResult["ex:勘同目録"][0]["ex:底本/校本"]))]),t._v(" "),r("td",{staticClass:"pl-1 text-left"},[t._v("\n              "+t._s(t.apiResult["ex:勘同目録"][0]["ex:❹"])+"\n            ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left"},[t._v("\n              "+t._s(t.apiResult["ex:勘同目録"][0]["ex:❼"])+"\n            ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left"},[t._v("\n              "+t._s(t.apiResult["ex:勘同目録"][0]["ex:❼備考"])+"\n            ")]),t._v(" "),r("td",[t._v(t._s(t.apiResult["ex:脚注"][0]["ex:底本/校本"]))]),t._v(" "),r("td",{staticClass:"pl-1 text-left"},[t._v("\n              "+t._s(t.apiResult["ex:脚注"][0]["ex:新添"])+"\n            ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left"},[t.apiResult["ex:酉目"]&&t.apiResult["ex:酉目"].length>0?[r("a",{attrs:{href:t.getUrl(t.apiResult["ex:酉目"]),target:"_blank"}},[t._v(t._s(t.apiResult["ex:脚注"][0]["ex:テキスト"]))])]:[t._v("\n                "+t._s(t.apiResult["ex:脚注"][0]["ex:テキスト"])+"\n              ")],t._v(" "),t.apiResult["ex:酉蓮社本IIIコレクション"]?t._l(t.apiResult["ex:酉蓮社本IIIコレクション"],(function(e,n){return r("v-tooltip",{key:n,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var l=o.on,c=o.attrs;return[r("a",t._g(t._b({attrs:{href:"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=https://d1av1vcgsldque.cloudfront.net/iiif/"+Number(t.id)+"/manifest.json&pos="+(1==n?5:e["ex:from"]),target:"_blank"}},"a",c,!1),l),[r("img",{staticClass:"mr-1",attrs:{width:"30px",src:"https://pbs.twimg.com/profile_images/596366309601845248/2uaPY5NH.png"}})])]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(e["ex:経典名"]))])])})):t._e()],2),t._v(" "),r("td",{staticClass:"pl-1 text-left"},[t._v("\n              "+t._s(t.apiResult["ex:脚注"][0]["ex:備考"])+"\n            ")])]),t._v(" "),r("tr",[r("th",{attrs:{colspan:"4"}},[r("h3",[t._v(t._s("勘同目録詳細情報"))])]),t._v(" "),r("th",{attrs:{colspan:"4"}},[r("h3",[t._v(t._s("脚注詳細情報"))])])]),t._v(" "),t._l(5,(function(e){return[1==e?[r("tr",{key:"r1_"+e},[r("td",{attrs:{rowspan:t.kFields.length+3}},[t._v("\n                  "+t._s("テキスト"+e)),r("br"),t._v(t._s("（勘同目録）")+"\n                ")]),t._v(" "),t.apiResult["ex:勘同目録IIIFコレクション"].length>0?[r("td",[t._v("勘同目録所在")]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("a",{attrs:{href:"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest="+t.kando+"&pos="+(t.apiResult["ex:勘同目録IIIFコレクション"][0]["ex:ページ"]-152),target:"勘同目録IIIFコレクション"}},[t._v("\n                      "+t._s(t.apiResult["ex:勘同目録IIIFコレクション"][0]["ex:ページ"]+t.apiResult["ex:勘同目録IIIFコレクション"][0]["ex:段"]+"~"+t.apiResult["ex:勘同目録IIIFコレクション"][0]["ex:toページ"]+t.apiResult["ex:勘同目録IIIFコレクション"][0]["ex:to段"])+"\n                    ")])])]:[r("td",{attrs:{bgcolor:"#B0BEC5"}}),t._v(" "),r("td",{attrs:{bgcolor:"#B0BEC5",colspan:"2"}})],t._v(" "),r("td",{attrs:{rowspan:t.kFields.length+3}},[t._v("\n                  "+t._s("テキスト"+e)),r("br"),t._v(t._s("（脚注）")+"\n                ")]),t._v(" "),r("td",[t._v("底本推定")]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{colspan:"2"}},[t._v("\n                  "+t._s(t.apiResult["ex:脚注"][0]["ex:底本推定"])+"\n                ")])],2),t._v(" "),r("tr",{key:"r10_"+e},[r("td",{attrs:{bgcolor:"#B0BEC5"}}),t._v(" "),r("td",{attrs:{bgcolor:"#B0BEC5",colspan:"2"}}),t._v(" "),r("td",[t._v("略号使用")]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{colspan:"2"}},[t._v("\n                  "+t._s(t.apiResult["ex:脚注"][0]["ex:略号の使用"])+"\n                ")])]),t._v(" "),r("tr",{key:"r11_"+e},[r("td",{attrs:{bgcolor:"#B0BEC5"}}),t._v(" "),r("td",{attrs:{bgcolor:"#B0BEC5",colspan:"2"}}),t._v(" "),r("td",[t._v("略号解説")]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{colspan:"2"}},[t._v("\n                  "+t._s(t.apiResult["ex:脚注"][0]["ex:略号解説"])+"\n                ")])])]:t._e(),t._v(" "),t._l(t.kFields,(function(n,o){return r("tr",{key:"l2_"+e+o,staticClass:"text-center"},[0==o&&1!=e?r("td",{attrs:{rowspan:t.kFields.length}},[t._v("\n                "+t._s("テキスト"+e)),r("br"),t._v(t._s("（勘同目録）")+"\n              ")]):t._e(),t._v(" "),r("td",[t._v(t._s(n))]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{colspan:"2"}},[t._v("\n                "+t._s(t.apiResult["ex:勘同目録"][0]["ex:texts"][e-1]?t.apiResult["ex:勘同目録"][0]["ex:texts"][e-1]["ex:"+n]:"")+"\n                "+t._s("年"==n&&t.apiResult["ex:勘同目録"][0]["ex:texts"][e-1]&&t.apiResult["ex:勘同目録"][0]["ex:texts"][e-1]["ex:～年"]?" - "+t.apiResult["ex:勘同目録"][0]["ex:texts"][e-1]["ex:～年"]:"")+"\n              ")]),t._v(" "),0==o&&1!=e?r("td",{attrs:{rowspan:t.kFields.length,bgcolor:e<4?"":"#B0BEC5"}},[e<4?[t._v("\n                  "+t._s("テキスト"+e)),r("br"),t._v(t._s("（脚注）")+"\n                ")]:t._e()],2):t._e(),t._v(" "),r("td",{attrs:{bgcolor:e<4?"":"#B0BEC5"}},[t._v("\n                "+t._s(e>3?"":n)+"\n              ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{colspan:"2",bgcolor:e<4?"":"#B0BEC5"}},[t._v("\n                "+t._s(t.apiResult["ex:脚注"][0]["ex:texts"][e-1]?t.apiResult["ex:脚注"][0]["ex:texts"][e-1]["ex:"+n]:"")+"\n              ")])])}))]})),t._v(" "),t._l(2,(function(e){return t._l(t.hFields,(function(n,o){return r("tr",{key:"l3_"+e+o,staticClass:"text-center"},[0==o?r("td",{attrs:{rowspan:t.hFields.length}},[t._v("\n                "+t._s("所蔵者"+e)),r("br"),t._v(t._s("（勘同目録）")+"\n              ")]):t._e(),t._v(" "),r("td",[t._v(t._s(n))]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{colspan:"2"}},[t._v("\n                "+t._s(t.apiResult["ex:勘同目録"][0]["ex:所蔵者"][e-1]?t.apiResult["ex:勘同目録"][0]["ex:所蔵者"][e-1]["ex:"+n]:"")+"\n              ")]),t._v(" "),0==o?r("td",{attrs:{rowspan:t.hFields.length}},[t._v("\n                "+t._s("所蔵者"+e)),r("br"),t._v(t._s("（脚注）")+"\n              ")]):t._e(),t._v(" "),r("td",[t._v(t._s(n))]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{colspan:"2"}},[t._v("\n                "+t._s(t.apiResult["ex:脚注"][0]["ex:所蔵者"][e-1]?t.apiResult["ex:脚注"][0]["ex:所蔵者"][e-1]["ex:"+n]:"")+"\n              ")])])}))}))],2)])],1),t._v(" "),r("v-sheet",{staticClass:"py-10 px-3 text-center"},[r("v-btn",{attrs:{depressed:"",icon:"",href:t.uri,target:"_blank"}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("img",t._g({attrs:{height:"24px",src:"https://json-ld.org/images/json-ld-logo.png"}},n))]}}],null,!1,51051772)},[t._v(" "),r("span",[t._v(t._s(t.$t("JSON-LD")))])])],1),t._v(" "),r("ResultOption",{staticClass:"ma-1",attrs:{item:{label:t.title,url:t.url}}})],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VBtn:C.a,VCol:O.a,VContainer:B.a,VRow:I.a,VSheet:F.a,VTooltip:V.a})}}]);