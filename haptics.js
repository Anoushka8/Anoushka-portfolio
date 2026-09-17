(()=>{
// Tactile sound for the draggable "Let's Build Together" letters only.
const letters='.footer-letter,.footer-brand-part';
let context=null,held=false;
function tone(from,to,length,volume){const Context=window.AudioContext||window.webkitAudioContext;if(!Context)return;try{context=context||new Context();context.resume();const now=context.currentTime,osc=context.createOscillator(),filter=context.createBiquadFilter(),gain=context.createGain();osc.type='triangle';osc.frequency.setValueAtTime(from,now);osc.frequency.exponentialRampToValueAtTime(to,now+length);filter.type='lowpass';filter.frequency.value=1800;gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(volume,now+.006);gain.gain.exponentialRampToValueAtTime(.0001,now+length);osc.connect(filter).connect(gain).connect(context.destination);osc.start(now);osc.stop(now+length+.02);}catch(e){}}
document.addEventListener('pointerdown',event=>{if(event.button>0||!(event.target instanceof Element)||!event.target.closest(letters))return;held=true;tone(520,880,.07,.12);if(navigator.vibrate)navigator.vibrate(10);},{passive:true});
const drop=()=>{if(!held)return;held=false;tone(300,140,.09,.1);if(navigator.vibrate)navigator.vibrate(6);};
document.addEventListener('pointerup',drop,{passive:true});
document.addEventListener('pointercancel',drop,{passive:true});
})();
