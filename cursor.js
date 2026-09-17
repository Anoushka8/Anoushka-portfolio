(()=>{
if(!matchMedia('(hover: hover) and (pointer: fine)').matches)return;
const tips=[
['.mac-window:not(.is-front)','Bring to front'],
['[data-action="procreate"]','Doodle on my art board'],
['[data-new-doodle]','Make a doodle'],
['#procreate-save','Pin it to the art board'],
['.art-tile.is-doodle','Your doodle, only you can see it'],
['[data-folder="photos"]','Open photos'],
['[data-folder]','Open folder'],
['[data-action="music"], #music-play','Play a tune'],
['.story-nav.prev','Previous photo'],
['.story-nav.next','Next photo'],
['[data-page-dot]','Switch page'],
['#projects .project','Open case study'],
['.work-grid .project','Open case study'],
['.tile','Drag me'],
['#systemize','Tidy the chaos'],
['.book','Pull it off the shelf'],
['.ipad-lock','Open my iPad'],
['.theme-toggle','Switch theme'],
['.experience-toggle','Read more'],
['.cut-arrow','Scroll'],
['.id-resume','Download my resume']
];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const ring=document.createElement('div'),tip=document.createElement('span');
ring.className='cursor-tip-layer';ring.setAttribute('aria-hidden','true');tip.className='cursor-tip';ring.append(tip);
const canPopover=typeof ring.showPopover==='function';
if(canPopover)ring.setAttribute('popover','manual');
let x=-100,y=-100,rx=x,ry=y;
function raise(){if(!canPopover||!ring.isConnected)return;try{ring.hidePopover();}catch(e){}ring.showPopover();}
function mount(){document.body.append(ring);raise();new MutationObserver(raise).observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
addEventListener('pointermove',event=>{x=event.clientX;y=event.clientY;const target=event.target instanceof Element?event.target:null;if(!target)return;const explicit=target.closest('[data-tip]'),rule=explicit?null:tips.find(([selector])=>target.closest(selector)),text=explicit?explicit.dataset.tip:rule?rule[1]:'';ring.classList.toggle('is-tip',!!text);if(text&&tip.textContent!==text)tip.textContent=text;},{passive:true});
addEventListener('pointerdown',()=>ring.classList.remove('is-tip'));
document.addEventListener('mouseout',event=>{if(!event.relatedTarget)ring.classList.add('is-away');});
document.addEventListener('mouseover',()=>ring.classList.remove('is-away'));
(function follow(){rx=reduce?x:rx+(x-rx)*.35;ry=reduce?y:ry+(y-ry)*.35;ring.style.transform=`translate3d(${rx}px,${ry}px,0)`;requestAnimationFrame(follow);})();
})();
