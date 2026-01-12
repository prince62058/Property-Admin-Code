import{u as A,r as b,s as S,j as e,L as z,p as u,c as x}from"./index-D85Vk71e.js";import{C as d}from"./Highlight-Bt5TEg3j.js";import{I as m}from"./IconCode-Dghq5ZF3.js";import{I as h}from"./IconThumbUp-CqqOGW1A.js";const H=()=>{const T=A();b.useEffect(()=>{T(S("Wizards"))});const[n,w]=b.useState([]),o=k=>{n.includes(k)?w(C=>C.filter($=>$!==k)):w([...n,k])},[l,p]=b.useState(1),[c,v]=b.useState(1),[r,g]=b.useState(1),[s,f]=b.useState(1),[t,y]=b.useState(1),[i,N]=b.useState(1),[a,j]=b.useState(1);return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(z,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Wizards"})})]}),e.jsxs("div",{className:"pt-5 space-y-8",children:[e.jsx("h4",{className:"badge bg-primary inline-block hover:top-0 text-base mb-0",children:"Pills"}),e.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Text Only"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code1"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(m,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"inline-block w-full",children:[e.jsxs("ul",{className:"mb-5 grid grid-cols-3 text-center",children:[e.jsx("li",{children:e.jsx("div",{className:`${l===1?"!bg-primary text-white":""}
                                            block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>p(1),children:"1 Home"})}),e.jsx("li",{children:e.jsx("div",{className:`${l===2?"!bg-primary text-white":""} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>p(2),children:"2 About"})}),e.jsx("li",{children:e.jsx("div",{className:`${l===3?"!bg-primary text-white":""} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>p(3),children:"3 Success"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-5",children:l===1&&"Try the keyboard navigation by clicking arrow left or right!"}),e.jsx("p",{className:"mb-5",children:l===2&&"The next and previous buttons help you to navigate through your content."}),e.jsx("p",{className:"mb-5",children:l===3&&"Wonderful transition effects."})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{type:"button",className:`btn btn-primary ${l===1?"hidden":""}`,onClick:()=>p(l===3?2:1),children:"Back"}),e.jsx("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>p(l===1?2:3),children:l===3?"Finish":"Next"})]})]})}),n.includes("code1")&&e.jsx(d,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab, setActiveTab] = useState<any>(1);

<div className="inline-block w-full">
    <ul className="mb-5 grid grid-cols-3 text-center">
        <li>
            <div
                className={\`\${activeTab === 1 ? '!bg-primary text-white' : ''}
                block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab(1)}
            >
                1 Home
            </div>
        </li>

        <li>
            <div className={\`\${activeTab === 2 ? '!bg-primary text-white' : ''} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`} onClick={() => setActiveTab(2)}>
                2 About
            </div>
        </li>

        <li>
            <div className={\`\${activeTab === 3 ? '!bg-primary text-white' : ''} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`} onClick={() => setActiveTab(3)}>
                3 Success
            </div>
        </li>
    </ul>

    <div>
        <p className="mb-5">{activeTab === 1 && 'Try the keyboard navigation by clicking arrow left or right!'}</p>
        <p className="mb-5">{activeTab === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>
        <p className="mb-5">{activeTab === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab(activeTab === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab(activeTab === 1 ? 2 : 3)}>
            {activeTab === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Icon Only"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code2"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(m,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"inline-block w-full",children:[e.jsxs("ul",{className:"mb-5 grid grid-cols-3",children:[e.jsx("li",{children:e.jsx("div",{className:`${c===1?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>v(1),children:e.jsx(u,{})})}),e.jsx("li",{children:e.jsx("div",{className:`${c===2?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>v(2),children:e.jsx(x,{className:"w-5 h-5"})})}),e.jsx("li",{children:e.jsx("div",{className:`${c===3?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>v(3),children:e.jsx(h,{className:"w-5 h-5"})})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-5",children:c===1&&"Try the keyboard navigation by clicking arrow left or right!"}),e.jsx("p",{className:"mb-5",children:c===2&&"The next and previous buttons help you to navigate through your content."}),e.jsx("p",{className:"mb-5",children:c===3&&"Wonderful transition effects."})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{type:"button",className:`btn btn-primary ${c===1?"hidden":""}`,onClick:()=>v(c===3?2:1),children:"Back"}),e.jsx("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>v(c===1?2:3),children:c===3?"Finish":"Next"})]})]})}),n.includes("code2")&&e.jsx(d,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab1, setActiveTab1] = useState<any>(1);

<div className="inline-block w-full">
    <ul className="mb-5 grid grid-cols-3">
        <li>
            <div
                className={\`\${activeTab1 === 1 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab1(1)}
            >
                <svg>...</svg>
            </div>
        </li>
        <li>
            <div
                className={\`\${activeTab1 === 2 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab1(2)}
            >
                <svg>...</svg>
            </div>
        </li>
        <li>
            <div
                className={\`\${activeTab1 === 3 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab1(3)}
            >
                <svg>...</svg>
            </div>
        </li>
    </ul>
    <div>
        <p className="mb-5">{activeTab1 === 1 && 'Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab1 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab1 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab1 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab1(activeTab1 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab1(activeTab1 === 1 ? 2 : 3)}>
            {activeTab1 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel lg:col-span-2",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Text & Icon"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code3"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(m,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"inline-block w-full",children:[e.jsxs("ul",{className:"mb-5 grid grid-cols-3",children:[e.jsxs("li",{children:[e.jsx("div",{className:`${r===1?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>g(1),children:e.jsx(u,{})}),e.jsx("span",{className:"text-center block mt-2",children:"Home"})]}),e.jsxs("li",{children:[e.jsx("div",{className:`${r===2?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>g(2),children:e.jsx(x,{className:"w-5 h-5"})}),e.jsx("span",{className:"text-center block mt-2",children:"About"})]}),e.jsxs("li",{children:[e.jsx("div",{className:`${r===3?"!bg-primary text-white":""}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`,onClick:()=>g(3),children:e.jsx(h,{className:"w-5 h-5"})}),e.jsx("span",{className:`text-center block mt-2 ${r===3?"text-primary ":""}`,children:"Success"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-5",children:r===1&&" Try the keyboard navigation by clicking arrow left or right!"}),e.jsx("p",{className:"mb-5",children:r===2&&"The next and previous buttons help you to navigate through your content."}),e.jsx("p",{className:"mb-5",children:r===3&&"Wonderful transition effects."})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{type:"button",className:`btn btn-primary ${r===1?"hidden":""}`,onClick:()=>g(r===3?2:1),children:"Back"}),e.jsx("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>g(r===1?2:3),children:r===3?"Finish":"Next"})]})]})}),n.includes("code3")&&e.jsx(d,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab2, setActiveTab2] = useState<any>(1);

<div className="inline-block w-full">
    <ul className="mb-5 grid grid-cols-3">
        <li>
            <div
                className={\`\${activeTab2 === 1 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab2(1)}
            >
                <svg>...</svg>
            </div>
            <span className="text-center block mt-2">Home</span>
        </li>
        <li>
            <div
                className={\`\${activeTab2 === 2 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab2(2)}
            >
                <svg>...</svg>
            </div>
            <span className="text-center block mt-2">About</span>
        </li>
        <li>
            <div
                className={\`\${activeTab2 === 3 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab2(3)}
            >
                <svg>...</svg>
            </div>
            <span className={\`text-center block mt-2 \${activeTab2 === 3 ? 'text-primary ' : ''}\`}>Success</span>
        </li>
    </ul>
    <div>
        <p className="mb-5">{activeTab2 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab2 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab2 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab2 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab2(activeTab2 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab2(activeTab2 === 1 ? 2 : 3)}>
            {activeTab2 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]})]}),e.jsx("h4",{className:"badge bg-primary inline-block hover:top-0 text-base mb-0",children:"Circle"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Icon Only"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code4"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(m,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"inline-block w-full",children:[e.jsxs("div",{className:"relative z-[1]",children:[e.jsx("div",{className:`${s===1?"w-[15%]":s===2?"w-[48%]":s===3?"w-[81%]":""}
                                            bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}),e.jsxs("ul",{className:"mb-5 grid grid-cols-3",children:[e.jsx("li",{className:"mx-auto",children:e.jsx("button",{type:"button",className:`${s===1?"!border-primary !bg-primary text-white":""}
                                            bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>f(1),children:e.jsx(u,{})})}),e.jsx("li",{className:"mx-auto",children:e.jsx("button",{type:"button",className:`${s===2?"!border-primary !bg-primary text-white":""}
                                            bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>f(2),children:e.jsx(x,{className:"w-5 h-5"})})}),e.jsx("li",{className:"mx-auto",children:e.jsx("button",{type:"button",className:`${s===3?"!border-primary !bg-primary text-white":""}
                                            bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>f(3),children:e.jsx(h,{className:"w-5 h-5"})})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-5",children:s===1&&" Try the keyboard navigation by clicking arrow left or right!"}),e.jsx("p",{className:"mb-5",children:s===2&&"The next and previous buttons help you to navigate through your content."}),e.jsx("p",{className:"mb-5",children:s===3&&"Wonderful transition effects."})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{type:"button",className:`btn btn-primary ${s===1?"hidden":""}`,onClick:()=>f(s===3?2:1),children:"Back"}),e.jsx("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>f(s===1?2:3),children:s===3?"Finish":"Next"})]})]})}),n.includes("code4")&&e.jsx(d,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab3, setActiveTab3] = useState<any>(1);

<div className="inline-block w-full">
    <div className="relative z-[1]">
        <div
            className={\`\${activeTab3 === 1 ? 'w-[15%]' : activeTab3 === 2 ? 'w-[48%]' : activeTab3 === 3 ? 'w-[81%]' : ''}
                bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]\`}
        ></div>
        <ul className="mb-5 grid grid-cols-3">
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab3 === 1 ? '!border-primary !bg-primary text-white' : ''}
                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab3(1)}
                >
                    <svg>...</svg>
                </button>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab3 === 2 ? '!border-primary !bg-primary text-white' : ''}
                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab3(2)}
                >
                    <svg>...</svg>
                </button>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab3 === 3 ? '!border-primary !bg-primary text-white' : ''}
                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab3(3)}
                >
                    <svg>...</svg>
                </button>
            </li>
        </ul>
    </div>
    <div>
        <p className="mb-5">{activeTab3 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab3 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab3 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab3 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab3(activeTab3 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab3(activeTab3 === 1 ? 2 : 3)}>
            {activeTab3 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Text & Icon"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code5"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(m,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"inline-block w-full",children:[e.jsxs("div",{className:"relative z-[1]",children:[e.jsx("div",{className:`${t===1?"w-[15%]":t===2?"w-[48%]":t===3?"w-[81%]":""}
                                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}),e.jsxs("ul",{className:"mb-5 grid grid-cols-3",children:[e.jsxs("li",{className:"mx-auto",children:[e.jsx("button",{type:"button",className:`${t===1?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>y(1),children:e.jsx(u,{})}),e.jsx("span",{className:`${t===1?"text-primary ":""}text-center block mt-2`,children:"Home"})]}),e.jsxs("li",{className:"mx-auto",children:[e.jsx("button",{type:"button",className:`${t===2?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>y(2),children:e.jsx(x,{className:"w-5 h-5"})}),e.jsx("span",{className:`${t===2?"text-primary ":""}text-center block mt-2`,children:"About"})]}),e.jsxs("li",{className:"mx-auto",children:[e.jsx("button",{type:"button",className:`${t===3?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`,onClick:()=>y(3),children:e.jsx(h,{className:"w-5 h-5"})}),e.jsx("span",{className:`${t===3?"text-primary ":""}text-center block mt-2`,children:"Success"})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-5",children:t===1&&" Try the keyboard navigation by clicking arrow left or right!"}),e.jsx("p",{className:"mb-5",children:t===2&&"The next and previous buttons help you to navigate through your content."}),e.jsx("p",{className:"mb-5",children:t===3&&"Wonderful transition effects."})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{type:"button",className:`btn btn-primary ${t===1?"hidden":""}`,onClick:()=>y(t===3?2:1),children:"Back"}),e.jsx("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>y(t===1?2:3),children:t===3?"Finish":"Next"})]})]})}),n.includes("code5")&&e.jsx(d,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab4, setActiveTab4] = useState<any>(1);

<div className="inline-block w-full">
    <div className="relative z-[1]">
        <div
            className={\`\${activeTab4 === 1 ? 'w-[15%]' : activeTab4 === 2 ? 'w-[48%]' : activeTab4 === 3 ? 'w-[81%]' : ''}
            bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]\`}
        ></div>
        <ul className="mb-5 grid grid-cols-3">
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab4 === 1 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab4(1)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab4 === 1 ? 'text-primary ' : ''}text-center block mt-2\`}>Home</span>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab4 === 2 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab4(2)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab4 === 2 ? 'text-primary ' : ''}text-center block mt-2\`}>About</span>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab4 === 3 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full\`}
                    onClick={() => setActiveTab4(3)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab4 === 3 ? 'text-primary ' : ''}text-center block mt-2\`}>Success</span>
            </li>
        </ul>
    </div>
    <div>
        <p className="mb-5">{activeTab4 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab4 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab4 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab4 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab4(activeTab4 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab4(activeTab4 === 1 ? 2 : 3)}>
            {activeTab4 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]})]}),e.jsx("h4",{className:"badge bg-primary inline-block hover:top-0 text-base mb-0",children:"Square"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Icon Only"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code6"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(m,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"inline-block w-full",children:[e.jsxs("div",{className:"relative z-[1]",children:[e.jsx("div",{className:`${i===1?"w-[15%]":i===2?"w-[48%]":i===3?"w-[81%]":""}
                                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}),e.jsxs("ul",{className:"mb-5 grid grid-cols-3",children:[e.jsx("li",{className:"mx-auto",children:e.jsx("button",{type:"button",className:`${i===1?"!border-primary !bg-primary text-white":""}
                                                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>N(1),children:e.jsx(u,{})})}),e.jsx("li",{className:"mx-auto",children:e.jsx("button",{type:"button",className:`${i===2?"!border-primary !bg-primary text-white":""}
                                                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>N(2),children:e.jsx(x,{className:"w-5 h-5"})})}),e.jsx("li",{className:"mx-auto",children:e.jsx("button",{type:"button",className:`${i===3?"!border-primary !bg-primary text-white":""}
                                                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>N(3),children:e.jsx(h,{className:"w-5 h-5"})})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-5",children:i===1&&" Try the keyboard navigation by clicking arrow left or right!"}),e.jsx("p",{className:"mb-5",children:i===2&&"The next and previous buttons help you to navigate through your content."}),e.jsx("p",{className:"mb-5",children:i===3&&"Wonderful transition effects."})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{type:"button",className:`btn btn-primary ${i===1?"hidden":""}`,onClick:()=>N(i===3?2:1),children:"Back"}),e.jsx("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>N(i===1?2:3),children:i===3?"Finish":"Next"})]})]})}),n.includes("code6")&&e.jsx(d,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab5, setActiveTab5] = useState<any>(1);

<div className="inline-block w-full">
    <div className="relative z-[1]">
        <div
            className={\`\${activeTab5 === 1 ? 'w-[15%]' : activeTab5 === 2 ? 'w-[48%]' : activeTab5 === 3 ? 'w-[81%]' : ''}
            bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]\`}
        ></div>
        <ul className="mb-5 grid grid-cols-3">
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab5 === 1 ? '!border-primary !bg-primary text-white' : ''}
                    bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab5(1)}
                >
                    <svg>...</svg>
                </button>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab5 === 2 ? '!border-primary !bg-primary text-white' : ''}
                    bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab5(2)}
                >
                    <svg>...</svg>
                </button>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab5 === 3 ? '!border-primary !bg-primary text-white' : ''}
                    bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab5(3)}
                >
                    <svg>...</svg>
                </button>
            </li>
        </ul>
    </div>
    <div>
        <p className="mb-5">{activeTab5 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab5 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab5 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab5 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab5(activeTab5 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab5(activeTab5 === 1 ? 2 : 3)}>
            {activeTab5 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Text & Icon"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code7"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(m,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"inline-block w-full",children:[e.jsxs("div",{className:"relative z-[1]",children:[e.jsx("div",{className:`${a===1?"w-[15%]":a===2?"w-[48%]":a===3?"w-[81%]":""}
                                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}),e.jsxs("ul",{className:"mb-5 grid grid-cols-3",children:[e.jsxs("li",{className:"mx-auto",children:[e.jsx("button",{type:"button",className:`${a===1?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>j(1),children:e.jsx(u,{})}),e.jsx("span",{className:`${a===1?"text-primary ":""}text-center block mt-2`,children:"Home"})]}),e.jsxs("li",{className:"mx-auto",children:[e.jsx("button",{type:"button",className:`${a===2?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>j(2),children:e.jsx(x,{className:"w-5 h-5"})}),e.jsx("span",{className:`${a===2?"text-primary ":""}text-center block mt-2`,children:"About"})]}),e.jsxs("li",{className:"mx-auto",children:[e.jsx("button",{type:"button",className:`${a===3?"!border-primary !bg-primary text-white":""}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16`,onClick:()=>j(3),children:e.jsx(h,{className:"w-5 h-5"})}),e.jsx("span",{className:`${a===3?"text-primary ":""}text-center block mt-2`,children:"Success"})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-5",children:a===1&&" Try the keyboard navigation by clicking arrow left or right!"}),e.jsx("p",{className:"mb-5",children:a===2&&"The next and previous buttons help you to navigate through your content."}),e.jsx("p",{className:"mb-5",children:a===3&&"Wonderful transition effects."})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{type:"button",className:`btn btn-primary ${a===1?"hidden":""}`,onClick:()=>j(a===3?2:1),children:"Back"}),e.jsx("button",{type:"button",className:"btn btn-primary ltr:ml-auto rtl:mr-auto",onClick:()=>j(a===1?2:3),children:a===3?"Finish":"Next"})]})]})}),n.includes("code7")&&e.jsx(d,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [activeTab6, setActiveTab6] = useState<any>(1);

<div className="inline-block w-full">
    <div className="relative z-[1]">
        <div
            className={\`\${activeTab6 === 1 ? 'w-[15%]' : activeTab6 === 2 ? 'w-[48%]' : activeTab6 === 3 ? 'w-[81%]' : ''}
            bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]\`}
        ></div>
        <ul className="mb-5 grid grid-cols-3">
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab6 === 1 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab6(1)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab6 === 1 ? 'text-primary ' : ''}text-center block mt-2\`}>Home</span>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab6 === 2 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab6(2)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab6 === 2 ? 'text-primary ' : ''}text-center block mt-2\`}>About</span>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab6 === 3 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab6(3)}
                >
                    <svg>...</svg>
                </button>
                <span className={\`\${activeTab6 === 3 ? 'text-primary ' : ''}text-center block mt-2\`}>Success</span>
            </li>
        </ul>
    </div>
    <div>
        <p className="mb-5">{activeTab6 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab6 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab6 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab6 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab6(activeTab6 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab6(activeTab6 === 1 ? 2 : 3)}>
            {activeTab6 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`})})]})]})]})]})};export{H as default};
