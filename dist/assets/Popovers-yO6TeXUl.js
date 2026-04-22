import{u as m,r as a,s as b,j as t,L as g,N as u}from"./index-BV1HbQoV.js";import{C as r}from"./Highlight-9oqHSD-A.js";import{i as e}from"./tippy-C9Fz5-9x.js";import{I as i}from"./IconCode-D18auF5m.js";const f=()=>{const l=m();a.useEffect(()=>{l(b("Popovers"))});const[n,o]=a.useState([]),s=c=>{n.includes(c)?o(p=>p.filter(d=>d!==c)):o([...n,c])};return t.jsxs("div",{children:[t.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t.jsx("li",{children:t.jsx(g,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),t.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t.jsx("span",{children:"Popovers"})})]}),t.jsxs("div",{className:"pt-5 space-y-8",children:[t.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[t.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:t.jsx(u,{})}),t.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t.jsx("a",{href:"https://www.npmjs.com/package/@tippyjs/react",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/@tippyjs/react"})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t.jsxs("div",{className:"panel",id:"default",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default"}),t.jsx("button",{onClick:()=>{s("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex justify-center w-full gap-4",children:[t.jsx(e,{trigger:"click",content:"Popover using ANCHOR tag",children:t.jsx("button",{type:"button",className:"btn bg-primary btn-primary",children:"Link"})}),t.jsx(e,{trigger:"click",content:"Popover using BUTTON tag",children:t.jsx("button",{type:"button",className:"btn btn-success",children:"Button"})})]})}),n.includes("code1")&&t.jsx(r,{children:t.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="Popover using ANCHOR tag">
    <button type="button" className="btn bg-primary btn-primary">
        Link
    </button>
</Tippy>

<Tippy trigger="click" content="Popover using BUTTON tag">
    <button type="button" className="btn btn-success">
        Button
    </button>
</Tippy>`})})]}),t.jsxs("div",{className:"panel",id:"directions",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Placement"}),t.jsx("button",{onClick:()=>{s("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t.jsx(e,{trigger:"click",content:"Popover on top",placement:"top",children:t.jsx("button",{type:"button",className:"btn btn-info",children:"Popover on top"})}),t.jsx(e,{trigger:"click",content:"Popover on left",placement:"left",children:t.jsx("button",{type:"button",className:"btn btn-secondary",children:"Popover on left"})}),t.jsx(e,{trigger:"click",content:"Popover on right",placement:"right",children:t.jsx("button",{type:"button",className:"btn btn-danger",children:"Popover on right"})}),t.jsx(e,{trigger:"click",content:"Popover on bottom",placement:"bottom",children:t.jsx("button",{type:"button",className:"btn btn-warning",children:"Popover on bottom"})})]})}),n.includes("code2")&&t.jsx(r,{children:t.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="Popover on top" placement="top">
    <button type="button" className="btn btn-info">
        Popover on top
    </button>
</Tippy>

<Tippy trigger="click" content="Popover on left" placement="left">
    <button type="button" className="btn btn-secondary">
        Popover on left
    </button>
</Tippy>

<Tippy trigger="click" content="Popover on right" placement="right">
    <button type="button" className="btn btn-danger">
        Popover on right
    </button>
</Tippy>

<Tippy trigger="click" content="Popover on bottom" placement="bottom">
    <button type="button" className="btn btn-warning">
        Popover on bottom
    </button>
</Tippy>`})})]}),t.jsxs("div",{className:"panel lg:row-start-1 lg:col-start-2",id:"dismissible",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dismissible popover"}),t.jsx("button",{onClick:()=>{s("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsx("div",{className:"flex justify-center gap-4 w-full",children:t.jsx(e,{trigger:"click",content:"Popover on left",placement:"left",children:t.jsx("button",{type:"button","data-dismissable":"true",className:"btn btn-dark",children:"Popover on left"})})})}),n.includes("code3")&&t.jsx(r,{children:t.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="Popover on left" placement="left">
    <button type="button" data-dismissable="true" className="btn btn-dark">
        Popover on left
    </button>
</Tippy>`})})]}),t.jsxs("div",{className:"panel",id:"options",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Options"}),t.jsx("button",{className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>{s("code4")},children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t.jsx(e,{trigger:"mouseenter focus",content:"On Hover",children:t.jsx("button",{type:"button","data-trigger":"mouseenter",className:"btn btn-primary",children:"On Hover"})}),t.jsx(e,{trigger:"focusin",content:"On Focus",children:t.jsx("button",{type:"button","data-trigger":"focus",className:"btn btn-secondary",children:"On Focus"})}),t.jsx(e,{trigger:"click",content:"Delay 1s",delay:1e3,children:t.jsx("button",{type:"button","data-delay":"1000",className:"btn btn-info",children:"Delay"})}),t.jsx(e,{trigger:"click",content:"Disabled Animation",children:t.jsx("button",{type:"button","data-animation":"false",className:"btn btn-dark",children:"Disabled Animation"})})]})}),n.includes("code4")&&t.jsx(r,{children:t.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="mouseenter focus" content="On Hover">
    <button type="button" data-trigger="mouseenter" className="btn btn-primary">
        On Hover
    </button>
</Tippy>

<Tippy trigger="focusin" content="On Focus">
    <button type="button" data-trigger="focus" className="btn btn-secondary">
        On Focus
    </button>
</Tippy>

<Tippy trigger="click" content="Delay 1s" delay={1000}>
    <button type="button" data-delay="1000" className="btn btn-info">
        Delay
    </button>
</Tippy>

<Tippy trigger="click" content="Disabled Animation">
    <button type="button" data-animation="false" className="btn btn-dark">
        Disabled Animation
    </button>
</Tippy>`})})]}),t.jsxs("div",{className:"panel lg:col-span-2",id:"colors",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Colors"}),t.jsx("button",{className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>{s("code5")},children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(i,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t.jsx(e,{trigger:"click",content:"Primary",theme:"primary",children:t.jsx("button",{type:"button",className:"btn btn-primary",children:"Primary"})}),t.jsx(e,{trigger:"click",content:"Success",theme:"success",children:t.jsx("button",{type:"button",className:"btn btn-success",children:"Success"})}),t.jsx(e,{trigger:"click",content:"info",theme:"info",children:t.jsx("button",{type:"button",className:"btn btn-info",children:"Info"})}),t.jsx(e,{trigger:"click",content:"danger",theme:"danger",children:t.jsx("button",{type:"button",className:"btn btn-danger",children:"Danger"})}),t.jsx(e,{trigger:"click",content:"warning",theme:"warning",children:t.jsx("button",{type:"button",className:"btn btn-warning",children:"Warning"})}),t.jsx(e,{trigger:"click",content:"secondary",theme:"secondary",children:t.jsx("button",{type:"button",className:"btn btn-secondary",children:"Secondary"})}),t.jsx(e,{trigger:"click",content:"dark",theme:"dark",children:t.jsx("button",{type:"button",className:"btn btn-dark",children:"Dark"})})]})}),n.includes("code5")&&t.jsx(r,{children:t.jsx("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="Primary" theme="primary">
    <button type="button" className="btn btn-primary">
        Primary
    </button>
</Tippy>

<Tippy trigger="click" content="Success" theme="success">
    <button type="button" className="btn btn-success">
        Success
    </button>
</Tippy>

<Tippy trigger="click" content="info" theme="info">
    <button type="button" className="btn btn-info">
        Info
    </button>
</Tippy>

<Tippy trigger="click" content="danger" theme="danger">
    <button type="button" className="btn btn-danger">
        Danger
    </button>
</Tippy>

<Tippy trigger="click" content="warning" theme="warning">
    <button type="button" className="btn btn-warning">
        Warning
    </button>
</Tippy>

<Tippy trigger="click" content="secondary" theme="secondary">
    <button type="button" className="btn btn-secondary">
        Secondary
    </button>
</Tippy>

<Tippy trigger="click" content="dark" theme="dark">
    <button type="button" className="btn btn-dark">
        Dark
    </button>
</Tippy>`})})]})]})]})]})};export{f as default};
