import{u as b,r as c,s as u,a as y,j as e,D as N}from"./index-D85Vk71e.js";import{C as n}from"./Highlight-Bt5TEg3j.js";import{i as a}from"./tippy-5HGs452d.js";import{I as r}from"./IconCode-Dghq5ZF3.js";import{I as l}from"./IconTrashLines-6JDtYZKs.js";import{I as h}from"./IconXCircle-Vv-D0bTC.js";import{I as m}from"./IconPencil-B6qaTWac.js";import{I as f}from"./IconHorizontalDots-BOEcVEaZ.js";import{I as v}from"./IconCircleCheck-D66p8q8F.js";import{I as k}from"./IconSettings-B_8O7vBd.js";const d=[{id:1,name:"John Doe",email:"johndoe@yahoo.com",date:"10/08/2020",sale:120,status:"Complete",register:"5 min ago",progress:"40%",position:"Developer",office:"London"},{id:2,name:"Shaun Park",email:"shaunpark@gmail.com",date:"11/08/2020",sale:400,status:"Pending",register:"11 min ago",progress:"23%",position:"Designer",office:"New York"},{id:3,name:"Alma Clarke",email:"alma@gmail.com",date:"12/02/2020",sale:310,status:"In Progress",register:"1 hour ago",progress:"80%",position:"Accountant",office:"Amazon"},{id:4,name:"Vincent Carpenter",email:"vincent@gmail.com",date:"13/08/2020",sale:100,status:"Canceled",register:"1 day ago",progress:"60%",position:"Data Scientist",office:"Canada"}],z=()=>{const x=b();c.useEffect(()=>{x(u("Tables"))});const p=y(t=>t.themeConfig.rtlClass)==="rtl",[s,o]=c.useState([]),i=t=>{s.includes(t)?o(g=>g.filter(j=>j!==t)):o([...s,t])};return e.jsxs("div",{className:"grid xl:grid-cols-2 gap-6 grid-cols-1",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Simple Table"}),e.jsx("button",{type:"button",onClick:()=>i("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(r,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"table-responsive mb-5",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Sale"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"text-center",children:"Action"})]})}),e.jsx("tbody",{children:d.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"whitespace-nowrap",children:t.name})}),e.jsx("td",{children:t.date}),e.jsx("td",{children:t.sale}),e.jsx("td",{children:e.jsx("div",{className:`whitespace-nowrap ${t.status==="completed"?"text-success":t.status==="Pending"?"text-secondary":t.status==="In Progress"?"text-info":t.status==="Canceled"?"text-danger":"text-success"}`,children:t.status})}),e.jsx("td",{className:"text-center",children:e.jsx(a,{content:"Delete",children:e.jsx("button",{type:"button",children:e.jsx(l,{className:"m-auto"})})})})]},t.id))})]})}),s.includes("code1")&&e.jsx(n,{children:e.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Sale</th>
                <th>Status</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.date}</td>
                        <td>{data.sale}</td>
                        <td>
                            <div
                                className={\`whitespace-nowrap \${
                                    data.status === 'completed'
                                        ? 'text-success'
                                        : data.status === 'Pending'
                                        ? 'text-secondary'
                                        : data.status === 'In Progress'
                                        ? 'text-info'
                                        : data.status === 'Canceled'
                                        ? 'text-danger'
                                        : 'text-success'
                                }\`}
                            >
                                {data.status}
                            </div>
                        </td>
                        <td className="text-center">
                            <Tippy content="Delete">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Hover Table"}),e.jsx("button",{type:"button",onClick:()=>i("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(r,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"table-responsive mb-5",children:e.jsxs("table",{className:"table-hover",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Sale"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"text-center",children:"Action"})]})}),e.jsx("tbody",{children:d.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"whitespace-nowrap",children:t.name})}),e.jsx("td",{children:t.date}),e.jsx("td",{children:t.sale}),e.jsx("td",{children:e.jsx("div",{className:`whitespace-nowrap ${t.status==="completed"?"text-success":t.status==="Pending"?"text-secondary":t.status==="In Progress"?"text-info":t.status==="Canceled"?"text-danger":"text-success"}`,children:t.status})}),e.jsx("td",{className:"text-center",children:e.jsx(a,{content:"Delete",children:e.jsx("button",{type:"button",children:e.jsx(l,{className:"m-auto"})})})})]},t.id))})]})}),s.includes("code2")&&e.jsx(n,{children:e.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table className="table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Sale</th>
                <th>Status</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.date}</td>
                        <td>{data.sale}</td>
                        <td>
                            <div
                                className={\`whitespace-nowrap \${
                                    data.status === 'completed'
                                        ? 'text-success'
                                        : data.status === 'Pending'
                                        ? 'text-secondary'
                                        : data.status === 'In Progress'
                                        ? 'text-info'
                                        : data.status === 'Canceled'
                                        ? 'text-danger'
                                        : 'text-success'
                                }\`}
                            >
                                {data.status}
                            </div>
                        </td>
                        <td className="text-center">
                            <Tippy content="Delete">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Striped Table"}),e.jsx("button",{type:"button",onClick:()=>i("code3"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(r,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"table-responsive mb-5",children:e.jsxs("table",{className:"table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Sale"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:d.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"whitespace-nowrap",children:t.name})}),e.jsx("td",{children:t.date}),e.jsx("td",{children:t.sale}),e.jsx("td",{className:"text-center",children:e.jsx(a,{content:"Delete",children:e.jsx("button",{type:"button",children:e.jsx(l,{className:"m-auto"})})})})]},t.id))})]})}),s.includes("code3")&&e.jsx(n,{children:e.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table className="table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Sale</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.date}</td>
                        <td>{data.sale}</td>
                        <td className="text-center">
                            <Tippy content="Delete">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Table Light"}),e.jsx("button",{type:"button",onClick:()=>i("code4"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(r,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"table-responsive mb-5",children:e.jsxs("table",{className:"table-hover",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"!bg-transparent dark:!bg-transparent",children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Created At"}),e.jsx("th",{className:"text-center"})]})}),e.jsx("tbody",{children:d.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:e.jsx("div",{className:"whitespace-nowrap",children:t.name})}),e.jsx("td",{children:t.email}),e.jsx("td",{children:t.date}),e.jsx("td",{className:"text-center",children:e.jsx(a,{content:"Delete",children:e.jsx("button",{type:"button",children:e.jsx(h,{className:"m-auto"})})})})]},t.id))})]})}),s.includes("code4")&&e.jsx(n,{children:e.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table className="table-hover">
        <thead>
            <tr className="!bg-transparent dark:!bg-transparent">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th className="text-center"></th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.email}</td>
                        <td>{data.date}</td>
                        <td className="text-center">
                            <Tippy content="Delete">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Captions"}),e.jsx("button",{type:"button",onClick:()=>i("code5"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(r,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"table-responsive mb-5",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"text-center",children:"Register"})]})}),e.jsx("tbody",{children:d.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:e.jsx("div",{className:"whitespace-nowrap",children:t.name})}),e.jsx("td",{children:t.email}),e.jsx("td",{children:e.jsx("span",{className:`badge whitespace-nowrap ${t.status==="completed"?"badge-outline-primary":t.status==="Pending"?"badge-outline-secondary":t.status==="In Progress"?"badge-outline-info":t.status==="Canceled"?"badge-outline-danger":"badge-outline-primary"}`,children:t.status})}),e.jsx("td",{className:"text-center",children:t.register})]},t.id))})]})}),s.includes("code5")&&e.jsx(n,{children:e.jsx("pre",{children:`const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th className="text-center">Register</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.email}</td>
                        <td>
                            <span
                                className={\`badge whitespace-nowrap \${
                                    data.status === 'completed'
                                        ? 'badge-outline-primary'
                                        : data.status === 'Pending'
                                        ? 'badge-outline-secondary'
                                        : data.status === 'In Progress'
                                        ? 'badge-outline-info'
                                        : data.status === 'Canceled'
                                        ? 'badge-outline-danger'
                                        : 'badge-outline-primary'
                                }\`}
                            >
                                {data.status}
                            </span>
                        </td>
                        <td className="text-center">{data.register}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Progress Table"}),e.jsx("button",{type:"button",onClick:()=>i("code6"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(r,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"table-responsive mb-5",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Progress"}),e.jsx("th",{children:"Sales"}),e.jsx("th",{className:"text-center",children:"Action"})]})}),e.jsx("tbody",{children:d.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:e.jsx("div",{className:"whitespace-nowrap",children:t.name})}),e.jsx("td",{children:e.jsx("div",{className:"h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full",children:e.jsx("div",{className:`h-1.5 rounded-full rounded-bl-full text-center text-white text-xs ${t.status==="completed"?"bg-success":t.status==="Pending"?"bg-secondary":t.status==="In Progress"?"bg-info":t.status==="Canceled"?"bg-danger":"bg-success"}`,style:{width:`${t.progress}`}})})}),e.jsx("td",{children:e.jsx("div",{className:`whitespace-nowrap ${t.status==="completed"?"text-success":t.status==="Pending"?"text-secondary":t.status==="In Progress"?"text-info":t.status==="Canceled"?"text-danger":"text-success"}`,children:t.progress})}),e.jsxs("td",{className:"p-3 border-b border-[#ebedf2] dark:border-[#191e3a] text-center",children:[e.jsx(a,{content:"Edit",children:e.jsx("button",{type:"button",children:e.jsx(m,{className:"ltr:mr-2 rtl:ml-2"})})}),e.jsx(a,{content:"Delete",children:e.jsx("button",{type:"button",children:e.jsx(l,{})})})]})]},t.id))})]})}),s.includes("code6")&&e.jsx(n,{children:e.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Progress</th>
                <th>Sales</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>
                            <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                <div
                                    className={\`h-1.5 rounded-full rounded-bl-full text-center text-white text-xs \${
                                        data.status === 'completed'
                                            ? 'bg-success'
                                            : data.status === 'Pending'
                                            ? 'bg-secondary'
                                            : data.status === 'In Progress'
                                            ? 'bg-info'
                                            : data.status === 'Canceled'
                                            ? 'bg-danger'
                                            : 'bg-success'
                                    }\`}
                                    style={{ width: \`\${data.progress}\` }}
                                ></div>
                            </div>
                        </td>
                        <td>
                            <div
                                className={\`whitespace-nowrap \${
                                    data.status === 'completed'
                                        ? 'text-success'
                                        : data.status === 'Pending'
                                        ? 'text-secondary'
                                        : data.status === 'In Progress'
                                        ? 'text-info'
                                        : data.status === 'Canceled'
                                        ? 'text-danger'
                                        : 'text-success'
                                }\`}
                            >
                                {data.progress}
                            </div>
                        </td>
                        <td className="p-3 border-b border-[#ebedf2] dark:border-[#191e3a] text-center">
                            <Tippy content="Edit">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                            <Tippy content="Delete">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Contextual"}),e.jsx("button",{type:"button",onClick:()=>i("code7"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(r,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"table-responsive mb-5",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"First Name"}),e.jsx("th",{children:"Last Name"}),e.jsx("th",{children:"Email"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-dark-dark-light border-dark-dark-light",children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"John"}),e.jsx("td",{children:"Doe"}),e.jsx("td",{children:"johndoe@yahoo.com"})]}),e.jsxs("tr",{className:"bg-primary/20 border-primary/20",children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:"Andy"}),e.jsx("td",{children:"King"}),e.jsx("td",{children:"andyking@gmail.com"})]}),e.jsxs("tr",{className:"bg-secondary/20 border-secondary/20",children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:"Lisa"}),e.jsx("td",{children:"Doe"}),e.jsx("td",{children:"lisadoe@yahoo.com"})]}),e.jsxs("tr",{className:"bg-success/20 border-success/20",children:[e.jsx("td",{children:"4"}),e.jsx("td",{children:"Vincent"}),e.jsx("td",{children:"Carpenter"}),e.jsx("td",{children:"vinnyc@yahoo.com"})]}),e.jsxs("tr",{className:"bg-dark-dark-light border-dark-dark-light",children:[e.jsx("td",{children:"5"}),e.jsx("td",{children:"Amy"}),e.jsx("td",{children:"Diaz"}),e.jsx("td",{children:"amydiaz@yahoo.com"})]}),e.jsxs("tr",{className:"bg-danger/20 border-danger/20",children:[e.jsx("td",{children:"6"}),e.jsx("td",{children:"Nia"}),e.jsx("td",{children:"Hillyer"}),e.jsx("td",{children:"niahill@gmail.com"})]}),e.jsxs("tr",{className:"bg-info/20 border-info/20",children:[e.jsx("td",{children:"7"}),e.jsx("td",{children:"Marry"}),e.jsx("td",{children:"McDonald"}),e.jsx("td",{children:"marryMcD@yahoo.com"})]}),e.jsxs("tr",{className:"bg-warning/20 border-warning/20",children:[e.jsx("td",{children:"8"}),e.jsx("td",{children:"Shaun"}),e.jsx("td",{children:"Park"}),e.jsx("td",{children:"park@yahoo.com"})]})]})]})}),s.includes("code7")&&e.jsx(n,{children:e.jsx("pre",{children:`const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-dark-dark-light border-dark-dark-light">
                <td>1</td>
                <td>John</td>
                <td>Doe</td>
                <td>johndoe@yahoo.com</td>
            </tr>
            <tr className="bg-primary/20 border-primary/20">
                <td>2</td>
                <td>Andy</td>
                <td>King</td>
                <td>andyking@gmail.com</td>
            </tr>
            <tr className="bg-secondary/20 border-secondary/20">
                <td>3</td>
                <td>Lisa</td>
                <td>Doe</td>
                <td>lisadoe@yahoo.com</td>
            </tr>
            <tr className="bg-success/20 border-success/20">
                <td>4</td>
                <td>Vincent</td>
                <td>Carpenter</td>
                <td>vinnyc@yahoo.com</td>
            </tr>
            <tr className="bg-dark-dark-light border-dark-dark-light">
                <td>5</td>
                <td>Amy</td>
                <td>Diaz</td>
                <td>amydiaz@yahoo.com</td>
            </tr>
            <tr className="bg-danger/20 border-danger/20">
                <td>6</td>
                <td>Nia</td>
                <td>Hillyer</td>
                <td>niahill@gmail.com</td>
            </tr>
            <tr className="bg-info/20 border-info/20">
                <td>7</td>
                <td>Marry</td>
                <td>McDonald</td>
                <td>marryMcD@yahoo.com</td>
            </tr>
            <tr className="bg-warning/20 border-warning/20">
                <td>8</td>
                <td>Shaun</td>
                <td>Park</td>
                <td>park@yahoo.com</td>
            </tr>
        </tbody>
    </table>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dropdown"}),e.jsx("button",{type:"button",onClick:()=>i("code8"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(r,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"table-responsive mb-5",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Sale"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"text-center",children:"Action"})]})}),e.jsx("tbody",{children:d.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"whitespace-nowrap",children:t.name})}),e.jsx("td",{children:t.date}),e.jsx("td",{children:t.sale}),e.jsx("td",{children:e.jsx("span",{className:`badge whitespace-nowrap ${t.status==="completed"?"bg-primary   ":t.status==="Pending"?"bg-secondary":t.status==="In Progress"?"bg-success":t.status==="Canceled"?"bg-danger":"bg-primary"}`,children:t.status})}),e.jsx("td",{className:"text-center",children:e.jsx("div",{className:"dropdown",children:e.jsx(N,{offset:[0,5],placement:`${p?"bottom-start":"bottom-end"}`,button:e.jsx(f,{className:"opacity-70 m-auto"}),children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("button",{type:"button",children:"Download"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Share"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Edit"})}),e.jsx("li",{children:e.jsx("button",{type:"button",children:"Delete"})})]})})})})]},t.id))})]})}),s.includes("code8")&&e.jsx(n,{children:e.jsx("pre",{children:`import Dropdown from '../components/Dropdown';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Sale</th>
                <th>Status</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.date}</td>
                        <td>{data.sale}</td>
                        <td>
                            <span
                                className={\`badge whitespace-nowrap \${
                                    data.status === 'completed'
                                        ? 'bg-primary   '
                                        : data.status === 'Pending'
                                        ? 'bg-secondary'
                                        : data.status === 'In Progress'
                                        ? 'bg-success'
                                        : data.status === 'Canceled'
                                        ? 'bg-danger'
                                        : 'bg-primary'
                                }\`}
                            >
                                {data.status}
                            </span>
                        </td>
                        <td className="text-center">
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
                                    button={
                                        <svg></sv1g>
                                    }
                                >
                                    <ul>
                                        <li>
                                            <button type="button">Download</button>
                                        </li>
                                        <li>
                                            <button type="button">Share</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit</button>
                                        </li>
                                        <li>
                                            <button type="button">Delete</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Table with Footer"}),e.jsx("button",{type:"button",onClick:()=>i("code9"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(r,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"table-responsive mb-5",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Position"}),e.jsx("th",{children:"Office"}),e.jsx("th",{className:"!text-center",children:"Action"})]})}),e.jsx("tbody",{children:d.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"whitespace-nowrap",children:t.name})}),e.jsx("td",{children:t.position}),e.jsx("td",{children:t.office}),e.jsx("td",{className:"text-center",children:e.jsxs("ul",{className:"flex items-center justify-center gap-2",children:[e.jsx("li",{children:e.jsx(a,{content:"Edit",children:e.jsx("button",{type:"button",children:e.jsx(v,{className:"w-5 h-5 text-primary"})})})}),e.jsx("li",{children:e.jsx(a,{content:"Delete",children:e.jsx("button",{type:"button",children:e.jsx(h,{className:"text-danger"})})})})]})})]},t.id))}),e.jsx("tfoot",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Position"}),e.jsx("th",{children:"Office"}),e.jsx("th",{className:"!text-center",children:"Action"})]})})]})}),s.includes("code9")&&e.jsx(n,{children:e.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th className="!text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.position}</td>
                        <td>{data.office}</td>
                        <td className="text-center">
                            <ul className="flex items-center justify-center gap-2">
                                <li>
                                    <Tippy content="Edit">
                                        <button type="button">
                                            <svg>...</svg>
                                        </button>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content="Delete">
                                        <button type="button">
                                            <svg>...</svg>
                                        </button>
                                    </Tippy>
                                </li>
                            </ul>
                        </td>
                    </tr>
                );
            })}
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th className="!text-center">Action</th>
            </tr>
        </tfoot>
    </table>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Checkboxes"}),e.jsx("button",{type:"button",onClick:()=>i("code10"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(r,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"table-responsive mb-5",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("input",{type:"checkbox",className:"form-checkbox"})}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Sale"}),e.jsx("th",{className:"!text-center",children:"Action"})]})}),e.jsx("tbody",{children:d.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("input",{type:"checkbox",className:"form-checkbox"})}),e.jsx("td",{children:e.jsx("div",{className:"whitespace-nowrap",children:t.name})}),e.jsx("td",{children:t.date}),e.jsx("td",{children:t.sale}),e.jsx("td",{className:"text-center",children:e.jsxs("ul",{className:"flex items-center justify-center gap-2",children:[e.jsx("li",{children:e.jsx(a,{content:"Settings",children:e.jsx("button",{type:"button",children:e.jsx(k,{className:"w-5 h-5 text-primary"})})})}),e.jsx("li",{children:e.jsx(a,{content:"Edit",children:e.jsx("button",{type:"button",children:e.jsx(m,{className:"text-success"})})})}),e.jsx("li",{children:e.jsx(a,{content:"Delete",children:e.jsx("button",{type:"button",children:e.jsx(l,{className:"text-danger"})})})})]})})]},t.id))})]})}),s.includes("code10")&&e.jsx(n,{children:e.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>
                    <input type="checkbox" className="form-checkbox" />
                </th>
                <th>Name</th>
                <th>Date</th>
                <th>Sale</th>
                <th className="!text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <input type="checkbox" className="form-checkbox" />
                        </td>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.date}</td>
                        <td>{data.sale}</td>
                        <td className="text-center">
                            <ul className="flex items-center justify-center gap-2">
                                <li>
                                    <Tippy content="Settings">
                                        <button type="button">
                                            <svg>...</svg>
                                        </button>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content="Edit">
                                        <button type="button">
                                            <svg>...</svg>
                                        </button>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content="Delete">
                                        <button type="button">
                                            <svg>...</svg>
                                        </button>
                                    </Tippy>
                                </li>
                            </ul>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]})]})};export{z as default};
