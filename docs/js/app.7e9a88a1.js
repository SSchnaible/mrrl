(function(t){function e(e){for(var o,a,l=e[0],u=e[1],m=e[2],c=0,d=[];c<l.length;c++)a=l[c],n[a]&&d.push(n[a][0]),n[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);s&&s(e);while(d.length)d.shift()();return i.push.apply(i,m||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],o=!0,l=1;l<r.length;l++){var u=r[l];0!==n[u]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var o={},n={app:0},i=[];function a(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=o,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(r,o,function(e){return t[e]}.bind(null,o));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/mrrl/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var s=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"5c0b":function(t,e,r){"use strict";var o=r("5e27"),n=r.n(o);n.a},"5e27":function(t,e,r){},8304:function(t,e,r){"use strict";var o=r("a316"),n=r.n(o);n.a},a316:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"required-items-section"},[t._m(0),t._l(t.END_ITEMS,function(e){return r("div",{key:e,staticClass:"required-item"},[r("WowheadLink",{attrs:{url:t.ITEM_INFO[e].wowheadLink,name:t.ITEM_INFO[e].name,color:t.QUALITY_COLOR[t.ITEM_INFO[e].quality]}}),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.requiredItems[e],expression:"requiredItems[item]",modifiers:{number:!0}}],attrs:{type:"number",min:"0"},domProps:{value:t.requiredItems[e]},on:{input:function(r){r.target.composing||t.$set(t.requiredItems,e,t._n(r.target.value))},blur:function(e){return t.$forceUpdate()}}})],1)})],2),r("div",{staticClass:"result-section"},[r("h2",[t._v("Steps (Total Cost: "+t._s(t.totalGoldCost)+"g)")]),r("ul",t._l(t.murlocVisits,function(e){return r("li",{key:t.json(e),staticStyle:{"text-align":"left"}},[t._v("\n        Go to\n        "),r("WowheadLink",{attrs:{url:t.MURLOC_INFO[e.murloc].wowheadLink,name:e.murloc,color:t.NPC_COLOR}}),r("ul",t._l(e.buys,function(e){return r("li",{key:t.json(e),staticStyle:{"text-align":"right"}},[t._v("\n            Buy "+t._s(e.amount)+"\n            "),r("WowheadLink",{attrs:{url:t.ITEM_INFO[e.item].wowheadLink,name:t.ITEM_INFO[e.item].name,color:t.QUALITY_COLOR[t.ITEM_INFO[e.item].quality]}})],1)}),0),r("hr")],1)}),0)])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"center","align-items":"center"}},[r("h2",[t._v("What items does Mrrl want?")]),r("a",{staticStyle:{"padding-left":"8px"},attrs:{href:"https://github.com/SSchnaible/mrrl"}},[r("img",{attrs:{src:"GitHub-Mark-Light-32px.png"}})])])}],a=r("2ef0"),l=["Epic","Rare","Uncommon","Common"],u={Flrgrrl:{id:"Flrgrrl",wowheadLink:"https://wowhead.com/npc=151952/flrgrrl"},Mrrglrlr:{id:"Mrrglrlr",wowheadLink:"https://wowhead.com/npc=151950/mrrglrlr"},Hurlgrl:{id:"Hurlgrl",wowheadLink:"https://wowhead.com/npc=151953/hurlgrl"},Grrmrlg:{id:"Grrmrlg",wowheadLink:"https://wowhead.com/npc=151951/grrmrlg"}},m={Mass:{id:"Mass",name:"Unidentified Mass",wowheadLink:"https://wowhead.com/item=167912/unidentified-mass",murloc:"Flrgrrl",quality:"Common",cost:{kind:"gold"}},Bag:{id:"Bag",name:"Bag of Who-Knows-What",wowheadLink:"https://wowhead.com/item=167910/bag-of-who-knows-what",murloc:"Flrgrrl",quality:"Uncommon",cost:{kind:"items",items:[{amount:2,item:"Fish"}]}},Butter:{id:"Butter",name:"Just Regular Butter",wowheadLink:"https://wowhead.com/item=167911/just-regular-butter",murloc:"Flrgrrl",quality:"Uncommon",cost:{kind:"items",items:[{amount:4,item:"Vegetable"}]}},Food:{id:"Food",name:"Ghost Food",wowheadLink:"https://wowhead.com/item=167909/ghost-food",murloc:"Flrgrrl",quality:"Rare",cost:{kind:"items",items:[{amount:6,item:"Horn"}]}},RosettaStone:{id:"RosettaStone",name:"Beckoner's Rosetta Stone",wowheadLink:"https://wowhead.com/item=169782/beckoners-rosetta-stone",murloc:"Flrgrrl",quality:"Epic",cost:{kind:"items",items:[{amount:2,item:"Gloop"},{amount:9,item:"Rock"}]}},Eyeball:{id:"Eyeball",name:"Slimy Naga Eyeball",wowheadLink:"https://wowhead.com/item=167896/slimy-naga-eyeball",murloc:"Mrrglrlr",quality:"Common",cost:{kind:"gold"}},Sculpture:{id:"Sculpture",name:"Disintegrating Sand Sculpture",wowheadLink:"https://wowhead.com/item=167903/disintegrating-sand-sculpture",murloc:"Mrrglrlr",quality:"Uncommon",cost:{kind:"items",items:[{amount:4,item:"Vegetable"}]}},Rock:{id:"Rock",name:"Particularly Dense Rock",wowheadLink:"https://wowhead.com/item=167902/particularly-dense-rock",murloc:"Mrrglrlr",quality:"Rare",cost:{kind:"items",items:[{amount:3,item:"Bag"},{amount:3,item:"Jar"}]}},Gloop:{id:"Gloop",name:"Smelly Pile of Gloop",wowheadLink:"https://wowhead.com/item=167904/smelly-pile-of-gloop",murloc:"Mrrglrlr",quality:"Rare",cost:{kind:"items",items:[{amount:2,item:"Butter"}]}},BloodStone:{id:"BloodStone",name:"Pulsating Blood Stone",wowheadLink:"https://wowhead.com/item=169780/pulsating-blood-stone",murloc:"Mrrglrlr",quality:"Epic",cost:{kind:"items",items:[{amount:8,item:"Dust"},{amount:7,item:"Lunch"}]}},Vegetable:{id:"Vegetable",name:"Sweet Sea Vegetable",wowheadLink:"https://wowhead.com/item=167915/sweet-sea-vegetable",murloc:"Hurlgrl",quality:"Common",cost:{kind:"gold"}},Jar:{id:"Jar",name:"Jar of Fish Faces",wowheadLink:"https://wowhead.com/item=167914/jar-of-fish-faces",murloc:"Hurlgrl",quality:"Uncommon",cost:{kind:"items",items:[{amount:5,item:"Fish"}]}},Sock:{id:"Sock",name:"Dirty Murloc Sock",wowheadLink:"https://wowhead.com/item=167916/dirty-murloc-sock",murloc:"Hurlgrl",quality:"Uncommon",cost:{kind:"items",items:[{amount:6,item:"Mass"}]}},Lunch:{id:"Lunch",name:"Healthy Murloc Lunch",wowheadLink:"https://wowhead.com/item=167913/healthy-murloc-lunch",murloc:"Hurlgrl",quality:"Rare",cost:{kind:"items",items:[{amount:5,item:"Horn"}]}},Finger:{id:"Finger",name:"Cultist Pinky Finger",wowheadLink:"https://wowhead.com/item=169783/cultist-pinky-finger",murloc:"Hurlgrl",quality:"Epic",cost:{kind:"items",items:[{amount:4,item:"Gloop"},{amount:7,item:"Food"}]}},Fish:{id:"Fish",name:"Flatulent Fish",wowheadLink:"https://wowhead.com/item=167906/flatulent-fish",murloc:"Grrmrlg",quality:"Common",cost:{kind:"gold"}},Horn:{id:"Horn",name:"Curious Murloc Horn",wowheadLink:"https://wowhead.com/item=167905/curious-murloc-horn",murloc:"Grrmrlg",quality:"Uncommon",cost:{kind:"items",items:[{amount:3,item:"Eyeball"}]}},Snail:{id:"Snail",name:"Extra-Slimy Snail",wowheadLink:"https://wowhead.com/item=167907/extra-slimy-snail",murloc:"Grrmrlg",quality:"Rare",cost:{kind:"items",items:[{amount:5,item:"Sculpture"}]}},Dust:{id:"Dust",name:"Sea Giant Foot Dust",wowheadLink:"https://wowhead.com/item=167908/sea-giant-foot-dust",murloc:"Grrmrlg",quality:"Rare",cost:{kind:"items",items:[{amount:3,item:"Sock"}]}},Idol:{id:"Idol",name:"Overwhelmingly-Alluring Idol",wowheadLink:"https://wowhead.com/item=169781/overwhelmingly-alluring-idol",murloc:"Grrmrlg",quality:"Epic",cost:{kind:"items",items:[{amount:8,item:"Lunch"},{amount:4,item:"Food"}]}}},s=["Food","Rock","Gloop","Lunch","Snail","Dust","RosettaStone","BloodStone","Finger","Idol"],c=(r("c5f6"),r("456d"),r("7618"));r("8615"),r("ac4d"),r("8a81"),r("ac6a");function d(t){var e=Object(a["clone"])(t),r=0,o=!0,n=!1,i=void 0;try{for(var u,s=l[Symbol.iterator]();!(o=(u=s.next()).done);o=!0)for(var c=u.value,d=0,w=Object.values(m);d<w.length;d++){var f=w[d];if(f.quality===c&&e[f.id]>0)if("gold"===f.cost.kind)r+=e[f.id];else{var p=!0,g=!1,y=void 0;try{for(var b,v=f.cost.items[Symbol.iterator]();!(p=(b=v.next()).done);p=!0){var k=b.value;e[k.item]=(e[k.item]||0)+k.amount*e[f.id]}}catch(S){g=!0,y=S}finally{try{p||null==v.return||v.return()}finally{if(g)throw y}}}}}catch(S){n=!0,i=S}finally{try{o||null==s.return||s.return()}finally{if(n)throw i}}var O=h(Object(a["mapValues"])(e,function(t){return t>0})),L=[];return Object(a["forEach"])(O,function(t){0===L.length||L[L.length-1].murloc!==m[t].murloc?L.push({murloc:m[t].murloc,buys:[{item:t,amount:e[t]}]}):L[L.length-1].buys.push({item:t,amount:e[t]})}),[L,r]}function h(t){var e=Object(a["filter"])(t,function(t){return!0===t}).length;if(0===e)return[];var r=[{boughtItems:{},travelledDist:0,heuristicRestDist:e,buyOrder:[]}];while(r.length>0){var o=w(r),n=f(o,t),i=!0,l=!1,u=void 0;try{for(var s,d=function(){var n=s.value,i=Object(a["cloneDeep"])(o);i.boughtItems[n]=!0,o.buyOrder.length>0&&m[o.buyOrder[o.buyOrder.length-1]].murloc!=m[n].murloc&&(i.travelledDist+=1);var l=Object(a["filter"])(Object.keys(t),function(e){return!0===t[e]&&!i.boughtItems[e]});if(i.heuristicRestDist=l.length,i.buyOrder.push(n),Object(a["size"])(i.boughtItems)===e)return{v:i.buyOrder};r.push(i)},h=n[Symbol.iterator]();!(i=(s=h.next()).done);i=!0){var p=d();if("object"===Object(c["a"])(p))return p.v}}catch(g){l=!0,u=g}finally{try{i||null==h.return||h.return()}finally{if(l)throw u}}}throw new Error("Did not find a buy order")}function w(t){var e=0,r=1/0;for(var o in t){var n=t[o].travelledDist+t[o].heuristicRestDist;n<r&&(r=n,e=Number(o))}return t.splice(e,1)[0]}function f(t,e){var r=[];return Object(a["forEach"])(e,function(o,n){var i=n;if(!0===e[i]&&!t.boughtItems[i]){var l=m[i].cost;("gold"===l.kind||Object(a["every"])(l.items,function(e){return!0===t.boughtItems[e.item]}))&&r.push(i)}}),r}var p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{style:t.styleObject,attrs:{href:t.url}},[t._v(t._s(t.name))])},g=[],y=o["a"].extend({name:"wowheadLink",props:{url:String,name:String,color:String},data:function(){return{styleObject:{color:this.color}}}}),b=y,v=(r("8304"),r("2877")),k=Object(v["a"])(b,p,g,!1,null,null,null),O=k.exports;function L(){return Object(a["mapValues"])(m,function(t){return 0})}var S=o["a"].extend({name:"app",components:{WowheadLink:O},data:function(){return{MURLOC_INFO:u,ITEM_INFO:m,END_ITEMS:s,requiredItems:L(),NPC_COLOR:"#ffd100",QUALITY_COLOR:{Common:"#fff",Uncommon:"#1eff00",Rare:"#0070dd",Epic:"#a335ee"}}},computed:{solverResult:function(){return d(this.requiredItems)},murlocVisits:function(){return this.solverResult[0]},totalGoldCost:function(){return this.solverResult[1]}},methods:{json:function(t){return JSON.stringify(t)}}}),_=S,I=(r("5c0b"),Object(v["a"])(_,n,i,!1,null,null,null)),F=I.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(F)}}).$mount("#app")}});
//# sourceMappingURL=app.7e9a88a1.js.map