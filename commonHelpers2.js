import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as t}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",n);function n(i){i.preventDefault();const e=s.elements.delay.value,m=s.elements.state.value;new Promise((o,r)=>{setTimeout(()=>{m==="fulfilled"?o():r()},e)}).then(()=>{t.success({message:`✅ Fulfilled promise in ${e}ms`})}).catch(()=>{t.error({message:`❌ Rejected promise in ${e}ms`})})}
//# sourceMappingURL=commonHelpers2.js.map