import{R as g,v as S,u as T,r as C,s as E,a as R,j as t,L as _,n as D}from"./index-D85Vk71e.js";import{C as b}from"./Highlight-Bt5TEg3j.js";import{S as p}from"./sweetalert2.esm.all-BGf-Fe8G.js";import{I as x}from"./IconCode-Dghq5ZF3.js";const N=[{key:"title",getter:e=>e.getTitle()},{key:"html",getter:e=>e.getHtmlContainer()},{key:"confirmButtonText",getter:e=>e.getConfirmButton()},{key:"denyButtonText",getter:e=>e.getDenyButton()},{key:"cancelButtonText",getter:e=>e.getCancelButton()},{key:"footer",getter:e=>e.getFooter()},{key:"closeButtonHtml",getter:e=>e.getCloseButton()},{key:"iconHtml",getter:e=>e.getIconContent()},{key:"loaderHtml",getter:e=>e.getLoader()}],y=()=>{};function P(e){function a(o){const s={},n={},i=N.map(c=>c.key);return Object.entries(o).forEach(c=>{let[m,d]=c;i.includes(m)&&g.isValidElement(d)?(s[m]=d,n[m]=" "):n[m]=d}),[s,n]}function f(o,s){Object.entries(s).forEach(n=>{let[i,c]=n;const d=N.find(w=>w.key===i).getter(e),r=S(d);r.render(c),o.__roots.push(r)})}function l(o){o.__roots.forEach(s=>{s.unmount()}),o.__roots=[]}return class extends e{static argsToParams(o){if(g.isValidElement(o[0])||g.isValidElement(o[1])){const s={};return["title","html","icon"].forEach((n,i)=>{o[i]!==void 0&&(s[n]=o[i])}),s}else return e.argsToParams(o)}_main(o,s){this.__roots=[],this.__params=Object.assign({},s,o);const[n,i]=a(this.__params),c=i.willOpen||y,m=i.didOpen||y,d=i.didDestroy||y;return super._main(Object.assign({},i,{willOpen:r=>{f(this,n),c(r)},didOpen:r=>{setTimeout(()=>{m(r)})},didDestroy:r=>{d(r),l(this)}}))}update(o){Object.assign(this.__params,o),l(this);const[s,n]=a(this.__params);super.update(n),f(this,s)}}}const A=()=>{const e=T();C.useEffect(()=>{e(E("Notifications"))});const[a,f]=C.useState([]),l=u=>{a.includes(u)?f(j=>j.filter(M=>M!==u)):f([...a,u])},o=R(u=>u.themeConfig.rtlClass)==="rtl",s=P(p),n=()=>{s.fire({title:"Hello, world! This is a toast message.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},i=()=>{s.fire({title:"Example notification text.",toast:!0,position:o?"top-end":"top-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},c=()=>{s.fire({title:"Example notification text.",toast:!0,position:"top",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},m=()=>{s.fire({title:"Example notification text.",toast:!0,position:o?"top-start":"top-end",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},d=()=>{s.fire({title:"Example notification text.",toast:!0,position:o?"bottom-end":"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},r=()=>{s.fire({title:"Example notification text.",toast:!0,position:"bottom",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},w=()=>{s.fire({title:"Example notification text.",toast:!0,position:o?"bottom-start":"bottom-end",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},v=()=>{s.fire({title:"Example notification text.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!1})},k=()=>{s.fire({title:"Example notification text.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:5e3,showCloseButton:!0})},B=()=>{p.fire({toast:!0,position:"bottom-start",text:"Custom callback when action button is clicked.",showCloseButton:!0,showConfirmButton:!1}).then(u=>{p.fire({toast:!0,position:"bottom-start",text:"Thanks for clicking the Dismiss button!",showCloseButton:!0,showConfirmButton:!1})})},h=u=>{p.mixin({toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0,customClass:{popup:`color-${u}`}}).fire({title:"Example notification text."})};return t.jsxs("div",{children:[t.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t.jsx("li",{children:t.jsx(_,{to:"#",className:"text-primary hover:underline",children:"Components"})}),t.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t.jsx("span",{children:"Notifications"})})]}),t.jsxs("div",{className:"pt-5 space-y-8",children:[t.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[t.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:t.jsx(D,{})}),t.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t.jsx("a",{href:"https://www.npmjs.com/package/sweetalert2",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/sweetalert2"})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code1"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(x,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("button",{type:"button",className:"btn btn-primary",onClick:n,children:"Open Toast"})})}),a.includes("code1")&&t.jsx(b,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage = () => {
    MySwal.fire({
        title: 'Hello, world! This is a toast message.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: true,
    });
};
<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-primary" onClick={showMessage}>
            Open Toast
        </button>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel lg:row-span-2",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Position"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code2"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(x,{className:"me-2"}),"Code"]})})]}),t.jsxs("div",{className:"mb-5",children:[t.jsx("h6",{className:"font-semibold text-base dark:text-white-light mb-3 text-center",children:"Top Position"}),t.jsxs("div",{className:"flex items-center justify-center mb-10 gap-2",children:[t.jsx("button",{type:"button",className:"btn btn-success",onClick:i,children:"Top Left"}),t.jsx("button",{type:"button",className:"btn btn-secondary",onClick:c,children:"Top Center"}),t.jsx("button",{type:"button",className:"btn btn-info",onClick:m,children:"Top Right"})]}),t.jsx("h6",{className:"font-semibold text-base dark:text-white-light mb-3 text-center",children:"Bottom Position"}),t.jsxs("div",{className:"flex items-center justify-center gap-2",children:[t.jsx("button",{type:"button",className:"btn btn-dark",onClick:d,children:"Bottom Left"}),t.jsx("button",{type:"button",className:"btn btn-primary",onClick:r,children:"Bottom Center"}),t.jsx("button",{type:"button",className:"btn btn-secondary",onClick:w,children:"Bottom Right"})]})]}),a.includes("code2")&&t.jsx(b,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

    const showMessage1 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'top-end' : 'top-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };
    const showMessage2 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage3 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'top-start' : 'top-end',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage4 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'bottom-end' : 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage5 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage6 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'bottom-start' : 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

<div className="mb-5">
    <h6 className="font-semibold text-base dark:text-white-light mb-3 text-center">Top Position</h6>
    <div className="flex items-center justify-center mb-10 gap-2">
        <button type="button" className="btn btn-success" onClick={showMessage1}>
            Top Left
        </button>
        <button type="button" className="btn btn-secondary" onClick={showMessage2}>
            Top Center
        </button>
        <button type="button" className="btn btn-info" onClick={showMessage3}>
            Top Right
        </button>
    </div>
    <h6 className="font-semibold text-base dark:text-white-light mb-3 text-center">Bottom Position</h6>
    <div className="flex items-center justify-center gap-2">
        <button type="button" className="btn btn-dark" onClick={showMessage4}>
            Bottom Left
        </button>
        <button type="button" className="btn btn-primary" onClick={showMessage5}>
            Bottom Center
        </button>
        <button type="button" className="btn btn-secondary" onClick={showMessage6}>
            Bottom Right
        </button>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"No Action"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code3"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(x,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("button",{type:"button",className:"btn btn-success",onClick:v,children:"No Action"})})}),a.includes("code3")&&t.jsx(b,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage7 = () => {
    MySwal.fire({
        title: 'Example notification text.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: false,
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success" onClick={showMessage7}>
            No Action
        </button>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Click Callback"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code4"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(x,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("button",{type:"button",className:"btn btn-info",onClick:B,children:"Click Callback"})})}),a.includes("code4")&&t.jsx(b,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const clickCallable = () => {
    Swal.fire({
        toast: true,
        position: 'bottom-start',
        text: 'Custom callback when action button is clicked.',
        showCloseButton: true,
        showConfirmButton: false,
    }).then((result) => {
        Swal.fire({
            toast: true,
            position: 'bottom-start',
            text: 'Thanks for clicking the Dismiss button!',
            showCloseButton: true,
            showConfirmButton: false,
        });
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={clickCallable}>
            Click Callback
        </button>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Duration"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code5"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(x,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("button",{type:"button",className:"btn btn-dark",onClick:k,children:"Duration"})})}),a.includes("code5")&&t.jsx(b,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage8 = () => {
    MySwal.fire({
        title: 'Example notification text.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 5000,
        showCloseButton: true,
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-dark" onClick={showMessage8}>
            Duration
        </button>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel lg:col-span-2",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Background Color"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code6"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsx(x,{className:"me-2"}),"Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-1 sm:flex items-center justify-center gap-2 colored-toast",children:[t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>h("primary"),children:"Primary"}),t.jsx("div",{id:"primary-toast"})]}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>h("secondary"),children:"Secondary"}),t.jsx("div",{id:"secondary-toast"})]}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-success",onClick:()=>h("success"),children:"Success"}),t.jsx("div",{id:"success-toast"})]}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-danger",onClick:()=>h("danger"),children:"Danger"}),t.jsx("div",{id:"danger-toast"})]}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-warning",onClick:()=>h("warning"),children:"Warning"}),t.jsx("div",{id:"warning-toast"})]}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-info",onClick:()=>h("info"),children:"Info"}),t.jsx("div",{id:"info-toast"})]})]})}),a.includes("code6")&&t.jsx(b,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const coloredToast = (color: any) => {
    const toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: true,
        customClass: {
            popup: \`color-\${color}\`,
        },
    });
    toast.fire({
        title: 'Example notification text.',
    });
};

<div className="mb-5">
    <div className="grid grid-cols-2 sm:grid-cols-1 sm:flex items-center justify-center gap-2 colored-toast">
        <div>
            <button type="button" className="btn btn-primary" onClick={() => coloredToast('primary')}>
                Primary
            </button>
            <div id="primary-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-secondary" onClick={() => coloredToast('secondary')}>
                Secondary
            </button>
            <div id="secondary-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-success" onClick={() => coloredToast('success')}>
                Success
            </button>
            <div id="success-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-danger" onClick={() => coloredToast('danger')}>
                Danger
            </button>
            <div id="danger-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-warning" onClick={() => coloredToast('warning')}>
                Warning
            </button>
            <div id="warning-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-info" onClick={() => coloredToast('info')}>
                Info
            </button>
            <div id="info-toast"></div>
        </div>
    </div>
</div>`})})]})]})]})]})};export{A as default};
