!function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[s]={exports:{}};e[s][0].call(f.exports,(function(t){return i(e[s][1][t]||t)}),f,f.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){"use strict";var r=t(2),i=t(3);e.exports={cssMaskAvailable:r,featureDetectTest:i}},{2:2,3:3}],2:[function(t,e,n){"use strict";var r=t(9)("mask-image","linear-gradient(#000, #fff)");e.exports=r},{9:9}],3:[function(t,e,n){"use strict";var r={"css-mask":t(2)};e.exports=r},{2:2}],4:[function(t,e,n){"use strict";e.exports={canvasAvailable:t(5),continuousScrollEventsAvailable:t(6),cookiesAvailable:t(7),cssLinearGradientAvailable:t(8),cssPropertyAvailable:t(9),cssViewportUnitsAvailable:t(10),elementAttributeAvailable:t(11),eventTypeAvailable:t(12),isDesktop:t(14),isHandheld:t(15),isRetina:t(16),isTablet:t(17),localStorageAvailable:t(18),mediaElementsAvailable:t(19),mediaQueriesAvailable:t(20),prefersReducedMotion:t(21),sessionStorageAvailable:t(22),svgAvailable:t(23),threeDTransformsAvailable:t(24),touchAvailable:t(25),webGLAvailable:t(26)}},{10:10,11:11,12:12,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,5:5,6:6,7:7,8:8,9:9}],5:[function(t,e,n){"use strict";var r=t(13),i=t(28),o=function(){var t=r.getDocument().createElement("canvas");return!("function"!=typeof t.getContext||!t.getContext("2d"))};e.exports=i(o),e.exports.original=o},{13:13,28:28}],6:[function(t,e,n){"use strict";var r=t(55),i=t(25).original,o=t(28);function s(){return!i()||r.os.ios&&r.os.version.major>=8||r.browser.chrome}e.exports=o(s),e.exports.original=s},{25:25,28:28,55:55}],7:[function(t,e,n){"use strict";var r=t(13),i=t(28);function o(){var t=!1,e=r.getDocument(),n=r.getNavigator();try{"cookie"in e&&n.cookieEnabled&&(e.cookie="ac_feature_cookie=1",t=-1!==e.cookie.indexOf("ac_feature_cookie"),e.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")}catch(t){}return t}e.exports=i(o),e.exports.original=o},{13:13,28:28}],8:[function(t,e,n){"use strict";var r=t(38),i=t(28);function o(){return["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"].some((function(t){return!!r("background-image",t)}))}e.exports=i(o),e.exports.original=o},{28:28,38:38}],9:[function(t,e,n){"use strict";var r=t(38),i=t(37),o=t(27);function s(t,e){return void 0!==e?!!r(t,e):!!i(t)}e.exports=o(s),e.exports.original=s},{27:27,37:37,38:38}],10:[function(t,e,n){"use strict";var r=t(38),i=t(28);function o(){return!!r("margin","1vw 1vh")}e.exports=i(o),e.exports.original=o},{28:28,38:38}],11:[function(t,e,n){"use strict";var r=t(13),i=t(27);function o(t,e){return e=e||"div",t in r.getDocument().createElement(e)}e.exports=i(o),e.exports.original=o},{13:13,27:27}],12:[function(t,e,n){"use strict";var r=t(36),i=t(27);function o(t,e){return!!r(t,e)}e.exports=i(o),e.exports.original=o},{27:27,36:36}],13:[function(t,e,n){"use strict";e.exports={getWindow:function(){return window},getDocument:function(){return document},getNavigator:function(){return navigator}}},{}],14:[function(t,e,n){"use strict";var r=t(55).os,i=t(25).original,o=t(13),s=t(28);function a(){var t=o.getWindow();return!i()&&!t.orientation||r.windows}e.exports=s(a),e.exports.original=a},{13:13,25:25,28:28,55:55}],15:[function(t,e,n){"use strict";var r=t(14).original,i=t(17).original,o=t(28);function s(){return!r()&&!i()}e.exports=o(s),e.exports.original=s},{14:14,17:17,28:28}],16:[function(t,e,n){"use strict";var r=t(13);e.exports=function(){var t=r.getWindow();return"devicePixelRatio"in t&&t.devicePixelRatio>=1.5}},{13:13}],17:[function(t,e,n){"use strict";var r=t(14).original,i=t(13),o=t(28);function s(){var t=i.getWindow(),e=t.screen.width;return t.orientation&&t.screen.height<e&&(e=t.screen.height),!r()&&e>=600}e.exports=o(s),e.exports.original=s},{13:13,14:14,28:28}],18:[function(t,e,n){"use strict";var r=t(13),i=t(28);function o(){var t=r.getWindow(),e=!1;try{e=!(!t.localStorage||null===t.localStorage.non_existent)}catch(t){}return e}e.exports=i(o),e.exports.original=o},{13:13,28:28}],19:[function(t,e,n){"use strict";var r=t(13),i=t(28);function o(){return"HTMLMediaElement"in r.getWindow()}e.exports=i(o),e.exports.original=o},{13:13,28:28}],20:[function(t,e,n){"use strict";t(31);var r=t(13),i=t(28);function o(){var t=r.getWindow().matchMedia("only all");return!(!t||!t.matches)}e.exports=i(o),e.exports.original=o},{13:13,28:28,31:31}],21:[function(t,e,n){"use strict";var r=t(13);e.exports=function(){var t=r.getWindow().matchMedia("(prefers-reduced-motion)");return!(!t||!t.matches)}},{13:13}],22:[function(t,e,n){"use strict";var r=t(13),i=t(28);function o(){var t=r.getWindow(),e=!1;try{"sessionStorage"in t&&"function"==typeof t.sessionStorage.setItem&&(t.sessionStorage.setItem("ac_feature","test"),e=!0,t.sessionStorage.removeItem("ac_feature","test"))}catch(t){}return e}e.exports=i(o),e.exports.original=o},{13:13,28:28}],23:[function(t,e,n){"use strict";var r=t(13),i=t(28);function o(){return!!r.getDocument().implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}e.exports=i(o),e.exports.original=o},{13:13,28:28}],24:[function(t,e,n){"use strict";var r=t(38),i=t(28);function o(){return!(!r("perspective","1px")||!r("transform","translateZ(0)"))}e.exports=i(o),e.exports.original=o},{28:28,38:38}],25:[function(t,e,n){"use strict";var r=t(13),i=t(28);function o(){var t=r.getWindow(),e=r.getDocument(),n=r.getNavigator();return!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch||n.maxTouchPoints>0||n.msMaxTouchPoints>0)}e.exports=i(o),e.exports.original=o},{13:13,28:28}],26:[function(t,e,n){"use strict";var r=t(13),i=t(28);function o(){var t=r.getDocument().createElement("canvas");return"function"==typeof t.getContext&&!(!t.getContext("webgl")&&!t.getContext("experimental-webgl"))}e.exports=i(o),e.exports.original=o},{13:13,28:28}],27:[function(t,e,n){"use strict";var r=function(){var t,e="";for(t=0;t<arguments.length;t++)t>0&&(e+=","),e+=arguments[t];return e};e.exports=function(t,e){e=e||r;var n=function n(){var r=arguments,i=e.apply(this,r);return i in n.cache||(n.cache[i]=t.apply(this,r)),n.cache[i]};return n.cache={},n}},{}],28:[function(t,e,n){"use strict";e.exports=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}},{}],29:[function(t,e,n){var r=t(30);function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}e.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var e=i();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var a=o?Object.getOwnPropertyDescriptor(t,s):null;a&&(a.get||a.set)?Object.defineProperty(n,s,a):n[s]=t[s]}return n.default=t,e&&e.set(t,n),n}},{30:30}],30:[function(t,e,n){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(t){return typeof t}:e.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}e.exports=r},{}],31:[function(t,e,n){},{}],32:[function(t,e,n){"use strict";var r=function(t,e){this._target=t,this._tests={},this.addTests(e)},i=r.prototype;i.addTests=function(t){this._tests=Object.assign(this._tests,t)},i._supports=function(t){return void 0!==this._tests[t]&&("function"==typeof this._tests[t]&&(this._tests[t]=this._tests[t]()),this._tests[t])},i._addClass=function(t,e){e=e||"no-",this._supports(t)?this._target.classList.add(t):this._target.classList.add(e+t)},i.htmlClass=function(){var t;for(t in this._target.classList.remove("no-js"),this._target.classList.add("js"),this._tests)this._tests.hasOwnProperty(t)&&this._addClass(t)},e.exports=r},{}],33:[function(t,e,n){"use strict";function r(t,e){this._target=t||document.body,this._attr=e||"data-focus-method",this._focusMethod=this._lastFocusMethod=!1,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onWindowBlur=this._onWindowBlur.bind(this),this._bindEvents()}var i=r.prototype;i._bindEvents=function(){this._target.addEventListener("keydown",this._onKeyDown,!0),this._target.addEventListener("mousedown",this._onMouseDown,!0),this._target.addEventListener("touchstart",this._onTouchStart,!0),this._target.addEventListener("focus",this._onFocus,!0),this._target.addEventListener("blur",this._onBlur,!0),window.addEventListener("blur",this._onWindowBlur)},i._onKeyDown=function(t){this._focusMethod="key"},i._onMouseDown=function(t){"touch"!==this._focusMethod&&(this._focusMethod="mouse")},i._onTouchStart=function(t){this._focusMethod="touch"},i._onFocus=function(t){this._focusMethod||(this._focusMethod=this._lastFocusMethod),t.target.setAttribute(this._attr,this._focusMethod),this._lastFocusMethod=this._focusMethod,this._focusMethod=!1},i._onBlur=function(t){t.target.removeAttribute(this._attr)},i._onWindowBlur=function(t){this._focusMethod=!1},e.exports=r},{}],34:[function(t,e,n){"use strict";t(31);var r=t(32),i=t(35);e.exports=new r(document.documentElement,i),e.exports.FeatureDetect=r;var o=t(33);document.addEventListener&&document.addEventListener("DOMContentLoaded",(function(){new o}))},{31:31,32:32,33:33,35:35}],35:[function(t,e,n){"use strict";var r=t(25);e.exports={touch:r,"progressive-image":!0}},{25:25}],36:[function(t,e,n){"use strict";var r=t(45),i=t(39),o=t(44),s=t(41),a={};e.exports=function t(e,n){var u,c,f;if(n=n||"div",e=e.toLowerCase(),n in a||(a[n]={}),e in(c=a[n]))return c[e];if(r(e,n))return c[e]=e;if(e in i)for(f=0;f<i[e].length;f++)if(u=i[e][f],r(u.toLowerCase(),n))return c[e]=u;for(f=0;f<s.evt.length;f++)if(u=s.evt[f]+e,r(u,n))return s.reduce(f),c[e]=u;return"window"!==n&&o.indexOf(e)?c[e]=t(e,"window"):c[e]=!1}},{39:39,41:41,44:44,45:45}],37:[function(t,e,n){"use strict";var r=t(42),i=t(40),o=t(46),s=t(47),a=t(41),u=function(t,e){var n=o(t),i=!1!==e&&o(e);return r[t]=r[e]=r[n]=r[i]={dom:e,css:i},e};e.exports=function(t){var e,n,o,c;if((t+="")in r)return r[t].dom;for(o=i(),n=(t=s(t)).charAt(0).toUpperCase()+t.substring(1),e="filter"===t?["WebkitFilter","filter"]:(t+" "+a.dom.join(n+" ")+n).split(" "),c=0;c<e.length;c++)if(void 0!==o.style[e[c]])return 0!==c&&a.reduce(c-1),u(t,e[c]);return u(t,!1)}},{40:40,41:41,42:42,46:46,47:47}],38:[function(t,e,n){"use strict";var r=t(37),i=t(43),o=t(41),s=t(42),a={},u=/(\([^\)]+\))/gi,c=/([^ ,;\(]+(\([^\)]+\))?)/gi;e.exports=function(t,e){var n;return e+="",!!(t=r(t))&&(i(t,e)?e:(n=s[t].css,""!==(e=(e=e.replace(c,(function(e){var r,s,c,f;if("#"===e[0]||!isNaN(e[0]))return e;if(s=e.replace(u,""),(c=n+":"+s)in a)return!1===a[c]?"":e.replace(s,a[c]);for(r=o.css.map((function(t){return t+e})),r=[e].concat(r),f=0;f<r.length;f++)if(i(t,r[f]))return 0!==f&&o.reduce(f-1),a[c]=r[f].replace(u,""),r[f];return a[c]=!1,""}))).trim())&&e))}},{37:37,41:41,42:42,43:43}],39:[function(t,e,n){"use strict";e.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}},{}],40:[function(t,e,n){"use strict";var r;e.exports=function(){return r?(r.style.cssText="",r.removeAttribute("style")):r=document.createElement("_"),r},e.exports.resetElement=function(){r=null}},{}],41:[function(t,e,n){"use strict";var r=["-webkit-","-moz-","-ms-"],i=["Webkit","Moz","ms"],o=["webkit","moz","ms"],s=function(){this.initialize()},a=s.prototype;a.initialize=function(){this.reduced=!1,this.css=r,this.dom=i,this.evt=o},a.reduce=function(t){this.reduced||(this.reduced=!0,this.css=[this.css[t]],this.dom=[this.dom[t]],this.evt=[this.evt[t]])},e.exports=new s},{}],42:[function(t,e,n){"use strict";e.exports={}},{}],43:[function(t,e,n){"use strict";var r,i,o=t(42),s=t(40),a=!1;e.exports=function(t,e){var n,u;if(function(){var t;if(!a){a=!0,r="CSS"in window&&"supports"in window.CSS,i=!1,t=s();try{t.style.width="invalid"}catch(t){i=!0}}}(),r)return t=o[t].css,CSS.supports(t,e);if(n=(u=s()).style[t],i)try{u.style[t]=e}catch(t){return!1}else u.style[t]=e;return u.style[t]&&u.style[t]!==n},e.exports.resetFlags=function(){a=!1}},{40:40,42:42}],44:[function(t,e,n){"use strict";e.exports=["transitionend","animationstart","animationend","animationiteration"]},{}],45:[function(t,e,n){"use strict";var r={window:window,document:document};e.exports=function(t,e){var n;return t="on"+t,e in r||(r[e]=document.createElement(e)),t in(n=r[e])||"setAttribute"in n&&(n.setAttribute(t,"return;"),"function"==typeof n[t])}},{}],46:[function(t,e,n){"use strict";var r=/^(webkit|moz|ms)/gi;e.exports=function(t){return"cssfloat"===t.toLowerCase()?"float":(r.test(t)&&(t="-"+t),t.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase())}},{}],47:[function(t,e,n){"use strict";var r=/-([a-z])/g;e.exports=function(t){return"float"===t.toLowerCase()?"cssFloat":("Ms"===(t=t.replace(r,(function(t,e){return e.toUpperCase()}))).substr(0,2)&&(t="ms"+t.substring(2)),t)}},{}],48:[function(t,e,n){"use strict";var r={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};e.exports=t(51)(r)},{51:51}],49:[function(t,e,n){"use strict";e.exports={browser:{safari:!1,chrome:!1,firefox:!1,ie:!1,opera:!1,android:!1,edge:!1,version:{name:"",major:0,minor:0,patch:0,documentMode:!1}},os:{osx:!1,ios:!1,android:!1,windows:!1,linux:!1,fireos:!1,chromeos:!1,version:{name:"",major:0,minor:0,patch:0}}}},{}],50:[function(t,e,n){"use strict";e.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(t){return t.ua.indexOf("Edge")>-1||"Mozilla/5.0 (Windows NT 10.0; Win64; x64)"===t.ua}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(t){return t.ua.indexOf("Firefox")>-1&&-1===t.ua.indexOf("Opera")},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(t){return t.ua.indexOf("Safari")>-1&&t.vendor.indexOf("Apple")>-1},version:"Version"},{name:"ie",test:function(t){return t.ua.indexOf("IE")>-1||t.ua.indexOf("Trident")>-1},version:["MSIE","rv"],parseDocumentMode:function(){var t=!1;return document.documentMode&&(t=parseInt(document.documentMode,10)),t}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(t){return t.platform.indexOf("Win")>-1},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(t){return t.platform.indexOf("Mac")>-1}},{name:"ios",test:function(t){return t.ua.indexOf("iPhone")>-1||t.ua.indexOf("iPad")>-1},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(t){return t.platform.indexOf("Linux")>-1&&-1===t.ua.indexOf("Android")}},{name:"fireos",test:function(t){return t.ua.indexOf("Firefox")>-1&&t.ua.indexOf("Mobile")>-1},version:"rv"},{name:"android",userAgent:"Android"},{name:"chromeos",userAgent:"CrOS"}]}},{}],51:[function(t,e,n){"use strict";var r=t(49),i=t(50);function o(t,e){if("function"==typeof t.parseVersion)return t.parseVersion(e);var n,r=t.version||t.userAgent;"string"==typeof r&&(r=[r]);for(var i,o=r.length,s=0;s<o;s++)if((i=e.match((n=r[s],new RegExp(n+"[a-zA-Z\\s/:]+([0-9_.]+)","i"))))&&i.length>1)return i[1].replace(/_/g,".")}function s(t,e,n){for(var r,i,s=t.length,a=0;a<s;a++)if("function"==typeof t[a].test?!0===t[a].test(n)&&(r=t[a].name):n.ua.indexOf(t[a].userAgent)>-1&&(r=t[a].name),r){if(e[r]=!0,"string"==typeof(i=o(t[a],n.ua))){var u=i.split(".");e.version.name=i,u&&u.length>0&&(e.version.major=parseInt(u[0]||0),e.version.minor=parseInt(u[1]||0),e.version.patch=parseInt(u[2]||0))}else"edge"===r&&(e.version.name="12.0.0",e.version.major="12",e.version.minor="0",e.version.patch="0");return"function"==typeof t[a].parseDocumentMode&&(e.version.documentMode=t[a].parseDocumentMode()),e}return e}e.exports=function(t){var e={};return e.browser=s(i.browser,r.browser,t),e.os=s(i.os,r.os,t),e}},{49:49,50:50}],52:[function(t,e,n){"use strict";e.exports={browser:{safari:!1,chrome:!1,firefox:!1,ie:!1,opera:!1,android:!1,edge:!1,version:{string:"",major:0,minor:0,patch:0,documentMode:!1}},os:{osx:!1,ios:!1,android:!1,windows:!1,linux:!1,fireos:!1,chromeos:!1,version:{string:"",major:0,minor:0,patch:0}}}},{}],53:[function(t,e,n){"use strict";e.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(t){return t.ua.indexOf("Edge")>-1||"Mozilla/5.0 (Windows NT 10.0; Win64; x64)"===t.ua}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(t){return t.ua.indexOf("Firefox")>-1&&-1===t.ua.indexOf("Opera")},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(t){return t.ua.indexOf("Safari")>-1&&t.vendor.indexOf("Apple")>-1},version:"Version"},{name:"ie",test:function(t){return t.ua.indexOf("IE")>-1||t.ua.indexOf("Trident")>-1},version:["MSIE","rv"],parseDocumentMode:function(){var t=!1;return document.documentMode&&(t=parseInt(document.documentMode,10)),t}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(t){return t.ua.indexOf("Windows")>-1},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(t){return t.ua.indexOf("Macintosh")>-1}},{name:"ios",test:function(t){return t.ua.indexOf("iPhone")>-1||t.ua.indexOf("iPad")>-1},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(t){return(t.ua.indexOf("Linux")>-1||t.platform.indexOf("Linux")>-1)&&-1===t.ua.indexOf("Android")}},{name:"fireos",test:function(t){return t.ua.indexOf("Firefox")>-1&&t.ua.indexOf("Mobile")>-1},version:"rv"},{name:"android",userAgent:"Android",test:function(t){return t.ua.indexOf("Android")>-1}},{name:"chromeos",userAgent:"CrOS"}]}},{}],54:[function(t,e,n){"use strict";var r=t(52),i=t(53);function o(t,e){if("function"==typeof t.parseVersion)return t.parseVersion(e);var n,r=t.version||t.userAgent;"string"==typeof r&&(r=[r]);for(var i,o=r.length,s=0;s<o;s++)if((i=e.match((n=r[s],new RegExp(n+"[a-zA-Z\\s/:]+([0-9_.]+)","i"))))&&i.length>1)return i[1].replace(/_/g,".");return!1}function s(t,e,n){for(var r,i,s=t.length,a=0;a<s;a++)if("function"==typeof t[a].test?!0===t[a].test(n)&&(r=t[a].name):n.ua.indexOf(t[a].userAgent)>-1&&(r=t[a].name),r){if(e[r]=!0,"string"==typeof(i=o(t[a],n.ua))){var u=i.split(".");e.version.string=i,u&&u.length>0&&(e.version.major=parseInt(u[0]||0),e.version.minor=parseInt(u[1]||0),e.version.patch=parseInt(u[2]||0))}else"edge"===r&&(e.version.string="12.0.0",e.version.major="12",e.version.minor="0",e.version.patch="0");return"function"==typeof t[a].parseDocumentMode&&(e.version.documentMode=t[a].parseDocumentMode()),e}return e}e.exports=function(t){var e={};return e.browser=s(i.browser,r.browser,t),e.os=s(i.os,r.os,t),e}},{52:52,53:53}],55:[function(t,e,n){"use strict";var r={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};e.exports=t(54)(r)},{54:54}],56:[function(t,e,n){"use strict";var r=t(29);Object.defineProperty(n,"__esModule",{value:!0}),n.head=void 0;var i=r(t(48)),o=t(34),s=t(1),a=t(4);class u{constructor(){this.documentEl=document.documentElement,this.isReduceMotionEnabled=u.reducedMotionIsEnabled(),this.isDesktop=(0,a.isDesktop)(),this.isTablet=(0,a.isTablet)(),this.isHandheld=(0,a.isHandheld)(),this.ios=i.os.ios,this.windows=i.os.windows,this.isSafari=i.browser.safari,this.isIE=i.browser.ie,this.isIE11=i.browser.ie&&i.browser.version.major<=11,this.isEdge=i.browser.edge,this.isAndroid=i.os.android,this.isAOW=this.documentEl.classList.contains("aow"),this.isTouch=(0,a.touchAvailable)(),this.featureDetect=new o.FeatureDetect(this.documentEl),this._initialize()}_initialize(){this.featureDetect.addTests({"progressive-image":!0,"css-mask":s.cssMaskAvailable,"reduced-motion":this.isReduceMotionEnabled,desktop:this.isDesktop,tablet:this.isTablet,handheld:this.isHandheld,ios:this.ios,safari:this.isSafari,ie:this.isIE,"ie-11":this.isIE11,edge:this.isEdge,android:this.isAndroid,aow:this.isAOW,touch:this.isTouch,windows:this.windows}),this.featureDetect.htmlClass()}static reducedMotionIsEnabled(){return window.matchMedia("(prefers-reduced-motion)").matches}}const c=new u;n.head=c},{1:1,29:29,34:34,4:4,48:48}]},{},[56]);