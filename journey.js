(()=>{'use strict';
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const copy={orbits:['Наши траектории','У каждого был свой путь. А потом в нём появилось место для другого.','Две отдельные орбиты постепенно становятся одной системой.'],tree:['Хорошее растёт','Большое начинается с малого: с разговора, внимания, одного доброго поступка.','Коснись дерева — на ветвях расцветёт ещё немного тепла.'],heart:['То, что не помещается в слова','Из сотен маленьких моментов складывается одно большое чувство.','Коснись сердца: оно рассыплется и снова соберётся.'],flower:['Пусть всё расцветает','Пусть у тебя будет время расти в своём ритме и раскрывать то, что делает тебя собой.','Коснись цветка, чтобы раскрыть его заново.'],name:['Среди миллиардов звёзд','Всё это пространство — и одно имя, к которому возвращаются мысли.','Проведи пальцем: звёзды отзываются на твоё прикосновение.'],gift:['Немного чуда для тебя','Есть подарки, которые нельзя завернуть. Внимание. Время. И эти слова.','Нажми на подарок — внутри маленькая светящаяся Вселенная.']};
let states=[],raf=0,last=0,observer;
const clamp=x=>Math.max(0,Math.min(1,x)),ease=x=>{x=clamp(x);return x*x*(3-2*x)};
function mount(config={}){
 observer?.disconnect();cancelAnimationFrame(raf);raf=0;last=0;states=[];document.getElementById('visual-journey')?.remove();
 const root=document.createElement('section');root.id='visual-journey';root.className='visual-journey';root.setAttribute('aria-label','Твоя история в движении');
 const romantic=config.journey==='love'||(config.journey!=='birthday'&&config.journey!=='gentle'&&config.tone==='love');const birthday=config.journey==='birthday'||(config.journey!=='gentle'&&config.holiday==='birthday');const types=romantic?['orbits','tree','heart','flower','name']:birthday?['gift','tree','flower','name']:['orbits','tree','flower','name'];
 if(config.holiday==='newyear')types.splice(0,1,'gift');
 types.forEach((type,i)=>{
 const section=document.createElement('article');section.className='journey-chapter';
 const eyebrow=document.createElement('p');eyebrow.className='eyebrow';eyebrow.textContent='ТВОЯ ИСТОРИЯ / 0'+(i+1);
 const h=document.createElement('h2');h.textContent=copy[type][0];const text=document.createElement('p');text.className='journey-copy';text.textContent=copy[type][1];
 const stage=document.createElement('button');stage.type='button';stage.className='journey-stage';stage.setAttribute('aria-label',copy[type][2]);const canvas=document.createElement('canvas');canvas.setAttribute('aria-hidden','true');stage.append(canvas);
 const hint=document.createElement('p');hint.className='journey-hint';hint.textContent=copy[type][2];const replay=document.createElement('button');replay.type='button';replay.className='text-button';replay.textContent='↻ Ещё раз';section.append(eyebrow,h,text,stage,hint,replay);root.append(section);
 const ctx=canvas.getContext('2d');if(!ctx)return;
 let seed=17+i*37;const rand=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646};
 const state={section,canvas,ctx,type,time:0,visible:false,x:0,y:0,pulse:0,opened:false,name:config.to||'Для тебя',dots:Array.from({length:1000},()=>({a:rand()*Math.PI*2,r:Math.sqrt(rand()),z:rand()*2-1,s:rand(),x:rand()*1000,y:rand()*600})),branches:[],targets:[]};
 function branch(x,y,len,a,depth,start){const ex=x+Math.cos(a)*len,ey=y+Math.sin(a)*len;state.branches.push({x,y,ex,ey,depth,start});if(depth<8){branch(ex,ey,len*(.66+rand()*.1),a-.3-rand()*.35,depth+1,start+.53);branch(ex,ey,len*(.66+rand()*.1),a+.3+rand()*.35,depth+1,start+.53)}}branch(500,530,125,-Math.PI/2,0,0);
 if(type==='name'){const c=document.createElement('canvas');c.width=1000;c.height=600;const q=c.getContext('2d');q.font='600 '+Math.min(140,820/Math.max(1,state.name.length)*1.6)+'px Georgia';q.textAlign='center';q.fillText(state.name,500,330);const d=q.getImageData(0,0,1000,600).data;for(let y=170;y<370;y+=5)for(let x=70;x<930;x+=5)if(d[(y*1000+x)*4+3]>100)state.targets.push({x,y});}
 stage.onclick=()=>{state.pulse=1;if(type==='gift')state.opened=!state.opened;else if(type==='flower')state.time=0;wake()};replay.onclick=()=>{state.time=0;state.opened=false;state.pulse=0;wake()};
 stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect();state.x=(e.clientX-r.left)/r.width-.5;state.y=(e.clientY-r.top)/r.height-.5;wake()});stage.addEventListener('pointerleave',()=>{state.x=state.y=0});states.push(state);
 });
 document.querySelector('.letter-section').after(root);
 observer=new IntersectionObserver(entries=>{entries.forEach(e=>{const s=states.find(s=>s.section===e.target);if(s){s.visible=e.isIntersecting;if(s.visible)s.section.classList.add('journey-visible')}});wake()},{threshold:.05});states.forEach(s=>observer.observe(s.section));
}
function draw(s){const {canvas:c,ctx:g}=s;const r=c.getBoundingClientRect();if(!r.width)return;const dpr=Math.min(devicePixelRatio||1,1.6),w=Math.round(r.width*dpr),h=Math.round(r.height*dpr);if(c.width!==w||c.height!==h){c.width=w;c.height=h}g.setTransform(w/1000,0,0,h/600,0,0);g.clearRect(0,0,1000,600);
 const t=reduce.matches?12:s.time;const grad=g.createRadialGradient(500,300,0,500,300,530);grad.addColorStop(0,'#181730');grad.addColorStop(1,'#040610');g.fillStyle=grad;g.fillRect(0,0,1000,600);
 function dot(x,y,r,color,alpha=1){g.globalAlpha=alpha;g.fillStyle=color;g.beginPath();g.arc(x,y,Math.max(.2,r),0,Math.PI*2);g.fill();g.globalAlpha=1}
 function line(x,y,ex,ey,color,width=1){g.strokeStyle=color;g.lineWidth=width;g.beginPath();g.moveTo(x,y);g.lineTo(ex,ey);g.stroke()}
 s.dots.slice(0,95).forEach(d=>dot(d.x,d.y,.6+d.s,'#b9c9ff',.2+.3*Math.sin(t*.5+d.a)**2));
 g.save();g.translate(s.x*18,s.y*12);g.shadowBlur=12;g.shadowColor='#a889ff';
 if(s.type==='tree'){s.branches.forEach(b=>{const f=ease((t-b.start)/.9);if(!f)return;line(b.x,b.y,b.x+(b.ex-b.x)*f,b.y+(b.ey-b.y)*f,b.depth<4?'#dcb590':'#ba9ceb',Math.max(.6,8-b.depth));if(b.depth===8&&f>.9){dot(b.ex,b.ey,2.5+s.pulse*3,'#ffb9da',clamp(t-5));dot(b.ex+4,b.ey-3,1.5,'#d7c5ff',clamp(t-5))}});}
 if(s.type==='heart'){const f=ease(t/6);const angle=t*.16+s.x*.6; s.dots.forEach(d=>{const a=d.a;const hx=16*Math.sin(a)**3,hy=-(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a));const z=d.z*Math.sqrt(Math.max(0,1-d.r*d.r))*65;const px=hx*d.r*14;const x=500+(px*Math.cos(angle)+z*Math.sin(angle))*f+(d.x-500)*(1-f)+Math.cos(a)*s.pulse*180;const y=265+hy*d.r*14*f+(d.y-265)*(1-f)+Math.sin(a)*s.pulse*130;dot(x,y,.6+d.s*1.5,d.s>.6?'#d7f5ff':'#69baff',.55+d.s*.45)});g.strokeStyle='#67d7ff';g.lineWidth=2;g.beginPath();g.ellipse(500,490,140,21,0,0,Math.PI*2);g.stroke();}
 if(s.type==='orbits'){const f=ease(t/8);for(let j=0;j<2;j++){const cx=280+440*j+(j?-1:1)*220*f,rx=135-35*f;g.strokeStyle=j?'#e2a2cc55':'#9faeff55';g.lineWidth=1.4;g.beginPath();g.ellipse(cx,300,rx,70, j?-.4:.4,0,Math.PI*2);g.stroke();const a=t*.7+j*Math.PI;const x=cx+Math.cos(a)*rx,y=300+Math.sin(a)*70;dot(x,y,8,j?'#ffb4ce':'#accfff');dot(x,y,24,j?'#ffb4ce':'#accfff',.08);if(f>.4)line(x,y,500,300,'#c5b6ff33')}dot(500,300,4,'#fff',f)}
 if(s.type==='flower'){const f=ease(t/4);g.strokeStyle='#82b69e';g.lineWidth=4;g.beginPath();g.moveTo(500,530);g.quadraticCurveTo(460,390,500,530-250*f);g.stroke();for(let j=0;j<12;j++){const a=j*Math.PI/6+t*.025;g.save();g.translate(500,280);g.rotate(a);g.scale(ease((t-2-j*.09)/3),ease((t-2-j*.09)/3));const petal=g.createLinearGradient(0,0,0,-150);petal.addColorStop(0,'#b674ae');petal.addColorStop(1,'#fbc8e5');g.fillStyle=petal;g.beginPath();g.moveTo(0,0);g.bezierCurveTo(-50,-60,-40,-145,0,-158);g.bezierCurveTo(40,-145,50,-60,0,0);g.fill();g.restore()}dot(500,280,20*ease((t-3)/2),'#f5dbaa');}
 if(s.type==='name'){const f=ease(t/6);s.targets.forEach((p,i)=>{const d=s.dots[i%s.dots.length];const x=p.x*f+d.x*(1-f),y=p.y*f+d.y*(1-f);dot(x+s.x*10*Math.sin(i),y+s.y*10*Math.cos(i),1.1+d.s,'#e2c5ff',.7+.3*Math.sin(t+d.a)**2)});if(f>.9){g.font='16px Georgia';g.textAlign='center';g.fillStyle='#c9b8d5';g.fillText('Это пространство посвящено тебе',500,410)}}
 if(s.type==='gift'){const f=ease(t/3),open=s.opened||reduce.matches;g.fillStyle='#7963a6';g.fillRect(350,310,300,180*f);g.fillStyle='#dcc095';g.fillRect(480,310,40,180*f);g.save();g.translate(500,300-(open?100:0));g.rotate(open?-.16:0);g.fillStyle='#a78bc8';g.fillRect(-160,-25,320,45);g.fillStyle='#eed2ac';g.fillRect(-20,-25,40,45);g.restore();if(open)s.dots.slice(0,160).forEach(d=>dot(500+Math.cos(d.a)*d.r*230,265+Math.sin(d.a)*d.r*170+Math.sin(t+d.a)*12,1+d.s*2,'#f7d9ae'));}
 g.restore();g.shadowBlur=0;
}
function tick(now){raf=0;const dt=last?Math.min((now-last)/1000,.05):0;last=now;const paused=document.body.classList.contains('paused')||reduce.matches;states.filter(s=>s.visible).forEach(s=>{if(!paused){s.time+=dt;s.pulse=Math.max(0,s.pulse-dt*.65)}draw(s)});if(!paused&&!document.hidden&&states.some(s=>s.visible))raf=requestAnimationFrame(tick)}
function wake(){if(!raf&&!document.hidden){last=0;raf=requestAnimationFrame(tick)}}
new MutationObserver(wake).observe(document.body,{attributes:true,attributeFilter:['class']});addEventListener('resize',wake);document.addEventListener('visibilitychange',wake);reduce.addEventListener('change',wake);
document.addEventListener('letter-rendered',e=>mount(e.detail));
// app.js renders before this script loads; recover the validated link configuration.
let initial={};try{if(location.hash.startsWith('#letter=')){const str=location.hash.slice(8).replaceAll('-','+').replaceAll('_','/');initial=JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(str),c=>c.charCodeAt(0))))}}catch{}mount(initial);
})();
