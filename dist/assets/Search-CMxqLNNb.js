import{r as a,R as I,u as F,s as $,j as e,L as R}from"./index-BV1HbQoV.js";import{C as j}from"./Highlight-9oqHSD-A.js";import{I as N}from"./IconCode-D18auF5m.js";import{I as k}from"./IconSearch-BHWW0ULl.js";import{I as B}from"./IconHorizontalDots-BFOKeG4F.js";function C(r,s,i){return s in r?Object.defineProperty(r,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[s]=i,r}var _={click:"onClick",focusin:"onFocus",focusout:"onFocus",mousedown:"onMouseDown",mouseup:"onMouseUp",touchstart:"onTouchStart",touchend:"onTouchEnd"},E=function(r){var s,i=r.children,d=r.onClickAway,x=r.focusEvent,h=x===void 0?"focusin":x,g=r.mouseEvent,c=g===void 0?"click":g,u=r.touchEvent,m=u===void 0?"touchend":u,f=a.useRef(null),v=a.useRef(null),t=a.useRef(!1);a.useEffect(function(){return setTimeout(function(){t.current=!0},0),function(){t.current=!1}},[]);var b=function(n){return function(l){v.current=l.target;var o=i==null?void 0:i.props[n];o&&o(l)}};a.useEffect(function(){var n,l,o=(n=(l=f.current)===null||l===void 0?void 0:l.ownerDocument)!==null&&n!==void 0?n:document,p=function(w){t.current&&(f.current&&f.current.contains(w.target)||v.current===w.target||!o.contains(w.target)||d(w))};return o.addEventListener(c,p),o.addEventListener(m,p),o.addEventListener(h,p),function(){o.removeEventListener(c,p),o.removeEventListener(m,p),o.removeEventListener(h,p)}},[h,c,d,m]);var y=_[c],L=_[m],S=_[h];return I.Children.only(a.cloneElement(i,(C(s={ref:function(n){f.current=n;var l=i.ref;typeof l=="function"?l(n):l&&(l.current=n)}},S,b(S)),C(s,y,b(y)),C(s,L,b(L)),s)))};E.displayName="ClickAwayListener";const A=[{thumb:"profile-5.jpeg",name:"Alan Green",email:"alan@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-11.jpeg",name:"Linda Nelson",email:"Linda@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"},{thumb:"profile-12.jpeg",name:"Lila Perry",email:"Lila@mail.com",status:"Closed",statusClass:"badge badge-outline-warning"},{thumb:"profile-3.jpeg",name:"Andy King",email:"Andy@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-15.jpeg",name:"Jesse Cory",email:"Jesse@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"}],G=()=>{const r=F();a.useEffect(()=>{r($("Search"))});const[s,i]=a.useState([]),[d,x]=a.useState(""),[h,g]=a.useState(A),c=t=>{s.includes(t)?i(b=>b.filter(y=>y!==t)):i([...s,t])};a.useEffect(()=>{g(()=>A.filter(t=>t.name.toLowerCase().includes(d.toLowerCase())||t.email.toLowerCase().includes(d.toLowerCase())))},[d]);const[u,m]=a.useState(!1),f=()=>{m(!0)},v=()=>{m(!1)};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(R,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Search"})})]}),e.jsxs("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel lg:row-span-2",id:"live",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Live Search"}),e.jsx("button",{onClick:()=>{c("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(N,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5 space-y-5",children:[e.jsx("form",{className:"mx-auto w-full sm:w-1/2 mb-5",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:d,placeholder:"Search Attendees...",className:"form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11",onChange:t=>x(t.target.value)}),e.jsx("button",{type:"button",className:"btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center",children:e.jsx(k,{className:"mx-auto"})})]})}),e.jsx("div",{className:"p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block",children:h.map(t=>e.jsxs("div",{className:`bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between\r
                                         text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]`,children:[e.jsx("div",{className:"user-profile",children:e.jsx("img",{src:`/assets/images/${t.thumb}`,alt:"img",className:"w-8 h-8 rounded-md object-cover"})}),e.jsx("div",{children:t.name}),e.jsx("div",{children:t.email}),e.jsx("div",{className:`badge ${t.statusClass} border-2 border-dashed`,children:t.status}),e.jsx("div",{className:"cursor-pointer",children:e.jsx(B,{className:"w-6 h-6 opacity-70"})})]},t.email))})]}),s.includes("code1")&&e.jsx(j,{children:e.jsx("pre",{children:`import { useState, useEffect } from 'react';

const items = [
    {
        thumb: 'profile-5.jpeg',
        name: 'Alan Green',
        email: 'alan@mail.com',
        status: 'Active',
        statusClass: 'badge badge-outline-primary',
    },
    {
        thumb: 'profile-11.jpeg',
        name: 'Linda Nelson',
        email: 'Linda@mail.com',
        status: 'Busy',
        statusClass: 'badge badge-outline-danger',
    },
    {
        thumb: 'profile-12.jpeg',
        name: 'Lila Perry',
        email: 'Lila@mail.com',
        status: 'Closed',
        statusClass: 'badge badge-outline-warning',
    },
    {
        thumb: 'profile-3.jpeg',
        name: 'Andy King',
        email: 'Andy@mail.com',
        status: 'Active',
        statusClass: 'badge badge-outline-primary',
    },
    {
        thumb: 'profile-15.jpeg',
        name: 'Jesse Cory',
        email: 'Jesse@mail.com',
        status: 'Busy',
        statusClass: 'badge badge-outline-danger',
    },
];

const [search, setSearch] = useState<string>('');
const [filteredItems, setFilteredItems] = useState<any>(items);

useEffect(() => {
        setFilteredItems(() => {
            return items.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase());
            });
        });
}, [search]);


<div className="mb-5 space-y-5">
    <form className="mx-auto w-full sm:w-1/2 mb-5">
        <div className="relative">
            <input
                type="text"
                value={search}
                placeholder="Search Attendees..."
                className="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" className="btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center">
                <svg>...</svg>
            </button>
        </div>
    </form>
    <div className="p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block">
        {filteredItems.map((item: any) => {
            return (
                <div
                    key={item.email}
                    className="bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between
                        text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]"
                >
                    <div className="user-profile">
                        <img src={\`/assets/images/\${item.thumb}\`} alt="img" className="w-8 h-8 rounded-md object-cover" />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <div className={\`badge \${item.statusClass} border-2 border-dashed\`}>{item.status}</div>
                    <div className="cursor-pointer">
                        <svg>...</svg>
                    </div>
                </div>
            );
        })}
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Overlay"}),e.jsx("button",{onClick:()=>{c("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(N,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5 space-y-5",children:e.jsx("form",{children:e.jsx(E,{onClickAway:v,children:e.jsxs("div",{className:"search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full",onClick:f,children:[e.jsx("input",{type:"text",placeholder:"Search...",className:`form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer ${u?"!block":""}`}),e.jsx("button",{type:"button",className:`text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary ${u?"!ltr:!right-auto ltr:left-1 rtl:right-1":""}`,children:e.jsx(k,{className:"mx-auto w-5 h-5"})})]})})})}),s.includes("code2")&&e.jsx(j,{children:e.jsx("pre",{children:`import { useState} from 'react';

const [focus, setFocus] = useState(false);

const overlayClickAway = () => {
    setFocus(false);
};

<form>
    <ClickAwayListener onClickAway={overlayClickAway}>
        <div className="search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full" onClick={overlaySearchClick}>
            <input
                type="text"
                placeholder="Search..."
                className={\`form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer ${u?"!block":""}\`}
            />
            <button
                type="button"
                className={\`text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary ${u?"!ltr:!right-auto ltr:left-1 rtl:right-1":""}\`}
            >
                <svg>...</svg>
            </button>
        </div>
    </ClickAwayListener>
</form>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Search Box"}),e.jsx("button",{onClick:()=>{c("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(N,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5 space-y-5",children:e.jsx("form",{children:e.jsxs("div",{className:"relative border border-white-dark/20  w-full flex",children:[e.jsx("button",{type:"submit",className:"text-primary m-auto p-3 flex items-center justify-center",children:e.jsx(k,{className:"mx-auto w-5 h-5"})}),e.jsx("input",{type:"text",placeholder:"Let's find your question in fast way",className:"form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"})]})})}),s.includes("code3")&&e.jsx(j,{children:e.jsx("pre",{children:`import { useState} from 'react';
import ClickAwayListener from 'react-click-away-listener';

const [focus, setFocus] = useState(false);

const overlaySearchClick = () => {
        setFocus(true);
};

<form>
    <div className="relative border border-white-dark/20  w-full flex">
        <button type="submit" placeholder="Let's find your question in fast way" className="text-primary m-auto p-3 flex items-center justify-center">
            <svg>...</svg>
        </button>
        <input
            type="text"
            placeholder="Let's find your question in fast way"
            className="form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"
        />
    </div>
</form>`})})]})]})]})};export{G as default};
