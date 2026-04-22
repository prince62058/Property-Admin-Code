import{ah as _,r as A,u as he,s as _e,j as t,L as be,N as ye,l as Ne}from"./index-BV1HbQoV.js";import{C as W}from"./Highlight-9oqHSD-A.js";import{I as ee}from"./IconCode-D18auF5m.js";var te={},Z={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.getListFiles=a.getImage=a.getBase64=a.getAcceptTypeString=a.openFileDialog=void 0,a.openFileDialog=function(r){r.current&&r.current.click()},a.getAcceptTypeString=function(r,n){return r!=null&&r.length?r.map(function(o){return"."+o}).join(", "):n?"":"image/*"},a.getBase64=function(r){var n=new FileReader;return new Promise(function(o){n.addEventListener("load",function(){return o(String(n.result))}),n.readAsDataURL(r)})},a.getImage=function(r){var n=new Image;return new Promise(function(o){n.addEventListener("load",function(){return o(n)}),n.src=URL.createObjectURL(r)})},a.getListFiles=function(r,n){for(var o=[],m=0;m<r.length;m+=1)o.push(a.getBase64(r[m]));return Promise.all(o).then(function(e){var c=e.map(function(s,f){var i;return i={},i[n]=s,i.file=r[f],i});return c})}})(Z);var ie={},L={};Object.defineProperty(L,"__esModule",{value:!0});L.DEFAULT_DATA_URL_KEY=L.INIT_MAX_NUMBER=L.DEFAULT_NULL_INDEX=void 0;L.DEFAULT_NULL_INDEX=-1;L.INIT_MAX_NUMBER=1e3;L.DEFAULT_DATA_URL_KEY="dataURL";(function(a){var r=_&&_.__awaiter||function(e,c,s,f){function i(l){return l instanceof s?l:new s(function(g){g(l)})}return new(s||(s=Promise))(function(l,g){function p(v){try{u(f.next(v))}catch(b){g(b)}}function N(v){try{u(f.throw(v))}catch(b){g(b)}}function u(v){v.done?l(v.value):i(v.value).then(p,N)}u((f=f.apply(e,c||[])).next())})},n=_&&_.__generator||function(e,c){var s={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},f,i,l,g;return g={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(g[Symbol.iterator]=function(){return this}),g;function p(u){return function(v){return N([u,v])}}function N(u){if(f)throw new TypeError("Generator is already executing.");for(;s;)try{if(f=1,i&&(l=u[0]&2?i.return:u[0]?i.throw||((l=i.return)&&l.call(i),0):i.next)&&!(l=l.call(i,u[1])).done)return l;switch(i=0,l&&(u=[u[0]&2,l.value]),u[0]){case 0:case 1:l=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,i=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(l=s.trys,!(l=l.length>0&&l[l.length-1])&&(u[0]===6||u[0]===2)){s=0;continue}if(u[0]===3&&(!l||u[1]>l[0]&&u[1]<l[3])){s.label=u[1];break}if(u[0]===6&&s.label<l[1]){s.label=l[1],l=u;break}if(l&&s.label<l[2]){s.label=l[2],s.ops.push(u);break}l[2]&&s.ops.pop(),s.trys.pop();continue}u=c.call(e,s)}catch(v){u=[6,v],i=0}finally{f=l=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}};Object.defineProperty(a,"__esModule",{value:!0}),a.getErrorValidation=a.isMaxNumberValid=a.isAcceptTypeValid=a.isMaxFileSizeValid=a.isImageValid=a.isResolutionValid=void 0;var o=L,m=Z;a.isResolutionValid=function(e,c,s,f){if(s===void 0&&(s=0),f===void 0&&(f=1),!s||!f||!e.width||!e.height)return!0;switch(c){case"absolute":{if(e.width===s&&e.height===f)return!0;break}case"ratio":{var i=s/f;if(e.width/e.height===i)return!0;break}case"less":{if(e.width<=s&&e.height<=f)return!0;break}case"more":{if(e.width>=s&&e.height>=f)return!0;break}}return!1},a.isImageValid=function(e){return!!e.includes("image")},a.isMaxFileSizeValid=function(e,c){return c?e<=c:!0},a.isAcceptTypeValid=function(e,c){if(e&&e.length>0){var s=c.split(".").pop()||"";if(e.findIndex(function(f){return f.toLowerCase()===s.toLowerCase()})<0)return!1}return!0},a.isMaxNumberValid=function(e,c,s){if(c!==0&&!c)return!0;if(s===o.DEFAULT_NULL_INDEX){if(e<=c)return!0}else if(e<=c+1)return!0;return!1},a.getErrorValidation=function(e){var c=e.fileList,s=e.value,f=e.maxNumber,i=e.keyUpdate,l=e.acceptType,g=e.maxFileSize,p=e.resolutionType,N=e.resolutionWidth,u=e.resolutionHeight,v=e.allowNonImageType;return r(void 0,void 0,void 0,function(){var b,j,y,I,E;return n(this,function(x){switch(x.label){case 0:return b={},a.isMaxNumberValid(c.length+s.length,f,i)?[3,1]:(b.maxNumber=!0,[3,5]);case 1:j=0,x.label=2;case 2:return j<c.length?(y=c[j].file,y?!v&&!a.isImageValid(y.type)?(b.acceptType=!0,[3,5]):a.isAcceptTypeValid(l,y.name)?a.isMaxFileSizeValid(y.size,g)?p?[4,m.getImage(y)]:[3,4]:(b.maxFileSize=!0,[3,5]):(b.acceptType=!0,[3,5]):[3,4]):[3,5];case 3:if(I=x.sent(),E=a.isResolutionValid(I,p,N,u),!E)return b.resolution=!0,[3,5];x.label=4;case 4:return j+=1,[3,2];case 5:return Object.values(b).find(Boolean)?[2,b]:[2,null]}})})}})(ie);var K=_&&_.__assign||function(){return K=Object.assign||function(a){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var m in r)Object.prototype.hasOwnProperty.call(r,m)&&(a[m]=r[m])}return a},K.apply(this,arguments)},xe=_&&_.__createBinding||(Object.create?function(a,r,n,o){o===void 0&&(o=n),Object.defineProperty(a,o,{enumerable:!0,get:function(){return r[n]}})}:function(a,r,n,o){o===void 0&&(o=n),a[o]=r[n]}),we=_&&_.__setModuleDefault||(Object.create?function(a,r){Object.defineProperty(a,"default",{enumerable:!0,value:r})}:function(a,r){a.default=r}),Ie=_&&_.__importStar||function(a){if(a&&a.__esModule)return a;var r={};if(a!=null)for(var n in a)n!=="default"&&Object.prototype.hasOwnProperty.call(a,n)&&xe(r,a,n);return we(r,a),r},O=_&&_.__awaiter||function(a,r,n,o){function m(e){return e instanceof n?e:new n(function(c){c(e)})}return new(n||(n=Promise))(function(e,c){function s(l){try{i(o.next(l))}catch(g){c(g)}}function f(l){try{i(o.throw(l))}catch(g){c(g)}}function i(l){l.done?e(l.value):m(l.value).then(s,f)}i((o=o.apply(a,r||[])).next())})},X=_&&_.__generator||function(a,r){var n={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},o,m,e,c;return c={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function s(i){return function(l){return f([i,l])}}function f(i){if(o)throw new TypeError("Generator is already executing.");for(;n;)try{if(o=1,m&&(e=i[0]&2?m.return:i[0]?m.throw||((e=m.return)&&e.call(m),0):m.next)&&!(e=e.call(m,i[1])).done)return e;switch(m=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return n.label++,{value:i[1],done:!1};case 5:n.label++,m=i[1],i=[0];continue;case 7:i=n.ops.pop(),n.trys.pop();continue;default:if(e=n.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){n.label=i[1];break}if(i[0]===6&&n.label<e[1]){n.label=e[1],e=i;break}if(e&&n.label<e[2]){n.label=e[2],n.ops.push(i);break}e[2]&&n.ops.pop(),n.trys.pop();continue}i=r.call(a,n)}catch(l){i=[6,l],m=0}finally{o=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},B=_&&_.__spreadArrays||function(){for(var a=0,r=0,n=arguments.length;r<n;r++)a+=arguments[r].length;for(var o=Array(a),m=0,r=0;r<n;r++)for(var e=arguments[r],c=0,s=e.length;c<s;c++,m++)o[m]=e[c];return o};Object.defineProperty(te,"__esModule",{value:!0});var w=Ie(A),z=Z,je=ie,U=L,Le=function(a){var r=a.value,n=r===void 0?[]:r,o=a.onChange,m=a.onError,e=a.children,c=a.dataURLKey,s=c===void 0?U.DEFAULT_DATA_URL_KEY:c,f=a.multiple,i=f===void 0?!1:f,l=a.maxNumber,g=l===void 0?U.INIT_MAX_NUMBER:l,p=a.acceptType,N=a.maxFileSize,u=a.resolutionWidth,v=a.resolutionHeight,b=a.resolutionType,j=a.inputProps,y=j===void 0?{}:j,I=a.allowNonImageType,E=I===void 0?!1:I,x=n||[],C=w.useRef(null),G=w.useState(U.DEFAULT_NULL_INDEX),k=G[0],R=G[1],Y=w.useState(null),q=Y[0],H=Y[1],J=w.useState(!1),ne=J[0],M=J[1],P=w.useCallback(function(){return z.openFileDialog(C)},[C]),re=w.useCallback(function(){R(U.DEFAULT_NULL_INDEX),P()},[P]),le=w.useCallback(function(){o==null||o([])},[o]),se=function(d){var h=B(x);Array.isArray(d)?d.forEach(function(D){h.splice(D,1)}):h.splice(d,1),o==null||o(h)},oe=function(d){R(d),P()},ce=function(d){return O(void 0,void 0,void 0,function(){var h;return X(this,function(D){switch(D.label){case 0:return[4,je.getErrorValidation({fileList:d,maxFileSize:N,maxNumber:g,acceptType:p,keyUpdate:k,resolutionType:b,resolutionWidth:u,resolutionHeight:v,value:x,allowNonImageType:E})];case 1:return h=D.sent(),h?(H(h),m==null||m(h,d),[2,!1]):(q&&H(null),[2,!0])}})})},Q=function(d){return O(void 0,void 0,void 0,function(){var h,D,T,F,$,S;return X(this,function(V){switch(V.label){case 0:return d?[4,z.getListFiles(d,s)]:[2];case 1:return h=V.sent(),h.length?[4,ce(h)]:[2];case 2:if(D=V.sent(),!D)return[2];if(F=[],k>U.DEFAULT_NULL_INDEX)$=h[0],T=B(x),T[k]=$,F.push(k);else if(i)for(T=B(x,h),S=x.length;S<T.length;S+=1)F.push(S);else T=[h[0]],F.push(0);return o==null||o(T,F),[2]}})})},ue=function(d){return O(void 0,void 0,void 0,function(){return X(this,function(h){switch(h.label){case 0:return[4,Q(d.target.files)];case 1:return h.sent(),k>U.DEFAULT_NULL_INDEX&&R(U.DEFAULT_NULL_INDEX),C.current&&(C.current.value=""),[2]}})})},de=w.useMemo(function(){return z.getAcceptTypeString(p,E)},[p,E]),me=function(d){d.preventDefault(),d.stopPropagation()},fe=function(d){d.preventDefault(),d.stopPropagation(),d.dataTransfer.items&&d.dataTransfer.items.length>0&&M(!0)},ge=function(d){d.preventDefault(),d.stopPropagation(),M(!1)},pe=function(d){d.preventDefault(),d.stopPropagation(),M(!1),d.dataTransfer.files&&d.dataTransfer.files.length>0&&Q(d.dataTransfer.files)},ve=function(d){d.preventDefault(),d.stopPropagation(),d.dataTransfer.clearData()};return w.default.createElement(w.default.Fragment,null,w.default.createElement("input",K({type:"file",accept:de,ref:C,multiple:i&&k===U.DEFAULT_NULL_INDEX,onChange:ue,style:{display:"none"}},y)),e==null?void 0:e({imageList:x,onImageUpload:re,onImageRemoveAll:le,onImageUpdate:oe,onImageRemove:se,errors:q,dragProps:{onDrop:pe,onDragEnter:fe,onDragLeave:ge,onDragOver:me,onDragStart:ve},isDragging:ne}))},ae=te.default=Le;const ke=()=>{const a=he();A.useEffect(()=>{a(_e("File Upload Preview"))});const[r,n]=A.useState([]),o=g=>{r.includes(g)?n(p=>p.filter(N=>N!==g)):n([...r,g])},[m,e]=A.useState([]),[c,s]=A.useState([]),f=69,i=(g,p)=>{e(g)},l=(g,p)=>{s(g)};return t.jsxs("div",{children:[t.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t.jsx("li",{children:t.jsx(be,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),t.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t.jsx("span",{children:"File Upload"})})]}),t.jsxs("div",{className:"pt-5 space-y-8",children:[t.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[t.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:t.jsx(ye,{})}),t.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t.jsx("a",{href:"https://www.npmjs.com/package/react-images-uploading",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-images-uploading"})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t.jsxs("div",{className:"panel",id:"single_file",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Single File Upload"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code1"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(ee,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"custom-file-container","data-upload-id":"myFirstImage",children:[t.jsxs("div",{className:"label-container",children:[t.jsx("label",{children:"Upload "}),t.jsx("button",{type:"button",className:"custom-file-container__image-clear",title:"Clear Image",onClick:()=>{e([])},children:"×"})]}),t.jsx("label",{className:"custom-file-container__custom-file"}),t.jsx("input",{type:"file",className:"custom-file-container__custom-file__custom-file-input",accept:"image/*"}),t.jsx("input",{type:"hidden",name:"MAX_FILE_SIZE",value:"10485760"}),t.jsx(ae,{value:m,onChange:i,maxNumber:f,children:({imageList:g,onImageUpload:p,onImageRemoveAll:N,onImageUpdate:u,onImageRemove:v,isDragging:b,dragProps:j})=>t.jsxs("div",{className:"upload__image-wrapper",children:[t.jsx("button",{className:"custom-file-container__custom-file__custom-file-control",onClick:p,children:"Choose File..."})," ",g.map((y,I)=>t.jsx("div",{className:"custom-file-container__image-preview relative",children:t.jsx("img",{src:y.dataURL,alt:"img",className:"m-auto"})},I))]})}),m.length===0?t.jsx("img",{src:"/assets/images/file-preview.svg",className:"max-w-md w-full m-auto",alt:""}):""]})}),r.includes("code1")&&t.jsx(W,{children:t.jsx("pre",{className:"language-typescript",children:`import { useEffect, useState } from 'react';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';

const [images, setImages] = useState<any>([]);
const maxNumber = 69;

const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    setImages(imageList as never[]);
};

<div className="custom-file-container" data-upload-id="myFirstImage">
    <div className="label-container">
        <label>Upload </label>
        <button
            type="button"
            className="custom-file-container__image-clear"
            title="Clear Image"
            onClick={() => {
                setImages([]);
            }}
        >
            ×
        </button>
    </div>
    <label className="custom-file-container__custom-file"></label>
    <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
    <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
            <div className="upload__image-wrapper">
                <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                    Choose File...
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                    <div key={index} className="custom-file-container__image-preview relative">
                        <img src={image.dataURL} alt="img" className="m-auto" />
                    </div>
                ))}
            </div>
        )}
    </ImageUploading>
    {images.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
</div>`})})]}),t.jsxs("div",{className:"multiple-file-upload panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Multiple File"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code2"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(ee,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"custom-file-container","data-upload-id":"mySecondImage",children:[t.jsxs("div",{className:"label-container",children:[t.jsx("label",{children:"Upload "}),t.jsx("button",{type:"button",className:"custom-file-container__image-clear",title:"Clear Image",onClick:()=>{s([])},children:"×"})]}),t.jsx("label",{className:"custom-file-container__custom-file"}),t.jsx("input",{type:"file",className:"custom-file-container__custom-file__custom-file-input",accept:"image/*"}),t.jsx("input",{type:"hidden",name:"MAX_FILE_SIZE",value:"10485760"}),t.jsx(ae,{multiple:!0,value:c,onChange:l,maxNumber:f,children:({imageList:g,onImageUpload:p,onImageRemoveAll:N,onImageUpdate:u,onImageRemove:v,isDragging:b,dragProps:j})=>t.jsxs("div",{className:"upload__image-wrapper",children:[t.jsx("button",{className:"custom-file-container__custom-file__custom-file-control",onClick:p,children:"Choose File..."})," ",t.jsx("div",{className:"grid gap-4 sm:grid-cols-3 grid-cols-1",children:g.map((y,I)=>t.jsxs("div",{className:"custom-file-container__image-preview relative",children:[t.jsx("button",{type:"button",className:"custom-file-container__image-clear bg-dark-light dark:bg-dark dark:text-white-dark rounded-full block w-fit p-0.5 absolute top-0 left-0",title:"Clear Image",onClick:()=>v(I),children:t.jsx(Ne,{className:"w-3 h-3"})}),t.jsx("img",{src:y.dataURL,alt:"img",className:"object-cover shadow rounded w-full !max-h-48"})]},I))})]})}),c.length===0?t.jsx("img",{src:"/assets/images/file-preview.svg",className:"max-w-md w-full m-auto",alt:""}):""]})}),r.includes("code2")&&t.jsx(W,{children:t.jsx("pre",{className:"language-typescript",children:`import { useEffect, useState } from 'react';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';

const [images2, setImages2] = useState<any>([]);
const maxNumber = 69;

const onChange2 = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    setImages2(imageList as never[]);
};

<div className="custom-file-container" data-upload-id="mySecondImage">
    <div className="label-container">
        <label>Upload </label>
        <button
            type="button"
            className="custom-file-container__image-clear"
            title="Clear Image"
            onClick={() => {
                setImages2([]);
            }}
        >
            ×
        </button>
    </div>
    <label className="custom-file-container__custom-file"></label>
    <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
    <ImageUploading multiple value={images2} onChange={onChange2} maxNumber={maxNumber}>
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
            <div className="upload__image-wrapper">
                <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                    Choose File...
                </button>
                &nbsp;
                <div className="grid gap-4 sm:grid-cols-3 grid-cols-1">
                    {imageList.map((image, index) => (
                        <div key={index} className="custom-file-container__image-preview relative">
                            <button
                                type="button"
                                className="custom-file-container__image-clear bg-dark-light dark:bg-dark dark:text-white-dark rounded-full block w-fit p-0.5 absolute top-0 left-0"
                                title="Clear Image"
                                onClick={() => onImageRemove(index)}
                            >
                                <svg>...</svg>
                            </button>
                            <img src={image.dataURL} alt="img" className="object-cover shadow rounded w-full !max-h-48" />
                        </div>
                    ))}
                </div>
            </div>
        )}
    </ImageUploading>
    {images2.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
</div>`})})]})]})]})]})};export{ke as default};
