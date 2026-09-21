(()=>{
const params=new URLSearchParams(location.search),projects=window.PROJECTS,index=Math.max(0,projects.findIndex(p=>p.id===params.get('p'))),p=projects[index];
const esc=v=>String(v).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slug=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,'-');
document.title=`${p.name} | Anoushka Dandawate`;

// Hero: fills the first screen. Optional short intro video plays before the case study.
const hero=document.querySelector('#case-hero');
hero.style.setProperty('--hero-tint',p.hero.tint||'var(--sky)');
hero.innerHTML=p.hero.video?`<video class="case-hero-media" src="${p.hero.video}" poster="${p.hero.image}" autoplay muted playsinline loop preload="auto" aria-label="${esc(p.name)} intro video"></video>`:`<img class="case-hero-media" src="${p.hero.image}" alt="${esc(p.name)} cover" fetchpriority="high">`;

const heroVideo=hero.querySelector('video');
if(heroVideo){const start=()=>heroVideo.play().catch(()=>{});start();heroVideo.addEventListener('canplay',start,{once:true});['pointerdown','touchstart','scroll'].forEach(e=>addEventListener(e,start,{once:true,passive:true}));}

// Details sheet
const actions=[];
if(p.prototype)actions.push(`<button class="button primary" type="button" data-proto="${esc(p.prototype)}">${p.prototypeLabel||'View Prototype'} <span aria-hidden="true">→</span></button>`);
if(p.prototypeLocal)actions.push(`<a class="button primary" href="#prototype">Try the Prototype <span aria-hidden="true">→</span></a>`);
if(p.prototypeJump)actions.push(`<a class="button primary" href="#${slug(p.prototypeJump)}">${p.prototypeLabel} <span aria-hidden="true">→</span></a>`);
if(p.external)actions.push(`<a class="button primary" href="${p.external.href}" target="_blank" rel="noopener noreferrer">${p.external.label} <span aria-hidden="true">↗</span></a>`);
const overview=p.details.Overview,facts=Object.entries(p.details).filter(([k])=>k!=='Overview');
document.querySelector('#case-intro').innerHTML=`<div class="case-intro-head"><p class="eyebrow blue">Case Study ${String(index+1).padStart(2,'0')}</p><h1>${esc(p.name)}<span>${esc(p.subtitle)}</span></h1><p class="case-overview">${esc(overview)}</p><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>${actions.length?`<div class="actions">${actions.join('')}</div>`:''}</div><dl class="case-details">${facts.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;

// Skip tabs + sections
document.querySelector('#case-tabs').innerHTML=`<div class="case-tabs-inner" id="case-tabs-inner"><button class="case-tab-toggle" type="button" aria-expanded="true" aria-controls="case-tabs-inner" aria-label="Hide section shortcuts"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>${p.sections.map(s=>`<a class="case-tab" href="#${slug(s.title)}">${esc(s.title)}</a>`).join('')}</div>`;
const tabBar=document.querySelector('#case-tabs'),tabToggle=tabBar.querySelector('.case-tab-toggle');
const backLink=document.querySelector('.case-back');if(backLink)tabBar.prepend(backLink);
// Over the hero video only the back and menu buttons show; the section pills appear with the sections.
const sheet=document.querySelector('#case-sheet');
const heroWatch=()=>tabBar.classList.toggle('is-hero',sheet.getBoundingClientRect().top>72);
heroWatch();addEventListener('scroll',heroWatch,{passive:true});addEventListener('resize',heroWatch);
tabToggle.addEventListener('click',()=>tabBar.classList.remove('is-hero'));
tabToggle.addEventListener('click',()=>{const collapsed=tabBar.classList.toggle('is-collapsed');tabToggle.setAttribute('aria-expanded',String(!collapsed));tabToggle.setAttribute('aria-label',collapsed?'Show section shortcuts':'Hide section shortcuts');});
const overlay=o=>{const pos=`left:${o.x}%;top:${o.y}%;width:${o.w}%;height:${o.h}%`;return o.gif?`<img class="slide-overlay" src="${o.gif}" alt="" style="${pos}">`:`<video class="slide-overlay lazy-video" data-src="${o.video}" muted playsinline loop style="${pos}" onerror="this.remove()"></video>`;};
const block=b=>{
  if(b.img)return `<figure class="case-slide"><img src="${b.img}" alt="" loading="lazy" decoding="async">${(b.overlays||[]).map(overlay).join('')}</figure>`;
  if(b.text)return `<div class="case-text">${b.text.map(t=>`<p>${esc(t)}</p>`).join('')}</div>`;
  if(b.videos)return `<figure class="case-video">${b.videos.map(v=>`<video class="${b.controls?'':'lazy-video'}" ${b.controls?`src="${v}" controls preload="metadata"`:`data-src="${v}" muted playsinline loop`}></video>`).join('')}${b.caption?`<figcaption>${esc(b.caption)}</figcaption>`:''}</figure>`;
  if(b.embed)return `<div class="case-embed"><iframe src="${b.embed}" title="${esc(b.label)}" loading="lazy"></iframe><a class="button" href="${b.embed}" target="_blank" rel="noopener">Open full screen <span aria-hidden="true">↗</span></a></div>`;
  if(b.soon)return `<div class="case-soon">Slides for this section are on their way.</div>`;
  return '';
};
document.querySelector('#case-sections').innerHTML=p.sections.map((s,i)=>`<section class="case-section" id="${slug(s.title)}" aria-labelledby="h-${slug(s.title)}"><h2 id="h-${slug(s.title)}"><small>${String(i+1).padStart(2,'0')}</small>${esc(s.title)}</h2>${s.blocks.map(block).join('')}</section>`).join('');

// Slides fit the screen: landscape slides are sized by viewport height, tall ones by width.
document.querySelectorAll('.case-slide img').forEach(img=>{const set=()=>{const ratio=img.naturalWidth/img.naturalHeight;img.parentElement.style.setProperty('--ar',ratio);img.parentElement.classList.toggle('is-tall',ratio<1.2);};img.complete&&img.naturalWidth?set():img.addEventListener('load',set,{once:true});});

// More projects: a carousel of everything else
const others=projects.filter(x=>x.id!==p.id);
document.querySelector('#case-next').innerHTML=`<div class="case-more-head"><h2>More Projects</h2><div class="cut-nav"><button class="cut-arrow" type="button" data-more="-1" aria-label="Scroll left"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><button class="cut-arrow" type="button" data-more="1" aria-label="Scroll right"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></button></div></div><div class="case-more-rail" id="case-more-rail">${others.map(o=>`<a class="case-more-card" href="project.html?p=${o.id}"><img src="${o.card}" alt="" loading="lazy" decoding="async"><span class="case-more-name">${esc(o.name)}</span><small>${esc(o.subtitle)}</small></a>`).join('')}</div>`;
const rail=document.querySelector('#case-more-rail');
document.querySelectorAll('[data-more]').forEach(b=>b.addEventListener('click',()=>{const card=rail.querySelector('.case-more-card');rail.scrollBy({left:Number(b.dataset.more)*(card.offsetWidth+16),behavior:'smooth'});}));

// Active tab
const tabs=[...document.querySelectorAll('.case-tab')],sections=[...document.querySelectorAll('.case-section')],bar=document.querySelector('.case-tabs-inner');let activeId;
function setActive(){const line=innerHeight*.4;let current=null;sections.forEach(s=>{if(s.getBoundingClientRect().top<line)current=s.id;});if(current===activeId)return;activeId=current;tabs.forEach(t=>{const on=t.hash.slice(1)===current;t.classList.toggle('active',on);if(on&&!tabBar.classList.contains('is-collapsed'))bar.scrollTo({left:t.offsetLeft-bar.clientWidth/2+t.offsetWidth/2,behavior:'smooth'});});}
addEventListener('scroll',setActive,{passive:true});setActive();

// Videos load and play only while visible
const lazy=document.querySelectorAll('.lazy-video');
if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{const v=e.target;if(e.isIntersecting){if(!v.getAttribute('src'))v.src=v.dataset.src;v.play().catch(()=>{});}else v.pause();}),{rootMargin:'300px 0px'});lazy.forEach(v=>io.observe(v));}else lazy.forEach(v=>{v.src=v.dataset.src;v.autoplay=true;});

// Figma prototype modal
const dialog=document.querySelector('#proto-dialog'),frame=document.querySelector('#proto-frame');
document.querySelectorAll('[data-proto]').forEach(b=>b.addEventListener('click',()=>{frame.src=b.dataset.proto;dialog.showModal();document.documentElement.classList.add('modal-open');}));
document.querySelector('#proto-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
dialog.addEventListener('close',()=>{frame.removeAttribute('src');document.documentElement.classList.remove('modal-open');});
})();
