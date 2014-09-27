require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $,Nunjucks,controllers,nunjucks,page;$=require("browserify-zepto"),page=require("../components/page.js/index"),Nunjucks=require("../components/nunjucks/browser/nunjucks.min.js"),nunjucks=new Nunjucks.Environment(new Nunjucks.WebLoader("/views",!0)),controllers=require("../shared/controllers.coffee"),page.Context.prototype.render=function(e,r){return nunjucks.render(e,r,function(e,r){return e?alert("Failed to render the view"):$("body").html(r)})},$(document).ready(function(){return page("/",controllers.articles),page("/articles",controllers.articles),page("/articles/:slug",controllers.article),$(document).on("click","a[internal]",function(e){return e.preventDefault(),page($(this).attr("href"))})});
},{"../components/nunjucks/browser/nunjucks.min.js":2,"../components/page.js/index":3,"../shared/controllers.coffee":5,"browserify-zepto":4}],2:[function(require,module,exports){
!function(){var e={};!function(){function t(e,n,i){var r=function(){};r.prototype=e.prototype;var o=new r,s=/xyz/.test(function(){})?/\bparent\b/:/.*/;i=i||{};for(var a in i){var l=i[a],c=o[a];o[a]="function"==typeof c&&"function"==typeof l&&s.test(l)?function(e,t){return function(){var n=this.parent;this.parent=t;var i=e.apply(this,arguments);return this.parent=n,i}}(l,c):l}o.typename=n;var h=function(){o.init&&o.init.apply(this,arguments)};return h.prototype=o,h.prototype.constructor=h,h.extend=function(e,n){return"object"==typeof e&&(n=e,e="anonymous"),t(h,e,n)},h}e.object=t(Object,"Object",{})}(),function(){var t=Array.prototype,n=Object.prototype,i={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},r=/[&"'<>]/g,o=function(e){return i[e]},s=e.lib={};s.withPrettyErrors=function(e,t,n){try{return n()}catch(i){if(i.Update||(i=new s.TemplateError(i)),i.Update(e),!t){var r=i;i=new Error(r.message),i.name=r.name}throw i}},s.TemplateError=function(e,t,n){var i=this;return e instanceof Error?(i=e,e=e.name+": "+e.message):Error.captureStackTrace&&Error.captureStackTrace(i),i.name="Template render error",i.message=e,i.lineno=t,i.colno=n,i.firstUpdate=!0,i.Update=function(e){var t="("+(e||"unknown path")+")";return this.firstUpdate&&(this.lineno&&this.colno?t+=" [Line "+this.lineno+", Column "+this.colno+"]":this.lineno&&(t+=" [Line "+this.lineno+"]")),t+="\n ",this.firstUpdate&&(t+=" "),this.message=t+(this.message||""),this.firstUpdate=!1,this},i},s.TemplateError.prototype=Error.prototype,s.escape=function(e){return e.replace(r,o)},s.isFunction=function(e){return"[object Function]"==n.toString.call(e)},s.isArray=Array.isArray||function(e){return"[object Array]"==n.toString.call(e)},s.isString=function(e){return"[object String]"==n.toString.call(e)},s.isObject=function(e){return"[object Object]"==n.toString.call(e)},s.groupBy=function(e,t){for(var n={},i=s.isFunction(t)?t:function(e){return e[t]},r=0;r<e.length;r++){var o=e[r],a=i(o,r);(n[a]||(n[a]=[])).push(o)}return n},s.toArray=function(e){return Array.prototype.slice.call(e)},s.without=function(e){var t=[];if(!e)return t;for(var n=-1,i=e.length,r=s.toArray(arguments).slice(1);++n<i;)-1===r.indexOf(e[n])&&t.push(e[n]);return t},s.extend=function(e,t){for(var n in t)e[n]=t[n];return e},s.repeat=function(e,t){for(var n="",i=0;t>i;i++)n+=e;return n},s.each=function(e,n,i){if(null!=e)if(t.each&&e.each==t.each)e.forEach(n,i);else if(e.length===+e.length)for(var r=0,o=e.length;o>r;r++)n.call(i,e[r],r,e)},s.map=function(e,n){var i=[];if(null==e)return i;if(t.map&&e.map===t.map)return e.map(n);for(var r=0;r<e.length;r++)i[i.length]=n(e[r],r);return e.length===+e.length&&(i.length=e.length),i},s.asyncIter=function(e,t,n){function i(){r++,r<e.length?t(e[r],r,i,n):n()}var r=-1;i()},s.asyncFor=function(e,t,n){function i(){a++;var s=r[a];o>a?t(s,e[s],a,o,i):n()}var r=s.keys(e),o=r.length,a=-1;i()},Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){if(null==e)throw new TypeError;var n=Object(e),i=n.length>>>0;if(0===i)return-1;var r=0;if(arguments.length>2&&(r=Number(arguments[2]),r!=r?r=0:0!=r&&1/0!=r&&r!=-1/0&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=i)return-1;for(var o=r>=0?r:Math.max(i-Math.abs(r),0);i>o;o++)if(o in n&&n[o]===t)return o;return-1}),Array.prototype.map||(Array.prototype.map=function(){throw new Error("map is unimplemented for this js engine")}),s.keys=function(e){if(Object.prototype.keys)return e.keys();var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}}(),function(){function t(e,t,n){e instanceof t&&n.push(e),e instanceof s&&e.findAll(t,n)}function n(e,t){function o(e,t,n){for(var r=e.split("\n"),o=0;o<r.length;o++){if(r[o]&&(n&&o>0||!n))for(var s=0;t>s;s++)i.print(" ");o===r.length-1?i.print(r[o]):i.puts(r[o])}}if(t=t||0,o(e.typename+": ",t),e instanceof l)o("\n"),r.each(e.children,function(e){n(e,t+2)});else if(e instanceof et)o(e.extName+"."+e.prop),o("\n"),e.args&&n(e.args,t+2),e.contentArgs&&r.each(e.contentArgs,function(e){n(e,t+2)});else{var a=null,c=null;if(e.iterFields(function(e,t){e instanceof s?(a=a||{},a[t]=e):(c=c||{},c[t]=e)}),c?o(i.inspect(c,!0,null)+"\n",null,!0):o("\n"),a)for(var h in a)n(a[h],t+2)}}var i=e.util,r=e.lib,o=e.object,s=o.extend("Node",{init:function(e,t){this.lineno=e,this.colno=t;for(var n=this.fields,i=0,r=n.length;r>i;i++){var o=n[i],s=arguments[i+2];void 0===s&&(s=null),this[o]=s}},findAll:function(e,n){if(n=n||[],this instanceof l)for(var i=this.children,r=0,o=i.length;o>r;r++)t(i[r],e,n);else for(var s=this.fields,r=0,o=s.length;o>r;r++)t(this[s[r]],e,n);return n},iterFields:function(e){r.each(this.fields,function(t){e(this[t],t)},this)}}),a=s.extend("Value",{fields:["value"]}),l=s.extend("NodeList",{fields:["children"],init:function(e,t,n){this.parent(e,t,n||[])},addChild:function(e){this.children.push(e)}}),c=l.extend("Root"),h=a.extend("Literal"),u=a.extend("Symbol"),p=l.extend("Group"),f=l.extend("Array"),m=s.extend("Pair",{fields:["key","value"]}),d=l.extend("Dict"),v=s.extend("LookupVal",{fields:["target","val"]}),g=s.extend("If",{fields:["cond","body","else_"]}),y=g.extend("IfAsync"),k=s.extend("InlineIf",{fields:["cond","body","else_"]}),x=s.extend("For",{fields:["arr","name","body"]}),b=x.extend("AsyncEach"),E=x.extend("AsyncAll"),w=s.extend("Macro",{fields:["name","args","body"]}),T=s.extend("Import",{fields:["template","target"]}),L=s.extend("FromImport",{fields:["template","names"],init:function(e,t,n,i){this.parent(e,t,n,i||new l)}}),_=s.extend("FunCall",{fields:["name","args"]}),A=_.extend("Filter"),O=A.extend("FilterAsync",{fields:["name","args","symbol"]}),S=d.extend("KeywordArgs"),N=s.extend("Block",{fields:["name","body"]}),C=s.extend("Super",{fields:["blockName","symbol"]}),F=s.extend("TemplateRef",{fields:["template"]}),K=F.extend("Extends"),B=F.extend("Include"),I=s.extend("Set",{fields:["targets","value"]}),R=l.extend("Output"),P=h.extend("TemplateData"),M=s.extend("UnaryOp",{fields:["target"]}),j=s.extend("BinOp",{fields:["left","right"]}),V=j.extend("Or"),D=j.extend("And"),U=M.extend("Not"),W=j.extend("Add"),G=j.extend("Sub"),Y=j.extend("Mul"),H=j.extend("Div"),$=j.extend("FloorDiv"),z=j.extend("Mod"),X=j.extend("Pow"),q=M.extend("Neg"),J=M.extend("Pos"),Q=s.extend("Compare",{fields:["expr","ops"]}),Z=s.extend("CompareOperand",{fields:["expr","type"]}),et=(s.extend("CustomTag",{init:function(e,t,n){this.lineno=e,this.colno=t,this.name=n}}),s.extend("CallExtension",{fields:["extName","prop","args","contentArgs"],init:function(e,t,n,i){this.extName=e._name||e,this.prop=t,this.args=n||new l,this.contentArgs=i||[],this.autoescape=e.autoescape}})),tt=et.extend("CallExtensionAsync");e.nodes={Node:s,Root:c,NodeList:l,Value:a,Literal:h,Symbol:u,Group:p,Array:f,Pair:m,Dict:d,Output:R,TemplateData:P,If:g,IfAsync:y,InlineIf:k,For:x,AsyncEach:b,AsyncAll:E,Macro:w,Import:T,FromImport:L,FunCall:_,Filter:A,FilterAsync:O,KeywordArgs:S,Block:N,Super:C,Extends:K,Include:B,Set:I,LookupVal:v,BinOp:j,Or:V,And:D,Not:U,Add:W,Sub:G,Mul:Y,Div:H,FloorDiv:$,Mod:z,Pow:X,Neg:q,Pos:J,Compare:Q,CompareOperand:Z,CallExtension:et,CallExtensionAsync:tt,printNodes:n}}(),function(){function t(e,t,n){return function(){var o,s=r(arguments),a=i(arguments);if(s>e.length){o=Array.prototype.slice.call(arguments,0,e.length);for(var l=Array.prototype.slice.call(arguments,o.length,s),c=0;c<l.length;c++)c<t.length&&(a[t[c]]=l[c]);o.push(a)}else if(s<e.length){o=Array.prototype.slice.call(arguments,0,s);for(var c=s;c<e.length;c++){var h=e[c];o.push(a[h]),delete a[h]}o.push(a)}else o=arguments;return n.apply(this,o)}}function n(e){return e.__keywords=!0,e}function i(e){var t=e.length;if(t){var n=e[t-1];if(n&&n.hasOwnProperty("__keywords"))return n}return{}}function r(e){var t=e.length;if(0===t)return 0;var n=e[t-1];return n&&n.hasOwnProperty("__keywords")?t-1:t}function o(e){return"string"!=typeof e?e:void(this.val=e)}function s(e,t){return e instanceof o?new o(t):t.toString()}function a(e){var t=typeof e;return"string"===t?new o(e):"function"!==t?e:function(){var t=e.apply(this,arguments);return"string"==typeof t?new o(t):t}}function l(e,t){return e=void 0!==e&&null!==e?e:"",t&&"string"==typeof e&&(e=d.escape(e)),e}function c(e,t){return e=e||{},"function"==typeof e[t]?function(){return e[t].apply(e,arguments)}:e[t]}function h(e,t,n){if(!e)throw new Error("Unable to call `"+t+"`, which is undefined or falsey");if("function"!=typeof e)throw new Error("Unable to call `"+t+"`, which is not a function");return e.apply(this,n)}function u(e,t,n){var i=t.lookup(n);return void 0!==i&&null!==i?i:e.lookup(n)}function p(e,t,n){return e.lineno?e:new d.TemplateError(e,t,n)}function f(e,t,n,i){if(d.isArray(e)){var r=e.length;d.asyncIter(e,function(e,i,o){switch(t){case 1:n(e,i,r,o);break;case 2:n(e[0],e[1],i,r,o);break;case 3:n(e[0],e[1],e[2],i,r,o);break;default:e.push(i,o),n.apply(this,e)}},i)}else d.asyncFor(e,function(e,t,i,r,o){n(e,t,i,r,o)},i)}function m(e,t,n,i){function r(e,t){a++,s[e]=t,a==o&&i(null,s.join(""))}var o,s,a=0;if(d.isArray(e))if(o=e.length,s=new Array(o),0==o)i(null,"");else for(var l=0;l<e.length;l++){var c=e[l];switch(t){case 1:n(c,l,o,r);break;case 2:n(c[0],c[1],l,o,r);break;case 3:n(c[0],c[1],c[2],l,o,r);break;default:c.push(l,r),n.apply(this,c)}}else{var h=d.keys(e);if(o=h.length,s=new Array(o),0==o)i(null,"");else for(var l=0;l<h.length;l++){var u=h[l];n(u,e[u],l,o,r)}}}var d=e.lib,v=e.object,g=v.extend({init:function(e){this.variables={},this.parent=e},set:function(e,t,n){var i=e.split("."),r=this.variables,o=this;if(n){if(o=this.resolve(i[0]))return void o.set(e,t);o=this}for(var s=0;s<i.length-1;s++){var a=i[s];r[a]||(r[a]={}),r=r[a]}r[i[i.length-1]]=t},get:function(e){var t=this.variables[e];return void 0!==t&&null!==t?t:null},lookup:function(e){var t=this.parent,n=this.variables[e];return void 0!==n&&null!==n?n:t&&t.lookup(e)},resolve:function(e){var t=this.parent,n=this.variables[e];return null!=n?this:t&&t.resolve(e)},push:function(){return new g(this)},pop:function(){return this.parent}});o.prototype=Object.create(String.prototype),o.prototype.valueOf=function(){return this.val},o.prototype.toString=function(){return this.val},e.runtime={Frame:g,makeMacro:t,makeKeywordArgs:n,numArgs:r,suppressValue:l,memberLookup:c,contextOrFrameLookup:u,callWrap:h,handleError:p,isArray:d.isArray,keys:d.keys,SafeString:o,copySafeness:s,markSafe:a,asyncEach:f,asyncAll:m}}(),function(){function t(e,t,n,i){return{type:e,value:t,lineno:n,colno:i}}function n(e){this.str=e,this.index=0,this.len=e.length,this.lineno=0,this.colno=0,this.in_code=!1}var i=(e.lib," \n	\r"),r="()[]{}%*-+/#,:|.<>=!",o="0123456789",s="{%",a="%}",l="{{",c="}}",h="{#",u="#}",p="string",f="whitespace",m="data",d="block-start",v="block-end",g="variable-start",y="variable-end",k="comment",x="left-paren",b="right-paren",E="left-bracket",w="right-bracket",T="left-curly",L="right-curly",_="operator",A="comma",O="colon",S="pipe",N="int",C="float",F="boolean",K="symbol",B="special";n.prototype.nextToken=function(){var e=this.lineno,n=this.colno;if(this.in_code){var B,I=this.current();if(this.is_finished())return null;if('"'==I||"'"==I)return t(p,this.parseString(I),e,n);if(B=this._extract(i))return t(f,B,e,n);if((B=this._extractString(a))||(B=this._extractString("-"+a)))return this.in_code=!1,t(v,B,e,n);if(B=this._extractString(c))return this.in_code=!1,t(y,B,e,n);if(-1!=r.indexOf(I)){this.forward();var R,P=["==","!=","<=",">=","//","**"],M=I+this.current();switch(-1!==P.indexOf(M)&&(this.forward(),I=M),I){case"(":R=x;break;case")":R=b;break;case"[":R=E;break;case"]":R=w;break;case"{":R=T;break;case"}":R=L;break;case",":R=A;break;case":":R=O;break;case"|":R=S;break;default:R=_}return t(R,I,e,n)}if(B=this._extractUntil(i+r),B.match(/^[-+]?[0-9]+$/)){if("."==this.current()){this.forward();var j=this._extract(o);return t(C,B+"."+j,e,n)}return t(N,B,e,n)}if(B.match(/^(true|false)$/))return t(F,B,e,n);if(B)return t(K,B,e,n);throw new Error("Unexpected value while parsing: "+B)}var B,V=s.charAt(0)+l.charAt(0)+h.charAt(0)+u.charAt(0);if(this.is_finished())return null;if((B=this._extractString(s+"-"))||(B=this._extractString(s)))return this.in_code=!0,t(d,B,e,n);if(B=this._extractString(l))return this.in_code=!0,t(g,B,e,n);B="";var D,U=!1;for(this._matches(h)&&(U=!0,B=this._extractString(h));null!==(D=this._extractUntil(V))&&(B+=D,!(this._matches(s)||this._matches(l)||this._matches(h))||U);){if(this._matches(u)){if(!U)throw new Error("unexpected end of comment");B+=this._extractString(u);break}B+=this.current(),this.forward()}if(null===D&&U)throw new Error("expected end of comment, got end of file");return t(U?k:m,B,e,n)},n.prototype.parseString=function(e){this.forward();for(var t=(this.lineno,this.colno,"");!this.is_finished()&&this.current()!=e;){var n=this.current();if("\\"==n){switch(this.forward(),this.current()){case"n":t+="\n";break;case"t":t+="	";break;case"r":t+="\r";break;default:t+=this.current()}this.forward()}else t+=n,this.forward()}return this.forward(),t},n.prototype._matches=function(e){if(this.index+e.length>this.length)return null;var t=this.str.slice(this.index,this.index+e.length);return t==e},n.prototype._extractString=function(e){return this._matches(e)?(this.index+=e.length,e):null},n.prototype._extractUntil=function(e){return this._extractMatching(!0,e||"")},n.prototype._extract=function(e){return this._extractMatching(!1,e)},n.prototype._extractMatching=function(e,t){if(this.is_finished())return null;var n=t.indexOf(this.current());if(e&&-1==n||!e&&-1!=n){var i=this.current();this.forward();for(var r=t.indexOf(this.current());(e&&-1==r||!e&&-1!=r)&&!this.is_finished();)i+=this.current(),this.forward(),r=t.indexOf(this.current());return i}return""},n.prototype.is_finished=function(){return this.index>=this.len},n.prototype.forwardN=function(e){for(var t=0;e>t;t++)this.forward()},n.prototype.forward=function(){this.index++,"\n"==this.previous()?(this.lineno++,this.colno=0):this.colno++},n.prototype.back=function(){if(this.index--,"\n"==this.current()){this.lineno--;var e=this.src.lastIndexOf("\n",this.index-1);this.colno=-1==e?this.index:this.index-e}else this.colno--},n.prototype.current=function(){return this.is_finished()?"":this.str.charAt(this.index)},n.prototype.previous=function(){return this.str.charAt(this.index-1)},e.lexer={lex:function(e){return new n(e)},setTags:function(e){s=e.blockStart||s,a=e.blockEnd||a,l=e.variableStart||l,c=e.variableEnd||c,h=e.commentStart||h,u=e.commentEnd||u},TOKEN_STRING:p,TOKEN_WHITESPACE:f,TOKEN_DATA:m,TOKEN_BLOCK_START:d,TOKEN_BLOCK_END:v,TOKEN_VARIABLE_START:g,TOKEN_VARIABLE_END:y,TOKEN_COMMENT:k,TOKEN_LEFT_PAREN:x,TOKEN_RIGHT_PAREN:b,TOKEN_LEFT_BRACKET:E,TOKEN_RIGHT_BRACKET:w,TOKEN_LEFT_CURLY:T,TOKEN_RIGHT_CURLY:L,TOKEN_OPERATOR:_,TOKEN_COMMA:A,TOKEN_COLON:O,TOKEN_PIPE:S,TOKEN_INT:N,TOKEN_FLOAT:C,TOKEN_BOOLEAN:F,TOKEN_SYMBOL:K,TOKEN_SPECIAL:B}}(),function(){var t=e.lexer,n=e.nodes,i=e.object,r=e.lib,o=i.extend({init:function(e){this.tokens=e,this.peeked=null,this.breakOnBlocks=null,this.dropLeadingWhitespace=!1,this.extensions=[]},nextToken:function(e){var n;if(this.peeked){if(e||this.peeked.type!=t.TOKEN_WHITESPACE)return n=this.peeked,this.peeked=null,n;this.peeked=null}if(n=this.tokens.nextToken(),!e)for(;n&&n.type==t.TOKEN_WHITESPACE;)n=this.tokens.nextToken();return n},peekToken:function(){return this.peeked=this.peeked||this.nextToken(),this.peeked},pushToken:function(e){if(this.peeked)throw new Error("pushToken: can only push one token on between reads");this.peeked=e},fail:function(e,t,n){if((void 0===t||void 0===n)&&this.peekToken()){var i=this.peekToken();t=i.lineno,n=i.colno}throw void 0!==t&&(t+=1),void 0!==n&&(n+=1),new r.TemplateError(e,t,n)},skip:function(e){var t=this.nextToken();return t&&t.type==e?!0:(this.pushToken(t),!1)},expect:function(e){var t=this.nextToken();return t.type!==e&&this.fail("expected "+e+", got "+t.type,t.lineno,t.colno),t},skipValue:function(e,t){var n=this.nextToken();return n&&n.type==e&&n.value==t?!0:(this.pushToken(n),!1)},skipWhitespace:function(){return this.skip(t.TOKEN_WHITESPACE)},skipSymbol:function(e){return this.skipValue(t.TOKEN_SYMBOL,e)},advanceAfterBlockEnd:function(e){if(!e){var n=this.peekToken();n||this.fail("unexpected end of file"),n.type!=t.TOKEN_SYMBOL&&this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"),e=this.nextToken().value}var n=this.nextToken();n&&n.type==t.TOKEN_BLOCK_END?"-"===n.value.charAt(0)&&(this.dropLeadingWhitespace=!0):this.fail("expected block end in "+e+" statement")},advanceAfterVariableEnd:function(){this.skip(t.TOKEN_VARIABLE_END)||this.fail("expected variable end")},parseFor:function(){var e,i,r=this.peekToken();this.skipSymbol("for")?(e=new n.For(r.lineno,r.colno),i="endfor"):this.skipSymbol("asyncEach")?(e=new n.AsyncEach(r.lineno,r.colno),i="endeach"):this.skipSymbol("asyncAll")?(e=new n.AsyncAll(r.lineno,r.colno),i="endall"):this.fail("parseFor: expected for{Async}",r.lineno,r.colno),e.name=this.parsePrimary(),e.name instanceof n.Symbol||this.fail("parseFor: variable name expected for loop");var o=this.peekToken().type;if(o==t.TOKEN_COMMA){var s=e.name;for(e.name=new n.Array(s.lineno,s.colno),e.name.addChild(s);this.skip(t.TOKEN_COMMA);){var a=this.parsePrimary();e.name.addChild(a)}}return this.skipSymbol("in")||this.fail('parseFor: expected "in" keyword for loop',r.lineno,r.colno),e.arr=this.parseExpression(),this.advanceAfterBlockEnd(r.value),e.body=this.parseUntilBlocks(i),this.advanceAfterBlockEnd(),e},parseMacro:function(){var e=this.peekToken();this.skipSymbol("macro")||this.fail("expected macro");var t=this.parsePrimary(!0),i=this.parseSignature(),r=new n.Macro(e.lineno,e.colno,t,i);return this.advanceAfterBlockEnd(e.value),r.body=this.parseUntilBlocks("endmacro"),this.advanceAfterBlockEnd(),r},parseImport:function(){var e=this.peekToken();this.skipSymbol("import")||this.fail("parseImport: expected import",e.lineno,e.colno);var t=this.parseExpression();this.skipSymbol("as")||this.fail('parseImport: expected "as" keyword',e.lineno,e.colno);var i=this.parsePrimary(),r=new n.Import(e.lineno,e.colno,t,i);return this.advanceAfterBlockEnd(e.value),r},parseFrom:function(){var e=this.peekToken();this.skipSymbol("from")||this.fail("parseFrom: expected from");var i=this.parsePrimary(),r=new n.FromImport(e.lineno,e.colno,i,new n.NodeList);this.skipSymbol("import")||this.fail("parseFrom: expected import",e.lineno,e.colno);for(var o=r.names;;){var s=this.peekToken();if(s.type==t.TOKEN_BLOCK_END){o.children.length||this.fail("parseFrom: Expected at least one import name",e.lineno,e.colno),"-"==s.value.charAt(0)&&(this.dropLeadingWhitespace=!0),this.nextToken();break}o.children.length>0&&!this.skip(t.TOKEN_COMMA)&&this.fail("parseFrom: expected comma",e.lineno,e.colno);var a=this.parsePrimary();if("_"==a.value.charAt(0)&&this.fail("parseFrom: names starting with an underscore cannot be imported",a.lineno,a.colno),this.skipSymbol("as")){var l=this.parsePrimary();o.addChild(new n.Pair(a.lineno,a.colno,a,l))}else o.addChild(a)}return r},parseBlock:function(){var e=this.peekToken();this.skipSymbol("block")||this.fail("parseBlock: expected block",e.lineno,e.colno);var t=new n.Block(e.lineno,e.colno);return t.name=this.parsePrimary(),t.name instanceof n.Symbol||this.fail("parseBlock: variable name expected",e.lineno,e.colno),this.advanceAfterBlockEnd(e.value),t.body=this.parseUntilBlocks("endblock"),this.peekToken()||this.fail("parseBlock: expected endblock, got end of file"),this.advanceAfterBlockEnd(),t},parseTemplateRef:function(e,t){var n=this.peekToken();this.skipSymbol(e)||this.fail("parseTemplateRef: expected "+e);var i=new t(n.lineno,n.colno);return i.template=this.parseExpression(),this.advanceAfterBlockEnd(n.value),i},parseExtends:function(){return this.parseTemplateRef("extends",n.Extends)},parseInclude:function(){return this.parseTemplateRef("include",n.Include)},parseIf:function(){var e,t=this.peekToken();this.skipSymbol("if")||this.skipSymbol("elif")?e=new n.If(t.lineno,t.colno):this.skipSymbol("ifAsync")?e=new n.IfAsync(t.lineno,t.colno):this.fail("parseIf: expected if or elif",t.lineno,t.colno),e.cond=this.parseExpression(),this.advanceAfterBlockEnd(t.value),e.body=this.parseUntilBlocks("elif","else","endif");var i=this.peekToken();switch(i&&i.value){case"elif":e.else_=this.parseIf();break;case"else":this.advanceAfterBlockEnd(),e.else_=this.parseUntilBlocks("endif"),this.advanceAfterBlockEnd();break;case"endif":e.else_=null,this.advanceAfterBlockEnd();break;default:this.fail("parseIf: expected endif, else, or endif, got end of file")}return e},parseSet:function(){var e=this.peekToken();this.skipSymbol("set")||this.fail("parseSet: expected set",e.lineno,e.colno);for(var i,r=new n.Set(e.lineno,e.colno,[]);(i=this.parsePrimary())&&(r.targets.push(i),this.skip(t.TOKEN_COMMA)););return this.skipValue(t.TOKEN_OPERATOR,"=")||this.fail("parseSet: expected = in set tag",e.lineno,e.colno),r.value=this.parseExpression(),this.advanceAfterBlockEnd(e.value),r},parseStatement:function(){var e,i=this.peekToken();if(i.type!=t.TOKEN_SYMBOL&&this.fail("tag name expected",i.lineno,i.colno),this.breakOnBlocks&&-1!==this.breakOnBlocks.indexOf(i.value))return null;switch(i.value){case"raw":return this.parseRaw();case"if":case"ifAsync":return this.parseIf();case"for":case"asyncEach":case"asyncAll":return this.parseFor();case"block":return this.parseBlock();case"extends":return this.parseExtends();case"include":return this.parseInclude();case"set":return this.parseSet();case"macro":return this.parseMacro();case"import":return this.parseImport();case"from":return this.parseFrom();default:if(this.extensions.length)for(var r=0;r<this.extensions.length;r++){var o=this.extensions[r];if(-1!==(o.tags||[]).indexOf(i.value))return o.parse(this,n,t)}this.fail("unknown block tag: "+i.value,i.lineno,i.colno)}return e},parseRaw:function(){this.advanceAfterBlockEnd();for(var e="",i=this.peekToken();;){var r=this.nextToken(!0);if(r||this.fail("expected endraw, got end of file"),r.type==t.TOKEN_BLOCK_START){var o=null,s=this.nextToken(!0);if(s.type==t.TOKEN_WHITESPACE&&(o=s,s=this.nextToken()),s.type==t.TOKEN_SYMBOL&&"endraw"==s.value){this.advanceAfterBlockEnd(s.value);break}e+=r.value,o&&(e+=o.value),e+=s.value}else e+=r.type===t.TOKEN_STRING?'"'+r.value+'"':r.value}var a=new n.Output(i.lineno,i.colno,[new n.TemplateData(i.lineno,i.colno,e)]);return a},parsePostfix:function(e){for(var i=this.peekToken();i;){if(i.type==t.TOKEN_LEFT_PAREN)e=new n.FunCall(i.lineno,i.colno,e,this.parseSignature());else if(i.type==t.TOKEN_LEFT_BRACKET){var r=this.parseAggregate();r.children.length>1&&this.fail("invalid index"),e=new n.LookupVal(i.lineno,i.colno,e,r.children[0])}else{if(i.type!=t.TOKEN_OPERATOR||"."!=i.value)break;this.nextToken();var o=this.nextToken();o.type!=t.TOKEN_SYMBOL&&this.fail("expected name as lookup value, got "+o.value,o.lineno,o.colno);var r=new n.Literal(o.lineno,o.colno,o.value);e=new n.LookupVal(i.lineno,i.colno,e,r)}i=this.peekToken()}return e},parseExpression:function(){var e=this.parseInlineIf();return e},parseInlineIf:function(){var e=this.parseOr();if(this.skipSymbol("if")){var t=this.parseOr(),i=e;e=new n.InlineIf(e.lineno,e.colno),e.body=i,e.cond=t,e.else_=this.skipSymbol("else")?this.parseOr():null}return e},parseOr:function(){for(var e=this.parseAnd();this.skipSymbol("or");){var t=this.parseAnd();e=new n.Or(e.lineno,e.colno,e,t)}return e},parseAnd:function(){for(var e=this.parseNot();this.skipSymbol("and");){var t=this.parseNot();e=new n.And(e.lineno,e.colno,e,t)}return e},parseNot:function(){var e=this.peekToken();return this.skipSymbol("not")?new n.Not(e.lineno,e.colno,this.parseNot()):this.parseCompare()},parseCompare:function(){for(var e=["==","!=","<",">","<=",">="],i=this.parseAdd(),r=[];;){var o=this.nextToken();if(!o)break;if(-1!==e.indexOf(o.value))r.push(new n.CompareOperand(o.lineno,o.colno,this.parseAdd(),o.value));else if(o.type==t.TOKEN_SYMBOL&&"in"==o.value)r.push(new n.CompareOperand(o.lineno,o.colno,this.parseAdd(),"in"));else{if(o.type!=t.TOKEN_SYMBOL||"not"!=o.value||!this.skipSymbol("in")){this.pushToken(o);break}r.push(new n.CompareOperand(o.lineno,o.colno,this.parseAdd(),"notin"))}}return r.length?new n.Compare(r[0].lineno,r[0].colno,i,r):i},parseAdd:function(){for(var e=this.parseSub();this.skipValue(t.TOKEN_OPERATOR,"+");){var i=this.parseSub();e=new n.Add(e.lineno,e.colno,e,i)}return e},parseSub:function(){for(var e=this.parseMul();this.skipValue(t.TOKEN_OPERATOR,"-");){var i=this.parseMul();e=new n.Sub(e.lineno,e.colno,e,i)}return e},parseMul:function(){for(var e=this.parseDiv();this.skipValue(t.TOKEN_OPERATOR,"*");){var i=this.parseDiv();e=new n.Mul(e.lineno,e.colno,e,i)}return e},parseDiv:function(){for(var e=this.parseFloorDiv();this.skipValue(t.TOKEN_OPERATOR,"/");){var i=this.parseFloorDiv();e=new n.Div(e.lineno,e.colno,e,i)}return e},parseFloorDiv:function(){for(var e=this.parseMod();this.skipValue(t.TOKEN_OPERATOR,"//");){var i=this.parseMod();e=new n.FloorDiv(e.lineno,e.colno,e,i)}return e},parseMod:function(){for(var e=this.parsePow();this.skipValue(t.TOKEN_OPERATOR,"%");){var i=this.parsePow();e=new n.Mod(e.lineno,e.colno,e,i)}return e},parsePow:function(){for(var e=this.parseUnary();this.skipValue(t.TOKEN_OPERATOR,"**");){var i=this.parseUnary();e=new n.Pow(e.lineno,e.colno,e,i)}return e},parseUnary:function(e){var i,r=this.peekToken();return i=this.skipValue(t.TOKEN_OPERATOR,"-")?new n.Neg(r.lineno,r.colno,this.parseUnary(!0)):this.skipValue(t.TOKEN_OPERATOR,"+")?new n.Pos(r.lineno,r.colno,this.parseUnary(!0)):this.parsePrimary(),e||(i=this.parseFilter(i)),i},parsePrimary:function(e){var i=this.nextToken(),r=null,o=null;return i?i.type==t.TOKEN_STRING?r=i.value:i.type==t.TOKEN_INT?r=parseInt(i.value,10):i.type==t.TOKEN_FLOAT?r=parseFloat(i.value):i.type==t.TOKEN_BOOLEAN&&("true"==i.value?r=!0:"false"==i.value?r=!1:this.fail("invalid boolean: "+i.val,i.lineno,i.colno)):this.fail("expected expression, got end of file"),null!==r?o=new n.Literal(i.lineno,i.colno,r):i.type==t.TOKEN_SYMBOL?(o=new n.Symbol(i.lineno,i.colno,i.value),e||(o=this.parsePostfix(o))):(this.pushToken(i),o=this.parseAggregate()),o?o:void this.fail("unexpected token: "+i.value,i.lineno,i.colno)},parseFilter:function(e){for(;this.skip(t.TOKEN_PIPE);){for(var i=this.expect(t.TOKEN_SYMBOL),r=i.value;this.skipValue(t.TOKEN_OPERATOR,".");)r+="."+this.expect(t.TOKEN_SYMBOL).value;if(e=new n.Filter(i.lineno,i.colno,new n.Symbol(i.lineno,i.colno,r),new n.NodeList(i.lineno,i.colno,[e])),this.peekToken().type==t.TOKEN_LEFT_PAREN){var o=this.parsePostfix(e);e.args.children=e.args.children.concat(o.args.children)}}return e},parseAggregate:function(){var e,i=this.nextToken();switch(i.type){case t.TOKEN_LEFT_PAREN:e=new n.Group(i.lineno,i.colno);break;case t.TOKEN_LEFT_BRACKET:e=new n.Array(i.lineno,i.colno);break;case t.TOKEN_LEFT_CURLY:e=new n.Dict(i.lineno,i.colno);break;default:return null}for(;;){var r=this.peekToken().type;if(r==t.TOKEN_RIGHT_PAREN||r==t.TOKEN_RIGHT_BRACKET||r==t.TOKEN_RIGHT_CURLY){this.nextToken();break}if(e.children.length>0&&(this.skip(t.TOKEN_COMMA)||this.fail("parseAggregate: expected comma after expression",i.lineno,i.colno)),e instanceof n.Dict){var o=this.parsePrimary();this.skip(t.TOKEN_COLON)||this.fail("parseAggregate: expected colon after dict key",i.lineno,i.colno);var s=this.parseExpression();e.addChild(new n.Pair(o.lineno,o.colno,o,s))}else{var a=this.parseExpression();e.addChild(a)}}return e},parseSignature:function(e,i){var r=this.peekToken();if(!i&&r.type!=t.TOKEN_LEFT_PAREN){if(e)return null;this.fail("expected arguments",r.lineno,r.colno)}r.type==t.TOKEN_LEFT_PAREN&&(r=this.nextToken());for(var o=new n.NodeList(r.lineno,r.colno),s=new n.KeywordArgs(r.lineno,r.colno),a=!1;;){if(r=this.peekToken(),!i&&r.type==t.TOKEN_RIGHT_PAREN){this.nextToken();break}if(i&&r.type==t.TOKEN_BLOCK_END)break;if(a&&!this.skip(t.TOKEN_COMMA))this.fail("parseSignature: expected comma after expression",r.lineno,r.colno);else{var l=this.parseExpression();this.skipValue(t.TOKEN_OPERATOR,"=")?s.addChild(new n.Pair(l.lineno,l.colno,l,this.parseExpression())):o.addChild(l)}a=!0}return s.children.length&&o.addChild(s),o},parseUntilBlocks:function(){var e=this.breakOnBlocks;this.breakOnBlocks=r.toArray(arguments);var t=this.parse();return this.breakOnBlocks=e,t},parseNodes:function(){for(var e,i=[];e=this.nextToken();)if(e.type==t.TOKEN_DATA){var r=e.value,o=this.peekToken(),s=o&&o.value;this.dropLeadingWhitespace&&(r=r.replace(/^\s*/,""),this.dropLeadingWhitespace=!1),o&&o.type==t.TOKEN_BLOCK_START&&"-"==s.charAt(s.length-1)&&(r=r.replace(/\s*$/,"")),i.push(new n.Output(e.lineno,e.colno,[new n.TemplateData(e.lineno,e.colno,r)]))}else if(e.type==t.TOKEN_BLOCK_START){var a=this.parseStatement();if(!a)break;i.push(a)}else if(e.type==t.TOKEN_VARIABLE_START){var l=this.parseExpression();this.advanceAfterVariableEnd(),i.push(new n.Output(e.lineno,e.colno,[l]))}else e.type!=t.TOKEN_COMMENT&&this.fail("Unexpected token at top-level: "+e.type,e.lineno,e.colno);return i},parse:function(){return new n.NodeList(0,0,this.parseNodes())},parseAsRoot:function(){return new n.Root(0,0,this.parseNodes())}});e.parser={parse:function(e,n){var i=new o(t.lex(e));return void 0!==n&&(i.extensions=n),i.parseAsRoot()}}}(),function(){function t(){return"hole_"+p++}function n(e,t){for(var n=null,i=0;i<e.length;i++){var r=t(e[i]);r!==e[i]&&(n||(n=e.slice()),n[i]=r)}return n||e}function i(e,t,r){if(!(e instanceof u.Node))return e;if(!r){var o=t(e);if(o&&o!==e)return o}if(e instanceof u.NodeList){var s=n(e.children,function(e){return i(e,t,r)});s!==e.children&&(e=new u[e.typename](e.lineno,e.colno,s))}else if(e instanceof u.CallExtension){var a=i(e.args,t,r),l=n(e.contentArgs,function(e){return i(e,t,r)});(a!==e.args||l!==e.contentArgs)&&(e=new u[e.typename](e.extName,e.prop,a,l))}else{var c=e.fields.map(function(t){return e[t]}),h=n(c,function(e){return i(e,t,r)});h!==c&&(e=new u[e.typename](e.lineno,e.colno),h.forEach(function(t,n){e[e.fields[n]]=t}))}return r?t(e)||e:e}function r(e,t){return i(e,t,!0)}function o(e,n,i){var o=[],s=r(i?e[i]:e,function(e){if(e instanceof u.Block)return e;if(e instanceof u.Filter&&-1!==n.indexOf(e.name.value)||e instanceof u.CallExtensionAsync){var i=new u.Symbol(e.lineno,e.colno,t());return o.push(new u.FilterAsync(e.lineno,e.colno,e.name,e.args,i)),i}});return i?e[i]=s:e=s,o.length?(o.push(e),new u.NodeList(e.lineno,e.colno,o)):e}function s(e,t){return r(e,function(e){return e instanceof u.Output?o(e,t):e instanceof u.For?o(e,t,"arr"):e instanceof u.If?o(e,t,"cond"):e instanceof u.CallExtension?o(e,t,"args"):void 0})}function a(e){return i(e,function(e){if(e instanceof u.Block){var n=!1,r=t();e.body=i(e.body,function(e){return e instanceof u.FunCall&&"super"==e.name.value?(n=!0,new u.Symbol(e.lineno,e.colno,r)):void 0}),n&&e.body.children.unshift(new u.Super(0,0,e.name,new u.Symbol(0,0,r)))}})}function l(e){return r(e,function(e){if(e instanceof u.If||e instanceof u.For){var t=!1;if(i(e,function(e){return e instanceof u.FilterAsync||e instanceof u.IfAsync||e instanceof u.AsyncEach||e instanceof u.AsyncAll||e instanceof u.CallExtensionAsync?(t=!0,e):void 0}),t){if(e instanceof u.If)return new u.IfAsync(e.lineno,e.colno,e.cond,e.body,e.else_);if(e instanceof u.For)return new u.AsyncEach(e.lineno,e.colno,e.arr,e.name,e.body)}}})}function c(e,t){return l(a(s(e,t)))}function h(e,t){return c(e,t||[])}var u=e.nodes,p=0;e.transformer={transform:h}}(),function(){function t(e){return function(t,n){this.compile(t.left,n),this.emit(e),this.compile(t.right,n)}}var n=e.lib,i=e.parser,r=e.transformer,o=e.nodes,s=e.object,a=e.runtime.Frame,l={"==":"==","!=":"!=","<":"<",">":">","<=":"<=",">=":">="},c=s.extend({init:function(){this.codebuf=[],this.lastId=0,this.buffer=null,this.bufferStack=[],this.isChild=!1,this.scopeClosers=""},fail:function(e,t,i){throw void 0!==t&&(t+=1),void 0!==i&&(i+=1),new n.TemplateError(e,t,i)},pushBufferId:function(e){this.bufferStack.push(this.buffer),this.buffer=e,this.emit("var "+this.buffer+' = "";')
},popBufferId:function(){this.buffer=this.bufferStack.pop()},emit:function(e){this.codebuf.push(e)},emitLine:function(e){this.emit(e+"\n")},emitLines:function(){n.each(n.toArray(arguments),function(e){this.emitLine(e)},this)},emitFuncBegin:function(e){this.buffer="output",this.scopeClosers="",this.emitLine("function "+e+"(env, context, frame, runtime, cb) {"),this.emitLine("var lineno = null;"),this.emitLine("var colno = null;"),this.emitLine("var "+this.buffer+' = "";'),this.emitLine("try {")},emitFuncEnd:function(e){e||this.emitLine("cb(null, "+this.buffer+");"),this.closeScopeLevels(),this.emitLine("} catch (e) {"),this.emitLine("  cb(runtime.handleError(e, lineno, colno));"),this.emitLine("}"),this.emitLine("}"),this.buffer=null},addScopeLevel:function(){this.scopeClosers+="})"},closeScopeLevels:function(){this.emitLine(this.scopeClosers+";"),this.scopeClosers=""},withScopedSyntax:function(e){var t=this.scopeClosers;this.scopeClosers="",e.call(this),this.closeScopeLevels(),this.scopeClosers=t},makeCallback:function(e){var t=this.tmpid();return"function("+t+(e?","+e:"")+") {\nif("+t+") { cb("+t+"); return; }"},tmpid:function(){return this.lastId++,"t_"+this.lastId},_bufferAppend:function(e){this.emit(this.buffer+" += runtime.suppressValue("),e.call(this),this.emit(", env.autoesc);\n")},_compileChildren:function(e,t){for(var n=e.children,i=0,r=n.length;r>i;i++)this.compile(n[i],t)},_compileAggregate:function(e,t,n,i){n&&this.emit(n);for(var r=0;r<e.children.length;r++)r>0&&this.emit(","),this.compile(e.children[r],t);i&&this.emit(i)},_compileExpression:function(e,t){this.assertType(e,o.Literal,o.Symbol,o.Group,o.Array,o.Dict,o.FunCall,o.Filter,o.LookupVal,o.Compare,o.InlineIf,o.And,o.Or,o.Not,o.Add,o.Sub,o.Mul,o.Div,o.FloorDiv,o.Mod,o.Pow,o.Neg,o.Pos,o.Compare,o.NodeList),this.compile(e,t)},assertType:function(e){for(var t=n.toArray(arguments).slice(1),i=!1,r=0;r<t.length;r++)e instanceof t[r]&&(i=!0);i||this.fail("assertType: invalid type: "+e.typename,e.lineno,e.colno)},compileCallExtension:function(e,t,i){var r=(e.extName,e.args),s=e.contentArgs,a="boolean"==typeof e.autoescape?e.autoescape:!0;if(i||this.emit(this.buffer+" += runtime.suppressValue("),this.emit('env.getExtension("'+e.extName+'")["'+e.prop+'"]('),this.emit("context"),(r||s)&&this.emit(","),r&&(r instanceof o.NodeList||this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"),n.each(r.children,function(e,n){this._compileExpression(e,t),(n!=r.children.length-1||s.length)&&this.emit(",")},this)),s.length&&n.each(s,function(e,n){if(n>0&&this.emit(","),e){var i=this.tmpid();this.emitLine("function(cb) {"),this.emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}"),this.pushBufferId(i),this.withScopedSyntax(function(){this.compile(e,t),this.emitLine("cb(null, "+i+");")}),this.popBufferId(),this.emitLine("return "+i+";"),this.emitLine("}")}else this.emit("null")},this),i){var l=this.tmpid();this.emitLine(", "+this.makeCallback(l)),this.emitLine(this.buffer+" += runtime.suppressValue("+l+", "+a+" && env.autoesc);"),this.addScopeLevel()}else this.emit(")"),this.emit(", "+a+" && env.autoesc);\n")},compileCallExtensionAsync:function(e,t){this.compileCallExtension(e,t,!0)},compileNodeList:function(e,t){this._compileChildren(e,t)},compileLiteral:function(e){if("string"==typeof e.value){var t=e.value.replace(/\\/g,"\\\\");t=t.replace(/"/g,'\\"'),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/\t/g,"\\t"),this.emit('"'+t+'"')}else this.emit(e.value.toString())},compileSymbol:function(e,t){var n,i=e.value;this.emit((n=t.lookup(i))?n:'runtime.contextOrFrameLookup(context, frame, "'+i+'")')},compileGroup:function(e,t){this._compileAggregate(e,t,"(",")")},compileArray:function(e,t){this._compileAggregate(e,t,"[","]")},compileDict:function(e,t){this._compileAggregate(e,t,"{","}")},compilePair:function(e,t){var n=e.key,i=e.value;n instanceof o.Symbol?n=new o.Literal(n.lineno,n.colno,n.value):n instanceof o.Literal&&"string"==typeof n.value||this.fail("compilePair: Dict keys must be strings or names",n.lineno,n.colno),this.compile(n,t),this.emit(": "),this._compileExpression(i,t)},compileInlineIf:function(e,t){this.emit("("),this.compile(e.cond,t),this.emit("?"),this.compile(e.body,t),this.emit(":"),null!==e.else_?this.compile(e.else_,t):this.emit('""'),this.emit(")")},compileOr:t(" || "),compileAnd:t(" && "),compileAdd:t(" + "),compileSub:t(" - "),compileMul:t(" * "),compileDiv:t(" / "),compileMod:t(" % "),compileNot:function(e,t){this.emit("!"),this.compile(e.target,t)},compileFloorDiv:function(e,t){this.emit("Math.floor("),this.compile(e.left,t),this.emit(" / "),this.compile(e.right,t),this.emit(")")},compilePow:function(e,t){this.emit("Math.pow("),this.compile(e.left,t),this.emit(", "),this.compile(e.right,t),this.emit(")")},compileNeg:function(e,t){this.emit("-"),this.compile(e.target,t)},compilePos:function(e,t){this.emit("+"),this.compile(e.target,t)},compileCompare:function(e,t){this.compile(e.expr,t);for(var n=0;n<e.ops.length;n++){var i=e.ops[n];this.emit(" "+l[i.type]+" "),this.compile(i.expr,t)}},compileLookupVal:function(e,t){this.emit("runtime.memberLookup(("),this._compileExpression(e.target,t),this.emit("),"),this._compileExpression(e.val,t),this.emit(", env.autoesc)")},_getNodeName:function(e){switch(e.typename){case"Symbol":return e.value;case"FunCall":return"the return value of ("+this._getNodeName(e.name)+")";case"LookupVal":return this._getNodeName(e.target)+'["'+this._getNodeName(e.val)+'"]';case"Literal":return e.value.toString().substr(0,10);default:return"--expression--"}},compileFunCall:function(e,t){this.emit("(lineno = "+e.lineno+", colno = "+e.colno+", "),this.emit("runtime.callWrap("),this._compileExpression(e.name,t),this.emit(', "'+this._getNodeName(e.name).replace(/"/g,'\\"')+'", '),this._compileAggregate(e.args,t,"[","])"),this.emit(")")},compileFilter:function(e,t){var n=e.name;this.assertType(n,o.Symbol),this.emit('env.getFilter("'+n.value+'").call(context, '),this._compileAggregate(e.args,t),this.emit(")")},compileFilterAsync:function(e,t){var n=e.name;this.assertType(n,o.Symbol);var i=e.symbol.value;t.set(i,i),this.emit('env.getFilter("'+n.value+'").call(context, '),this._compileAggregate(e.args,t),this.emitLine(", "+this.makeCallback(i)),this.addScopeLevel()},compileKeywordArgs:function(e,t){var i=[];n.each(e.children,function(e){i.push(e.key.value)}),this.emit("runtime.makeKeywordArgs("),this.compileDict(e,t),this.emit(")")},compileSet:function(e,t){var i=[];n.each(e.targets,function(e){var n=e.value,r=t.lookup(n);null==r&&(r=this.tmpid(),this.emitLine("var "+r+";")),i.push(r)},this),this.emit(i.join(" = ")+" = "),this._compileExpression(e.value,t),this.emitLine(";"),n.each(e.targets,function(e,t){var n=i[t],r=e.value;this.emitLine('frame.set("'+r+'", '+n+", true);"),this.emitLine("if(!frame.parent) {"),this.emitLine('context.setVariable("'+r+'", '+n+");"),"_"!=r.charAt(0)&&this.emitLine('context.addExport("'+r+'");'),this.emitLine("}")},this)},compileIf:function(e,t,n){this.emit("if("),this._compileExpression(e.cond,t),this.emitLine(") {"),this.withScopedSyntax(function(){this.compile(e.body,t),n&&this.emit("cb()")}),e.else_?(this.emitLine("}\nelse {"),this.withScopedSyntax(function(){this.compile(e.else_,t),n&&this.emit("cb()")})):n&&(this.emitLine("}\nelse {"),this.emit("cb()")),this.emitLine("}")},compileIfAsync:function(e,t){this.emit("(function(cb) {"),this.compileIf(e,t,!0),this.emit("})(function() {"),this.addScopeLevel()},scanLoop:function(e){var t={};return e.iterFields(function(e){var i=e.findAll(o.LookupVal);n.each(i,function(e){e.target instanceof o.Symbol&&"loop"==e.target.value&&e.val instanceof o.Literal&&(t[e.val.value]=!0)})}),t},emitLoopBindings:function(e,t,n,i,r){r=r||n+".length";var o={index:i+" + 1",index0:i,revindex:r+" - "+i,revindex0:r+" - "+i+" - 1",first:i+" === 0",last:i+" === "+r+" - 1",length:r};for(var s in o)s in t&&this.emitLine('frame.set("loop.'+s+'", '+o[s]+");")},compileFor:function(e,t){var n=this.tmpid(),i=this.tmpid(),r=this.tmpid(),s=this.scanLoop(e);if(t=t.push(),this.emitLine("frame = frame.push();"),this.emit("var "+r+" = "),this._compileExpression(e.arr,t),this.emitLine(";"),this.emit("if("+r+") {"),e.name instanceof o.Array){this.emitLine("var "+n+";"),this.emitLine("if(runtime.isArray("+r+")) {"),this.emitLine("for("+n+"=0; "+n+" < "+r+".length; "+n+"++) {");for(var a=0;a<e.name.children.length;a++){var l=this.tmpid();this.emitLine("var "+l+" = "+r+"["+n+"]["+a+"]"),this.emitLine('frame.set("'+e.name.children[a].value+'", '+r+"["+n+"]["+a+"]);"),t.set(e.name.children[a].value,l)}this.emitLoopBindings(e,s,r,n),this.withScopedSyntax(function(){this.compile(e.body,t)}),this.emitLine("}"),this.emitLine("} else {");var c=e.name.children[0],h=e.name.children[1],u=this.tmpid(),p=this.tmpid();t.set(c.value,u),t.set(h.value,p),this.emitLine(n+" = -1;"),(s.revindex||s.revindex0||s.last||s.length)&&this.emitLine("var "+i+" = runtime.keys("+r+").length;"),this.emitLine("for(var "+u+" in "+r+") {"),this.emitLine(n+"++;"),this.emitLine("var "+p+" = "+r+"["+u+"];"),this.emitLine('frame.set("'+c.value+'", '+u+");"),this.emitLine('frame.set("'+h.value+'", '+p+");"),this.emitLoopBindings(e,s,r,n,i),this.withScopedSyntax(function(){this.compile(e.body,t)}),this.emitLine("}"),this.emitLine("}")}else{var p=this.tmpid();t.set(e.name.value,p),this.emitLine("for(var "+n+"=0; "+n+" < "+r+".length; "+n+"++) {"),this.emitLine("var "+p+" = "+r+"["+n+"];"),this.emitLine('frame.set("'+e.name.value+'", '+p+");"),this.emitLoopBindings(e,s,r,n),this.withScopedSyntax(function(){this.compile(e.body,t)}),this.emitLine("}")}this.emitLine("}"),this.emitLine("frame = frame.pop();")},_compileAsyncLoop:function(e,t,i){var r=this.tmpid(),s=this.tmpid(),a=this.tmpid(),l=this.scanLoop(e),c=i?"asyncAll":"asyncEach";if(t=t.push(),this.emitLine("frame = frame.push();"),this.emit("var "+a+" = "),this._compileExpression(e.arr,t),this.emitLine(";"),e.name instanceof o.Array)this.emit("runtime."+c+"("+a+", "+e.name.children.length+", function("),n.each(e.name.children,function(e){this.emit(e.value+",")},this),this.emit(r+","+s+",next) {"),n.each(e.name.children,function(e){var n=e.value;t.set(n,n),this.emitLine('frame.set("'+n+'", '+n+");")},this);else{var h=e.name.value;this.emitLine("runtime."+c+"("+a+", 1, function("+h+", "+r+", "+s+",next) {"),this.emitLine('frame.set("'+h+'", '+h+");"),t.set(h,h)}this.emitLoopBindings(e,l,a,r,s),this.withScopedSyntax(function(){var n;i&&(n=this.tmpid(),this.pushBufferId(n)),this.compile(e.body,t),this.emitLine("next("+r+(n?","+n:"")+");"),i&&this.popBufferId()});var u=this.tmpid();this.emitLine("}, "+this.makeCallback(u)),this.addScopeLevel(),i&&this.emitLine(this.buffer+" += "+u+";"),this.emitLine("frame = frame.pop();")},compileAsyncEach:function(e,t){this._compileAsyncLoop(e,t)},compileAsyncAll:function(e,t){this._compileAsyncLoop(e,t,!0)},_emitMacroBegin:function(e,t){var i=[],r=null,s="macro_"+this.tmpid();n.each(e.args.children,function(t,n){n===e.args.children.length-1&&t instanceof o.Dict?r=t:(this.assertType(t,o.Symbol),i.push(t))},this);var a=n.map(i,function(e){return"l_"+e.value});a.push("kwargs");var l=n.map(i,function(e){return'"'+e.value+'"'}),c=n.map(r&&r.children||[],function(e){return'"'+e.key.value+'"'});return this.emitLines("var "+s+" = runtime.makeMacro(","["+l.join(", ")+"], ","["+c.join(", ")+"], ","function ("+a.join(", ")+") {","frame = frame.push();","kwargs = kwargs || {};"),n.each(i,function(e){this.emitLine('frame.set("'+e.value+'", l_'+e.value+");"),t.set(e.value,"l_"+e.value)},this),r&&n.each(r.children,function(e){var n=e.key.value;this.emit('frame.set("'+n+'", kwargs.hasOwnProperty("'+n+'") ? kwargs["'+n+'"] : '),this._compileExpression(e.value,t),this.emitLine(");")},this),s},_emitMacroEnd:function(e){this.emitLine("frame = frame.pop();"),this.emitLine("return new runtime.SafeString("+e+");"),this.emitLine("});")},compileMacro:function(e,t){t=t.push();var n=this._emitMacroBegin(e,t),i=this.tmpid();this.pushBufferId(i),this.withScopedSyntax(function(){this.compile(e.body,t)}),this._emitMacroEnd(i),this.popBufferId();var r=e.name.value;t=t.pop(),t.set(r,n),t.parent?this.emitLine('frame.set("'+r+'", '+n+");"):("_"!=e.name.value.charAt(0)&&this.emitLine('context.addExport("'+r+'");'),this.emitLine('context.setVariable("'+r+'", '+n+");"))},compileImport:function(e,t){var n=this.tmpid(),i=e.target.value;this.emit("env.getTemplate("),this._compileExpression(e.template,t),this.emitLine(", "+this.makeCallback(n)),this.addScopeLevel(),this.emitLine(n+".getExported("+this.makeCallback(n)),this.addScopeLevel(),t.set(i,n),this.emitLine(t.parent?'frame.set("'+i+'", '+n+");":'context.setVariable("'+i+'", '+n+");")},compileFromImport:function(e,t){var i=this.tmpid();this.emit("env.getTemplate("),this._compileExpression(e.template,t),this.emitLine(", "+this.makeCallback(i)),this.addScopeLevel(),this.emitLine(i+".getExported("+this.makeCallback(i)),this.addScopeLevel(),n.each(e.names.children,function(e){var n,r,s=this.tmpid();e instanceof o.Pair?(n=e.key.value,r=e.value.value):(n=e.value,r=n),this.emitLine("if("+i+'.hasOwnProperty("'+n+'")) {'),this.emitLine("var "+s+" = "+i+"."+n+";"),this.emitLine("} else {"),this.emitLine("cb(new Error(\"cannot import '"+n+"'\")); return;"),this.emitLine("}"),t.set(r,s),this.emitLine(t.parent?'frame.set("'+r+'", '+s+");":'context.setVariable("'+r+'", '+s+");")},this)},compileBlock:function(e){if(!this.isChild){var t=this.tmpid();this.emitLine('context.getBlock("'+e.name.value+'")(env, context, frame, runtime, '+this.makeCallback(t)),this.emitLine(this.buffer+" += "+t+";"),this.addScopeLevel()}},compileSuper:function(e,t){var n=e.blockName.value,i=e.symbol.value;this.emitLine('context.getSuper(env, "'+n+'", b_'+n+", frame, runtime, "+this.makeCallback(i)),this.emitLine(i+" = runtime.markSafe("+i+");"),this.addScopeLevel(),t.set(i,i)},compileExtends:function(e,t){this.isChild&&this.fail("compileExtends: cannot extend multiple times",e.template.lineno,e.template.colno);var n=this.tmpid();this.emit("env.getTemplate("),this._compileExpression(e.template,t),this.emitLine(", true, "+this.makeCallback("parentTemplate")),this.emitLine("for(var "+n+" in parentTemplate.blocks) {"),this.emitLine("context.addBlock("+n+", parentTemplate.blocks["+n+"]);"),this.emitLine("}"),this.addScopeLevel(),this.isChild=!0},compileInclude:function(e,t){var n=this.tmpid(),i=this.tmpid();this.emit("env.getTemplate("),this._compileExpression(e.template,t),this.emitLine(", "+this.makeCallback(n)),this.addScopeLevel(),this.emitLine(n+".render(context.getVariables(), frame.push(), "+this.makeCallback(i)),this.emitLine(this.buffer+" += "+i),this.addScopeLevel()},compileTemplateData:function(e,t){this.compileLiteral(e,t)},compileOutput:function(e,t){for(var n=e.children,i=0,r=n.length;r>i;i++)n[i]instanceof o.TemplateData?n[i].value&&(this.emit(this.buffer+" += "),this.compileLiteral(n[i],t),this.emitLine(";")):(this.emit(this.buffer+" += runtime.suppressValue("),this.compile(n[i],t),this.emit(", env.autoesc);\n"))},compileRoot:function(e,t){t&&this.fail("compileRoot: root node can't have frame"),t=new a,this.emitFuncBegin("root"),this._compileChildren(e,t),this.isChild&&this.emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"),this.emitFuncEnd(this.isChild),this.isChild=!1;for(var n=e.findAll(o.Block),i=0;i<n.length;i++){var r=n[i],s=r.name.value;this.emitFuncBegin("b_"+s);var l=new a;this.compile(r.body,l),this.emitFuncEnd()}this.emitLine("return {");for(var i=0;i<n.length;i++){var r=n[i],s="b_"+r.name.value;this.emitLine(s+": "+s+",")}this.emitLine("root: root\n};")},compile:function(e,t){var n=this["compile"+e.typename];n?n.call(this,e,t):this.fail("compile: Cannot compile node: "+e.typename,e.lineno,e.colno)},getCode:function(){return this.codebuf.join("")}});e.compiler={compile:function(e,t,n,o){var s=new c;if(n&&n.length)for(var a=0;a<n.length;a++)"preprocess"in n[a]&&(e=n[a].preprocess(e,o));return s.compile(r.transform(i.parse(e,n),t,o)),s.getCode()},Compiler:c}}(),function(){var t=e.lib,n=e.runtime,i={abs:function(e){return Math.abs(e)},batch:function(e,t,n){for(var i=[],r=[],o=0;o<e.length;o++)o%t===0&&r.length&&(i.push(r),r=[]),r.push(e[o]);if(r.length){if(n)for(var o=r.length;t>o;o++)r.push(n);i.push(r)}return i},capitalize:function(e){var t=e.toLowerCase();return n.copySafeness(e,t.charAt(0).toUpperCase()+t.slice(1))},center:function(e,i){if(i=i||80,e.length>=i)return e;var r=i-e.length,o=t.repeat(" ",r/2-r%2),s=t.repeat(" ",r/2);return n.copySafeness(e,o+e+s)},"default":function(e,t){return e?e:t},dictsort:function(e,n,i){if(!t.isObject(e))throw new t.TemplateError("dictsort filter: val must be an object");var r=[];for(var o in e)r.push([o,e[o]]);var s;if(void 0===i||"key"===i)s=0;else{if("value"!==i)throw new t.TemplateError("dictsort filter: You can only sort by either key or value");s=1}return r.sort(function(e,i){var r=e[s],o=i[s];return n||(t.isString(r)&&(r=r.toUpperCase()),t.isString(o)&&(o=o.toUpperCase())),r>o?1:r==o?0:-1}),r},escape:function(e){return"string"==typeof e||e instanceof n.SafeString?t.escape(e):e},safe:function(e){return n.markSafe(e)},first:function(e){return e[0]},groupby:function(e,n){return t.groupBy(e,n)},indent:function(e,i,r){i=i||4;for(var o="",s=e.split("\n"),a=t.repeat(" ",i),l=0;l<s.length;l++)o+=0!=l||r?a+s[l]+"\n":s[l]+"\n";return n.copySafeness(e,o)},join:function(e,n,i){return n=n||"",i&&(e=t.map(e,function(e){return e[i]})),e.join(n)},last:function(e){return e[e.length-1]},length:function(e){return void 0!==e?e.length:0},list:function(e){if(t.isString(e))return e.split("");if(t.isObject(e)){var n=[];if(Object.keys)n=Object.keys(e);else for(var i in e)n.push(i);return t.map(n,function(t){return{key:t,value:e[t]}})}throw new t.TemplateError("list filter: type not iterable")},lower:function(e){return e.toLowerCase()},random:function(e){return e[Math.floor(Math.random()*e.length)]},replace:function(e,t,i,r){var o=e,s=o,a=1;for(o=o.replace(t,i);s!=o&&!(a>=r);)s=o,o=o.replace(t,i),a++;return n.copySafeness(e,o)},reverse:function(e){var r;return r=t.isString(e)?i.list(e):t.map(e,function(e){return e}),r.reverse(),t.isString(e)?n.copySafeness(e,r.join("")):r},round:function(e,t,n){t=t||0;var i,r=Math.pow(10,t);return i="ceil"==n?Math.ceil:"floor"==n?Math.floor:Math.round,i(e*r)/r},slice:function(e,t,n){for(var i=Math.floor(e.length/t),r=e.length%t,o=0,s=[],a=0;t>a;a++){var l=o+a*i;r>a&&o++;var c=o+(a+1)*i,h=e.slice(l,c);n&&a>=r&&h.push(n),s.push(h)}return s},sort:function(e,n,i,r){return e=t.map(e,function(e){return e}),e.sort(function(e,o){var s,a;return r?(s=e[r],a=o[r]):(s=e,a=o),!i&&t.isString(s)&&t.isString(a)&&(s=s.toLowerCase(),a=a.toLowerCase()),a>s?n?1:-1:s>a?n?-1:1:0}),e},string:function(e){return n.copySafeness(e,e)},title:function(e){for(var t=e.split(" "),r=0;r<t.length;r++)t[r]=i.capitalize(t[r]);return n.copySafeness(e,t.join(" "))},trim:function(e){return n.copySafeness(e,e.replace(/^\s*|\s*$/g,""))},truncate:function(e,t,i,r){var o=e;if(t=t||255,e.length<=t)return e;if(i)e=e.substring(0,t);else{var s=e.lastIndexOf(" ",t);-1===s&&(s=t),e=e.substring(0,s)}return e+=void 0!==r&&null!==r?r:"...",n.copySafeness(o,e)},upper:function(e){return e.toUpperCase()},urlencode:function(e){var n=encodeURIComponent;if(t.isString(e))return n(e);var i;if(t.isArray(e))i=e.map(function(e){return n(e[0])+"="+n(e[1])});else{i=[];for(var r in e)e.hasOwnProperty(r)&&i.push(n(r)+"="+n(e[r]))}return i.join("&")},urlize:function(e,t,n){isNaN(t)&&(t=1/0);var i=n===!0?' rel="nofollow"':"",r=/^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,o=/^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,s=/^https?:\/\/.*$/,a=/^www\./,l=/\.(?:org|net|com)(?:\:|\/|$)/,c=e.split(/\s+/).filter(function(e){return e&&e.length}).map(function(e){var n=e.match(r),c=n&&n[1]||e;return s.test(c)?'<a href="'+c+'"'+i+">"+c.substr(0,t)+"</a>":a.test(c)?'<a href="http://'+c+'"'+i+">"+c.substr(0,t)+"</a>":o.test(c)?'<a href="mailto:'+c+'">'+c+"</a>":l.test(c)?'<a href="http://'+c+'"'+i+">"+c.substr(0,t)+"</a>":c});return c.join(" ")},wordcount:function(e){var t=e?e.match(/\w+/g):null;return t?t.length:null},"float":function(e,t){var n=parseFloat(e);return isNaN(n)?t:n},"int":function(e,t){var n=parseInt(e,10);return isNaN(n)?t:n}};i.d=i["default"],i.e=i.escape,e.filters=i}(),function(){function t(e){var t=-1,n=null;return{reset:function(){t=-1,n=null},next:function(){return t++,t>=e.length&&(t=0),n=e[t]}}}function n(e){e=e||",";var t=!0;return function(){var n=t?"":e;return t=!1,n}}var i={range:function(e,t,n){t?n||(n=1):(t=e,e=0,n=1);for(var i=[],r=e;t>r;r+=n)i.push(r);return i},cycler:function(){return t(Array.prototype.slice.call(arguments))},joiner:function(e){return n(e)}};e.globals=i}(),function(){var t=e.object,n=e.lib,i=t.extend({on:function(e,t){this.listeners=this.listeners||{},this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t)},emit:function(e){var t=Array.prototype.slice.call(arguments,1);this.listeners&&this.listeners[e]&&n.each(this.listeners[e],function(e){e.apply(null,t)})}});e.loader=i}(),function(){var t=e.loader,n=t.extend({init:function(e,t){this.precompiled=window.nunjucksPrecompiled||{},this.baseURL=e||"",this.neverUpdate=t},getSource:function(e){if(this.precompiled[e])return{src:{type:"code",obj:this.precompiled[e]},path:e};var t=this.fetch(this.baseURL+"/"+e);return t?{src:t,path:e,noCache:!this.neverUpdate}:null},fetch:function(e){var t,n,i=!0;return window.XMLHttpRequest?t=new XMLHttpRequest:window.ActiveXObject&&(t=new ActiveXObject("Microsoft.XMLHTTP")),t.onreadystatechange=function(){4!==t.readyState||0!==t.status&&200!==t.status||!i||(i=!1,n=t.responseText)},e+=(-1===e.indexOf("?")?"?":"&")+"s="+(new Date).getTime(),t.open("GET",e,!1),t.send(),n}});e["web-loaders"]={WebLoader:n}}(),function(){e.loaders="undefined"==typeof window||window!==this?e["node-loaders"]:e["web-loaders"]}(),function(){var t=e.path,n=e.lib,i=e.object,r=e.lexer,o=e.compiler,s=e.filters,a=e.loaders,l=e.runtime,c=e.globals,h=l.Frame,u=i.extend({init:function(e,t){t=t||{},this.dev=!!t.dev,this.autoesc=!!t.autoescape,this.loaders=e?n.isArray(e)?e:[e]:a.FileSystemLoader?[new a.FileSystemLoader("views")]:[new a.WebLoader("/views")],this.initCache(),this.filters={},this.asyncFilters=[],this.extensions={},this.extensionsList=[],t.tags&&r.setTags(t.tags);for(var i in s)this.addFilter(i,s[i])},initCache:function(){var e={};n.each(this.loaders,function(t){"function"==typeof t.on&&t.on("update",function(t){e[t]=null})}),this.cache=e},addExtension:function(e,t){t._name=e,this.extensions[e]=t,this.extensionsList.push(t)},getExtension:function(e){return this.extensions[e]},addGlobal:function(e,t){c[e]=t},addFilter:function(e,t,n){var i=t;n&&this.asyncFilters.push(e),this.filters[e]=i},getFilter:function(e){if(!this.filters[e])throw new Error("filter not found: "+e);return this.filters[e]},getTemplate:function(e,t,i){if(e&&e.raw&&(e=e.raw),n.isFunction(t)&&(i=t,t=!1),"string"!=typeof e)throw new Error("template names must be a string: "+e);var r=this.cache[e];if(!r){var o;return n.asyncIter(this.loaders,function(t,n,i,r){function o(e){e?r(e):i()}t.async?t.getSource(e,function(e,t){if(e)throw e;o(t)}):o(t.getSource(e))},function(n){if(n){var r=new f(n.src,this,n.path,t);n.noCache||(this.cache[e]=r),i?i(null,r):o=r}else{var s=new Error("template not found: "+e);if(!i)throw s;i(s)}}.bind(this)),o}return t&&r.compile(),i?void i(null,r):r},express:function(e){function n(e,n){if(this.name=e,this.path=e,this.defaultEngine=n.defaultEngine,this.ext=t.extname(e),!this.ext&&!this.defaultEngine)throw new Error("No default engine was specified and no extension was provided.");this.ext||(this.name+=this.ext=("."!==this.defaultEngine[0]?".":"")+this.defaultEngine)}var i=this;n.prototype.render=function(e,t){i.render(this.name,e,t)},e.set("view",n)},render:function(e,t,i){n.isFunction(t)&&(i=t,t=null);var r=null;return this.getTemplate(e,function(e,n){if(e&&i)i(e);else{if(e)throw e;n.render(t,i||function(e,t){if(e)throw e;r=t})}}),r},renderString:function(e,t,n){var i=new f(e,this);return i.render(t,n)}}),p=i.extend({init:function(e,t){this.ctx=e,this.blocks={},this.exported=[];for(var n in t)this.addBlock(n,t[n])},lookup:function(e){return e in c&&!(e in this.ctx)?c[e]:this.ctx[e]},setVariable:function(e,t){this.ctx[e]=t},getVariables:function(){return this.ctx},addBlock:function(e,t){this.blocks[e]=this.blocks[e]||[],this.blocks[e].push(t)},getBlock:function(e){if(!this.blocks[e])throw new Error('unknown block "'+e+'"');return this.blocks[e][0]},getSuper:function(e,t,n,i,r,o){var s=(this.blocks[t]||[]).indexOf(n),a=this.blocks[t][s+1],l=this;if(-1==s||!a)throw new Error('no super block available for "'+t+'"');a(e,l,i,r,o)},addExport:function(e){this.exported.push(e)},getExported:function(){for(var e={},t=0;t<this.exported.length;t++){var n=this.exported[t];e[n]=this.ctx[n]}return e}}),f=i.extend({init:function(e,t,i,r){if(this.env=t||new u,n.isObject(e))switch(e.type){case"code":this.tmplProps=e.obj;break;case"string":this.tmplStr=e.obj}else{if(!n.isString(e))throw new Error("src must be a string or an object describing the source");this.tmplStr=e}this.path=i,r?n.withPrettyErrors(this.path,this.env.dev,this._compile.bind(this)):this.compiled=!1},render:function(e,t,i){return"function"==typeof e?(i=e,e={}):"function"==typeof t&&(i=t,t=null),n.withPrettyErrors(this.path,this.env.dev,function(){this.compile();var n=new p(e||{},this.blocks),r=null;return this.rootRenderFunc(this.env,n,t||new h,l,i||function(e,t){if(e)throw e;r=t}),r}.bind(this))},getExported:function(e){this.compile();var t=new p({},this.blocks);this.rootRenderFunc(this.env,t,new h,l,function(){e(null,t.getExported())})},compile:function(){this.compiled||this._compile()},_compile:function(){var e;if(this.tmplProps)e=this.tmplProps;else{var t=o.compile(this.tmplStr,this.env.asyncFilters,this.env.extensionsList,this.path),n=new Function(t);e=n()}this.blocks=this._getBlocks(e),this.rootRenderFunc=e.root,this.compiled=!0},_getBlocks:function(e){var t={};for(var n in e)"b_"==n.slice(0,2)&&(t[n.slice(2)]=e[n]);return t}});e.environment={Environment:u,Template:f}}();var t,n=e.lib,i=e.environment,r=e.compiler,o=e.parser,s=e.lexer,a=e.runtime,l=e.loader,c=e.loaders,h=e.precompile;t={},t.Environment=i.Environment,t.Template=i.Template,t.Loader=l,t.FileSystemLoader=c.FileSystemLoader,t.WebLoader=c.WebLoader,t.compiler=r,t.parser=o,t.lexer=s,t.runtime=a;var u;t.configure=function(e,t){t=t||{},n.isObject(e)&&(t=e,e=null);var r="watch"in t?!t.watch:!1,o=c.FileSystemLoader||c.WebLoader;return u=new i.Environment(new o(e,r),t),t&&t.express&&u.express(t.express),u},t.compile=function(e,n,i,r){return u||t.configure(),new t.Template(e,n,i,r)},t.render=function(e,n,i){return u||t.configure(),u.render(e,n,i)},t.renderString=function(e,n,i){return u||t.configure(),u.renderString(e,n,i)},h&&(t.precompile=h.precompile,t.precompileString=h.precompileString),t.require=function(t){return e[t]},"function"==typeof define&&define.amd?define(function(){return t}):(window.nunjucks=t,"undefined"!=typeof module&&(module.exports=t))}();
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
var dataSource;dataSource=require("./data.coffee"),exports.articles=function(t,e){return dataSource.getTeasers(function(r,a){return r?e(r):t.render("articles.html",{title:"Livingdocs articles",articles:a})})},exports.article=function(t,e){return dataSource.getArticle(t.params.slug,function(r,a){return r?e(r):t.render("article.html",{title:a.title,article:a})})},exports.articleRaw=function(t,e){return dataSource.getArticle(t.params.slug,function(r,a){return r?e(r):t.render("raw.html",{content:a.html})})};
},{"./data.coffee":6}],6:[function(require,module,exports){
var processArticle,request,transformers;request=require("ld-request"),transformers=require("./transformers.coffee"),processArticle=function(t){var e,r;return t.html=null!=(e=t.html)?e.replace(/http\:\/\/app\.resrc\.it\/https\:\/\/livingdocs\-images\-dev\.s3\.amazonaws\.com\//g,"http://suitart.gallery/images/bkXv1l4RQ/s:1000x1000/"):void 0,t.html=null!=(r=t.html)?r.replace(/http\:\/\/placehold\.it\/0x0/g,"http://suitart.gallery/default/100x100"):void 0,t},exports.getArticle=function(t,e){return request.get("http://staging.api.livingdocs.io/publications/public/"+t,function(t,r){return t?e(t):e(null,processArticle(r.publication))})},exports.getArticles=function(t){return request.get("http://staging.api.livingdocs.io/publications/public",function(e,r){return e?t(e):t(null,r.publications)})},exports.getTeasers=function(t){return exports.getArticles(function(e,r){return e?t(e):t(null,transformers.articlesToTeasers(r))})};
},{"./transformers.coffee":7,"ld-request":undefined}],7:[function(require,module,exports){
exports.constructImageUrl=function(e){var t;return t=(e||"").split("amazonaws.com/")[1],t?"http://suitart.gallery/images/bkXv1l4RQ/s:1000x1000/"+t:e},exports.deduceTitleFromData=function(e){var t,r,a,n,o,i,l;for(a=0,o=e.length;o>a;a++)for(t=e[a],l=["hero","head","title"],n=0,i=l.length;i>n;n++)if(r=l[n],t.identifier==="timeline."+r&&null!=t.content.title)return t.content.title},exports.deduceTeaserImageFromData=function(e){var t,r,a,n,o,i,l;for(a=0,o=e.length;o>a;a++)for(t=e[a],l=["hero","fullsize","normal","peephole"],n=0,i=l.length;i>n;n++)if(r=l[n],t.identifier==="timeline."+r&&null!=t.content.image)return t.content.image},exports.articlesToTeasers=function(e){var t,r,a,n,o,i;for(i=[],r=0,a=e.length;a>r;r++)t=e[r],i.push({title:(null!=(n=t.metadata)?n.title:void 0)||exports.deduceTitleFromData(t.data.content),teaserImage:exports.constructImageUrl((null!=(o=t.metadata)?o.teaser_image:void 0)||exports.deduceTeaserImageFromData(t.data.content)),articleId:t.slug||t.document_id});return i};
},{}],"ld-request":[function(require,module,exports){
var $;$=require("browserify-zepto"),exports.get=function(r,e){return $.getJSON(r,function(r){return r.error?e(new Error(r.error)):e(null,r)})};
},{"browserify-zepto":4}]},{},[1]);
