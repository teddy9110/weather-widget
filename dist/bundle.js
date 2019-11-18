!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o={city:"New York",cloudiness:50,country:"US",desc:"scattered clouds",humidity:50,sunrise:1519626034,sunset:1519664697,temp:32,type:"03d",wind:10},i={tempNow:$("#temp-now"),iconNow:$("#icon-now"),descNow:$("#desc-now"),cityNow:$("#city-now"),windNow:$("#wind-now"),timeNow:$("#time-now"),humidityNow:$("#humidity-now"),cloudinessNow:$("#cloudiness-now"),sunriseNow:$("#sunrise-now"),sunsetNow:$("#sunset-now")};function a(e){var t,n=e?c(o.temp).toFixed(0):o.temp.toFixed(0),a=e?(t=o.wind,1.609344*t).toFixed(0)+" km/h":o.wind.toFixed(0)+" mph",s=new Date,d=r[s.getDay()]+", "+u(s,e),f=u(new Date(1e3*o.sunrise),e),l=u(new Date(1e3*o.sunset),e);i.tempNow.text(n),i.iconNow.addClass(function(e){switch(e){case"01d":return"wi-day-sunny";case"02d":return"wi-night-cloudy";case"03d":case"04d":return"wi-cloudy";case"09d":return"wi-day-showers";case"10d":return"wi-day-rain";case"11d":return"wi-thunderstorm";case"13d":return"wi-snow";case"50d":return"wi-fog";case"01n":return"wi-night-clear";case"02n":return"wi-day-cloudy";case"03n":case"04n":return"wi-cloudy";case"09n":return"wi-night-showers";case"10n":return"wi-night-rain";case"11n":return"wi-thunderstorm";case"13n":return"wi-snow";case"50n":return"wi-fog"}}(o.type)),i.descNow.text(o.desc),i.cityNow.text(o.city),i.windNow.text(a),i.timeNow.text(d),i.humidityNow.text(o.humidity),i.cloudinessNow.text(o.cloudiness),i.sunriseNow.text(f),i.sunsetNow.text(l)}function s(e,t,n,r){var o=r?c(n[t].min).toFixed(0):n[t].min.toFixed(0),i=r?c(n[t].max).toFixed(0):n[t].max.toFixed(0);$(e+" > h3").text(n[t].weekday),$(e+" span").eq(0).text(i),$(e+" span").eq(1).text(o)}function u(e,t){var n,r;return t?(n=e.getHours())+":"+(e.getMinutes()>=10?e.getMinutes():"0"+e.getMinutes()):(r="AM",(n=e.getHours())>=12&&(n>12&&(n-=12),r="PM"),n+":"+(e.getMinutes()>=10?e.getMinutes():"0"+e.getMinutes())+" "+r)}function c(e){return 5*(e-32)/9}t.default={setCurrentWeather:function(e,t){o=e,a(t)},setForecast:function(e,t){this.forecast=e,s("#first-day",0,e,t),s("#second-day",1,e,t),s("#third-day",2,e,t),s("#forth-day",3,e,t)},updateWeather:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default="b10e79705c099860a980640a091a6fcf"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}var a=["SUN","MON","TUE","WED","THU","FRI","SAT"];function s(e,t){0===e.status?alert("Network error. Check your connection."):404==e.status?alert("Requested page not found [404]."):500==e.status?alert("Internal Server Error [500]."):alert("Error ["+e.status+"].")}var u={fetchCurrentWeather:function(e,t,n){var i=null;$.getJSON(function(e,t){return"https://api.openweathermap.org/data/2.5/weather?lat="+e+"&lon="+t+"&units=imperial&APPID="+r.default}(e,t),function(e){i={city:e.name,temp:e.main.temp,desc:e.weather[0].description,type:e.weather[0].icon,wind:e.wind.speed,humidity:e.main.humidity,cloudiness:e.clouds.all,sunrise:e.sys.sunrise,sunset:e.sys.sunset,country:e.sys.country}}).done(function(){return o.default.setCurrentWeather(i,n)}).fail(function(e,t){return s(jqXHR)})},fetchForecast:function(e,t,n){var i=[];$.getJSON(function(e,t){return"https://api.openweathermap.org/data/2.5/forecast?lat="+e+"&lon="+t+"&units=imperial&APPID="+r.default}(e,t),function(e){var t,n="",r=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,s=(new Date).getDay();e.list.forEach(function(e){t=new Date(1e3*e.dt),s!=t.getDay()&&(n!=a[t.getDay()]&&""!=n&&(i.push({weekday:n,min:r,max:o}),r=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY),e.main.temp<r&&(r=e.main.temp),e.main.temp>o&&(o=e.main.temp),n=a[t.getDay()])}),i.length<4&&i.push({weekday:n,min:r,max:o})}).done(function(){return o.default.setForecast(i,n)}).fail(function(e,t){return s(jqXHR)})}};t.default=u},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,c=0,d=[],f=n(3);function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function w(e){var t=document.createElement("style");return e.attrs.type="text/css",y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;n=u||(u=w(t)),r=b.bind(null,n,a,!1),o=b.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=w(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return l(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&l(p(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var v,x=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){(e.exports=n(5)(!1)).push([e.i,"body {\r\n  background-color: #EFF1F2;\r\n  font-family: Lato, Arial;\r\n  color: #343A40;\r\n}\r\n\r\nh3 {\r\n  font-size: 22px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\np {\r\n  margin-bottom: 0px;\r\n  font-size: 22px;\r\n}\r\n\r\n.container {\r\n  padding-top: 10rem; \r\n  padding-bottom: 10rem;\r\n}\r\n\r\n/* Card Header */\r\n#time-now {\r\n  float: right;\r\n  font-size: 22px;\r\n}\r\n\r\n/* Card Body */\r\n.main-card {\r\n  width: 600px;\r\n  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.blue-text {\r\n  color: #1496BB;\r\n}\r\n\r\n.degree-active {\r\n  font-size: 24px;\r\n}\r\n\r\n.degree-inactive {\r\n  font-size: 20px;\r\n  color: #1496BB;\r\n  cursor: pointer;\r\n}\r\n\r\n.degree {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  font-size: 24px;\r\n  margin-top: 12px;\r\n}\r\n\r\n#desc-now {\r\n  text-transform: capitalize;\r\n  font-size: 20px;\r\n}\r\n\r\n#icon-now {\r\n  font-size: 72px;\r\n  margin-right: 12px;\r\n  float: right;\r\n  line-height: 86px;\r\n}\r\n\r\n#temp-now {\r\n  display: inline;\r\n  font-size: 72px;\r\n}\r\n\r\n.data-tables {\r\n  font-size: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\ntr.spaceUnder>td {\r\n  padding-bottom: 1em;\r\n}\r\n\r\n/* Forecast */\r\n#first-day {\r\n  border-bottom-left-radius: 3px;\r\n}\r\n\r\n#forth-day {\r\n  border-bottom-right-radius: 3px;\r\n}\r\n\r\n.forecast-col {\r\n  color: white;\r\n  padding: 12px;\r\n}\r\n\r\n.card-img-bottom {\r\n  background-color: #86b3e0;\r\n}\r\n\r\n#attribution-text {\r\n  font-size: 14px;\r\n}\r\n\r\n/* Padding styles */\r\n.p-6 { padding: 6px; }\r\n.pr-6 { padding-right: 6px; }\r\n.pl-6 { padding-left: 6px; }\r\n.py-24 { padding-bottom: 24px; padding-top: 24px; }\r\n\r\n/* Footer */\r\nhtml, body {\r\n  height: 100%;\r\n} \r\n\r\n#wrapper{\r\n  min-height:100%;\r\n  position:relative;\r\n} \r\n\r\nfooter {\r\n  width: 100%;\r\n  height: 42px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.45);\r\n  font-family: Lato, sans-serif;\r\n  font-size: 15px;\r\n} \r\n\r\nfooter a {\r\n  line-height: 42px;\r\n  color: white;\r\n  text-decoration: none;\r\n} \r\n\r\nfooter a:focus, footer a:hover, footer a:visited {\r\n  text-decoration: none;\r\n  color: white;\r\n} \r\n\r\nfooter span {\r\n  vertical-align: middle;\r\n} \r\n\r\n.i-big {\r\n  vertical-align: middle;\r\n  font-size: 18px;\r\n}",""])},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(n(7)),i(n(1));var r=i(n(2)),o=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}var a=!0;function s(){alert("Sorry, no position available.")}function u(e){var t,n;t=e.coords.latitude,n=e.coords.longitude,r.default.fetchCurrentWeather(t,n,a),r.default.fetchForecast(t,n,a)}$(document).ready(function(){o.default.updateWeather(a),navigator.geolocation?navigator.geolocation.getCurrentPosition(u,s):s(),$("#fahrenheit-now, #celsius-now").on("click",function(){$(this).hasClass("degree-inactive")&&($(this).removeClass("degree-inactive"),$(".degree-active").removeClass("degree-active").addClass("degree-inactive"),$(this).addClass("degree-active"),a=!$(this).is("#fahrenheit-now"),o.default.updateWeather(a))})}),t.default=a}]);