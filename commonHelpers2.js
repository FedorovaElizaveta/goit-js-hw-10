import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",n);function n(o){o.preventDefault();const t=Number(s.elements.delay.value),r=s.elements.state;let m;r.forEach(e=>{e.checked&&(m=e.value)}),new Promise((e,l)=>{setTimeout(()=>{m==="fulfilled"?e():l()},t)}).then(()=>{i.success({message:`✅ Fulfilled promise in ${t}ms`})}).catch(()=>{i.error({message:`❌ Rejected promise in ${t}ms`})})}
//# sourceMappingURL=commonHelpers2.js.map