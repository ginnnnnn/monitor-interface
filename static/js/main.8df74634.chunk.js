(this.webpackJsonpmyiot=this.webpackJsonpmyiot||[]).push([[0],{158:function(e,t,a){e.exports=a.p+"static/media/yellow.18797685.png"},159:function(e,t,a){e.exports=a.p+"static/media/lightgreen.78131d20.png"},160:function(e,t,a){e.exports=a.p+"static/media/red.63226b2b.png"},161:function(e,t,a){e.exports=a.p+"static/media/grey.3f5d2d9c.png"},162:function(e,t,a){e.exports=a.p+"static/media/green.e4e17521.png"},163:function(e,t,a){e.exports=a.p+"static/media/cross.791abe0a.png"},197:function(e,t,a){e.exports=a(393)},202:function(e,t,a){},389:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){},393:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(68),r=a.n(c),i=(a(202),a(33)),m=a(158),s=a.n(m),o=a(159),d=a.n(o),u=a(160),E=a.n(u),C=a(161),p=a.n(C),v=a(162),g=a.n(v),_=a(163),f=a.n(_),y=Object(i.f)((function(e){var t=e.title,a=e.databaseArr,n=e.history,c=function(){n.push("/overview")};return l.a.createElement(l.a.Fragment,null,a.map((function(e,a){var n=("0"+(a+1)).slice(-2);return"normal"===e?l.a.createElement("div",{onClick:c,key:e+a,className:"Section-line__Container"},l.a.createElement("img",{alt:"boxes",className:"Section-line__img",src:g.a}),l.a.createElement("div",{className:"Section-line__description"},t,n)):"warning"===e?l.a.createElement("div",{onClick:c,key:e+a,className:"Section-line__Container"},l.a.createElement("img",{alt:"boxes",className:"Section-line__img",src:E.a}),l.a.createElement("div",{className:"Section-line__description"},t,n)):"supply"===e?l.a.createElement("div",{onClick:c,key:e+a,className:"Section-line__Container"},l.a.createElement("img",{alt:"boxes",className:"Section-line__img",src:d.a}),l.a.createElement("div",{className:"Section-line__description"},t,n)):"warming"===e?l.a.createElement("div",{onClick:c,key:e+a,className:"Section-line__Container"},l.a.createElement("img",{alt:"boxes",className:"Section-line__img",src:s.a}),l.a.createElement("div",{className:"Section-line__description"},t,n)):"sleep"===e?l.a.createElement("div",{onClick:c,key:e+a,className:"Section-line__Container"},l.a.createElement("img",{alt:"boxes",className:"Section-line__img",src:f.a}),l.a.createElement("div",{className:"Section-line__description"})):l.a.createElement("div",{onClick:c,key:e+a,className:"Section-line__Container"},l.a.createElement("img",{alt:"boxes",className:"Section-line__img",src:p.a}),l.a.createElement("div",{className:"Section-line__description"},t,n))})))})),N=a(177),h=a.n(N),M=a(22),b=a(14),k=a(23),P=a(24),S=a(25),w=a(7),j=["#00BC49","#F1BF17","#FDF100","#DE1A22"],O=function(e){function t(){return Object(M.a)(this,t),Object(k.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.database,t=Object.keys(e).reduce((function(t,a){return t=t.concat(e[a])}),[]),a=t.filter((function(e){return"normal"===e})).length,n=t.filter((function(e){return"supply"===e})).length,c=t.filter((function(e){return"warming"===e})).length,r=t.filter((function(e){return"warning"===e})).length,i=(t.filter((function(e){return"sleep"!==e})).length,[{name:"\u6b63\u5e38",value:a},{name:"\u88dc\u6599",value:n},{name:"\u6696\u6a5f",value:c},{name:"\u544a\u8b66",value:r}]);return l.a.createElement(w.j,{width:400,height:230},l.a.createElement(w.i,{data:i,cx:200,cy:115,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value"},i.map((function(e,t){return l.a.createElement(w.e,{key:"cell-".concat(t),fill:j[t%j.length]})}))),l.a.createElement(w.k,null))}}]),t}(n.PureComponent);O.jsfiddleUrl="https://jsfiddle.net/alidingling/c9pL8k61/";var R=function(e){var t=e.styleKey,a=e.title,n=e.ratio;return l.a.createElement("div",{className:"Conclution-div"},l.a.createElement("div",{className:"Conclution-block Conclution-div__".concat(t)},n),a)},D=[{msg:"A05 12004(D4)\u5200\u88dc\u4f4d\u5f85\u88dc",date:"2019-08-07- 10:06:15"},{msg:"A06 12005(D5)\u5200\u88dc\u4f4d\u5f85\u88dc",date:"2019-09-07- 10:06:15"},{msg:"C05 12006(C4)\u5200\u88dc\u4f4d\u5f85\u88dc",date:"2019-08-07- 10:06:15"}],B={A:["normal","warming","supply","warning","normal","normal","sleep","normal","normal","normal"],B:["normal","normal","normal","normal","sleep","warming","warming","supply","normal","normal"],C:["supply","warning","normal","normal","normal","warming","normal","normal","sleep","normal"],D:["normal","normal","sleep","normal","warming","normal","supply","warning","normal","normal"],E:["normal","normal","warning","supply","supply","warning","normal","normal","sleep","normal"]},A=function(){var e=Object.keys(B).reduce((function(e,t){return e=e.concat(B[t])}),[]),t=e.filter((function(e){return"normal"===e})).length,a=e.filter((function(e){return"supply"===e})).length,n=e.filter((function(e){return"warming"===e})).length,c=e.filter((function(e){return"warning"===e})).length,r=e.length;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App-title"},"\u5de5\u696d\u4e92\u806f\u7db2\u5e73\u53f0\u4ecb\u9762 "),l.a.createElement("div",{className:"InterFace"},l.a.createElement("div",{className:"Display"},l.a.createElement("div",{className:"Display-section1"},l.a.createElement("div",{className:"Section-title"},"\u5de5\u5ee0\u5165\u53e3"),l.a.createElement("div",{className:"Section-line"},l.a.createElement("div",{className:"Section-line__title"},"A\u7dda"),l.a.createElement(y,{title:"A",databaseArr:B.A})),l.a.createElement("div",{className:"Section-line"},l.a.createElement("div",{className:"Section-line__title"},"B\u7dda"),l.a.createElement(y,{title:"B",databaseArr:B.B})),l.a.createElement("div",{className:"Section-line"},l.a.createElement("div",{className:"Section-line__title"},"C\u7dda"),l.a.createElement(y,{title:"C",databaseArr:B.C})),l.a.createElement("div",{className:"Section-title"},"MODE \u5340"),l.a.createElement("div",{className:"Section-line"},l.a.createElement("div",{className:"Section-line__title"},"D\u7dda"),l.a.createElement(y,{title:"D",databaseArr:B.D})),l.a.createElement("div",{className:"Section-line"},l.a.createElement("div",{className:"Section-line__title"},"E\u7dda"),l.a.createElement(y,{title:"E",databaseArr:B.E}))),l.a.createElement("div",{className:"Display-section2"},l.a.createElement("div",{className:"Display-section2__margin"}),l.a.createElement("div",{className:"Display-section2__warning"},l.a.createElement("div",{className:"Display-section2__warning-pannel"},D.map((function(e,t){var a=e.msg,n=e.date;return l.a.createElement("div",{key:a+t,className:"warning-description-container"},l.a.createElement(h.a,{color:"error"}),l.a.createElement("div",{className:"warning-description"},l.a.createElement("div",null,a),l.a.createElement("div",null,n)))})))),l.a.createElement("div",{className:"Display-section2__pie"},l.a.createElement("div",{className:"Pie-container"}),l.a.createElement(O,{database:B})))),l.a.createElement("div",{className:"Conclution"},l.a.createElement(R,{styleKey:"normal",title:"\u6b63\u5e38",ratio:"".concat(t,"/").concat(r)}),l.a.createElement(R,{styleKey:"warming",title:"\u6696\u6a5f",ratio:"".concat(n,"/").concat(r)}),l.a.createElement(R,{styleKey:"supply",title:"\u88dc\u6599",ratio:"".concat(a,"/").concat(r)}),l.a.createElement(R,{styleKey:"warning",title:"\u544a\u8b66",ratio:"".concat(c,"/").concat(r)}),l.a.createElement(R,{styleKey:"percentage",title:"\u7a3c\u52d5\u7387",ratio:(t/r*100).toFixed(0)+"%"}))))},x=(a(389),["#ffff00","#111111"]),F=function(e){function t(){return Object(M.a)(this,t),Object(k.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.t1,a=e.t2,n=e.t3,c=e.t4,r=e.percent,i=[{name:"Group A",value:r},{name:"Group D",value:100-r}];return l.a.createElement("div",{className:"PrograssPie-Container"},l.a.createElement("div",{onClick:this.props.handlePush,className:"PrograssPie-title"},t),l.a.createElement("div",{className:"PrograssPie-innerTitle"},l.a.createElement("div",{className:"PrograssPie-innerTitle__part1"},a),l.a.createElement("div",{className:"PrograssPie-innerTitle__part2"},n),l.a.createElement("div",{className:"PrograssPie-innerTitle__part3"},c)),l.a.createElement(w.j,{width:360,height:180,onMouseEnter:this.onPieEnter},l.a.createElement(w.i,{data:i,cx:180,cy:100,startAngle:210,endAngle:-30,innerRadius:70,outerRadius:90,fill:"#8884d8",paddingAngle:0,dataKey:"value",stroke:"#2d3b4b"},i.map((function(e,t){return l.a.createElement(w.e,{key:"cell-".concat(t),fill:x[t%x.length]})})))))}}]),t}(n.PureComponent),K=a(9),T=["#ffff00","#EEEEEE","#FF725C","#777777"],I=[{name:"\u65b7\u8a0a",value:.02},{name:"\u7570\u5e38",value:.03},{name:"\u5f85\u6599",value:.05},{name:"\u751f\u7522",value:1}],L=function(e){var t,a=e.midAngle,n=e.x,c=e.y,r=e.name,i=e.value,m=Object(K.a)(e,["midAngle","x","y","name","value"]);return console.log(m),t=a>90&&a<270,l.a.createElement("text",{x:t?n-90:n+10,y:c+5,fill:"white"},r,": ",i," (Hr)")},G=function(e){function t(){return Object(M.a)(this,t),Object(k.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return l.a.createElement(w.j,{width:500,height:300},l.a.createElement(w.i,{data:I,dataKey:"value",cx:250,cy:150,outerRadius:80,fill:"#82ca9d",label:L},I.map((function(e,t){return l.a.createElement(w.e,{key:"cell-".concat(t),fill:T[t%T.length]})}))))}}]),t}(n.PureComponent),J=[{name:"M4","\u5373\u6642":590,Pareta:800,amt:1400},{name:"M3","\u5373\u6642":868,Pareta:967,amt:1506},{name:"M5","\u5373\u6642":1397,Pareta:1098,amt:989},{name:"M6","\u5373\u6642":1480,Pareta:1200,amt:1228},{name:"M7","\u5373\u6642":1520,Pareta:1108,amt:1100},{name:"M1","\u5373\u6642":1400,Pareta:680,amt:1700},{name:"M2","\u5373\u6642":1400,Pareta:680,amt:1700}],U=function(e){function t(){return Object(M.a)(this,t),Object(k.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return l.a.createElement(w.f,{width:450,height:250,data:J,margin:{top:20,right:20,bottom:0,left:0}},l.a.createElement(w.l,{dataKey:"name",padding:{left:20,right:20}}),l.a.createElement(w.m,null),l.a.createElement(w.k,null),l.a.createElement(w.g,null),l.a.createElement(w.d,{stroke:"#f5f5f5"}),l.a.createElement(w.c,{dataKey:"Pareta",barSize:20,fill:"#413ea0"}),l.a.createElement(w.h,{type:"monotone",dataKey:"\u5373\u6642",stroke:"#ff7300"}))}}]),t}(n.PureComponent),W=[{name:"10/21",M1:4e3,M2:2400,M3:2400,M4:3200,M5:1900,M6:3300,M7:2280},{name:"10/20",M1:3e3,M2:1398,M3:2210,M4:1200,M5:4100,M6:5300,M7:2810},{name:"10/19",M1:2e3,M2:9800,M3:2290,M4:3230,M5:1100,M6:6300,M7:4880},{name:"10/18",M1:2780,M2:3908,M3:2e3,M4:1200,M5:3100,M6:2330,M7:2180},{name:"10/17",M1:1890,M2:4800,M3:2181,M4:2300,M5:3300,M6:1800,M7:1080},{name:"10/16",M1:2390,M2:3800,M3:2500,M4:3330,M5:2150,M6:2300,M7:3880},{name:"10/15",M1:3490,M2:4300,M3:2100,M4:2560,M5:3010,M6:2380,M7:2880}],q=function(e){function t(){return Object(M.a)(this,t),Object(k.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return l.a.createElement(w.b,{width:450,height:250,data:W,margin:{top:10,right:30,left:0,bottom:0}},l.a.createElement(w.d,{strokeDasharray:"3 3"}),l.a.createElement(w.l,{dataKey:"name",padding:{left:20,right:20}}),l.a.createElement(w.m,null),l.a.createElement(w.k,null),l.a.createElement(w.a,{type:"monotone",dataKey:"M1",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),l.a.createElement(w.a,{type:"monotone",dataKey:"M2",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),l.a.createElement(w.a,{type:"monotone",dataKey:"M3",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),l.a.createElement(w.a,{type:"monotone",dataKey:"M4",stackId:"1",stroke:"#FF725C",fill:"#FF725C"}),l.a.createElement(w.a,{type:"monotone",dataKey:"M5",stackId:"1",stroke:"#5E2CA5",fill:"#5E2CA5"}),l.a.createElement(w.a,{type:"monotone",dataKey:"M6",stackId:"1",stroke:"#FF80CC",fill:"#FF80CC"}),l.a.createElement(w.a,{type:"monotone",dataKey:"M7",stackId:"1",stroke:"#96CCFF",fill:"#96CCFF"}),l.a.createElement(w.g,null))}}]),t}(n.PureComponent);q.jsfiddleUrl="https://jsfiddle.net/alidingling/c1rLyqj1/";a(390);var z=[{C1:"\u6771\u5178",C2:"M1",C3:"1BTD2040-07-10",C4:"\u65b7\u8a0a",C5:23,C6:"1.15%",C7:"1.000",C8:"0.100",C9:"99.58%",C10:"\u9580\u7a97\u672a\u95dc"},{C1:"\u6771\u5178",C2:"M2",C3:"",C4:"\u7570\u5e38",C5:23,C6:"1.15%",C7:"1.000",C8:"0.100",C9:"99.58%",C10:""},{C1:"\u6771\u5178",C2:"M3",C3:"1BTD2040-07-10",C4:"\u6696\u6a5f",C5:23,C6:"1.15%",C7:"1.000",C8:"0.100",C9:"99.58%",C10:""},{C1:"\u6771\u5178",C2:"M4",C3:"1BTD2040-07-10",C4:"\u88dc\u6599",C5:23,C6:"1.15%",C7:"1.000",C8:"0.100",C9:"99.58%",C10:""},{C1:"\u6771\u5178",C2:"M5",C3:"1BTD2040-07-10",C4:"\u6b63\u5e38",C5:23,C6:"1.15%",C7:"1.000",C8:"0.100",C9:"99.58%",C10:""},{C1:"\u6771\u5178",C2:"M6",C3:"1BTD2040-07-10",C4:"\u6b63\u5e38",C5:23,C6:"1.15%",C7:"1.000",C8:"0.100",C9:"99.58%",C10:""},{C1:"\u6771\u5178",C2:"M7",C3:"1BTD2040-07-10",C4:"\u6b63\u5e38",C5:23,C6:"1.15%",C7:"1.000",C8:"0.100",C9:"99.58%",C10:""},{C1:"\u6771\u5178",C2:"M8",C3:"1BTD2040-07-10",C4:"\u6b63\u5e38",C5:23,C6:"1.15%",C7:"1.000",C8:"0.100",C9:"99.58%",C10:""},{C1:"\u6771\u5178",C2:"M9",C3:"1BTD2040-07-10",C4:"\u6b63\u5e38",C5:23,C6:"1.15%",C7:"1.000",C8:"0.100",C9:"99.58%",C10:""}],H=function(){return l.a.createElement("div",{className:"Realtime-container"},l.a.createElement("div",{className:"Realtime-title"},"\u5404\u6a5f\u53f0\u5373\u6642\u8cc7\u8a0a"),l.a.createElement("div",{className:"Realtime-content"},l.a.createElement("div",{className:"Realtime-content__titleList"},l.a.createElement("div",{className:"Realtime-content__title1"},"\u5ee0\u5225"),l.a.createElement("div",{className:"Realtime-content__title2"},"\u6a5f\u53f0\u5225"),l.a.createElement("div",{className:"Realtime-content__title3"},"\u6599\u865f"),l.a.createElement("div",{className:"Realtime-content__title4"},"\u72c0\u614b"),l.a.createElement("div",{className:"Realtime-content__title5"},"\u7522\u91cf"),l.a.createElement("div",{className:"Realtime-content__title6"},"\u7522\u91cf\u9054\u6210\u7387"),l.a.createElement("div",{className:"Realtime-content__title7"},"\u751f\u7522\u6642\u9593"),l.a.createElement("div",{className:"Realtime-content__title8"},"\u975e\u751f\u7522\u6642\u9593"),l.a.createElement("div",{className:"Realtime-content__title9"},"\u7a3c\u52d5\u7387"),l.a.createElement("div",{className:"Realtime-content__title10"},"\u8b66\u5831\u8cc7\u8a0a")),z.map((function(e){var t=e.C1,a=e.C2,n=e.C3,c=e.C4,r=e.C5,i=e.C6,m=e.C7,s=e.C8,o=e.C9,d=e.C10;return l.a.createElement("div",{className:"Realtime-content__contentList"},l.a.createElement("div",{className:"Realtime-content__1"},t),l.a.createElement("div",{className:"Realtime-content__2"},a),l.a.createElement("div",{className:"Realtime-content__3"},n),l.a.createElement("div",{className:"Realtime-content__4"},c),l.a.createElement("div",{className:"Realtime-content__5"},r),l.a.createElement("div",{className:"Realtime-content__6"},i),l.a.createElement("div",{className:"Realtime-content__7"},m),l.a.createElement("div",{className:"Realtime-content__8"},s),l.a.createElement("div",{className:"Realtime-content__9"},o),l.a.createElement("div",{className:"Realtime-content__10"},d))}))))},$=Object(i.f)((function(e){var t=e.history,a=function(){t.push("/")};return l.a.createElement("div",{className:"SecondPageContainer"},l.a.createElement("div",{className:"SecondPagePrograssBar-section1"},l.a.createElement(F,{t1:"\u8a2d\u5099\u5373\u6642\u7a3c\u52d5\u7387",t2:"99.58%",t3:"\u751f\u7522\u6642\u6578",t4:"1",percent:99.58,handlePush:a}),l.a.createElement(F,{t1:"\u4eca\u65e5\u7522\u91cf\u9054\u6210\u7387(\u76ee\u6a19\u503c:14000)",t2:"1.16%",t3:"\u76ee\u524d\u7522\u91cf",t4:"162",percent:1.16,handlePush:a}),l.a.createElement(F,{t1:"\u5de1\u6aa2NG\u7387",t2:"33.33%",t3:"\u5de1\u6aa2NG\u7387",t4:"1",percent:33.33,handlePush:a}),l.a.createElement(F,{t1:"\u76ee\u524d\u5de1\u6aa2\u7387(\u76ee\u6a19\u503c:500)",t2:"0.6%",t3:"\u76ee\u524d\u5de1\u6aa2\u7387",t4:"3",percent:.6,handlePush:a})),l.a.createElement("div",{className:"SecondPagePrograssBar-section2"},l.a.createElement("div",{className:"SecondPagePrograssBar-section2__part"},l.a.createElement("div",{onClick:a,className:"SecondPagePrograssBar-section2__part-title"},"\u6a5f\u53f0\u5373\u6642\u72c0\u6cc1\u6642\u6578\u5206\u4f48\u5716"),l.a.createElement(G,null)),l.a.createElement("div",{className:"SecondPagePrograssBar-section2__part"},l.a.createElement("div",{onClick:a,className:"SecondPagePrograssBar-section2__part-title"},"\u4eca\u65e5\u6a5f\u53f0\u6545\u969c\u6642\u6578"),l.a.createElement(U,null)),l.a.createElement("div",{className:"SecondPagePrograssBar-section2__part"},l.a.createElement("div",{onClick:a,className:"SecondPagePrograssBar-section2__part-title"},"\u6a5f\u53f0\u6545\u969c\u6b21\u6578\u5c65\u6b77"),l.a.createElement(q,null))),l.a.createElement("div",{className:"SecondPagePrograssBar-realtime"},l.a.createElement(H,null)))}));a(391);var Q=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/overview",component:$}),l.a.createElement(i.a,{path:"/",component:A})))},V=a(51);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(V.a,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[197,1,2]]]);
//# sourceMappingURL=main.8df74634.chunk.js.map