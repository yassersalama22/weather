(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"body {\n  font-family: Arial, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n  background-size: cover;\n  background-position: center;\n  color: #000000; /* Default color */\n  flex-direction: column; /* Column direction for mobile view */\n}\n\n#unitToggle {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.7); /* Slightly transparent */\n  padding: 10px;\n  border-radius: 8px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 34px;\n  height: 20px;\n  margin-right: 10px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\ninput:checked + .slider {\n  background-color: #007bff;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(14px);\n}\n\n#unitLabel {\n  font-size: 14px;\n}\n\n#app {\n  background: rgba(255, 255, 255, 0); /* Transparent background */\n  padding: 20px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%; /* Full width for responsiveness */\n  max-width: 800px; /* Max width for larger screens */\n}\n\n#searchForm {\n  display: flex;\n  flex-direction: row; /* Align items in a row */\n  align-items: center;\n  margin-bottom: 20px;\n  background: rgba(\n    255,\n    255,\n    255,\n    0.7\n  ); /* Slightly transparent for readability */\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 800px;\n}\n\n#locationInput {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 70%; /* Adjust width to fit button */\n  margin-right: 10px; /* Add space between input and button */\n  font-size: 16px;\n}\n\nbutton {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background: #007bff;\n  color: white;\n  cursor: pointer;\n  font-size: 16px;\n  width: 30%; /* Adjust width to fit input */\n}\n\nbutton:hover {\n  background: #0056b3;\n}\n\n#weatherData,\n#forecastData {\n  background: rgba(0, 0, 0, 0.5); /* Transparent black background */\n  color: white; /* White text for readability */\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  margin-top: 20px;\n  text-align: center;\n  display: none; /* Hide initially */\n  width: 100%;\n}\n\n#weatherData img,\n#forecastData img {\n  display: block;\n  margin: 10px auto;\n}\n\n#weatherData h2,\n#weatherData p,\n#forecastData h2,\n#forecastData p {\n  margin: 0;\n  padding: 5px;\n}\n\n#forecastData {\n  flex-direction: row; /* Arrange forecast days in a row */\n  justify-content: center;\n  flex-wrap: nowrap; /* Prevent wrapping to the next line */\n  overflow-x: auto; /* Allow horizontal scrolling if needed */\n  width: 100%;\n}\n\n.forecast-day {\n  margin: 10px;\n  padding: 10px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.2); /* Slightly transparent */\n  text-align: center;\n  width: 120px;\n}\n\n/* Media Queries for Responsiveness */\n@media (max-width: 768px) {\n  #searchForm,\n  #weatherData,\n  #forecastData {\n    width: 90%;\n    margin-left: 5%;\n  }\n\n  .forecast-day {\n    width: 100px;\n  }\n}\n",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),c=t.n(s),d=t(56),l=t.n(d),p=t(540),u=t.n(p),f=t(113),h=t.n(f),g=t(208),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),o()(g.A,m),g.A&&g.A.locals&&g.A.locals;const b=t.p+"assets/1c2c7b5d46301c215331.jpg",y=t.p+"assets/668f6e4caea936d04149.jpg",x=t.p+"assets/1c2c7b5d46301c215331.jpg",w=t.p+"assets/de67e242fa3a73ca8093.jpg",v=t.p+"assets/6e9a8788e7ceaf112491.jpg",k=t.p+"assets/e3ca4eaf4fe5d82ea82d.jpg",F=t.p+"assets/35ca23eddd8ac33a5c0c.jpg",$=t.p+"assets/7b2f4e65c2db91396bee.jpg",C=t.p+"assets/f3596303126812ca7513.jpg",E=t.p+"assets/76d5e68b1dc85eba8f7e.jpg",j=t.p+"assets/54554748888bda0e14d8.jpg";document.body.style.backgroundImage=`url(${x})`;let T="F";function A(n){const e=document.getElementById("weatherData"),t=n.currentConditions.icon,r=n.currentConditions.conditions.split(",")[0].trim().toLowerCase();let o="";const a=`https://www.visualcrossing.com/img/${t}.svg`;switch(r){case"clear":o=`url(${b})`,document.body.style.color="#000000";break;case"partially cloudy":o=`url(${F})`,document.body.style.color="#000000";break;case"cloudy":o=`url(${y})`,document.body.style.color="#FFFFFF";break;case"rain":o=`url(${$})`,document.body.style.color="#FFFFFF";break;case"snow":o=`url(${j})`,document.body.style.color="#000000";break;case"thunderstorm":o=`url(${C})`,document.body.style.color="#FFFFFF";break;case"mist":o=`url(${k})`,document.body.style.color="#000000";break;case"fog":o=`url(${w})`,document.body.style.color="#000000";break;case"haze":o=`url(${v})`,document.body.style.color="#000000";break;case"windy":o=`url(${E})`,document.body.style.color="#000000";break;default:o=`url(${x})`,document.body.style.color="#000000"}document.body.style.backgroundImage=o;const i=n.currentConditions.temp,s="C"===T?5*(i-32)/9:i;e.innerHTML=`\n        <h2>Weather for ${n.resolvedAddress}</h2>\n        <img src="${a}" alt="${r}" style="width: 50px; height: 50px;">\n        <p>Temperature: ${s.toFixed(1)}°${T}</p>\n        <p>Conditions: ${n.currentConditions.conditions}</p>\n    `,e.style.display="block"}function D(n){const e=document.getElementById("forecastData");e.innerHTML="",e.style.display="flex",n.days.slice(1,6).forEach((n=>{const t=n.icon,r=n.conditions.split(",")[0].trim().toLowerCase(),o=`https://www.visualcrossing.com/img/${t}.svg`,a=n.temp,i="C"===T?5*(a-32)/9:a,s=`\n      <div class="forecast-day">\n        <h3>${n.datetime}</h3>\n        <img src="${o}" alt="${r}" style="width: 30px; height: 30px;">\n        <p>Temperature: ${i.toFixed(1)}°${T}</p>\n        <p>Conditions: ${n.conditions}</p>\n      </div>\n    `;e.innerHTML+=s})),e.style.display="flex"}document.getElementById("unitSwitch").addEventListener("change",(function(){T=this.checked?"C":"F",document.getElementById("unitLabel").textContent=this.checked?"°C":"°F";const n=JSON.parse(localStorage.getItem("weatherData"));n&&(A(n),D(n))})),document.getElementById("searchForm").addEventListener("submit",(function(n){n.preventDefault(),async function(){const n=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${document.getElementById("locationInput").value}?key=YGKFSTXNPDEH9ACPLFHGCZ7A3&iconSet=icons1`;try{const e=await fetch(n);if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();localStorage.setItem("weatherData",JSON.stringify(t)),A(t),D(t)}catch(n){console.error("Error fetching weather data:",n),document.getElementById("weatherData").innerText="Error fetching weather data.",document.getElementById("weatherData").style.display="block"}}()}))})();