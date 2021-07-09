var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,i=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(n)for(var r of n(t))a.call(t,r)&&s(e,r,t[r]);return e},c=(e,n)=>t(e,r(n));import{_ as u}from"./index.c889c4aa.js";import{d as f,f as d,e as l,r as p,o as h,c as m,w as g,F as y,k as v,z as b,t as w,A as E,B as x,C as O,a as j,E as S,j as C,G as R}from"./element-plus.701ae271.js";import{m as A}from"./markdownLib.29f277e7.js";import"./highLight.c849f34f.js";var D={exports:{}},k=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},L=k,P=Object.prototype.toString;function T(e){return"[object Array]"===P.call(e)}function N(e){return void 0===e}function U(e){return null!==e&&"object"==typeof e}function B(e){if("[object Object]"!==P.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function q(e){return"[object Function]"===P.call(e)}function I(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),T(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var $={isArray:T,isArrayBuffer:function(e){return"[object ArrayBuffer]"===P.call(e)},isBuffer:function(e){return null!==e&&!N(e)&&null!==e.constructor&&!N(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:U,isPlainObject:B,isUndefined:N,isDate:function(e){return"[object Date]"===P.call(e)},isFile:function(e){return"[object File]"===P.call(e)},isBlob:function(e){return"[object Blob]"===P.call(e)},isFunction:q,isStream:function(e){return U(e)&&q(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:I,merge:function e(){var t={};function r(r,n){B(t[n])&&B(r)?t[n]=e(t[n],r):B(r)?t[n]=e({},r):T(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)I(arguments[n],r);return t},extend:function(e,t,r){return I(t,(function(t,n){e[n]=r&&"function"==typeof t?L(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},M=$;function _(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var F=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(M.isURLSearchParams(t))n=t.toString();else{var o=[];M.forEach(t,(function(e,t){null!=e&&(M.isArray(e)?t+="[]":e=[e],M.forEach(e,(function(e){M.isDate(e)?e=e.toISOString():M.isObject(e)&&(e=JSON.stringify(e)),o.push(_(t)+"="+_(e))})))})),n=o.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},H=$;function z(){this.handlers=[]}z.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},z.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},z.prototype.forEach=function(e){H.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var G=z,X=$,J=function(e){return!(!e||!e.__CANCEL__)},V=$,Y=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},K=function(e,t,r,n,o){var a=new Error(e);return Y(a,t,r,n,o)},W=K,Q=$,Z=Q.isStandardBrowserEnv()?{write:function(e,t,r,n,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),Q.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),Q.isString(n)&&s.push("path="+n),Q.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},ee=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},te=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},re=$,ne=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],oe=$,ae=oe.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=oe.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},se=$,ie=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(W("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},ce=Z,ue=F,fe=function(e,t){return e&&!ee(t)?te(e,t):t},de=function(e){var t,r,n,o={};return e?(re.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=re.trim(e.substr(0,n)).toLowerCase(),r=re.trim(e.substr(n+1)),t){if(o[t]&&ne.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},le=ae,pe=K,he=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;se.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+i)}var c=fe(e.baseURL,e.url);if(a.open(e.method.toUpperCase(),ue(c,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in a?de(a.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:n,config:e,request:a};ie(t,r,o),a=null}},a.onabort=function(){a&&(r(pe("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(pe("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(pe(t,e,"ECONNABORTED",a)),a=null},se.isStandardBrowserEnv()){var u=(e.withCredentials||le(c))&&e.xsrfCookieName?ce.read(e.xsrfCookieName):void 0;u&&(o[e.xsrfHeaderName]=u)}if("setRequestHeader"in a&&se.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),se.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(f){if("json"!==e.responseType)throw f}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),r(e),a=null)})),n||(n=null),a.send(n)}))},me=$,ge=function(e,t){V.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},ye={"Content-Type":"application/x-www-form-urlencoded"};function ve(e,t){!me.isUndefined(e)&&me.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var be,we={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(be=he),be),transformRequest:[function(e,t){return ge(t,"Accept"),ge(t,"Content-Type"),me.isFormData(e)||me.isArrayBuffer(e)||me.isBuffer(e)||me.isStream(e)||me.isFile(e)||me.isBlob(e)?e:me.isArrayBufferView(e)?e.buffer:me.isURLSearchParams(e)?(ve(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):me.isObject(e)?(ve(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};we.headers={common:{Accept:"application/json, text/plain, */*"}},me.forEach(["delete","get","head"],(function(e){we.headers[e]={}})),me.forEach(["post","put","patch"],(function(e){we.headers[e]=me.merge(ye)}));var Ee=we,xe=$,Oe=function(e,t,r){return X.forEach(r,(function(r){e=r(e,t)})),e},je=J,Se=Ee;function Ce(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var Re=$,Ae=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function i(e,t){return Re.isPlainObject(e)&&Re.isPlainObject(t)?Re.merge(e,t):Re.isPlainObject(t)?Re.merge({},t):Re.isArray(t)?t.slice():t}function c(n){Re.isUndefined(t[n])?Re.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(e[n],t[n])}Re.forEach(n,(function(e){Re.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),Re.forEach(o,c),Re.forEach(a,(function(n){Re.isUndefined(t[n])?Re.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(void 0,t[n])})),Re.forEach(s,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var u=n.concat(o).concat(a).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return Re.forEach(f,c),r},De=$,ke=F,Le=G,Pe=function(e){return Ce(e),e.headers=e.headers||{},e.data=Oe(e.data,e.headers,e.transformRequest),e.headers=xe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),xe.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Se.adapter)(e).then((function(t){return Ce(e),t.data=Oe(t.data,t.headers,e.transformResponse),t}),(function(t){return je(t)||(Ce(e),t&&t.response&&(t.response.data=Oe(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Te=Ae;function Ne(e){this.defaults=e,this.interceptors={request:new Le,response:new Le}}Ne.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Te(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[Pe,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},Ne.prototype.getUri=function(e){return e=Te(this.defaults,e),ke(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},De.forEach(["delete","get","head","options"],(function(e){Ne.prototype[e]=function(t,r){return this.request(Te(r||{},{method:e,url:t,data:(r||{}).data}))}})),De.forEach(["post","put","patch"],(function(e){Ne.prototype[e]=function(t,r,n){return this.request(Te(n||{},{method:e,url:t,data:r}))}}));var Ue=Ne;function Be(e){this.message=e}Be.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Be.prototype.__CANCEL__=!0;var qe=Be,Ie=qe;function $e(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new Ie(e),t(r.reason))}))}$e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},$e.source=function(){var e;return{token:new $e((function(t){e=t})),cancel:e}};var Me=$e,_e=$,Fe=k,He=Ue,ze=Ae;function Ge(e){var t=new He(e),r=Fe(He.prototype.request,t);return _e.extend(r,He.prototype,t),_e.extend(r,t),r}var Xe=Ge(Ee);Xe.Axios=He,Xe.create=function(e){return Ge(ze(Xe.defaults,e))},Xe.Cancel=qe,Xe.CancelToken=Me,Xe.isCancel=J,Xe.all=function(e){return Promise.all(e)},Xe.spread=function(e){return function(t){return e.apply(null,t)}},Xe.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},D.exports=Xe,D.exports.default=Xe;var Je=D.exports;const Ve=Je.create({baseURL:"/prod-api",timeout:2e4});Ve.interceptors.request.use((e=>(e.headers["X-Auth-Token"]="LSHuWyCGxbhL2xO9xlXJGqvEHPIIgMGCBa5fNmxA",e)),(e=>Promise.reject(e))),Ve.interceptors.response.use((e=>e.data),(e=>{if(e.response&&e.response.data){const t=e.response.status,r=e.response.data.message;u.error(`Code: ${t}, Message: ${r}`),console.error("[Axios Error]",e.response)}else u.error(`${e}`);return Promise.reject(e)}));var Ye=f({props:{data:Array},setup(e){const t=d({props:e});return{listMenu:l((()=>t.props&&t.props.data?t.props.data:[]))}}});Ye.render=function(e,t,r,n,o,a){const s=p("el-menu-item"),i=p("el-submenu"),c=p("el-menu");return h(),m(c,{class:"sidebar","text-color":"#fff"},{default:g((()=>[(h(!0),m(y,null,v(e.listMenu,(e=>(h(),m(i,{key:e.id,index:`${e.id}`},{title:g((()=>[b(w(e.name),1)])),default:g((()=>[(h(!0),m(y,null,v(e.docs,(e=>(h(),m(s,{key:e.id,index:`${e.id}`},{default:g((()=>[b(w(e.title),1)])),_:2},1032,["index"])))),128))])),_:2},1032,["index"])))),128))])),_:1})};var Ke=f({props:{data:Object,url:String},setup(e){const t=d({props:e}),r=l((()=>e.data&&e.data.body?A(e.data.body):"")),n=l((()=>e.data&&e.data.updated_at?x(e.data.updated_at).format("YYYY-MM-DD"):"-"));return c(i({},E(t)),{markedContent:r,date:n,navigate:()=>{window.open(t.props.url)}})}});const We={class:"article-wrapper"},Qe={class:"article-container"},Ze={class:"article-title"},et={class:"article-sub-title"},tt={class:"article-remark"},rt=b(" 文章数据源于语雀，排版可能存在异常，且原文配图受限无法加载。为保证阅读质量请 ");Ke.render=function(e,t,r,n,o,a){const s=p("el-skeleton"),i=O("highlight");return h(),m("div",We,[j("div",Qe,[e.props.data&&e.props.data.id?(h(),m(y,{key:0},[j("p",Ze,w(e.props.data.title),1),j("p",et,[j("span",null,"日期："+w(e.date),1)]),j("p",tt,[rt,j("span",{class:"article-link",onClick:t[1]||(t[1]=(...t)=>e.navigate&&e.navigate(...t))},"阅读原文")]),S(j("div",{class:"article-content markdown-body",innerHTML:e.markedContent},null,8,["innerHTML"]),[[i]])],64)):(h(),m(s,{key:1,rows:6,animated:""}))])])};var nt=f({name:"Article",components:{Sidebar:Ye,ArticleContent:Ke},setup(){const e=d({isLoadinginit:!1,isLoadingDoc:!1,currentDocId:"",REPOS:[],currentDocDetail:{}}),t=l((()=>{if(!e.currentDocId)return null;for(const t of e.REPOS)if(t.docs&&t.docs.length)for(const r of t.docs)if(`${r.id}`===e.currentDocId)return[r,t];return null})),r=l((()=>{if(!t.value)return"";const[e,r]=t.value;return`https://www.yuque.com/${r.namespace}/${e.slug}`}));C((()=>e.currentDocId),(async r=>{if(e.currentDocId=r,!t.value)return;const[n,o]=t.value;e.isLoadingDoc=!0;const{data:a}=await(s=o.namespace,i=n.slug,Ve({url:`/repos/${s}/docs/${i}`,method:"GET"}));var s,i;e.currentDocDetail=a,e.isLoadingDoc=!1}));const n=async()=>{const{data:t}=await Ve({url:"/users/ayanko/repos",method:"GET"});e.REPOS=t.filter((e=>e.public));const r=async e=>{const{data:t}=await(r=e.id,Ve({url:`/repos/${r}/docs`,method:"GET"}));var r;e.docs=t.filter((e=>e.public&&e.status))},n=[];e.REPOS.forEach((e=>{n.push(r(e))})),await Promise.all(n);for(const o of e.REPOS)if(o.docs&&o.docs.length){e.currentDocId=`${o.docs[0].id}`;break}};R((async()=>{e.isLoadinginit=!0,await n(),e.isLoadinginit=!1}));return c(i({},E(e)),{currentDocUrl:r,selectDoc:t=>{e.currentDocId=t}})}});const ot={"element-loading-background":"rgba(0, 0, 0, 0.8)",class:"article"};nt.render=function(e,t,r,n,o,a){const s=p("sidebar"),i=p("article-content"),c=O("loading");return S((h(),m("div",ot,[j(s,{data:e.REPOS,"default-active":e.currentDocId,onSelect:e.selectDoc},null,8,["data","default-active","onSelect"]),S(j(i,{"element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.currentDocDetail,url:e.currentDocUrl},null,8,["data","url"]),[[c,e.isLoadingDoc]])],512)),[[c,e.isLoadinginit]])};export default nt;
