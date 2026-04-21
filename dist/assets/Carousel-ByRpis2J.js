import{u as W,r as q,s as X,a as Y,j as e,L as Z,N as ee,d as u}from"./index-0xdiYbwi.js";import{g as A,S as N,N as L,P as j,a as x}from"./pagination-icGL65L9.js";import{C as S}from"./Highlight-CHDirOGe.js";import{I as C}from"./IconCode-BKl6R_QZ.js";function H(T){let{swiper:t,extendParams:l,on:a,emit:n,params:o}=T;t.autoplay={running:!1,paused:!1,timeLeft:0},l({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,i,y=o&&o.autoplay?o.autoplay.delay:3e3,k=o&&o.autoplay?o.autoplay.delay:3e3,p,f=new Date().getTime(),P,E,h,B,z,c,D;function M(r){!t||t.destroyed||!t.wrapperEl||r.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",M),!(D||r.detail&&r.detail.bySwiperTouchMove)&&g())}const O=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?P=!0:P&&(k=p,P=!1);const r=t.autoplay.paused?p:f+k-new Date().getTime();t.autoplay.timeLeft=r,n("autoplayTimeLeft",r,r/y),i=requestAnimationFrame(()=>{O()})},G=()=>{let r;return t.virtual&&t.params.virtual.enabled?r=t.slides.filter(m=>m.classList.contains("swiper-slide-active"))[0]:r=t.slides[t.activeIndex],r?parseInt(r.getAttribute("data-swiper-autoplay"),10):void 0},I=r=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(i),O();let d=typeof r>"u"?t.params.autoplay.delay:r;y=t.params.autoplay.delay,k=t.params.autoplay.delay;const m=G();!Number.isNaN(m)&&m>0&&typeof r>"u"&&(d=m,y=m,k=m),p=d;const w=t.params.speed,_=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(w,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,w,!0,!0),n("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(w,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,w,!0,!0),n("autoplay")),t.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{I()})))};return d>0?(clearTimeout(s),s=setTimeout(()=>{_()},d)):requestAnimationFrame(()=>{_()}),d},V=()=>{f=new Date().getTime(),t.autoplay.running=!0,I(),n("autoplayStart")},v=()=>{t.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(i),n("autoplayStop")},b=(r,d)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(s),r||(c=!0);const m=()=>{n("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",M):g()};if(t.autoplay.paused=!0,d){z&&(p=t.params.autoplay.delay),z=!1,m();return}p=(p||t.params.autoplay.delay)-(new Date().getTime()-f),!(t.isEnd&&p<0&&!t.params.loop)&&(p<0&&(p=0),m())},g=()=>{t.isEnd&&p<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(f=new Date().getTime(),c?(c=!1,I(p)):I(),t.autoplay.paused=!1,n("autoplayResume"))},$=()=>{if(t.destroyed||!t.autoplay.running)return;const r=A();r.visibilityState==="hidden"&&(c=!0,b(!0)),r.visibilityState==="visible"&&g()},F=r=>{r.pointerType==="mouse"&&(c=!0,D=!0,!(t.animating||t.autoplay.paused)&&b(!0))},R=r=>{r.pointerType==="mouse"&&(D=!1,t.autoplay.paused&&g())},J=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",F),t.el.addEventListener("pointerleave",R))},K=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",F),t.el.removeEventListener("pointerleave",R))},Q=()=>{A().addEventListener("visibilitychange",$)},U=()=>{A().removeEventListener("visibilitychange",$)};a("init",()=>{t.params.autoplay.enabled&&(J(),Q(),V())}),a("destroy",()=>{K(),U(),t.autoplay.running&&v()}),a("_freeModeStaticRelease",()=>{(h||c)&&g()}),a("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?v():b(!0,!0)}),a("beforeTransitionStart",(r,d,m)=>{t.destroyed||!t.autoplay.running||(m||!t.params.autoplay.disableOnInteraction?b(!0,!0):v())}),a("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){v();return}E=!0,h=!1,c=!1,B=setTimeout(()=>{c=!0,h=!0,b(!0)},200)}}),a("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!E)){if(clearTimeout(B),clearTimeout(s),t.params.autoplay.disableOnInteraction){h=!1,E=!1;return}h&&t.params.cssMode&&g(),h=!1,E=!1}}),a("slideChange",()=>{t.destroyed||!t.autoplay.running||(z=!0)}),Object.assign(t.autoplay,{start:V,stop:v,pause:b,resume:g})}const ie=()=>{const T=W();q.useEffect(()=>{T(X("Carousel"))});const t=["carousel1.jpeg","carousel2.jpeg","carousel3.jpeg"],l=Y(s=>s.themeConfig),[a,n]=q.useState([]),o=s=>{a.includes(s)?n(i=>i.filter(y=>y!==s)):n([...a,s])};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(Z,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Carousel"})})]}),e.jsxs("div",{className:"pt-5 space-y-8",children:[e.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e.jsx(ee,{})}),e.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e.jsx("a",{href:"https://swiperjs.com/react",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://swiperjs.com/react"})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e.jsx("button",{onClick:()=>o("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(C,{className:"me-2"}),"Code"]})})]}),e.jsxs(N,{modules:[L,j],navigation:{nextEl:".swiper-button-next-ex1",prevEl:".swiper-button-prev-ex1"},pagination:{clickable:!0},className:"swiper max-w-3xl mx-auto mb-5",id:"slider1",dir:l.rtlClass,children:[e.jsx("div",{className:"swiper-wrapper",children:t.map((s,i)=>e.jsx(x,{children:e.jsx("img",{src:`/assets/images/${s}`,className:"w-full max-h-80 object-cover",alt:"itemImage"})},i))}),e.jsx("button",{className:"swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx(u,{className:"w-5 h-5 rtl:-rotate-90 rotate-90"})}),e.jsx("button",{className:"swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx(u,{className:"w-5 h-5 rtl:rotate-90 -rotate-90"})})]},l.rtlClass==="rtl"?"true":"false"),a.includes("code1")&&e.jsx(S,{children:e.jsx("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

<Swiper
    modules={[Navigation, Pagination]}
    navigation={{ nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' }}
    pagination={{ clickable: true }}
    className="swiper max-w-3xl mx-auto mb-5"
    id="slider1"
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</Swiper>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Autopaly"}),e.jsx("button",{onClick:()=>o("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(C,{className:"me-2"}),"Code"]})})]}),e.jsxs(N,{modules:[L,H,j],navigation:{nextEl:".swiper-button-next-ex2",prevEl:".swiper-button-prev-ex2"},pagination:{clickable:!0},autoplay:{delay:2e3},className:"swiper max-w-3xl mx-auto mb-5",id:"slider2",dir:l.rtlClass,children:[e.jsx("div",{className:"swiper-wrapper",children:t.map((s,i)=>e.jsxs(x,{children:[e.jsx("img",{src:`/assets/images/${s}`,className:"w-full max-h-80 object-cover",alt:"itemImage"}),e.jsxs("div",{className:"absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12",children:[e.jsx("div",{className:"sm:text-3xl text-base font-bold",children:"This is blog Image"}),e.jsx("div",{className:"sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."}),e.jsx("button",{type:"button",className:"mt-4 btn btn-primary",children:"Learn more"})]})]},i))}),e.jsx("button",{className:"swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx(u,{className:"w-5 h-5 rtl:-rotate-90 rotate-90"})}),e.jsx("button",{className:"swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx(u,{className:"w-5 h-5 rtl:rotate-90 -rotate-90"})})]},l.rtlClass==="rtl"?"true":"false"),a.includes("code2")&&e.jsx(S,{children:e.jsx("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

<Swiper
    modules={[Navigation, Autoplay, Pagination]}
    navigation={{ nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' }}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000 }}
    className="swiper max-w-3xl mx-auto mb-5"
    id="slider2"
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                    <div className="absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12">
                        <div className="sm:text-3xl text-base font-bold">This is blog Image</div>
                        <div className="sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                        <button type="button" className="mt-4 btn btn-primary">
                            Learn more
                        </button>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</Swiper>`})})]}),e.jsxs("div",{className:"panel relative",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Vertical"}),e.jsx("button",{onClick:()=>o("code3"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(C,{className:"me-2"}),"Code"]})})]}),e.jsx(N,{modules:[j,H],pagination:{clickable:!0},autoplay:{delay:2e3},direction:"vertical",className:"max-w-3xl mx-auto mb-5",id:"slider3",dir:l.rtlClass,children:e.jsx("div",{className:"swiper-wrapper",children:t.map((s,i)=>e.jsxs(x,{children:[e.jsx("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImage"}),e.jsx("div",{className:"absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center",children:e.jsx("div",{className:"sm:text-xl text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})})]},i))})},l.rtlClass==="rtl"?"true":"false"),a.includes("code3")&&e.jsx(S,{children:e.jsx("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

<Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 2000 }} direction="vertical" className="max-w-3xl mx-auto mb-5" id="slider3">
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImage" />
                    <div className="absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center">
                        <div className="sm:text-xl text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
</Swiper>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Loop"}),e.jsx("button",{onClick:()=>o("code4"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(C,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"swiper max-w-3xl mx-auto mb-5",id:"slider4",children:[e.jsx("div",{className:"swiper-wrapper",children:e.jsxs(N,{modules:[L,j],slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0,type:"fraction"},navigation:{nextEl:".swiper-button-next-ex4",prevEl:".swiper-button-prev-ex4"},dir:l.rtlClass,children:[e.jsxs(x,{children:[e.jsx("img",{src:"/assets/images/carousel1.jpeg",className:"w-full",alt:"slide1"}),e.jsxs("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e.jsx("div",{className:"text-3xl font-bold",children:"Slide 1"}),e.jsx("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]}),e.jsxs(x,{children:[e.jsx("img",{src:"/assets/images/carousel2.jpeg",className:"w-full",alt:"slide2"}),e.jsxs("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e.jsx("div",{className:"text-3xl font-bold",children:"Slide 2"}),e.jsx("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]}),e.jsxs(x,{children:[e.jsx("img",{src:"/assets/images/carousel3.jpeg",className:"w-full",alt:"slide3"}),e.jsxs("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e.jsx("div",{className:"text-3xl font-bold",children:"Slide 3"}),e.jsx("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]})]},l.rtlClass==="rtl"?"true":"false")}),e.jsx("button",{className:"swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx(u,{className:"w-5 h-5 rtl:-rotate-90 rotate-90"})}),e.jsx("button",{className:"swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx(u,{className:"w-5 h-5 rtl:rotate-90 -rotate-90"})})]}),a.includes("code4")&&e.jsx(S,{children:e.jsx("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

<div className="swiper max-w-3xl mx-auto mb-5" id="slider4">
    <div className="swiper-wrapper">
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
                type: 'fraction',
            }}
            navigation={{
                nextEl: '.swiper-button-next-ex4',
                prevEl: '.swiper-button-prev-ex4',
            }}
            dir={themeConfig.rtlClass}
            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
        >
            <SwiperSlide>
                <img src="/assets/images/carousel1.jpeg" className="w-full" alt="slide1" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 1</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/carousel2.jpeg" className="w-full" alt="slide2" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 2</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/carousel3.jpeg" className="w-full" alt="slide3" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 3</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <button className="swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel lg:col-span-2",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Multiple Slides"}),e.jsx("button",{onClick:()=>o("code5"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsx(C,{className:"me-2"}),"Code"]})})]}),e.jsxs("div",{className:"swiper",id:"slider5",children:[e.jsx("div",{className:"swiper-wrapper",children:e.jsxs(N,{modules:[L,j],navigation:{nextEl:".swiper-button-next-ex5",prevEl:".swiper-button-prev-ex5"},pagination:{clickable:!0},breakpoints:{1024:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:40},320:{slidesPerView:1,spaceBetween:20}},dir:l.rtlClass,children:[t.map((s,i)=>e.jsx(x,{children:e.jsx("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImg"})},i)),t.map((s,i)=>e.jsx(x,{children:e.jsx("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImg"})},i))]},l.rtlClass==="rtl"?"true":"false")}),e.jsx("button",{className:"swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2",children:e.jsx(u,{className:"w-5 h-5 rtl:-rotate-90 rotate-90"})}),e.jsx("button",{className:"swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2",children:e.jsx(u,{className:"w-5 h-5 rtl:rotate-90 -rotate-90"})})]}),a.includes("code5")&&e.jsx(S,{children:e.jsx("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

<div className="swiper" id="slider5">
    <div className="swiper-wrapper">
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
                nextEl: '.swiper-button-next-ex5',
                prevEl: '.swiper-button-prev-ex5',
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
            }}
            dir={themeConfig.rtlClass}
            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
        >
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                    </SwiperSlide>
                );
            })}
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
    <button className="swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
        <svg>...</svg>
    </button>
</div>`})})]})]})]})]})};export{ie as default};
