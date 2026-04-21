import{u as k,r as c,s as T,j as e,L as S,d as x,G as u}from"./index-0xdiYbwi.js";import{C as b}from"./Highlight-CHDirOGe.js";import{A as r}from"./index-CCYGufIC.js";import{I as w}from"./IconCode-BKl6R_QZ.js";import{I as i}from"./IconTxtFile-DUv--G9c.js";import{I as d,a as g}from"./IconFolderMinus-BbV2eqCE.js";const E=()=>{const f=k();c.useEffect(()=>{f(T("Treeview"))});const[m,v]=c.useState([]),j=t=>{m.includes(t)?v(a=>a.filter(n=>n!==t)):v([...m,t])},[l,N]=c.useState(["images"]),[p,C]=c.useState(!1),h=t=>{l.includes(t)?N(a=>a.filter(n=>n!==t)):N([...l,t])},[s,y]=c.useState(["parent"]),o=t=>{s.includes(t)?y(a=>a.filter(n=>n!==t)):y([...s,t])};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(S,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Treeview"})})]}),e.jsxs("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Animated"}),e.jsx("button",{onClick:()=>{j("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(w,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("ul",{className:"font-semibold",children:[e.jsxs("li",{className:"py-[5px]",children:[e.jsxs("button",{type:"button",className:`${l.includes("css")?"active":""}`,onClick:()=>h("css"),children:[e.jsx(x,{className:`w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2 ${l.includes("css")&&"rotate-180"}`}),e.jsx(u,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"CSS"]}),e.jsx(r,{duration:300,height:l.includes("css")?"auto":0,children:e.jsx("ul",{className:"ltr:pl-14 rtl:pr-14",children:e.jsxs("li",{className:"py-[5px]",children:[e.jsx(i,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"style.css"]})})})]}),e.jsxs("li",{className:"py-[5px]",children:[e.jsxs("button",{type:"button",className:`${l.includes("images")?"active":""}`,onClick:()=>h("images"),children:[e.jsx(x,{className:`w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2 ${l.includes("images")&&"rotate-180"}`}),e.jsx(u,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"Images"]}),e.jsx(r,{duration:300,height:l.includes("images")?"auto":0,children:e.jsxs("ul",{className:"ltr:pl-14 rtl:pr-14",children:[e.jsxs("li",{className:"py-[5px]",children:[e.jsx(i,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"profile-16.jpeg"]}),e.jsxs("li",{className:"py-[5px]",children:[e.jsx(i,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"background.png"]}),e.jsxs("li",{className:"py-[5px]",children:[e.jsx(i,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"gallery.jpg"]})]})})]}),e.jsxs("li",{className:"py-[5px]",children:[e.jsxs("button",{type:"button",className:`${l.includes("html")?"active":""}`,onClick:()=>h("html"),children:[e.jsx(x,{className:`w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2 ${l.includes("html")&&"rotate-180"}`}),e.jsx(u,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"HTML"]}),e.jsx(r,{duration:300,height:l.includes("html")?"auto":0,children:e.jsxs("ul",{className:"ltr:pl-14 rtl:pr-14",children:[e.jsxs("li",{className:"py-[5px]",children:[e.jsxs("button",{type:"button",className:`${p?"open":""} `,onClick:()=>C(!p),children:[e.jsx(x,{className:`w-5 h-5 text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2 ${l.includes("pages")&&"rotate-180"}`}),e.jsx(u,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"PAGES"]}),e.jsx(r,{duration:300,height:p?"auto":0,children:e.jsxs("ul",{className:"ltr:pl-14 rtl:pr-14",children:[e.jsxs("li",{className:"py-[5px]",children:[e.jsx(i,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"file name"]}),e.jsxs("li",{className:"py-[5px]",children:[e.jsx(i,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"file name"]}),e.jsxs("li",{className:"py-[5px]",children:[e.jsx(i,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"file name"]})]})})]}),e.jsxs("li",{className:"py-[5px] ltr:pl-8 rtl:pr-8",children:[e.jsx(i,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"file name"]}),e.jsxs("li",{className:"py-[5px] ltr:pl-8 rtl:pr-8",children:[e.jsx(i,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"file name"]})]})})]}),e.jsxs("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7",children:[e.jsx(i,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"index.html"]}),e.jsxs("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7",children:[e.jsx(i,{className:"w-4.5 h-4.5 text-primary inline ltr:mr-2 rtl:ml-2"}),"components.html"]})]})}),m.includes("code1")&&e.jsx(b,{children:e.jsx("pre",{children:`import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const [treeview1, setTreeview1] = useState<string[]>(['images']);
const [pagesSubMenu, setPagesSubMenu] = useState(false);

const toggleTreeview1 = (name: any) => {
    if (treeview1.includes(name)) {
        setTreeview1((value) => value.filter((d) => d !== name));
    } else {
        setTreeview1([...treeview1, name]);
    }
};

<ul className="font-semibold">
    <li className="py-[5px]">
        <button type="button" className={\`${l.includes("css")?"active":""}\`} onClick={() => toggleTreeview1('css')}>
            <svg>...</svg>
            <svg>...</svg>
            CSS
        </button>
        <AnimateHeight duration={300} height={treeview1.includes('css') ? 'auto' : 0}>
            <ul className="ltr:pl-14 rtl:pr-14">
                <li className="py-[5px]">
                    <svg>...</svg>
                    style.css
                </li>
            </ul>
        </AnimateHeight>
    </li>
    <li className="py-[5px]">
        <button type="button" className={\`${l.includes("images")?"active":""}\`} onClick={() => toggleTreeview1('images')}>
            <svg>...</svg>
            <svg>...</svg>
            Images
        </button>
        <AnimateHeight duration={300} height={treeview1.includes('images') ? 'auto' : 0}>
            <ul className="ltr:pl-14 rtl:pr-14">
                <li className="py-[5px]">
                    <svg>...</svg>
                    profile-16.jpeg
                </li>
                <li className="py-[5px]">
                    <svg>...</svg>
                    background.png
                </li>
                <li className="py-[5px]">
                    <svg>...</svg>
                    gallery.jpg
                </li>
            </ul>
        </AnimateHeight>
    </li>
    <li className="py-[5px]">
        <button type="button" className={\`${l.includes("html")?"active":""}\`} onClick={() => toggleTreeview1('html')}>
            <svg>...</svg>
            <svg>...</svg>
            HTML
        </button>
        <AnimateHeight duration={300} height={treeview1.includes('html') ? 'auto' : 0}>
            <ul className="ltr:pl-14 rtl:pr-14">
                <li className="py-[5px]">
                    <button type="button" className={\`${p?"open":""}\`} onClick={() => setPagesSubMenu(!pagesSubMenu)}>
                        <svg>...</svg>
                        <svg>...</svg>
                        PAGES
                    </button>
                    <AnimateHeight duration={300} height={pagesSubMenu ? 'auto' : 0}>
                        <ul className="ltr:pl-14 rtl:pr-14">
                            <li className="py-[5px]">
                                <svg>...</svg>
                                file name
                            </li>
                            <li className="py-[5px]">
                                <svg>...</svg>
                                file name
                            </li>
                            <li className="py-[5px]">
                                <svg>...</svg>
                                file name
                            </li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px] ltr:pl-8 rtl:pr-8">
                    <svg>...</svg>
                    file name
                </li>
                <li className="py-[5px] ltr:pl-8 rtl:pr-8">
                    <svg>...</svg>
                    file name
                </li>
            </ul>
        </AnimateHeight>
    </li>
    <li className="py-[5px] ltr:pl-7 rtl:pr-7">
        <svg>...</svg>
        index.html
    </li>
    <li className="py-[5px] ltr:pl-7 rtl:pr-7">
        <svg>...</svg>
        components.html
    </li>
</ul>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e.jsx("button",{onClick:()=>{j("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(w,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("ul",{className:"font-semibold",children:e.jsxs("li",{children:[e.jsxs("button",{type:"button",className:`${s.includes("parent")?"active":""}`,onClick:()=>o("parent"),children:[s.includes("parent")?e.jsx(d,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}):e.jsx(g,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"Parent Node"]}),e.jsx(r,{duration:300,height:s.includes("parent")?"auto":0,easing:"none",children:e.jsxs("ul",{children:[e.jsxs("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7",children:[e.jsxs("button",{type:"button",className:`${s.includes("img")?"open":""} `,onClick:()=>o("img"),children:[s.includes("img")?e.jsx(d,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}):e.jsx(g,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"img"]}),e.jsx("ul",{})]}),e.jsxs("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7",children:[e.jsxs("button",{type:"button",className:`${s.includes("css")?"open":""} `,onClick:()=>o("css"),children:[s.includes("css")?e.jsx(d,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}):e.jsx(g,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"css"]}),e.jsx(r,{duration:300,height:s.includes("css")?"auto":0,easing:"none",children:e.jsx("ul",{children:e.jsx("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7 text-secondary",children:"style.css"})})})]}),e.jsxs("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7",children:[e.jsxs("button",{type:"button",className:`${s.includes("js")?"open":""} `,onClick:()=>o("js"),children:[s.includes("js")?e.jsx(d,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}):e.jsx(g,{className:"text-primary inline relative -top-1 ltr:mr-2 rtl:ml-2"}),"js"]}),e.jsx(r,{duration:300,height:s.includes("js")?"auto":0,easing:"none",children:e.jsx("ul",{children:e.jsx("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7 text-secondary",children:"script.js"})})})]}),e.jsx("li",{className:"py-[5px] ltr:pl-7 rtl:pr-7 text-secondary",children:"index.html"})]})})]})})}),m.includes("code2")&&e.jsx(b,{children:e.jsx("pre",{children:`import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const [pagesSubMenu, setPagesSubMenu] = useState(false);

const [treeview2, setTreeview2] = useState<string[]>(['parent']);

const toggleTreeview2 = (name: any) => {
    if (treeview2.includes(name)) {
        setTreeview2((value) => value.filter((d) => d !== name));
    } else {
        setTreeview2([...treeview2, name]);
    }
};

<ul className="font-semibold">
    <li>
        <button type="button" className={\`${s.includes("parent")?"active":""}\`} onClick={() => toggleTreeview2('parent')}>
            {treeview2.includes('parent') ? (
                <svg>...</svg>
            ) : (
                <svg>...</svg>
            )}
            Parent Node
        </button>
        <AnimateHeight duration={300} height={treeview2.includes('parent') ? 'auto' : 0} easing="none">
            <ul>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                    <button type="button" className={\`${s.includes("img")?"open":""}\`} onClick={() => toggleTreeview2('img')}>
                        {treeview2.includes('img') ? (
                            <svg>...</svg>
                        ) : (
                            <svg>...</svg>
                        )}
                        img
                    </button>
                    <ul></ul>
                </li>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                    <button type="button" className={\`${s.includes("css")?"open":""}\`} onClick={() => toggleTreeview2('css')}>
                        {treeview2.includes('css') ? (
                            <svg>...</svg>
                        ) : (
                            <svg>...</svg>
                        )}
                        css
                    </button>
                    <AnimateHeight duration={300} height={treeview2.includes('css') ? 'auto' : 0} easing="none">
                        <ul>
                            <li className="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">style.css</li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                    <button type="button" className={\`${s.includes("js")?"open":""}\`} onClick={() => toggleTreeview2('js')}>
                        {treeview2.includes('js') ? (
                            <svg>...</svg>
                        ) : (
                            <svg>...</svg>
                        )}
                        js
                    </button>
                    <AnimateHeight duration={300} height={treeview2.includes('js') ? 'auto' : 0} easing="none">
                        <ul>
                            <li className="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">script.js</li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">index.html</li>
            </ul>
        </AnimateHeight>
    </li>
</ul>`})})]})]})]})};export{E as default};
