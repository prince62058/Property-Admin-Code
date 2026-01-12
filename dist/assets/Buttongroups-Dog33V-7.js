import{u as x,r as a,s as p,a as h,j as e,L as j,D as i,d as c}from"./index-D85Vk71e.js";import{C as r}from"./Highlight-Bt5TEg3j.js";import{I as d}from"./IconCode-Dghq5ZF3.js";const g=()=>{const u=x();a.useEffect(()=>{u(p("Buttongroups"))});const l=h(n=>n.themeConfig.rtlClass)==="rtl",[t,o]=a.useState([]),s=n=>{t.includes(n)?o(b=>b.filter(m=>m!==n)):o([...t,n])};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(j,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Button Group"})})]}),e.jsxs("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",id:"horizontal",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Horizontal"}),e.jsx("button",{onClick:()=>{s("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(d,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5 text-center",children:e.jsxs("div",{className:"relative inline-flex align-middle",children:[e.jsx("button",{type:"button",className:"btn btn-dark ltr:rounded-r-none rtl:rounded-l-none",children:"Left"}),e.jsx("button",{type:"button",className:"btn btn-dark rounded-none",children:"Middle"}),e.jsx("button",{type:"button",className:"btn btn-dark ltr:rounded-l-none rtl:rounded-r-none",children:"Right"})]})}),t.includes("code1")&&e.jsx(r,{children:e.jsx("pre",{children:`<div className="relative inline-flex align-middle">
    <button type="button" className="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">
        Left
    </button>
    <button type="button" className="btn btn-dark rounded-none">
        Middle
    </button>
    <button type="button" className="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">
        Right
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",id:"input_group",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Group"}),e.jsx("button",{onClick:()=>{s("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(d,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"flex flex-wrap justify-center sm:justify-between items-center gap-2 w-full",children:[e.jsxs("div",{className:"relative inline-flex align-middle",children:[e.jsx("button",{type:"button",className:"btn btn-dark ltr:rounded-r-none rtl:rounded-l-none",children:"1"}),e.jsx("button",{type:"button",className:"btn btn-dark rounded-none",children:"2"}),e.jsx("button",{type:"button",className:"btn btn-dark rounded-none",children:"3"}),e.jsx("button",{type:"button",className:"btn btn-dark ltr:rounded-l-none rtl:rounded-r-none",children:"4"})]}),e.jsxs("div",{className:"flex relative items-stretch flex-wrap",children:[e.jsx("div",{className:"ltr:-mr-px rtl:-ml-px flex",children:e.jsx("span",{className:"border border-white-light dark:border-[#17263c] ltr:rounded-l rtl:rounded-r bg-[#f1f2f3] flex items-center justify-center text-black px-4 py-1.5 dark:bg-[#1a1c2d] dark:text-white-dark",children:"@"})}),e.jsx("input",{type:"text",placeholder:"Input group example",className:"flex-1 form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]})}),t.includes("code2")&&e.jsx(r,{children:e.jsx("pre",{children:`<div className="flex flex-wrap justify-center sm:justify-between items-center gap-2 w-full">
    <div className="relative inline-flex align-middle">
        <button type="button" className="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">
            1
        </button>
        <button type="button" className="btn btn-dark rounded-none">
            2
        </button>
        <button type="button" className="btn btn-dark rounded-none">
            3
        </button>
        <button type="button" className="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">
            4
        </button>
    </div>
    <div className="flex relative items-stretch flex-wrap">
        <div className="ltr:-mr-px rtl:-ml-px flex">
            <span className="border border-white-light dark:border-[#17263c] ltr:rounded-l rtl:rounded-r bg-[#f1f2f3] flex items-center justify-center text-black px-4 py-1.5 dark:bg-[#1a1c2d] dark:text-white-dark">
                @
            </span>
        </div>
        <input type="text" placeholder="Input group example" className="flex-1 form-input ltr:rounded-l-none rtl:rounded-r-none" />
    </div>
</div>;
`})})]}),e.jsxs("div",{className:"panel",id:"vertical",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Vertical"}),e.jsx("button",{onClick:()=>{s("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(d,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5 text-center",children:e.jsxs("div",{className:"relative inline-flex align-middle flex-col items-start justify-center",children:[e.jsx("button",{type:"button",className:"btn btn-dark rounded-b-none w-full",children:"Button"}),e.jsx("div",{className:"relative",children:e.jsx("div",{className:"dropdown",children:e.jsx(i,{offset:[0,5],placement:`${l?"bottom-start":"bottom-end"}`,btnClassName:"btn dropdown-toggle btn-dark rounded-none",button:e.jsxs(e.Fragment,{children:["Dropdown",e.jsx("span",{className:"shrink-0",children:e.jsx(c,{className:"ltr:ml-2 rtl:mr-2 inline-block shrink-0"})})]}),children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"Dropdown link"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Dropdown link"})})]})})})}),e.jsx("button",{type:"button",className:"btn btn-dark rounded-none w-full",children:"Button"}),e.jsx("button",{type:"button",className:"btn btn-dark rounded-none w-full",children:"Button"}),e.jsx("div",{className:"relative",children:e.jsx("div",{className:"dropdown",children:e.jsx(i,{offset:[0,5],placement:`${l?"top-start":"top-end"}`,btnClassName:"btn dropdown-toggle btn-dark rounded-t-none",button:e.jsxs(e.Fragment,{children:["Dropdown",e.jsx("span",{className:"shrink-0",children:e.jsx(c,{className:"ltr:ml-2 rtl:mr-2 inline-block shrink-0"})})]}),children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"Dropdown link"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Dropdown link"})})]})})})})]})}),t.includes("code3")&&e.jsx(r,{children:e.jsx("pre",{children:`import Dropdown from '../../components/Dropdown';

<div className="relative inline-flex align-middle flex-col items-start justify-center">
    <button type="button" className="btn btn-dark rounded-b-none w-full">
        Button
    </button>
    <div className="relative">
        <div className="dropdown">
            <Dropdown
                offset={[0, 5]}
                placement={\`${l?"bottom-start":"bottom-end"}\`}
                btnClassName="btn dropdown-toggle btn-dark rounded-none"
                button={
                    <>
                        Dropdown
                        <span>
                            <svg>...</svg>
                        </span>
                    </>
                }
            >
                <ul>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    </div>
    <button type="button" className="btn btn-dark rounded-none w-full">
        Button
    </button>
    <button type="button" className="btn btn-dark rounded-none w-full">
        Button
    </button>
    <div className="relative">
        <div className="dropdown">
            <Dropdown
                offset={[0, 5]}
                placement={\`${l?"top-start":"top-end"}\`}
                btnClassName="btn dropdown-toggle btn-dark rounded-t-none"
                button={
                    <>
                        Dropdown
                        <span>
                            <svg>...</svg>
                        </span>
                    </>
                }
            >
                <ul>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    </div>
</div>`})})]})]})]})};export{g as default};
