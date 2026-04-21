import{r as x,u as M,s as L,j as e,L as A,N as H,S as U}from"./index-0xdiYbwi.js";import{C as h}from"./Highlight-CHDirOGe.js";import{I as g}from"./IconCode-BKl6R_QZ.js";import{I as b}from"./IconCopy-B1xyKqwx.js";import{I as O}from"./IconPencil-V0FqFWbm.js";var j={},B=function(){var r=document.getSelection();if(!r.rangeCount)return function(){};for(var t=document.activeElement,a=[],s=0;s<r.rangeCount;s++)a.push(r.getRangeAt(s));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return r.removeAllRanges(),function(){r.type==="Caret"&&r.removeAllRanges(),r.rangeCount||a.forEach(function(o){r.addRange(o)}),t&&t.focus()}},$=B,P={"text/plain":"Text","text/html":"Url",default:"Text"},q="Copy to clipboard: #{key}, Enter";function z(r){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return r.replace(/#{\s*key\s*}/g,t)}function F(r,t){var a,s,o,l,d,n,m=!1;t||(t={}),a=t.debug||!1;try{o=$(),l=document.createRange(),d=document.getSelection(),n=document.createElement("span"),n.textContent=r,n.ariaHidden="true",n.style.all="unset",n.style.position="fixed",n.style.top=0,n.style.clip="rect(0, 0, 0, 0)",n.style.whiteSpace="pre",n.style.webkitUserSelect="text",n.style.MozUserSelect="text",n.style.msUserSelect="text",n.style.userSelect="text",n.addEventListener("copy",function(i){if(i.stopPropagation(),t.format)if(i.preventDefault(),typeof i.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=P[t.format]||P.default;window.clipboardData.setData(c,r)}else i.clipboardData.clearData(),i.clipboardData.setData(t.format,r);t.onCopy&&(i.preventDefault(),t.onCopy(i.clipboardData))}),document.body.appendChild(n),l.selectNodeContents(n),d.addRange(l);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");m=!0}catch(i){a&&console.error("unable to copy using execCommand: ",i),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",r),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(c){a&&console.error("unable to copy using clipboardData: ",c),a&&console.error("falling back to prompt"),s=z("message"in t?t.message:q),window.prompt(s,r)}}finally{d&&(typeof d.removeRange=="function"?d.removeRange(l):d.removeAllRanges()),n&&document.body.removeChild(n),o()}return m}var K=F;function N(r){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(r)}Object.defineProperty(j,"__esModule",{value:!0});j.CopyToClipboard=void 0;var C=D(x),V=D(K),W=["text","onCopy","options","children"];function D(r){return r&&r.__esModule?r:{default:r}}function _(r,t){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),a.push.apply(a,s)}return a}function S(r){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?_(Object(a),!0).forEach(function(s){T(r,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(a,s))})}return r}function X(r,t){if(r==null)return{};var a=G(r,t),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(o=0;o<l.length;o++)s=l[o],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(a[s]=r[s])}return a}function G(r,t){if(r==null)return{};var a={},s=Object.keys(r),o,l;for(l=0;l<s.length;l++)o=s[l],!(t.indexOf(o)>=0)&&(a[o]=r[o]);return a}function J(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(r,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(r,s.key,s)}}function Y(r,t,a){return t&&Q(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function Z(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&w(r,t)}function w(r,t){return w=Object.setPrototypeOf||function(s,o){return s.__proto__=o,s},w(r,t)}function ee(r){var t=re();return function(){var s=v(r),o;if(t){var l=v(this).constructor;o=Reflect.construct(s,arguments,l)}else o=s.apply(this,arguments);return te(this,o)}}function te(r,t){if(t&&(N(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(r)}function E(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function re(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function v(r){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},v(r)}function T(r,t,a){return t in r?Object.defineProperty(r,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[t]=a,r}var I=function(r){Z(a,r);var t=ee(a);function a(){var s;J(this,a);for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return s=t.call.apply(t,[this].concat(l)),T(E(s),"onClick",function(n){var m=s.props,f=m.text,i=m.onCopy,c=m.children,p=m.options,y=C.default.Children.only(c),R=(0,V.default)(f,p);i&&i(f,R),y&&y.props&&typeof y.props.onClick=="function"&&y.props.onClick(n)}),s}return Y(a,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var l=o.children,d=X(o,W),n=C.default.Children.only(l);return C.default.cloneElement(n,S(S({},d),{},{onClick:this.onClick}))}}]),a}(C.default.PureComponent);j.CopyToClipboard=I;T(I,"defaultProps",{onCopy:void 0,options:void 0});var se=j,k=se.CopyToClipboard;k.CopyToClipboard=k;var u=k;const ie=()=>{const r=M();x.useEffect(()=>{r(L("Clipboard"))});const[t,a]=x.useState([]),s=c=>{t.includes(c)?a(p=>p.filter(y=>y!==c)):a([...t,c])},[o,l]=x.useState("http://www.admin-dashboard.com"),[d,n]=x.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit..."),m="22991",f="http://www.admin-dashboard.com/code",i=(c="")=>{U.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}).fire({icon:"success",title:c||"Copied successfully.",padding:"10px 20px"})};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(A,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Clipboard"})})]}),e.jsxs("div",{className:"pt-5 space-y-8",children:[e.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e.jsx(H,{})}),e.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e.jsx("a",{href:"https://www.npmjs.com/package/react-copy-to-clipboard",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-copy-to-clipboard"})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",id:"copy_from_input",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy from input"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code1"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(g,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:e.jsxs("form",{children:[e.jsx("input",{type:"text",value:o,className:"form-input",onChange:c=>l(c.target.value)}),e.jsxs("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[e.jsx(u.CopyToClipboard,{text:o,onCopy:(c,p)=>{p&&i()},children:e.jsxs("button",{type:"button",className:"btn btn-primary",children:[e.jsx(b,{className:"ltr:mr-2 rtl:ml-2"}),"Copy from Input"]})}),e.jsx(u.CopyToClipboard,{text:o,onCopy:(c,p)=>{p&&i("Cut successfully.")},children:e.jsxs("button",{type:"button",className:"btn btn-dark",value:o,onClick:()=>l(""),children:[e.jsx(O,{className:"ltr:mr-2 rtl:ml-2"}),"Cut from Input"]})})]})]})})}),t.includes("code1")&&e.jsx(h,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const [message1, setMessage1] = useState<any>('http://www.admin-dashboard.com');

<form>
    <input type="text" value={message1} className="form-input" onChange={(e) => setMessage1(e.target.value)} />
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message1}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary">
                <svg>...</svg>
                Copy from Input
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={message1}
            onCopy={(text, result) => {
                if (result) {
                    showMessage('Cut successfully.');
                }
            }}
        >
            <button type="button" className="btn btn-dark" value={message1} onClick={() => setMessage1('')}>
                <svg>...</svg>
                Cut from Input
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),e.jsxs("div",{className:"panel",id:"copy_from_textarea",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy form Textarea"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code2"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(g,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:e.jsxs("form",{children:[e.jsx("textarea",{rows:3,wrap:"soft",className:"form-textarea",value:d,id:"message2",onChange:c=>n(c.target.value)}),e.jsxs("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[e.jsx(u.CopyToClipboard,{text:d,onCopy:(c,p)=>{p&&i()},children:e.jsxs("button",{type:"button",className:"btn btn-primary","data-clipboard-target":"#message2",children:[e.jsx(b,{className:"ltr:mr-2 rtl:ml-2"}),"Copy from Input"]})}),e.jsx(u.CopyToClipboard,{text:d,onCopy:(c,p)=>{p&&i("Cut successfully.")},children:e.jsxs("button",{type:"button",className:"btn btn-dark ",onClick:()=>n(""),children:[e.jsx(O,{className:"ltr:mr-2 rtl:ml-2"}),"Cut from Input"]})})]})]})})}),t.includes("code2")&&e.jsx(h,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const [message2, setMessage2] = useState<any>('Lorem ipsum dolor sit amet, consectetur adipiscing elit...');

<form>
    <textarea rows={3} wrap="soft" className="form-textarea" value={message2} id="message2" onChange={(e) => setMessage2(e.target.value)}></textarea>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message2}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary" data-clipboard-target="#message2">
                <svg>...</svg>
                Copy from Input
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={message2}
            onCopy={(text, result) => {
                if (result) {
                    showMessage('Cut successfully.');
                }
            }}
        >
            <button type="button" className="btn btn-dark " onClick={() => setMessage2('')}>
                <svg>...</svg>
                Cut from Input
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),e.jsxs("div",{className:"panel",id:"copy_from_paragraph",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy Text from Paragraph"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code3"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(g,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:e.jsxs("form",{children:[e.jsxs("p",{className:"mb-3 font-semibold",children:["Here is your OTP",e.jsx("span",{className:"text-2xl",id:"copyOTP",defaultValue:m,children:"22991"}),"."]}),e.jsx("p",{className:"font-semibold",children:"Please do not share it to anyone"}),e.jsx("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:e.jsx(u.CopyToClipboard,{text:m,onCopy:(c,p)=>{p&&i()},children:e.jsxs("button",{type:"button",className:"btn btn-primary","data-clipboard-target":"#copyOTP",children:[e.jsx(b,{className:"ltr:mr-2 rtl:ml-2"}),"Copy from Paragraph"]})})})]})})}),t.includes("code3")&&e.jsx(h,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const message3 = '22991';

<form>
    <p className="mb-3 font-semibold">
        Here is your OTP
        <span className="text-2xl" id="copyOTP" defaultValue={message3}>
            22991
        </span>
        .
    </p>
    <p className="font-semibold">Please do not share it to anyone</p>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message3}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary" data-clipboard-target="#copyOTP">
                <svg>...</svg>
                Copy from Paragraph
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),e.jsxs("div",{className:"panel",id:"advanced",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy Hidden Text (Advanced)"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code4"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(g,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:e.jsxs("form",{children:[e.jsxs("p",{className:"mb-3 font-semibold",children:[e.jsxs("span",{children:[" ","Link -> "," "]}),e.jsx("span",{id:"copyLink",children:" http://www.admin-dashboard.com/code"})]}),e.jsx("span",{className:"absolute opacity-0",id:"copyHiddenCode",children:"2291"}),e.jsxs("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[e.jsx(u.CopyToClipboard,{text:f,onCopy:(c,p)=>{p&&i()},children:e.jsxs("button",{type:"button",className:"btn btn-primary",children:[e.jsx(b,{className:"ltr:mr-2 rtl:ml-2"}),"Copy Link"]})}),e.jsx(u.CopyToClipboard,{text:"2291",onCopy:(c,p)=>{p&&i()},children:e.jsxs("button",{type:"button",className:"btn btn-dark ",children:[e.jsx(b,{className:"ltr:mr-2 rtl:ml-2"}),"Copy Hidden Code"]})})]})]})})}),t.includes("code4")&&e.jsx(h,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const message4 = 'http://www.admin-dashboard.com/code';

<form>
    <p className="mb-3 font-semibold">
        <span> {'Link -> '} </span>
        <span id="copyLink"> http://www.admin-dashboard.com/code</span>
    </p>
    <span className="absolute opacity-0" id="copyHiddenCode">
        2291
    </span>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message4}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary">
                <svg>...</svg>
                Copy Link
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={'2291'}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-dark ">
                <svg>...</svg>
                Copy Hidden Code
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]})]})]})]})};export{ie as default};
