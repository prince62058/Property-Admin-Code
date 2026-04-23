import{u as he,r as t,s as fe,a as ne,j as e,L as ye,N as re,X as l,i as s,k as a,$ as i,l as n,c as oe,d as de}from"./index-C7ked3Zb.js";import{C as m}from"./Highlight-BmV6rYv1.js";import{S as ge,N as Ne,P as je,a as ke}from"./pagination-CvN5_Yxi.js";import{I as u}from"./IconCode-DI3uXazK.js";import{I as ce,a as me,b as we}from"./IconGithub-DD7eus6Q.js";import{I as ue}from"./IconFacebook-DZ_anPTE.js";import{u as o}from"./tabs-wg6eYhNM.js";import"./use-resolve-button-type-vFk92FLj.js";const qe=()=>{const pe=he();t.useEffect(()=>{pe(fe("Modals"))});const be=["carousel1.jpeg","carousel2.jpeg","carousel3.jpeg"],D=ne(r=>r.themeConfig.rtlClass)==="rtl",[d,L]=t.useState([]),c=r=>{d.includes(r)?L(U=>U.filter(ve=>ve!==r)):L([...d,r])},[V,p]=t.useState(!1),[O,b]=t.useState(!1),[R,x]=t.useState(!1),[E,v]=t.useState(!1),[$,h]=t.useState(!1),[G,f]=t.useState(!1),[A,y]=t.useState(!1),[Q,_]=t.useState(!1),[Y,g]=t.useState(!1),[Z,N]=t.useState(!1),[H,j]=t.useState(!1),[X,k]=t.useState(!1),[B,w]=t.useState(!1),[W,C]=t.useState(!1),[J,T]=t.useState(!1),[K,F]=t.useState(!1),[ee,S]=t.useState(!1),[te,M]=t.useState(!1),[ae,P]=t.useState(!1),[se,q]=t.useState(!1),[ie,z]=t.useState(!1),[xe,I]=t.useState(!1),le=ne(r=>r.themeConfig);return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(ye,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Modals"})})]}),e.jsxs("div",{className:"space-y-8 pt-5",children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary",children:[e.jsx("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:e.jsx(re,{})}),e.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e.jsx("a",{href:"https://headlessui.com/react/dialog",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://headlessui.com/react/dialog"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Basic"}),e.jsx("button",{type:"button",onClick:()=>c("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(u,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>p(!0),children:"Launch modal"})}),e.jsx(l,{appear:!0,show:V,as:t.Fragment,children:e.jsxs(s,{as:"div",open:V,onClose:()=>p(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{as:"div",className:"panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("div",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{type:"button",className:"text-white-dark hover:text-dark",onClick:()=>p(!1),children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>p(!1),children:"Discard"}),e.jsx("button",{type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:()=>p(!1),children:"Save"})]})]})]})})})})]})})]}),d.includes("code1")&&e.jsx(m,{children:e.jsx("pre",{className:"language-typescript",children:`import { Dialog, Transition,Tab } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal1, setModal1] = useState(false);

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-primary" onClick={() => setModal1(true)}>
            Launch modal
        </button>
    </div>
    <Transition appear show={modal1} as={Fragment}>
        <Dialog as="div" open={modal1} onClose={() => setModal1(false)}>
            <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0" />
            </TransitionChild>
            <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                <div className="flex items-start justify-center min-h-screen px-4">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel as="div" className="panel border-0 p-0 rounded-lg overflow-hidden my-8 w-full max-w-lg text-black dark:text-white-dark">
                            <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                <div className="text-lg font-bold">Modal Title</div>
                                <button type="button" className="text-white-dark hover:text-dark" onClick={() => setModal1(false)}>
                                    <svg>...</svg>
                                </button>
                            </div>
                            <div className="p-5">
                                <p>
                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit
                                    amet ullamcorper mi.
                                </p>
                                <div className="flex justify-end items-center mt-8">
                                    <button type="button" className="btn btn-outline-danger" onClick={() => setModal1(false)}>
                                        Discard
                                    </button>
                                    <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={() => setModal1(false)}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
</div>

                                        `})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Vertically Centered"}),e.jsx("button",{type:"button",onClick:()=>c("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(u,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",onClick:()=>b(!0),className:"btn btn-info",children:"Launch modal"})}),e.jsx(l,{appear:!0,show:O,as:t.Fragment,children:e.jsxs(s,{as:"div",open:O,onClose:()=>b(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-center justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{as:"div",className:"panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{type:"button",className:"text-white-dark hover:text-dark",onClick:()=>b(!1),children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>b(!1),children:"Discard"}),e.jsx("button",{type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:()=>b(!1),children:"Save"})]})]})]})})})})]})})]}),d.includes("code2")&&e.jsx(m,{children:e.jsx("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal2, setModal2] = useState(false);

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" onClick={() => setModal2(true)} className="btn btn-info">
            Launch modal
        </button>
    </div>
    <Transition appear show={modal2} as={Fragment}>
        <Dialog as="div" open={modal2} onClose={() => setModal2(false)}>
            <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0" />
            </TransitionChild>
            <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel as="div" className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                            <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                <h5 className="font-bold text-lg">Modal Title</h5>
                                <button type="button" className="text-white-dark hover:text-dark" onClick={() => setModal2(false)}>
                                    <svg>...</svg>
                                </button>
                            </div>
                            <div className="p-5">
                                <p>
                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit
                                    amet ullamcorper mi.
                                </p>
                                <div className="flex justify-end items-center mt-8">
                                    <button type="button" className="btn btn-outline-danger" onClick={() => setModal2(false)}>
                                        Discard
                                    </button>
                                    <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={() => setModal2(false)}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
</div>
`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Static"}),e.jsx("button",{type:"button",onClick:()=>c("code3"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(u,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",onClick:()=>x(!0),className:"btn btn-secondary",children:"Static modal"})}),e.jsx(l,{appear:!0,show:R,as:t.Fragment,children:e.jsxs(s,{as:"div",open:R,onClose:()=>x(!0),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{className:"panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("div",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{type:"button",onClick:()=>x(!1),className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{type:"button",onClick:()=>x(!1),className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{type:"button",onClick:()=>x(!1),className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]}),d.includes("code3")&&e.jsx(m,{children:e.jsx("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal3, setModal3] = useState(false);

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" onClick={() => setModal3(true)} className="btn btn-secondary">
            Static modal
        </button>
    </div>
    <Transition appear show={modal3} as={Fragment}>
        <Dialog as="div" open={modal3} onClose={() => setModal3(true)}>
            <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0" />
            </TransitionChild>
            <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                <div className="flex items-start justify-center min-h-screen px-4">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                            <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                <div className="font-bold text-lg">Modal Title</div>
                                <button type="button" onClick={() => setModal3(false)} className="text-white-dark hover:text-dark">
                                    <svg>...</svg>
                                </button>
                            </div>
                            <div className="p-5">
                                <p>
                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit
                                    amet ullamcorper mi.
                                </p>
                                <div className="flex justify-end items-center mt-8">
                                    <button type="button" onClick={() => setModal3(false)} className="btn btn-outline-danger">
                                        Discard
                                    </button>
                                    <button type="button" onClick={() => setModal3(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
</div>

`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Remove animation"}),e.jsx("button",{type:"button",onClick:()=>c("code4"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(u,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5",onClick:()=>v(!0),children:[e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-success",children:"Launch modal"})}),e.jsx(l,{appear:!0,show:E,as:t.Fragment,children:e.jsxs(s,{as:"div",open:E,onClose:()=>v(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{className:"fixed inset-0 z-[999] bg-[black]/60 px-4",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsxs(i,{className:"panel my-8 w-full max-w-lg overflow-hidden  rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{type:"button",onClick:()=>v(!1),className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>v(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{type:"button",onClick:()=>v(!1),className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),d.includes("code4")&&e.jsx(m,{children:e.jsx("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal4, setModal4] = useState(false);

<div className="mb-5" onClick={() => setModal4(true)}>
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success">
            Launch modal
        </button>
    </div>
    <Transition appear show={modal4} as={Fragment}>
        <Dialog as="div" open={modal4} onClose={() => setModal4(false)}>
            <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0" />
            </TransitionChild>
            <div className="fixed inset-0 bg-[black]/60 z-[999] px-4">
                <div className="flex items-start justify-center min-h-screen px-4">
                    <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden  w-full max-w-lg my-8 text-black dark:text-white-dark">
                        <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                            <h5 className="font-bold text-lg">Modal Title</h5>
                            <button type="button" onClick={() => setModal4(false)} className="text-white-dark hover:text-dark">
                                <svg>...</svg>
                            </button>
                        </div>
                        <div className="p-5">
                            <p>
                                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus
                                et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper
                                mi.
                            </p>
                            <div className="flex justify-end items-center mt-8">
                                <button onClick={() => setModal4(false)} type="button" className="btn btn-outline-danger">
                                    Discard
                                </button>
                                <button type="button" onClick={() => setModal4(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                    Save
                                </button>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    </Transition>
</div>
`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Optional sizes"}),e.jsx("button",{type:"button",onClick:()=>c("code5"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(u,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>h(!0),className:"btn btn-warning",children:"Extra large"}),e.jsx(l,{appear:!0,show:$,as:t.Fragment,children:e.jsxs(s,{as:"div",open:$,onClose:()=>h(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{className:"fixed inset-0 z-[999] bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{className:"panel my-8 w-full max-w-5xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{onClick:()=>h(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>h(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>h(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>f(!0),className:"btn btn-danger",children:"Large"}),e.jsx(l,{appear:!0,show:G,as:t.Fragment,children:e.jsxs(s,{as:"div",open:G,onClose:()=>f(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{className:"fixed inset-0 z-[999] bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{className:"panel my-8 w-full max-w-xl overflow-hidden  rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{onClick:()=>f(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>f(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>f(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>y(!0),className:"btn btn-secondary",children:"Small"}),e.jsx(l,{appear:!0,show:A,as:t.Fragment,children:e.jsxs(s,{as:"div",open:A,onClose:()=>y(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{className:"panel my-8 w-full max-w-sm overflow-hidden  rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{onClick:()=>y(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>y(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>y(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]})]})}),d.includes("code5")&&e.jsx(m,{children:e.jsx("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';


const [modal5, setModal5] = useState(false);
const [modal6, setModal6] = useState(false);
const [modal7, setModal7] = useState(false);

<div className="mb-5">
    <div className="flex items-center justify-center gap-2">
        <div>
            <button type="button" onClick={() => setModal5(true)} className="btn btn-warning">
                Extra large
            </button>
            <Transition appear show={modal5} as={Fragment}>
                <Dialog as="div" open={modal5} onClose={() => setModal5(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div className="fixed inset-0 bg-[black]/60 z-[999]">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-5xl my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Modal Title</h5>
                                        <button onClick={() => setModal5(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <p>
                                            Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius
                                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac
                                            pulvinar. Ut sit amet ullamcorper mi.
                                        </p>
                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setModal5(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button onClick={() => setModal5(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>

        <div>
            <button type="button" onClick={() => setModal6(true)} className="btn btn-danger">
                Large
            </button>
            <Transition appear show={modal6} as={Fragment}>
                <Dialog as="div" open={modal6} onClose={() => setModal6(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div className="fixed inset-0 bg-[black]/60 z-[999]">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden  w-full max-w-xl my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Modal Title</h5>
                                        <button onClick={() => setModal6(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="dark:text-white-dark/70 text-base font-medium text-[#1f2937]">
                                            <p>
                                                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius
                                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac
                                                pulvinar. Ut sit amet ullamcorper mi.
                                            </p>
                                        </div>
                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setModal6(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button onClick={() => setModal6(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>

        <div>
            <button type="button" onClick={() => setModal7(true)} className="btn btn-secondary">
                Small
            </button>
            <Transition appear show={modal7} as={Fragment}>
                <Dialog as="div" open={modal7} onClose={() => setModal7(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden  w-full max-w-sm my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Modal Title</h5>
                                        <button onClick={() => setModal7(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="dark:text-white-dark/70 text-base font-medium text-[#1f2937]">
                                            <p>
                                                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius
                                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac
                                                pulvinar. Ut sit amet ullamcorper mi.
                                            </p>
                                        </div>
                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setModal7(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button onClick={() => setModal7(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    </div>
</div>

`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Video"}),e.jsx("button",{type:"button",onClick:()=>c("code6"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(u,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{onClick:()=>_(!0),type:"button",className:"btn btn-primary",children:"Play Youtube"})}),e.jsx(l,{appear:!0,show:Q,as:t.Fragment,children:e.jsxs(s,{as:"div",open:Q,onClose:()=>_(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{className:"my-8 w-full max-w-3xl overflow-hidden",children:[e.jsx("div",{className:"text-right",children:e.jsx("button",{onClick:()=>_(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})}),e.jsx("iframe",{title:"youtube-video",src:"https://www.youtube.com/embed/tgbNymZ7vqY",className:"h-[250px] w-full md:h-[550px]"})]})})})})]})})]}),d.includes("code6")&&e.jsx(m,{children:e.jsx("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal8, setModal8] = useState(false);

<div className="mb-5">
<div className="flex items-center justify-center">
    <button onClick={() => setModal8(true)} type="button" className="btn btn-primary">
        Play Youtube
    </button>
</div>
<Transition appear show={modal8} as={Fragment}>
    <Dialog as="div" open={modal8} onClose={() => setModal8(false)}>
        <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0" />
        </TransitionChild>
        <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
            <div className="flex items-start justify-center min-h-screen px-4">
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <DialogPanel className="max-w-3xl w-full my-8 overflow-hidden">
                        <div className="text-right">
                            <button onClick={() => setModal8(false)} type="button" className="text-white-dark hover:text-dark">
                                <svg>...</svg>
                            </button>
                        </div>
                        <iframe title="youtube-video" src="https://www.youtube.com/embed/tgbNymZ7vqY" className="w-full h-[250px] md:h-[550px]"></iframe>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </div>
    </Dialog>
</Transition>
</div>
`})})]}),e.jsxs("div",{className:"panel md:col-span-2",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Animation Style Modal"}),e.jsx("button",{type:"button",onClick:()=>c("code7"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(u,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[e.jsxs("div",{children:[e.jsx("button",{onClick:()=>g(!0),type:"button",className:"btn btn-primary",children:"FadeIn"}),e.jsx(l,{appear:!0,show:Y,as:t.Fragment,children:e.jsxs(s,{as:"div",open:Y,onClose:()=>g(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"fadein_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsxs(i,{className:"panel animate__animated animate__fadeIn my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{onClick:()=>g(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>g(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>g(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>N(!0),type:"button",className:"btn btn-info",children:"SlideIn Down"}),e.jsx(l,{appear:!0,show:Z,as:t.Fragment,children:e.jsxs(s,{as:"div",open:Z,onClose:()=>N(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"slideIn_down_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsxs(i,{className:"panel animate__animated animate__slideInDown my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{onClick:()=>N(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>N(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>N(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>j(!0),className:"btn btn-success",children:"FadeIn Up"}),e.jsx(l,{appear:!0,show:H,as:t.Fragment,children:e.jsxs(s,{as:"div",open:H,onClose:()=>j(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"fadein_left_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsxs(i,{className:"panel animate__animated animate__fadeInUp my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{onClick:()=>j(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>j(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>j(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>k(!0),type:"button",className:"btn btn-warning",children:"SlideIn Up"}),e.jsx(l,{appear:!0,show:X,as:t.Fragment,children:e.jsxs(s,{as:"div",open:X,onClose:()=>k(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"slidein_up_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsxs(i,{className:"panel animate__animated animate__slideInUp my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{onClick:()=>k(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>k(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>k(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>w(!0),type:"button",className:"btn btn-danger",children:"FadeIn Left"}),e.jsx(l,{appear:!0,show:B,as:t.Fragment,children:e.jsxs(s,{as:"div",open:B,onClose:()=>w(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"fadein_up_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsxs(i,{className:`panel animate__animated my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark ${D?"animate__fadeInRight":"animate__fadeInLeft"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{onClick:()=>w(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>w(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>w(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>C(!0),type:"button",className:"btn btn-secondary",children:"RotateIn Left"}),e.jsx(l,{appear:!0,show:W,as:t.Fragment,children:e.jsxs(s,{as:"div",open:W,onClose:()=>C(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"rotatein_left_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsxs(i,{className:`panel animate__animated my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark ${D?"animate__rotateInDownRight":"animate__rotateInDownLeft"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{onClick:()=>C(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>C(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>C(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>T(!0),type:"button",className:"btn btn-dark",children:"FadeIn Right"}),e.jsx(l,{appear:!0,show:J,as:t.Fragment,children:e.jsxs(s,{as:"div",open:J,onClose:()=>T(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"fadein_right_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsxs(i,{className:`panel animate__animated my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark ${D?"animate__fadeInLeft":"animate__fadeInRight"}`,children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{onClick:()=>T(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>T(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>T(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>F(!0),type:"button",className:"btn btn-primary",children:"ZoomIn Up"}),e.jsx(l,{appear:!0,show:K,as:t.Fragment,children:e.jsxs(s,{as:"div",open:K,onClose:()=>F(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"zoomIn_up_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsxs(i,{className:"panel animate__animated animate__zoomInUp my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Modal Title"}),e.jsx("button",{onClick:()=>F(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>F(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>F(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]})]})}),d.includes("code7")&&e.jsx(m,{children:e.jsx("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal9, setModal9] = useState(false);
const [modal10, setModal10] = useState(false);
const [modal11, setModal11] = useState(false);
const [modal12, setModal12] = useState(false);
const [modal13, setModal13] = useState(false);
const [modal14, setModal14] = useState(false);
const [modal15, setModal15] = useState(false);
const [modal16, setModal16] = useState(false);

<div className="mb-5">
    <div className="flex flex-wrap items-center justify-center gap-2">
        <div>
            <button onClick={() => setModal9(true)} type="button" className="btn btn-primary">
                FadeIn
            </button>
            <Transition appear show={modal9} as={Fragment}>
                <Dialog as="div" open={modal9} onClose={() => setModal9(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="fadein_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__fadeIn">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal9(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal9(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal9(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal10(true)} type="button" className="btn btn-info">
                SlideIn Down
            </button>
            <Transition appear show={modal10} as={Fragment}>
                <Dialog as="div" open={modal10} onClose={() => setModal10(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="slideIn_down_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__slideInDown">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal10(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal10(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal10(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button type="button" onClick={() => setModal11(true)} className="btn btn-success">
                FadeIn Up
            </button>
            <Transition appear show={modal11} as={Fragment}>
                <Dialog as="div" open={modal11} onClose={() => setModal11(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="fadein_left_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__fadeInUp">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal11(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal11(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal11(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal12(true)} type="button" className="btn btn-warning">
                SlideIn Up
            </button>
            <Transition appear show={modal12} as={Fragment}>
                <Dialog as="div" open={modal12} onClose={() => setModal12(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="slidein_up_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__slideInUp">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal12(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal12(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal12(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal13(true)} type="button" className="btn btn-danger">
                FadeIn Left
            </button>
            <Transition appear show={modal13} as={Fragment}>
                <Dialog as="div" open={modal13} onClose={() => setModal13(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="fadein_up_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <DialogPanel
                                className='panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated'

                            >
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal13(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal13(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal13(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal14(true)} type="button" className="btn btn-secondary">
                RotateIn Left
            </button>
            <Transition appear show={modal14} as={Fragment}>
                <Dialog as="div" open={modal14} onClose={() => setModal14(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="rotatein_left_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <DialogPanel
                                className='panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated'
                            >
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal14(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal14(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal14(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal15(true)} type="button" className="btn btn-dark">
                FadeIn Right
            </button>
            <Transition appear show={modal15} as={Fragment}>
                <Dialog as="div" open={modal15} onClose={() => setModal15(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="fadein_right_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <DialogPanel
                                className='panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated'
                            >
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal15(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal15(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal15(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal16(true)} type="button" className="btn btn-primary">
                ZoomIn Up
            </button>
            <Transition appear show={modal16} as={Fragment}>
                <Dialog as="div" open={modal16} onClose={() => setModal16(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="zoomIn_up_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__zoomInUp">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal16(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal16(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal16(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    </div>
</div>

`})})]}),e.jsxs("div",{className:"panel md:col-span-2",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Custom"}),e.jsx("button",{type:"button",onClick:()=>c("code8"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(u,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("p",{className:"mb-4 text-center",children:"More Custom Modals."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>S(!0),className:"btn btn-primary",children:"Standard"}),e.jsx(l,{appear:!0,show:ee,as:t.Fragment,children:e.jsxs(s,{as:"div",open:ee,onClose:()=>S(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"standard_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{className:"panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsx("div",{className:"flex items-center justify-center p-5 text-base font-medium text-[#1f2937] dark:text-white-dark/70",children:e.jsx("span",{className:"flex h-16 w-16 items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-white/10",children:e.jsx(re,{className:"w-7 h-7"})})}),e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"text-center text-sm text-white-dark",children:e.jsx("p",{children:"Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum."})}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{type:"button",onClick:()=>S(!1),className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{type:"button",onClick:()=>S(!1),className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>M(!0),type:"button",className:"btn btn-info",children:"Tabs"}),e.jsx(l,{appear:!0,show:te,as:t.Fragment,children:e.jsxs(s,{as:"div",open:te,onClose:()=>M(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"tabs_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{className:"panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e.jsx("h5",{className:"text-lg font-bold",children:"Tabs"}),e.jsx("button",{onClick:()=>M(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"p-5",children:[e.jsxs(o.Group,{children:[e.jsxs(o.List,{className:"mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]",children:[e.jsx(o,{as:t.Fragment,children:({selected:r})=>e.jsx("button",{type:"button",className:`${r?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""} -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`,children:"Home"})}),e.jsx(o,{as:t.Fragment,children:({selected:r})=>e.jsx("button",{type:"button",className:`${r?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""}-mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`,children:"Profile"})}),e.jsx(o,{as:t.Fragment,children:({selected:r})=>e.jsx("button",{type:"button",className:`${r?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""}-mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`,children:"Contact"})}),e.jsx(o,{className:"pointer-events-none -mb-[1px] block p-3.5 py-2 text-white-light outline-none dark:text-dark",children:"Disabled"})]}),e.jsxs(o.Panels,{children:[e.jsx(o.Panel,{children:e.jsxs("div",{className:"active pt-5 text-sm",children:[e.jsx("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e.jsx("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e.jsx(o.Panel,{children:e.jsx("div",{children:e.jsxs("div",{className:"flex items-start pt-5",children:[e.jsx("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e.jsx("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e.jsx("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e.jsx(o.Panel,{children:e.jsx("div",{className:"pt-5",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e.jsx(o.Panel,{children:"Disabled"})]})]}),e.jsxs("div",{className:"mt-8 flex items-center justify-end",children:[e.jsx("button",{onClick:()=>M(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e.jsx("button",{onClick:()=>M(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>P(!0),className:"btn btn-success",children:"Profile"}),e.jsx(l,{appear:!0,show:ae,as:t.Fragment,children:e.jsxs(s,{as:"div",open:ae,onClose:()=>P(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"profile_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{className:"panel my-8 w-full max-w-[300px] overflow-hidden rounded-lg border-0 bg-secondary p-0 text-black dark:bg-secondary dark:text-white-dark",children:[e.jsx("div",{className:"flex items-center justify-end pt-4 text-white ltr:pr-4 rtl:pl-4 dark:text-white-light",children:e.jsx("button",{onClick:()=>P(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{className:"w-5 h-5"})})}),e.jsxs("div",{className:"p-5",children:[e.jsxs("div",{className:"py-5 text-center text-white dark:text-white-light",children:[e.jsx("div",{className:"mx-auto mb-7 h-20 w-20 overflow-hidden rounded-full",children:e.jsx("img",{src:"/assets/images/profile-16.jpeg",alt:"img",className:"h-full w-full object-cover"})}),e.jsxs("p",{className:"font-semibold",children:["Click on view to access ",e.jsx("br",{}),"your profile."]})]}),e.jsx("div",{className:"flex justify-center gap-4 p-5",children:e.jsx("button",{type:"button",className:"btn dark:btn-dark bg-white text-black",children:"View"})})]})]})})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>q(!0),className:"btn btn-warning",children:"Login"}),e.jsx(l,{appear:!0,show:se,as:t.Fragment,children:e.jsxs(s,{as:"div",open:se,onClose:()=>q(!1),children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"login_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{className:"panel my-8 w-full max-w-sm overflow-hidden rounded-lg border-0 py-1 px-4 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between p-5 text-lg font-semibold dark:text-white",children:[e.jsx("h5",{children:"Login"}),e.jsx("button",{type:"button",onClick:()=>q(!1),className:"text-white-dark hover:text-dark",children:e.jsx(n,{className:"w-5 h-5"})})]}),e.jsx("div",{className:"p-5",children:e.jsxs("form",{children:[e.jsxs("div",{className:"relative mb-4",children:[e.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark",children:e.jsx(oe,{className:"w-5 h-5"})}),e.jsx("input",{type:"email",placeholder:"Email",className:"form-input ltr:pl-10 rtl:pr-10",id:"login_email"})]}),e.jsxs("div",{className:"relative mb-4",children:[e.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark",children:e.jsx(ce,{className:"w-5 h-5"})}),e.jsx("input",{type:"password",placeholder:"Password",className:"form-input ltr:pl-10 rtl:pr-10",id:"login_password"})]}),e.jsx("button",{type:"button",className:"btn btn-primary w-full",children:"Login"})]})}),e.jsx("div",{className:"my-4 text-center text-xs text-white-dark dark:text-white-dark/70",children:"OR"}),e.jsxs("div",{className:"mb-5 flex items-center justify-center gap-3",children:[e.jsxs("button",{type:"button",className:"btn btn-outline-primary flex gap-1",children:[e.jsx(ue,{className:"w-5 h-5 shrink-0"}),e.jsx("span",{children:"Facebook"})]}),e.jsxs("button",{type:"button",className:"btn btn-outline-danger flex gap-1",children:[e.jsx(me,{className:"shrink-0"}),e.jsx("span",{children:"Github"})]})]}),e.jsx("div",{className:"border-t border-[#ebe9f1] p-5 dark:border-white/10",children:e.jsxs("p",{className:"text-center text-sm text-white-dark dark:text-white-dark/70",children:["Looking to",e.jsx("button",{type:"button",className:"text-[#515365] hover:underline ltr:ml-1 rtl:mr-1 dark:text-white-dark",children:"create an account?"})]})})]})})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>z(!0),className:"btn btn-danger",children:"Register"}),e.jsx(l,{appear:!0,show:ie,as:t.Fragment,children:e.jsxs(s,{as:"div",open:ie,onClose:()=>{z(!1)},children:[e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{id:"register_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsx(a,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(i,{className:"panel my-8 w-full max-w-sm overflow-hidden rounded-lg border-0 py-1 px-4 text-black dark:text-white-dark",children:[e.jsxs("div",{className:"flex items-center justify-between p-5 text-lg font-semibold dark:text-white",children:[e.jsx("h5",{children:"Register"}),e.jsx("button",{type:"button",onClick:()=>z(!1),className:"text-white-dark hover:text-dark",children:e.jsx(n,{className:"w-5 h-5"})})]}),e.jsx("div",{className:"p-5",children:e.jsxs("form",{children:[e.jsxs("div",{className:"relative mb-4",children:[e.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark",children:e.jsx(oe,{className:"w-5 h-5"})}),e.jsx("input",{type:"text",placeholder:"Name",className:"form-input ltr:pl-10 rtl:pr-10",id:"name"})]}),e.jsxs("div",{className:"relative mb-4",children:[e.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark",children:e.jsx(we,{})}),e.jsx("input",{type:"email",placeholder:"Email",className:"form-input ltr:pl-10 rtl:pr-10",id:"email"})]}),e.jsxs("div",{className:"relative mb-4",children:[e.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark",children:e.jsx(ce,{className:"w-5 h-5"})}),e.jsx("input",{type:"password",placeholder:"Password",className:"form-input ltr:pl-10 rtl:pr-10",id:"password"})]}),e.jsx("button",{type:"button",className:"btn btn-primary w-full",children:"Submit"})]})}),e.jsx("div",{className:"my-4 text-center text-xs text-white-dark dark:text-white-dark/70",children:"OR"}),e.jsxs("div",{className:"mb-5 flex items-center justify-center gap-3",children:[e.jsxs("button",{type:"button",className:"btn btn-outline-primary flex gap-1",children:[e.jsx(ue,{className:"w-5 h-5 shrink-0"}),e.jsx("span",{children:"Facebook"})]}),e.jsxs("button",{type:"button",className:"btn btn-outline-danger flex gap-1",children:[e.jsx(me,{className:"shrink-0"}),e.jsx("span",{children:"Github"})]})]}),e.jsx("div",{className:"border-t border-[#ebe9f1] p-5 dark:border-white/10",children:e.jsxs("p",{className:"text-center text-sm text-white-dark dark:text-white-dark/70",children:["Already have",e.jsx("button",{type:"button",className:"text-[#515365] hover:underline ltr:ml-1 rtl:mr-1 dark:text-white-dark",children:"Login?"})]})})]})})})})]})})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>I(!0),className:"btn btn-secondary",children:"Slider"}),e.jsx(s,{as:"div",open:xe,onClose:()=>{I(!1)},children:e.jsx("div",{id:"slider_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e.jsx("div",{className:"flex min-h-screen items-start justify-center px-4",children:e.jsxs(i,{className:"animate__animated animate__fadeIn panel my-8 w-full max-w-xl overflow-hidden rounded-lg border-0 py-1 px-4",children:[e.jsxs("div",{className:"flex items-center justify-between py-5 text-lg font-semibold dark:text-white",children:[e.jsx("span",{children:"Slider"}),e.jsx("button",{onClick:()=>I(!1),type:"button",className:"text-white-dark hover:text-dark",children:e.jsx(n,{className:"w-5 h-5"})})]}),e.jsxs(ge,{modules:[Ne,je],navigation:{nextEl:".swiper-button-next1",prevEl:".swiper-button-prev1"},pagination:{clickable:!0},className:"swiper mx-auto mb-5 max-w-3xl",id:"slider1",dir:le.rtlClass,children:[e.jsx("div",{className:"swiper-wrapper",children:be.map((r,U)=>e.jsx(ke,{children:e.jsx("img",{src:`/assets/images/${r}`,className:"max-h-80 w-full object-cover",alt:"img"})},U))}),e.jsx("button",{type:"button",className:"swiper-button-prev1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2",children:e.jsx(de,{className:"w-5 h-5 rtl:-rotate-90 rotate-90"})}),e.jsx("button",{type:"button",className:"swiper-button-next1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1 text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2",children:e.jsx(de,{className:"w-5 h-5 rtl:rotate-90 -rotate-90"})}),e.jsx("div",{className:"swiper-pagination"})]},le.rtlClass==="rtl"?"true":"false")]})})})})]})]})]}),d.includes("code8")&&e.jsx(m,{children:e.jsx("pre",{className:"language-typescript",children:`import { Dialog, Transition,Tab } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

    const [modal17, setModal17] = useState(false);
    const [modal18, setModal18] = useState(false);
    const [modal19, setModal19] = useState(false);
    const [modal20, setModal20] = useState(false);
    const [modal21, setModal21] = useState(false);
    const [modal22, setModal22] = useState(false);

<div className="mb-5">
    <p className="text-center mb-4">More Custom Modals.</p>
    <div className="flex flex-wrap items-center justify-center gap-2">
        {/* standard */}
        <div>
            <button type="button" onClick={() => setModal17(true)} className="btn btn-primary">
                Standard
            </button>
            <Transition appear show={modal17} as={Fragment}>
                <Dialog as="div" open={modal17} onClose={() => setModal17(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="standard_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                    <div className="flex py-2 bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-center">
                                        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#f1f2f3] dark:bg-white/10">
                                            <svg>...</svg>
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <div className="py-5 text-white-dark text-center">
                                            <p>
                                                Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi
                                                consequat auctor turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare
                                                tempor orci id rutrum.
                                            </p>
                                        </div>
                                        <div className="flex justify-end items-center mt-8">
                                            <button type="button" onClick={() => setModal17(false)} className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button type="button" onClick={() => setModal17(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* tabs */}
        <div>
            <button onClick={() => setModal18(true)} type="button" className="btn btn-info">
                Tabs
            </button>
            <Transition appear show={modal18} as={Fragment}>
                <Dialog as="div" open={modal18} onClose={() => setModal18(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="tabs_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Tabs</h5>
                                        <button onClick={() => setModal18(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <Tab.Group>
                                            <Tab.List className="flex flex-wrap mt-3 border-b border-white-light dark:border-[#191e3a]">
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            type="button"
                                                            className={\`\${
                                                                selected
                                                                    ? '!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black !outline-none '
                                                                    : ''
                                                            } p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black\`}
                                                        >
                                                            Home
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            type="button"
                                                            className={\`\${
                                                                selected
                                                                    ? '!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black !outline-none '
                                                                    : ''
                                                            } p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black\`}
                                                        >
                                                            Profile
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            type="button"
                                                            className={\`\${
                                                                selected
                                                                    ? '!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black !outline-none '
                                                                    : ''
                                                            } p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black\`}
                                                        >
                                                            Contact
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab className="p-3.5 py-2 -mb-[1px] block pointer-events-none text-white-light dark:text-dark outline-none">Disabled</Tab>
                                            </Tab.List>
                                            <Tab.Panels>
                                                <Tab.Panel>
                                                    <div className="active pt-5">
                                                        <h4 className="font-semibold text-2xl mb-4">We move your world!</h4>
                                                        <p className="mb-4">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div>
                                                        <div className="flex items-start pt-5">
                                                            <div className="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                                                                <img
                                                                    src="/assets/images/profile-34.jpeg"
                                                                    alt="img"
                                                                    className="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"
                                                                />
                                                            </div>
                                                            <div className="flex-auto">
                                                                <h5 className="text-xl font-medium mb-4">Media heading</h5>
                                                                <p className="text-white-dark">
                                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                                                                    vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                                                                    lacinia congue felis in faucibus.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div className="pt-5">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                        </p>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>Disabled</Tab.Panel>
                                            </Tab.Panels>
                                        </Tab.Group>
                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setModal18(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button onClick={() => setModal18(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* profile */}
        <div>
            <button type="button" onClick={() => setModal19(true)} className="btn btn-success">
                Profile
            </button>
            <Transition appear show={modal19} as={Fragment}>
                <Dialog as="div" open={modal19} onClose={() => setModal19(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0"></div>
                    </TransitionChild>
                    <div id="profile_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="panel border-0 p-0 rounded-lg overflow-hidden max-w-[300px] w-full bg-secondary dark:bg-secondary my-8 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-end pt-4 ltr:pr-4 rtl:pl-4 text-white dark:text-white-light">
                                        <button onClick={() => setModal19(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="py-5 text-white dark:text-white-light text-center">
                                            <div className="rounded-full w-20 h-20 mx-auto mb-7 overflow-hidden">
                                                <img src="/assets/images/profile-16.jpeg" alt="img" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="font-semibold">
                                                Click on view to access <br />
                                                your profile.
                                            </p>
                                        </div>
                                        <div className="flex justify-center gap-4 p-5">
                                            <button type="button" className="btn bg-white text-black dark:btn-dark">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* login */}
        <div>
            <button type="button" onClick={() => setModal20(true)} className="btn btn-warning">
                Login
            </button>
            <Transition appear show={modal20} as={Fragment}>
                <Dialog as="div" open={modal20} onClose={() => setModal20(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="login_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="panel border-0 py-1 px-4 rounded-lg overflow-hidden w-full max-w-sm my-8 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between p-5 font-semibold text-lg dark:text-white">
                                        <h5>Login</h5>
                                        <button type="button" onClick={() => setModal20(false)} className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>

                                    <div className="p-5">
                                        <form>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="email" placeholder="Email" className="form-input ltr:pl-10 rtl:pr-10" id="login_email" />
                                            </div>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="password" placeholder="Password" className="form-input ltr:pl-10 rtl:pr-10" id="login_password" />
                                            </div>
                                            <button type="button" className="btn btn-primary w-full">
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                    <div className="my-4 text-center text-xs text-white-dark dark:text-white-dark/70">OR</div>
                                    <div className="flex items-center justify-center gap-3 mb-5">
                                        <button type="button" className="btn btn-outline-primary flex gap-1">
                                            <svg>...</svg>

                                            <span>Facebook</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-danger flex gap-1">
                                            <svg>...</svg>
                                            <span>Github</span>
                                        </button>
                                    </div>
                                    <div className="p-5 border-t border-[#ebe9f1] dark:border-white/10">
                                        <p className="text-sm text-center text-white-dark dark:text-white-dark/70">
                                            Looking to
                                            <button type="button" className="text-[#515365] hover:underline dark:text-white-dark ltr:ml-1 rtl:mr-1">
                                                create an account?
                                            </button>
                                        </p>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* Register */}
        <div>
            <button type="button" onClick={() => setModal21(true)} className="btn btn-danger">
                Register
            </button>
            <Transition appear show={modal21} as={Fragment}>
                <Dialog
                    as="div"
                    open={modal21}
                    onClose={() => {
                        setModal21(false);
                    }}
                >
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div id="register_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="panel border-0 py-1 px-4 rounded-lg overflow-hidden w-full max-w-sm my-8 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between p-5 font-semibold text-lg dark:text-white">
                                        <h5>Register</h5>
                                        <button type="button" onClick={() => setModal21(false)} className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <form>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="text" placeholder="Name" className="form-input ltr:pl-10 rtl:pr-10" id="name" />
                                            </div>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="email" placeholder="Email" className="form-input ltr:pl-10 rtl:pr-10" id="email" />
                                            </div>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="password" placeholder="Password" className="form-input ltr:pl-10 rtl:pr-10" id="password" />
                                            </div>
                                            <button type="button" className="btn btn-primary w-full">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                    <div className="my-4 text-center text-xs text-white-dark dark:text-white-dark/70">OR</div>
                                    <div className="flex items-center justify-center gap-3 mb-5">
                                        <button type="button" className="btn btn-outline-primary flex gap-1">
                                            <svg>...</svg>
                                            <span>Facebook</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-danger flex gap-1">
                                            <svg>...</svg>
                                            <span>Github</span>
                                        </button>
                                    </div>
                                    <div className="p-5 border-t border-[#ebe9f1] dark:border-white/10">
                                        <p className="text-sm text-center text-white-dark dark:text-white-dark/70">
                                            Already have
                                            <button type="button" className="text-[#515365] hover:underline dark:text-white-dark ltr:ml-1 rtl:mr-1">
                                                Login?
                                            </button>
                                        </p>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* slider */}
        <div>
            <button type="button" onClick={() => setModal22(true)} className="btn btn-secondary">
                Slider
            </button>
            <Dialog
                as="div"
                open={modal22}
                onClose={() => {
                    setModal22(false);
                }}
            >
                <div id="slider_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                    <div className="flex min-h-screen items-start justify-center px-4">
                        <DialogPanel className="animate__animated animate__fadeIn panel my-8 w-full max-w-xl overflow-hidden rounded-lg border-0 py-1 px-4">
                            <div className="flex items-center justify-between py-5 text-lg font-semibold dark:text-white">
                                <span>Slider</span>
                                <button onClick={() => setModal22(false)} type="button" className="text-white-dark hover:text-dark">
                                    <svg>...</svg>
                                </button>
                            </div>
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    nextEl: '.swiper-button-next-ex1',
                                    prevEl: '.swiper-button-prev-ex1',
                                }}
                                observer={true}
                                observeParents={true}
                                pagination={{ clickable: true }}
                                className="swiper mx-auto mb-5 max-w-3xl"
                                id="slider1"
                                dir={themeConfig.rtlClass}
                                key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                            >
                                <div className="swiper-wrapper">
                                    {items.map((item, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <img src={\`/assets/images/\${item}\`} className="max-h-80 w-full object-cover" alt="img" />
                                            </SwiperSlide>
                                        );
                                    })}
                                </div>
                                <button
                                    type="button"
                                    className="swiper-button-prev-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2"
                                >
                                    <svg>...</svg>
                                </button>
                                <button
                                    type="button"
                                    className="swiper-button-next-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1 text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2"
                                >
                                    <svg>...</svg>
                                </button>
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    </div>
</div>`})})]})]})]})]})};export{qe as default};
