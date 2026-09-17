(()=>{
const root=document.documentElement,key='ad-theme',media=matchMedia('(prefers-color-scheme: dark)');
try{const saved=localStorage.getItem(key);if(saved==='light'||saved==='dark')root.dataset.theme=saved;}catch(e){}
const isDark=()=>root.dataset.theme?root.dataset.theme==='dark':media.matches;
function sync(){document.querySelectorAll('.theme-toggle').forEach(button=>{const dark=isDark();button.setAttribute('aria-pressed',String(dark));button.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');});}
addEventListener('DOMContentLoaded',()=>{sync();document.querySelectorAll('.theme-toggle').forEach(button=>button.addEventListener('click',()=>{root.dataset.theme=isDark()?'light':'dark';try{localStorage.setItem(key,root.dataset.theme);}catch(e){}sync();}));});
media.addEventListener('change',sync);
})();
