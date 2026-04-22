import{r as ie,ah as de,ai as ce,u as me,s as ue,j as e,L as pe,N as fe}from"./index-BV1HbQoV.js";import{C as ee}from"./Highlight-9oqHSD-A.js";import{I as te}from"./IconCode-D18auF5m.js";var oe={exports:{}};(function(le,q){(function(re,p){le.exports=p(ie)})(de,function(re){return function(p){function l(c){if(o[c])return o[c].exports;var f=o[c]={exports:{},id:c,loaded:!1};return p[c].call(f.exports,f,f.exports,l),f.loaded=!0,f.exports}var o={};return l.m=p,l.c=o,l.p="",l(0)}([function(p,l,o){function c(i){return i&&i.__esModule?i:{default:i}}function f(i,t){var a={};for(var r in i)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(i,r)&&(a[r]=i[r]);return a}function y(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function k(i,t){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?i:t}function M(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)}Object.defineProperty(l,"__esModule",{value:!0}),l.conformToMask=void 0;var v=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i[r]=a[r])}return i},h=function(){function i(t,a){for(var r=0;r<a.length;r++){var u=a[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}return function(t,a,r){return a&&i(t.prototype,a),r&&i(t,r),t}}(),b=o(3);Object.defineProperty(l,"conformToMask",{enumerable:!0,get:function(){return c(b).default}});var g=o(11),n=c(g),x=o(9),s=c(x),N=o(5),U=c(N),C=o(2),z=function(i){function t(){var a;y(this,t);for(var r=arguments.length,u=Array(r),m=0;m<r;m++)u[m]=arguments[m];var d=k(this,(a=t.__proto__||Object.getPrototypeOf(t)).call.apply(a,[this].concat(u)));return d.setRef=d.setRef.bind(d),d.onBlur=d.onBlur.bind(d),d.onChange=d.onChange.bind(d),d}return M(t,i),h(t,[{key:"setRef",value:function(a){this.inputElement=a}},{key:"initTextMask",value:function(){var a=this.props,r=this.props.value;this.textMaskInputElement=(0,U.default)(v({inputElement:this.inputElement},a)),this.textMaskInputElement.update(r)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(a){var r=this.props,u=r.value,m=r.pipe,d=r.mask,G=r.guide,S=r.placeholderChar,R=r.showMask,j={guide:G,placeholderChar:S,showMask:R},B=typeof m=="function"&&typeof a.pipe=="function"?m.toString()!==a.pipe.toString():(0,C.isNil)(m)&&!(0,C.isNil)(a.pipe)||!(0,C.isNil)(m)&&(0,C.isNil)(a.pipe),P=d.toString()!==a.mask.toString(),V=Object.keys(j).some(function(w){return j[w]!==a[w]})||P||B,E=u!==this.inputElement.value;(E||V)&&this.initTextMask()}},{key:"render",value:function(){var r=this.props,u=r.render,m=f(r,["render"]);return delete m.mask,delete m.guide,delete m.pipe,delete m.placeholderChar,delete m.keepCharPositions,delete m.value,delete m.onBlur,delete m.onChange,delete m.showMask,u(this.setRef,v({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},m))}},{key:"onChange",value:function(a){this.textMaskInputElement.update(),typeof this.props.onChange=="function"&&this.props.onChange(a)}},{key:"onBlur",value:function(a){typeof this.props.onBlur=="function"&&this.props.onBlur(a)}}]),t}(n.default.PureComponent);l.default=z,z.propTypes={mask:s.default.oneOfType([s.default.array,s.default.func,s.default.bool,s.default.shape({mask:s.default.oneOfType([s.default.array,s.default.func]),pipe:s.default.func})]).isRequired,guide:s.default.bool,value:s.default.oneOfType([s.default.string,s.default.number]),pipe:s.default.func,placeholderChar:s.default.string,keepCharPositions:s.default.bool,showMask:s.default.bool},z.defaultProps={render:function(i,t){return n.default.createElement("input",v({ref:i},t))}}},function(p,l){Object.defineProperty(l,"__esModule",{value:!0}),l.placeholderChar="_",l.strFunction="function"},function(p,l,o){function c(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b,x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:h.placeholderChar;if(!f(n))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(n.indexOf(x)!==-1)throw new Error(`Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.

`+("The placeholder character that was received is: "+JSON.stringify(x)+`

`)+("The mask that was received is: "+JSON.stringify(n)));return n.map(function(s){return s instanceof RegExp?x:s}).join("")}function f(n){return Array.isArray&&Array.isArray(n)||n instanceof Array}function y(n){return typeof n=="string"||n instanceof String}function k(n){return typeof n=="number"&&n.length===void 0&&!isNaN(n)}function M(n){return typeof n>"u"||n===null}function v(n){for(var x=[],s=void 0;s=n.indexOf(g),s!==-1;)x.push(s),n.splice(s,1);return{maskWithoutCaretTraps:n,indexes:x}}Object.defineProperty(l,"__esModule",{value:!0}),l.convertMaskToPlaceholder=c,l.isArray=f,l.isString=y,l.isNumber=k,l.isNil=M,l.processCaretTraps=v;var h=o(1),b=[],g="[]"},function(p,l,o){function c(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:v,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M,g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(0,y.isArray)(b)){if((typeof b>"u"?"undefined":f(b))!==k.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");b=b(h,g),b=(0,y.processCaretTraps)(b).maskWithoutCaretTraps}var n=g.guide,x=n===void 0||n,s=g.previousConformedValue,N=s===void 0?v:s,U=g.placeholderChar,C=U===void 0?k.placeholderChar:U,z=g.placeholder,i=z===void 0?(0,y.convertMaskToPlaceholder)(b,C):z,t=g.currentCaretPosition,a=g.keepCharPositions,r=x===!1&&N!==void 0,u=h.length,m=N.length,d=i.length,G=b.length,S=u-m,R=S>0,j=t+(R?-S:0),B=j+Math.abs(S);if(a===!0&&!R){for(var P=v,V=j;V<B;V++)i[V]===C&&(P+=C);h=h.slice(0,j)+P+h.slice(j,u)}for(var E=h.split(v).map(function($,L){return{char:$,isNew:L>=j&&L<B}}),w=u-1;w>=0;w--){var _=E[w].char;if(_!==C){var Q=w>=j&&m===G;_===i[Q?w-S:w]&&E.splice(w,1)}}var I=v,W=!1;e:for(var K=0;K<d;K++){var J=i[K];if(J===C){if(E.length>0)for(;E.length>0;){var Y=E.shift(),X=Y.char,se=Y.isNew;if(X===C&&r!==!0){I+=C;continue e}if(b[K].test(X)){if(a===!0&&se!==!1&&N!==v&&x!==!1&&R){for(var ae=E.length,Z=null,D=0;D<ae;D++){var H=E[D];if(H.char!==C&&H.isNew===!1)break;if(H.char===C){Z=D;break}}Z!==null?(I+=X,E.splice(Z,1)):K--}else I+=X;continue e}W=!0}r===!1&&(I+=i.substr(K,d));break}I+=J}if(r&&R===!1){for(var A=null,O=0;O<I.length;O++)i[O]===C&&(A=O);I=A!==null?I.substr(0,A+1):v}return{conformedValue:I,meta:{someCharsRejected:W}}}Object.defineProperty(l,"__esModule",{value:!0});var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h};l.default=c;var y=o(2),k=o(1),M=[],v=""},function(p,l){function o(y){var k=y.previousConformedValue,M=k===void 0?f:k,v=y.previousPlaceholder,h=v===void 0?f:v,b=y.currentCaretPosition,g=b===void 0?0:b,n=y.conformedValue,x=y.rawValue,s=y.placeholderChar,N=y.placeholder,U=y.indexesOfPipedChars,C=U===void 0?c:U,z=y.caretTrapIndexes,i=z===void 0?c:z;if(g===0||!x.length)return 0;var t=x.length,a=M.length,r=N.length,u=n.length,m=t-a,d=m>0,G=a===0,S=m>1&&!d&&!G;if(S)return g;var R=d&&(M===n||n===N),j=0,B=void 0,P=void 0;if(R)j=g-m;else{var V=n.toLowerCase(),E=x.toLowerCase(),w=E.substr(0,g).split(f),_=w.filter(function(T){return V.indexOf(T)!==-1});P=_[_.length-1];var Q=h.substr(0,_.length).split(f).filter(function(T){return T!==s}).length,I=N.substr(0,_.length).split(f).filter(function(T){return T!==s}).length,W=I!==Q,K=h[_.length-1]!==void 0&&N[_.length-2]!==void 0&&h[_.length-1]!==s&&h[_.length-1]!==N[_.length-1]&&h[_.length-1]===N[_.length-2];!d&&(W||K)&&Q>0&&N.indexOf(P)>-1&&x[g]!==void 0&&(B=!0,P=x[g]);for(var J=C.map(function(T){return V[T]}),Y=J.filter(function(T){return T===P}).length,X=_.filter(function(T){return T===P}).length,se=N.substr(0,N.indexOf(s)).split(f).filter(function(T,ne){return T===P&&x[ne]!==T}).length,ae=se+X+Y+(B?1:0),Z=0,D=0;D<u;D++){var H=V[D];if(j=D+1,H===P&&Z++,Z>=ae)break}}if(d){for(var A=j,O=j;O<=r;O++)if(N[O]===s&&(A=O),N[O]===s||i.indexOf(O)!==-1||O===r)return A}else if(B){for(var $=j-1;$>=0;$--)if(n[$]===P||i.indexOf($)!==-1||$===0)return $}else for(var L=j;L>=0;L--)if(N[L-1]===s||i.indexOf(L)!==-1||L===0)return L}Object.defineProperty(l,"__esModule",{value:!0}),l.default=o;var c=[],f=""},function(p,l,o){function c(t){return t&&t.__esModule?t:{default:t}}function f(t){var a={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:a,update:function(r){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,m=u.inputElement,d=u.mask,G=u.guide,S=u.pipe,R=u.placeholderChar,j=R===void 0?s.placeholderChar:R,B=u.keepCharPositions,P=B!==void 0&&B,V=u.showMask,E=V!==void 0&&V;if(typeof r>"u"&&(r=m.value),r!==a.previousConformedValue){(typeof d>"u"?"undefined":v(d))===C&&d.pipe!==void 0&&d.mask!==void 0&&(S=d.pipe,d=d.mask);var w=void 0,_=void 0;if(d instanceof Array&&(w=(0,x.convertMaskToPlaceholder)(d,j)),d!==!1){var Q=k(r),I=m.selectionEnd,W=a.previousConformedValue,K=a.previousPlaceholder,J=void 0;if((typeof d>"u"?"undefined":v(d))===s.strFunction){if(_=d(Q,{currentCaretPosition:I,previousConformedValue:W,placeholderChar:j}),_===!1)return;var Y=(0,x.processCaretTraps)(_),X=Y.maskWithoutCaretTraps,se=Y.indexes;_=X,J=se,w=(0,x.convertMaskToPlaceholder)(_,j)}else _=d;var ae={previousConformedValue:W,guide:G,placeholderChar:j,pipe:S,placeholder:w,currentCaretPosition:I,keepCharPositions:P},Z=(0,n.default)(Q,_,ae),D=Z.conformedValue,H=(typeof S>"u"?"undefined":v(S))===s.strFunction,A={};H&&(A=S(D,M({rawValue:Q},ae)),A===!1?A={value:W,rejected:!0}:(0,x.isString)(A)&&(A={value:A}));var O=H?A.value:D,$=(0,b.default)({previousConformedValue:W,previousPlaceholder:K,conformedValue:O,placeholder:w,rawValue:Q,currentCaretPosition:I,placeholderChar:j,indexesOfPipedChars:A.indexesOfPipedChars,caretTrapIndexes:J}),L=O===w&&$===0,T=E?w:N,ne=L?T:O;a.previousConformedValue=ne,a.previousPlaceholder=w,m.value!==ne&&(m.value=ne,y(m,$))}}}}}function y(t,a){document.activeElement===t&&(z?i(function(){return t.setSelectionRange(a,a,U)},0):t.setSelectionRange(a,a,U))}function k(t){if((0,x.isString)(t))return t;if((0,x.isNumber)(t))return String(t);if(t==null)return N;throw new Error(`The 'value' provided to Text Mask needs to be a string or a number. The value received was:

 `+JSON.stringify(t))}Object.defineProperty(l,"__esModule",{value:!0});var M=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};l.default=f;var h=o(4),b=c(h),g=o(3),n=c(g),x=o(2),s=o(1),N="",U="none",C="object",z=typeof navigator<"u"&&/Android/i.test(navigator.userAgent),i=typeof requestAnimationFrame<"u"?requestAnimationFrame:setTimeout},function(p,l){function o(f){return function(){return f}}var c=function(){};c.thatReturns=o,c.thatReturnsFalse=o(!1),c.thatReturnsTrue=o(!0),c.thatReturnsNull=o(null),c.thatReturnsThis=function(){return this},c.thatReturnsArgument=function(f){return f},p.exports=c},function(p,l,o){function c(f,y,k,M,v,h,b,g){if(!f){var n;if(y===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var x=[k,M,v,h,b,g],s=0;n=new Error(y.replace(/%s/g,function(){return x[s++]})),n.name="Invariant Violation"}throw n.framesToPop=1,n}}p.exports=c},function(p,l,o){var c=o(6),f=o(7),y=o(10);p.exports=function(){function k(h,b,g,n,x,s){s!==y&&f(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function M(){return k}k.isRequired=k;var v={array:k,bool:k,func:k,number:k,object:k,string:k,symbol:k,any:k,arrayOf:M,element:k,instanceOf:M,node:k,objectOf:M,oneOf:M,oneOfType:M,shape:M,exact:M};return v.checkPropTypes=c,v.PropTypes=v,v}},function(p,l,o){p.exports=o(8)()},function(p,l){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=o},function(p,l){p.exports=re}])})})(oe);var he=oe.exports;const F=ce(he),ye=()=>{const le=me();ie.useEffect(()=>{le(ue("Input Mask"))});const[q,re]=ie.useState([]),p=l=>{q.includes(l)?re(o=>o.filter(c=>c!==l)):re([...q,l])};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(pe,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Input Mask"})})]}),e.jsxs("div",{className:"pt-5 space-y-8 flex-1",id:"basic",children:[e.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e.jsx(fe,{})}),e.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e.jsx("a",{href:"https://www.npmjs.com/package/react-text-mask",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-text-mask"})]}),e.jsxs("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Static Mask Basic"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code1"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(te,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("p",{className:"text-white-dark mb-5",children:["Input mask are use with ",e.jsx("span",{className:"text-danger",children:"input"})," tags."]}),e.jsx("form",{children:e.jsxs("fieldset",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"staticMask1",className:"text-white-dark",children:`mask="'##-#######'" (99-9999999)`}),e.jsx(F,{id:"staticMask1",type:"text",placeholder:"__-_______",className:"form-input",mask:[/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"staticMask2",className:"text-white-dark",children:`mask="'AA-####'" (aa-9999)`}),e.jsx(F,{id:"staticMask2",type:"text",placeholder:"__-____",className:"form-input",mask:[/[a-z]/,/[a-z]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]})]})})]}),q.includes("code1")&&e.jsx(ee,{children:e.jsx("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="staticMask1" className="text-white-dark">
                mask="'##-#######'" (99-9999999)
            </label>
            <MaskedInput
                id="staticMask1"
                type="text"
                placeholder="__-_______"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="staticMask2" className="text-white-dark">
                mask="'AA-####'" (aa-9999)
            </label>
            <MaskedInput id="staticMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Alternate masks"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code2"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(te,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("form",{children:e.jsxs("fieldset",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"altnMask1",className:"text-white-dark",children:`mask="'##.#'" (99.9)`}),e.jsx(F,{id:"altnMask1",type:"text",placeholder:"__._",className:"form-input",mask:[/[0-9]/,/[0-9]/,".",/[0-9]/]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"altnMask2",className:"text-white-dark",children:`mask="'##.##'" (99.99)`}),e.jsx(F,{id:"altnMask2",type:"text",placeholder:"__.__",className:"form-input",mask:[/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/]})]})]})})}),q.includes("code2")&&e.jsx(ee,{children:e.jsx("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="altnMask1" className="text-white-dark">
                mask="'##.#'" (99.9)
            </label>
            <MaskedInput id="altnMask1" type="text" placeholder="__._" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/]} />
        </div>
        <div>
            <label htmlFor="altnMask2" className="text-white-dark">
                mask="'##.##'" (99.99)
            </label>
            <MaskedInput id="altnMask2" type="text" placeholder="__.__" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dynamic Syntax"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code3"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(te,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("form",{children:e.jsxs("fieldset",{className:"grid grid-cols-1 md:grid-cols-3 items-end gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"dynamicMask1",className:"text-white-dark",children:[`mask="'#-AAA###'" (9-a`,"{1,3}","9","{1,3}",")"]}),e.jsx(F,{id:"dynamicMask1",type:"text",placeholder:"_-__",className:"form-input",mask:[/[0-9]/,"-",/[a-z]/,/[a-z]/,/[a-z]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"dynamicMask2",className:"text-white-dark",children:[`mask="'AA-####'" (aa-9`,"{1,4}",")"]}),e.jsx(F,{id:"dynamicMask2",type:"text",placeholder:"__-____",className:"form-input",mask:[/[a-z]/,/[a-z]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"dynamicMask3",className:"text-white-dark",children:[`mask="'AA-##'" (aa-9`,"{1,2}",")"]}),e.jsx(F,{id:"dynamicMask3",type:"text",placeholder:"__-__",className:"form-input",mask:[/[a-z]/,/[a-z]/,"-",/[0-9]/,/[0-9]/]})]})]})})}),q.includes("code3")&&e.jsx(ee,{children:e.jsx("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-3 items-end gap-4">
        <div>
            <label htmlFor="dynamicMask1" className="text-white-dark">
                mask="'#-AAA###'" (9-a{'{1,3}'}9{'{1,3}'})
            </label>
            <MaskedInput
                id="dynamicMask1"
                type="text"
                placeholder="_-__"
                className="form-input"
                mask={[/[0-9]/, '-', /[a-z]/, /[a-z]/, /[a-z]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dynamicMask2" className="text-white-dark">
                mask="'AA-####'" (aa-9{'{1,4}'})
            </label>
            <MaskedInput id="dynamicMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
        </div>
        <div>
            <label htmlFor="dynamicMask3" className="text-white-dark">
                mask="'AA-##'" (aa-9{'{1,2}'})
            </label>
            <MaskedInput id="dynamicMask3" type="text" placeholder="__-__" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Date"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code4"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(te,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("form",{children:e.jsxs("fieldset",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"dateMask1",className:"text-white-dark",children:`mask="'##/##/####'" (dd/mm/yyyy)`}),e.jsx(F,{id:"dateMask1",type:"text",placeholder:"__/__/____",className:"form-input",mask:[/[0-9]/,/[0-9]/,"/",/[0-9]/,/[0-9]/,"/",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"dateMask2",className:"text-white-dark",children:`mask="'##-##-####'" (99-99-9999)`}),e.jsx(F,{id:"dateMask2",type:"text",placeholder:"__-__-____",className:"form-input",mask:[/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"dateMask3",className:"text-white-dark",children:`mask="'## December, ####'" (99 December, 9999)`}),e.jsx(F,{id:"dateMask3",type:"text",placeholder:"__ December, ____",className:"form-input",mask:[/[0-9]/,/[0-9]/," ","D","e","c","e","m","b","e","r"," ",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]})]})})}),q.includes("code4")&&e.jsx(ee,{children:e.jsx("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
            <label htmlFor="dateMask1" className="text-white-dark">
                mask="'##/##/####'" (dd/mm/yyyy)
            </label>
            <MaskedInput
                id="dateMask1"
                type="text"
                placeholder="__/__/____"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dateMask2" className="text-white-dark">
                mask="'##-##-####'" (99-99-9999)
            </label>
            <MaskedInput
                id="dateMask2"
                type="text"
                placeholder="__-__-____"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dateMask3" className="text-white-dark">
                mask="'## December, ####'" (99 December, 9999)
            </label>
            <MaskedInput
                id="dateMask3"
                type="text"
                placeholder="__ December, ____"
                className="form-input"
                // mask={['99 December, 9999']}
                mask={[/[0-9]/, /[0-9]/, ' ', 'D', 'e', 'c', 'e', 'm', 'b', 'e', 'r', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
    </fieldset>
</form>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"IP"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code5"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(te,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("form",{children:e.jsxs("fieldset",{children:[e.jsx("label",{htmlFor:"ipMask",className:"text-white-dark",children:`mask="'###.###.###.###'" (192.198.1.1)`}),e.jsx(F,{id:"ipMask",type:"text",placeholder:"___.___.___.___",className:"form-input",mask:[/[0-9]/,/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/,/[0-9]/]})]})})}),q.includes("code5")&&e.jsx(ee,{children:e.jsx("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="ipMask" className="text-white-dark">
            mask="'###.###.###.###'" (192.198.1.1)
        </label>
        <MaskedInput
            id="ipMask"
            type="text"
            placeholder="___.___.___.___"
            className="form-input"
            mask={[/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Phone"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code6"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(te,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("form",{children:e.jsxs("fieldset",{children:[e.jsx("label",{htmlFor:"phoneMask",className:"text-white-dark",children:`mask="'(###) ###-####'" ((999) 999-9999)`}),e.jsx(F,{id:"phoneMask",type:"text",placeholder:"(___) ___-____",className:"form-input",mask:["(",/[0-9]/,/[0-9]/,/[0-9]/,")"," ",/[0-9]/,/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]})]})})}),q.includes("code6")&&e.jsx(ee,{children:e.jsx("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="phoneMask" className="text-white-dark">
            mask="'(###) ###-####'" ((999) 999-9999)
        </label>
        <MaskedInput
            id="phoneMask"
            type="text"
            placeholder="(___) ___-____"
            className="form-input"
            mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Currency"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>p("code7"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(te,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("form",{children:e.jsxs("fieldset",{children:[e.jsx("label",{htmlFor:"currencyMask",className:"text-white-dark",children:"$999,9999,999.99"}),e.jsx(F,{id:"currencyMask",type:"text",placeholder:"$___,____,___.__",className:"form-input",mask:["$",/[0-9]/,/[0-9]/,/[0-9]/,",",/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,",",/[0-9]/,/[0-9]/,/[0-9]/,".",/[0-9]/,/[0-9]/]})]})})}),q.includes("code7")&&e.jsx(ee,{children:e.jsx("pre",{className:"language-typescript",children:`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="currencyMask" className="text-white-dark">
            $999,9999,999.99
        </label>
        <MaskedInput
            id="currencyMask"
            type="text"
            placeholder="$___,____,___.__"
            className="form-input"
            mask={['$', /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`})})]})]})]})]})};export{ye as default};
