(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{389:function(t,e,r){var content=r(450);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("a592ba62",content,!0,{sourceMap:!1})},447:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=447},449:function(t,e,r){"use strict";var n=r(389);r.n(n).a},450:function(t,e,r){(e=r(18)(!1)).push([t.i,".v-expansion-panel-content__wrap{padding:0!important}",""]),t.exports=e},473:function(t,e,r){"use strict";r.r(e);r(20),r(21),r(52),r(55),r(24),r(32),r(33),r(154),r(7),r(5),r(9),r(40);var n=r(11),o=r(16),c=r(25),l=r(26),f=r(22),v=r(13),h=r(15),d=r(54);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(l.a)(r,t);var e=m(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).sort="aaa:asc",t.from="",t.to="",t.termFrom="",t.loadingFrom="",t.termTo="",t.loadingTo="",t.items=["T0001","T0002","T0003"],t.radios="and",t.dialogFlag=!1,t.selected2="すべて",t.selected3=[],t.keywordStr="",t.keywords=[],t.dialog=!1,t.width=window.innerWidth,t.height=window.innerHeight,t.advanced={},t.creators=[{value:"",text:"All"},{value:"Giovanni Battista Piranesi",text:"Giovanni Battista Piranesi"},{value:"Francesco Piranesi",text:"Francesco Piranesi"}],t}return Object(c.a)(r,[{key:"trigger",value:function(t){13===t.keyCode&&this.search()}},{key:"search",value:function(){var t=this.keywordStr;t||(t="");var e=this.$utils.splitKeyword(t),r=Object.assign({},this.$route.query);r.keyword=e,r.from=0,this.$router.push(this.localePath({name:"search",query:r}),(function(){}),(function(){}))}},{key:"handleResize",value:function(){this.width=window.innerWidth,this.height=window.innerHeight}},{key:"mounted",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"beforeDestroy",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"advancedSearch",value:function(){var t=this.advanced,e=Object.assign({},this.$route.query);for(var r in t){var n=t[r].trim();""===n?e[r]&&delete e[r]:e[r]=n}var o=this.keywordStr;e.keyword=o,e.from=0,this.$router.push(this.localePath({name:"search",query:e}),(function(){}),(function(){})),this.dialog=!1}}]),r}(d.Vue),k=_=y([Object(d.Component)({})],_),w=r(45),O=r(72),j=r.n(O),$=r(333),x=r(384),R=r(374),F=r(465),C=r(397),S=r(481),V=r(373),P=r(479),D=r(466),A=r(467),L=r(404),T=r(347),z=r(407),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pt-5"},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8"}},[r("v-text-field",{staticClass:"mr-2",attrs:{filled:"","background-color":"grey lighten-2",rounded:"",dense:"","hide-details":"",label:t.$t("キーワード検索"),clearable:"","clear-icon":"mdi-close-circle","append-icon":"search"},on:{"click:append":t.search,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.trigger(e)}},model:{value:t.keywordStr,callback:function(e){t.keywordStr=e},expression:"keywordStr"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4"}},[r("v-btn",{staticClass:"mr-2",attrs:{color:"primary"},on:{click:t.search}},[t._v("\n        "+t._s(t.$t("search"))+"\n      ")])],1)],1),t._v(" "),r("v-dialog",{attrs:{scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"grey lighten-2"},[t._v("\n        "+t._s(t.$t("advanced_search"))+"\n      ")]),t._v(" "),r("v-card-text",{style:"height: "+.6*t.height+";"},[r("v-container",[r("h3",[t._v("経典番号")]),t._v(" "),r("v-row",[r("v-col",[r("v-combobox",{attrs:{loading:t.loadingFrom,"search-input":t.termFrom,filled:"",rounded:"",items:t.items,label:t.$t("From"),clearable:"","clear-icon":"mdi-close-circle"},on:{"update:searchInput":function(e){t.termFrom=e},"update:search-input":function(e){t.termFrom=e}},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}})],1),t._v(" "),r("v-col",[r("v-combobox",{attrs:{loading:t.loadingTo,"search-input":t.termTo,filled:"",rounded:"",items:t.items,label:t.$t("To"),clearable:"","clear-icon":"mdi-close-circle"},on:{"update:searchInput":function(e){t.termTo=e},"update:search-input":function(e){t.termTo=e}},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1)],1),t._v(" "),r("h3",[t._v("検索文字列")]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:7}},[r("v-text-field",{attrs:{loading:t.loadingFrom,"search-input":t.termFrom,filled:"",rounded:"",label:t.$t("検索文字列を入力してください。"),clearable:"","clear-icon":"mdi-close-circle"},on:{"update:searchInput":function(e){t.termFrom=e},"update:search-input":function(e){t.termFrom=e}},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:5}},[r("v-radio-group",{attrs:{row:""},model:{value:t.radios,callback:function(e){t.radios=e},expression:"radios"}},[r("v-radio",{attrs:{label:"and",value:"and"}}),t._v(" "),r("v-radio",{attrs:{label:"or",value:"or"}})],1)],1)],1),t._v(" "),r("h3",[t._v("検索対象")]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:2}},[r("v-row",[r("v-col",[r("v-checkbox",{attrs:{label:"すべて",value:"すべて"},model:{value:t.selected2,callback:function(e){t.selected2=e},expression:"selected2"}})],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:10}},[r("v-row",[r("v-col",[r("v-checkbox",{attrs:{label:"勘同目録・脚注",value:"勘同目録・脚注"},model:{value:t.selected3,callback:function(e){t.selected3=e},expression:"selected3"}})],1),t._v(" "),r("v-col",[r("v-checkbox",{attrs:{label:"テキスト",value:"テキスト"},model:{value:t.selected3,callback:function(e){t.selected3=e},expression:"selected3"}})],1),t._v(" "),r("v-col",[r("v-checkbox",{attrs:{label:"所蔵者",value:"所蔵者"},model:{value:t.selected3,callback:function(e){t.selected3=e},expression:"selected3"}})],1)],1),t._v(" "),r("v-row",[r("v-col",[r("v-checkbox",{attrs:{label:"底本",value:"底本"},model:{value:t.selected3,callback:function(e){t.selected3=e},expression:"selected3"}})],1),t._v(" "),r("v-col",[r("v-checkbox",{attrs:{label:"校本",value:"校本"},model:{value:t.selected3,callback:function(e){t.selected3=e},expression:"selected3"}})],1),t._v(" "),r("v-col",[r("v-checkbox",{attrs:{label:"校本なし",value:"校本なし"},model:{value:t.selected3,callback:function(e){t.selected3=e},expression:"selected3"}})],1)],1)],1)],1),t._v(" "),r("h3",[t._v("ソート")]),t._v(" "),r("v-radio-group",{attrs:{row:""},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}},[r("span",{staticClass:"mr-5"},[t._v("経典番号順")]),t._v(" "),r("v-radio",{attrs:{label:"昇順",value:"aaa:asc"}}),t._v(" "),r("v-radio",{attrs:{label:"降順",value:"aaa:desc"}}),t._v(" "),r("span",{staticClass:"ml-10 mr-5"},[t._v("配本順")]),t._v(" "),r("v-radio",{attrs:{label:"昇順",value:"bbb:asc"}}),t._v(" "),r("v-radio",{attrs:{label:"降順",value:"bbb:desc"}})],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",btn:""},on:{click:function(e){return t.advancedSearch()}}},[t._v(t._s(t.$t("search")))]),t._v(" "),r("v-btn",{attrs:{btn:""},on:{click:function(e){t.dialog=!1}}},[t._v(t._s(t.$t("close")))])],1)],1)],1)],1)}),[],!1,null,null,null),I=component.exports;j()(component,{VBtn:$.a,VCard:x.a,VCardActions:R.a,VCardText:R.b,VCardTitle:R.c,VCheckbox:F.a,VCol:C.a,VCombobox:S.a,VContainer:V.a,VDialog:P.a,VRadio:D.a,VRadioGroup:A.a,VRow:L.a,VSpacer:T.a,VTextField:z.a});function Q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var E=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},N=function(t){Object(l.a)(r,t);var e=Q(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).query=t.$store.state,t}return Object(c.a)(r,[{key:"removeKey",value:function(t,label){var data={label:label,value:[t]};this.$store.commit("removeKey",data),this.$router.push(this.localePath({name:"search",query:this.$utils.getSearchQueryFromQueryStore(this.$store.state)}),(function(){}),(function(){}))}},{key:"removeFc",value:function(label,t){this.$store.commit("removeFc",{label:label,values:t});var e=this.$utils.getSearchQueryFromQueryStore(this.$store.state);this.$router.push(this.localePath({name:"search",query:e}),(function(){}),(function(){}))}},{key:"filterShowFlag",get:function(){var t=!1,e=this.query;return(e.keyword.length>0||e.after.length>0||e.before.length>0||Object.keys(e.advanced).length>0)&&(t=!0),t}}]),r}(d.Vue),B=N=E([d.Component],N),W=r(403),K=r(401),U=Object(w.a)(B,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.filterShowFlag,expression:"filterShowFlag"}]},[r("v-divider"),t._v(" "),r("v-container",[r("span",{staticClass:"ma-1"},[t._v(t._s(t.$t("filter")))]),t._v(" "),t.query.keyword?t._l(t.query.keyword,(function(e,n){return r("v-chip",{key:n,staticClass:"ma-1",staticStyle:{"white-space":"normal","word-wrap":"break-word"},attrs:{close:"",color:"primary",label:"","text-color":"white"},on:{"click:close":function(r){return t.removeKey(e,"keyword")}}},[t._v("\n        "+t._s(t.$t("keyword"))+": "+t._s(e)+"\n      ")])})):t._e(),t._v(" "),t._l(t.query.advanced,(function(e,label){return[t._l(["+","-"],(function(n){return t._l(e[n],(function(e,o){return r("v-chip",{key:label+"-"+o,staticClass:"ma-1",staticStyle:{"white-space":"normal","word-wrap":"break-word"},attrs:{close:"",color:"primary",label:"","text-color":"white"},on:{"click:close":function(r){return t.removeFc(label,["+"===n?e:"-"+e])}}},[t._v("\n          "+t._s(t.$t(label.replace("fc-","").replace("q-","")))+":\n          "+t._s("+"===n?e:"-"+e)+"\n        ")])}))}))]})),t._v(" "),t.query.after?t._l(t.query.after,(function(e,n){return r("v-chip",{key:n,staticClass:"ma-1",staticStyle:{"white-space":"normal","word-wrap":"break-word"},attrs:{close:"",color:"primary",label:"","text-color":"white"},on:{"click:close":function(r){return t.removeKey(e,"after")}}},[t._v("\n        "+t._s(t.$t("after"))+": "+t._s(e)+"\n      ")])})):t._e(),t._v(" "),t.query.before?t._l(t.query.before,(function(e,n){return r("v-chip",{key:n,staticClass:"ma-1",staticStyle:{"white-space":"normal","word-wrap":"break-word"},attrs:{close:"",color:"primary",label:"","text-color":"white"},on:{"click:close":function(r){return t.removeKey(e,"before")}}},[t._v("\n        "+t._s(t.$t("before"))+": "+t._s(e)+"\n      ")])})):t._e()],2)],1)}),[],!1,null,null,null),J=U.exports;j()(U,{VChip:W.a,VContainer:V.a,VDivider:K.a});function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var G=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},M=r(459).a.Bar,Y=function(t){Object(l.a)(r,t);var e=H(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"watchTmp",value:function(){this.main()}},{key:"mounted",value:function(){this.main()}},{key:"main",value:function(){for(var t=this.buckets,e=[],r=[],i=0;i<t.length;i++){var n=t[i];e.push(n.key),r.push(n.doc_count)}var o={labels:e,datasets:[{data:r,label:""}]},c=this,l={maintainAspectRatio:!1,onClick:function(t,e){var r=c.$utils.getSearchQueryFromQueryStore(c.$store.state);console.log({evt:t});var label="fc-"+c.label,n=e[0]._model.label;r[label]||(r[label]=[]);var o=r[label];o.includes(n)||o.push(n),c.$router.push(c.localePath({name:"search",query:r}),(function(){}),(function(){}))}};this.renderChart(o,l)}}]),r}(Object(d.mixins)(M));G([Object(d.Prop)({default:[]})],Y.prototype,"buckets",void 0),G([Object(d.Prop)({default:""})],Y.prototype,"label",void 0),G([Object(d.Watch)("buckets",{deep:!0})],Y.prototype,"watchTmp",null);var X=Y=G([d.Component],Y),Z=Object(w.a)(X,void 0,void 0,!1,null,null,null).exports;function tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var et=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},at=function(t){Object(l.a)(r,t);var e=tt(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"aggregations",get:function(){return this.$store.state.result.aggregations}},{key:"facetLabels",get:function(){return this.$store.state.facetLabels}}]),r}(d.Vue),nt=at=et([Object(d.Component)({components:{Chart:Z}})],at),ot=Object(w.a)(nt,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.facetLabels,(function(e,label){return[t.aggregations[label]&&t.aggregations[label].buckets&&t.aggregations[label].buckets.length>0?r("v-card",{key:label,staticClass:"mb-10",attrs:{"no-body":""}},[r("v-card-title",{staticClass:"grey lighten-2"},[t._v(t._s(e.startsWith("_")?t.$t(e.slice(1)):t.$t(e)))]),t._v(" "),r("div",{staticClass:"pa-5"},[r("Chart",{staticClass:"mb-4",attrs:{height:200,label:label,buckets:t.aggregations[label].buckets}})],1)],1):t._e()]}))],2)}),[],!1,null,null,null),st=ot.exports;j()(ot,{VCard:x.a,VCardTitle:R.c});function ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var it=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},lt=function(t){Object(l.a)(r,t);var e=ct(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).uRenja="https://taishozo.github.io/u-renja",t}return Object(c.a)(r,[{key:"getUrl",value:function(t){for(var e="",i=0;i<t.length;i++)e+="&fc-通番="+t[i];return this.uRenja+"/search/?"+e.substring(1)}},{key:"results",get:function(){return this.$store.state.result.hits.hits}}]),r}(d.Vue),ut=lt=it([Object(d.Component)({components:{}})],lt),ft=r(448),vt=Object(w.a)(ut,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("table",{staticClass:"my-2",staticStyle:{"border-collapse":"collapse"},attrs:{border:"1",width:"100%"}},[r("tr",[r("th",{attrs:{colspan:"7"}},[t._v("\n        "+t._s("基本情報")+"\n      ")]),t._v(" "),r("th",{attrs:{colspan:"4"}},[t._v("\n        "+t._s("勘同目録")+"\n      ")]),t._v(" "),r("th",{attrs:{colspan:"4"}},[t._v("\n        "+t._s("脚注")+"\n      ")]),t._v(" "),r("th",{attrs:{rowspan:"2"}},[t._v("詳細情報")])]),t._v(" "),r("tr",[r("th",[t._v(t._s("経典番号"))]),t._v(" "),r("th",[t._v(t._s("枝番"))]),t._v(" "),r("th",[t._v(t._s("経典名"))]),t._v(" "),r("th",[t._v(t._s("収録巻次"))]),t._v(" "),r("th",[t._v(t._s("部門"))]),t._v(" "),r("th",[t._v(t._s("配本"))]),t._v(" "),r("th",[t._v(t._s("出版年月日"))]),t._v(" "),r("th",[t._v(t._s("底本/校本"))]),t._v(" "),r("th",[t._v(t._s("❹"))]),t._v(" "),r("th",[t._v(t._s("❼"))]),t._v(" "),r("th",[t._v(t._s("❼備考"))]),t._v(" "),r("th",[t._v(t._s("底本/校本"))]),t._v(" "),r("th",[t._v(t._s("新添部分"))]),t._v(" "),r("th",[t._v(t._s("テキスト"))]),t._v(" "),r("th",[t._v(t._s("備考"))])]),t._v(" "),t._l(t.results,(function(e,n){return r("tr",{key:n,staticClass:"text-center"},[r("td",{attrs:{width:"5%"}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["基-経典番号"]))+"\n      ")]),t._v(" "),r("td",{attrs:{width:"2%"}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["基-枝番"]))+"\n      ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{width:"10%"}},[r("a",{attrs:{href:"https://21dzk.l.u-tokyo.ac.jp/SAT2018/"+t.$utils.formatArrayValue(e._source.sat_id)+".html",target:"_blank"}},[t._v(t._s(t.$utils.formatArrayValue(e._source["基-経典名"])))])]),t._v(" "),r("td",{attrs:{width:"2%"}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["基-収録巻次"]))+"\n      ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{width:"5%"}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["基-部門"]))+"\n      ")]),t._v(" "),r("td",{attrs:{width:"2%"}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["基-配本"]))+"\n      ")]),t._v(" "),r("td",{attrs:{width:"5%"}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["基-年月日"]))+"\n      ")]),t._v(" "),r("td",{attrs:{width:"5%",bgcolor:"底本"==t.$utils.formatArrayValue(e._source["勘-底本/校本"])?"#BBDEFB":"校本"==t.$utils.formatArrayValue(e._source["勘-底本/校本"])?"#FFCDD2":""}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["勘-底本/校本"]))+"\n      ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{width:"10%"}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["勘-❹"]))+"\n      ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{width:"10%"}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["勘-❼"]))+"\n      ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{width:"10%"}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["勘-❼備考"]))+"\n      ")]),t._v(" "),r("td",{attrs:{width:"5%",bgcolor:"底本"==t.$utils.formatArrayValue(e._source["脚-底本/校本"])?"#BBDEFB":"校本"==t.$utils.formatArrayValue(e._source["脚-底本/校本"])?"#FFCDD2":""}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["脚-底本/校本"]))+"\n      ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{width:"5%"}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["脚-新添部分"]))+"\n      ")]),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{width:"10%"}},[e._source["酉目"]&&e._source["酉目"].length>0?[r("a",{attrs:{href:t.getUrl(e._source["酉目"]),target:"_blank"}},[t._v(t._s(t.$utils.formatArrayValue(e._source["脚-テキスト"])))])]:[t._v("\n          "+t._s(t.$utils.formatArrayValue(e._source["脚-テキスト"]))+"\n        ")],t._v(" "),e._source["酉蓮社本IIIコレクション_from"]?t._l(e._source["酉蓮社本IIIコレクション_from"],(function(n,o){return r("v-tooltip",{key:o,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(c){var l=c.on,f=c.attrs;return[r("a",t._g(t._b({attrs:{href:"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=https://d1av1vcgsldque.cloudfront.net/iiif/"+e._source["No."]+"/manifest.json&pos="+(1==o?5:n),target:"_blank"}},"a",f,!1),l),[r("img",{staticClass:"mr-1",attrs:{width:"30px",src:"https://pbs.twimg.com/profile_images/596366309601845248/2uaPY5NH.png"}})])]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(e._source["酉蓮社本IIIコレクション_経典名"][o]))])])})):t._e()],2),t._v(" "),r("td",{staticClass:"pl-1 text-left",attrs:{width:"10%"}},[t._v("\n        "+t._s(t.$utils.formatArrayValue(e._source["脚-備考"]))+"\n      ")]),t._v(" "),r("td",{attrs:{width:"5%"}},[r("nuxt-link",{attrs:{target:"_blank",to:t.localePath({name:"item-id",params:{id:("00000"+t.$utils.formatArrayValue(e._source["No."])).slice(-5)}})}},[t._v(t._s("more")+"\n        ")])],1)])}))],2)])}),[],!1,null,null,null),ht=vt.exports;function pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}j()(vt,{VTooltip:ft.a});var mt=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},yt=function(t){Object(l.a)(r,t);var e=pt(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"layoutOption",get:function(){return this.$store.state.layout}}]),r}(d.Vue),_t=yt=mt([Object(d.Component)({components:{TableSearchResult:ht,StatsSearchResult:st}})],yt),bt=Object(w.a)(_t,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["stats"===this.layoutOption?[e("StatsSearchResult")]:[e("TableSearchResult")]],2)}),[],!1,null,null,null).exports;function gt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var kt=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},wt=function(t){Object(l.a)(r,t);var e=gt(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).limit=-1,t.values=[],t.openFlag=!!(t.$store.state.facetFlags[t.term]||t.getArray("-").length>0||t.getArray("+").length>0),t}return Object(c.a)(r,[{key:"created",value:function(){this.main()}},{key:"watchBuckets",value:function(){this.main()}},{key:"main",value:function(){for(var t=[],i=0;i<this.buckets.length;i++){var e=this.buckets[i];t.push(this.checked("fc-"+this.term,e.key))}this.values=t}},{key:"changeFacetFlags",value:function(){this.$store.commit("changeFacetFlags",{label:this.term,value:!this.openFlag}),this.openFlag=!this.openFlag}},{key:"getArray",value:function(t){var label="fc-"+this.term;return this.$store.state.advanced&&this.$store.state.advanced[label]?this.$store.state.advanced[label][t]:[]}},{key:"change",value:function(label,t){var e=this.$store.state.advanced[label];e&&e["+"].includes(t)?this.$store.commit("removeFc",{label:label,values:[t]}):this.$store.commit("setFc",{label:label,values:[t]})}},{key:"remove",value:function(data){this.$store.commit("setFc",data),this.updateQuery()}},{key:"add",value:function(data){this.$store.commit("removeFc",data),this.updateQuery()}},{key:"updateQuery",value:function(){var t=this.$utils.getSearchQueryFromQueryStore(this.$store.state);t.from=0,this.$router.push(this.localePath({name:"search",query:t}),(function(){}),(function(){}))}},{key:"checked",value:function(label,t){var e=this.$store.state.advanced[label];return!(!e||!e["+"].includes(t))}},{key:"facetFlags",get:function(){return this.$store.state.facetFlags}},{key:"message",get:function(){var t=this.buckets.length,e="",r="ja"===this.$i18n.locale?"件":"";return t===this.limit&&(e="ja"===this.$i18n.locale?"上位":"Top "),e+t.toLocaleString()+r}}]),r}(d.Vue);kt([Object(d.Prop)({default:"",required:!0})],wt.prototype,"label",void 0),kt([Object(d.Prop)({default:"",required:!0})],wt.prototype,"term",void 0),kt([Object(d.Prop)({required:!0,default:function(){return[]}})],wt.prototype,"buckets",void 0),kt([Object(d.Watch)("buckets")],wt.prototype,"watchBuckets",null);var Ot=wt=kt([d.Component],wt),jt=(r(449),r(468)),$t=r(469),xt=r(470),Rt=r(471),Ft=r(143),Ct=r(144),St=r(93),Vt=r(145),Pt=r(99),Dt=Object(w.a)(Ot,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.buckets.length>0||t.getArray("-").length>0?r("v-expansion-panels",{attrs:{value:t.openFlag?0:null}},[r("v-expansion-panel",[r("v-expansion-panel-header",{staticClass:"grey lighten-2"},[r("h3",[t._v("\n        "+t._s(t.label.startsWith("_")?t.$t(t.label.slice(1)):t.$t(t.label))+"\n        "),r("small",[t._v("("+t._s(t.message)+")")])])]),t._v(" "),r("v-expansion-panel-content",[r("v-list",{attrs:{dense:""}},[r("div",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"400px"}},[t._l(t.buckets,(function(e,n){return[r("v-list-item",{key:"bucket_"+n},[r("v-list-item-content",{staticClass:"my-0 py-0",staticStyle:{"word-break":"break-word"}},[r("v-checkbox",{staticClass:"mb-0 mt-1 ml-1 py-0",attrs:{align:"center",dense:"","x-small":"",color:"primary",label:"jp"==t.term?t.$t(e.key):e.key},on:{change:function(r){return t.change("fc-"+t.term,e.key)}},model:{value:t.values[n],callback:function(e){t.$set(t.values,n,e)},expression:"values[index]"}})],1),t._v(" "),r("v-list-item-action",{staticClass:"my-0 py-0"},[t._v(t._s(e.doc_count.toLocaleString()))]),t._v(" "),r("v-list-item-action",{staticClass:"my-0 py-0"},[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.values[n],expression:"!values[index]"}],attrs:{icon:"","x-small":""},on:{click:function(r){return t.remove({label:"fc-"+t.term,values:["-"+e.key],type:"fc"})}}},[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-close-circle")])],1)],1)],1),t._v(" "),r("v-divider",{key:"divider-"+n})]}))],2),t._v(" "),t._l(t.getArray("-"),(function(e,n){return[r("v-divider",{key:"divider-not-"+n}),t._v(" "),r("v-list-item",{key:n,on:{click:function(r){return t.add({label:"fc-"+t.term,values:["-"+e],type:"fc"})}}},[r("v-list-item-action",[r("v-icon",{attrs:{color:"red darken-3"}},[t._v("mdi-minus-box")])],1),t._v(" "),r("v-list-item-content",[t._v("\n              "+t._s("jp"==t.term?t.$t(e):e)+"\n            ")])],1),t._v(" "),r("v-divider",{key:"divider-not-"+n})]})),t._v(" "),r("v-list-item",[r("v-list-item-action",[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.updateQuery()}}},[t._v(t._s(t.$t("update")))])],1)],1)],2)],1)],1)],1):t._e()}),[],!1,null,null,null),qt=Dt.exports;function At(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}j()(Dt,{VBtn:$.a,VCheckbox:F.a,VDivider:K.a,VExpansionPanel:jt.a,VExpansionPanelContent:$t.a,VExpansionPanelHeader:xt.a,VExpansionPanels:Rt.a,VIcon:Ft.a,VList:Ct.a,VListItem:St.a,VListItemAction:Vt.a,VListItemContent:Pt.a});var Lt=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},Tt=function(t){Object(l.a)(r,t);var e=At(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"aggregations",get:function(){return this.$store.state.result.aggregations}},{key:"facetLabels",get:function(){return this.$store.state.facetLabels}},{key:"query",get:function(){return this.$store.state.query}}]),r}(d.Vue),zt=Tt=Lt([Object(d.Component)({components:{FacetOption:qt}})],Tt),It=Object(w.a)(zt,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.facetLabels,(function(label,e){return[t.aggregations[e]?r("FacetOption",{key:e,staticClass:"mb-5",attrs:{term:e,label:label,buckets:t.aggregations[e].buckets,query:t.query}}):t._e()]}))],2)}),[],!1,null,null,null).exports;function Qt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var Et=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},Nt=function(t){Object(l.a)(f,t);var e,r=Qt(f);function f(){var t;return Object(o.a)(this,f),(t=r.apply(this,arguments)).loadingFlag=!1,t.sortLabelsTmp=void 0,t.itemsSort=JSON.parse(t.sortLabelsTmp),t}return Object(c.a)(f,[{key:"fetch",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,l,f,v,h,d,m,y,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,null!=(n=r.state).index){t.next=9;break}return t.next=6,e.app.$searchUtils.createIndexFromArray(void 0+"/index.json");case 6:o=t.sent,r.commit("setIndex",o.index),r.commit("setData",o.data);case 9:for(h in Object.keys(n.facetLabels)&&(r.commit("setFacetLabels",JSON.parse(void 0)),r.commit("setFacetFlags",JSON.parse(void 0))),c=e.query,l=e.app.$searchUtils.createQuery(c,n),r.commit("setQuery",l),f=e.app.$searchUtils.search(r.state.index,r.state.data,r.state.query),console.log({result:f,esQuery:l}),e.store.commit("setResult",f),r.commit("init"),(v=c.keyword)&&r.commit("setKeyword",v),c)h.includes("fc-")&&r.commit("setFc",{label:h,values:c[h]});(d=c.sort)&&r.commit("setSort",d),(m=c.from)&&r.commit("setFrom",Number(m)),(y=c.size)&&r.commit("setSize",Number(y)),_=n.from/n.size+1,r.commit("setCurrentPage",_),window.scrollTo(0,0);case 29:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})},{key:"watchLayout",value:function(t){("image"!==t&&"stats"!==t||!this.facetFlag)&&("image"===t||"stats"===t||this.facetFlag)||(this.facetFlag=!this.facetFlag)}},{key:"setCurrentPage",value:function(){if(this.currentPage>0){var t=Object.assign({},this.$route.query);t.from=(this.currentPage-1)*this.size,this.updateQuery(t)}}},{key:"setSize",value:function(){var t=Object.assign({},this.$route.query);t.from=0,t.size=this.size,this.updateQuery(t)}},{key:"setSort",value:function(){var t=Object.assign({},this.$route.query);t.from=0,t.sort=this.sort,this.updateQuery(t)}},{key:"updateQuery",value:function(t){this.$router.push(this.localePath({name:"search",query:t}),(function(){}),(function(){}))}},{key:"results",get:function(){return this.$store.state.result.hits.hits}},{key:"layouts",get:function(){return[{value:"table",text:this.$t("table")},{value:"stats",text:this.$t("graph")}]}},{key:"currentPage",get:function(){return this.$store.state.currentPage},set:function(t){this.$store.commit("setCurrentPage",t)}},{key:"layout_",get:function(){return this.$store.state.layout},set:function(t){this.$store.commit("setLayout",t)}},{key:"size",get:function(){return this.$store.state.size},set:function(t){this.$store.commit("setSize",t)}},{key:"sort",get:function(){return this.$store.state.sort},set:function(t){this.$store.commit("setSort",t)}},{key:"facetFlag",get:function(){return this.$store.state.facetFlag},set:function(t){this.$store.commit("setFacetFlag",t)}},{key:"total",get:function(){var t=this.$store.state.result;return t.hits?t.hits.total.value:0}},{key:"paginationLength",get:function(){return Math.ceil(this.total/this.size)}},{key:"computedItemsSort",get:function(){var t=[];console.log(this.sort);for(var e=["asc","desc"],r=this.itemsSort,i=0;i<r.length;i++){for(var n=r[i],o=0;o<e.length;o++){var c=e[o],label=n.startsWith("_")?this.$t(n.slice(1)):n;t.push({value:n+".keyword:"+c,text:label+" "+this.$t(c)})}0===i&&null==this.sort&&(this.sort=n+".keyword:asc")}return t}}]),f}(d.Vue);Et([Object(d.Watch)("layout_")],Nt.prototype,"watchLayout",null);var Bt=Nt=Et([Object(d.Component)({components:{SearchForm:I,SearchFilter:J,FacetSearchOptions:It,SearchResult:bt},watchQuery:!0})],Nt),Wt=r(472),Kt=r(406),Ut=Object(w.a)(Bt,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("SearchForm"),t._v(" "),r("div",{staticStyle:{"background-color":"#eeeeee"}},[r("v-container",{staticClass:"pt-5"},[r("v-row",{attrs:{"no-gutters":"",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"5"}},[r("h3",{staticClass:"my-5"},[t._v(t._s(t.total.toLocaleString())+t._s(t.$t("hits")))])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"7"}},[r("v-row",{attrs:{dense:""}},[[r("v-col",{attrs:{cols:"12",sm:"3"}},[r("v-select",{attrs:{items:t.computedItemsSort,label:t.$t("Sort by")},on:{change:t.setSort},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"3",dense:""}},[r("v-select",{attrs:{items:[{value:20,text:"20"},{value:50,text:"50"},{value:100,text:"100"},{value:500,text:"500"}],label:t.$t("items_per_page")},on:{change:t.setSize},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"3"}},[r("v-select",{attrs:{items:t.layouts,label:t.$t("layout")},model:{value:t.layout_,callback:function(e){t.layout_=e},expression:"layout_"}})],1)]],2)],1)],1)],1),t._v(" "),r("SearchFilter")],1),t._v(" "),r("v-container",{directives:[{name:"show",rawName:"v-show",value:!t.loadingFlag,expression:"!loadingFlag"}],staticClass:"mt-5"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:t.facetFlag?8:12,"order-sm":"12"}},[r("h3",{staticClass:"mb-5"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("i",t._g({directives:[{name:"show",rawName:"v-show",value:!t.facetFlag,expression:"!facetFlag"}],staticClass:"far fa-caret-square-right mr-2",staticStyle:{cursor:"pointer"},on:{click:function(e){t.facetFlag=!t.facetFlag}}},n))]}}])},[t._v(" "),r("span",[t._v(t._s(t.$t("open_facets")))])]),t._v("\n          "+t._s(t.$t("search_result"))+"\n        ")],1),t._v(" "),t.total>0?[r("div",{staticClass:"text-center my-5"},[r("v-pagination",{directives:[{name:"show",rawName:"v-show",value:"stats"!==t.layout_&&"map"!==t.layout_,expression:"layout_ !== 'stats' && layout_ !== 'map'"}],attrs:{length:t.paginationLength,"total-visible":7},on:{input:t.setCurrentPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),r("SearchResult"),t._v(" "),r("div",{staticClass:"text-center my-5"},[r("v-pagination",{directives:[{name:"show",rawName:"v-show",value:"stats"!==t.layout_&&"map"!==t.layout_,expression:"layout_ !== 'stats' && layout_ !== 'map'"}],attrs:{length:t.paginationLength,"total-visible":7},on:{input:t.setCurrentPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]:t._e()],2),t._v(" "),r("v-col",{directives:[{name:"show",rawName:"v-show",value:t.facetFlag,expression:"facetFlag"}],attrs:{sm:4,"order-sm":"1"}},[t.total>0?[r("h3",{staticClass:"mb-5"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("i",t._g({directives:[{name:"show",rawName:"v-show",value:t.facetFlag,expression:"facetFlag"}],staticClass:"far fa-caret-square-left mr-2",staticStyle:{cursor:"pointer"},on:{click:function(e){t.facetFlag=!t.facetFlag}}},n))]}}],null,!1,2039314308)},[t._v(" "),r("span",[t._v(t._s(t.$t("close_facets")))])]),t._v("\n            "+t._s(t.$t("refine_your_search"))+"\n          ")],1),t._v(" "),r("FacetSearchOptions")]:t._e()],2)],1)],1)],1)}),[],!1,null,null,null);e.default=Ut.exports;j()(Ut,{VCol:C.a,VContainer:V.a,VPagination:Wt.a,VRow:L.a,VSelect:Kt.a,VTooltip:ft.a})}}]);