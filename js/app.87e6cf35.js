(function(t){function e(e){for(var r,s,c=e[0],o=e[1],l=e[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/si-kun/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([1,"chunk-vendors"]),n()})({0:function(t,e){},1:function(t,e,n){t.exports=n("56d7")},2:function(t,e){},3:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("main",{staticClass:"center"},[n("div",{staticClass:"form-wrapper center"},[n("wired-card",{staticClass:"form center",attrs:{elevation:"2"}},[n("div",{staticClass:"file-wrapper form-item center"},[n("wired-button",[t._v(t._s(t.fileName))]),n("span",{staticClass:"hidden-file-wrapper"},[n("input",{ref:"fileInput",attrs:{name:"csvFile",type:"file"},on:{change:t.chooseFile}})])],1),n("div",{staticClass:"form-item center"},[n("wired-input",{ref:"internalReference",staticClass:"form-item-input",attrs:{placeholder:"Internal Reference",type:"text"}})],1),n("div",{staticClass:"form-item center"},[n("wired-input",{ref:"controlSampleName",staticClass:"form-item-input",attrs:{placeholder:"Control Sample",type:"text"}})],1),n("div",{staticClass:"form-item center"},[n("wired-divider",{staticClass:"form-divider"})],1),n("div",{staticClass:"form-item center"},[n("wired-button",{attrs:{disabled:!t.hasFile},on:{click:t.start}},[t._v("Let's Rock It !!!")])],1)])],1),n("div",{staticClass:"calendar-wrapper"},[n("wired-calendar",{attrs:{selected:t.today}})],1)]),n("wired-divider",{staticClass:"global-divider"}),n("p",{staticClass:"saying"},[t._v(t._s(t.quote))]),n("p",{staticClass:"author"},[t._v("——"+t._s(t.author))]),n("wired-dialog",{attrs:{open:t.isSuccess}},[n("div",{staticStyle:{padding:"16px"}},[n("p",{staticStyle:{"font-size":"1.4em","font-weight":"bold","text-align":"center"}},[t._v(" 文件已下载！ ")]),n("p",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("Internal Reference:")]),t._v(" "+t._s(t.internalReference)+" ")]),n("p",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("Control Sample Name:")]),t._v(" "+t._s(t.controlSampleName)+" ")]),n("p",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("文件:")]),t._v(" ["+t._s(t.internalReference)+"]-["+t._s(t.controlSampleName)+"]-Result.xlsx ")]),n("div",{staticClass:"center"},[n("wired-button",{staticStyle:{"margin-top":"8px"},on:{click:function(e){t.isSuccess=!1}}},[t._v("好")])],1)])]),n("wired-dialog",{attrs:{open:t.isLoading}},[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center","flex-direction":"column",padding:"16px"}},[n("p",{staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("加载中...")]),n("wired-spinner",{attrs:{spinning:"",duration:"1000"}})],1)]),n("wired-dialog",{attrs:{open:t.hasError}},[n("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center","flex-direction":"column",padding:"16px"}},[n("p",{staticStyle:{"font-size":"2em","font-weight":"bold"}},[t._v("出错啦 :(")]),n("wired-button",{staticStyle:{"margin-top":"8px"},on:{click:function(e){t.hasError=!1}}},[t._v("好")])],1)])],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"star center"},[r("img",{staticClass:"sun",attrs:{src:n("e9e7"),alt:"sun-moon"}})])}],s=(n("99af"),n("0d03"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),n("96cf"),n("48f2"),n("bc3a")),c=n.n(s),o=(n("4160"),n("a630"),n("c975"),n("d81d"),n("a9e3"),n("07ac"),n("6062"),n("3ca3"),n("498a"),n("159b"),n("ddb0"),n("284c")),l=n("e587"),u=(n("c19f"),n("ace4"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a9"),n("72f7"),n("21a6")),f=n("1146"),p=n.n(f);function d(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),r=0;r<t.length;r++)n[r]=255&t.charCodeAt(r);return e}function h(t,e,n){var r=p.a.utils.book_new();r.Props={Title:"SheetJS Tutorial",Subject:"Test",Author:""},r.SheetNames.push("Test Sheet"),r.Sheets["Test Sheet"]=p.a.utils.aoa_to_sheet(t);var a=p.a.write(r,{bookType:"xlsx",type:"binary"});Object(u["saveAs"])(new Blob([d(a)],{type:"application/octet-stream"}),"[".concat(e,"]-[").concat(n,"]-Result.xlsx"))}var m=[],v=[];function g(t){var e=0;return t.forEach((function(t){return e+=t})),e/t.length}function b(t){var e=t.split("\r\n"),n=[];return m=e[0].split(",").map((function(t){return t.trim()})),v.push(m),e.forEach((function(t,e){if(0!==e&&!(t.indexOf("Undetermined")>0)){var r={},a=t.split(",");v.push(a),m.forEach((function(t,e){r[t]=a[e]})),n.push(r)}})),n}function y(t){var e={},n=null,r=m,a=Object(l["a"])(r,3),i=a[0],s=a[1],c=a[2];return t.forEach((function(t){t[i]&&(n&&n["name"]===t[i]?(n[t[s]]||(n[t[s]]=[]),n[t[s]].push(Number(t[c])),n.targets.add(t[s])):(n={name:t[i]},n[t[s]]=[Number(t[c])],n.targets=new Set,n.targets.add(t[s]),e[t[i]]=n))})),e}function w(t,e){Object.values(t).forEach((function(t){t.internalReferenceMean=g(t[e])}))}function S(t,e){Object.values(t).forEach((function(t){t["^Ct"]=[];for(var n=Array.from(t.targets),r=0;r<n.length;r++)n[r]!==e&&(t["".concat(n[r],"-^Ct")]=t[n[r]].map((function(e){return e-t.internalReferenceMean})),t["^Ct"]=[].concat(Object(o["a"])(t["^Ct"]),Object(o["a"])(t[n[r]].map((function(e){return e-t.internalReferenceMean})))))}))}function C(t,e,n){Object.values(t).forEach((function(t){t["^^Ct"]=[];for(var r=Array.from(t.targets),a=function(a){if(r[a]===n)return"continue";var i=0;t["".concat(r[a],"-^^Ct")]=t["".concat(r[a],"-^Ct")].map((function(n){var s=n-e["".concat(r[a],"-^Ct")][i];return i=Math.min(i+1,e["".concat(r[a],"-^Ct")].length-1),t["^^Ct"].push(s),s}))},i=0;i<r.length;i++)a(i)}))}function _(t){Object.values(t).forEach((function(t){t.log2=t["^^Ct"].map((function(t){return Math.pow(2,-t)}))}))}function x(t,e){return v.forEach((function(n,r){if(0!==n.length&&""!==n[0])if(0!==r){var a=Object(l["a"])(n,3),i=a[0],s=a[1];a[2];s!==e?(n.push(""),n.push(t[i]["^Ct"].shift()),n.push(t[i]["^^Ct"].shift()),n.push(t[i]["log2"].shift())):n.push(t[i]["internalReferenceMean"],"","","")}else n.push("mean(".concat(e,")"),"^Ct","^^Ct","log2")})),v}function j(t,e,n){m=[],v=[];var r=b(t),a=y(r);w(a,e),S(a,e);var i=a[n];C(a,i,e),_(a),console.log(a);var s=x(a,e,n);h(s,e,n)}var O={name:"app",data:function(){return{hasFile:!1,fileContent:"",today:"",fileName:"选一个CSV文件吧~",hasError:!1,isLoading:!1,isSuccess:!1,loadingStatus:0,internalReference:"",controlSampleName:"",quote:"",author:""}},mounted:function(){var t=new Date,e=t.toString().split(" ");this.today="".concat(e[1]," ").concat(t.getDate(),", ").concat(t.getFullYear()),this.getQuote()},methods:{getQuote:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(c.a.get("https://api.quotable.io/random"));case 2:t=e.sent,this.quote=t.data.content,this.author=t.data.author;case 5:case"end":return e.stop()}}),null,this)},chooseFile:function(){var t=this,e=this.$refs.fileInput;if(!e.files||0===e.files.length)return this.hasError=!0,void(this.hasFile=!1);var n=this.$refs.fileInput.files[0];this.fileName="已选："+(n.name.length>9?"".concat(n.name.substring(0,10),"..."):n.name);var r=new FileReader;r.onload=function(e){t.fileContent=e.target.result},r.readAsText(n),this.hasFile=!0},start:function(){if(this.hasFile){try{this.isLoading=!0,j(this.fileContent,this.$refs.internalReference.value,this.$refs.controlSampleName.value),this.internalReference=this.$refs.internalReference.value,this.controlSampleName=this.$refs.controlSampleName.value,this.isSuccess=!0}catch(t){this.hasError=!0,this.isSuccess=!1,console.error(t)}this.reset(),this.isLoading=!1}},reset:function(){this.$refs.fileInput.value="",this.fileName="选一个CSV文件吧~",this.$refs.internalReference.value=null,this.$refs.controlSampleName.value=null}}},R=O,E=(n("5c0b"),n("2877")),N=Object(E["a"])(R,a,i,!1,null,null,null),$=N.exports;n("f843");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){},e9e7:function(t,e,n){t.exports=n.p+"img/sun.f1daec51.png"},f843:function(t,e,n){}});
//# sourceMappingURL=app.87e6cf35.js.map