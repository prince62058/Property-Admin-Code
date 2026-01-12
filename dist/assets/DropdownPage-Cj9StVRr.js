import{u as h,r as b,s as x,a as j,j as t,L as g,n as y,D as n,d as l}from"./index-D85Vk71e.js";import{C as r}from"./Highlight-Bt5TEg3j.js";import{I as i}from"./IconCode-Dghq5ZF3.js";import{I as a}from"./IconHorizontalDots-BOEcVEaZ.js";const k=()=>{const u=h();b.useEffect(()=>{u(x("Dropdowns"))});const e=j(d=>d.themeConfig.rtlClass)==="rtl",[o,c]=b.useState([]),s=d=>{o.includes(d)?c(m=>m.filter(p=>p!==d)):c([...o,d])};return t.jsxs("div",{children:[t.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t.jsx("li",{children:t.jsx(g,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),t.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t.jsx("span",{children:"Dropdowns"})})]}),t.jsxs("div",{className:"pt-5 space-y-8",children:[t.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[t.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:t.jsx(y,{})}),t.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t.jsx("a",{href:"https://popper.js.org/docs/v2/",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://popper.js.org/docs/v2/"})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t.jsxs("div",{className:"panel",id:"basic",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),t.jsx("button",{onClick:()=>{s("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-primary dropdown-toggle",button:t.jsxs(t.Fragment,{children:["Action",t.jsx("span",{children:t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})}),t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-outline-primary dropdown-toggle",button:t.jsxs(t.Fragment,{children:["Action",t.jsx("span",{children:t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})})]})}),o.includes("code1")&&t.jsx(r,{children:t.jsx("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-primary dropdown-toggle"
        button={
            <>
                Action
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
    <ul className="!min-w-[170px]">
        <li>
            <button type="button">
                Action
            </button>
        </li>
        <li>
            <button type="button">
                Another action
            </button>
        </li>
        <li>
            <button type="button">
                Something else here
            </button>
        </li>
        <li>
            <button type="button">
                Separated link
            </button>
        </li>
    </ul>
    </Dropdown>
</div>
<div className="dropdown">
    <Dropdown
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn btn-outline-primary dropdown-toggle"
            button={
                <>
                    Action
                    <span>
                        <svg>...</svg>
                    </span>
                </>
            }
        >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>
`})})]}),t.jsx("div",{className:"space-y-8",children:t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dropup"}),t.jsx("button",{onClick:()=>{s("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"top-start":"top-end"}`,btnClassName:"btn btn-info dropdown-toggle inline-flex",button:t.jsxs(t.Fragment,{children:["Up",t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 inline-block rotate-180"})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})}),t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"top-start":"top-end"}`,btnClassName:"btn btn-outline-info dropdown-toggle inline-flex",button:t.jsxs(t.Fragment,{children:["Up",t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 inline-block rotate-180"})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})})]})}),o.includes("code2")&&t.jsx(r,{children:t.jsx("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-start' : 'top-end'}\`}
        btnClassName="btn btn-info dropdown-toggle inline-flex"
        button={
            <>
                Up
                <svg>...</svg>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-start' : 'top-end'}\`}
        btnClassName="btn btn-outline-info dropdown-toggle inline-flex"
        button={
            <>
                Up
                <svg>...</svg>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]})}),t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dropright"}),t.jsx("button",{onClick:()=>{s("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"right-end":"right-start"}`,btnClassName:"btn btn-warning dropdown-toggle !flex",button:t.jsxs(t.Fragment,{children:["Right",t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 rtl:rotate-90 -rotate-90 inline-block"})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})}),t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"right-end":"right-start"}`,btnClassName:"btn btn-outline-warning dropdown-toggle !flex",button:t.jsxs(t.Fragment,{children:["Right",t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 rtl:rotate-90 -rotate-90 inline-block"})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})})]})}),o.includes("code3")&&t.jsx(r,{children:t.jsx("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'right-end' : 'right-start'}\`}
        btnClassName="btn btn-warning dropdown-toggle !flex"
        button={
            <>
                Right
                <svg>...</svg>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'right-end' : 'right-start'}\`}
        btnClassName="btn btn-outline-warning dropdown-toggle !flex"
        button={
            <>
                Right
                <svg>...</svg>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]}),t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dropleft"}),t.jsx("button",{onClick:()=>{s("code4")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"left-end":"left-start"}`,btnClassName:"btn btn-danger dropdown-toggle !flex",button:t.jsxs(t.Fragment,{children:[t.jsx(l,{className:"ltr:mr-1 rtl:ml-1 rtl:-rotate-90 rotate-90 inline-block"}),"Left"]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})}),t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"left-end":"left-start"}`,btnClassName:"btn btn-outline-danger dropdown-toggle !flex",button:t.jsxs(t.Fragment,{children:[t.jsx(l,{className:"ltr:mr-1 rtl:ml-1 rtl:-rotate-90 rotate-90 inline-block"}),"Left"]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})})]})}),o.includes("code4")&&t.jsx(r,{children:t.jsx("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'left-end' : 'left-start'}\`}
        btnClassName="btn btn-danger dropdown-toggle !flex"
        button={
            <>
                <svg>...</svg>
                Left
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'left-end' : 'left-start'}\`}
        btnClassName="btn btn-outline-danger dropdown-toggle !flex"
        button={
            <>
                <svg>...</svg>
                Left
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]}),t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Small Button"}),t.jsx("button",{onClick:()=>{s("code5")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-dark btn-sm dropdown-toggle",button:t.jsxs(t.Fragment,{children:["Small Button",t.jsx("span",{children:t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})}),t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-outline-dark btn-sm dropdown-toggle",button:t.jsxs(t.Fragment,{children:["Small Button",t.jsx("span",{children:t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})})]})}),o.includes("code5")&&t.jsx(r,{children:t.jsx("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-dark btn-sm dropdown-toggle"
        button={
            <>
                Small Button
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-outline-dark btn-sm dropdown-toggle"
        button={
            <>
                Small Button
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]}),t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Large Button"}),t.jsx("button",{onClick:()=>{s("code6")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-success btn-lg dropdown-toggle",button:t.jsxs(t.Fragment,{children:["Large Button",t.jsx("span",{children:t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})}),t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-outline-success btn-lg dropdown-toggle",button:t.jsxs(t.Fragment,{children:["Large Button",t.jsx("span",{children:t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})})]})}),o.includes("code6")&&t.jsx(r,{children:t.jsx("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-success btn-lg dropdown-toggle"
        button={
            <>
                Large Button
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-outline-success btn-lg dropdown-toggle"
        button={
            <>
                Large Button
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]}),t.jsxs("div",{className:"panel",id:"grouped",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Grouped Dropdown Buttons"}),t.jsx("button",{onClick:()=>{s("code7")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t.jsx("div",{className:"flex items-center justify-center",children:t.jsxs("div",{className:"relative inline-flex align-middle",children:[t.jsx("button",{type:"button",className:"btn btn-secondary ltr:rounded-r-none rtl:rounded-l-none",children:"1"}),t.jsx("button",{type:"button",className:"btn btn-secondary rounded-none",children:"2"}),t.jsx("div",{className:"relative inline-flex align-middle",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"bottom-start":"bottom-end"}`,btnClassName:"btn dropdown-toggle btn-secondary flex ltr:rounded-l-none rtl:rounded-r-none",button:t.jsxs(t.Fragment,{children:["Dropdown",t.jsx("span",{children:t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})})]})}),t.jsx("div",{className:"flex items-center justify-center",children:t.jsxs("div",{className:"relative inline-flex align-middle",children:[t.jsx("button",{type:"button",className:"btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 ltr:rounded-r-none rtl:rounded-l-none",children:"1"}),t.jsx("button",{type:"button",className:"btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 rounded-none",children:"2"}),t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"bottom-start":"bottom-end"}`,btnClassName:"btn dropdown-toggle btn-outline-secondary flex ltr:rounded-l-none rtl:rounded-r-none",button:t.jsxs(t.Fragment,{children:["Dropdown",t.jsx("span",{children:t.jsx(l,{className:"ltr:ml-1 rtl:mr-1 inline-block"})})]}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})]})})]})}),o.includes("code7")&&t.jsx(r,{children:t.jsx("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="relative inline-flex align-middle">
    <button type="button" className="btn btn-secondary ltr:rounded-r-none rtl:rounded-l-none">
        1
    </button>
    <button type="button" className="btn btn-secondary rounded-none">
        2
    </button>
    <div className="relative inline-flex align-middle">
        <div className="dropdown">
            <Dropdown
                placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
                btnClassName="btn dropdown-toggle btn-secondary flex ltr:rounded-l-none rtl:rounded-r-none"
                button={
                    <>
                        Dropdown
                        <span>
                            <svg>...</svg>
                        </span>
                    </>
                }
            >
                <ul className="!min-w-[170px]">
                    <li>
                        <button type="button">        Action</button>
                    </li>
                    <li>
                        <button type="button">        Another action</button>
                    </li>
                    <li>
                        <button type="button">        Something else here</button>
                    </li>
                    <li>
                        <button type="button">        Separated link</button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    </div>
</div>
<div className="relative inline-flex align-middle">
    <button type="button" className="btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 ltr:rounded-r-none rtl:rounded-l-none">
        1
    </button>
    <button type="button" className="btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 rounded-none">
        2
    </button>
    <div className="dropdown">
        <Dropdown
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn dropdown-toggle btn-outline-secondary flex ltr:rounded-l-none rtl:rounded-r-none"
            button={
                <>
                    Dropdown
                    <span>
                        <svg>...</svg>
                    </span>
                </>
            }
        >
            <ul className="!min-w-[170px]">
                <li>
                    <button type="button">    Action</button>
                </li>
                <li>
                    <button type="button">    Another action</button>
                </li>
                <li>
                    <button type="button">    Something else here</button>
                </li>
                <li>
                    <button type="button">    Separated link</button>
                </li>
            </ul>
        </Dropdown>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel",id:"split",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Split"}),t.jsx("button",{onClick:()=>{s("code8")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex flex-wrap w-full gap-7 justify-around",children:[t.jsx("div",{className:"flex items-center justify-center",children:t.jsxs("div",{className:"inline-flex",children:[t.jsx("button",{className:"btn btn-primary ltr:rounded-r-none rtl:rounded-l-none",children:"Action"}),t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"bottom-start":"bottom-end"}`,btnClassName:"btn dropdown-toggle btn-primary ltr:rounded-l-none rtl:rounded-r-none border-l-[#4468fd] before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block before:border-t-white-light h-full",button:t.jsx("span",{className:"sr-only",children:"Toggle dropdown"}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})]})}),t.jsx("div",{className:"flex items-center justify-center",children:t.jsxs("div",{className:"inline-flex",children:[t.jsx("button",{className:"btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none",children:"Action"}),t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"bottom-start":"bottom-end"}`,btnClassName:"btn btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full",button:t.jsx("span",{className:"sr-only",children:"Toggle dropdown"}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})]})})]})}),o.includes("code8")&&t.jsx(r,{children:t.jsx("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="inline-flex">
    <button className="btn btn-primary ltr:rounded-r-none rtl:rounded-l-none">Action</button>
    <div className="dropdown">
        <Dropdown
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn dropdown-toggle btn-primary ltr:rounded-l-none rtl:rounded-r-none border-l-[#4468fd] before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block before:border-t-white-light h-full"
            button={<span className="sr-only">Toggle dropdown</span>}
        >
            <ul className="!min-w-[170px]">
                <li>
                    <button type="button">    Action</button>
                </li>
                <li>
                    <button type="button">    Another action</button>
                </li>
                <li>
                    <button type="button">    Something else here</button>
                </li>
                <li>
                    <button type="button">    Separated link</button>
                </li>
            </ul>
        </Dropdown>
    </div>
</div>
<div className="inline-flex">
    <button className="btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none">Action</button>
    <div className="dropdown">
        <Dropdown
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full"
            button={<span className="sr-only">Toggle dropdown</span>}
        >
            <ul className="!min-w-[170px]">
                <li>
                    <button type="button">    Action</button>
                </li>
                <li>
                    <button type="button">    Another action</button>
                </li>
                <li>
                    <button type="button">    Something else here</button>
                </li>
                <li>
                    <button type="button">    Separated link</button>
                </li>
            </ul>
        </Dropdown>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel",id:"custom",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Custom Dropdown"}),t.jsx("button",{onClick:()=>{s("code9")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex w-full",children:[t.jsx("div",{className:"flex items-center justify-center w-1/4",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"top-end":"top-start"}`,btnClassName:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary",button:t.jsx(a,{className:"w-6 h-6 rotate-90 opacity-70"}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})}),t.jsx("div",{className:"flex items-center justify-center w-1/4",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"top-end":"top-start"}`,btnClassName:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary",button:t.jsx(a,{className:"w-6 h-6 opacity-70"}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})}),t.jsx("div",{className:"flex items-center justify-center w-1/4",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"top-end":"top-start"}`,btnClassName:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary",button:t.jsx(a,{className:"w-6 h-6 rotate-90 opacity-70"}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})}),t.jsx("div",{className:"flex items-center justify-center w-1/4",children:t.jsx("div",{className:"dropdown",children:t.jsx(n,{placement:`${e?"top-start":"top-end"}`,btnClassName:"btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary",button:t.jsx(a,{className:"w-6 h-6 opacity-70"}),children:t.jsxs("ul",{className:"!min-w-[170px]",children:[t.jsx("li",{children:t.jsx("button",{type:"button",children:"Action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Another action"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Something else here"})}),t.jsx("li",{children:t.jsx("button",{type:"button",children:"Separated link"})})]})})})})]})}),o.includes("code9")&&t.jsx(r,{children:t.jsx("pre",{children:`import Dropdown from '../../components/Dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-end' : 'top-start'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-end' : 'top-start'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-end' : 'top-start'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-start' : 'top-end'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">Action</button>
            </li>
            <li>
                <button type="button">Another action</button>
            </li>
            <li>
                <button type="button">Something else here</button>
            </li>
            <li>
                <button type="button">Separated link</button>
            </li>
        </ul>
    </Dropdown>
</div>`})})]})]})]})]})};export{k as default};
