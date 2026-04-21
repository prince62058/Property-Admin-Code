import{u as v,r as p,s as j,j as e,L as f,N}from"./index-0xdiYbwi.js";import{C as s}from"./Highlight-CHDirOGe.js";import{S as t}from"./react-select.esm-Mo7fPNod.js";import{I as i}from"./IconCode-BKl6R_QZ.js";import"./emotion-serialize.esm-BrulUUwL.js";import"./hoist-non-react-statics.cjs-DQogQWOa.js";const O=()=>{const u=v();p.useEffect(()=>{u(j("Select2"))});const[l,o]=p.useState([]),a=r=>{l.includes(r)?o(x=>x.filter(g=>g!==r)):o([...l,r])},c=[{value:"orange",label:"Orange"},{value:"white",label:"White"},{value:"purple",label:"Purple"}],n=[{value:"group1",label:"Group 1",isDisabled:"option--is-disabled"},{value:"orange",label:"Orange"},{value:"white",label:"White"},{value:"purple",label:"Purple"},{value:"group2",label:"Group 2",isDisabled:"option--is-disabled"},{value:"yellow",label:"Yellow"},{value:"green",label:"Green"},{value:"red",label:"Red"},{value:"group3",label:"Group 3",isDisabled:"option--is-disabled"},{value:"aqua",label:"Aqua"},{value:"black",label:"Black"},{value:"blue",label:"Blue"}],d=[{value:"orange",label:"Orange"},{value:"white",label:"White",isDisabled:"option--is-disabled"},{value:"purple",label:"Purple"}],h=[{value:"orange",label:"Orange"},{value:"white",label:"White"},{value:"purple",label:"Purple"}],m=[{value:"orange",label:"Orange"},{value:"white",label:"White"},{value:"purple",label:"Purple"}],b=[{value:"orange",label:"Orange"},{value:"white",label:"White"},{value:"purple",label:"Purple"}];return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(f,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Select2"})})]}),e.jsxs("div",{className:"pt-5 space-y-8",children:[e.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e.jsx(N,{})}),e.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e.jsx("a",{href:"https://www.npmjs.com/package/react-select",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-select"})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6 custom-select",children:[e.jsxs("div",{className:"panel",id:"basic",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code1"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(i,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(t,{defaultValue:c[0],options:c,isSearchable:!1})}),l.includes("code1")&&e.jsx(s,{children:e.jsx("pre",{className:"language-typescript",children:`import Select from 'react-select';

const options = [
    { value: 'orange', label: 'Orange' },
    { value: 'white', label: 'White' },
    { value: 'purple', label: 'Purple' },
];

<Select defaultValue={options[0]} options={options} isSearchable={false} />`})})]}),e.jsxs("div",{className:"panel",id:"nested",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Nested"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code2"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(i,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(t,{defaultValue:n[1],options:n,isSearchable:!1})}),l.includes("code2")&&e.jsx(s,{children:e.jsx("pre",{className:"language-typescript",children:`import Select from 'react-select';

const options1 = [
    { value: 'group1', label: 'Group 1', isDisabled: 'option--is-disabled' },
    { value: 'orange', label: 'Orange' },
    { value: 'white', label: 'White' },
    { value: 'purple', label: 'Purple' },
    { value: 'group2', label: 'Group 2', isDisabled: 'option--is-disabled' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'red', label: 'Red' },
    { value: 'group3', label: 'Group 3', isDisabled: 'option--is-disabled' },
    { value: 'aqua', label: 'Aqua' },
    { value: 'black', label: 'Black' },
    { value: 'blue', label: 'Blue' },
];

<Select defaultValue={options1[1]} options={options1} isSearchable={false}/>`})})]}),e.jsxs("div",{className:"panel",id:"disabling_options",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Disabling options"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code3"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(i,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(t,{defaultValue:d[0],options:d,isSearchable:!1})}),l.includes("code3")&&e.jsx(s,{children:e.jsx("pre",{className:"language-typescript",children:`import Select from 'react-select';

const options2 = [
    { value: 'orange', label: 'Orange' },
    { value: 'white', label: 'White', isDisabled: 'option--is-disabled' },
    { value: 'purple', label: 'Purple' },
];

<Select defaultValue={options2[0]} options={options2} isSearchable={false}/>`})})]}),e.jsxs("div",{className:"panel",id:"tagging",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Searchable"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code5"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(i,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(t,{placeholder:"Select an option",options:m})}),l.includes("code5")&&e.jsx(s,{children:e.jsx("pre",{className:"language-typescript",children:`import Select from 'react-select';

const options3 = [
    { value: 'orange', label: 'Orange' },
    { value: 'white', label: 'White' },
    { value: 'purple', label: 'Purple' },
];

<Select placeholder="Select an option" options={options4} />`})})]}),e.jsxs("div",{className:"panel",id:"placeholder",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Placeholder"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code4"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(i,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(t,{placeholder:"Choose...",options:h,isSearchable:!1})}),l.includes("code4")&&e.jsx(s,{children:e.jsx("pre",{className:"language-typescript",children:`import Select from 'react-select';

const options4 = [
    { value: 'orange', label: 'Orange' },
    { value: 'white', label: 'White' },
    { value: 'purple', label: 'Purple' },
];

<Select placeholder="Choose..." options={options3} isSearchable={false}/>`})})]}),e.jsxs("div",{className:"panel",id:"limit_tagging",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Multiple select"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code6"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(i,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(t,{placeholder:"Select an option",options:b,isMulti:!0,isSearchable:!1})}),l.includes("code6")&&e.jsx(s,{children:e.jsx("pre",{className:"language-typescript",children:`import Select from 'react-select';

const options5 = [
    { value: 'orange', label: 'Orange' },
    { value: 'white', label: 'White' },
    { value: 'purple', label: 'Purple' },
];

<Select placeholder="Select an option" options={options5} isMulti isSearchable={false}/>`})})]})]})]})]})};export{O as default};
