import{u as g,r as i,s as o,j as e,L as p}from"./index-BV1HbQoV.js";import{C as n}from"./Highlight-9oqHSD-A.js";import{I as l}from"./IconCode-D18auF5m.js";import{I as x}from"./IconFacebook-0cwDH_v7.js";import{I as b}from"./IconSettings-D-_WjGen.js";const y=()=>{const c=g();i.useEffect(()=>{c(o("Badges"))});const[s,t]=i.useState([]),a=r=>{s.includes(r)?t(d=>d.filter(m=>m!==r)):t([...s,r])};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(p,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Badges"})})]}),e.jsxs("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",id:"basic",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e.jsx("button",{onClick:()=>{a("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(l,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e.jsx("span",{className:"badge bg-primary",children:"Primary"}),e.jsx("span",{className:"badge bg-secondary",children:"Secondary"}),e.jsx("span",{className:"badge bg-success",children:"Success"}),e.jsx("span",{className:"badge bg-danger",children:"Danger"}),e.jsx("span",{className:"badge bg-warning",children:"Warning"}),e.jsx("span",{className:"badge bg-info",children:"Info"}),e.jsx("span",{className:"badge bg-dark",children:"Dark"})]})}),s.includes("code1")&&e.jsx(n,{children:e.jsx("pre",{children:`<span className="badge bg-primary">Primary</span>

<span className="badge bg-secondary">Secondary</span>

<span className="badge bg-success">Success</span>

<span className="badge bg-danger">Danger</span>

<span className="badge bg-warning">Warning</span>

<span className="badge bg-info">Info</span>

<span className="badge bg-dark">Dark</span>
`})})]}),e.jsxs("div",{className:"panel",id:"outline",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Outline"}),e.jsx("button",{onClick:()=>{a("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(l,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e.jsx("span",{className:"badge badge-outline-primary",children:"Primary"}),e.jsx("span",{className:"badge badge-outline-secondary",children:"Secondary"}),e.jsx("span",{className:"badge badge-outline-success",children:"Success"}),e.jsx("span",{className:"badge badge-outline-danger",children:"Danger"}),e.jsx("span",{className:"badge badge-outline-warning",children:"Warning"}),e.jsx("span",{className:"badge badge-outline-info",children:"Info"}),e.jsx("span",{className:"badge badge-outline-dark",children:"Dark"})]})}),s.includes("code2")&&e.jsx(n,{children:e.jsx("pre",{children:`<span className="badge badge-outline-primary">Primary</span>

<span className="badge badge-outline-secondary">Secondary</span>

<span className="badge badge-outline-success">Success</span>

<span className="badge badge-outline-danger">Danger</span>

<span className="badge badge-outline-warning">Warning</span>

<span className="badge badge-outline-info">Info</span>

<span className="badge badge-outline-dark">Dark</span>`})})]}),e.jsxs("div",{className:"panel",id:"pills",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Pills"}),e.jsx("button",{onClick:()=>{a("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(l,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"flex w-full",children:[e.jsx("div",{className:"flex items-center justify-center w-1/2",children:e.jsx("span",{className:"badge bg-primary rounded-full",children:"Primary"})}),e.jsx("div",{className:"flex items-center justify-center w-1/2",children:e.jsx("span",{className:"badge badge-outline-primary rounded-full",children:"Primary"})})]})}),s.includes("code3")&&e.jsx(n,{children:e.jsx("pre",{children:`<div className="flex items-center justify-center w-1/2">
    <span className="badge bg-primary rounded-full">Primary</span>
</div>

<div className="flex items-center justify-center w-1/2">
    <span className="badge badge-outline-primary rounded-full">Primary</span>
</div>`})})]}),e.jsxs("div",{className:"panel",id:"classic",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Classic"}),e.jsx("button",{onClick:()=>{a("code4")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(l,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"flex w-full",children:[e.jsx("div",{className:"flex items-center justify-center w-1/2",children:e.jsx("span",{className:"badge bg-primary rounded-none",children:"Primary"})}),e.jsx("div",{className:"flex items-center justify-center w-1/2",children:e.jsx("span",{className:"badge badge-outline-primary rounded-none",children:"Primary"})})]})}),s.includes("code4")&&e.jsx(n,{children:e.jsx("pre",{children:`<div className="flex items-center justify-center w-1/2">
    <span className="badge bg-primary rounded-none">Primary</span>
</div>

<div className="flex items-center justify-center w-1/2">
    <span className="badge badge-outline-primary rounded-none">Primary</span>
</div>`})})]}),e.jsxs("div",{className:"panel",id:"with_headings",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Badges with Heading"}),e.jsx("button",{onClick:()=>{a("code5")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(l,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5 dark:text-white-dark",children:[e.jsx("p",{className:"mb-5",children:"Badges scale to match the size of the immediate parent element by using relative font sizing and em units."}),e.jsxs("div",{className:"space-y-2 prose dark:prose-headings:text-white-dark",children:[e.jsxs("h1",{children:["Example heading ",e.jsx("span",{className:"badge bg-primary",children:"Primary"})]}),e.jsxs("h2",{children:["Example heading ",e.jsx("span",{className:"badge bg-success",children:"Success"})]}),e.jsxs("h3",{children:["Example heading ",e.jsx("span",{className:"badge bg-info",children:"Info"})]}),e.jsxs("h4",{children:["Example heading ",e.jsx("span",{className:"badge bg-warning",children:"Warning"})]}),e.jsxs("h5",{children:["Example heading ",e.jsx("span",{className:"badge bg-danger",children:"Danger"})]}),e.jsxs("h6",{children:["Example heading ",e.jsx("span",{className:"badge bg-dark",children:"Dark"})]})]})]}),s.includes("code5")&&e.jsx(n,{children:e.jsx("pre",{children:`<div className="space-y-2 prose dark:prose-headings:text-white-dark">
    <h1>
        Example heading <span className="badge bg-primary">Primary</span>
    </h1>
    <h2>
        Example heading <span className="badge bg-success">Success</span>
    </h2>
    <h3>
        Example heading <span className="badge bg-info">Info</span>
    </h3>
    <h4>
        Example heading <span className="badge bg-warning">Warning</span>
    </h4>
    <h5>
        Example heading <span className="badge bg-danger">Danger</span>
    </h5>
    <h6>
        Example heading <span className="badge bg-dark">Dark</span>
    </h6>
</div>`})})]}),e.jsxs("div",{className:"panel",id:"custom",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Custom Badges"}),e.jsx("button",{onClick:()=>{a("code6")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(l,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e.jsxs("button",{type:"button",className:"btn btn-primary my-4",children:[e.jsxs("span",{className:"flex items-center",children:[e.jsx(x,{className:"w-4.5 h-4.5 ltr:mr-1 rtl:ml-1 shrink-0"}),"Facebook"]}),e.jsx("span",{className:"badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full",children:"9"})]}),e.jsxs("button",{type:"button",className:"btn btn-info my-4",children:[e.jsx("span",{children:"Twitter"}),e.jsx("span",{className:"badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full",children:"4"})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary px-5 my-4",children:[e.jsx("span",{children:e.jsx(b,{className:"w-5 h-5"})}),e.jsx("span",{className:"badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full",children:"8"})]}),e.jsxs("button",{type:"button",className:"btn btn-dark my-4",children:["Notifications",e.jsx("span",{className:"badge my-0 bg-white-light text-black ltr:ml-4 rtl:mr-4",children:"4"})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e.jsxs("span",{className:"badge bg-warning p-0 ltr:pr-4 rtl:pl-4 my-4 rounded-full flex items-center text-base",children:[e.jsx("img",{src:"/assets/images/profile-34.jpeg",className:"w-10 h-10 rounded-full object-cover",alt:"img"}),e.jsx("span",{className:"ltr:ml-2 rtl:mr-2",children:"John Doe"})]}),e.jsxs("span",{className:"badge bg-danger p-0 ltr:pr-4 rtl:pl-4 my-4 rounded-full flex items-center text-base",children:[e.jsx("img",{src:"/assets/images/profile-34.jpeg",className:"w-10 h-10 rounded-full object-cover",alt:"img"}),e.jsx("span",{className:"ltr:ml-2 rtl:mr-2",children:"John Doe"}),e.jsx("span",{className:"ltr:ml-4 rtl:mr-4 cursor-pointer hover:opacity-90",children:"x"})]})]})]})}),s.includes("code6")&&e.jsx(n,{children:e.jsx("pre",{children:`<button type="button" className="btn btn-primary my-4">
    <span className="flex items-center">
        <svg>...</svg>
        Facebook
    </span>
    <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">9</span>
</button>

<button type="button" className="btn btn-info my-4">
    <span>Twitter</span>
    <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">4</span>
</button>

<button type="button" className="btn btn-secondary px-5 my-4">
    <span>
        <svg>...</svg>
    </span>
    <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">8</span>
</button>

<button type="button" className="btn btn-dark my-4">
    Notifications
    <span className="badge my-0 bg-white-light text-black ltr:ml-4 rtl:mr-4">4</span>
</button>

<div className="flex flex-wrap items-center justify-center gap-3">
    <span className="badge bg-warning p-0 ltr:pr-4 rtl:pl-4 my-4 rounded-full flex items-center text-base">
        <img src="/assets/images/profile-34.jpeg" className="w-10 h-10 rounded-full object-cover" alt="img" />
        <span className="ltr:ml-2 rtl:mr-2">John Doe</span>
    </span>
    <span className="badge bg-danger p-0 ltr:pr-4 rtl:pl-4 my-4 rounded-full flex items-center text-base">
        <img src="/assets/images/profile-34.jpeg" className="w-10 h-10 rounded-full object-cover" alt="img" />
        <span className="ltr:ml-2 rtl:mr-2">John Doe</span>
        <span className="ltr:ml-4 rtl:mr-4 cursor-pointer hover:opacity-90">x</span>
    </span>
</div>`})})]})]})]})};export{y as default};
