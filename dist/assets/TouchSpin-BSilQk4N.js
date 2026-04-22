import{u as E,r as t,s as M,j as e,L as A}from"./index-BV1HbQoV.js";import{C as a}from"./Highlight-9oqHSD-A.js";import{I as d}from"./IconCode-D18auF5m.js";import{I as s}from"./IconMinus-DOiV9n9R.js";import{I as l}from"./IconPlus-oR0-uW2w.js";const G=()=>{const F=E();t.useEffect(()=>{F(M("TouchSpin"))});const[r,j]=t.useState([]),n=i=>{r.includes(i)?j(L=>L.filter(W=>W!==i)):j([...r,i])},[o,v]=t.useState(0),[m,N]=t.useState(0),[c,g]=t.useState(0),[u,w]=t.useState(0),[x,k]=t.useState(0),[b,C]=t.useState(0),[p,S]=t.useState(0),[y,V]=t.useState(0),[f,T]=t.useState(0),[h,O]=t.useState(0),_=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],[I,D]=t.useState(""),z=i=>(T(i),D(_[i]));return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(A,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"TouchSpin"})})]}),e.jsxs("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Button Spin"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code1"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(d,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>v(o>0?o-1:0),children:e.jsx(s,{className:"w-5 h-5"})}),e.jsx("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:0,max:100,readOnly:!0,value:o,onWheel:()=>v(o>0?o-1:0)}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>v(o<100?o+1:100),children:e.jsx(l,{})})]})})}),r.includes("code1")&&e.jsx(a,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value1, setValue1] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue1(value1 > 0 ? value1 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input
        type="number"
        placeholder="55"
        className="form-input rounded-none text-center"
        min={0}
        max={100}
        readOnly
        value={value1}
        onWheel={() => setValue1(value1 > 0 ? value1 - 1 : 0)}
    />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue1(value1 < 100 ? value1 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Spin button with step of 5"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code2"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(d,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>N(m>0?m-5:0),children:e.jsx(s,{className:"w-5 h-5"})}),e.jsx("input",{type:"number",placeholder:"5",step:"5",min:"0",max:"50",readOnly:!0,className:"form-input rounded-none text-center",value:m}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>N(m<100?m+5:100),children:e.jsx(l,{})})]})})}),r.includes("code2")&&e.jsx(a,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value2, setValue2] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue2(value2 > 0 ? value2 - 5 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="5" step="5" min="0" max="50" readOnly className="form-input rounded-none text-center" value={value2} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue2(value2 < 100 ? value2 + 5 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Wrapping value spin button"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code3"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(d,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>g(c>0?c-1:0),children:e.jsx(s,{className:"w-5 h-5"})}),e.jsx("input",{type:"number",placeholder:"_ _",className:"form-input rounded-none text-center",min:"0",max:"20",readOnly:!0,value:c}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>g(c<100?c+1:100),children:e.jsx(l,{})})]})})}),r.includes("code3")&&e.jsx(a,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value3, setValue3] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue3(value3 > 0 ? value3 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="_ _" className="form-input rounded-none text-center" min="0" max="20" readOnly value={value3} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue3(value3 < 100 ? value3 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel lg:row-span-2",id:"size",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Size"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code4"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(d,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"sizeLarge",children:"Large size"}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>w(u>0?u-1:0),children:e.jsx(s,{className:"w-5 h-5"})}),e.jsx("input",{id:"sizeLarge",type:"number",placeholder:"55",className:"form-input form-input-lg rounded-none text-center",min:"0",max:"25",readOnly:!0,value:u}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>w(u<100?u+1:100),children:e.jsx(l,{})})]})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"sizeDefault",children:"Default size"}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>k(x>0?x-1:0),children:e.jsx(s,{className:"w-5 h-5"})}),e.jsx("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:"0",max:"25",readOnly:!0,value:x}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>k(x<100?x+1:100),children:e.jsx(l,{})})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"sizeSmall",children:"Small size"}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>C(b>0?b-1:0),children:e.jsx(s,{className:"w-5 h-5"})}),e.jsx("input",{id:"sizeSmall",type:"number",placeholder:"55",className:"form-input form-input-sm rounded-none text-center",min:"0",max:"25",readOnly:!0,value:b}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>C(b<100?b+1:100),children:e.jsx(l,{})})]})]})]}),r.includes("code4")&&e.jsx(a,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value4, setValue4] = useState<any>(0);
const [value5, setValue5] = useState<any>(0);
const [value6, setValue6] = useState<any>(0);

{/*large*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue4(value4 > 0 ? value4 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input id="sizeLarge" type="number" placeholder="55" className="form-input form-input-lg rounded-none text-center" min="0" max="25" readOnly value={value4} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue4(value4 < 100 ? value4 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>

{/*default*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue5(value5 > 0 ? value5 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value5} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue5(value5 < 100 ? value5 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>

{/*small*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue6(value6 > 0 ? value6 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input id="sizeSmall" type="number" placeholder="55" className="form-input form-input-sm rounded-none text-center" min="0" max="25" readOnly value={value6} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue6(value6 < 100 ? value6 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",id:"inline_buttons",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Inline spin button"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code5"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(d,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"inline-flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>S(p>0?p-1:0),children:e.jsx(s,{className:"w-5 h-5"})}),e.jsx("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:"0",max:"25",readOnly:!0,value:p}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>S(p<100?p+1:100),children:e.jsx(l,{})})]})})}),r.includes("code5")&&e.jsx(a,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value7, setValue7] = useState<any>(0);

<div className="inline-flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue7(value7 > 0 ? value7 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value7} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue7(value7 < 100 ? value7 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",id:"vertical_buttons",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Vertical spin button"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code6"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(d,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"inline-flex flex-col w-[50px]",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center rounded-t-md p-3 font-semibold border border-b-0 border-primary",onClick:()=>V(y>0?y-1:0),children:e.jsx(s,{className:"w-5 h-5"})}),e.jsx("input",{type:"text",placeholder:"55",className:"form-input rounded-none text-center px-2",min:"0",max:"25",readOnly:!0,value:y}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center rounded-b-md p-3 font-semibold border border-t-0 border-primary",onClick:()=>V(y<100?y+1:100),children:e.jsx(l,{})})]})})}),r.includes("code6")&&e.jsx(a,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value8, setValue8] = useState<any>(0);

<div className="inline-flex flex-col w-[50px]">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center rounded-t-md p-3 font-semibold border border-b-0 border-primary"
        onClick={() => setValue8(value8 > 0 ? value8 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="text" placeholder="55" className="form-input rounded-none text-center px-2" min="0" max="25" readOnly value={value8} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center rounded-b-md p-3 font-semibold border border-t-0 border-primary"
        onClick={() => setValue8(value8 < 100 ? value8 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"space-y-8",id:"change_button_color",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Text with spin button"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code7"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(d,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>z(f>0?f-1:6),children:e.jsx(s,{className:"w-5 h-5"})}),e.jsx("input",{type:"text",placeholder:"Sunday",className:"form-input rounded-none text-center",min:"0",max:"6",readOnly:!0,value:I}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>z(f<6?f+1:0),children:e.jsx(l,{})})]})})}),r.includes("code7")&&e.jsx(a,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
const [value9, setValue9] = useState<any>(0);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const [day, setDay] = useState('');

const dayFormatter = (day: number) => {
    setValue9(day);
    return setDay(days[day]);
};

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => dayFormatter(value9 > 0 ? value9 - 1 : 6)}
    >
        <svg> ... </svg>
    </button>
    <input type="text" placeholder="Sunday" className="form-input rounded-none text-center" min="0" max="6" readOnly value={day} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => dayFormatter(value9 < 6 ? value9 + 1 : 0)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Change button class"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code8"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(d,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-danger text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-danger",onClick:()=>O(h>0?h-1:0),children:e.jsx(s,{className:"w-5 h-5"})}),e.jsx("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:"0",max:"25",readOnly:!0,value:h}),e.jsx("button",{type:"button",className:"bg-warning text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-warning",onClick:()=>O(h<100?h+1:100),children:e.jsx(l,{})})]})})}),r.includes("code8")&&e.jsx(a,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
const [value10, setValue10] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-danger text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-danger"
        onClick={() => setValue10(value10 > 0 ? value10 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value10} />
    <button
        type="button"
        className="bg-warning text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-warning"
        onClick={() => setValue10(value10 < 100 ? value10 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]})]})]})]})};export{G as default};
