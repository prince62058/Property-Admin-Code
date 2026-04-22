import{u as _,r as a,s as k,j as e,L as D}from"./index-BV1HbQoV.js";import{C as h}from"./Highlight-9oqHSD-A.js";import{I as u}from"./IconCode-D18auF5m.js";const C=()=>{const p=_();a.useEffect(()=>{p(k("Countdown"))});const[l,n]=a.useState([]),m=s=>{l.includes(s)?n(d=>d.filter(t=>t!==s)):n([...l,s])},[x,b]=a.useState({days:null,hours:null,minutes:null,seconds:null}),[f,w]=a.useState(null),j=()=>{const s=new Date;s.setDate(s.getDate()+3);const d=s.getTime();let t={};w(setInterval(()=>{const o=new Date().getTime(),r=d-o;t.days=Math.floor(r/(1e3*60*60*24)),t.hours=Math.floor(r%(1e3*60*60*24)/(1e3*60*60)),t.minutes=Math.floor(r%(1e3*60*60)/(1e3*60)),t.seconds=Math.floor(r%(1e3*60)/1e3),b(c=>({...c,...t})),r<0&&clearInterval(f)}))};a.useEffect(()=>{j(),N()},[]);const[i,g]=a.useState({days:null,hours:null,minutes:null,seconds:null}),[v,y]=a.useState(null),N=()=>{const s=new Date;s.setFullYear(s.getFullYear()+1);const d=s.getTime();let t={};y(setInterval(()=>{const o=new Date().getTime(),r=d-o;t.days=Math.floor(r/(1e3*60*60*24)),t.hours=Math.floor(r%(1e3*60*60*24)/(1e3*60*60)),t.minutes=Math.floor(r%(1e3*60*60)/(1e3*60)),t.seconds=Math.floor(r%(1e3*60)/1e3),g(c=>({...c,...t})),r<0&&clearInterval(v)}))};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(D,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Countdown"})})]}),e.jsxs("div",{className:"pt-5 grid xl:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Simple Countdown"}),e.jsx("button",{onClick:()=>m("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(u,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5 grid grid-cols-4 justify-items-center gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:x.days})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Days"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:x.hours})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Hours"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:x.minutes})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Mins"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:x.seconds})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Sec"})]})]}),l.includes("code1")&&e.jsx(h,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState, useEffect } from 'react';

    const [demo1, setDemo1] = useState<any>({ days: null, hours: null, minutes: null, seconds: null });
    const [timer1, setTimer1] = useState<any>(null);

    const setTimerDemo1 = () => {
        const date = new Date();
        date.setDate(date.getDate() + 3);
        const countDownDate = date.getTime();

        let updatedValue: any = {};
        setTimer1(
            setInterval(() => {
                const now = new Date().getTime();

                const distance = countDownDate - now;

                updatedValue.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                updatedValue.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                updatedValue.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                updatedValue.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setDemo1((demo1: any) => ({
                    ...demo1,
                    ...updatedValue,
                }));

                if (distance < 0) {
                    clearInterval(timer1);
                }
            })
        );
    };

    useEffect(() => {
        setTimerDemo1();
    }, []);

<div className="mb-5 grid grid-cols-4 justify-items-center gap-3">
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.days}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.hours}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.minutes}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.seconds}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
    </div>
</div>
`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Circle Countdown"}),e.jsx("button",{onClick:()=>m("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(u,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5 grid grid-cols-4 justify-items-center gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:i.days})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Days"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:i.hours})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Hours"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:i.minutes})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Mins"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:i.seconds})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Sec"})]})]}),l.includes("code2")&&e.jsx(h,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState, useEffect } from 'react';

    const [demo2, setDemo2] = useState<any>({ days: null, hours: null, minutes: null, seconds: null });
    const [timer2, setTimer2] = useState<any>(null);

    const setTimerDemo2 = () => {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        const countDownDate = date.getTime();

        let updatedValue: any = {};

        setTimer2(
            setInterval(() => {
                const now = new Date().getTime();
                const distance = countDownDate - now;
                updatedValue.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                updatedValue.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                updatedValue.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                updatedValue.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setDemo2((demo2: any) => ({
                    ...demo2,
                    ...updatedValue,
                }));

                if (distance < 0) {
                    clearInterval(timer2);
                }
            })
        );
    };

    useEffect(() => {
        setTimerDemo2();
    }, []);

<div className="mb-5 grid grid-cols-4 justify-items-center gap-3">
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.days}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.hours}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.minutes}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.seconds}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
    </div>
</div>

`})})]})]})]})};export{C as default};
