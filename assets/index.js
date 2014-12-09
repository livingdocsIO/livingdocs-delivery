(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $,Nunjucks,controllers,nunjucks,page;$=require("browserify-zepto"),page=require("../components/page.js/index"),Nunjucks=require("../components/nunjucks/browser/nunjucks-slim.min.js"),nunjucks=new Nunjucks.Environment(new Nunjucks.WebLoader("/views",!0)),controllers=require("../shared/controllers.coffee"),page.Context.prototype.render=function(e,n){return nunjucks.render(e,n,function(e,n){return e?alert("Failed to render the view"):$("body>.content").html(n)})},$(document).ready(function(){return page("/",controllers.articles),page("/articles",controllers.articles),page("/articles/:slug",controllers.article),page(),$(document).on("click","a[internal]",function(e){return e.preventDefault(),page($(this).attr("href"))})});
},{"../components/nunjucks/browser/nunjucks-slim.min.js":2,"../components/page.js/index":3,"../shared/controllers.coffee":6,"browserify-zepto":4}],2:[function(require,module,exports){
!function(){var t={};!function(){function e(t,n,r){var i=function(){};i.prototype=t.prototype;var o=new i,s=/xyz/.test(function(){})?/\bparent\b/:/.*/;r=r||{};for(var a in r){var u=r[a],c=o[a];o[a]="function"==typeof c&&"function"==typeof u&&s.test(u)?function(t,e){return function(){var n=this.parent;this.parent=e;var r=t.apply(this,arguments);return this.parent=n,r}}(u,c):u}o.typename=n;var l=function(){o.init&&o.init.apply(this,arguments)};return l.prototype=o,l.prototype.constructor=l,l.extend=function(t,n){return"object"==typeof t&&(n=t,t="anonymous"),e(l,t,n)},l}t.object=e(Object,"Object",{})}(),function(){var e=Array.prototype,n=Object.prototype,r={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},i=/[&"'<>]/g,o=function(t){return r[t]},s=t.lib={};s.withPrettyErrors=function(t,e,n){try{return n()}catch(r){if(r.Update||(r=new s.TemplateError(r)),r.Update(t),!e){var i=r;r=new Error(i.message),r.name=i.name}throw r}},s.TemplateError=function(t,e,n){var r=this;return t instanceof Error?(r=t,t=t.name+": "+t.message):Error.captureStackTrace&&Error.captureStackTrace(r),r.name="Template render error",r.message=t,r.lineno=e,r.colno=n,r.firstUpdate=!0,r.Update=function(t){var e="("+(t||"unknown path")+")";return this.firstUpdate&&(this.lineno&&this.colno?e+=" [Line "+this.lineno+", Column "+this.colno+"]":this.lineno&&(e+=" [Line "+this.lineno+"]")),e+="\n ",this.firstUpdate&&(e+=" "),this.message=e+(this.message||""),this.firstUpdate=!1,this},r},s.TemplateError.prototype=Error.prototype,s.escape=function(t){return t.replace(i,o)},s.isFunction=function(t){return"[object Function]"==n.toString.call(t)},s.isArray=Array.isArray||function(t){return"[object Array]"==n.toString.call(t)},s.isString=function(t){return"[object String]"==n.toString.call(t)},s.isObject=function(t){return"[object Object]"==n.toString.call(t)},s.groupBy=function(t,e){for(var n={},r=s.isFunction(e)?e:function(t){return t[e]},i=0;i<t.length;i++){var o=t[i],a=r(o,i);(n[a]||(n[a]=[])).push(o)}return n},s.toArray=function(t){return Array.prototype.slice.call(t)},s.without=function(t){var e=[];if(!t)return e;for(var n=-1,r=t.length,i=s.toArray(arguments).slice(1);++n<r;)-1===i.indexOf(t[n])&&e.push(t[n]);return e},s.extend=function(t,e){for(var n in e)t[n]=e[n];return t},s.repeat=function(t,e){for(var n="",r=0;e>r;r++)n+=t;return n},s.each=function(t,n,r){if(null!=t)if(e.each&&t.each==e.each)t.forEach(n,r);else if(t.length===+t.length)for(var i=0,o=t.length;o>i;i++)n.call(r,t[i],i,t)},s.map=function(t,n){var r=[];if(null==t)return r;if(e.map&&t.map===e.map)return t.map(n);for(var i=0;i<t.length;i++)r[r.length]=n(t[i],i);return t.length===+t.length&&(r.length=t.length),r},s.asyncIter=function(t,e,n){function r(){i++,i<t.length?e(t[i],i,r,n):n()}var i=-1;r()},s.asyncFor=function(t,e,n){function r(){a++;var s=i[a];o>a?e(s,t[s],a,o,r):n()}var i=s.keys(t),o=i.length,a=-1;r()},Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){if(null==t)throw new TypeError;var n=Object(t),r=n.length>>>0;if(0===r)return-1;var i=0;if(arguments.length>2&&(i=Number(arguments[2]),i!=i?i=0:0!=i&&1/0!=i&&i!=-1/0&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=r)return-1;for(var o=i>=0?i:Math.max(r-Math.abs(i),0);r>o;o++)if(o in n&&n[o]===e)return o;return-1}),Array.prototype.map||(Array.prototype.map=function(){throw new Error("map is unimplemented for this js engine")}),s.keys=function(t){if(Object.prototype.keys)return t.keys();var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}}(),function(){function e(t,e,n){return function(){var o,s=i(arguments),a=r(arguments);if(s>t.length){o=Array.prototype.slice.call(arguments,0,t.length);for(var u=Array.prototype.slice.call(arguments,o.length,s),c=0;c<u.length;c++)c<e.length&&(a[e[c]]=u[c]);o.push(a)}else if(s<t.length){o=Array.prototype.slice.call(arguments,0,s);for(var c=s;c<t.length;c++){var l=t[c];o.push(a[l]),delete a[l]}o.push(a)}else o=arguments;return n.apply(this,o)}}function n(t){return t.__keywords=!0,t}function r(t){var e=t.length;if(e){var n=t[e-1];if(n&&n.hasOwnProperty("__keywords"))return n}return{}}function i(t){var e=t.length;if(0===e)return 0;var n=t[e-1];return n&&n.hasOwnProperty("__keywords")?e-1:e}function o(t){return"string"!=typeof t?t:void(this.val=t)}function s(t,e){return t instanceof o?new o(e):e.toString()}function a(t){var e=typeof t;return"string"===e?new o(t):"function"!==e?t:function(){var e=t.apply(this,arguments);return"string"==typeof e?new o(e):e}}function u(t,e){return t=void 0!==t&&null!==t?t:"",e&&"string"==typeof t&&(t=d.escape(t)),t}function c(t,e){return t=t||{},"function"==typeof t[e]?function(){return t[e].apply(t,arguments)}:t[e]}function l(t,e,n){if(!t)throw new Error("Unable to call `"+e+"`, which is undefined or falsey");if("function"!=typeof t)throw new Error("Unable to call `"+e+"`, which is not a function");return t.apply(this,n)}function f(t,e,n){var r=e.lookup(n);return void 0!==r&&null!==r?r:t.lookup(n)}function h(t,e,n){return t.lineno?t:new d.TemplateError(t,e,n)}function p(t,e,n,r){if(d.isArray(t)){var i=t.length;d.asyncIter(t,function(t,r,o){switch(e){case 1:n(t,r,i,o);break;case 2:n(t[0],t[1],r,i,o);break;case 3:n(t[0],t[1],t[2],r,i,o);break;default:t.push(r,o),n.apply(this,t)}},r)}else d.asyncFor(t,function(t,e,r,i,o){n(t,e,r,i,o)},r)}function v(t,e,n,r){function i(t,e){a++,s[t]=e,a==o&&r(null,s.join(""))}var o,s,a=0;if(d.isArray(t))if(o=t.length,s=new Array(o),0==o)r(null,"");else for(var u=0;u<t.length;u++){var c=t[u];switch(e){case 1:n(c,u,o,i);break;case 2:n(c[0],c[1],u,o,i);break;case 3:n(c[0],c[1],c[2],u,o,i);break;default:c.push(u,i),n.apply(this,c)}}else{var l=d.keys(t);if(o=l.length,s=new Array(o),0==o)r(null,"");else for(var u=0;u<l.length;u++){var f=l[u];n(f,t[f],u,o,i)}}}var d=t.lib,g=t.object,y=g.extend({init:function(t){this.variables={},this.parent=t},set:function(t,e,n){var r=t.split("."),i=this.variables,o=this;if(n){if(o=this.resolve(r[0]))return void o.set(t,e);o=this}for(var s=0;s<r.length-1;s++){var a=r[s];i[a]||(i[a]={}),i=i[a]}i[r[r.length-1]]=e},get:function(t){var e=this.variables[t];return void 0!==e&&null!==e?e:null},lookup:function(t){var e=this.parent,n=this.variables[t];return void 0!==n&&null!==n?n:e&&e.lookup(t)},resolve:function(t){var e=this.parent,n=this.variables[t];return null!=n?this:e&&e.resolve(t)},push:function(){return new y(this)},pop:function(){return this.parent}});o.prototype=Object.create(String.prototype),o.prototype.valueOf=function(){return this.val},o.prototype.toString=function(){return this.val},t.runtime={Frame:y,makeMacro:e,makeKeywordArgs:n,numArgs:i,suppressValue:u,memberLookup:c,contextOrFrameLookup:f,callWrap:l,handleError:h,isArray:d.isArray,keys:d.keys,SafeString:o,copySafeness:s,markSafe:a,asyncEach:p,asyncAll:v}}(),function(){var e=t.object,n=t.lib,r=e.extend({on:function(t,e){this.listeners=this.listeners||{},this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(e)},emit:function(t){var e=Array.prototype.slice.call(arguments,1);this.listeners&&this.listeners[t]&&n.each(this.listeners[t],function(t){t.apply(null,e)})}});t.loader=r}(),function(){var e=t.loader,n=e.extend({init:function(t,e){this.precompiled=window.nunjucksPrecompiled||{},this.baseURL=t||"",this.neverUpdate=e},getSource:function(t){if(this.precompiled[t])return{src:{type:"code",obj:this.precompiled[t]},path:t};var e=this.fetch(this.baseURL+"/"+t);return e?{src:e,path:t,noCache:!this.neverUpdate}:null},fetch:function(t){var e,n,r=!0;return window.XMLHttpRequest?e=new XMLHttpRequest:window.ActiveXObject&&(e=new ActiveXObject("Microsoft.XMLHTTP")),e.onreadystatechange=function(){4!==e.readyState||0!==e.status&&200!==e.status||!r||(r=!1,n=e.responseText)},t+=(-1===t.indexOf("?")?"?":"&")+"s="+(new Date).getTime(),e.open("GET",t,!1),e.send(),n}});t["web-loaders"]={WebLoader:n}}(),function(){t.loaders="undefined"==typeof window||window!==this?t["node-loaders"]:t["web-loaders"]}(),function(){var e=t.lib,n=t.runtime,r={abs:function(t){return Math.abs(t)},batch:function(t,e,n){for(var r=[],i=[],o=0;o<t.length;o++)o%e===0&&i.length&&(r.push(i),i=[]),i.push(t[o]);if(i.length){if(n)for(var o=i.length;e>o;o++)i.push(n);r.push(i)}return r},capitalize:function(t){var e=t.toLowerCase();return n.copySafeness(t,e.charAt(0).toUpperCase()+e.slice(1))},center:function(t,r){if(r=r||80,t.length>=r)return t;var i=r-t.length,o=e.repeat(" ",i/2-i%2),s=e.repeat(" ",i/2);return n.copySafeness(t,o+t+s)},"default":function(t,e){return t?t:e},dictsort:function(t,n,r){if(!e.isObject(t))throw new e.TemplateError("dictsort filter: val must be an object");var i=[];for(var o in t)i.push([o,t[o]]);var s;if(void 0===r||"key"===r)s=0;else{if("value"!==r)throw new e.TemplateError("dictsort filter: You can only sort by either key or value");s=1}return i.sort(function(t,r){var i=t[s],o=r[s];return n||(e.isString(i)&&(i=i.toUpperCase()),e.isString(o)&&(o=o.toUpperCase())),i>o?1:i==o?0:-1}),i},escape:function(t){return"string"==typeof t||t instanceof n.SafeString?e.escape(t):t},safe:function(t){return n.markSafe(t)},first:function(t){return t[0]},groupby:function(t,n){return e.groupBy(t,n)},indent:function(t,r,i){r=r||4;for(var o="",s=t.split("\n"),a=e.repeat(" ",r),u=0;u<s.length;u++)o+=0!=u||i?a+s[u]+"\n":s[u]+"\n";return n.copySafeness(t,o)},join:function(t,n,r){return n=n||"",r&&(t=e.map(t,function(t){return t[r]})),t.join(n)},last:function(t){return t[t.length-1]},length:function(t){return void 0!==t?t.length:0},list:function(t){if(e.isString(t))return t.split("");if(e.isObject(t)){var n=[];if(Object.keys)n=Object.keys(t);else for(var r in t)n.push(r);return e.map(n,function(e){return{key:e,value:t[e]}})}throw new e.TemplateError("list filter: type not iterable")},lower:function(t){return t.toLowerCase()},random:function(t){return t[Math.floor(Math.random()*t.length)]},replace:function(t,e,r,i){var o=t,s=o,a=1;for(o=o.replace(e,r);s!=o&&!(a>=i);)s=o,o=o.replace(e,r),a++;return n.copySafeness(t,o)},reverse:function(t){var i;return i=e.isString(t)?r.list(t):e.map(t,function(t){return t}),i.reverse(),e.isString(t)?n.copySafeness(t,i.join("")):i},round:function(t,e,n){e=e||0;var r,i=Math.pow(10,e);return r="ceil"==n?Math.ceil:"floor"==n?Math.floor:Math.round,r(t*i)/i},slice:function(t,e,n){for(var r=Math.floor(t.length/e),i=t.length%e,o=0,s=[],a=0;e>a;a++){var u=o+a*r;i>a&&o++;var c=o+(a+1)*r,l=t.slice(u,c);n&&a>=i&&l.push(n),s.push(l)}return s},sort:function(t,n,r,i){return t=e.map(t,function(t){return t}),t.sort(function(t,o){var s,a;return i?(s=t[i],a=o[i]):(s=t,a=o),!r&&e.isString(s)&&e.isString(a)&&(s=s.toLowerCase(),a=a.toLowerCase()),a>s?n?1:-1:s>a?n?-1:1:0}),t},string:function(t){return n.copySafeness(t,t)},title:function(t){for(var e=t.split(" "),i=0;i<e.length;i++)e[i]=r.capitalize(e[i]);return n.copySafeness(t,e.join(" "))},trim:function(t){return n.copySafeness(t,t.replace(/^\s*|\s*$/g,""))},truncate:function(t,e,r,i){var o=t;if(e=e||255,t.length<=e)return t;if(r)t=t.substring(0,e);else{var s=t.lastIndexOf(" ",e);-1===s&&(s=e),t=t.substring(0,s)}return t+=void 0!==i&&null!==i?i:"...",n.copySafeness(o,t)},upper:function(t){return t.toUpperCase()},urlencode:function(t){var n=encodeURIComponent;if(e.isString(t))return n(t);var r;if(e.isArray(t))r=t.map(function(t){return n(t[0])+"="+n(t[1])});else{r=[];for(var i in t)t.hasOwnProperty(i)&&r.push(n(i)+"="+n(t[i]))}return r.join("&")},urlize:function(t,e,n){isNaN(e)&&(e=1/0);var r=n===!0?' rel="nofollow"':"",i=/^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,o=/^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,s=/^https?:\/\/.*$/,a=/^www\./,u=/\.(?:org|net|com)(?:\:|\/|$)/,c=t.split(/\s+/).filter(function(t){return t&&t.length}).map(function(t){var n=t.match(i),c=n&&n[1]||t;return s.test(c)?'<a href="'+c+'"'+r+">"+c.substr(0,e)+"</a>":a.test(c)?'<a href="http://'+c+'"'+r+">"+c.substr(0,e)+"</a>":o.test(c)?'<a href="mailto:'+c+'">'+c+"</a>":u.test(c)?'<a href="http://'+c+'"'+r+">"+c.substr(0,e)+"</a>":c});return c.join(" ")},wordcount:function(t){var e=t?t.match(/\w+/g):null;return e?e.length:null},"float":function(t,e){var n=parseFloat(t);return isNaN(n)?e:n},"int":function(t,e){var n=parseInt(t,10);return isNaN(n)?e:n}};r.d=r["default"],r.e=r.escape,t.filters=r}(),function(){function e(t){var e=-1,n=null;return{reset:function(){e=-1,n=null},next:function(){return e++,e>=t.length&&(e=0),n=t[e]}}}function n(t){t=t||",";var e=!0;return function(){var n=e?"":t;return e=!1,n}}var r={range:function(t,e,n){e?n||(n=1):(e=t,t=0,n=1);for(var r=[],i=t;e>i;i+=n)r.push(i);return r},cycler:function(){return e(Array.prototype.slice.call(arguments))},joiner:function(t){return n(t)}};t.globals=r}(),function(){var e=t.path,n=t.lib,r=t.object,i=t.lexer,o=t.compiler,s=t.filters,a=t.loaders,u=t.runtime,c=t.globals,l=u.Frame,f=r.extend({init:function(t,e){e=e||{},this.dev=!!e.dev,this.autoesc=!!e.autoescape,this.loaders=t?n.isArray(t)?t:[t]:a.FileSystemLoader?[new a.FileSystemLoader("views")]:[new a.WebLoader("/views")],this.initCache(),this.filters={},this.asyncFilters=[],this.extensions={},this.extensionsList=[],e.tags&&i.setTags(e.tags);for(var r in s)this.addFilter(r,s[r])},initCache:function(){var t={};n.each(this.loaders,function(e){"function"==typeof e.on&&e.on("update",function(e){t[e]=null})}),this.cache=t},addExtension:function(t,e){e._name=t,this.extensions[t]=e,this.extensionsList.push(e)},getExtension:function(t){return this.extensions[t]},addGlobal:function(t,e){c[t]=e},addFilter:function(t,e,n){var r=e;n&&this.asyncFilters.push(t),this.filters[t]=r},getFilter:function(t){if(!this.filters[t])throw new Error("filter not found: "+t);return this.filters[t]},getTemplate:function(t,e,r){if(t&&t.raw&&(t=t.raw),n.isFunction(e)&&(r=e,e=!1),"string"!=typeof t)throw new Error("template names must be a string: "+t);var i=this.cache[t];if(!i){var o;return n.asyncIter(this.loaders,function(e,n,r,i){function o(t){t?i(t):r()}e.async?e.getSource(t,function(t,e){if(t)throw t;o(e)}):o(e.getSource(t))},function(n){if(n){var i=new p(n.src,this,n.path,e);n.noCache||(this.cache[t]=i),r?r(null,i):o=i}else{var s=new Error("template not found: "+t);if(!r)throw s;r(s)}}.bind(this)),o}return e&&i.compile(),r?void r(null,i):i},express:function(t){function n(t,n){if(this.name=t,this.path=t,this.defaultEngine=n.defaultEngine,this.ext=e.extname(t),!this.ext&&!this.defaultEngine)throw new Error("No default engine was specified and no extension was provided.");this.ext||(this.name+=this.ext=("."!==this.defaultEngine[0]?".":"")+this.defaultEngine)}var r=this;n.prototype.render=function(t,e){r.render(this.name,t,e)},t.set("view",n)},render:function(t,e,r){n.isFunction(e)&&(r=e,e=null);var i=null;return this.getTemplate(t,function(t,n){if(t&&r)r(t);else{if(t)throw t;n.render(e,r||function(t,e){if(t)throw t;i=e})}}),i},renderString:function(t,e,n){var r=new p(t,this);return r.render(e,n)}}),h=r.extend({init:function(t,e){this.ctx=t,this.blocks={},this.exported=[];for(var n in e)this.addBlock(n,e[n])},lookup:function(t){return t in c&&!(t in this.ctx)?c[t]:this.ctx[t]},setVariable:function(t,e){this.ctx[t]=e},getVariables:function(){return this.ctx},addBlock:function(t,e){this.blocks[t]=this.blocks[t]||[],this.blocks[t].push(e)},getBlock:function(t){if(!this.blocks[t])throw new Error('unknown block "'+t+'"');return this.blocks[t][0]},getSuper:function(t,e,n,r,i,o){var s=(this.blocks[e]||[]).indexOf(n),a=this.blocks[e][s+1],u=this;if(-1==s||!a)throw new Error('no super block available for "'+e+'"');a(t,u,r,i,o)},addExport:function(t){this.exported.push(t)},getExported:function(){for(var t={},e=0;e<this.exported.length;e++){var n=this.exported[e];t[n]=this.ctx[n]}return t}}),p=r.extend({init:function(t,e,r,i){if(this.env=e||new f,n.isObject(t))switch(t.type){case"code":this.tmplProps=t.obj;break;case"string":this.tmplStr=t.obj}else{if(!n.isString(t))throw new Error("src must be a string or an object describing the source");this.tmplStr=t}this.path=r,i?n.withPrettyErrors(this.path,this.env.dev,this._compile.bind(this)):this.compiled=!1},render:function(t,e,r){return"function"==typeof t?(r=t,t={}):"function"==typeof e&&(r=e,e=null),n.withPrettyErrors(this.path,this.env.dev,function(){this.compile();var n=new h(t||{},this.blocks),i=null;return this.rootRenderFunc(this.env,n,e||new l,u,r||function(t,e){if(t)throw t;i=e}),i}.bind(this))},getExported:function(t){this.compile();var e=new h({},this.blocks);this.rootRenderFunc(this.env,e,new l,u,function(){t(null,e.getExported())})},compile:function(){this.compiled||this._compile()},_compile:function(){var t;if(this.tmplProps)t=this.tmplProps;else{var e=o.compile(this.tmplStr,this.env.asyncFilters,this.env.extensionsList,this.path),n=new Function(e);t=n()}this.blocks=this._getBlocks(t),this.rootRenderFunc=t.root,this.compiled=!0},_getBlocks:function(t){var e={};for(var n in t)"b_"==n.slice(0,2)&&(e[n.slice(2)]=t[n]);return e}});t.environment={Environment:f,Template:p}}();var e,n=t.lib,r=t.environment,i=t.compiler,o=t.parser,s=t.lexer,a=t.runtime,u=t.loader,c=t.loaders,l=t.precompile;e={},e.Environment=r.Environment,e.Template=r.Template,e.Loader=u,e.FileSystemLoader=c.FileSystemLoader,e.WebLoader=c.WebLoader,e.compiler=i,e.parser=o,e.lexer=s,e.runtime=a;var f;e.configure=function(t,e){e=e||{},n.isObject(t)&&(e=t,t=null);var i="watch"in e?!e.watch:!1,o=c.FileSystemLoader||c.WebLoader;return f=new r.Environment(new o(t,i),e),e&&e.express&&f.express(e.express),f},e.compile=function(t,n,r,i){return f||e.configure(),new e.Template(t,n,r,i)},e.render=function(t,n,r){return f||e.configure(),f.render(t,n,r)},e.renderString=function(t,n,r){return f||e.configure(),f.renderString(t,n,r)},l&&(e.precompile=l.precompile,e.precompileString=l.precompileString),e.require=function(e){return t[e]},"function"==typeof define&&define.amd?define(function(){return e}):(window.nunjucks=e,"undefined"!=typeof module&&(module.exports=e))}();
},{}],3:[function(require,module,exports){
!function(){function t(e,n){if("function"==typeof e)return t("*",e);if("function"==typeof n)for(var i=new a(e),o=1;o<arguments.length;++o)t.callbacks.push(i.middleware(arguments[o]));else"string"==typeof e?t.show(e,n):t.start(e)}function e(e){var n=window.location.pathname+window.location.search;n!=e.canonicalPath&&(t.stop(),e.unhandled=!0,window.location=e.canonicalPath)}function n(t,e){"/"==t[0]&&0!=t.indexOf(l)&&(t=l+t);var n=t.indexOf("?");if(this.canonicalPath=t,this.path=t.replace(l,"")||"/",this.title=document.title,this.state=e||{},this.state.path=t,this.querystring=~n?t.slice(n+1):"",this.pathname=~n?t.slice(0,n):t,this.params=[],this.hash="",~this.path.indexOf("#")){var a=this.path.split("#");this.path=a[0],this.hash=a[1]||"",this.querystring=this.querystring.split("#")[0]}}function a(t,e){e=e||{},this.path=t,this.method="GET",this.regexp=i(t,this.keys=[],e.sensitive,e.strict)}function i(t,e,n,a){return t instanceof RegExp?t:(t instanceof Array&&(t="("+t.join("|")+")"),t=t.concat(a?"":"/?").replace(/\/\(/g,"(?:/").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g,function(t,n,a,i,o,r){return e.push({name:i,optional:!!r}),n=n||"",""+(r?"":n)+"(?:"+(r?n:"")+(a||"")+(o||a&&"([^/.]+?)"||"([^/]+?)")+")"+(r||"")}).replace(/([\/.])/g,"\\$1").replace(/\*/g,"(.*)"),new RegExp("^"+t+"$",n?"":"i"))}function o(e){if(e.state){var n=e.state.path;t.replace(n,e.state)}}function r(e){if(1==s(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var n=e.target;n&&"A"!=n.nodeName;)n=n.parentNode;if(n&&"A"==n.nodeName){var a=n.getAttribute("href");if((n.pathname!=location.pathname||!n.hash&&"#"!=a)&&!n.target&&h(n.href)){var i=n.pathname+n.search+(n.hash||""),o=i+n.hash;i=i.replace(l,""),l&&o==i||(e.preventDefault(),t.show(o))}}}}function s(t){return t=t||window.event,null==t.which?t.button:t.which}function h(t){var e=location.protocol+"//"+location.hostname;return location.port&&(e+=":"+location.port),0==t.indexOf(e)}var c,p=!0,l="";t.callbacks=[],t.base=function(t){return 0==arguments.length?l:void(l=t)},t.start=function(e){if(e=e||{},!c&&(c=!0,!1===e.dispatch&&(p=!1),!1!==e.popstate&&window.addEventListener("popstate",o,!1),!1!==e.click&&window.addEventListener("click",r,!1),p)){var n=location.pathname+location.search+location.hash;t.replace(n,null,!0,p)}},t.stop=function(){c=!1,removeEventListener("click",r,!1),removeEventListener("popstate",o,!1)},t.show=function(e,a,i){var o=new n(e,a);return!1!==i&&t.dispatch(o),o.unhandled||o.pushState(),o},t.replace=function(e,a,i,o){var r=new n(e,a);return r.init=i,null==o&&(o=!0),o&&t.dispatch(r),r.save(),r},t.dispatch=function(n){function a(){var o=t.callbacks[i++];return o?void o(n,a):e(n)}var i=0;a()},t.Context=n,n.prototype.pushState=function(){history.pushState(this.state,this.title,this.canonicalPath)},n.prototype.save=function(){history.replaceState(this.state,this.title,this.canonicalPath)},t.Route=a,a.prototype.middleware=function(t){var e=this;return function(n,a){return e.match(n.path,n.params)?t(n,a):void a()}},a.prototype.match=function(t,e){var n=this.keys,a=t.indexOf("?"),i=~a?t.slice(0,a):t,o=this.regexp.exec(i);if(!o)return!1;for(var r=1,s=o.length;s>r;++r){var h=n[r-1],c="string"==typeof o[r]?decodeURIComponent(o[r]):o[r];h?e[h.name]=void 0!==e[h.name]?e[h.name]:c:e.push(c)}return!0},"undefined"==typeof module?window.page=t:module.exports=t}();
},{}],4:[function(require,module,exports){
/* Zepto v1.1.4 - zepto event ajax form ie - zeptojs.com/license */

var Zepto = module.exports = (function() {
  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
    document = window.document,
    elementDisplay = {}, classCache = {},
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,
    capitalRE = /([A-Z])/g,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    simpleSelectorRE = /^[\w-]*$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div'),
    propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
    isArray = Array.isArray ||
      function(object){ return object instanceof Array }

  zepto.matches = function(element, selector) {
    if (!selector || !element || element.nodeType !== 1) return false
    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                          element.oMatchesSelector || element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
  }
  function likeArray(obj) { return typeof obj.length == 'number' }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overriden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    var dom, nodes, container

    // A special case optimization for a single tag
    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
      if (!(name in containers)) name = '*'

      container = containers[name]
      container.innerHTML = '' + html
      dom = $.each(slice.call(container.childNodes), function(){
        container.removeChild(this)
      })
    }

    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }

    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. Note that `__proto__` is not supported on Internet
  // Explorer. This method can be overriden in plugins.
  zepto.Z = function(dom, selector) {
    dom = dom || []
    dom.__proto__ = $.fn
    dom.selector = selector || ''
    return dom
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overriden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overriden in plugins.
  zepto.init = function(selector, context) {
    var dom
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // Optimize for string selectors
    else if (typeof selector == 'string') {
      selector = selector.trim()
      // If it's a html fragment, create nodes from it
      // Note: In both Chrome 21 and Firefox 15, DOM error 12
      // is thrown if the fragment doesn't begin with <
      if (selector[0] == '<' && fragmentRE.test(selector))
        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // If it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, just return it
    else if (zepto.isZ(selector)) return selector
    else {
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes.
      else if (isObject(selector))
        dom = [selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // create a new Zepto collection from the nodes found
    return zepto.Z(dom, selector)
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overriden in plugins.
  zepto.qsa = function(element, selector){
    var found,
        maybeID = selector[0] == '#',
        maybeClass = !maybeID && selector[0] == '.',
        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
        isSimple = simpleSelectorRE.test(nameOnly)
    return (isDocument(element) && isSimple && maybeID) ?
      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
      slice.call(
        isSimple && !maybeID ?
          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
          element.getElementsByTagName(selector) : // Or a tag
          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      )
  }

  function filtered(nodes, selector) {
    return selector == null ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = document.documentElement.contains ?
    function(parent, node) {
      return parent !== node && parent.contains(node)
    } :
    function(parent, node) {
      while (node && (node = node.parentNode))
        if (node === parent) return true
      return false
    }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className,
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    var num
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          !/^0/.test(value) && !isNaN(num = Number(value)) ? num :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) {
    return str == null ? "" : String.prototype.trim.call(str)
  }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    indexOf: emptyArray.indexOf,
    concat: emptyArray.concat,

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      // need to check if document.body exists for IE as that browser reports
      // document ready when it hasn't yet created the body element
      if (readyRE.test(document.readyState) && document.body) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (!selector) result = []
      else if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var node = this[0], collection = false
      if (typeof selector == 'object') collection = $(selector)
      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
        node = node !== context && !isDocument(node) && node.parentNode
      return $(node)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = '')
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return 0 in arguments ?
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        }) :
        (0 in this ? this[0].innerHTML : null)
    },
    text: function(text){
      return 0 in arguments ?
        this.each(function(idx){
          var newText = funcArg(this, text, idx, this.textContent)
          this.textContent = newText == null ? '' : ''+newText
        }) :
        (0 in this ? this[0].textContent : null)
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && !(1 in arguments)) ?
        (!this.length || this[0].nodeType !== 1 ? undefined :
          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
        ) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && setAttribute(this, name) })
    },
    prop: function(name, value){
      name = propMap[name] || name
      return (1 in arguments) ?
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        }) :
        (this[0] && this[0][name])
    },
    data: function(name, value){
      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

      var data = (1 in arguments) ?
        this.attr(attrName, value) :
        this.attr(attrName)

      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      return 0 in arguments ?
        this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        }) :
        (this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
           this[0].value)
        )
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (!this.length) return null
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2) {
        var element = this[0], computedStyle = getComputedStyle(element, '')
        if(!element) return
        if (typeof property == 'string')
          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
        else if (isArray(property)) {
          var props = {}
          $.each(isArray(property) ? property: [property], function(_, prop){
            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
          })
          return props
        }
      }

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      if (!name) return false
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      if (!name) return this
      return this.each(function(idx){
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      if (!name) return this
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(value){
      if (!this.length) return
      var hasScrollTop = 'scrollTop' in this[0]
      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
      return this.each(hasScrollTop ?
        function(){ this.scrollTop = value } :
        function(){ this.scrollTo(this.scrollX, value) })
    },
    scrollLeft: function(value){
      if (!this.length) return
      var hasScrollLeft = 'scrollLeft' in this[0]
      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
      return this.each(hasScrollLeft ?
        function(){ this.scrollLeft = value } :
        function(){ this.scrollTo(value, this.scrollY) })
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    var dimensionProperty =
      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

    $.fn[dimension] = function(value){
      var offset, el = this[0]
      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var i = 0, len = node.childNodes.length; i < len; i++)
      traverseNode(node.childNodes[i], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            argType = type(arg)
            return argType == "object" || argType == "array" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        var parentInDocument = $.contains(document.documentElement, parent)

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          parent.insertBefore(node, target)
          if (parentInDocument) traverseNode(node, function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src)
              window['eval'].call(window, el.innerHTML)
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()




;(function($){
  var _zid = 1, undefined,
      slice = Array.prototype.slice,
      isFunction = $.isFunction,
      isString = function(obj){ return typeof obj == 'string' },
      handlers = {},
      specialEvents={},
      focusinSupported = 'onfocusin' in window,
      focus = { focus: 'focusin', blur: 'focusout' },
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (!focusinSupported && (handler.e in focus)) ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || (focusinSupported && focus[type]) || type
  }

  function add(element, events, fn, data, selector, delegator, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    events.split(/\s/).forEach(function(event){
      if (event == 'ready') return $(document).ready(fn)
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = delegator
      var callback  = delegator || fn
      handler.proxy = function(e){
        e = compatible(e)
        if (e.isImmediatePropagationStopped()) return
        e.data = data
        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      if ('addEventListener' in element)
        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    ;(events || '').split(/\s/).forEach(function(event){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
      if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    var args = (2 in arguments) && slice.call(arguments, 2)
    if (isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn)
        return $.proxy.apply(null, args)
      } else {
        return $.proxy(fn[context], fn)
      }
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, data, callback){
    return this.on(event, data, callback)
  }
  $.fn.unbind = function(event, callback){
    return this.off(event, callback)
  }
  $.fn.one = function(event, selector, data, callback){
    return this.on(event, selector, data, callback, 1)
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }

  function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event)

      $.each(eventMethods, function(name, predicate) {
        var sourceMethod = source[name]
        event[name] = function(){
          this[predicate] = returnTrue
          return sourceMethod && sourceMethod.apply(source, arguments)
        }
        event[predicate] = returnFalse
      })

      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
          'returnValue' in source ? source.returnValue === false :
          source.getPreventDefault && source.getPreventDefault())
        event.isDefaultPrevented = returnTrue
    }
    return event
  }

  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    return compatible(proxy, event)
  }

  $.fn.delegate = function(selector, event, callback){
    return this.on(event, selector, callback)
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.off(event, selector, callback)
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, data, callback, one){
    var autoRemove, delegator, $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.on(type, selector, data, fn, one)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = data, data = selector, selector = undefined
    if (isFunction(data) || data === false)
      callback = data, data = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(_, element){
      if (one) autoRemove = function(e){
        remove(element, e.type, callback)
        return callback.apply(this, arguments)
      }

      if (selector) delegator = function(e){
        var evt, match = $(e.target).closest(selector, element).get(0)
        if (match && match !== element) {
          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
        }
      }

      add(element, event, callback, data, selector, delegator || autoRemove)
    })
  }
  $.fn.off = function(event, selector, callback){
    var $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.off(type, selector, fn)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = selector, selector = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.trigger = function(event, args){
    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
    event._args = args
    return this.each(function(){
      // items in the collection might not be DOM elements
      if('dispatchEvent' in this) this.dispatchEvent(event)
      else $(this).triggerHandler(event, args)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, args){
    var e, result
    this.each(function(i, element){
      e = createProxy(isString(event) ? $.Event(event) : event)
      e._args = args
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return callback ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  ;['focus', 'blur'].forEach(function(name) {
    $.fn[name] = function(callback) {
      if (callback) this.bind(name, callback)
      else this.each(function(){
        try { this[name]() }
        catch(e) {}
      })
      return this
    }
  })

  $.Event = function(type, props) {
    if (!isString(type)) props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true)
    return compatible(event)
  }

})(Zepto)

;(function($){
  var jsonpID = 0,
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.isDefaultPrevented()
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings, deferred) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    if (deferred) deferred.resolveWith(context, [data, status, xhr])
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings, deferred) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    if (deferred) deferred.rejectWith(context, [xhr, type, error])
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options, deferred){
    if (!('type' in options)) return $.ajax(options)

    var _callbackName = options.jsonpCallback,
      callbackName = ($.isFunction(_callbackName) ?
        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
      script = document.createElement('script'),
      originalCallback = window[callbackName],
      responseData,
      abort = function(errorType) {
        $(script).triggerHandler('error', errorType || 'abort')
      },
      xhr = { abort: abort }, abortTimeout

    if (deferred) deferred.promise(xhr)

    $(script).on('load error', function(e, errorType){
      clearTimeout(abortTimeout)
      $(script).off().remove()

      if (e.type == 'error' || !responseData) {
        ajaxError(null, errorType || 'error', xhr, options, deferred)
      } else {
        ajaxSuccess(responseData[0], xhr, options, deferred)
      }

      window[callbackName] = originalCallback
      if (responseData && $.isFunction(originalCallback))
        originalCallback(responseData[0])

      originalCallback = responseData = undefined
    })

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return xhr
    }

    window[callbackName] = function(){
      responseData = arguments
    }

    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
    document.head.appendChild(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    // IIS returns Javascript as "application/x-javascript"
    accepts: {
      script: 'text/javascript, application/javascript, application/x-javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    if (query == '') return url
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
      options.url = appendQuery(options.url, options.data), options.data = undefined
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {}),
        deferred = $.Deferred && $.Deferred()
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) &&
      RegExp.$2 != window.location.host

    if (!settings.url) settings.url = window.location.toString()
    serializeData(settings)

    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
    if (hasPlaceholder) dataType = 'jsonp'

    if (settings.cache === false || (
         (!options || options.cache !== true) &&
         ('script' == dataType || 'jsonp' == dataType)
        ))
      settings.url = appendQuery(settings.url, '_=' + Date.now())

    if ('jsonp' == dataType) {
      if (!hasPlaceholder)
        settings.url = appendQuery(settings.url,
          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
      return $.ajaxJSONP(settings, deferred)
    }

    var mime = settings.accepts[dataType],
        headers = { },
        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(),
        nativeSetHeader = xhr.setRequestHeader,
        abortTimeout

    if (deferred) deferred.promise(xhr)

    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
    setHeader('Accept', mime || '*/*')
    if (mime = settings.mimeType || mime) {
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
    xhr.setRequestHeader = setHeader

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
          result = xhr.responseText

          try {
            // http://perfectionkills.com/global-eval-what-are-the-options/
            if (dataType == 'script')    (1,eval)(result)
            else if (dataType == 'xml')  result = xhr.responseXML
            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
          } catch (e) { error = e }

          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
          else ajaxSuccess(result, xhr, settings, deferred)
        } else {
          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
        }
      }
    }

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      ajaxError(null, 'abort', xhr, settings, deferred)
      return xhr
    }

    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings, deferred)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    if ($.isFunction(data)) dataType = success, success = data, data = undefined
    if (!$.isFunction(success)) dataType = success, success = undefined
    return {
      url: url
    , data: data
    , success: success
    , dataType: dataType
    }
  }

  $.get = function(/* url, data, success, dataType */){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(/* url, data, success, dataType */){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(/* url, data, success */){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope :
        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(k, v){ this.push(escape(k) + '=' + escape(v)) }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(Zepto)

;(function($){
  $.fn.serializeArray = function() {
    var result = [], el
    $([].slice.call(this.get(0).elements)).each(function(){
      el = $(this)
      var type = el.attr('type')
      if (this.nodeName.toLowerCase() != 'fieldset' &&
        !this.disabled && type != 'submit' && type != 'reset' && type != 'button' &&
        ((type != 'radio' && type != 'checkbox') || this.checked))
        result.push({
          name: el.attr('name'),
          value: el.val()
        })
    })
    return result
  }

  $.fn.serialize = function(){
    var result = []
    this.serializeArray().forEach(function(elm){
      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
    })
    return result.join('&')
  }

  $.fn.submit = function(callback) {
    if (callback) this.bind('submit', callback)
    else if (this.length) {
      var event = $.Event('submit')
      this.eq(0).trigger(event)
      if (!event.isDefaultPrevented()) this.get(0).submit()
    }
    return this
  }

})(Zepto)

;(function($){
  // __proto__ doesn't exist on IE<11, so redefine
  // the Z function to use object extension instead
  if (!('__proto__' in {})) {
    $.extend($.zepto, {
      Z: function(dom, selector){
        dom = dom || []
        $.extend(dom, $.fn)
        dom.selector = selector || ''
        dom.__Z = true
        return dom
      },
      // this is a kludge but works
      isZ: function(object){
        return $.type(object) === 'array' && '__Z' in object
      }
    })
  }

  // getComputedStyle shouldn't freak out when called
  // without a valid element as argument
  try {
    getComputedStyle(undefined)
  } catch(e) {
    var nativeGetComputedStyle = getComputedStyle;
    window.getComputedStyle = function(element){
      try {
        return nativeGetComputedStyle(element)
      } catch(e) {
        return null
      }
    }
  }
})(Zepto)

},{}],5:[function(require,module,exports){
var $;

$ = require('browserify-zepto');

exports.get = function(url, callback) {
  return $.getJSON(url, function(data) {
    if (data.error) {
      return callback(new Error(data.error));
    }
    return callback(null, data);
  });
};

},{"browserify-zepto":4}],6:[function(require,module,exports){
var dataSource;dataSource=require("./data.coffee"),exports.articles=function(e,t){return dataSource.getTeasers(function(r,a){return r?t(r):e.render("articles.html",{title:"Livingdocs articles",articles:a})})},exports.article=function(e,t){return dataSource.getArticle(e.params.slug,function(r,a){return r?t(r):e.render("article.html",{title:a.title,article:a})})};
},{"./data.coffee":7}],7:[function(require,module,exports){
var processArticle,request,transformers;request=require("ld-request"),transformers=require("./transformers.coffee"),processArticle=function(t){var r,e;return t.html=null!=(r=t.html)?r.replace(/http\:\/\/app\.resrc\.it/g,"http://imgr.io/resrc/t:jpg-progressive"):void 0,t.html=null!=(e=t.html)?e.replace(/http\:\/\/placehold\.it\/0x0/g,"http://imgr.io/bkXv1l4RQ/default/100x100"):void 0,t},exports.getArticle=function(t,r){return request.get("http://api.livingdocs.io/public/publications/"+t,function(t,e){return t?r(t):r(null,processArticle(e.publication))})},exports.getArticles=function(t){return request.get("http://api.livingdocs.io/public/publications?space=127",function(r,e){return r?t(r):t(null,e.publications)})},exports.getTeasers=function(t){return exports.getArticles(function(r,e){return r?t(r):t(null,transformers.articlesToTeasers(e))})};
},{"./transformers.coffee":8,"ld-request":5}],8:[function(require,module,exports){
exports.constructImageUrl=function(e){var t,r,n;return"string"==typeof e&&(e={url:e}),r=((null!=e?e.url:void 0)||"").split("amazonaws.com/")[1],r?((t=e.crop)&&(n="c:"+t.x+"x"+t.y+"x"+t.width+"x"+t.height+"-t:jpg-progressive"),"http://imgr.io/livingdocs/"+n+"/"+r):(null!=e?e.url:void 0)||e.originalUrl},exports.deduceTitleFromData=function(e){var t,r,n,o,i,a,l;for(n=0,i=e.length;i>n;n++)for(t=e[n],l=["hero","head","title"],o=0,a=l.length;a>o;o++)if(r=l[o],t.identifier==="timeline."+r&&null!=t.content.title)return t.content.title},exports.deduceTeaserImageFromData=function(e){var t,r,n,o,i,a,l;for(n=0,i=e.length;i>n;n++)for(t=e[n],l=["hero","fullsize","normal","peephole"],o=0,a=l.length;a>o;o++)if(r=l[o],t.identifier==="timeline."+r&&null!=t.content.image)return t.content.image},exports.articlesToTeasers=function(e){var t,r,n,o,i,a;for(a=[],r=0,n=e.length;n>r;r++)t=e[r],a.push({title:(null!=(o=t.metadata)?o.title:void 0)||exports.deduceTitleFromData(t.data.content),teaserImage:exports.constructImageUrl((null!=(i=t.metadata)?i.teaser_image:void 0)||exports.deduceTeaserImageFromData(t.data.content)),articleId:t.slug||t.document_id});return a};
},{}]},{},[1]);
