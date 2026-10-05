(()=>{
'use strict';const $=id=>document.getElementById(id);
const descriptions={warmth:'Твой свет делает мой день теплее.',together:'Из двух далёких точек получается наше «рядом».',support:'Когда трудно держаться — появляется опора.',dream:'Первый шаг оставляет дорогу для следующего.',love:'Близость растёт. Каждый остаётся собой.',respect:'Разные — и одинаково важные.'};
const pattern=/(тепл[а-яё]*|добр[а-яё]*|рядом|вместе|друж[а-яё]*|поддерж[а-яё]*|забот[а-яё]*|мечт[а-яё]*|смел[а-яё]*|шаг[а-яё]*|люблю|любов[а-яё]*|нежн[а-яё]*|уваж[а-яё]*|собой|встретились)/giu;
function scene(type){const el=document.createElement('figure');el.className='causal-scene causal-'+type;el.setAttribute('aria-hidden','true');
 // Static illustration geometry; user content is only inserted with textContent.
 el.innerHTML='<svg viewBox="0 0 360 118" focusable="false"><path class="causal-route" d="M65 85 C112 90 116 40 180 48 S250 27 294 25"/><path class="causal-link" d="M83 65 Q180 15 277 65"/><ellipse class="causal-boundary left" cx="104" cy="59" rx="49" ry="38"/><ellipse class="causal-boundary right" cx="256" cy="59" rx="49" ry="38"/><g class="causal-wave"><circle cx="80" cy="59" r="15"/><circle cx="80" cy="59" r="28"/><circle cx="80" cy="59" r="40"/></g><path class="causal-cloud" d="M244 40 Q241 25 256 28 Q265 7 282 28 Q303 18 310 38 Q327 53 305 61 L250 61 Q230 55 244 40"/><g class="causal-source"><circle class="aura" cx="0" cy="0" r="18"/><path d="M0 -13 L3 -3 L13 0 L3 3 L0 13 L-3 3 L-13 0 L-3 -3Z"/></g><g class="causal-target"><circle class="aura" cx="0" cy="0" r="19"/><path d="M0 -14 L4 -4 L14 0 L4 4 L0 14 L-4 4 L-14 0 L-4 -4Z"/></g><path class="causal-catch" d="M148 85 Q180 113 212 85"/><path class="causal-heart" d="M180 79 C158 62 148 51 157 42 C165 33 175 37 180 44 C185 37 195 33 203 42 C212 51 202 62 180 79Z"/><circle class="causal-step s1" cx="105" cy="78" r="3"/><circle class="causal-step s2" cx="149" cy="53" r="3"/><circle class="causal-step s3" cx="202" cy="45" r="3"/><circle class="causal-step s4" cx="246" cy="31" r="3"/></svg>';
 const caption=document.createElement('figcaption');caption.textContent=descriptions[type];el.append(caption);return el}
let intersection=null;
if('IntersectionObserver'in window)intersection=new IntersectionObserver(entries=>{for(const e of entries)e.target.classList.toggle('in-view',e.isIntersecting)},{threshold:.16});
function animateText(p){const text=p.textContent;const frag=document.createDocumentFragment();let end=0;for(const m of text.matchAll(pattern)){frag.append(document.createTextNode(text.slice(end,m.index)));const span=document.createElement('em');span.className='story-word';span.textContent=m[0];frag.append(span);end=m.index+m[0].length;}frag.append(document.createTextNode(text.slice(end)));p.replaceChildren(frag);}
function mount(){intersection?.disconnect();
 // A render replaces text but may leave its old wrapper: unwrap once before rebuilding.
 document.querySelectorAll('.narrative-unit').forEach(unit=>{const p=unit.querySelector('.narrative-text');if(p)unit.replaceWith(p);else unit.remove()});
 const items=[...document.querySelectorAll('#letter-body p,#reason1,#reason2,#reason3,#closing,[data-note]')];
 for(const p of items){const kind=Object.hasOwn(descriptions,p.dataset.scene)?p.dataset.scene:'warmth';const unit=document.createElement('div');unit.className='narrative-unit story-'+kind;p.before(unit);p.classList.add('narrative-text');animateText(p);unit.append(scene(kind),p);if(intersection)intersection.observe(unit);else unit.classList.add('in-view')}
 const intro=$('intro');intro.dataset.scene='warmth';animateText(intro);intro.classList.add('intro-alive');
 document.querySelectorAll('.wish-copy li').forEach((li,i)=>{li.classList.add('wish-line');li.style.setProperty('--wish-delay',i*.6+'s')});
}
document.addEventListener('letter-rendered',mount);mount();
const fs=$('fullscreen');let toastTimer=0;
function notify(message){$('view-status').textContent=message;$('view-status').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('view-status').hidden=true,7000)}
function current(){return document.fullscreenElement||document.webkitFullscreenElement}
function sync(){const on=Boolean(current());fs.setAttribute('aria-pressed',String(on));fs.querySelector('.fs-label').textContent=on?'Выйти из экрана':'На весь экран';fs.title=on?'Выйти из полноэкранного режима (Esc)':'Открыть поздравление без панелей браузера';}
fs.onclick=async()=>{try{if(current()){const exit=document.exitFullscreen||document.webkitExitFullscreen;if(exit)await exit.call(document);}else{const enter=document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen;if(!enter){notify('Этот браузер не поддерживает полноэкранный режим страницы. На компьютере можно нажать F11.');return;}await enter.call(document.documentElement);}sync();}catch(e){notify('Браузер не разрешил полный экран. Попробуй открыть ссылку отдельно; на компьютере можно нажать F11.');}};
document.addEventListener('fullscreenchange',sync);document.addEventListener('webkitfullscreenchange',sync);sync();
})();
