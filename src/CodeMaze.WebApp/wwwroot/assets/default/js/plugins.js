/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+xt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return At(e.replace(z,"$1"),t,n,i)}function st(e){return K.test(e+"")}function lt(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[b]=!0,e}function ct(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function pt(e,t,n){e=e.split("|");var r,i=e.length,a=n?null:t;while(i--)(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function yt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ct(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return gt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return at(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:vt(function(){return[0]}),last:vt(function(e,t){return[t-1]}),eq:vt(function(e,t,n){return[0>n?n+t:n]}),even:vt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:vt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:vt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:vt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=mt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=yt(n);function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t},s,!0),p=wt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[wt(Tt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))}f.push(n)}return Tt(f)}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=Ct(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?ut(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=bt(e)),n=t.length;while(n--)o=kt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Et(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}o.pseudos.nth=o.pseudos.eq;function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];while(o=u[a++])l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/*! jQuery UI - v1.10.3 - 2013-12-06
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.sortable.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,n,r,o=t.nodeName.toLowerCase();return"area"===o?(s=t.parentNode,n=s.name,t.href&&n&&"map"===s.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&a(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&a(t)}function a(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,a){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),a&&a.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var a,s,n=e(this[0]);n.length&&n[0]!==document;){if(a=n.css("position"),("absolute"===a||"relative"===a||"fixed"===a)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,a){return!!e.data(t,a[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var a=e.attr(t,"tabindex"),s=isNaN(a);return(s||a>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,a){function s(t,i,a,s){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,a&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===a?["Left","Right"]:["Top","Bottom"],r=a.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+a]=function(i){return i===t?o["inner"+a].call(this):this.each(function(){e(this).css(r,s(this,i)+"px")})},e.fn["outer"+a]=function(t,i){return"number"!=typeof t?o["outer"+a].call(this,t):this.each(function(){e(this).css(r,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,a){var s,n=e.ui[t].prototype;for(s in a)n.plugins[s]=n.plugins[s]||[],n.plugins[s].push([i,a[s]])},call:function(e,t,i){var a,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(a=0;s.length>a;a++)e.options[s[a][0]]&&s[a][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var a=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[a]>0?!0:(t[a]=1,s=t[a]>0,t[a]=0,s)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,a=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(n){}a(t)},e.widget=function(i,s,a){var n,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],n=u+"-"+i,a||(a=s,s=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:a.version,_proto:e.extend({},a),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(a,function(i,a){return e.isFunction(a)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,n=this._superApply;return this._super=e,this._superApply=t,i=a.apply(this,arguments),this._super=s,this._superApply=n,i}}(),t):(l[i]=a,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:n}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var a,n,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(a in r[o])n=r[o][a],r[o].hasOwnProperty(a)&&n!==t&&(i[a]=e.isPlainObject(n)?e.isPlainObject(i[a])?e.widget.extend({},i[a],n):e.widget.extend({},n):n);return i},e.widget.bridge=function(i,a){var n=a.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,a=e.data(this,n);return a?e.isFunction(a[r])&&"_"!==r.charAt(0)?(s=a[r].apply(a,h),s!==a&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,n);t?t.option(r||{})._init():e.data(this,n,new a(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var a,n,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},a=i.split("."),i=a.shift(),a.length){for(n=o[i]=e.widget.extend({},this.options[i]),r=0;a.length-1>r;r++)n[a[r]]=n[a[r]]||{},n=n[a[r]];if(i=a.pop(),s===t)return n[i]===t?null:n[i];n[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,a){var n,r=this;"boolean"!=typeof i&&(a=s,s=i,i=!1),a?(s=n=e(s),this.bindings=this.bindings.add(s)):(a=s,s=this.element,n=this.widget()),e.each(a,function(a,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=a.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?n.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var a,n,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(a in n)a in i||(i[a]=n[a]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,a,n){"string"==typeof a&&(a={effect:a});var r,o=a?a===!0||"number"==typeof a?i:a.effect||i:t;a=a||{},"number"==typeof a&&(a={duration:a}),r=!e.isEmptyObject(a),a.complete=n,a.delay&&s.delay(a.delay),r&&e.effects&&e.effects.effect[o]?s[t](a):o!==t&&s[o]?s[o](a.duration,a.easing,n):s.queue(function(i){e(this)[t](),n&&n.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,a=1===i.which,n="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return a&&!n&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e){function t(e,t,i){return e>t&&t+i>e}function i(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,i){"disabled"===t?(this.options[t]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,i){var s=null,a=!1,n=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,n.widgetName+"-item")===n?(s=e(this),!1):undefined}),e.data(t.target,n.widgetName+"-item")===n&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(a=!0)}),a)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var a,n,r=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,r.cursorAt&&this._adjustOffsetFromHelper(r.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),r.containment&&this._setContainment(),r.cursor&&"auto"!==r.cursor&&(n=this.document.find("body"),this.storedCursor=n.css("cursor"),n.css("cursor",r.cursor),this.storedStylesheet=e("<style>*{ cursor: "+r.cursor+" !important; }</style>").appendTo(n)),r.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",r.opacity)),r.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",r.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(a=this.containers.length-1;a>=0;a--)this.containers[a]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,a,n,r=this.options,o=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-this.overflowOffset.top<r.scrollSensitivity&&(this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop-r.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-this.overflowOffset.left<r.scrollSensitivity&&(this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft-r.scrollSpeed)):(t.pageY-e(document).scrollTop()<r.scrollSensitivity?o=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(o=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed)),t.pageX-e(document).scrollLeft()<r.scrollSensitivity?o=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(o=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))),o!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],a=s.item[0],n=this._intersectsWithPointer(s),n&&s.instance===this.currentContainer&&a!==this.currentItem[0]&&this.placeholder[1===n?"next":"prev"]()[0]!==a&&!e.contains(this.placeholder[0],a)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],a):!0)){if(this.direction=1===n?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,a=this.placeholder.offset(),n=this.options.axis,r={};n&&"x"!==n||(r.left=a.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),n&&"y"!==n||(r.top=a.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(r,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,a=s+this.helperProportions.height,n=e.left,r=n+e.width,o=e.top,h=o+e.height,l=this.offset.click.top,u=this.offset.click.left,c="x"===this.options.axis||s+l>o&&h>s+l,d="y"===this.options.axis||t+u>n&&r>t+u,p=c&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>n&&r>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>o&&h>a-this.helperProportions.height/2},_intersectsWithPointer:function(e){var i="x"===this.options.axis||t(this.positionAbs.top+this.offset.click.top,e.top,e.height),s="y"===this.options.axis||t(this.positionAbs.left+this.offset.click.left,e.left,e.width),a=i&&s,n=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return a?this.floating?r&&"right"===r||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var i=t(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),s=t(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),a=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&s||"left"===n&&!s:a&&("down"===a&&i||"up"===a&&!i)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var i,s,a,n,r=[],o=[],h=this._connectWith();if(h&&t)for(i=h.length-1;i>=0;i--)for(a=e(h[i]),s=a.length-1;s>=0;s--)n=e.data(a[s],this.widgetFullName),n&&n!==this&&!n.options.disabled&&o.push([e.isFunction(n.options.items)?n.options.items.call(n.element):e(n.options.items,n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),n]);for(o.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=o.length-1;i>=0;i--)o[i][0].each(function(){r.push(this)});return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,a,n,r,o,h,l,u=this.items,c=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(a=e(d[i]),s=a.length-1;s>=0;s--)n=e.data(a[s],this.widgetFullName),n&&n!==this&&!n.options.disabled&&(c.push([e.isFunction(n.options.items)?n.options.items.call(n.element[0],t,{item:this.currentItem}):e(n.options.items,n.element),n]),this.containers.push(n));for(i=c.length-1;i>=0;i--)for(r=c[i][1],o=c[i][0],s=0,l=o.length;l>s;s++)h=e(o[s]),h.data(this.widgetName+"-item",r),u.push({item:h,instance:r,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,a,n;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(a=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=a.outerWidth(),s.height=a.outerHeight()),n=a.offset(),s.left=n.left,s.top=n.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)n=this.containers[i].element.offset(),this.containers[i].containerCache.left=n.left,this.containers[i].containerCache.top=n.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),a=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(a)}):"img"===s&&a.attr("src",t.currentItem.attr("src")),i||a.css("visibility","hidden"),a},update:function(e,a){(!i||s.forcePlaceholderSize)&&(a.height()||a.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),a.width()||a.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_contactContainers:function(s){var a,n,r,o,h,l,u,c,d,p,f=null,m=null;for(a=this.containers.length-1;a>=0;a--)if(!e.contains(this.currentItem[0],this.containers[a].element[0]))if(this._intersectsWith(this.containers[a].containerCache)){if(f&&e.contains(this.containers[a].element[0],f.element[0]))continue;f=this.containers[a],m=a}else this.containers[a].containerCache.over&&(this.containers[a]._trigger("out",s,this._uiHash(this)),this.containers[a].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(r=1e4,o=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",u=this.positionAbs[h]+this.offset.click[h],n=this.items.length-1;n>=0;n--)e.contains(this.containers[m].element[0],this.items[n].item[0])&&this.items[n].item[0]!==this.currentItem[0]&&(!p||t(this.positionAbs.top+this.offset.click.top,this.items[n].top,this.items[n].height))&&(c=this.items[n].item.offset()[h],d=!1,Math.abs(c-u)>Math.abs(c+this.items[n][l]-u)&&(d=!0,c+=this.items[n][l]),r>Math.abs(c-u)&&(r=Math.abs(c-u),o=this.items[n],this.direction=d?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[m])return;o?this._rearrange(s,o,null,!0):this._rearrange(s,null,this.containers[m].element,!0),this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,a=this.options;"parent"===a.containment&&(a.containment=this.helper[0].parentNode),("document"===a.containment||"window"===a.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"===a.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"===a.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(a.containment)||(t=e(a.containment)[0],i=e(a.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,a="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,n=/(html|body)/i.test(a[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():n?0:a.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():n?0:a.scrollLeft())*s}},_generatePosition:function(t){var i,s,a=this.options,n=t.pageX,r=t.pageY,o="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(o[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(n=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(r=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(n=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(r=this.containment[3]+this.offset.click.top)),a.grid&&(i=this.originalPageY+Math.round((r-this.originalPageY)/a.grid[1])*a.grid[1],r=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-a.grid[1]:i+a.grid[1]:i,s=this.originalPageX+Math.round((n-this.originalPageX)/a.grid[0])*a.grid[0],n=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-a.grid[0]:s+a.grid[0]:s)),{top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:o.scrollTop()),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:o.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var a=this.counter;this._delay(function(){a===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&s.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||s.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(s.push(function(e){this._trigger("remove",e,this._uiHash())}),s.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)t||s.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!t){for(this._trigger("beforeStop",e,this._uiHash()),i=0;s.length>i;i++)s[i].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!1}if(t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!t){for(i=0;s.length>i;i++)s[i].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}})})(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*! HTML5 Shiv vpre3.6 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
  Uncompressed source: https://github.com/aFarkas/html5shiv  */
(function (a, b) { function h(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function i() { var a = l.elements; return typeof a == "string" ? a.split(" ") : a } function j(a) { var b = {}, c = a.createElement, f = a.createDocumentFragment, g = f(); a.createElement = function (a) { if (!l.shivMethods) return c(a); var f; return b[a] ? f = b[a].cloneNode() : e.test(a) ? f = (b[a] = c(a)).cloneNode() : f = c(a), f.canHaveChildren && !d.test(a) ? g.appendChild(f) : f }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function (a) { return c(a), g.createElement(a), 'c("' + a + '")' }) + ");return n}")(l, g) } function k(a) { var b; return a.documentShived ? a : (l.shivCSS && !f && (b = !!h(a, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), g || (b = !j(a)), b && (a.documentShived = b), a) } var c = a.html5 || {}, d = /^<|^(?:button|form|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i, f, g; (function () { var c = b.createElement("a"); c.innerHTML = "<xyz></xyz>", f = "hidden" in c, f && typeof injectElementWithStyles == "function" && injectElementWithStyles("#modernizr{}", function (b) { b.hidden = !0, f = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).display == "none" }), g = c.childNodes.length == 1 || function () { try { b.createElement("a") } catch (a) { return !0 } var c = b.createDocumentFragment(); return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined" }() })(); var l = { elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: c.shivCSS !== !1, shivMethods: c.shivMethods !== !1, type: "default", shivDocument: k }; a.html5 = l, k(b) })(this, document)
// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license

$(function() {
    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };

    function isElementInDOM(ele) {
      while (ele = ele.parentNode) {
        if (ele == document) return true;
      }
      return false;
    };

    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };

    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();

                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);

                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });

                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);

                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }

                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }

                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }

                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },

        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },

        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },

        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },

        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
                this.$tip.data('tipsy-pointee', this.$element[0]);
            }
            return this.$tip;
        },

        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },

        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };

    $.fn.tipsy = function(options) {
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }

        options = $.extend({}, $.fn.tipsy.defaults, options);

        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }

        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };

        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };

        if (!options.live) this.each(function() { get(this); });

        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }

        return this;
    };

    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };

    $.fn.tipsy.revalidate = function() {
      $('.tipsy').each(function() {
        var pointee = $.data(this, 'tipsy-pointee');
        if (!pointee || !isElementInDOM(pointee)) {
          $(this).remove();
        }
      });
    };

    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };

    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };

    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };

    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
			    boundTop = $(document).scrollTop() + margin,
			    boundLeft = $(document).scrollLeft() + margin,
			    $this = $(this);

			if ($this.offset().top < boundTop) dir.ns = 'n';
			if ($this.offset().left < boundLeft) dir.ew = 'w';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};
});
/*! * jQuery Tools v1.2.7 - The missing UI library for the Web *  * tabs/tabs.js *  * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE. *  * http://flowplayer.org/tools/ *  */(function (a) { a.tools = a.tools || { version: "v1.2.7" }, a.tools.tabs = { conf: { tabs: "a", current: "current", onBeforeClick: null, onClick: null, effect: "default", initialEffect: !1, initialIndex: 0, event: "click", rotate: !1, slideUpSpeed: 400, slideDownSpeed: 400, history: !1 }, addEffect: function (a, c) { b[a] = c } }; var b = { "default": function (a, b) { this.getPanes().hide().eq(a).show(), b.call() }, fade: function (a, b) { var c = this.getConf(), d = c.fadeOutSpeed, e = this.getPanes(); d ? e.fadeOut(d) : e.hide(), e.eq(a).fadeIn(c.fadeInSpeed, b) }, slide: function (a, b) { var c = this.getConf(); this.getPanes().slideUp(c.slideUpSpeed), this.getPanes().eq(a).slideDown(c.slideDownSpeed, b) }, ajax: function (a, b) { this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"), b) } }, c, d; a.tools.tabs.addEffect("horizontal", function (b, e) { if (!c) { var f = this.getPanes().eq(b), g = this.getCurrentPane(); d || (d = this.getPanes().eq(0).width()), c = !0, f.show(), g.animate({ width: 0 }, { step: function (a) { f.css("width", d - a) }, complete: function () { a(this).hide(), e.call(), c = !1 } }), g.length || (e.call(), c = !1) } }); function e(c, d, e) { var f = this, g = c.add(this), h = c.find(e.tabs), i = d.jquery ? d : c.children(d), j; h.length || (h = c.children()), i.length || (i = c.parent().find(d)), i.length || (i = a(d)), a.extend(this, { click: function (d, i) { var k = h.eq(d), l = !c.data("tabs"); typeof d == "string" && d.replace("#", "") && (k = h.filter("[href*=\"" + d.replace("#", "") + "\"]"), d = Math.max(h.index(k), 0)); if (e.rotate) { var m = h.length - 1; if (d < 0) return f.click(m, i); if (d > m) return f.click(0, i) } if (!k.length) { if (j >= 0) return f; d = e.initialIndex, k = h.eq(d) } if (d === j) return f; i = i || a.Event(), i.type = "onBeforeClick", g.trigger(i, [d]); if (!i.isDefaultPrevented()) { var n = l ? e.initialEffect && e.effect || "default" : e.effect; b[n].call(f, d, function () { j = d, i.type = "onClick", g.trigger(i, [d]) }), h.removeClass(e.current), k.addClass(e.current); return f } }, getConf: function () { return e }, getTabs: function () { return h }, getPanes: function () { return i }, getCurrentPane: function () { return i.eq(j) }, getCurrentTab: function () { return h.eq(j) }, getIndex: function () { return j }, next: function () { return f.click(j + 1) }, prev: function () { return f.click(j - 1) }, destroy: function () { h.off(e.event).removeClass(e.current), i.find("a[href^=\"#\"]").off("click.T"); return f } }), a.each("onBeforeClick,onClick".split(","), function (b, c) { a.isFunction(e[c]) && a(f).on(c, e[c]), f[c] = function (b) { b && a(f).on(c, b); return f } }), e.history && a.fn.history && (a.tools.history.init(h), e.event = "history"), h.each(function (b) { a(this).on(e.event, function (a) { f.click(b, a); return a.preventDefault() }) }), i.find("a[href^=\"#\"]").on("click.T", function (b) { f.click(a(this).attr("href"), b) }), location.hash && e.tabs == "a" && c.find("[href=\"" + location.hash + "\"]").length ? f.click(location.hash) : (e.initialIndex === 0 || e.initialIndex > 0) && f.click(e.initialIndex) } a.fn.tabs = function (b, c) { var d = this.data("tabs"); d && (d.destroy(), this.removeData("tabs")), a.isFunction(c) && (c = { onBeforeClick: c }), c = a.extend({}, a.tools.tabs.conf, c), this.each(function () { d = new e(a(this), b, c), a(this).data("tabs", d) }); return c.api ? d : this } })(jQuery);
/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */
(function (d) {
    d.flexslider = function (j, l) {
        var a = d(j), c = d.extend({}, d.flexslider.defaults, l), e = c.namespace, q = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch, u = q ? "touchend" : "click", m = "vertical" === c.direction, n = c.reverse, h = 0 < c.itemWidth, s = "fade" === c.animation, t = "" !== c.asNavFor, f = {}; d.data(j, "flexslider", a); f = {
            init: function () {
                a.animating = !1; a.currentSlide = c.startAt; a.animatingTo = a.currentSlide; a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last; a.containerSelector = c.selector.substr(0,
                    c.selector.search(" ")); a.slides = d(c.selector, a); a.container = d(a.containerSelector, a); a.count = a.slides.length; a.syncExists = 0 < d(c.sync).length; "slide" === c.animation && (c.animation = "swing"); a.prop = m ? "top" : "marginLeft"; a.args = {}; a.manualPause = !1; var b = a, g; if (g = !c.video) if (g = !s) if (g = c.useCSS) a: {
                        g = document.createElement("div"); var p = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], e; for (e in p) if (void 0 !== g.style[p[e]]) {
                            a.pfx = p[e].replace("Perspective", "").toLowerCase();
                            a.prop = "-" + a.pfx + "-transform"; g = !0; break a
                        } g = !1
                    } b.transitions = g; "" !== c.controlsContainer && (a.controlsContainer = 0 < d(c.controlsContainer).length && d(c.controlsContainer)); "" !== c.manualControls && (a.manualControls = 0 < d(c.manualControls).length && d(c.manualControls)); c.randomize && (a.slides.sort(function () { return Math.round(Math.random()) - 0.5 }), a.container.empty().append(a.slides)); a.doMath(); t && f.asNav.setup(); a.setup("init"); c.controlNav && f.controlNav.setup(); c.directionNav && f.directionNav.setup(); c.keyboard &&
                        (1 === d(a.containerSelector).length || c.multipleKeyboard) && d(document).bind("keyup", function (b) { b = b.keyCode; if (!a.animating && (39 === b || 37 === b)) b = 39 === b ? a.getTarget("next") : 37 === b ? a.getTarget("prev") : !1, a.flexAnimate(b, c.pauseOnAction) }); c.mousewheel && a.bind("mousewheel", function (b, g) { b.preventDefault(); var d = 0 > g ? a.getTarget("next") : a.getTarget("prev"); a.flexAnimate(d, c.pauseOnAction) }); c.pausePlay && f.pausePlay.setup(); c.slideshow && (c.pauseOnHover && a.hover(function () { !a.manualPlay && !a.manualPause && a.pause() },
                            function () { !a.manualPause && !a.manualPlay && a.play() }), 0 < c.initDelay ? setTimeout(a.play, c.initDelay) : a.play()); q && c.touch && f.touch(); (!s || s && c.smoothHeight) && d(window).bind("resize focus", f.resize); setTimeout(function () { c.start(a) }, 200)
            }, asNav: {
                setup: function () {
                    a.asNav = !0; a.animatingTo = Math.floor(a.currentSlide / a.move); a.currentItem = a.currentSlide; a.slides.removeClass(e + "active-slide").eq(a.currentItem).addClass(e + "active-slide"); a.slides.click(function (b) {
                        b.preventDefault(); b = d(this); var g = b.index();
                        !d(c.asNavFor).data("flexslider").animating && !b.hasClass("active") && (a.direction = a.currentItem < g ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction, !1, !0, !0))
                    })
                }
            }, controlNav: {
                setup: function () { a.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging() }, setupPaging: function () {
                    var b = 1, g; a.controlNavScaffold = d('<ol class="' + e + "control-nav " + e + ("thumbnails" === c.controlNav ? "control-thumbs" : "control-paging") + '"></ol>'); if (1 < a.pagingCount) for (var p = 0; p < a.pagingCount; p++)g = "thumbnails" === c.controlNav ?
                        '<img src="' + a.slides.eq(p).attr("data-thumb") + '"/>' : "<a>" + b + "</a>", a.controlNavScaffold.append("<li>" + g + "</li>"), b++; a.controlsContainer ? d(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold); f.controlNav.set(); f.controlNav.active(); a.controlNavScaffold.delegate("a, img", u, function (b) { b.preventDefault(); b = d(this); var g = a.controlNav.index(b); b.hasClass(e + "active") || (a.direction = g > a.currentSlide ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction)) }); q && a.controlNavScaffold.delegate("a",
                            "click touchstart", function (a) { a.preventDefault() })
                }, setupManual: function () { a.controlNav = a.manualControls; f.controlNav.active(); a.controlNav.live(u, function (b) { b.preventDefault(); b = d(this); var g = a.controlNav.index(b); b.hasClass(e + "active") || (g > a.currentSlide ? a.direction = "next" : a.direction = "prev", a.flexAnimate(g, c.pauseOnAction)) }); q && a.controlNav.live("click touchstart", function (a) { a.preventDefault() }) }, set: function () {
                    a.controlNav = d("." + e + "control-nav li " + ("thumbnails" === c.controlNav ? "img" : "a"),
                        a.controlsContainer ? a.controlsContainer : a)
                }, active: function () { a.controlNav.removeClass(e + "active").eq(a.animatingTo).addClass(e + "active") }, update: function (b, c) { 1 < a.pagingCount && "add" === b ? a.controlNavScaffold.append(d("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(c).closest("li").remove(); f.controlNav.set(); 1 < a.pagingCount && a.pagingCount !== a.controlNav.length ? a.update(c, b) : f.controlNav.active() }
            }, directionNav: {
                setup: function () {
                    var b = d('<ul class="' +
                        e + 'direction-nav"><li><a class="' + e + 'prev" href="#"><i class="icon-angle-left"></i></a></li><li><a class="' + e + 'next" href="#"><i class="icon-angle-right"></i></a></li></ul>'); a.controlsContainer ? (d(a.controlsContainer).append(b), a.directionNav = d("." + e + "direction-nav li a", a.controlsContainer)) : (a.append(b), a.directionNav = d("." + e + "direction-nav li a", a)); f.directionNav.update(); a.directionNav.bind(u, function (b) { b.preventDefault(); b = d(this).hasClass(e + "next") ? a.getTarget("next") : a.getTarget("prev"); a.flexAnimate(b, c.pauseOnAction) });
                    q && a.directionNav.bind("click touchstart", function (a) { a.preventDefault() })
                }, update: function () { var b = e + "disabled"; 1 === a.pagingCount ? a.directionNav.addClass(b) : c.animationLoop ? a.directionNav.removeClass(b) : 0 === a.animatingTo ? a.directionNav.removeClass(b).filter("." + e + "prev").addClass(b) : a.animatingTo === a.last ? a.directionNav.removeClass(b).filter("." + e + "next").addClass(b) : a.directionNav.removeClass(b) }
            }, pausePlay: {
                setup: function () {
                    var b = d('<div class="' + e + 'pauseplay"><a></a></div>'); a.controlsContainer ?
                        (a.controlsContainer.append(b), a.pausePlay = d("." + e + "pauseplay a", a.controlsContainer)) : (a.append(b), a.pausePlay = d("." + e + "pauseplay a", a)); f.pausePlay.update(c.slideshow ? e + "pause" : e + "play"); a.pausePlay.bind(u, function (b) { b.preventDefault(); d(this).hasClass(e + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play()) }); q && a.pausePlay.bind("click touchstart", function (a) { a.preventDefault() })
                }, update: function (b) {
                    "play" === b ? a.pausePlay.removeClass(e + "pause").addClass(e +
                        "play").text(c.playText) : a.pausePlay.removeClass(e + "play").addClass(e + "pause").text(c.pauseText)
                }
            }, touch: function () {
                function b(b) { k = m ? d - b.touches[0].pageY : d - b.touches[0].pageX; q = m ? Math.abs(k) < Math.abs(b.touches[0].pageX - e) : Math.abs(k) < Math.abs(b.touches[0].pageY - e); if (!q || 500 < Number(new Date) - l) b.preventDefault(), !s && a.transitions && (c.animationLoop || (k /= 0 === a.currentSlide && 0 > k || a.currentSlide === a.last && 0 < k ? Math.abs(k) / r + 2 : 1), a.setProps(f + k, "setTouch")) } function g() {
                    j.removeEventListener("touchmove",
                        b, !1); if (a.animatingTo === a.currentSlide && !q && null !== k) { var h = n ? -k : k, m = 0 < h ? a.getTarget("next") : a.getTarget("prev"); a.canAdvance(m) && (550 > Number(new Date) - l && 50 < Math.abs(h) || Math.abs(h) > r / 2) ? a.flexAnimate(m, c.pauseOnAction) : s || a.flexAnimate(a.currentSlide, c.pauseOnAction, !0) } j.removeEventListener("touchend", g, !1); f = k = e = d = null
                } var d, e, f, r, k, l, q = !1; j.addEventListener("touchstart", function (k) {
                    a.animating ? k.preventDefault() : 1 === k.touches.length && (a.pause(), r = m ? a.h : a.w, l = Number(new Date), f = h && n && a.animatingTo ===
                        a.last ? 0 : h && n ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : h && a.currentSlide === a.last ? a.limit : h ? (a.itemW + c.itemMargin) * a.move * a.currentSlide : n ? (a.last - a.currentSlide + a.cloneOffset) * r : (a.currentSlide + a.cloneOffset) * r, d = m ? k.touches[0].pageY : k.touches[0].pageX, e = m ? k.touches[0].pageX : k.touches[0].pageY, j.addEventListener("touchmove", b, !1), j.addEventListener("touchend", g, !1))
                }, !1)
            }, resize: function () {
                !a.animating && a.is(":visible") && (h || a.doMath(), s ? f.smoothHeight() : h ? (a.slides.width(a.computedW),
                    a.update(a.pagingCount), a.setProps()) : m ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (c.smoothHeight && f.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")))
            }, smoothHeight: function (b) { if (!m || s) { var c = s ? a : a.viewport; b ? c.animate({ height: a.slides.eq(a.animatingTo).height() }, b) : c.height(a.slides.eq(a.animatingTo).height()) } }, sync: function (b) {
                var g = d(c.sync).data("flexslider"), e = a.animatingTo; switch (b) {
                    case "animate": g.flexAnimate(e, c.pauseOnAction, !1, !0); break; case "play": !g.playing &&
                        !g.asNav && g.play(); break; case "pause": g.pause()
                }
            }
        }; a.flexAnimate = function (b, g, p, j, l) {
            t && 1 === a.pagingCount && (a.direction = a.currentItem < b ? "next" : "prev"); if (!a.animating && (a.canAdvance(b, l) || p) && a.is(":visible")) {
                if (t && j) if (p = d(c.asNavFor).data("flexslider"), a.atEnd = 0 === b || b === a.count - 1, p.flexAnimate(b, !0, !1, !0, l), a.direction = a.currentItem < b ? "next" : "prev", p.direction = a.direction, Math.ceil((b + 1) / a.visible) - 1 !== a.currentSlide && 0 !== b) a.currentItem = b, a.slides.removeClass(e + "active-slide").eq(b).addClass(e +
                    "active-slide"), b = Math.floor(b / a.visible); else return a.currentItem = b, a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), !1; a.animating = !0; a.animatingTo = b; c.before(a); g && a.pause(); a.syncExists && !l && f.sync("animate"); c.controlNav && f.controlNav.active(); h || a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"); a.atEnd = 0 === b || b === a.last; c.directionNav && f.directionNav.update(); b === a.last && (c.end(a), c.animationLoop || a.pause()); if (s) q ? (a.slides.eq(a.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), a.slides.eq(b).css({ opacity: 1, zIndex: 2 }), a.slides.unbind("webkitTransitionEnd transitionend"), a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend", function () { c.after(a) }), a.animating = !1, a.currentSlide = a.animatingTo) : (a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed, c.easing), a.slides.eq(b).fadeIn(c.animationSpeed, c.easing, a.wrapup)); else {
                    var r = m ? a.slides.filter(":first").height() : a.computedW; h ? (b = c.itemWidth > a.w ? 2 * c.itemMargin : c.itemMargin, b = (a.itemW + b) * a.move * a.animatingTo,
                        b = b > a.limit && 1 !== a.visible ? a.limit : b) : b = 0 === a.currentSlide && b === a.count - 1 && c.animationLoop && "next" !== a.direction ? n ? (a.count + a.cloneOffset) * r : 0 : a.currentSlide === a.last && 0 === b && c.animationLoop && "prev" !== a.direction ? n ? 0 : (a.count + 1) * r : n ? (a.count - 1 - b + a.cloneOffset) * r : (b + a.cloneOffset) * r; a.setProps(b, "", c.animationSpeed); if (a.transitions) {
                            if (!c.animationLoop || !a.atEnd) a.animating = !1, a.currentSlide = a.animatingTo; a.container.unbind("webkitTransitionEnd transitionend"); a.container.bind("webkitTransitionEnd transitionend",
                                function () { a.wrapup(r) })
                        } else a.container.animate(a.args, c.animationSpeed, c.easing, function () { a.wrapup(r) })
                } c.smoothHeight && f.smoothHeight(c.animationSpeed)
            }
        }; a.wrapup = function (b) { !s && !h && (0 === a.currentSlide && a.animatingTo === a.last && c.animationLoop ? a.setProps(b, "jumpEnd") : a.currentSlide === a.last && (0 === a.animatingTo && c.animationLoop) && a.setProps(b, "jumpStart")); a.animating = !1; a.currentSlide = a.animatingTo; c.after(a) }; a.animateSlides = function () { a.animating || a.flexAnimate(a.getTarget("next")) }; a.pause =
            function () { clearInterval(a.animatedSlides); a.playing = !1; c.pausePlay && f.pausePlay.update("play"); a.syncExists && f.sync("pause") }; a.play = function () { a.animatedSlides = setInterval(a.animateSlides, c.slideshowSpeed); a.playing = !0; c.pausePlay && f.pausePlay.update("pause"); a.syncExists && f.sync("play") }; a.canAdvance = function (b, g) {
                var d = t ? a.pagingCount - 1 : a.last; return g ? !0 : t && a.currentItem === a.count - 1 && 0 === b && "prev" === a.direction ? !0 : t && 0 === a.currentItem && b === a.pagingCount - 1 && "next" !== a.direction ? !1 : b === a.currentSlide &&
                    !t ? !1 : c.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && b === d && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === d && 0 === b && "next" === a.direction ? !1 : !0
            }; a.getTarget = function (b) { a.direction = b; return "next" === b ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1 }; a.setProps = function (b, g, d) {
                var e, f = b ? b : (a.itemW + c.itemMargin) * a.move * a.animatingTo; e = -1 * function () {
                    if (h) return "setTouch" === g ? b : n && a.animatingTo === a.last ? 0 : n ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : a.animatingTo ===
                        a.last ? a.limit : f; switch (g) { case "setTotal": return n ? (a.count - 1 - a.currentSlide + a.cloneOffset) * b : (a.currentSlide + a.cloneOffset) * b; case "setTouch": return b; case "jumpEnd": return n ? b : a.count * b; case "jumpStart": return n ? a.count * b : b; default: return b }
                }() + "px"; a.transitions && (e = m ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)", d = void 0 !== d ? d / 1E3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", d)); a.args[a.prop] = e; (a.transitions || void 0 === d) && a.container.css(a.args)
            }; a.setup = function (b) {
                if (s) a.slides.css({
                    width: "100%",
                    "float": "left", marginRight: "-100%", position: "relative"
                }), "init" === b && (q ? a.slides.css({ opacity: 0, display: "block", webkitTransition: "opacity " + c.animationSpeed / 1E3 + "s ease", zIndex: 1 }).eq(a.currentSlide).css({ opacity: 1, zIndex: 2 }) : a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed, c.easing)), c.smoothHeight && f.smoothHeight(); else {
                    var g, p; "init" === b && (a.viewport = d('<div class="' + e + 'viewport"></div>').css({ overflow: "hidden", position: "relative" }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset =
                        0, n && (p = d.makeArray(a.slides).reverse(), a.slides = d(p), a.container.empty().append(a.slides))); c.animationLoop && !h && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== b && a.container.find(".clone").remove(), a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone"))); a.newSlides = d(c.selector, a); g = n ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset; m && !h ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"),
                            setTimeout(function () { a.newSlides.css({ display: "block" }); a.doMath(); a.viewport.height(a.h); a.setProps(g * a.h, "init") }, "init" === b ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(g * a.computedW, "init"), setTimeout(function () { a.doMath(); a.newSlides.css({ width: a.computedW, "float": "left", display: "block" }); c.smoothHeight && f.smoothHeight() }, "init" === b ? 100 : 0))
                } h || a.slides.removeClass(e + "active-slide").eq(a.currentSlide).addClass(e + "active-slide")
            }; a.doMath = function () {
                var b = a.slides.first(),
                    d = c.itemMargin, e = c.minItems, f = c.maxItems; a.w = a.width(); a.h = b.height(); a.boxPadding = b.outerWidth() - b.width(); h ? (a.itemT = c.itemWidth + d, a.minW = e ? e * a.itemT : a.w, a.maxW = f ? f * a.itemT : a.w, a.itemW = a.minW > a.w ? (a.w - d * e) / e : a.maxW < a.w ? (a.w - d * f) / f : c.itemWidth > a.w ? a.w : c.itemWidth, a.visible = Math.floor(a.w / (a.itemW + d)), a.move = 0 < c.move && c.move < a.visible ? c.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : c.itemWidth > a.w ? (a.itemW + 2 * d) * a.count - a.w -
                        d : (a.itemW + d) * a.count - a.w - d) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1); a.computedW = a.itemW - a.boxPadding
            }; a.update = function (b, d) {
                a.doMath(); h || (b < a.currentSlide ? a.currentSlide += 1 : b <= a.currentSlide && 0 !== b && (a.currentSlide -= 1), a.animatingTo = a.currentSlide); if (c.controlNav && !a.manualControls) if ("add" === d && !h || a.pagingCount > a.controlNav.length) f.controlNav.update("add"); else if ("remove" === d && !h || a.pagingCount < a.controlNav.length) h && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1),
                    f.controlNav.update("remove", a.last); c.directionNav && f.directionNav.update()
            }; a.addSlide = function (b, e) { var f = d(b); a.count += 1; a.last = a.count - 1; m && n ? void 0 !== e ? a.slides.eq(a.count - e).after(f) : a.container.prepend(f) : void 0 !== e ? a.slides.eq(e).before(f) : a.container.append(f); a.update(e, "add"); a.slides = d(c.selector + ":not(.clone)", a); a.setup(); c.added(a) }; a.removeSlide = function (b) {
                var e = isNaN(b) ? a.slides.index(d(b)) : b; a.count -= 1; a.last = a.count - 1; isNaN(b) ? d(b, a.slides).remove() : m && n ? a.slides.eq(a.last).remove() :
                    a.slides.eq(b).remove(); a.doMath(); a.update(e, "remove"); a.slides = d(c.selector + ":not(.clone)", a); a.setup(); c.removed(a)
            }; f.init()
    }; d.flexslider.defaults = {
        namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0, slideshow: !0, slideshowSpeed: 7E3, animationSpeed: 600, initDelay: 0, randomize: !1, pauseOnAction: !0, pauseOnHover: !1, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: "Previous", nextText: "Next",
        keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 0, maxItems: 0, move: 0, start: function () { }, before: function () { }, after: function () { }, end: function () { }, added: function () { }, removed: function () { }
    }; d.fn.flexslider = function (j) {
        void 0 === j && (j = {}); if ("object" === typeof j) return this.each(function () {
            var a = d(this), c = a.find(j.selector ? j.selector : ".slides > li"); 1 === c.length ? (c.fadeIn(400),
                j.start && j.start(a)) : void 0 == a.data("flexslider") && new d.flexslider(this, j)
        }); var l = d(this).data("flexslider"); switch (j) { case "play": l.play(); break; case "pause": l.pause(); break; case "next": l.flexAnimate(l.getTarget("next"), !0); break; case "prev": case "previous": l.flexAnimate(l.getTarget("prev"), !0); break; default: "number" === typeof j && l.flexAnimate(j, !0) }
    }
})(jQuery);
/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.5
------------------------------------------------------------------------- */
(function (e) { function t() { var e = location.href; hashtag = e.indexOf("#prettyPhoto") !== -1 ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : false; return hashtag } function n() { if (typeof theRel == "undefined") return; location.hash = theRel + "/" + rel_index + "/" } function r() { if (location.href.indexOf("#prettyPhoto") !== -1) location.hash = "prettyPhoto" } function i(e, t) { e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var n = "[\\?&]" + e + "=([^&#]*)"; var r = new RegExp(n); var i = r.exec(t); return i == null ? "" : i[1] } e.prettyPhoto = { version: "3.1.5" }; e.fn.prettyPhoto = function (s) { function g() { e(".pp_loaderIcon").hide(); projectedTop = scroll_pos["scrollTop"] + (d / 2 - a["containerHeight"] / 2); if (projectedTop < 0) projectedTop = 0; $ppt.fadeTo(settings.animation_speed, 1); $pp_pic_holder.find(".pp_content").animate({ height: a["contentHeight"], width: a["contentWidth"] }, settings.animation_speed); $pp_pic_holder.animate({ top: projectedTop, left: v / 2 - a["containerWidth"] / 2 < 0 ? 0 : v / 2 - a["containerWidth"] / 2, width: a["containerWidth"] }, settings.animation_speed, function () { $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a["height"]).width(a["width"]); $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed); if (isSet && S(pp_images[set_position]) == "image") { $pp_pic_holder.find(".pp_hoverContainer").show() } else { $pp_pic_holder.find(".pp_hoverContainer").hide() } if (settings.allow_expand) { if (a["resized"]) { e("a.pp_expand,a.pp_contract").show() } else { e("a.pp_expand").hide() } } if (settings.autoplay_slideshow && !m && !f) e.prettyPhoto.startSlideshow(); settings.changepicturecallback(); f = true }); C(); s.ajaxcallback() } function y(t) { $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"); $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () { e(".pp_loaderIcon").show(); t() }) } function b(t) { t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide() } function w(e, t) { resized = false; E(e, t); imageWidth = e, imageHeight = t; if ((p > v || h > d) && doresize && settings.allow_resize && !u) { resized = true, fitting = false; while (!fitting) { if (p > v) { imageWidth = v - 200; imageHeight = t / e * imageWidth } else if (h > d) { imageHeight = d - 200; imageWidth = e / t * imageHeight } else { fitting = true } h = imageHeight, p = imageWidth } if (p > v || h > d) { w(p, h) } E(imageWidth, imageHeight) } return { width: Math.floor(imageWidth), height: Math.floor(imageHeight), containerHeight: Math.floor(h), containerWidth: Math.floor(p) + settings.horizontal_padding * 2, contentHeight: Math.floor(l), contentWidth: Math.floor(c), resized: resized } } function E(t, n) { t = parseFloat(t); n = parseFloat(n); $pp_details = $pp_pic_holder.find(".pp_details"); $pp_details.width(t); detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")); $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({ position: "absolute", top: -1e4 }); detailsHeight += $pp_details.height(); detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight; $pp_details.remove(); $pp_title = $pp_pic_holder.find(".ppt"); $pp_title.width(t); titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")); $pp_title = $pp_title.clone().appendTo(e("body")).css({ position: "absolute", top: -1e4 }); titleHeight += $pp_title.height(); $pp_title.remove(); l = n + detailsHeight; c = t; h = l + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(); p = t } function S(e) { if (e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i)) { return "youtube" } else if (e.match(/vimeo\.com/i)) { return "vimeo" } else if (e.match(/\b.mov\b/i)) { return "quicktime" } else if (e.match(/\b.swf\b/i)) { return "flash" } else if (e.match(/\biframe=true\b/i)) { return "iframe" } else if (e.match(/\bajax=true\b/i)) { return "ajax" } else if (e.match(/\bcustom=true\b/i)) { return "custom" } else if (e.substr(0, 1) == "#") { return "inline" } else { return "image" } } function x() { if (doresize && typeof $pp_pic_holder != "undefined") { scroll_pos = T(); contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(); projectedTop = d / 2 + scroll_pos["scrollTop"] - contentHeight / 2; if (projectedTop < 0) projectedTop = 0; if (contentHeight > d) return; $pp_pic_holder.css({ top: projectedTop, left: v / 2 + scroll_pos["scrollLeft"] - contentwidth / 2 }) } } function T() { if (self.pageYOffset) { return { scrollTop: self.pageYOffset, scrollLeft: self.pageXOffset } } else if (document.documentElement && document.documentElement.scrollTop) { return { scrollTop: document.documentElement.scrollTop, scrollLeft: document.documentElement.scrollLeft } } else if (document.body) { return { scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft } } } function N() { d = e(window).height(), v = e(window).width(); if (typeof $pp_overlay != "undefined") $pp_overlay.height(e(document).height()).width(v) } function C() { if (isSet && settings.overlay_gallery && S(pp_images[set_position]) == "image") { itemWidth = 52 + 5; navWidth = settings.theme == "facebook" || settings.theme == "pp_default" ? 50 : 30; itemsPerPage = Math.floor((a["containerWidth"] - 100 - navWidth) / itemWidth); itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length; totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1; if (totalPage == 0) { navWidth = 0; $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide() } else { $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show() } galleryWidth = itemsPerPage * itemWidth; fullGalleryWidth = pp_images.length * itemWidth; $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"); goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage; e.prettyPhoto.changeGalleryPage(goToPage); $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected") } else { $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave") } } function k(t) { if (settings.social_tools) facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)); settings.markup = settings.markup.replace("{pp_social}", ""); e("body").append(settings.markup); $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay"); if (isSet && settings.overlay_gallery) { currentGalleryPage = 0; toInject = ""; for (var n = 0; n < pp_images.length; n++) { if (!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)) { classname = "default"; img_src = "" } else { classname = ""; img_src = pp_images[n] } toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>" } toInject = settings.gallery_markup.replace(/{gallery}/g, toInject); $pp_pic_holder.find("#pp_full_res").after(toInject); $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"); $pp_gallery.find(".pp_arrow_next").click(function () { e.prettyPhoto.changeGalleryPage("next"); e.prettyPhoto.stopSlideshow(); return false }); $pp_gallery.find(".pp_arrow_previous").click(function () { e.prettyPhoto.changeGalleryPage("previous"); e.prettyPhoto.stopSlideshow(); return false }); $pp_pic_holder.find(".pp_content").hover(function () { $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn() }, function () { $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut() }); itemWidth = 52 + 5; $pp_gallery_li.each(function (t) { e(this).find("a").click(function () { e.prettyPhoto.changePage(t); e.prettyPhoto.stopSlideshow(); return false }) }) } if (settings.slideshow) { $pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'); $pp_pic_holder.find(".pp_nav .pp_play").click(function () { e.prettyPhoto.startSlideshow(); return false }) } $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme); $pp_overlay.css({ opacity: 0, height: e(document).height(), width: e(window).width() }).bind("click", function () { if (!settings.modal) e.prettyPhoto.close() }); e("a.pp_close").bind("click", function () { e.prettyPhoto.close(); return false }); if (settings.allow_expand) { e("a.pp_expand").bind("click", function (t) { if (e(this).hasClass("pp_expand")) { e(this).removeClass("pp_expand").addClass("pp_contract"); doresize = false } else { e(this).removeClass("pp_contract").addClass("pp_expand"); doresize = true } y(function () { e.prettyPhoto.open() }); return false }) } $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () { e.prettyPhoto.changePage("previous"); e.prettyPhoto.stopSlideshow(); return false }); $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () { e.prettyPhoto.changePage("next"); e.prettyPhoto.stopSlideshow(); return false }); x() } s = jQuery.extend({ hook: "rel", animation_speed: "fast", ajaxcallback: function () { }, slideshow: 5e3, autoplay_slideshow: false, opacity: .8, show_title: true, allow_resize: true, allow_expand: true, default_width: 500, default_height: 344, counter_separator_label: "/", theme: "pp_default", horizontal_padding: 20, hideflash: false, wmode: "opaque", autoplay: true, modal: false, deeplinking: true, overlay_gallery: true, overlay_gallery_max: 30, keyboard_shortcuts: true, changepicturecallback: function () { }, callback: function () { }, ie6_fallback: true, markup: '<div class="pp_pic_holder"> 						<div class="ppt"> </div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>', gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>', image_markup: '<img id="fullResImage" src="{path}" />', flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>', quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>', iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>', inline_markup: '<div class="pp_inline">{content}</div>', custom_markup: "", social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>' }, s); var o = this, u = false, a, f, l, c, h, p, d = e(window).height(), v = e(window).width(), m; doresize = true, scroll_pos = T(); e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () { x(); N() }); if (s.keyboard_shortcuts) { e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (t) { if (typeof $pp_pic_holder != "undefined") { if ($pp_pic_holder.is(":visible")) { switch (t.keyCode) { case 37: e.prettyPhoto.changePage("previous"); t.preventDefault(); break; case 39: e.prettyPhoto.changePage("next"); t.preventDefault(); break; case 27: if (!settings.modal) e.prettyPhoto.close(); t.preventDefault(); break } } } }) } e.prettyPhoto.initialize = function () { settings = s; if (settings.theme == "pp_default") settings.horizontal_padding = 16; theRel = e(this).attr(settings.hook); galleryRegExp = /\[(?:.*)\]/; isSet = galleryRegExp.exec(theRel) ? true : false; pp_images = isSet ? jQuery.map(o, function (t, n) { if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("href") }) : e.makeArray(e(this).attr("href")); pp_titles = isSet ? jQuery.map(o, function (t, n) { if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : "" }) : e.makeArray(e(this).find("img").attr("alt")); pp_descriptions = isSet ? jQuery.map(o, function (t, n) { if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("title") ? e(t).attr("title") : "" }) : e.makeArray(e(this).attr("title")); if (pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false; set_position = jQuery.inArray(e(this).attr("href"), pp_images); rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this)); k(this); if (settings.allow_resize) e(window).bind("scroll.prettyphoto", function () { x() }); e.prettyPhoto.open(); return false }; e.prettyPhoto.open = function (t) { if (typeof settings == "undefined") { settings = s; pp_images = e.makeArray(arguments[0]); pp_titles = arguments[1] ? e.makeArray(arguments[1]) : e.makeArray(""); pp_descriptions = arguments[2] ? e.makeArray(arguments[2]) : e.makeArray(""); isSet = pp_images.length > 1 ? true : false; set_position = arguments[3] ? arguments[3] : 0; k(t.target) } if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"); b(e(pp_images).size()); e(".pp_loaderIcon").show(); if (settings.deeplinking) n(); if (settings.social_tools) { facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)); $pp_pic_holder.find(".pp_social").html(facebook_like_link) } if ($ppt.is(":hidden")) $ppt.css("opacity", 0).show(); $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity); $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size()); if (typeof pp_descriptions[set_position] != "undefined" && pp_descriptions[set_position] != "") { $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) } else { $pp_pic_holder.find(".pp_description").hide() } movie_width = parseFloat(i("width", pp_images[set_position])) ? i("width", pp_images[set_position]) : settings.default_width.toString(); movie_height = parseFloat(i("height", pp_images[set_position])) ? i("height", pp_images[set_position]) : settings.default_height.toString(); u = false; if (movie_height.indexOf("%") != -1) { movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150); u = true } if (movie_width.indexOf("%") != -1) { movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150); u = true } $pp_pic_holder.fadeIn(function () { settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined" ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html(" "); imgPreloader = ""; skipInjection = false; switch (S(pp_images[set_position])) { case "image": imgPreloader = new Image; nextImage = new Image; if (isSet && set_position < e(pp_images).size() - 1) nextImage.src = pp_images[set_position + 1]; prevImage = new Image; if (isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1]; $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]); imgPreloader.onload = function () { a = w(imgPreloader.width, imgPreloader.height); g() }; imgPreloader.onerror = function () { alert("Image cannot be loaded. Make sure the path is correct and image exist."); e.prettyPhoto.close() }; imgPreloader.src = pp_images[set_position]; break; case "youtube": a = w(movie_width, movie_height); movie_id = i("v", pp_images[set_position]); if (movie_id == "") { movie_id = pp_images[set_position].split("youtu.be/"); movie_id = movie_id[1]; if (movie_id.indexOf("?") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("?")); if (movie_id.indexOf("&") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("&")) } movie = "http://www.youtube.com/embed/" + movie_id; i("rel", pp_images[set_position]) ? movie += "?rel=" + i("rel", pp_images[set_position]) : movie += "?rel=1"; if (settings.autoplay) movie += "&autoplay=1"; toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie); break; case "vimeo": a = w(movie_width, movie_height); movie_id = pp_images[set_position]; var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/; var n = movie_id.match(t); movie = "http://player.vimeo.com/video/" + n[3] + "?title=0&byline=0&portrait=0"; if (settings.autoplay) movie += "&autoplay=1;"; vimeo_width = a["width"] + "/embed/?moog_width=" + a["width"]; toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, a["height"]).replace(/{path}/g, movie); break; case "quicktime": a = w(movie_width, movie_height); a["height"] += 15; a["contentHeight"] += 15; a["containerHeight"] += 15; toInject = settings.quicktime_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay); break; case "flash": a = w(movie_width, movie_height); flash_vars = pp_images[set_position]; flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length); filename = pp_images[set_position]; filename = filename.substring(0, filename.indexOf("?")); toInject = settings.flash_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars); break; case "iframe": a = w(movie_width, movie_height); frame_url = pp_images[set_position]; frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1); toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{path}/g, frame_url); break; case "ajax": doresize = false; a = w(movie_width, movie_height); doresize = true; skipInjection = true; e.get(pp_images[set_position], function (e) { toInject = settings.inline_markup.replace(/{content}/g, e); $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject; g() }); break; case "custom": a = w(movie_width, movie_height); toInject = settings.custom_markup; break; case "inline": myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({ width: settings.default_width }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(); doresize = false; a = w(e(myClone).width(), e(myClone).height()); doresize = true; e(myClone).remove(); toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html()); break }if (!imgPreloader && !skipInjection) { $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject; g() } }); return false }; e.prettyPhoto.changePage = function (t) { currentGalleryPage = 0; if (t == "previous") { set_position--; if (set_position < 0) set_position = e(pp_images).size() - 1 } else if (t == "next") { set_position++; if (set_position > e(pp_images).size() - 1) set_position = 0 } else { set_position = t } rel_index = set_position; if (!doresize) doresize = true; if (settings.allow_expand) { e(".pp_contract").removeClass("pp_contract").addClass("pp_expand") } y(function () { e.prettyPhoto.open() }) }; e.prettyPhoto.changeGalleryPage = function (e) { if (e == "next") { currentGalleryPage++; if (currentGalleryPage > totalPage) currentGalleryPage = 0 } else if (e == "previous") { currentGalleryPage--; if (currentGalleryPage < 0) currentGalleryPage = totalPage } else { currentGalleryPage = e } slide_speed = e == "next" || e == "previous" ? settings.animation_speed : 0; slide_to = currentGalleryPage * itemsPerPage * itemWidth; $pp_gallery.find("ul").animate({ left: -slide_to }, slide_speed) }; e.prettyPhoto.startSlideshow = function () { if (typeof m == "undefined") { $pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () { e.prettyPhoto.stopSlideshow(); return false }); m = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow) } else { e.prettyPhoto.changePage("next") } }; e.prettyPhoto.stopSlideshow = function () { $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () { e.prettyPhoto.startSlideshow(); return false }); clearInterval(m); m = undefined }; e.prettyPhoto.close = function () { if ($pp_overlay.is(":animated")) return; e.prettyPhoto.stopSlideshow(); $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"); e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () { e(this).remove() }); $pp_overlay.fadeOut(settings.animation_speed, function () { if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"); e(this).remove(); e(window).unbind("scroll.prettyphoto"); r(); settings.callback(); doresize = true; f = false; delete settings }) }; if (!pp_alreadyInitialized && t()) { pp_alreadyInitialized = true; hashIndex = t(); hashRel = hashIndex; hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1); hashRel = hashRel.substring(0, hashRel.indexOf("/")); setTimeout(function () { e("a[" + s.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click") }, 50) } return this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize) }; })(jQuery); var pp_alreadyInitialized = false
/*
 *	jQuery carouFredSel 6.2.1
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

$(function () {
    function sc_setScroll(a, b, c) { return "transition" == c.transition && "swing" == b && (b = "ease"), { anims: [], duration: a, orgDuration: a, easing: b, startTime: getTime() } } function sc_startScroll(a, b) { for (var c = 0, d = a.anims.length; d > c; c++) { var e = a.anims[c]; e && e[0][b.transition](e[1], a.duration, a.easing, e[2]) } } function sc_stopScroll(a, b) { is_boolean(b) || (b = !0), is_object(a.pre) && sc_stopScroll(a.pre, b); for (var c = 0, d = a.anims.length; d > c; c++) { var e = a.anims[c]; e[0].stop(!0), b && (e[0].css(e[1]), is_function(e[2]) && e[2]()) } is_object(a.post) && sc_stopScroll(a.post, b) } function sc_afterScroll(a, b, c) { switch (b && b.remove(), c.fx) { case "fade": case "crossfade": case "cover-fade": case "uncover-fade": a.css("opacity", 1), a.css("filter", "") } } function sc_fireCallbacks(a, b, c, d, e) { if (b[c] && b[c].call(a, d), e[c].length) for (var f = 0, g = e[c].length; g > f; f++)e[c][f].call(a, d); return [] } function sc_fireQueue(a, b, c) { return b.length && (a.trigger(cf_e(b[0][0], c), b[0][1]), b.shift()), b } function sc_hideHiddenItems(a) { a.each(function () { var a = $(this); a.data("_cfs_isHidden", a.is(":hidden")).hide() }) } function sc_showHiddenItems(a) { a && a.each(function () { var a = $(this); a.data("_cfs_isHidden") || a.show() }) } function sc_clearTimers(a) { return a.auto && clearTimeout(a.auto), a.progress && clearInterval(a.progress), a } function sc_mapCallbackArguments(a, b, c, d, e, f, g) { return { width: g.width, height: g.height, items: { old: a, skipped: b, visible: c }, scroll: { items: d, direction: e, duration: f } } } function sc_getDuration(a, b, c, d) { var e = a.duration; return "none" == a.fx ? 0 : ("auto" == e ? e = b.scroll.duration / b.scroll.items * c : 10 > e && (e = d / e), 1 > e ? 0 : ("fade" == a.fx && (e /= 2), Math.round(e))) } function nv_showNavi(a, b, c) { var d = is_number(a.items.minimum) ? a.items.minimum : a.items.visible + 1; if ("show" == b || "hide" == b) var e = b; else if (d > b) { debug(c, "Not enough items (" + b + " total, " + d + " needed): Hiding navigation."); var e = "hide" } else var e = "show"; var f = "show" == e ? "removeClass" : "addClass", g = cf_c("hidden", c); a.auto.button && a.auto.button[e]()[f](g), a.prev.button && a.prev.button[e]()[f](g), a.next.button && a.next.button[e]()[f](g), a.pagination.container && a.pagination.container[e]()[f](g) } function nv_enableNavi(a, b, c) { if (!a.circular && !a.infinite) { var d = "removeClass" == b || "addClass" == b ? b : !1, e = cf_c("disabled", c); if (a.auto.button && d && a.auto.button[d](e), a.prev.button) { var f = d || 0 == b ? "addClass" : "removeClass"; a.prev.button[f](e) } if (a.next.button) { var f = d || b == a.items.visible ? "addClass" : "removeClass"; a.next.button[f](e) } } } function go_getObject(a, b) { return is_function(b) ? b = b.call(a) : is_undefined(b) && (b = {}), b } function go_getItemsObject(a, b) { return b = go_getObject(a, b), is_number(b) ? b = { visible: b } : "variable" == b ? b = { visible: b, width: b, height: b } : is_object(b) || (b = {}), b } function go_getScrollObject(a, b) { return b = go_getObject(a, b), is_number(b) ? b = 50 >= b ? { items: b } : { duration: b } : is_string(b) ? b = { easing: b } : is_object(b) || (b = {}), b } function go_getNaviObject(a, b) { if (b = go_getObject(a, b), is_string(b)) { var c = cf_getKeyCode(b); b = -1 == c ? $(b) : c } return b } function go_getAutoObject(a, b) { return b = go_getNaviObject(a, b), is_jquery(b) ? b = { button: b } : is_boolean(b) ? b = { play: b } : is_number(b) && (b = { timeoutDuration: b }), b.progress && (is_string(b.progress) || is_jquery(b.progress)) && (b.progress = { bar: b.progress }), b } function go_complementAutoObject(a, b) { return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_boolean(b.play) || (b.play = !0), is_number(b.delay) || (b.delay = 0), is_undefined(b.pauseOnEvent) && (b.pauseOnEvent = !0), is_boolean(b.pauseOnResize) || (b.pauseOnResize = !0), is_number(b.timeoutDuration) || (b.timeoutDuration = 10 > b.duration ? 2500 : 5 * b.duration), b.progress && (is_function(b.progress.bar) && (b.progress.bar = b.progress.bar.call(a)), is_string(b.progress.bar) && (b.progress.bar = $(b.progress.bar)), b.progress.bar ? (is_function(b.progress.updater) || (b.progress.updater = $.fn.carouFredSel.progressbarUpdater), is_number(b.progress.interval) || (b.progress.interval = 50)) : b.progress = !1), b } function go_getPrevNextObject(a, b) { return b = go_getNaviObject(a, b), is_jquery(b) ? b = { button: b } : is_number(b) && (b = { key: b }), b } function go_complementPrevNextObject(a, b) { return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_string(b.key) && (b.key = cf_getKeyCode(b.key)), b } function go_getPaginationObject(a, b) { return b = go_getNaviObject(a, b), is_jquery(b) ? b = { container: b } : is_boolean(b) && (b = { keys: b }), b } function go_complementPaginationObject(a, b) { return is_function(b.container) && (b.container = b.container.call(a)), is_string(b.container) && (b.container = $(b.container)), is_number(b.items) || (b.items = !1), is_boolean(b.keys) || (b.keys = !1), is_function(b.anchorBuilder) || is_false(b.anchorBuilder) || (b.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder), is_number(b.deviation) || (b.deviation = 0), b } function go_getSwipeObject(a, b) { return is_function(b) && (b = b.call(a)), is_undefined(b) && (b = { onTouch: !1 }), is_true(b) ? b = { onTouch: b } : is_number(b) && (b = { items: b }), b } function go_complementSwipeObject(a, b) { return is_boolean(b.onTouch) || (b.onTouch = !0), is_boolean(b.onMouse) || (b.onMouse = !1), is_object(b.options) || (b.options = {}), is_boolean(b.options.triggerOnTouchEnd) || (b.options.triggerOnTouchEnd = !1), b } function go_getMousewheelObject(a, b) { return is_function(b) && (b = b.call(a)), is_true(b) ? b = {} : is_number(b) ? b = { items: b } : is_undefined(b) && (b = !1), b } function go_complementMousewheelObject(a, b) { return b } function gn_getItemIndex(a, b, c, d, e) { if (is_string(a) && (a = $(a, e)), is_object(a) && (a = $(a, e)), is_jquery(a) ? (a = e.children().index(a), is_boolean(c) || (c = !1)) : is_boolean(c) || (c = !0), is_number(a) || (a = 0), is_number(b) || (b = 0), c && (a += d.first), a += b, d.total > 0) { for (; a >= d.total;)a -= d.total; for (; 0 > a;)a += d.total } return a } function gn_getVisibleItemsPrev(a, b, c) { for (var d = 0, e = 0, f = c; f >= 0; f--) { var g = a.eq(f); if (d += g.is(":visible") ? g[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e; 0 == f && (f = a.length), e++ } } function gn_getVisibleItemsPrevFilter(a, b, c) { return gn_getItemsPrevFilter(a, b.items.filter, b.items.visibleConf.org, c) } function gn_getScrollItemsPrevFilter(a, b, c, d) { return gn_getItemsPrevFilter(a, b.items.filter, d, c) } function gn_getItemsPrevFilter(a, b, c, d) { for (var e = 0, f = 0, g = d, h = a.length; g >= 0; g--) { if (f++, f == h) return f; var i = a.eq(g); if (i.is(b) && (e++, e == c)) return f; 0 == g && (g = h) } } function gn_getVisibleOrg(a, b) { return b.items.visibleConf.org || a.children().slice(0, b.items.visible).filter(b.items.filter).length } function gn_getVisibleItemsNext(a, b, c) { for (var d = 0, e = 0, f = c, g = a.length - 1; g >= f; f++) { var h = a.eq(f); if (d += h.is(":visible") ? h[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e; if (e++, e == g + 1) return e; f == g && (f = -1) } } function gn_getVisibleItemsNextTestCircular(a, b, c, d) { var e = gn_getVisibleItemsNext(a, b, c); return b.circular || c + e > d && (e = d - c), e } function gn_getVisibleItemsNextFilter(a, b, c) { return gn_getItemsNextFilter(a, b.items.filter, b.items.visibleConf.org, c, b.circular) } function gn_getScrollItemsNextFilter(a, b, c, d) { return gn_getItemsNextFilter(a, b.items.filter, d + 1, c, b.circular) - 1 } function gn_getItemsNextFilter(a, b, c, d) { for (var f = 0, g = 0, h = d, i = a.length - 1; i >= h; h++) { if (g++, g >= i) return g; var j = a.eq(h); if (j.is(b) && (f++, f == c)) return g; h == i && (h = -1) } } function gi_getCurrentItems(a, b) { return a.slice(0, b.items.visible) } function gi_getOldItemsPrev(a, b, c) { return a.slice(c, b.items.visibleConf.old + c) } function gi_getNewItemsPrev(a, b) { return a.slice(0, b.items.visible) } function gi_getOldItemsNext(a, b) { return a.slice(0, b.items.visibleConf.old) } function gi_getNewItemsNext(a, b, c) { return a.slice(c, b.items.visible + c) } function sz_storeMargin(a, b, c) { b.usePadding && (is_string(c) || (c = "_cfs_origCssMargin"), a.each(function () { var a = $(this), d = parseInt(a.css(b.d.marginRight), 10); is_number(d) || (d = 0), a.data(c, d) })) } function sz_resetMargin(a, b, c) { if (b.usePadding) { var d = is_boolean(c) ? c : !1; is_number(c) || (c = 0), sz_storeMargin(a, b, "_cfs_tempCssMargin"), a.each(function () { var a = $(this); a.css(b.d.marginRight, d ? a.data("_cfs_tempCssMargin") : c + a.data("_cfs_origCssMargin")) }) } } function sz_storeOrigCss(a) { a.each(function () { var a = $(this); a.data("_cfs_origCss", a.attr("style") || "") }) } function sz_restoreOrigCss(a) { a.each(function () { var a = $(this); a.attr("style", a.data("_cfs_origCss") || "") }) } function sz_setResponsiveSizes(a, b) { var d = (a.items.visible, a.items[a.d.width]), e = a[a.d.height], f = is_percentage(e); b.each(function () { var b = $(this), c = d - ms_getPaddingBorderMargin(b, a, "Width"); b[a.d.width](c), f && b[a.d.height](ms_getPercentage(c, e)) }) } function sz_setSizes(a, b) { var c = a.parent(), d = a.children(), e = gi_getCurrentItems(d, b), f = cf_mapWrapperSizes(ms_getSizes(e, b, !0), b, !1); if (c.css(f), b.usePadding) { var g = b.padding, h = g[b.d[1]]; b.align && 0 > h && (h = 0); var i = e.last(); i.css(b.d.marginRight, i.data("_cfs_origCssMargin") + h), a.css(b.d.top, g[b.d[0]]), a.css(b.d.left, g[b.d[3]]) } return a.css(b.d.width, f[b.d.width] + 2 * ms_getTotalSize(d, b, "width")), a.css(b.d.height, ms_getLargestSize(d, b, "height")), f } function ms_getSizes(a, b, c) { return [ms_getTotalSize(a, b, "width", c), ms_getLargestSize(a, b, "height", c)] } function ms_getLargestSize(a, b, c, d) { return is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d ? b[b.d[c]] : is_number(b.items[b.d[c]]) ? b.items[b.d[c]] : (c = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", ms_getTrueLargestSize(a, b, c)) } function ms_getTrueLargestSize(a, b, c) { for (var d = 0, e = 0, f = a.length; f > e; e++) { var g = a.eq(e), h = g.is(":visible") ? g[b.d[c]](!0) : 0; h > d && (d = h) } return d } function ms_getTotalSize(a, b, c, d) { if (is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d) return b[b.d[c]]; if (is_number(b.items[b.d[c]])) return b.items[b.d[c]] * a.length; for (var e = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", f = 0, g = 0, h = a.length; h > g; g++) { var i = a.eq(g); f += i.is(":visible") ? i[b.d[e]](!0) : 0 } return f } function ms_getParentSize(a, b, c) { var d = a.is(":visible"); d && a.hide(); var e = a.parent()[b.d[c]](); return d && a.show(), e } function ms_getMaxDimension(a, b) { return is_number(a[a.d.width]) ? a[a.d.width] : b } function ms_hasVariableSizes(a, b, c) { for (var d = !1, e = !1, f = 0, g = a.length; g > f; f++) { var h = a.eq(f), i = h.is(":visible") ? h[b.d[c]](!0) : 0; d === !1 ? d = i : d != i && (e = !0), 0 == d && (e = !0) } return e } function ms_getPaddingBorderMargin(a, b, c) { return a[b.d["outer" + c]](!0) - a[b.d[c.toLowerCase()]]() } function ms_getPercentage(a, b) { if (is_percentage(b)) { if (b = parseInt(b.slice(0, -1), 10), !is_number(b)) return a; a *= b / 100 } return a } function cf_e(a, b, c, d, e) { return is_boolean(c) || (c = !0), is_boolean(d) || (d = !0), is_boolean(e) || (e = !1), c && (a = b.events.prefix + a), d && (a = a + "." + b.events.namespace), d && e && (a += b.serialNumber), a } function cf_c(a, b) { return is_string(b.classnames[a]) ? b.classnames[a] : a } function cf_mapWrapperSizes(a, b, c) { is_boolean(c) || (c = !0); var d = b.usePadding && c ? b.padding : [0, 0, 0, 0], e = {}; return e[b.d.width] = a[0] + d[1] + d[3], e[b.d.height] = a[1] + d[0] + d[2], e } function cf_sortParams(a, b) { for (var c = [], d = 0, e = a.length; e > d; d++)for (var f = 0, g = b.length; g > f; f++)if (b[f].indexOf(typeof a[d]) > -1 && is_undefined(c[f])) { c[f] = a[d]; break } return c } function cf_getPadding(a) { if (is_undefined(a)) return [0, 0, 0, 0]; if (is_number(a)) return [a, a, a, a]; if (is_string(a) && (a = a.split("px").join("").split("em").join("").split(" ")), !is_array(a)) return [0, 0, 0, 0]; for (var b = 0; 4 > b; b++)a[b] = parseInt(a[b], 10); switch (a.length) { case 0: return [0, 0, 0, 0]; case 1: return [a[0], a[0], a[0], a[0]]; case 2: return [a[0], a[1], a[0], a[1]]; case 3: return [a[0], a[1], a[2], a[1]]; default: return [a[0], a[1], a[2], a[3]] } } function cf_getAlignPadding(a, b) { var c = is_number(b[b.d.width]) ? Math.ceil(b[b.d.width] - ms_getTotalSize(a, b, "width")) : 0; switch (b.align) { case "left": return [0, c]; case "right": return [c, 0]; case "center": default: return [Math.ceil(c / 2), Math.floor(c / 2)] } } function cf_getDimensions(a) { for (var b = [["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3], ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]], c = b[0].length, d = "right" == a.direction || "left" == a.direction ? 0 : 1, e = {}, f = 0; c > f; f++)e[b[0][f]] = b[d][f]; return e } function cf_getAdjust(a, b, c, d) { var e = a; if (is_function(c)) e = c.call(d, e); else if (is_string(c)) { var f = c.split("+"), g = c.split("-"); if (g.length > f.length) var h = !0, i = g[0], j = g[1]; else var h = !1, i = f[0], j = f[1]; switch (i) { case "even": e = 1 == a % 2 ? a - 1 : a; break; case "odd": e = 0 == a % 2 ? a - 1 : a; break; default: e = a }j = parseInt(j, 10), is_number(j) && (h && (j = -j), e += j) } return (!is_number(e) || 1 > e) && (e = 1), e } function cf_getItemsAdjust(a, b, c, d) { return cf_getItemAdjustMinMax(cf_getAdjust(a, b, c, d), b.items.visibleConf) } function cf_getItemAdjustMinMax(a, b) { return is_number(b.min) && b.min > a && (a = b.min), is_number(b.max) && a > b.max && (a = b.max), 1 > a && (a = 1), a } function cf_getSynchArr(a) { is_array(a) || (a = [[a]]), is_array(a[0]) || (a = [a]); for (var b = 0, c = a.length; c > b; b++)is_string(a[b][0]) && (a[b][0] = $(a[b][0])), is_boolean(a[b][1]) || (a[b][1] = !0), is_boolean(a[b][2]) || (a[b][2] = !0), is_number(a[b][3]) || (a[b][3] = 0); return a } function cf_getKeyCode(a) { return "right" == a ? 39 : "left" == a ? 37 : "up" == a ? 38 : "down" == a ? 40 : -1 } function cf_setCookie(a, b, c) { if (a) { var d = b.triggerHandler(cf_e("currentPosition", c)); $.fn.carouFredSel.cookie.set(a, d) } } function cf_getCookie(a) { var b = $.fn.carouFredSel.cookie.get(a); return "" == b ? 0 : b } function in_mapCss(a, b) { for (var c = {}, d = 0, e = b.length; e > d; d++)c[b[d]] = a.css(b[d]); return c } function in_complementItems(a, b, c, d) { return is_object(a.visibleConf) || (a.visibleConf = {}), is_object(a.sizesConf) || (a.sizesConf = {}), 0 == a.start && is_number(d) && (a.start = d), is_object(a.visible) ? (a.visibleConf.min = a.visible.min, a.visibleConf.max = a.visible.max, a.visible = !1) : is_string(a.visible) ? ("variable" == a.visible ? a.visibleConf.variable = !0 : a.visibleConf.adjust = a.visible, a.visible = !1) : is_function(a.visible) && (a.visibleConf.adjust = a.visible, a.visible = !1), is_string(a.filter) || (a.filter = c.filter(":hidden").length > 0 ? ":visible" : "*"), a[b.d.width] || (b.responsive ? (debug(!0, "Set a " + b.d.width + " for the items!"), a[b.d.width] = ms_getTrueLargestSize(c, b, "outerWidth")) : a[b.d.width] = ms_hasVariableSizes(c, b, "outerWidth") ? "variable" : c[b.d.outerWidth](!0)), a[b.d.height] || (a[b.d.height] = ms_hasVariableSizes(c, b, "outerHeight") ? "variable" : c[b.d.outerHeight](!0)), a.sizesConf.width = a.width, a.sizesConf.height = a.height, a } function in_complementVisibleItems(a, b) { return "variable" == a.items[a.d.width] && (a.items.visibleConf.variable = !0), a.items.visibleConf.variable || (is_number(a[a.d.width]) ? a.items.visible = Math.floor(a[a.d.width] / a.items[a.d.width]) : (a.items.visible = Math.floor(b / a.items[a.d.width]), a[a.d.width] = a.items.visible * a.items[a.d.width], a.items.visibleConf.adjust || (a.align = !1)), ("Infinity" == a.items.visible || 1 > a.items.visible) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'), a.items.visibleConf.variable = !0)), a } function in_complementPrimarySize(a, b, c) { return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerWidth")), a } function in_complementSecondarySize(a, b, c) { return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerHeight")), a || (a = b.items[b.d.height]), a } function in_getAlignPadding(a, b) { var c = cf_getAlignPadding(gi_getCurrentItems(b, a), a); return a.padding[a.d[1]] = c[1], a.padding[a.d[3]] = c[0], a } function in_getResponsiveValues(a, b) { var d = cf_getItemAdjustMinMax(Math.ceil(a[a.d.width] / a.items[a.d.width]), a.items.visibleConf); d > b.length && (d = b.length); var e = Math.floor(a[a.d.width] / d); return a.items.visible = d, a.items[a.d.width] = e, a[a.d.width] = d * e, a } function bt_pauseOnHoverConfig(a) { if (is_string(a)) var b = a.indexOf("immediate") > -1 ? !0 : !1, c = a.indexOf("resume") > -1 ? !0 : !1; else var b = c = !1; return [b, c] } function bt_mousesheelNumber(a) { return is_number(a) ? a : null } function is_null(a) { return null === a } function is_undefined(a) { return is_null(a) || a === void 0 || "" === a || "undefined" === a } function is_array(a) { return a instanceof Array } function is_jquery(a) { return a instanceof jQuery } function is_object(a) { return (a instanceof Object || "object" == typeof a) && !is_null(a) && !is_jquery(a) && !is_array(a) && !is_function(a) } function is_number(a) { return (a instanceof Number || "number" == typeof a) && !isNaN(a) } function is_string(a) { return (a instanceof String || "string" == typeof a) && !is_undefined(a) && !is_true(a) && !is_false(a) } function is_function(a) { return a instanceof Function || "function" == typeof a } function is_boolean(a) { return a instanceof Boolean || "boolean" == typeof a || is_true(a) || is_false(a) } function is_true(a) { return a === !0 || "true" === a } function is_false(a) { return a === !1 || "false" === a } function is_percentage(a) { return is_string(a) && "%" == a.slice(-1) } function getTime() { return (new Date).getTime() } function deprecated(a, b) { debug(!0, a + " is DEPRECATED, support for it will be removed. Use " + b + " instead.") } function debug(a, b) { if (!is_undefined(window.console) && !is_undefined(window.console.log)) { if (is_object(a)) { var c = " (" + a.selector + ")"; a = a.debug } else var c = ""; if (!a) return !1; b = is_string(b) ? "carouFredSel" + c + ": " + b : ["carouFredSel" + c + ":", b], window.console.log(b) } return !1 } $.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function (options, configs) {
        if (0 == this.length) return debug(!0, 'No element found for "' + this.selector + '".'), this; if (this.length > 1) return this.each(function () { $(this).carouFredSel(options, configs) }); var $cfs = this, $tt0 = this[0], starting_position = !1; $cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"), $cfs.trigger("_cfs_triggerEvent", ["destroy", !0])); var FN = {}; FN._init = function (a, b, c) { a = go_getObject($tt0, a), a.items = go_getItemsObject($tt0, a.items), a.scroll = go_getScrollObject($tt0, a.scroll), a.auto = go_getAutoObject($tt0, a.auto), a.prev = go_getPrevNextObject($tt0, a.prev), a.next = go_getPrevNextObject($tt0, a.next), a.pagination = go_getPaginationObject($tt0, a.pagination), a.swipe = go_getSwipeObject($tt0, a.swipe), a.mousewheel = go_getMousewheelObject($tt0, a.mousewheel), b && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, a)), opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, a), opts.d = cf_getDimensions(opts), crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev"; var d = $cfs.children(), e = ms_getParentSize($wrp, opts, "width"); if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber), opts.maxDimension = ms_getMaxDimension(opts, e), opts.items = in_complementItems(opts.items, opts, d, c), opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, d), opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, d), opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")), is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0, crsl.primarySizePercentage = opts[opts.d.width], opts[opts.d.width] = ms_getPercentage(e, crsl.primarySizePercentage), opts.items.visible || (opts.items.visibleConf.variable = !0)), opts.responsive ? (opts.usePadding = !1, opts.padding = [0, 0, 0, 0], opts.align = !1, opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, e)), opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width], opts.align = !1) : opts[opts.d.width] = "variable"), is_undefined(opts.align) && (opts.align = is_number(opts[opts.d.width]) ? "center" : !1), opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(d, opts, 0))), "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible, opts.items.visible = gn_getVisibleItemsNextFilter(d, opts, 0)), opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts.responsive) opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible), opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible), opts = in_getResponsiveValues(opts, d, e); else switch (opts.padding = cf_getPadding(opts.padding), "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"), opts.align) { case "center": case "left": case "right": "variable" != opts[opts.d.width] && (opts = in_getAlignPadding(opts, d), opts.usePadding = !0); break; default: opts.align = !1, opts.usePadding = 0 == opts.padding[0] && 0 == opts.padding[1] && 0 == opts.padding[2] && 0 == opts.padding[3] ? !1 : !0 }is_number(opts.scroll.duration) || (opts.scroll.duration = 500), is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible), opts.auto = $.extend(!0, {}, opts.scroll, opts.auto), opts.prev = $.extend(!0, {}, opts.scroll, opts.prev), opts.next = $.extend(!0, {}, opts.scroll, opts.next), opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination), opts.auto = go_complementAutoObject($tt0, opts.auto), opts.prev = go_complementPrevNextObject($tt0, opts.prev), opts.next = go_complementPrevNextObject($tt0, opts.next), opts.pagination = go_complementPaginationObject($tt0, opts.pagination), opts.swipe = go_complementSwipeObject($tt0, opts.swipe), opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel), opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)), opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart, deprecated("auto.onPauseStart", "auto.onTimeoutStart")), opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause, deprecated("auto.onPausePause", "auto.onTimeoutPause")), opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd, deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")), opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration, deprecated("auto.pauseDuration", "auto.timeoutDuration")) }, FN._build = function () { $cfs.data("_cfs_isCarousel", !0); var a = $cfs.children(), b = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]), c = "relative"; switch (b.position) { case "absolute": case "fixed": c = b.position }"parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(b), $wrp.css({ overflow: "hidden", position: c }), sz_storeOrigCss($cfs), $cfs.data("_cfs_origCssZindex", b.zIndex), $cfs.css({ textAlign: "left", "float": "none", position: "absolute", top: 0, right: "auto", bottom: "auto", left: 0, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 }), sz_storeMargin(a, opts), sz_storeOrigCss(a), opts.responsive && sz_setResponsiveSizes(opts, a) }, FN._bind_events = function () {
            FN._unbind_events(), $cfs.bind(cf_e("stop", conf), function (a, b) { return a.stopPropagation(), crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)), crsl.isStopped = !0, opts.auto.play && (opts.auto.play = !1, $cfs.trigger(cf_e("pause", conf), b)), !0 }), $cfs.bind(cf_e("finish", conf), function (a) { return a.stopPropagation(), crsl.isScrolling && sc_stopScroll(scrl), !0 }), $cfs.bind(cf_e("pause", conf), function (a, b, c) { if (a.stopPropagation(), tmrs = sc_clearTimers(tmrs), b && crsl.isScrolling) { scrl.isStopped = !0; var d = getTime() - scrl.startTime; scrl.duration -= d, scrl.pre && (scrl.pre.duration -= d), scrl.post && (scrl.post.duration -= d), sc_stopScroll(scrl, !1) } if (crsl.isPaused || crsl.isScrolling || c && (tmrs.timePassed += getTime() - tmrs.startTime), crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)), crsl.isPaused = !0, opts.auto.onTimeoutPause) { var e = opts.auto.timeoutDuration - tmrs.timePassed, f = 100 - Math.ceil(100 * e / opts.auto.timeoutDuration); opts.auto.onTimeoutPause.call($tt0, f, e) } return !0 }), $cfs.bind(cf_e("play", conf), function (a, b, c, d) { a.stopPropagation(), tmrs = sc_clearTimers(tmrs); var e = [b, c, d], f = ["string", "number", "boolean"], g = cf_sortParams(e, f); if (b = g[0], c = g[1], d = g[2], "prev" != b && "next" != b && (b = crsl.direction), is_number(c) || (c = 0), is_boolean(d) || (d = !1), d && (crsl.isStopped = !1, opts.auto.play = !0), !opts.auto.play) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped: Not scrolling."); crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)), opts.auto.button.removeClass(cf_c("paused", conf))), crsl.isPaused = !1, tmrs.startTime = getTime(); var h = opts.auto.timeoutDuration + c; return dur2 = h - tmrs.timePassed, perc = 100 - Math.ceil(100 * dur2 / h), opts.auto.progress && (tmrs.progress = setInterval(function () { var a = getTime() - tmrs.startTime + tmrs.timePassed, b = Math.ceil(100 * a / h); opts.auto.progress.updater.call(opts.auto.progress.bar[0], b) }, opts.auto.progress.interval)), tmrs.auto = setTimeout(function () { opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100), opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2), crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), b) : $cfs.trigger(cf_e(b, conf), opts.auto) }, dur2), opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2), !0 }), $cfs.bind(cf_e("resume", conf), function (a) { return a.stopPropagation(), scrl.isStopped ? (scrl.isStopped = !1, crsl.isPaused = !1, crsl.isScrolling = !0, scrl.startTime = getTime(), sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)), !0 }), $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function (a, b, c, d, e) { if (a.stopPropagation(), crsl.isStopped || $cfs.is(":hidden")) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped or hidden: Not scrolling."); var f = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1; if (f > itms.total) return a.stopImmediatePropagation(), debug(conf, "Not enough items (" + itms.total + " total, " + f + " needed): Not scrolling."); var g = [b, c, d, e], h = ["object", "number/string", "function", "boolean"], i = cf_sortParams(g, h); b = i[0], c = i[1], d = i[2], e = i[3]; var j = a.type.slice(conf.events.prefix.length); if (is_object(b) || (b = {}), is_function(d) && (b.onAfter = d), is_boolean(e) && (b.queue = e), b = $.extend(!0, {}, opts[j], b), b.conditions && !b.conditions.call($tt0, j)) return a.stopImmediatePropagation(), debug(conf, 'Callback "conditions" returned false.'); if (!is_number(c)) { if ("*" != opts.items.filter) c = "visible"; else for (var k = [c, b.items, opts[j].items], i = 0, l = k.length; l > i; i++)if (is_number(k[i]) || "page" == k[i] || "visible" == k[i]) { c = k[i]; break } switch (c) { case "page": return a.stopImmediatePropagation(), $cfs.triggerHandler(cf_e(j + "Page", conf), [b, d]); case "visible": opts.items.visibleConf.variable || "*" != opts.items.filter || (c = opts.items.visible) } } if (scrl.isStopped) return $cfs.trigger(cf_e("resume", conf)), $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]]), a.stopImmediatePropagation(), debug(conf, "Carousel resumed scrolling."); if (b.duration > 0 && crsl.isScrolling) return b.queue && ("last" == b.queue && (queu = []), ("first" != b.queue || 0 == queu.length) && $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]])), a.stopImmediatePropagation(), debug(conf, "Carousel currently scrolling."); if (tmrs.timePassed = 0, $cfs.trigger(cf_e("slide_" + j, conf), [b, c]), opts.synchronise) for (var m = opts.synchronise, n = [b, c], o = 0, l = m.length; l > o; o++) { var p = j; m[o][2] || (p = "prev" == p ? "next" : "prev"), m[o][1] || (n[0] = m[o][0].triggerHandler("_cfs_triggerEvent", ["configuration", p])), n[1] = c + m[o][3], m[o][0].trigger("_cfs_triggerEvent", ["slide_" + p, n]) } return !0 }), $cfs.bind(cf_e("slide_prev", conf), function (a, b, c) {
                a.stopPropagation(); var d = $cfs.children(); if (!opts.circular && 0 == itms.first) return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1), a.stopImmediatePropagation(); if (sz_resetMargin(d, opts), !is_number(c)) { if (opts.items.visibleConf.variable) c = gn_getVisibleItemsPrev(d, opts, itms.total - 1); else if ("*" != opts.items.filter) { var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts); c = gn_getScrollItemsPrevFilter(d, opts, itms.total - 1, e) } else c = opts.items.visible; c = cf_getAdjust(c, opts, b.items, $tt0) } if (opts.circular || itms.total - c < itms.first && (c = itms.total - itms.first), opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) { var f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0); f >= opts.items.visible + c && itms.total > c && (c++, f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0)), opts.items.visible = f } else if ("*" != opts.items.filter) { var f = gn_getVisibleItemsNextFilter(d, opts, itms.total - c); opts.items.visible = cf_getItemsAdjust(f, opts, opts.items.visibleConf.adjust, $tt0) } if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling."); for (debug(conf, "Scrolling " + c + " items backward."), itms.first += c; itms.first >= itms.total;)itms.first -= itms.total; opts.circular || (0 == itms.first && b.onEnd && b.onEnd.call($tt0, "prev"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), $cfs.children().slice(itms.total - c, itms.total).prependTo($cfs), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs); var d = $cfs.children(), g = gi_getOldItemsPrev(d, opts, c), h = gi_getNewItemsPrev(d, opts), i = d.eq(c - 1), j = g.last(), k = h.last(); sz_resetMargin(d, opts); var l = 0, m = 0; if (opts.align) { var n = cf_getAlignPadding(h, opts); l = n[0], m = n[1] } var o = 0 > l ? opts.padding[opts.d[3]] : 0, p = !1, q = $(); if (c > opts.items.visible && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) { var r = opts.items[opts.d.width]; p = q, i = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable" } var s = !1, t = ms_getTotalSize(d.slice(0, c), opts, "width"), u = cf_mapWrapperSizes(ms_getSizes(h, opts, !0), opts, !opts.usePadding), v = 0, w = {}, x = {}, y = {}, z = {}, A = {}, B = {}, C = {}, D = sc_getDuration(b, opts, c, t); switch (b.fx) { case "cover": case "cover-fade": v = ms_getTotalSize(d.slice(0, opts.items.visible), opts, "width") }p && (opts.items[opts.d.width] = r), sz_resetMargin(d, opts, !0), m >= 0 && sz_resetMargin(j, opts, opts.padding[opts.d[1]]), l >= 0 && sz_resetMargin(i, opts, opts.padding[opts.d[3]]), opts.align && (opts.padding[opts.d[1]] = m, opts.padding[opts.d[3]] = l), B[opts.d.left] = -(t - o), C[opts.d.left] = -(v - o), x[opts.d.left] = u[opts.d.width]; var E = function () { }, F = function () { }, G = function () { }, H = function () { }, I = function () { }, J = function () { }, K = function () { }, L = function () { }, M = function () { }, N = function () { }, O = function () { }; switch (b.fx) { case "crossfade": case "cover": case "cover-fade": case "uncover": case "uncover-fade": s = $cfs.clone(!0).appendTo($wrp) }switch (b.fx) { case "crossfade": case "uncover": case "uncover-fade": s.children().slice(0, c).remove(), s.children().slice(opts.items.visibleConf.old).remove(); break; case "cover": case "cover-fade": s.children().slice(opts.items.visible).remove(), s.css(C) }if ($cfs.css(B), scrl = sc_setScroll(D, b.easing, conf), w[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0, ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (E = function () { $wrp.css(u) }, F = function () { scrl.anims.push([$wrp, u]) }), opts.usePadding) { switch (k.not(i).length && (y[opts.d.marginRight] = i.data("_cfs_origCssMargin"), 0 > l ? i.css(y) : (K = function () { i.css(y) }, L = function () { scrl.anims.push([i, y]) })), b.fx) { case "cover": case "cover-fade": s.children().eq(c - 1).css(y) }k.not(j).length && (z[opts.d.marginRight] = j.data("_cfs_origCssMargin"), G = function () { j.css(z) }, H = function () { scrl.anims.push([j, z]) }), m >= 0 && (A[opts.d.marginRight] = k.data("_cfs_origCssMargin") + opts.padding[opts.d[1]], I = function () { k.css(A) }, J = function () { scrl.anims.push([k, A]) }) } O = function () { $cfs.css(w) }; var P = opts.items.visible + c - itms.total; N = function () { if (P > 0 && ($cfs.children().slice(itms.total).remove(), g = $($cfs.children().slice(itms.total - (opts.items.visible - P)).get().concat($cfs.children().slice(0, P).get()))), sc_showHiddenItems(p), opts.usePadding) { var a = $cfs.children().eq(opts.items.visible + c - 1); a.css(opts.d.marginRight, a.data("_cfs_origCssMargin")) } }; var Q = sc_mapCallbackArguments(g, q, h, c, "prev", D, u); switch (M = function () { sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", Q, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf)) }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", Q, clbk), b.fx) { case "none": $cfs.css(w), E(), G(), I(), K(), O(), N(), M(); break; case "fade": scrl.anims.push([$cfs, { opacity: 0 }, function () { E(), G(), I(), K(), O(), N(), scrl = sc_setScroll(D, b.easing, conf), scrl.anims.push([$cfs, { opacity: 1 }, M]), sc_startScroll(scrl, conf) }]); break; case "crossfade": $cfs.css({ opacity: 0 }), scrl.anims.push([s, { opacity: 0 }]), scrl.anims.push([$cfs, { opacity: 1 }, M]), F(), G(), I(), K(), O(), N(); break; case "cover": scrl.anims.push([s, w, function () { G(), I(), K(), O(), N(), M() }]), F(); break; case "cover-fade": scrl.anims.push([$cfs, { opacity: 0 }]), scrl.anims.push([s, w, function () { G(), I(), K(), O(), N(), M() }]), F(); break; case "uncover": scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N(); break; case "uncover-fade": $cfs.css({ opacity: 0 }), scrl.anims.push([$cfs, { opacity: 1 }]), scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N(); break; default: scrl.anims.push([$cfs, w, function () { N(), M() }]), F(), H(), J(), L() }return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0
            }), $cfs.bind(cf_e("slide_next", conf), function (a, b, c) { a.stopPropagation(); var d = $cfs.children(); if (!opts.circular && itms.first == opts.items.visible) return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1), a.stopImmediatePropagation(); if (sz_resetMargin(d, opts), !is_number(c)) { if ("*" != opts.items.filter) { var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts); c = gn_getScrollItemsNextFilter(d, opts, 0, e) } else c = opts.items.visible; c = cf_getAdjust(c, opts, b.items, $tt0) } var f = 0 == itms.first ? itms.total : itms.first; if (!opts.circular) { if (opts.items.visibleConf.variable) var g = gn_getVisibleItemsNext(d, opts, c), e = gn_getVisibleItemsPrev(d, opts, f - 1); else var g = opts.items.visible, e = opts.items.visible; c + g > f && (c = f - e) } if (opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) { for (var g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - c >= g && itms.total > c;)c++, g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible = g } else if ("*" != opts.items.filter) { var g = gn_getVisibleItemsNextFilter(d, opts, c); opts.items.visible = cf_getItemsAdjust(g, opts, opts.items.visibleConf.adjust, $tt0) } if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling."); for (debug(conf, "Scrolling " + c + " items forward."), itms.first -= c; 0 > itms.first;)itms.first += itms.total; opts.circular || (itms.first == opts.items.visible && b.onEnd && b.onEnd.call($tt0, "next"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs); var d = $cfs.children(), h = gi_getOldItemsNext(d, opts), i = gi_getNewItemsNext(d, opts, c), j = d.eq(c - 1), k = h.last(), l = i.last(); sz_resetMargin(d, opts); var m = 0, n = 0; if (opts.align) { var o = cf_getAlignPadding(i, opts); m = o[0], n = o[1] } var p = !1, q = $(); if (c > opts.items.visibleConf.old && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) { var r = opts.items[opts.d.width]; p = q, j = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable" } var s = !1, t = ms_getTotalSize(d.slice(0, c), opts, "width"), u = cf_mapWrapperSizes(ms_getSizes(i, opts, !0), opts, !opts.usePadding), v = 0, w = {}, x = {}, y = {}, z = {}, A = {}, B = sc_getDuration(b, opts, c, t); switch (b.fx) { case "uncover": case "uncover-fade": v = ms_getTotalSize(d.slice(0, opts.items.visibleConf.old), opts, "width") }p && (opts.items[opts.d.width] = r), opts.align && 0 > opts.padding[opts.d[1]] && (opts.padding[opts.d[1]] = 0), sz_resetMargin(d, opts, !0), sz_resetMargin(k, opts, opts.padding[opts.d[1]]), opts.align && (opts.padding[opts.d[1]] = n, opts.padding[opts.d[3]] = m), A[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0; var C = function () { }, D = function () { }, E = function () { }, F = function () { }, G = function () { }, H = function () { }, I = function () { }, J = function () { }, K = function () { }; switch (b.fx) { case "crossfade": case "cover": case "cover-fade": case "uncover": case "uncover-fade": s = $cfs.clone(!0).appendTo($wrp), s.children().slice(opts.items.visibleConf.old).remove() }switch (b.fx) { case "crossfade": case "cover": case "cover-fade": $cfs.css("zIndex", 1), s.css("zIndex", 0) }if (scrl = sc_setScroll(B, b.easing, conf), w[opts.d.left] = -t, x[opts.d.left] = -v, 0 > m && (w[opts.d.left] += m), ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (C = function () { $wrp.css(u) }, D = function () { scrl.anims.push([$wrp, u]) }), opts.usePadding) { var L = l.data("_cfs_origCssMargin"); n >= 0 && (L += opts.padding[opts.d[1]]), l.css(opts.d.marginRight, L), j.not(k).length && (z[opts.d.marginRight] = k.data("_cfs_origCssMargin")), E = function () { k.css(z) }, F = function () { scrl.anims.push([k, z]) }; var M = j.data("_cfs_origCssMargin"); m > 0 && (M += opts.padding[opts.d[3]]), y[opts.d.marginRight] = M, G = function () { j.css(y) }, H = function () { scrl.anims.push([j, y]) } } K = function () { $cfs.css(A) }; var N = opts.items.visible + c - itms.total; J = function () { N > 0 && $cfs.children().slice(itms.total).remove(); var a = $cfs.children().slice(0, c).appendTo($cfs).last(); if (N > 0 && (i = gi_getCurrentItems(d, opts)), sc_showHiddenItems(p), opts.usePadding) { if (itms.total < opts.items.visible + c) { var b = $cfs.children().eq(opts.items.visible - 1); b.css(opts.d.marginRight, b.data("_cfs_origCssMargin") + opts.padding[opts.d[1]]) } a.css(opts.d.marginRight, a.data("_cfs_origCssMargin")) } }; var O = sc_mapCallbackArguments(h, q, i, c, "next", B, u); switch (I = function () { $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")), sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", O, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf)) }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", O, clbk), b.fx) { case "none": $cfs.css(w), C(), E(), G(), K(), J(), I(); break; case "fade": scrl.anims.push([$cfs, { opacity: 0 }, function () { C(), E(), G(), K(), J(), scrl = sc_setScroll(B, b.easing, conf), scrl.anims.push([$cfs, { opacity: 1 }, I]), sc_startScroll(scrl, conf) }]); break; case "crossfade": $cfs.css({ opacity: 0 }), scrl.anims.push([s, { opacity: 0 }]), scrl.anims.push([$cfs, { opacity: 1 }, I]), D(), E(), G(), K(), J(); break; case "cover": $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J(); break; case "cover-fade": $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([s, { opacity: 0 }]), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J(); break; case "uncover": scrl.anims.push([s, x, I]), D(), E(), G(), K(), J(); break; case "uncover-fade": $cfs.css({ opacity: 0 }), scrl.anims.push([$cfs, { opacity: 1 }]), scrl.anims.push([s, x, I]), D(), E(), G(), K(), J(); break; default: scrl.anims.push([$cfs, w, function () { K(), J(), I() }]), D(), F(), H() }return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0 }), $cfs.bind(cf_e("slideTo", conf), function (a, b, c, d, e, f, g) { a.stopPropagation(); var h = [b, c, d, e, f, g], i = ["string/number/object", "number", "boolean", "object", "string", "function"], j = cf_sortParams(h, i); return e = j[3], f = j[4], g = j[5], b = gn_getItemIndex(j[0], j[1], j[2], itms, $cfs), 0 == b ? !1 : (is_object(e) || (e = !1), "prev" != f && "next" != f && (f = opts.circular ? itms.total / 2 >= b ? "next" : "prev" : 0 == itms.first || itms.first > b ? "next" : "prev"), "prev" == f && (b = itms.total - b), $cfs.trigger(cf_e(f, conf), [e, b, g]), !0) }), $cfs.bind(cf_e("prevPage", conf), function (a, b, c) { a.stopPropagation(); var d = $cfs.triggerHandler(cf_e("currentPage", conf)); return $cfs.triggerHandler(cf_e("slideToPage", conf), [d - 1, b, "prev", c]) }), $cfs.bind(cf_e("nextPage", conf), function (a, b, c) { a.stopPropagation(); var d = $cfs.triggerHandler(cf_e("currentPage", conf)); return $cfs.triggerHandler(cf_e("slideToPage", conf), [d + 1, b, "next", c]) }), $cfs.bind(cf_e("slideToPage", conf), function (a, b, c, d, e) { a.stopPropagation(), is_number(b) || (b = $cfs.triggerHandler(cf_e("currentPage", conf))); var f = opts.pagination.items || opts.items.visible, g = Math.ceil(itms.total / f) - 1; return 0 > b && (b = g), b > g && (b = 0), $cfs.triggerHandler(cf_e("slideTo", conf), [b * f, 0, !0, c, d, e]) }), $cfs.bind(cf_e("jumpToStart", conf), function (a, b) { if (a.stopPropagation(), b = b ? gn_getItemIndex(b, 0, !0, itms, $cfs) : 0, b += itms.first, 0 != b) { if (itms.total > 0) for (; b > itms.total;)b -= itms.total; $cfs.prepend($cfs.children().slice(b, itms.total)) } return !0 }), $cfs.bind(cf_e("synchronise", conf), function (a, b) { if (a.stopPropagation(), b) b = cf_getSynchArr(b); else { if (!opts.synchronise) return debug(conf, "No carousel to synchronise."); b = opts.synchronise } for (var c = $cfs.triggerHandler(cf_e("currentPosition", conf)), d = !0, e = 0, f = b.length; f > e; e++)b[e][0].triggerHandler(cf_e("slideTo", conf), [c, b[e][3], !0]) || (d = !1); return d }), $cfs.bind(cf_e("queue", conf), function (a, b, c) { return a.stopPropagation(), is_function(b) ? b.call($tt0, queu) : is_array(b) ? queu = b : is_undefined(b) || queu.push([b, c]), queu }), $cfs.bind(cf_e("insertItem", conf), function (a, b, c, d, e) { a.stopPropagation(); var f = [b, c, d, e], g = ["string/object", "string/number/object", "boolean", "number"], h = cf_sortParams(f, g); if (b = h[0], c = h[1], d = h[2], e = h[3], is_object(b) && !is_jquery(b) ? b = $(b) : is_string(b) && (b = $(b)), !is_jquery(b) || 0 == b.length) return debug(conf, "Not a valid object."); is_undefined(c) && (c = "end"), sz_storeMargin(b, opts), sz_storeOrigCss(b); var i = c, j = "before"; "end" == c ? d ? (0 == itms.first ? (c = itms.total - 1, j = "after") : (c = itms.first, itms.first += b.length), 0 > c && (c = 0)) : (c = itms.total - 1, j = "after") : c = gn_getItemIndex(c, e, d, itms, $cfs); var k = $cfs.children().eq(c); return k.length ? k[j](b) : (debug(conf, "Correct insert-position not found! Appending item to the end."), $cfs.append(b)), "end" == i || d || itms.first > c && (itms.first += b.length), itms.total = $cfs.children().length, itms.first >= itms.total && (itms.first -= itms.total), $cfs.trigger(cf_e("updateSizes", conf)), $cfs.trigger(cf_e("linkAnchors", conf)), !0 }), $cfs.bind(cf_e("removeItem", conf), function (a, b, c, d) { a.stopPropagation(); var e = [b, c, d], f = ["string/number/object", "boolean", "number"], g = cf_sortParams(e, f); if (b = g[0], c = g[1], d = g[2], b instanceof $ && b.length > 1) return i = $(), b.each(function () { var e = $cfs.trigger(cf_e("removeItem", conf), [$(this), c, d]); e && (i = i.add(e)) }), i; if (is_undefined(b) || "end" == b) i = $cfs.children().last(); else { b = gn_getItemIndex(b, d, c, itms, $cfs); var i = $cfs.children().eq(b); i.length && itms.first > b && (itms.first -= i.length) } return i && i.length && (i.detach(), itms.total = $cfs.children().length, $cfs.trigger(cf_e("updateSizes", conf))), i }), $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function (a, b) { a.stopPropagation(); var c = a.type.slice(conf.events.prefix.length); return is_array(b) && (clbk[c] = b), is_function(b) && clbk[c].push(b), clbk[c] }), $cfs.bind(cf_e("currentPosition", conf), function (a, b) { if (a.stopPropagation(), 0 == itms.first) var c = 0; else var c = itms.total - itms.first; return is_function(b) && b.call($tt0, c), c }), $cfs.bind(cf_e("currentPage", conf), function (a, b) { a.stopPropagation(); var e, c = opts.pagination.items || opts.items.visible, d = Math.ceil(itms.total / c - 1); return e = 0 == itms.first ? 0 : itms.first < itms.total % c ? 0 : itms.first != c || opts.circular ? Math.round((itms.total - itms.first) / c) : d, 0 > e && (e = 0), e > d && (e = d), is_function(b) && b.call($tt0, e), e }), $cfs.bind(cf_e("currentVisible", conf), function (a, b) { a.stopPropagation(); var c = gi_getCurrentItems($cfs.children(), opts); return is_function(b) && b.call($tt0, c), c }), $cfs.bind(cf_e("slice", conf), function (a, b, c, d) { if (a.stopPropagation(), 0 == itms.total) return !1; var e = [b, c, d], f = ["number", "number", "function"], g = cf_sortParams(e, f); if (b = is_number(g[0]) ? g[0] : 0, c = is_number(g[1]) ? g[1] : itms.total, d = g[2], b += itms.first, c += itms.first, items.total > 0) { for (; b > itms.total;)b -= itms.total; for (; c > itms.total;)c -= itms.total; for (; 0 > b;)b += itms.total; for (; 0 > c;)c += itms.total } var i, h = $cfs.children(); return i = c > b ? h.slice(b, c) : $(h.slice(b, itms.total).get().concat(h.slice(0, c).get())), is_function(d) && d.call($tt0, i), i }), $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function (a, b) { a.stopPropagation(); var c = a.type.slice(conf.events.prefix.length), d = crsl[c]; return is_function(b) && b.call($tt0, d), d }), $cfs.bind(cf_e("configuration", conf), function (e, a, b, c) { e.stopPropagation(); var reInit = !1; if (is_function(a)) a.call($tt0, opts); else if (is_object(a)) opts_orig = $.extend(!0, {}, opts_orig, a), b !== !1 ? reInit = !0 : opts = $.extend(!0, {}, opts, a); else if (!is_undefined(a)) if (is_function(b)) { var val = eval("opts." + a); is_undefined(val) && (val = ""), b.call($tt0, val) } else { if (is_undefined(b)) return eval("opts." + a); "boolean" != typeof c && (c = !0), eval("opts_orig." + a + " = b"), c !== !1 ? reInit = !0 : eval("opts." + a + " = b") } if (reInit) { sz_resetMargin($cfs.children(), opts), FN._init(opts_orig), FN._bind_buttons(); var sz = sz_setSizes($cfs, opts); $cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz]) } return opts }), $cfs.bind(cf_e("linkAnchors", conf), function (a, b, c) { return a.stopPropagation(), is_undefined(b) ? b = $("body") : is_string(b) && (b = $(b)), is_jquery(b) && 0 != b.length ? (is_string(c) || (c = "a.caroufredsel"), b.find(c).each(function () { var a = this.hash || ""; a.length > 0 && -1 != $cfs.children().index($(a)) && $(this).unbind("click").click(function (b) { b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), a) }) }), !0) : debug(conf, "Not a valid object.") }), $cfs.bind(cf_e("updatePageStatus", conf), function (a, b) { if (a.stopPropagation(), opts.pagination.container) { var d = opts.pagination.items || opts.items.visible, e = Math.ceil(itms.total / d); b && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(), opts.pagination.container.each(function () { for (var a = 0; e > a; a++) { var b = $cfs.children().eq(gn_getItemIndex(a * d, 0, !0, itms, $cfs)); $(this).append(opts.pagination.anchorBuilder.call(b[0], a + 1)) } })), opts.pagination.container.each(function () { $(this).children().unbind(opts.pagination.event).each(function (a) { $(this).bind(opts.pagination.event, function (b) { b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [a * d, -opts.pagination.deviation, !0, opts.pagination]) }) }) })); var f = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation; return f >= e && (f = 0), 0 > f && (f = e - 1), opts.pagination.container.each(function () { $(this).children().removeClass(cf_c("selected", conf)).eq(f).addClass(cf_c("selected", conf)) }), !0 } }), $cfs.bind(cf_e("updateSizes", conf), function () { var b = opts.items.visible, c = $cfs.children(), d = ms_getParentSize($wrp, opts, "width"); if (itms.total = c.length, crsl.primarySizePercentage ? (opts.maxDimension = d, opts[opts.d.width] = ms_getPercentage(d, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, d), opts.responsive ? (opts.items.width = opts.items.sizesConf.width, opts.items.height = opts.items.sizesConf.height, opts = in_getResponsiveValues(opts, c, d), b = opts.items.visible, sz_setResponsiveSizes(opts, c)) : opts.items.visibleConf.variable ? b = gn_getVisibleItemsNext(c, opts, 0) : "*" != opts.items.filter && (b = gn_getVisibleItemsNextFilter(c, opts, 0)), !opts.circular && 0 != itms.first && b > itms.first) { if (opts.items.visibleConf.variable) var e = gn_getVisibleItemsPrev(c, opts, itms.first) - itms.first; else if ("*" != opts.items.filter) var e = gn_getVisibleItemsPrevFilter(c, opts, itms.first) - itms.first; else var e = opts.items.visible - itms.first; debug(conf, "Preventing non-circular: sliding " + e + " items backward."), $cfs.trigger(cf_e("prev", conf), e) } opts.items.visible = cf_getItemsAdjust(b, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts = in_getAlignPadding(opts, c); var f = sz_setSizes($cfs, opts); return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, f]), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), f }), $cfs.bind(cf_e("destroy", conf), function (a, b) { return a.stopPropagation(), tmrs = sc_clearTimers(tmrs), $cfs.data("_cfs_isCarousel", !1), $cfs.trigger(cf_e("finish", conf)), b && $cfs.trigger(cf_e("jumpToStart", conf)), sz_restoreOrigCss($cfs.children()), sz_restoreOrigCss($cfs), FN._unbind_events(), FN._unbind_buttons(), "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs), !0 }), $cfs.bind(cf_e("debug", conf), function () { return debug(conf, "Carousel width: " + opts.width), debug(conf, "Carousel height: " + opts.height), debug(conf, "Item widths: " + opts.items.width), debug(conf, "Item heights: " + opts.items.height), debug(conf, "Number of items visible: " + opts.items.visible), opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items), opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items), opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items), conf.debug }), $cfs.bind("_cfs_triggerEvent", function (a, b, c) { return a.stopPropagation(), $cfs.triggerHandler(cf_e(b, conf), c) })
        }, FN._unbind_events = function () { $cfs.unbind(cf_e("", conf)), $cfs.unbind(cf_e("", conf, !1)), $cfs.unbind("_cfs_triggerEvent") }, FN._bind_buttons = function () { if (FN._unbind_buttons(), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), opts.auto.pauseOnHover) { var a = bt_pauseOnHoverConfig(opts.auto.pauseOnHover); $wrp.bind(cf_e("mouseenter", conf, !1), function () { $cfs.trigger(cf_e("pause", conf), a) }).bind(cf_e("mouseleave", conf, !1), function () { $cfs.trigger(cf_e("resume", conf)) }) } if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function (a) { a.preventDefault(); var b = !1, c = null; crsl.isPaused ? b = "play" : opts.auto.pauseOnEvent && (b = "pause", c = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)), b && $cfs.trigger(cf_e(b, conf), c) }), opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function (a) { a.preventDefault(), $cfs.trigger(cf_e("prev", conf)) }), opts.prev.pauseOnHover)) { var a = bt_pauseOnHoverConfig(opts.prev.pauseOnHover); opts.prev.button.bind(cf_e("mouseenter", conf, !1), function () { $cfs.trigger(cf_e("pause", conf), a) }).bind(cf_e("mouseleave", conf, !1), function () { $cfs.trigger(cf_e("resume", conf)) }) } if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function (a) { a.preventDefault(), $cfs.trigger(cf_e("next", conf)) }), opts.next.pauseOnHover)) { var a = bt_pauseOnHoverConfig(opts.next.pauseOnHover); opts.next.button.bind(cf_e("mouseenter", conf, !1), function () { $cfs.trigger(cf_e("pause", conf), a) }).bind(cf_e("mouseleave", conf, !1), function () { $cfs.trigger(cf_e("resume", conf)) }) } if (opts.pagination.container && opts.pagination.pauseOnHover) { var a = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover); opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function () { $cfs.trigger(cf_e("pause", conf), a) }).bind(cf_e("mouseleave", conf, !1), function () { $cfs.trigger(cf_e("resume", conf)) }) } if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function (a) { var b = a.keyCode; b == opts.next.key && (a.preventDefault(), $cfs.trigger(cf_e("next", conf))), b == opts.prev.key && (a.preventDefault(), $cfs.trigger(cf_e("prev", conf))) }), opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function (a) { var b = a.keyCode; b >= 49 && 58 > b && (b = (b - 49) * opts.items.visible, itms.total >= b && (a.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [b, 0, !0, opts.pagination]))) }), $.fn.swipe) { var b = "ontouchstart" in window; if (b && opts.swipe.onTouch || !b && opts.swipe.onMouse) { var c = $.extend(!0, {}, opts.prev, opts.swipe), d = $.extend(!0, {}, opts.next, opts.swipe), e = function () { $cfs.trigger(cf_e("prev", conf), [c]) }, f = function () { $cfs.trigger(cf_e("next", conf), [d]) }; switch (opts.direction) { case "up": case "down": opts.swipe.options.swipeUp = f, opts.swipe.options.swipeDown = e; break; default: opts.swipe.options.swipeLeft = f, opts.swipe.options.swipeRight = e }crsl.swipe && $cfs.swipe("destroy"), $wrp.swipe(opts.swipe.options), $wrp.css("cursor", "move"), crsl.swipe = !0 } } if ($.fn.mousewheel && opts.mousewheel) { var g = $.extend(!0, {}, opts.prev, opts.mousewheel), h = $.extend(!0, {}, opts.next, opts.mousewheel); crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)), $wrp.bind(cf_e("mousewheel", conf, !1), function (a, b) { a.preventDefault(), b > 0 ? $cfs.trigger(cf_e("prev", conf), [g]) : $cfs.trigger(cf_e("next", conf), [h]) }), crsl.mousewheel = !0 } if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay), crsl.upDateOnWindowResize) { var i = function () { $cfs.trigger(cf_e("finish", conf)), opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)), sz_resetMargin($cfs.children(), opts), $cfs.trigger(cf_e("updateSizes", conf)) }, j = $(window), k = null; if ($.debounce && "debounce" == conf.onWindowResize) k = $.debounce(200, i); else if ($.throttle && "throttle" == conf.onWindowResize) k = $.throttle(300, i); else { var l = 0, m = 0; k = function () { var a = j.width(), b = j.height(); (a != l || b != m) && (i(), l = a, m = b) } } j.bind(cf_e("resize", conf, !1, !0, !0), k) } }, FN._unbind_buttons = function () { var b = (cf_e("", conf), cf_e("", conf, !1)); ns3 = cf_e("", conf, !1, !0, !0), $(document).unbind(ns3), $(window).unbind(ns3), $wrp.unbind(b), opts.auto.button && opts.auto.button.unbind(b), opts.prev.button && opts.prev.button.unbind(b), opts.next.button && opts.next.button.unbind(b), opts.pagination.container && (opts.pagination.container.unbind(b), opts.pagination.anchorBuilder && opts.pagination.container.children().remove()), crsl.swipe && ($cfs.swipe("destroy"), $wrp.css("cursor", "default"), crsl.swipe = !1), crsl.mousewheel && (crsl.mousewheel = !1), nv_showNavi(opts, "hide", conf), nv_enableNavi(opts, "removeClass", conf) }, is_boolean(configs) && (configs = { debug: configs }); var crsl = { direction: "next", isPaused: !0, isScrolling: !1, isStopped: !1, mousewheel: !1, swipe: !1 }, itms = { total: $cfs.children().length, first: 0 }, tmrs = { auto: null, progress: null, startTime: getTime(), timePassed: 0 }, scrl = { isStopped: !1, duration: 0, startTime: 0, easing: "", anims: [] }, clbk = { onBefore: [], onAfter: [] }, queu = [], conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs), opts = {}, opts_orig = $.extend(!0, {}, options), $wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent(); if (conf.selector = $cfs.selector, conf.serialNumber = $.fn.carouFredSel.serialNumber++, conf.transition = conf.transition && $.fn.transition ? "transition" : "animate", FN._init(opts_orig, !0, starting_position), FN._build(), FN._bind_events(), FN._bind_buttons(), is_array(opts.items.start)) var start_arr = opts.items.start; else { var start_arr = []; 0 != opts.items.start && start_arr.push(opts.items.start) } if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)), start_arr.length > 0) for (var a = 0, l = start_arr.length; l > a; a++) { var s = start_arr[a]; if (0 != s) { if (s === !0) { if (s = window.location.hash, 1 > s.length) continue } else "random" === s && (s = Math.floor(Math.random() * itms.total)); if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, { fx: "none" }])) break } } var siz = sz_setSizes($cfs, opts), itm = gi_getCurrentItems($cfs.children(), opts); return opts.onCreate && opts.onCreate.call($tt0, { width: siz.width, height: siz.height, items: itm }), $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]), $cfs.trigger(cf_e("linkAnchors", conf)), conf.debug && $cfs.trigger(cf_e("debug", conf)), $cfs
    }, $.fn.carouFredSel.serialNumber = 1, $.fn.carouFredSel.defaults = { synchronise: !1, infinite: !0, circular: !0, responsive: !1, direction: "left", items: { start: 0 }, scroll: { easing: "swing", duration: 500, pauseOnHover: !1, event: "click", queue: !1 } }, $.fn.carouFredSel.configs = { debug: !1, transition: !1, onWindowResize: "throttle", events: { prefix: "", namespace: "cfs" }, wrapper: { element: "div", classname: "caroufredsel_wrapper" }, classnames: {} }, $.fn.carouFredSel.pageAnchorBuilder = function (a) { return '<a href="#"><span>' + a + "</span></a>" }, $.fn.carouFredSel.progressbarUpdater = function (a) { $(this).css("width", a + "%") }, $.fn.carouFredSel.cookie = { get: function (a) { a += "="; for (var b = document.cookie.split(";"), c = 0, d = b.length; d > c; c++) { for (var e = b[c]; " " == e.charAt(0);)e = e.slice(1); if (0 == e.indexOf(a)) return e.slice(a.length) } return 0 }, set: function (a, b, c) { var d = ""; if (c) { var e = new Date; e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c), d = "; expires=" + e.toGMTString() } document.cookie = a + "=" + b + d + "; path=/" }, remove: function (a) { $.fn.carouFredSel.cookie.set(a, "", -1) } }, $.extend($.easing, { quadratic: function (a) { var b = a * a; return a * (-b * a + 4 * b - 6 * a + 4) }, cubic: function (a) { return a * (4 * a * a - 9 * a + 6) }, elastic: function (a) { var b = a * a; return a * (33 * b * b - 106 * b * a + 126 * b - 67 * a + 15) } }))
});
/** * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com * Dual licensed under MIT and GPL. * @author Ariel Flesler * @version 1.4.3 */; (function ($) { var h = $.scrollTo = function (a, b, c) { $(window).scrollTo(a, b, c) }; h.defaults = { axis: 'xy', duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1, limit: true }; h.window = function (a) { return $(window)._scrollable() }; $.fn._scrollable = function () { return this.map(function () { var a = this, isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1; if (!isWin) return a; var b = (a.contentWindow || a).document || a.ownerDocument || a; return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement }) }; $.fn.scrollTo = function (e, f, g) { if (typeof f == 'object') { g = f; f = 0 } if (typeof g == 'function') g = { onAfter: g }; if (e == 'max') e = 9e9; g = $.extend({}, h.defaults, g); f = f || g.duration; g.queue = g.queue && g.axis.length > 1; if (g.queue) f /= 2; g.offset = both(g.offset); g.over = both(g.over); return this._scrollable().each(function () { if (!e) return; var d = this, $elem = $(d), targ = e, toff, attr = {}, win = $elem.is('html,body'); switch (typeof targ) { case 'number': case 'string': if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) { targ = both(targ); break } targ = $(targ, this); if (!targ.length) return; case 'object': if (targ.is || targ.style) toff = (targ = $(targ)).offset() }$.each(g.axis.split(''), function (i, a) { var b = a == 'x' ? 'Left' : 'Top', pos = b.toLowerCase(), key = 'scroll' + b, old = d[key], max = h.max(d, a); if (toff) { attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]); if (g.margin) { attr[key] -= parseInt(targ.css('margin' + b)) || 0; attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0 } attr[key] += g.offset[pos] || 0; if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos] } else { var c = targ[pos]; attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c } if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max); if (!i && g.queue) { if (old != attr[key]) animate(g.onAfterFirst); delete attr[key] } }); animate(g.onAfter); function animate(a) { $elem.animate(attr, f, g.easing, a && function () { a.call(this, e, g) }) } }).end() }; h.max = function (a, b) { var c = b == 'x' ? 'Width' : 'Height', scroll = 'scroll' + c; if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()](); var d = 'client' + c, html = a.ownerDocument.documentElement, body = a.ownerDocument.body; return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d]) }; function both(a) { return typeof a == 'object' ? a : { top: a, left: a } } })(jQuery);
/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 2.2.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

(function (e, t, n, r) { var i = function (r, i) { this.elem = r; this.$elem = e(r); this.options = i; this.metadata = this.$elem.data("plugin-options"); this.$nav = this.$elem.find("a"); this.$win = e(t); this.sections = {}; this.didScroll = false; this.$doc = e(n); this.docHeight = this.$doc.height() }; i.prototype = { defaults: { currentClass: "active", changeHash: false, easing: "swing", filter: "", scrollSpeed: 750, scrollOffset: 0, scrollThreshold: .5, begin: false, end: false, scrollChange: false }, init: function () { var t = this; t.config = e.extend({}, t.defaults, t.options, t.metadata); if (t.config.filter !== "") { t.$nav = t.$nav.filter(t.config.filter) } t.$nav.on("click.onePageNav", e.proxy(t.handleClick, t)); t.getPositions(); t.bindInterval(); t.$win.on("resize.onePageNav", e.proxy(t.getPositions, t)); return this }, adjustNav: function (e, t) { e.$elem.find("." + e.config.currentClass).removeClass(e.config.currentClass); t.addClass(e.config.currentClass) }, bindInterval: function () { var e = this; var t; e.$win.on("scroll.onePageNav", function () { e.didScroll = true }); e.t = setInterval(function () { t = e.$doc.height(); if (e.didScroll) { e.didScroll = false; e.scrollChange() } if (t !== e.docHeight) { e.docHeight = t; e.getPositions() } }, 250) }, getHash: function (e) { return e.attr("href").split("#")[1] }, getPositions: function () { var t = this; var n; var r; var i; t.$nav.each(function () { n = t.getHash(e(this)); i = e("#" + n); if (i.length) { r = i.offset().top; t.sections[n] = Math.round(r) - t.config.scrollOffset } }) }, getSection: function (e) { var t = null; var n = Math.round(this.$win.height() * this.config.scrollThreshold); for (var r in this.sections) { if (this.sections[r] - n < e) { t = r } } return t }, handleClick: function (n) { var r = this; var i = e(n.currentTarget); var s = i.parent(); var o = "#" + r.getHash(i); if (!s.hasClass(r.config.currentClass)) { if (r.config.begin) { r.config.begin() } r.adjustNav(r, s); r.unbindInterval(); e.scrollTo(o, r.config.scrollSpeed, { axis: "y", easing: r.config.easing, offset: { top: -r.config.scrollOffset }, onAfter: function () { if (r.config.changeHash) { t.location.hash = o } r.bindInterval(); if (r.config.end) { r.config.end() } } }) } n.preventDefault() }, scrollChange: function () { var e = this.$win.scrollTop(); var t = this.getSection(e); var n; if (t !== null) { n = this.$elem.find('a[href$="#' + t + '"]').parent(); if (!n.hasClass(this.config.currentClass)) { this.adjustNav(this, n); if (this.config.scrollChange) { this.config.scrollChange(n) } } } }, unbindInterval: function () { clearInterval(this.t); this.$win.unbind("scroll.onePageNav") } }; i.defaults = i.prototype.defaults; e.fn.onePageNav = function (e) { return this.each(function () { (new i(this, e)).init() }) } })(jQuery, window, document)
jQuery.fn.tag = function (options) {
    //default options
    var defaults = {
        seperator: ',',
        unique: true,
        addOnEnter: true,
        style: {
            list: 'taglist',
            item: 'tag',
            input: 'input',
            remove: 'delete'
        }
    };

    //options extends defaults
    options = jQuery.extend(defaults, options);

    //her element icin
    jQuery(this).each(function () {
        //eger data-seperator attribute'i varsa onu oncelkli say
        if ((seperator = jQuery(this).attr('data-seperator')) != '')
            options.seperator = seperator;

        //tag create eden fonksiyon
        var create_tag = function (text) {
            //trim yapalim
            var value = text.replace(/^\s+|\s+$/g, '');
            //eger deger yoksa cikis yap
            if (value == '')
                return;

            //her tag bir li tagidir
            var item = jQuery('<li/>').addClass(options.style.item);
            //bir tag su yapidadir: <li><span>tag</span><a tabindex=-1><span>[X]</span></a></li>
            var tag = jQuery('<span/>');
            var close_text = jQuery('<span/>').html('[X]');
            var close = jQuery('<a/>', { tabindex: '-1' }).addClass(options.style.remove).append(close_text).click(function () {
                //close'a basildiginda li tagini remove et
                jQuery(this).closest('li').remove();
                //input degerini tekrar duzenle
                update_input();
            });

            //eger unique option true ise ve daha once varsa cikis yap
            if (options.unique && jQuery.inArray(value, values) > -1) return;

            //degerler arrayina ekle
            values.push(value);
            //<li><span /></li> icerisine yazar
            tag.html(value);
            //tum li'yi construct eder
            item.append(tag).append(' ').append(close);

            //li elementini dondurur.
            return item;
        };

        //tag'i ul'ye ekleyen fonksiyon
        var add_tag = function (input) {
            //eger giris yapilan deger varsa
            if (jQuery(input).val() != '') {
                //tagi create et
                var item = create_tag(jQuery(input).val());
                //eger tag create edilemediyse
                if (!item) {
                    //degerini sifirla ve genisligini kucult
                    jQuery(input).val('');
                    jQuery(input).width(8);
                }
                else {
                    //eger ekleyebildiyse inputun bulundugu li'den once ekle
                    jQuery(input).closest('li').before(item);
                    //eger seperator eklendiyse sil
                    jQuery(input).val(jQuery(input).val().replace(options.seperator, ''));
                    //jQuery(input).closest('li').prev().after(jQuery(input).closest('li')); //buna gerek kalmadi

                    //input'u kucult, sifirla ve odakla
                    jQuery(input).width(8).val('').focus();
                }
                //degerleri tekrar duzenle
                update_input();
                //shadowu sifirla
                shadow.html('');
            }
        };

        //gercek inputun degerlerinin duzenlendigi fonksiyon
        var update_input = function () {
            //tag arrayi
            var tags = [];
            //her tag item icin
            jQuery('li.' + options.style.item + ' > span', list).each(function () {
                //tagleri ekle
                tags.push(jQuery(this).html());
            });
            values = tags;
            //degerleri tekrar yaz.
            jQuery(input).val(tags.join(options.seperator));
        };

        //gercek input
        var input = jQuery(this);
        //eger inputsa
        if (input.is(':input')) {
            //gercek inputu gizle
            input.hide();
            //ul click oldugunda input'a odaklan
            var list = jQuery('<ul/>').addClass(options.style.list).click(function () {
                jQuery(this).find('input').focus();
            });
            //ekleyen input
            var add = jQuery('<input/>', { type: 'text' });
            //initial degerleri al
            var tags = input.val().split(options.seperator);
            var values = [];
            //initial degerleri uygula
            for (index in tags) {
                var item = create_tag(tags[index]);
                list.append(item);
            }
            //gercek inputu tekrar duzenle
            update_input();
            //ul'i gercek inputtan sonra ekle
            input.after(list);
            //input containeri olustur
            var input_container = jQuery('<li/>').addClass(options.style.input);
            //golgesini olustur, golge width'i almak icin kullanilacak
            var shadow = jQuery('<span/>');
            //golgeyi gizle
            shadow.hide();
            //input'u containere ekle
            input_container.append(add);
            //shadowu ekle
            add.after(shadow);
            //listeye ekle.
            list.append(input_container);

            //shadow'u kullanarak input'u gercek boyutuna cekiyoruz
            var auto_width = function (input) {
                //shadow'un icini dolduruyoruz, space'leri nbsp yapmamiz gerekiyor, sondaki ve bastaki bosluklar gelmiyor yoksa.
                shadow.html(jQuery(input).val().replace(/\s/g, '&nbsp;'));
                //sonda ne kadar free alan eklenecek? bosken 8 doluyken 10 iyi.
                var zone = (jQuery(input).val() == '' ? 8 : 10);
                //width'i uygula
                jQuery(input).width(shadow.width() + zone);
            };

            //onkeyup'da yalnizca width'i ayarla
            add.bind('keyup', function () {
                auto_width(this);
            })
                //onkeydown implementasyonu
                .bind('keydown', function (event) {
                    //width
                    auto_width(this);
                    var key = event.keyCode || event.which;

                    //eger bossa ve backspace'e basilmissa
                    if (jQuery(this).val() == '' && (key == 8 || key == 46)) //backspace or delete
                    {
                        //genislik ayarla
                        jQuery(this).width(jQuery(this).val() != '' ? shadow.width() + 5 : 8);
                        //inputun li'sinden bi onceki veya bi sonraki 'li'yi sil.
                        switch (key) {
                            //eger backspace ise onceki sil
                            case 8:
                                if (jQuery(this).closest('li').prev().is('.ready-to-delete')) {
                                    jQuery('.ready-to-delete').removeClass('ready-to-delete');
                                    jQuery(this).closest('li').prev().remove();
                                } else {
                                    jQuery('.ready-to-delete').removeClass('ready-to-delete');
                                    jQuery(this).closest('li').prev().addClass('ready-to-delete');
                                }
                                break;
                            //eger delete ise sonraki sil
                            case 46:
                                if (jQuery(this).closest('li').next().is('.ready-to-delete')) {
                                    jQuery('.ready-to-delete').removeClass('ready-to-delete');
                                    jQuery(this).closest('li').next().remove();
                                } else {
                                    jQuery('.ready-to-delete').removeClass('ready-to-delete');
                                    jQuery(this).closest('li').next().addClass('ready-to-delete');
                                }
                                break;
                        }

                        //degerleri duzenle
                        update_input();

                        //false.
                        event.preventDefault();
                        return false;
                    } else {
                        jQuery('.ready-to-delete').removeClass('ready-to-delete');
                    }

                    //eger deger bossa
                    if (jQuery(this).val() == '') {
                        //yukari veya sola basilmissa
                        if (key == 37 || key == 38) //left, up
                        {
                            //input li'sini yukari tasi
                            jQuery(this).width(jQuery(this).val() != '' ? shadow.width() + 5 : 8);
                            jQuery(this).closest('li').prev().before(jQuery(this).closest('li'));
                            jQuery(this).focus();
                        }

                        //asagi veya saga basilmissa
                        if (key == 39 || key == 40) //down, right
                        {
                            //input li'sini asagi tasi
                            jQuery(this).width(jQuery(this).val() != '' ? shadow.width() + 5 : 8);
                            jQuery(this).closest('li').next().after(jQuery(this).closest('li'));
                            jQuery(this).focus();
                        }
                    }
                })
                //keypress'te
                .bind('keypress', function (event) {
                    auto_width(this);
                    var key = event.keyCode || event.which;
                    //eger basilan tus seperator ise, veya addonenter option aciksa ve entere basilmissa
                    if (options.seperator == String.fromCharCode(key) || options.seperator == key || (options.addOnEnter && key == 13)) {
                        //tag ekle
                        add_tag(this);
                        //false
                        event.preventDefault();
                        return false;
                    }
                })
                //blur oldugunda
                .bind('blur', function () {
                    //eger tag yazildiysa ekle
                    add_tag(this);
                    //input ortalarda falansa diye, en sona atalim onu
                    jQuery(this).closest('ul').append(jQuery(this).closest('li'));
                });
        }
    });
};
/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2013, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"",prevText:"",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",B),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&I(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.delegate("a","click",q)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},q=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},I=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},B=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&I(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),I(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",B))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
(function(d){var p={},e,a,h=document,i=window,f=h.documentElement,j=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[j]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[j]]}catch(d){}}};d(i).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var k=d(),j,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;k=k.add(c?d.find(c):d)});if(j=k.length){var b;
if(!(b=e)){var g={height:i.innerHeight,width:i.innerWidth};if(!g.height&&((b=h.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:h.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:i.pageYOffset||f.scrollTop||h.body.scrollTop,left:i.pageXOffset||f.scrollLeft||h.body.scrollLeft};n<j;n++)if(d.contains(f,k[n])){b=d(k[n]);var l=b.height(),m=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;c.top+l>a.top&&c.top<a.top+e.height&&c.left+m>a.left&&c.left<a.left+e.width?
(m=a.left>c.left?"right":a.left+e.width<c.left+m?"left":"both",l=a.top>c.top?"bottom":a.top+e.height<c.top+l?"top":"both",c=m+"-"+l,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,m,l])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);
$(document).ready(function ($) {
    /* Menu */

    $(".navigation  ul li ul").parent("li").addClass("parent-list");
    $(".parent-list").find("a:first").append(" <span class='menu-nav-arrow'><i class='icon-angle-down'></i></span>");

    $(".navigation ul a").removeAttr("title");
    $(".navigation ul ul").css({ display: "none" });
    $(".navigation ul li").each(function () {
        var sub_menu = $(this).find("ul:first");
        $(this).hover(function () {
            sub_menu.stop().css({ overflow: "hidden", height: "auto", display: "none", paddingTop: 0 }).slideDown(250, function () {
                $(this).css({ overflow: "visible", height: "auto" });
            });
        }, function () {
            sub_menu.stop().slideUp(250, function () {
                $(this).css({ overflow: "hidden", display: "none" });
            });
        });
    });

    /* Header fixed */

    var aboveHeight = $("#header").outerHeight();
    var fixed_enabled = $("#wrap").hasClass("fixed-enabled");
    if (fixed_enabled) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > aboveHeight) {
                $("#header").css({ "top": "0" }).addClass("fixed-nav");
            } else {
                $("#header").css({ "top": "auto" }).removeClass("fixed-nav");
            }
        });
    } else {
        $("#header").removeClass("fixed-nav");
    }

    /* Header and footer fix mobile */

    $(window).bind("resize", function () {
        if ($(this).width() > 990) {
            $(".navigation_mobile_main").addClass("navigation");
            $(".navigation").removeClass("navigation_mobile");
            $(".navigation").find(".navigation_mobile_click").remove();
        } else {
            $(".navigation").addClass("navigation_mobile");
            $(".navigation").addClass("navigation_mobile_main");
            $(".navigation_mobile").removeClass("navigation");
            $(".navigation_mobile").each(function () {
                if (!$(this).find(".navigation_mobile_click").length) {
                    $(this).prepend("<div class='navigation_mobile_click'>Go to...</div>");
                }
            });
        }
        if ($(this).width() < 465) {
            $(".social_icons").each(function () {
                if ($(this).find("li").length > 10) {
                    $(this).find("li i").addClass("font11");
                    $(this).find("li i").removeClass("font17");
                }
            });
        } else {
            $(".social_icons").each(function () {
                if ($(this).find("li").length > 10) {
                    $(this).find("li i").addClass("font17");
                    $(this).find("li i").removeClass("font11");
                }
            });
        }

        if ($(this).width() < 767) {
            $(".panel-pop").each(function () {
                var panel_pop = $(this);
                var panel_width = panel_pop.outerWidth();
                panel_pop.css("margin-left", "-" + panel_width / 2 + "px");
            });
        }
    });

    if ($(this).width() < 767) {
        $(".panel-pop").each(function () {
            var panel_pop = $(this);
            var panel_width = panel_pop.outerWidth();
            panel_pop.css("margin-left", "-" + panel_width / 2 + "px");
        });
    }

    if ($(window).width() < 465) {
        $(".social_icons").each(function () {
            if ($(this).find("li").length > 10) {
                $(this).find("li i").addClass("font11");
                $(this).find("li i").removeClass("font17");
            }
        });
    } else {
        $(".social_icons").each(function () {
            if ($(this).find("li").length > 10) {
                $(this).find("li i").addClass("font17");
                $(this).find("li i").removeClass("font11");
            }
        });
    }

    if ($(window).width() > 990) {
        $(".navigation_mobile_main").addClass("navigation");
        $(".navigation").removeClass("navigation_mobile");
        $(".navigation").find(".navigation_mobile_click").unbind("click");
        $(".navigation").find(".navigation_mobile_click").remove();
    } else {
        $(".navigation").addClass("navigation_mobile");
        $(".navigation").addClass("navigation_mobile_main");
        $(".navigation_mobile").removeClass("navigation");
        $(".navigation_mobile").each(function () {
            if (!$(this).find(".navigation_mobile_click").length) {
                $(this).prepend("<div class='navigation_mobile_click'>Go to...</div>");
            }
        });
    }

    $(document).on("click", ".navigation_mobile_click", function () {
        if ($(".navigation_mobile_click").length) {
            if ($(this).hasClass("navigation_mobile_click_close")) {
                $(this).next().slideUp(500);
                $(this).removeClass("navigation_mobile_click_close");
            } else {
                $(this).next().slideDown(500);
                $(this).addClass("navigation_mobile_click_close");
            }
        }
    });

    /* Go up */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".go-up").css("right", "20px");
        } else {
            $(".go-up").css("right", "-60px");
        }
    });
    $(".go-up").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500);
        return false;
    });

    /* Icon boxes */

    $(".box_warp").each(function () {
        var box_warp = $(this);
        var box_background = box_warp.attr("box_background");
        var box_color = box_warp.attr("box_color");
        var box_border = box_warp.attr("box_border");
        var box_border_width = box_warp.attr("box_border_width");
        var box_border_radius = box_warp.attr("box_border_radius");
        var box_background_hover = box_warp.attr("box_background_hover");
        var box_color_hover = box_warp.attr("box_color_hover");
        var box_border_hover = box_warp.attr("box_border_hover");

        box_warp.css({ "background-color": box_background, "border-color": box_border, "color": box_color, "-moz-border-radius": box_border_radius + "px", "-webkit-border-radius": box_border_radius + "px", "border-radius": box_border_radius + "px" });

        if (box_border_width != "") {
            box_warp.css("border", box_border_width + "px solid " + box_border);
        }

        box_warp.find("a").not(".button").css({ "color": box_color });

        box_warp.hover(function () {
            box_warp.css({ "background-color": box_background_hover, "border-color": box_border_hover, "color": box_color_hover });
            box_warp.find("a").not(".button").css({ "color": box_color_hover });
        }, function () {
            box_warp.css({ "background-color": box_background, "border-color": box_border, "color": box_color });
            box_warp.find("a").not(".button").css({ "color": box_color });
        });
    });

    $(".box_icon").each(function () {
        var box_icon = $(this);
        var icon_align = box_icon.find(".icon_i > span").attr("icon_align");
        var icon_size = box_icon.find(".icon_i > span").attr("icon_size");

        if (box_icon.find(".icon_i > span").hasClass("icon_soft_r") || box_icon.find(".icon_i > span").hasClass("icon_square") || box_icon.find(".icon_i > span").hasClass("icon_circle")) {
            box_icon.find(".icon_i > span").css({ "height": icon_size + "px", "width": icon_size + "px", "font-size": icon_size / 2 + "px", "line-height": icon_size + "px" });
            box_icon.find(".icon_i > span > span").css({ "margin": 0, "text-align": "center" }).parent().css({ "line-height": icon_size + "px" });
        } else if (box_icon.find(".box_text h3 > span").hasClass("icon_soft_r") || box_icon.find(".box_text h3 > span").hasClass("icon_square") || box_icon.find(".box_text h3 > span").hasClass("icon_circle")) {
            if (icon_size > 80 && box_icon.find(".box_text h3 > span > span").length == 1) {
                var icon_size = 80;
            }
            box_icon.find(".box_text h3 > span").css({ "height": icon_size + "px", "width": icon_size + "px", "line-height": icon_size + "px" });
        } else {
            box_icon.find(".icon_i > span i").css({ "font-size": icon_size / 2 + "px" });
        }

        if (icon_align == "left") {
            box_icon.find(".icon_i").css({ "display": "inherit" });
            if (box_icon.find(".icon_i > span").hasClass("icon_soft_r") || box_icon.find(".icon_i > span").hasClass("icon_square") || box_icon.find(".icon_i > span").hasClass("icon_circle")) {
                box_icon.find(".box_text").css({ "padding-left": parseFloat(icon_size) + 25 + "px" });
            } else if (box_icon.find(".icon_i span[class^='icons']").length == 1) {
                box_icon.find(".box_text").css({ "padding-left": 41 + "px" });
            } else {
                box_icon.find(".box_text").css({ "padding-left": parseFloat(icon_size / 2) + 15 + "px" });
            }

            box_icon.find(".icon_i > span").addClass("f_left");
        } else if (icon_align == "right") {
            box_icon.find(".icon_i").css({ "display": "inherit" });

            if (box_icon.find(".icon_i > span").hasClass("icon_soft_r") || box_icon.find(".icon_i > span").hasClass("icon_square") || box_icon.find(".icon_i > span").hasClass("icon_circle")) {
                box_icon.find(".box_text").css({ "padding-right": parseFloat(icon_size) + 25 + "px" });
            } else if (box_icon.find(".icon_i span[class^='icons']").length == 1) {
                box_icon.find(".box_text").css({ "padding-right": 41 + "px" });
            } else {
                box_icon.find(".box_text").css({ "padding-right": parseFloat(icon_size / 2) + 15 + "px" });
            }

            box_icon.find(".icon_i > span").addClass("f_right");
        } else if (icon_align == "center") {
            box_icon.find(".icon_i").addClass("t_center");
        }
    });

    $(".box_icon").each(function () {
        var this_icon = $(this);
        var span_bg = this_icon.find(".icon_i > span").attr("span_bg");
        if (span_bg != undefined) {
            this_icon.find(".icon_i > span").css({ "background-color": span_bg });
        } else {
            var span_bg = this_icon.find(".box_text h3 > span").attr("span_bg");
            this_icon.find(".box_text h3 > span").css({ "background-color": span_bg });
        }
        var i_color = this_icon.find(".icon_i > span i").attr("i_color");
        if (i_color != undefined) {
            this_icon.find(".icon_i > span i").css({ "color": i_color });
        }
        var border_radius = this_icon.find(".icon_i > span").attr("border_radius");
        if (border_radius != undefined) {
            this_icon.find(".icon_i > span").css({ "-moz-border-radius": border_radius + "px", "-webkit-border-radius": border_radius + "px", "border-radius": border_radius + "px" });
        }

        var border_color = this_icon.find(".icon_i > span").attr("border_color");
        if (border_color != undefined) {
            this_icon.find(".icon_i > span").css({ "border-color": border_color });
            this_icon.find(".box_text h3 > span").css({ "border-color": border_color });
        } else {
            var border_color = this_icon.find(".box_text h3 > span").attr("border_color");
            this_icon.find(".box_text h3 > span").css({ "border-color": border_color });
        }
        var border_width = this_icon.find(".icon_i > span").attr("border_width");
        if (border_width != undefined) {
            this_icon.find(".icon_i > span").css({ "border-width": border_width + "px", "border-style": "solid" });
        } else {
            var border_width = this_icon.find(".box_text h3 > span").attr("border_width");
            this_icon.find(".box_text h3 > span").css({ "border-width": border_width + "px", "border-style": "solid" });
        }

        this_icon.hover(function () {
            var span_hover = this_icon.find(".icon_i > span").attr("span_hover");
            if (span_hover != undefined) {
                this_icon.find(".icon_i > span").css({ "background-color": span_hover });
            } else {
                var span_hover = this_icon.find(".box_text h3 > span").attr("span_hover");
                this_icon.find(".box_text h3 > span").css({ "background-color": span_hover });
            }
            var border_hover = this_icon.find(".icon_i > span").attr("border_hover");
            if (border_hover != undefined) {
                this_icon.find(".icon_i > span").css({ "border-color": border_hover });
            } else {
                var border_hover = this_icon.find(".box_text h3 > span").attr("border_hover");
                this_icon.find(".box_text h3 > span").css({ "border-color": border_hover });
            }
            var i_hover = this_icon.find(".icon_i > span i").attr("i_hover");
            if (i_hover != undefined) {
                this_icon.find(".icon_i > span i").css({ "color": i_hover });
            }

            if (this_icon.find(".button").length) {
                var button_background_hover = this_icon.find(".button").attr("button_background_hover");
                var button_color_hover = this_icon.find(".button").attr("button_color_hover");
                var button_border_hover = this_icon.find(".button").attr("button_border_hover");
                this_icon.find(".button").css({ "background-color": button_background_hover, "color": button_color_hover, "border-color": button_border_hover });
            }
        }, function () {
            if (i_color != undefined) {
                this_icon.find(".icon_i > span i").css({ "color": i_color });
            }
            var span_bg = this_icon.find(".icon_i > span").attr("span_bg");
            if (span_bg != undefined) {
                this_icon.find(".icon_i > span").css({ "background-color": span_bg });
            } else {
                var span_bg = this_icon.find(".box_text h3 > span").attr("span_bg");
                this_icon.find(".box_text h3 > span").css({ "background-color": span_bg });
            }
            var border_color = this_icon.find(".icon_i > span").attr("border_color");
            if (border_color != undefined) {
                this_icon.find(".icon_i > span").css({ "border-color": border_color });
            } else {
                var border_color = this_icon.find(".box_text h3 > span").attr("border_color");
                this_icon.find(".box_text h3 > span").css({ "border-color": border_color });
            }
            if (this_icon.find(".button").length) {
                var button_background = this_icon.find(".button").attr("button_background");
                var button_color = this_icon.find(".button").attr("button_color");
                var button_border = this_icon.find(".button").attr("button_border");
                this_icon.find(".button").css({ "background-color": button_background, "color": button_color, "border-color": button_border });
            }
        });
    });

    /* Icons */

    $(".icon_i").each(function () {
        var this_icon = $(this);
        if (!this_icon.parent().hasClass("box_icon") && !this_icon.parent().parent().hasClass("box_icon") && !this_icon.parent().parent().parent().hasClass("box_icon")) {
            var span_bg = this_icon.find("> span").attr("span_bg");
            var icon_align = this_icon.find("> span").attr("icon_align");
            var icon_size = this_icon.find("> span").attr("icon_size");
            var border_color = this_icon.find("> span").attr("border_color");
            var border_width = this_icon.find("> span").attr("border_width");
            var border_radius = this_icon.find("> span").attr("border_radius");
            var span_hover = this_icon.find("> span").attr("span_hover");
            var border_hover = this_icon.find("> span").attr("border_hover");
            var i_color = this_icon.find("> span i").attr("i_color");
            var i_hover = this_icon.find("> span i").attr("i_hover");

            if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                this_icon.find("> span").css({ "height": icon_size + "px", "width": icon_size + "px", "font-size": icon_size / 2 + "px", "line-height": icon_size + "px" });
                this_icon.find("> span > span").css({ "margin": 0, "text-align": "center" });
            } else {
                this_icon.find("> span i").css({ "font-size": icon_size / 2 + "px" });
            }

            if (icon_align == "left") {
                this_icon.addClass("f_left");
            } else if (icon_align == "right") {
                this_icon.addClass("f_right");
            } else if (icon_align == "center") {
                this_icon.addClass("t_center");
                this_icon.css("margin-bottom", "15px");
            }

            if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                this_icon.find("> span").css({ "background-color": span_bg, "border-color": border_color, "border-width": border_width + "px", "border-style": "solid", "-moz-border-radius": border_radius + "px", "-webkit-border-radius": border_radius + "px", "border-radius": border_radius + "px" });
            }
            this_icon.find("> span i").css({ "color": i_color });

            this_icon.hover(function () {
                if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                    this_icon.find("> span").css({ "background-color": span_hover, "border-color": border_hover });
                }
                this_icon.find("> span i").css({ "color": i_hover });
            }, function () {
                if (this_icon.find("> span").hasClass("icon_soft_r") || this_icon.find("> span").hasClass("icon_square") || this_icon.find("> span").hasClass("icon_circle")) {
                    this_icon.find("> span").css({ "background-color": span_bg, "border-color": border_color });
                }
                this_icon.find("> span i").css({ "color": i_color });
            });
        }
    });

    /* Section */

    $(".section-warp").each(function () {
        var section = $(this);
        var section_background_color = section.attr("section_background_color");
        var section_background = section.attr("section_background");
        var section_background_size = section.attr("section_background_size");
        var section_color = section.attr("section_color");
        var section_color_a = section.attr("section_color_a");
        var section_padding_top = section.attr("section_padding_top");
        var section_padding_bottom = section.attr("section_padding_bottom");
        var section_margin_top = section.attr("section_margin_top");
        var section_margin_bottom = section.attr("section_margin_bottom");
        var section_border_top = section.attr("section_border_top");
        var section_border_bottom = section.attr("section_border_bottom");

        if (section_background != "" && section_background != undefined) {
            section.css({ "background-image": "url(" + section_background + ")" });
        }

        section.css({ "background-size": section_background_size, "background-color": section_background_color, "color": section_color, "padding-top": section_padding_top + "px", "padding-bottom": section_padding_bottom + "px", "margin-top": section_margin_top + "px", "margin-bottom": section_margin_bottom + "px" });
        section.find("h1").css({ "color": section_color });
        section.find("h2").css({ "color": section_color });
        section.find("h3").css({ "color": section_color });
        section.find("h4").css({ "color": section_color });
        section.find("h5").css({ "color": section_color });
        section.find("h6").css({ "color": section_color });
        section.find("p").css({ "color": section_color });
        section.find("a").not(".button").css({ "color": section_color_a });
        if (section_border_top != "") {
            section.css({ "border-top": "1px solid " + section_border_top });
        }
        if (section_border_bottom != "") {
            section.css({ "border-bottom": "1px solid " + section_border_bottom });
        }
    });

    /* Accordion & Toggle */

    $(".accordion").each(function () {
        if ($(this).hasClass("toggle-accordion")) {
            $(this).find(".accordion-toggle-open").addClass("active");
            $(this).find(".accordion-toggle-open").next(".accordion-inner").show();
        } else {
            var what_active = $(this).attr("what-active");
            if (what_active != undefined) {
                $(this).find(".accordion-inner:nth-child(" + what_active * 2 + ")").show();
                $(this).find(".accordion-inner:nth-child(" + what_active * 2 + ")").prev().addClass("active");
            }
        }
    });

    $(".accordion .accordion-title").each(function () {
        //i_color
        var i_color = $(this).parent().attr("i_color");
        $(this).parent().find(".accordion-title i").css({ "color": i_color });
        //i_click
        var i_click = $(this).parent().attr("i_click");
        $(this).parent().find(".accordion-title.active i").css({ "color": i_click });

        $(this).click(function () {
            if ($(this).parent().hasClass("toggle-accordion")) {
                $(this).parent().find("li:first .accordion-title").addClass("active");
                $(this).toggleClass("active");
                $(this).next(".accordion-inner").slideToggle();
            } else {
                if ($(this).next().is(":hidden")) {
                    $(this).parent().find(".accordion-title").removeClass("active").next().slideUp(200);
                    $(this).toggleClass("active").next().slideDown(200);
                }
            }
            if ($(this).parent().hasClass("acc-style-4")) {
                $(this).parent().find(".accordion-title.active").next().css({ "border-bottom": "1px solid #DEDEDE" });
            }
            //i_color
            $(this).parent().find(".accordion-title i").css({ "color": i_color });
            //i_click
            $(this).parent().find(".accordion-title.active i").css({ "color": i_click });
            return false;
        });
    });

    /* Tabs */

    $("ul.tabs").tabs(".tab-inner-warp", { effect: "slide", fadeInSpeed: 100 });

    $("ul.tabs li").each(function () {
        //i_color
        var i_color = $(this).parent().parent().attr("i_color");
        $(this).find("a i").css({ "color": i_color });
        //i_click
        var i_click = $(this).parent().parent().attr("i_click");
        $(this).find("a.current i").css({ "color": i_click });

        $(this).find("a").hover(function () {
            $(this).find("i").css({ "color": i_click });
        }, function () {
            if ($(this).hasClass("current")) {
                $(this).find("i").css({ "color": i_click });
            } else {
                $(this).find("i").css({ "color": i_color });
            }
        });

        $(this).click(function () {
            //i_color
            var i_color = $(this).parent().parent().attr("i_color");
            $(this).parent().find("a i").css({ "color": i_color });
            //i_click
            var i_click = $(this).parent().parent().attr("i_click");
            $(this).find("a.current i").css({ "color": i_click });
            return false;
        });

        var tab_width = $(this).parent().parent().attr("tab_width");
        if ($(this).parent().parent().hasClass("tabs-vertical")) {
            $(this).parent().css({ "width": tab_width + "px" });
            $(this).parent().parent().find("div.tab-inner-warp").css({ "margin-left": tab_width + "px" });
        }
    });

    /* Button */

    $(".button").each(function () {
        var button = $(this);
        var button_background = button.attr("button_background");
        var button_background_hover = button.attr("button_background_hover");
        var button_color = button.attr("button_color");
        var button_color_hover = button.attr("button_color_hover");
        var button_border = button.attr("button_border");
        var button_border_hover = button.attr("button_border_hover");
        var button_border_width = button.attr("button_border_width");
        var button_border_radius = button.attr("button_border_radius");

        button.css({ "background-color": button_background, "color": button_color, "border": button_border_width + "px solid " + button_border, "-moz-border-radius": button_border_radius + "px", "-webkit-border-radius": button_border_radius + "px", "border-radius": button_border_radius + "px" });

        button.hover(function () {
            button.css({ "background-color": button_background_hover, "color": button_color_hover, "border-color": button_border_hover });
        }, function () {
            button.css({ "background-color": button_background, "color": button_color, "border": button_border_width + "px solid " + button_border, "-moz-border-radius": button_border_radius + "px", "-webkit-border-radius": button_border_radius + "px", "border-radius": button_border_radius + "px" });
        });
    });

    /* Lists */

    $(".ul_list").each(function () {
        var ul_list = $(this);
        var list_background = ul_list.attr("list_background");
        var list_background_hover = ul_list.attr("list_background_hover");
        var list_color = ul_list.attr("list_color");
        var list_color_hover = ul_list.attr("list_color_hover");
        var list_border_radius = ul_list.attr("list_border_radius");

        if (ul_list.hasClass("ul_list_circle") || ul_list.hasClass("ul_list_square")) {
            ul_list.find("ul li i").css({ "background-color": list_background, "-moz-border-radius": list_border_radius + "px", "-webkit-border-radius": list_border_radius + "px", "border-radius": list_border_radius + "px" });
            ul_list.find("ul li").hover(function () {
                $(this).find("i").css({ "background-color": list_background_hover });
            }, function () {
                $(this).find("i").css({ "background-color": list_background });
            });
        }
        ul_list.find("ul li i").css({ "color": list_color });

        ul_list.find("ul li").hover(function () {
            $(this).find("i").css({ "color": list_color_hover });
        }, function () {
            $(this).find("i").css({ "color": list_color });
        });
        ul_list.find("i").each(function () {
            var ul_l = $(this);
            var l_background = ul_l.attr("l_background");
            var l_background_hover = ul_l.attr("l_background_hover");
            var l_color = ul_l.attr("l_color");
            var l_color_hover = ul_l.attr("l_color_hover");
            var l_border_radius = ul_l.attr("l_border_radius");

            if (ul_l.hasClass("ul_l_circle") || ul_l.hasClass("ul_l_square")) {
                ul_l.css({ "background-color": l_background, "-moz-border-radius": l_border_radius + "px", "-webkit-border-radius": l_border_radius + "px", "border-radius": l_border_radius + "px" });
                ul_l.parent().hover(function () {
                    ul_l.css({ "background-color": l_background_hover });
                }, function () {
                    ul_l.css({ "background-color": l_background });
                });
            }

            ul_l.css({ "color": l_color });

            ul_l.parent().hover(function () {
                ul_l.css({ "color": l_color_hover });
            }, function () {
                ul_l.css({ "color": l_color });
            });
        });
    });

    /* Quote */

    $("blockquote").each(function () {
        var blockquote = $(this);
        var blockquote_background = blockquote.attr("blockquote_background");
        var blockquote_color = blockquote.attr("blockquote_color");
        var blockquote_border = blockquote.attr("blockquote_border");

        blockquote.css({ "background-color": blockquote_background, "color": blockquote_color, "border-color": blockquote_border });
    });

    /* Dropcap */

    $(".dropcap").each(function () {
        var dropcap = $(this);
        var dropcap_background = dropcap.attr("dropcap_background");
        var dropcap_color = dropcap.attr("dropcap_color");
        var dropcap_border_radius = dropcap.attr("dropcap_border_radius");

        if (dropcap_border_radius != "" && dropcap_border_radius != undefined) {
            dropcap.css({ "-moz-border-radius": dropcap_border_radius + "px", "-webkit-border-radius": dropcap_border_radius + "px", "border-radius": dropcap_border_radius + "px" });
        }
        dropcap.css({ "background-color": dropcap_background, "color": dropcap_color });
    });

    /* Divider */

    $(".divider").each(function () {
        var divider = $(this);
        var divider_color = divider.attr("divider_color");

        divider.css({ "border-bottom-color": divider_color });
    });

    /* Progress Bar */

    if ($(".progressbar-percent").length) {
        $(".progressbar-percent").each(function () {
            var $this = $(this);
            var percent = $this.attr("attr-percent");
            $this.bind("inview", function (event, isInView, visiblePartX, visiblePartY) {
                if (isInView) {
                    $this.animate({ "width": percent + "%" }, percent * 20);
                }
            });
        });
    }

    /* Testimonial */

    $(".testimonial-warp").each(function () {
        var testimonial = $(this);
        var testimonial_background = testimonial.attr("testimonial_background");
        var testimonial_color = testimonial.attr("testimonial_color");
        var testimonial_border = testimonial.attr("testimonial_border");
        var border_radius = testimonial.attr("border_radius");
        var client_color = testimonial.attr("client_color");
        var jop_color = testimonial.attr("jop_color");

        testimonial.find(".testimonial").css({ "background-color": testimonial_background, "color": testimonial_color, "border-color": testimonial_border, "-moz-border-radius": border_radius + "px", "-webkit-border-radius": border_radius + "px", "border-radius": border_radius + "px" });
        testimonial.find(".testimonial a").css({ "color": testimonial_color });
        testimonial.find(".testimonial-f-arrow").css({ "border-top-color": testimonial_border });
        testimonial.find(".testimonial-l-arrow").css({ "border-top-color": testimonial_background });

        testimonial.find(".testimonial-client > span").css({ "color": client_color });
        testimonial.find(".testimonial-client > span > span").css({ "color": jop_color });
    });

    /* Callout */

    $(".callout_warp").each(function () {
        var callout_warp = $(this);
        if (callout_warp.find(".button_right").length == 1) {
            callout_warp.find(".callout_inner").css("margin-right", parseFloat(callout_warp.find(".button_right").outerWidth()) + 25);
            var button_css_top = (((parseFloat(callout_warp.innerHeight())) / 2)) - parseFloat(callout_warp.find(".button_right").innerHeight()) / 2;
            callout_warp.find(".button_right").css("top", button_css_top);
        }
    });

    /* Flex slider */

    if ($(".blog_silder").length && $()) {
        var flex_slider = $(".blog_silder");
        flex_slider.flexslider({
            animation: "fade",//fade - slide
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 3000,
            animationSpeed: 800,
            pauseOnHover: true,
            pauseOnAction: true,
            controlNav: false,
            directionNav: true,
        });
    }
    if ($(".flex-slider").length && $()) {
        var flex_slider = $(".flex-slider");
        flex_slider.flexslider({
            animation: "fade",//fade - slide
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 3000,
            animationSpeed: 800,
            pauseOnHover: true,
            pauseOnAction: true,
            controlNav: true,
            directionNav: true,
        });
    }

    /* Tipsy */

    $(".tooltip-n").tipsy({ fade: true, gravity: "s" });
    $(".tooltip-s").tipsy({ fade: true, gravity: "n" });
    $(".tooltip-nw").tipsy({ fade: true, gravity: "nw" });
    $(".tooltip-ne").tipsy({ fade: true, gravity: "ne" });
    $(".tooltip-w").tipsy({ fade: true, gravity: "w" });
    $(".tooltip-e").tipsy({ fade: true, gravity: "e" });
    $(".tooltip-sw").tipsy({ fade: true, gravity: "sw" });
    $(".tooltip-se").tipsy({ fade: true, gravity: "se" });

    /* Ask Question */

    $(".publish-question").click(function () {
        var question_title = $("#question_title").val();
        $.post("ask_question.html", question_title, function () {
            window.location.href = "ask_question.html?question_title=" + question_title;
            $("#question-title").val(question_title);
        })
        return false;
    });

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    $("#question-title").val(getParameterByName("question_title"));

    $('#question_tags').tag();

    var question_poll = $("#question_poll:checked").length;
    if (question_poll == 1) {
        $(".poll_options").slideDown(500);
    } else {
        $(".poll_options").slideUp(500);
    }

    $("#question_poll").click(function () {
        var question_poll_c = $("#question_poll:checked").length;
        if (question_poll_c == 1) {
            $(".poll_options").slideDown(500);
        } else {
            $(".poll_options").slideUp(500);
        }
    });

    if ($("#question_poll_item").length) {
        $("#question_poll_item").sortable({ placeholder: "ui-state-highlight" });
    }

    $("#add_poll").click(function () {
        $('#question_poll_item').append('<li id="poll_li_' + nextli + '"><div class="poll-li"><p><input id="ask[' + nextli + '][title]" class="ask" name="ask[' + nextli + '][title]" value="" type="text"></p><input id="ask[' + nextli + '][value]" name="ask[' + nextli + '][value]" value="" type="hidden"><input id="ask[' + nextli + '][id]" name="ask[' + nextli + '][id]" value="' + nextli + '" type="hidden"><div class="del-poll-li"><i class="icon-remove"></i></div><div class="move-poll-li"><i class="icon-fullscreen"></i></div></div></li>');
        $('#poll_li_' + nextli).hide().fadeIn();
        nextli++;
        $(".del-poll-li").click(function () {
            $(this).parent().parent().addClass('removered').fadeOut(function () {
                $(this).remove();
            });
        });
        return false;
    });

    /* single question */

    $(".share-inside").click(function () {
        if ($(".share-inside-warp").hasClass("share-inside-show")) {
            $(".share-inside-warp").slideUp("500");
            $(".share-inside-warp").removeClass("share-inside-show");
        } else {
            $(".share-inside-warp").slideDown("500");
            $(".share-inside-warp").addClass("share-inside-show");
        }
    });

    /* single question poll */

    $(".poll_1").slideUp("300");

    $(".poll_results").click(function () {
        $(".poll_1").slideDown("500");
        $(".poll_2").slideUp("500");
        return false;
    });

    $(".poll_polls").click(function () {
        $(".poll_2").slideDown("500");
        $(".poll_1").slideUp("500");
        return false;
    });

    /* Login panel */

    $("#login-panel").click(function () {
        if ($(this).hasClass("header-top-active")) {
            $(".login-panel").slideUp(500);
            $(this).removeClass("header-top-active");
            $(this).find("i").addClass("icon-user");
            $(this).find("i").removeClass("icon-remove");
        } else {
            $(".login-panel").slideDown(500);
            $(this).addClass("header-top-active");
            $(this).find("i").removeClass("icon-user");
            $(this).find("i").addClass("icon-remove");
        }
        return false;
    });

    /* Signup */

    $(".signup,.login-links-r a").click(function () {
        $(".panel-pop").animate({ "top": "-100%" }, 10).hide();
        $("#signup").show().animate({ "top": "50%" }, 500);
        $("body").prepend("<div class='wrap-pop'></div>");
        wrap_pop();
        return false;
    });

    /* Lost password */

    $(".login-password a").click(function () {
        $(".panel-pop").animate({ "top": "-100%" }, 10).hide();
        $("#lost-password").show().animate({ "top": "50%" }, 500);
        $("body").prepend("<div class='wrap-pop'></div>");
        wrap_pop();
        return false;
    });

    /* Panel pop */

    $(".panel-pop").each(function () {
        var panel_pop = $(this);
        var panel_height = panel_pop.height();
        panel_pop.css("margin-top", "-" + panel_height / 2 + "px");
    });

    $(".panel-pop h2 i").click(function () {
        $(this).parent().parent().animate({ "top": "-100%" }, 500);
        $(".wrap-pop").remove();
    });

    function wrap_pop() {
        $(".wrap-pop").click(function () {
            $(".panel-pop").animate({ "top": "-100%" }, 500).hide(function () {
                $(this).animate({ "top": "-100%" }, 500);
            });
            $(this).remove();
        });
    }

    /* Contact us */

    $(".form-js").submit(function () {
        var thisform = $(this);
        $('.required-error', thisform).remove();
        var name = $("#name").val();
        var mail = $("#mail").val();
        var url = $("#url").val();
        var message = $("#message").val();
        var data = { 'name': name, 'mail': mail, 'url': url, 'message': message };
        if (name == "") {
            $("#name").after('<span class="form-description required-error">Please fill the required field.</span>');
        } else {
            $("#name").parent().find('.required-error').remove();
        }
        if (mail == "") {
            $("#mail").after('<span class="form-description required-error">Please fill the required field.</span>');
        } else {
            $("#mail").parent().find('.required-error').remove();
        }
        if (message == "") {
            $("#message").after('<span class="form-description required-error">Please fill the required field.</span>');
        } else {
            $("#message").parent().find('.required-error').remove();
        }

        if (name != "" && mail != "" && message != "") {
            $.post("contact_us.php", data, function (result) {
                if (result == "done") {
                    thisform.prepend("<div class='alert-message success'><i class='icon-ok'></i><p><span>Thank you " + name + "!</span><br> We'll be in touch real soon .</p></div>");
                    $("#name").val("");
                    $("#mail").val("");
                    $("#url").val("");
                    $("#message").val("");
                }
            });
        }
        return false;
    });

    /* Widget Menu jQuery */

    $(".widget_menu.widget_menu_jquery").each(function () {
        var widget_menu_jquery = $(this);
        var sidebar_w = widget_menu_$.parent().width();
        widget_menu_$.css({ "width": sidebar_w });
    });

    $(window).bind("resize", function () {
        if ($(this).width() > 800) {
            $(".widget_menu.widget_menu_jquery").each(function () {
                var widget_menu_jquery = $(this);
                var sidebar_w = widget_menu_$.parent().width();
                widget_menu_$.css({ "width": sidebar_w });
            });
        }
    });

    $(".widget_menu_jquery").onePageNav({
        currentClass: "current_page_item",
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: parseFloat($("#header").innerHeight()) + 60
    });

    /* Lightbox */

    var lightboxArgs = {
        animation_speed: "fast",
        overlay_gallery: true,
        autoplay_slideshow: false,
        slideshow: 5000, // light_rounded / dark_rounded / light_square / dark_square / facebook
        theme: "pp_default",
        opacity: 0.8,
        show_title: false,
        social_tools: "",
        deeplinking: false,
        allow_resize: true, // Resize the photos bigger than viewport. true/false
        counter_separator_label: "/", // The separator for the gallery counter 1 "of" 2
        default_width: 940,
        default_height: 529
    };

    $("a[href$=jpg], a[href$=JPG], a[href$=jpeg], a[href$=JPEG], a[href$=png], a[href$=gif], a[href$=bmp]:has(img)").prettyPhoto(lightboxArgs);

    $("a[class^='prettyPhoto'], a[rel^='prettyPhoto']").prettyPhoto(lightboxArgs);

    /* Page load */

    $(window).load(function () {
        /* Loader */

        $(".loader").fadeOut(500);

        /* Login panel slideup */

        $(".login-panel").slideUp(500);

        /* Carousel */

        $(".carousel-all").each(function () {
            var $current = $(this);
            var $prev = $(this).find(".carousel-prev");
            var $next = $(this).find(".carousel-next");
            var $effect = $(this).attr("carousel_effect");
            var $auto = $(this).attr("carousel_auto");
            var $responsive = $(this).attr("carousel_responsive");
            var $max = $(this).attr("what_col");
            var $pagination = $(this).find(".carousel-pagination");

            if ($current.hasClass("testimonial-carousel")) {
                var $testimonial_width = $current.css("width");
                $current.find(".testimonial-warp").css("width", $testimonial_width)
            }

            if ($max == 1) {
                var $width = 940;
            }
            if ($max == 2) {
                var $width = 460;
            }
            if ($max == 3) {
                var $width = 300;
            }
            if ($max == 4) {
                var $width = 220;
            }
            if ($max == 5) {
                var $width = 220;
            }
            if ($max == 6) {
                var $width = 140;
            }

            $(this).find(".slides").carouFredSel({
                circular: false,
                prev: $prev,
                next: $next,
                infinite: true,
                auto: ($auto == "true" ? true : false),
                responsive: ($responsive == "true" ? true : false),
                swipe: { onTouch: true },
                pagination: $pagination,
                scroll: {
                    easing: "easeInOutCubic",
                    duration: 600,
                    fx: ($effect == "scroll" ? "scroll" : "") + ($effect == "cover-fade" ? "cover-fade" : "") + ($effect == "fade" ? "fade" : "") + ($effect == "directscroll" ? "directscroll" : "") + ($effect == "crossfade" ? "crossfade" : "") + ($effect == "cover" ? "cover" : "") + ($effect == "uncover" ? "uncover" : "") + ($effect == "uncover-fade" ? "uncover-fade" : "") + ($effect == "none" ? "none" : ""),
                },
                items: ($max == 6 ? 6 : "") + ($max == 5 ? 5 : "") + ($max == 4 ? 4 : "") + ($max == 3 ? 3 : "") + ($max == 2 ? 2 : "") + ($max == 1 ? 1 : ""),
            });
        });

        $(".bxslider").bxSlider({
            slideWidth: 200,
            minSlides: 4,
            maxSlides: 4,
            slideMargin: 30
        });
    });

    /* Widget Menu jQuery */

    $.fn.scrollBottom = function () {
        return $(document).height() - this.scrollTop() - this.height();
    };

    var $widget_menu = $(".widget_menu_jquery");
    var $window = $(window);
    //var top = $widget_menu.parent().position().top;

    var header = parseFloat($("#header-top").outerHeight() + $("#header").outerHeight() + $(".breadcrumbs").outerHeight() + 70);
    var footer = parseFloat($("#footer").outerHeight() + $("#footer-bottom").outerHeight() + 80);

    $window.bind("scroll resize", function () {
        var gap = $window.height() - $widget_menu.height() + 40;
        var visibleHead = header - $window.scrollTop();
        var visibleFoot = footer - $window.scrollBottom();
        var scrollTop = $window.scrollTop();

        if (scrollTop < header) {
            $widget_menu.css({
                top: visibleHead + "px",
                bottom: "auto"
            });
        } else if (visibleFoot > $window.height() - $widget_menu.height()) {
            $widget_menu.css({
                top: "auto",
                bottom: visibleFoot + "px"
            });
        } else {
            if ($("#wrap").hasClass("fixed-enabled")) {
                $widget_menu.css({
                    top: parseFloat($(".fixed-nav").outerHeight() + 40),
                    bottom: "auto"
                });
            } else {
                $widget_menu.css({
                    top: "40px",
                    bottom: "auto"
                });
            }
        }
    }).scroll();
});
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){function s(s){var e=!1;return t('[data-notify="container"]').each(function(i,n){var a=t(n),o=a.find('[data-notify="title"]').text().trim(),r=a.find('[data-notify="message"]').html().trim(),l=o===t("<div>"+s.settings.content.title+"</div>").html().trim(),d=r===t("<div>"+s.settings.content.message+"</div>").html().trim(),g=a.hasClass("alert-"+s.settings.type);return l&&d&&g&&(e=!0),!e}),e}function e(e,n,a){var o={content:{message:"object"==typeof n?n.message:n,title:n.title?n.title:"",icon:n.icon?n.icon:"",url:n.url?n.url:"#",target:n.target?n.target:"-"}};a=t.extend(!0,{},o,a),this.settings=t.extend(!0,{},i,a),this._defaults=i,"-"===this.settings.content.target&&(this.settings.content.target=this.settings.url_target),this.animations={start:"webkitAnimationStart oanimationstart MSAnimationStart animationstart",end:"webkitAnimationEnd oanimationend MSAnimationEnd animationend"},"number"==typeof this.settings.offset&&(this.settings.offset={x:this.settings.offset,y:this.settings.offset}),(this.settings.allow_duplicates||!this.settings.allow_duplicates&&!s(this))&&this.init()}var i={element:"body",position:null,type:"info",allow_dismiss:!0,allow_duplicates:!0,newest_on_top:!1,showProgressbar:!1,placement:{from:"top",align:"right"},offset:20,spacing:10,z_index:1031,delay:5e3,timer:1e3,url_target:"_blank",mouse_over:null,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},onShow:null,onShown:null,onClose:null,onClosed:null,icon_type:"class",template:'<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'};String.format=function(){for(var t=arguments[0],s=1;s<arguments.length;s++)t=t.replace(RegExp("\\{"+(s-1)+"\\}","gm"),arguments[s]);return t},t.extend(e.prototype,{init:function(){var t=this;this.buildNotify(),this.settings.content.icon&&this.setIcon(),"#"!=this.settings.content.url&&this.styleURL(),this.styleDismiss(),this.placement(),this.bind(),this.notify={$ele:this.$ele,update:function(s,e){var i={};"string"==typeof s?i[s]=e:i=s;for(var n in i)switch(n){case"type":this.$ele.removeClass("alert-"+t.settings.type),this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-"+t.settings.type),t.settings.type=i[n],this.$ele.addClass("alert-"+i[n]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-"+i[n]);break;case"icon":var a=this.$ele.find('[data-notify="icon"]');"class"===t.settings.icon_type.toLowerCase()?a.removeClass(t.settings.content.icon).addClass(i[n]):(a.is("img")||a.find("img"),a.attr("src",i[n]));break;case"progress":var o=t.settings.delay-t.settings.delay*(i[n]/100);this.$ele.data("notify-delay",o),this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",i[n]).css("width",i[n]+"%");break;case"url":this.$ele.find('[data-notify="url"]').attr("href",i[n]);break;case"target":this.$ele.find('[data-notify="url"]').attr("target",i[n]);break;default:this.$ele.find('[data-notify="'+n+'"]').html(i[n])}var r=this.$ele.outerHeight()+parseInt(t.settings.spacing)+parseInt(t.settings.offset.y);t.reposition(r)},close:function(){t.close()}}},buildNotify:function(){var s=this.settings.content;this.$ele=t(String.format(this.settings.template,this.settings.type,s.title,s.message,s.url,s.target)),this.$ele.attr("data-notify-position",this.settings.placement.from+"-"+this.settings.placement.align),this.settings.allow_dismiss||this.$ele.find('[data-notify="dismiss"]').css("display","none"),(this.settings.delay>0||this.settings.showProgressbar)&&this.settings.showProgressbar||this.$ele.find('[data-notify="progressbar"]').remove()},setIcon:function(){"class"===this.settings.icon_type.toLowerCase()?this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon):this.$ele.find('[data-notify="icon"]').is("img")?this.$ele.find('[data-notify="icon"]').attr("src",this.settings.content.icon):this.$ele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />')},styleDismiss:function(){this.$ele.find('[data-notify="dismiss"]').css({position:"absolute",right:"10px",top:"5px",zIndex:this.settings.z_index+2})},styleURL:function(){this.$ele.find('[data-notify="url"]').css({backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",height:"100%",left:0,position:"absolute",top:0,width:"100%",zIndex:this.settings.z_index+1})},placement:function(){var s=this,e=this.settings.offset.y,i={display:"inline-block",margin:"0px auto",position:this.settings.position?this.settings.position:"body"===this.settings.element?"fixed":"absolute",transition:"all .5s ease-in-out",zIndex:this.settings.z_index},n=!1,a=this.settings;switch(t('[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])').each(function(){e=Math.max(e,parseInt(t(this).css(a.placement.from))+parseInt(t(this).outerHeight())+parseInt(a.spacing))}),this.settings.newest_on_top===!0&&(e=this.settings.offset.y),i[this.settings.placement.from]=e+"px",this.settings.placement.align){case"left":case"right":i[this.settings.placement.align]=this.settings.offset.x+"px";break;case"center":i.left=0,i.right=0}this.$ele.css(i).addClass(this.settings.animate.enter),t.each(["webkit-","moz-","o-","ms-",""],function(t,e){s.$ele[0].style[e+"AnimationIterationCount"]=1}),t(this.settings.element).append(this.$ele),this.settings.newest_on_top===!0&&(e=parseInt(e)+parseInt(this.settings.spacing)+this.$ele.outerHeight(),this.reposition(e)),t.isFunction(s.settings.onShow)&&s.settings.onShow.call(this.$ele),this.$ele.one(this.animations.start,function(){n=!0}).one(this.animations.end,function(){t.isFunction(s.settings.onShown)&&s.settings.onShown.call(this)}),setTimeout(function(){n||t.isFunction(s.settings.onShown)&&s.settings.onShown.call(this)},600)},bind:function(){var s=this;if(this.$ele.find('[data-notify="dismiss"]').on("click",function(){s.close()}),this.$ele.mouseover(function(){t(this).data("data-hover","true")}).mouseout(function(){t(this).data("data-hover","false")}),this.$ele.data("data-hover","false"),this.settings.delay>0){s.$ele.data("notify-delay",s.settings.delay);var e=setInterval(function(){var t=parseInt(s.$ele.data("notify-delay"))-s.settings.timer;if("false"===s.$ele.data("data-hover")&&"pause"===s.settings.mouse_over||"pause"!=s.settings.mouse_over){var i=(s.settings.delay-t)/s.settings.delay*100;s.$ele.data("notify-delay",t),s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",i).css("width",i+"%")}t>-s.settings.timer||(clearInterval(e),s.close())},s.settings.timer)}},close:function(){var s=this,e=parseInt(this.$ele.css(this.settings.placement.from)),i=!1;this.$ele.data("closing","true").addClass(this.settings.animate.exit),s.reposition(e),t.isFunction(s.settings.onClose)&&s.settings.onClose.call(this.$ele),this.$ele.one(this.animations.start,function(){i=!0}).one(this.animations.end,function(){t(this).remove(),t.isFunction(s.settings.onClosed)&&s.settings.onClosed.call(this)}),setTimeout(function(){i||(s.$ele.remove(),s.settings.onClosed&&s.settings.onClosed(s.$ele))},600)},reposition:function(s){var e=this,i='[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])',n=this.$ele.nextAll(i);this.settings.newest_on_top===!0&&(n=this.$ele.prevAll(i)),n.each(function(){t(this).css(e.settings.placement.from,s),s=parseInt(s)+parseInt(e.settings.spacing)+t(this).outerHeight()})}}),t.notify=function(t,s){var i=new e(this,t,s);return i.notify},t.notifyDefaults=function(s){return i=t.extend(!0,{},i,s)},t.notifyClose=function(s){void 0===s||"all"===s?t("[data-notify]").find('[data-notify="dismiss"]').trigger("click"):t('[data-notify-position="'+s+'"]').find('[data-notify="dismiss"]').trigger("click")}});