(()=>{"use strict";var n={424:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(81),a=e.n(o),r=e(645),i=e.n(r)()(a());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lobster&family=Orbitron:wght@400;500&family=Rampart+One&display=swap);"]),i.push([n.id,":root {\n  --main-color: #485461;\n  --main-color2: #28313b;\n  --second-color: #ef6c00;\n  --second-color2: #b15002;\n  --third-color: #fff3e0;\n  --height-footer: 65px;\n}\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n  background-color: var(--main-color);\n}\n\n.menu-calc-container {\n  width: 100vw;\n  height: calc(100vh);\n\n  background-color: var(--main-color);\n  background-image: linear-gradient(\n    315deg,\n    var(--main-color) 0%,\n    var(--main-color2) 74%\n  );\n\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: center;\n  overflow: auto;\n}\n\n.menu-container {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.calc-container {\n  width: 80%;\n  max-width: 450px;\n  min-width: 256px;\n}\n\nh1 {\n  font-family: 'Rampart One', cursive;\n  font-size: 2.5rem;\n  color: var(--second-color);\n  text-align: center;\n  padding: 10px 0;\n}\n.calc-nav {\n  padding: 0;\n  list-style: none;\n  width: 100%;\n  display: flex;\n  text-align: center;\n}\n.calc-nav-item {\n  width: 50%;\n  padding: 10px 0;\n  font-family: 'Lobster', cursive;\n  color: var(--second-color);\n  border: 2px solid var(--second-color2);\n  border-bottom: none;\n  border-radius: 15px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n  border-bottom: 2px solid var(--second-color);\n}\n.calc-nav-item:active {\n  background-color: var(--main-color);\n  color: var(--third-color);\n}\n\n.active {\n  color: var(--third-color);\n  background-color: var(--main-color);\n  border: 2px solid var(--second-color);\n  border-bottom: 2px solid transparent;\n  transition: all 200ms ease-in-out;\n}\n.active:active {\n  color: var(--second-color);\n}\n\n.calc-input-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Orbitron', sans-serif;\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: var(--third-color);\n  padding: 20px 20px;\n  background-color: var(--main-color);\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  border: 2px solid var(--second-color);\n  border-top: none;\n}\n\n.calc-input {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  padding-bottom: 20px;\n  width: 100%;\n  /* height: 69px; */\n  margin: 10px 0;\n}\n.calc-input div {\n  margin: 0 10px;\n  display: flex;\n  align-items: baseline;\n}\n.calc-input input {\n  background-color: gray;\n  border: none;\n  width: 60px;\n  height: 100%;\n  padding: 15px;\n  padding-right: 0;\n  margin-left: 10px;\n  color: var(--third-color);\n  font-size: 1.2rem;\n  font-family: 'Orbitron', sans-serif;\n  font-weight: bold;\n  border-radius: 10px;\n  outline: none;\n}\n.calc-input button {\n  height: 50px;\n  width: 60px;\n  font-size: 2rem;\n  margin-left: 10px;\n  color: var(--main-color);\n}\n\n.button {\n  border: none;\n  background-color: var(--second-color);\n  color: var(--main-color);\n  border-radius: 10px;\n  transition: all 100ms ease-in-out;\n  cursor: pointer;\n}\n.button:active {\n  background-color: var(--second-color2);\n}\n#deletePoints {\n  padding: 10px 0;\n  font-size: 1.2rem;\n  font-family: 'Orbitron', sans-serif;\n  font-weight: bold;\n  width: 80%;\n  margin-bottom: 10px;\n}\n\n.graph-container {\n  width: 100vw;\n  /* height: 90%; */\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  /* padding-bottom: 80px; */\n}\n\n.graph-container canvas {\n  background-color: white;\n  max-width: 500px;\n  max-height: 500px;\n  border-radius: 10px;\n  border: 3px solid var(--second-color);\n  padding: 20px;\n}\n\nfooter {\n  position: sticky;\n  bottom: 0;\n  width: 100%;\n  height: var(--height-footer);\n  background-color: rgba(0, 0, 0, 0.6);\n  color: var(--third-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nfooter ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n\nfooter li {\n  margin: 0 20px;\n}\n\nfooter li a {\n  color: var(--third-color);\n  text-decoration: none;\n  font-size: 2rem;\n  transition: all 200ms ease-in-out;\n}\n\nfooter li {\n  transition: all 300ms ease-in-out;\n}\n\nfooter li:hover {\n  transform: rotate(-45deg);\n}\n\nfooter li a:hover {\n  color: var(--second-color);\n}\n\n@media (max-width: 395px) {\n  h1 {\n    font-size: 1.5rem;\n  }\n  .calc-input {\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n  .calc-input button {\n    width: 90%;\n    margin: 10px;\n    height: 40px;\n  }\n  #deletePoints {\n    width: 90%;\n  }\n}\n\n@media (max-width: 425px) {\n  h1 {\n    font-size: 1.8rem;\n  }\n}\n\n@media (min-width: 1440px) {\n  .menu-calc-container {\n    /* width: 100%; */\n    flex-wrap: nowrap;\n    min-height: calc(100vh - var(--height-footer));\n    /* max-width: 1440px; */\n  }\n  .calc-input {\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n  .calc-input button {\n    width: 90%;\n    margin: 10px;\n    height: 40px;\n  }\n  #deletePoints {\n    width: 90%;\n  }\n  .menu-container {\n    /* width: 40vw; */\n    flex: 1;\n  }\n  .graph-container {\n    /* width: 60vw; */\n    flex: 1.5;\n  }\n  .graph-container canvas {\n    max-width: 750px;\n    max-height: 750px;\n  }\n}\n\n@media (max-height: 750px) {\n  :root {\n    --height-footer: 40px;\n  }\n  footer li a {\n    font-size: 1.4rem;\n  }\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var m=e(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=a(u,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=e(r[i]);t[c].references--}for(var s=o(n,a),l=0;l<r.length;l++){var d=e(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=s}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,a&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=e(379),t=e.n(n),o=e(795),a=e.n(o),r=e(569),i=e.n(r),c=e(565),s=e.n(c),l=e(216),d=e.n(l),p=e(589),m=e.n(p),u=e(424),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;let h=document.getElementById("x"),v=document.getElementById("y"),g=document.getElementById("addPoint"),x=document.getElementById("deletePoints"),b=document.getElementById("planoXY"),y=document.getElementById("bar");const w={type:"scatter",data:{datasets:[{data:[],backgroundColor:"rgb(125, 125, 125)",borderWidth:1,pointBorderColor:"rgb(0, 0, 0)"}]},options:{responsive:!0,scales:{x:{type:"linear",ticks:{stepSize:1,font:{size:16}}},y:{type:"linear",ticks:{stepSize:1,font:{size:16}}}}}};var k=new Chart(document.getElementById("myChart"),w);b.addEventListener("click",(()=>{b.classList.contains("active")||(y.classList.remove("active"),b.classList.add("active")),k.data.datasets[0].label="Plano XY",w.type="scatter",k.update()})),y.addEventListener("click",(()=>{y.classList.contains("active")||(b.classList.remove("active"),y.classList.add("active")),k.data.datasets[0].label="Histograma",w.type="bar",k.update()}));const E=(n,t,e)=>{h.value=n,v.value=t,k.data.datasets[0].pointRadius=7,b.classList.contains("active")?k.data.datasets[0].label="Plano XY":k.data.datasets[0].label="Histograma",k.data.datasets[0].data=[],(n=>{w.options.scales.x.min=-1*n,w.options.scales.x.max=n,w.options.scales.y.min=-1*n,w.options.scales.y.max=n})(e),k.update()};g.addEventListener("click",(()=>{var n,t;k.data.datasets[0].data.push({x:parseFloat(h.value),y:parseFloat(v.value)}),n=w.options.scales,t=k.data.datasets[0].data,n.x.min=Math.min(...t.map((n=>n.x)))-1,n.x.max=Math.max(...t.map((n=>n.x)))+1,n.y.min=Math.min(...t.map((n=>n.y)))-1,n.y.max=Math.max(...t.map((n=>n.y)))+1,k.update()})),x.addEventListener("click",(()=>{E(0,0,1)})),E(0,0,1)})()})();