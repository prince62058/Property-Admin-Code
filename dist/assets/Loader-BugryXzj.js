import{u as b,r as t,s as u,j as e,L as p}from"./index-BV1HbQoV.js";import{C as l}from"./Highlight-9oqHSD-A.js";import{I as s}from"./IconCode-D18auF5m.js";import{I as i}from"./IconLoader-CeGvEoxI.js";const N=()=>{const m=b();t.useEffect(()=>{m(u("Loader"))});const[a,d]=t.useState([]),n=r=>{a.includes(r)?d(o=>o.filter(c=>c!==r)):d([...a,r])};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(p,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Loader"})})]}),e.jsxs("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",id:"with_buttons",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Loaders with Buttons"}),e.jsx("button",{onClick:()=>{n("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(s,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-center w-full gap-4",children:[e.jsxs("button",{type:"button",className:"btn btn-info btn-lg shrink-0",children:[e.jsx(i,{className:"animate-[spin_2s_linear_infinite] inline-block align-middle ltr:mr-2 rtl:ml-2 shrink-0"}),"Loading"]}),e.jsxs("button",{type:"button",className:"btn btn-danger btn-lg",children:[e.jsx("span",{className:"animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 ltr:mr-4 rtl:ml-4 inline-block align-middle shrink-0"}),"Loading"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-lg",children:[e.jsx("span",{className:"animate-ping w-3 h-3 ltr:mr-4 rtl:ml-4 inline-block rounded-full bg-white shrink-0"}),"Loading"]})]})}),a.includes("code1")&&e.jsx(l,{children:e.jsx("pre",{className:"language-xml",children:`<button type="button" className="btn btn-info btn-lg">
    <svg>...</svg>
    Loading
</button>

<button type="button" className="btn btn-danger btn-lg">
    <span className="animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 ltr:mr-4 rtl:ml-4 inline-block align-middle"></span>
    Loading
</button>

<button type="button" className="btn btn-secondary btn-lg">
    <span className="animate-ping w-3 h-3 ltr:mr-4 rtl:ml-4 inline-block rounded-full bg-white"></span>
    Loading
</button>`})})]}),e.jsxs("div",{className:"panel",id:"positions",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Position"}),e.jsx("button",{onClick:()=>{n("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(s,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"flex flex-wrap w-full",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center mb-3 sm:mb-0",children:[e.jsx("p",{className:"w-full mb-2",children:"Default Button"}),e.jsxs("button",{type:"button",className:"btn btn-primary btn-lg",children:[e.jsx(i,{className:"animate-[spin_2s_linear_infinite] inline-block align-middle ltr:mr-2 rtl:ml-2 shrink-0"}),"Loading"]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center",children:[e.jsx("p",{className:"w-full mb-2",children:"Outline Button"}),e.jsxs("button",{type:"button",className:"btn btn-outline-primary btn-lg",children:["Loading",e.jsx(i,{className:"animate-[spin_2s_linear_infinite] inline-block align-middle ltr:ml-2 rtl:mr-2 shrink-0"})]})]})]})}),a.includes("code2")&&e.jsx(l,{children:e.jsx("pre",{className:"language-xml",children:`<div className="flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center mb-3 sm:mb-0">
    <p className="w-full mb-2">Default Button</p>
    <button type="button" className="btn btn-primary btn-lg">
        <svg>...</svg>
        Loading
    </button>
</div>
<div className="flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center">
    <p className="w-full mb-2">Outline Button</p>
    <button type="button" className="btn btn-outline-primary btn-lg">
        Loading
        <svg>...</svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",id:"sizes",children:[e.jsxs("div",{className:"flex items-center justify-between mb-10",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Sizes"}),e.jsx("button",{onClick:()=>{n("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(s,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"grid grid-cols-3 w-full gap-4",children:[e.jsx("span",{className:"animate-spin border-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-spin border-[3px] border-success border-l-transparent rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-spin border-4 border-transparent border-l-primary rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-spin border-[3px] border-transparent border-l-primary rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"w-5 h-5 m-auto mb-10",children:e.jsx("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-info"})}),e.jsx("span",{className:"w-4 h-4 m-auto mb-10",children:e.jsx("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-info"})}),e.jsx("span",{className:"w-3 h-3 m-auto mb-10",children:e.jsx("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-info"})})]})}),a.includes("code3")&&e.jsx(l,{children:e.jsx("pre",{className:"language-xml",children:`<span className="animate-spin border-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-[3px] border-success border-l-transparent rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-[3px] border-transparent border-l-primary rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"></span>

<span className="w-5 h-5 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>

<span className="w-3 h-3 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>`})})]}),e.jsxs("div",{className:"panel",id:"colors",children:[e.jsxs("div",{className:"flex items-center justify-between mb-10",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Colors"}),e.jsx("button",{onClick:()=>{n("code4")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(s,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"grid grid-cols-4 w-full gap-4",children:[e.jsx("span",{className:"animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-spin border-4 border-danger border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-spin border-4 border-warning border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-spin border-4 border-primary border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"}),e.jsx("span",{className:"animate-spin border-4 border-transparent border-l-danger rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-spin border-4 border-transparent border-l-warning rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"w-4 h-4 m-auto mb-10",children:e.jsx("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-info"})}),e.jsx("span",{className:"w-4 h-4 m-auto mb-10",children:e.jsx("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-danger"})}),e.jsx("span",{className:"w-4 h-4 m-auto mb-10",children:e.jsx("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-warning"})}),e.jsx("span",{className:"w-4 h-4 m-auto mb-10",children:e.jsx("span",{className:"animate-ping inline-flex h-full w-full rounded-full bg-primary"})})]})}),a.includes("code4")&&e.jsx(l,{children:e.jsx("pre",{className:"language-xml",children:`<span className="animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-danger border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-warning border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-primary border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"></span>

<span className="animate-spin border-4 border-transparent border-l-danger rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-warning rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-danger"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-warning"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-primary"></span>
</span>`})})]}),e.jsxs("div",{className:"panel",id:"custom",children:[e.jsxs("div",{className:"flex items-center justify-between mb-10",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Custom"}),e.jsx("button",{onClick:()=>{n("code5")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(s,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"grid grid-cols-3 w-full gap-4",children:[e.jsx("span",{className:"animate-spin border-8 border-[#f1f2f3] border-l-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-[spin_2s_linear_infinite] border-8 border-[#f1f2f3] border-l-primary border-r-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"}),e.jsx("span",{className:"animate-[spin_3s_linear_infinite] border-8 border-r-warning border-l-primary border-t-danger border-b-success rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"})]})}),a.includes("code5")&&e.jsx(l,{children:e.jsx("pre",{className:"language-xml",children:`<span className="animate-spin border-8 border-[#f1f2f3] border-l-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span>

<span className="animate-[spin_2s_linear_infinite] border-8 border-[#f1f2f3] border-l-primary border-r-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span>

<span className="animate-[spin_3s_linear_infinite] border-8 border-r-warning border-l-primary border-t-danger border-b-success rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span>`})})]})]})]})};export{N as default};
