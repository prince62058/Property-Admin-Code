import{u as o,r as d,s as x,j as e,L as p}from"./index-D85Vk71e.js";import{C as a}from"./Highlight-Bt5TEg3j.js";import{I as t}from"./IconCode-Dghq5ZF3.js";const N=()=>{const n=o();d.useEffect(()=>{n(x("Layouts"))});const[s,i]=d.useState(["code1,code2,code3,code4,code5,code6,code7,code8"]),l=r=>{s.includes(r)?i(m=>m.filter(c=>c!==r)):i([...s,r])};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(p,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Layouts"})})]}),e.jsxs("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",id:"stack_form",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Stack Forms"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code1"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(t,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("input",{type:"email",placeholder:"Enter Email",className:"form-input"}),e.jsx("span",{className:"text-white-dark text-[11px] inline-block mt-1",children:"We'll never share your email with anyone else."})]}),e.jsx("div",{children:e.jsx("input",{type:"password",placeholder:"Enter Password",className:"form-input"})}),e.jsx("div",{children:e.jsxs("label",{className:"inline-flex items-center mt-1 cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox"}),e.jsx("span",{className:"text-white-dark",children:"Subscribe to weekly newsletter"})]})}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),s.includes("code1")&&e.jsx(a,{children:e.jsx("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <input type="email" placeholder="Enter Email" className="form-input" />
        <span className="text-white-dark text-[11px] inline-block mt-1">We'll never share your email with anyone else.</span>
    </div>
    <div>
        <input type="password" placeholder="Enter Password" className="form-input" />
    </div>
    <div>
        <label className="inline-flex items-center mt-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Subscribe to weekly newsletter</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),e.jsxs("div",{className:"panel",id:"horizontal_form",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Horizontal form"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code2"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(t,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",children:[e.jsxs("div",{className:"flex sm:flex-row flex-col",children:[e.jsx("label",{htmlFor:"horizontalEmail",className:"mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Email"}),e.jsx("input",{id:"horizontalEmail",type:"email",placeholder:"Enter Email",className:"form-input flex-1"})]}),e.jsxs("div",{className:"flex sm:flex-row flex-col",children:[e.jsx("label",{htmlFor:"horizontalPassword",className:"mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Password"}),e.jsx("input",{id:"horizontalPassword",type:"password",placeholder:"Enter Password",className:"form-input flex-1"})]}),e.jsxs("div",{className:"flex sm:flex-row flex-col",children:[e.jsx("label",{className:"sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Choose Segements"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"mb-2",children:e.jsxs("label",{className:"inline-flex mt-1 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"segements",className:"form-radio"}),e.jsx("span",{className:"text-white-dark",children:"Segements 1"})]})}),e.jsx("div",{className:"mb-2",children:e.jsxs("label",{className:"inline-flex mt-1 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"segements",className:"form-radio"}),e.jsx("span",{className:"text-white-dark",children:"Segements 2"})]})}),e.jsx("div",{children:e.jsxs("label",{className:"inline-flex mt-1",children:[e.jsx("input",{type:"radio",name:"segements",className:"form-radio",disabled:!0}),e.jsx("span",{className:"text-white-dark",children:"Segements 3 ( disabled )"})]})})]})]}),e.jsxs("div",{className:"flex sm:flex-row flex-col",children:[e.jsx("label",{className:"font-semibold sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Apply"}),e.jsxs("label",{className:"inline-flex mb-0 cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox"}),e.jsx("span",{className:"text-white-dark",children:"Terms Conditions"})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),s.includes("code2")&&e.jsx(a,{children:e.jsx("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div className="flex sm:flex-row flex-col">
        <label htmlFor="horizontalEmail" className="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">
            Email
        </label>
        <input id="horizontalEmail" type="email" placeholder="Enter Email" className="form-input flex-1" />
    </div>
    <div className="flex sm:flex-row flex-col">
        <label htmlFor="horizontalPassword" className="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">
            Password
        </label>
        <input id="horizontalPassword" type="password" placeholder="Enter Password" className="form-input flex-1" />
    </div>
    <div className="flex sm:flex-row flex-col">
        <label className="sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Choose Segements</label>
        <div className="flex-1">
            <div className="mb-2">
                <label className="inline-flex mt-1 cursor-pointer">
                    <input type="radio" name="segements" className="form-radio" />
                    <span className="text-white-dark">Segements 1</span>
                </label>
            </div>
            <div className="mb-2">
                <label className="inline-flex mt-1 cursor-pointer">
                    <input type="radio" name="segements" className="form-radio" />
                    <span className="text-white-dark">Segements 2</span>
                </label>
            </div>
            <div>
                <label className="inline-flex mt-1">
                    <input type="radio" name="segements" className="form-radio" disabled />
                    <span className="text-white-dark">Segements 3 ( disabled )</span>
                </label>
            </div>
        </div>
    </div>
    <div className="flex sm:flex-row flex-col">
        <label className="font-semibold sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Apply</label>
        <label className="inline-flex mb-0 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Terms Conditions</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),e.jsxs("div",{className:"panel",id:"registration_form",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Registration Forms"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code3"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(t,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",children:[e.jsx("div",{children:e.jsx("input",{type:"email",placeholder:"Enter Email Address *",className:"form-input"})}),e.jsx("div",{children:e.jsx("input",{type:"password",placeholder:"Enter Password *",className:"form-input"})}),e.jsx("div",{children:e.jsx("input",{type:"password",placeholder:"Enter Confirm Password *",className:"form-input"})}),e.jsx("div",{className:"!mt-2",children:e.jsx("span",{className:"text-white-dark text-[11px] inline-block",children:"*Required Fields"})}),e.jsx("div",{children:e.jsxs("label",{className:"inline-flex cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox"}),e.jsx("span",{className:"text-white-dark",children:"Subscribe to weekly newsletter"})]})}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),s.includes("code3")&&e.jsx(a,{children:e.jsx("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <input type="email" placeholder="Enter Email Address *" className="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Password *" className="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Confirm Password *" className="form-input" />
    </div>
    <div className="!mt-2">
        <span className="text-white-dark text-[11px] inline-block">*Required Fields</span>
    </div>
    <div>
        <label className="inline-flex cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Subscribe to weekly newsletter</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),e.jsxs("div",{className:"panel",id:"login_form",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Login Forms"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code4"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(t,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",children:[e.jsx("div",{children:e.jsx("input",{type:"text",placeholder:"Enter Full Name *",className:"form-input"})}),e.jsx("div",{children:e.jsx("input",{type:"email",placeholder:"Enter Email Address *",className:"form-input"})}),e.jsx("div",{children:e.jsx("input",{type:"password",placeholder:"Enter Password *",className:"form-input"})}),e.jsx("div",{className:"!mt-2",children:e.jsx("span",{className:"text-white-dark text-[11px] inline-block",children:"*Required Fields"})}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),s.includes("code4")&&e.jsx(a,{children:e.jsx("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <input type="text" placeholder="Enter Full Name *" className="form-input" />
    </div>
    <div>
        <input type="email" placeholder="Enter Email Address *" className="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Password *" className="form-input" />
    </div>
    <div className="!mt-2">
        <span className="text-white-dark text-[11px] inline-block">*Required Fields</span>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),e.jsxs("div",{className:"panel",id:"forms_grid",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Forms Grid"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code5"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(t,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"gridEmail",children:"Email"}),e.jsx("input",{id:"gridEmail",type:"email",placeholder:"Enter Email",className:"form-input"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"gridPassword",children:"Password"}),e.jsx("input",{id:"gridPassword",type:"Password",placeholder:"Enter Password",className:"form-input"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"gridAddress1",children:"Address"}),e.jsx("input",{id:"gridAddress1",type:"text",placeholder:"Enter Address",defaultValue:"1234 Main St",className:"form-input"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"gridAddress2",children:"Address2"}),e.jsx("input",{id:"gridAddress2",type:"text",placeholder:"Enter Address2",defaultValue:"Apartment, studio, or floor",className:"form-input"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{htmlFor:"gridCity",children:"City"}),e.jsx("input",{id:"gridCity",type:"text",placeholder:"Enter City",className:"form-input"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"gridState",children:"State"}),e.jsxs("select",{id:"gridState",className:"form-select text-white-dark",children:[e.jsx("option",{children:"Choose..."}),e.jsx("option",{children:"..."})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"gridZip",children:"Zip"}),e.jsx("input",{id:"gridZip",type:"text",placeholder:"Enter Zip",className:"form-input"})]})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-center mt-1 cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox"}),e.jsx("span",{className:"text-white-dark",children:"Check me out"})]})}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),s.includes("code5")&&e.jsx(a,{children:e.jsx("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
            <label htmlFor="gridEmail">Email</label>
            <input id="gridEmail" type="email" placeholder="Enter Email" className="form-input" />
        </div>
        <div>
            <label htmlFor="gridPassword">Password</label>
            <input id="gridPassword" type="Password" placeholder="Enter Password" className="form-input" />
        </div>
    </div>
    <div>
        <label htmlFor="gridAddress1">Address</label>
        <input id="gridAddress1" type="text" placeholder="Enter Address" defaultValue="1234 Main St" className="form-input" />
    </div>
    <div>
        <label htmlFor="gridAddress2">Address2</label>
        <input id="gridAddress2" type="text" placeholder="Enter Address2" defaultValue="Apartment, studio, or floor" className="form-input" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="md:col-span-2">
            <label htmlFor="gridCity">City</label>
            <input id="gridCity" type="text" placeholder="Enter City" className="form-input" />
        </div>
        <div>
            <label htmlFor="gridState">State</label>
            <select id="gridState" className="form-select text-white-dark">
                <option>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div>
            <label htmlFor="gridZip">Zip</label>
            <input id="gridZip" type="text" placeholder="Enter Zip" className="form-input" />
        </div>
    </div>
    <div>
        <label className="flex items-center mt-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Check me out</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),e.jsxs("div",{className:"panel lg:col-span-2",id:"inline_form",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Inline Forms"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code6"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(t,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("form",{children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto",children:[e.jsx("input",{type:"email",placeholder:"Jane Doe",className:"form-input flex-1"}),e.jsxs("div",{className:"flex flex-1",children:[e.jsx("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e.jsx("input",{type:"text",placeholder:"Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox"}),e.jsx("span",{className:"text-white-dark",children:"Remember me"})]})}),e.jsx("button",{type:"submit",className:"btn btn-primary py-2.5",children:"Submit"})]})})}),s.includes("code6")&&e.jsx(a,{children:e.jsx("pre",{className:"language-xml",children:`<form>
    <div className="flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto">
        <input type="email" placeholder="Jane Doe" className="form-input flex-1" />
        <div className="flex flex-1">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
        <div>
            <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-white-dark">Remember me</span>
            </label>
        </div>
        <button type="submit" className="btn btn-primary py-2.5">
            Submit
        </button>
    </div>
</form>`})})]}),e.jsxs("div",{className:"panel lg:col-span-2",id:"auto_sizing",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Auto-sizing"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code7"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(t,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("form",{children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto",children:[e.jsx("input",{type:"email",placeholder:"Jane Doe",className:"form-input flex-1"}),e.jsxs("div",{className:"flex flex-1",children:[e.jsx("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e.jsx("input",{type:"text",placeholder:"Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox"}),e.jsx("span",{className:"text-white-dark",children:"Remember me"})]})}),e.jsx("button",{type:"submit",className:"btn btn-primary py-2.5",children:"Submit"})]})})}),s.includes("code7")&&e.jsx(a,{children:e.jsx("pre",{className:"language-xml",children:`<form>
    <div className="flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto">
        <input type="email" placeholder="Jane Doe" className="form-input flex-1" />
        <div className="flex flex-1">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
        <div>
            <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-white-dark">Remember me</span>
            </label>
        </div>
        <button type="submit" className="btn btn-primary py-2.5">
            Submit
        </button>
    </div>
</form>`})})]}),e.jsxs("div",{className:"panel lg:row-start-3 lg:col-start-2",id:"actions_buttons",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Actions Buttons"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code8"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(t,{className:"me-2"}),"Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"actionName",children:"Full Name:"}),e.jsx("input",{id:"actionName",type:"text",placeholder:"Enter Full Name",className:"form-input"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"actionEmail",children:"Email:"}),e.jsxs("div",{className:"flex flex-1",children:[e.jsx("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e.jsx("input",{id:"actionEmail",type:"email",placeholder:"",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"actionWeb",children:"Website:"}),e.jsx("input",{id:"actionWeb",type:"text",placeholder:"https://",className:"form-input"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"actionPassword",children:"Password:"}),e.jsx("input",{id:"actionPassword",type:"password",placeholder:"Enter Password",className:"form-input"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"actionCpass",children:"Confirm Password:"}),e.jsx("input",{id:"actionCpass",type:"password",placeholder:"Enter Confirm Password",className:"form-input"})]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),s.includes("code8")&&e.jsx(a,{children:e.jsx("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <label htmlFor="actionName">Full Name:</label>
        <input id="actionName" type="text" placeholder="Enter Full Name" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionEmail">Email:</label>
        <div className="flex flex-1">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input id="actionEmail" type="email" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div>
        <label htmlFor="actionWeb">Website:</label>
        <input id="actionWeb" type="text" placeholder="https://" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionPassword">Password:</label>
        <input id="actionPassword" type="password" placeholder="Enter Password" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionCpass">Confirm Password:</label>
        <input id="actionCpass" type="password" placeholder="Enter Confirm Password" className="form-input" />
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]})]})]})};export{N as default};
