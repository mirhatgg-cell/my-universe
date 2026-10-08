/* Real rigid transport of a finite inventory. No opacity/scale reveal of paper. */
(()=>{'use strict';
const clamp=x=>Math.max(0,Math.min(1,x)),ease=x=>{x=clamp(x);return x*x*(3-2*x)},lerp=(a,b,u)=>a+(b-a)*ease(u),cache=new Map(),STEP=1.35,INTRO=1;
function build(s,topic,index){
 const key=topic+':'+index;if(cache.has(key))return cache.get(key);
 s={...s,dots:Array.from({length:200},(_,j)=>({r:.5,s:(j*61%200)/200,z:.4,x:j*43%1000,y:j*67%600,...s.dots?.[j]}))};
 const canvas=document.createElement('canvas');canvas.width=1000;canvas.height=600;
 const groups=new Map();AnimationArt.paper({...s,ctx:canvas.getContext('2d'),capturePaper:p=>{if(!groups.has(p.group))groups.set(p.group,[]);groups.get(p.group).push(p)}},12,topic,index);
 function inside([x,y],pts){let hit=false;for(let i=0,j=pts.length-1;i<pts.length;j=i++){const [ax,ay]=pts[i],[bx,by]=pts[j];if((ay>y)!=(by>y)&&x<(bx-ax)*(y-ay)/(by-ay)+ax)hit=!hit;}return hit;}
 function gripPoint(parts,fallback){const shape=parts.find(p=>p.kind==='cut'&&p.points.length>=3);if(!shape)return fallback;const xs=shape.points.map(p=>p[0]),ys=shape.points.map(p=>p[1]),l=Math.min(...xs),r=Math.max(...xs),top=Math.min(...ys),bottom=Math.max(...ys);let best=null,score=Infinity;for(let i=1;i<12;i++)for(let j=1;j<12;j++){const point=[l+(r-l)*i/12,top+(bottom-top)*j/12],d=(i-6)**2+(j-6)**2;if(d<score&&inside(point,shape.points)){best=point;score=d;}}return best||fallback;}
 const units=[...groups.values()].map(parts=>{const pts=parts.flatMap(p=>p.points||[]),xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);const left=Math.min(...xs),right=Math.max(...xs),top=Math.min(...ys),bottom=Math.max(...ys);const anchor=gripPoint(parts,[(left+right)/2,(top+bottom)/2]);return{parts,cx:anchor[0],cy:anchor[1],w:right-left,h:bottom-top}}).filter(u=>Number.isFinite(u.cx));
 // Long threads and large backing sheets are laid on the table before the shot.
 const base=units.filter(u=>u.w>490||u.h>330||(u.parts.every(p=>p.kind==='line')&&u.w+u.h>110));
 const items=units.filter(u=>!base.includes(u));
 const model={base,items,duration:INTRO+items.length*STEP+8};cache.set(key,model);return model;
}
function pose(model,t){const n=model.items.length,u=Math.max(0,(t-INTRO)/STEP),index=Math.min(n-1,Math.floor(u)),f=clamp(u-index),done=u>=n;const unit=model.items[index];if(!unit)return{done:true,index:0};const target=[55+.6*unit.cx,115+.6*unit.cy],source=[840,345],previous=index?model.items[index-1]:null,prev=previous?[55+.6*previous.cx,115+.6*previous.cy]:[840,95];
 let grip,carrying=false,offset=[0,0];
 if(f<.16)grip=[prev[0],lerp(prev[1],95,f/.16)];
 else if(f<.30)grip=[lerp(prev[0],840,(f-.16)/.14),95];
 else if(f<.43)grip=[840,lerp(95,345,(f-.30)/.13)];
 else if(f<.57){grip=[840,lerp(345,95,(f-.43)/.14)];carrying=true;}
 else if(f<.78){grip=[lerp(840,target[0],(f-.57)/.21),95];carrying=true;}
 else {grip=[target[0],lerp(95,target[1],(f-.78)/.22)];carrying=true;}
 if(done)grip=[target[0],lerp(target[1],60,(t-(INTRO+n*STEP))/1.2)];
 if(t<INTRO){grip=[840,95];carrying=false;}
 return{index,f,grip,carrying,done,target,source};
}
function paint(g,u,cx,cy){g.save();g.translate(cx,cy);g.scale(.6,.6);g.translate(-u.cx,-u.cy);g.lineCap='round';g.lineJoin='round';for(const p of u.parts){g.globalAlpha=p.alpha??1;g.beginPath();p.points.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));if(p.kind==='cut'){g.closePath();g.fillStyle=p.c;g.shadowColor='#45362933';g.shadowBlur=2;g.shadowOffsetY=3;g.fill();g.shadowBlur=0;g.shadowOffsetY=0;g.strokeStyle='#594b4838';g.lineWidth=.7;g.stroke();}else{g.strokeStyle=p.c;g.lineWidth=p.width||1;g.stroke();}}g.restore();}
function draw(s,t,topic,index){const g=s.ctx,m=build(s,topic,index),p=pose(m,t);g.save();g.globalAlpha=1;g.shadowBlur=0;g.fillStyle='#e9e0d0';g.fillRect(0,0,1000,600);g.fillStyle='#f5eddf';g.fillRect(50,125,605,400);g.strokeStyle='#c4b39d';g.lineWidth=2;g.strokeRect(50,125,605,400);g.fillStyle='#cbb99d';g.fillRect(720,475,250,14);g.fillRect(740,489,10,40);g.fillRect(945,489,10,40);
 if(p.done){if(!s.paperLiveCanvas){s.paperLiveCanvas=document.createElement('canvas');s.paperLiveCanvas.width=1000;s.paperLiveCanvas.height=600;}const z=s.paperLiveCanvas.getContext('2d');z.clearRect(0,0,1000,600);AnimationArt.paper({...s,ctx:z,workshopLive:true},12+Math.max(0,t-(INTRO+m.items.length*STEP)),topic,index);g.drawImage(s.paperLiveCanvas,55,115,600,360);}
 for(const u of p.done?[]:m.base)paint(g,u,55+.6*u.cx,115+.6*u.cy);
 for(let j=0;j<m.items.length;j++){const u=m.items[j];if(!p.done&&j<p.index)paint(g,u,55+.6*u.cx,115+.6*u.cy);}
 for(let j=m.items.length-1;j>=p.index;j--){if(p.done||j===p.index&&p.carrying)continue;paint(g,m.items[j],840,345+Math.min(100,(j-p.index)*1.3));}
 if(!p.done&&p.carrying)paint(g,m.items[p.index],p.grip[0],p.grip[1]);
 // A visible travelling gantry supplies the force; suction pad remains on the piece.
 const [x,y]=p.grip||[840,95];g.strokeStyle='#7c8588';g.lineWidth=7;g.beginPath();g.moveTo(30,65);g.lineTo(970,65);g.moveTo(30,65);g.lineTo(30,540);g.moveTo(970,65);g.lineTo(970,540);g.stroke();g.fillStyle='#667b84';g.fillRect(x-22,48,44,32);g.strokeStyle='#8d9fa5';g.lineWidth=8;g.beginPath();g.moveTo(x,80);g.lineTo(x,y-9);g.stroke();g.fillStyle='#b58569';g.beginPath();g.ellipse(x,y-4,10,6,0,0,Math.PI*2);g.fill();g.fillStyle='#5c5450';g.textAlign='center';g.font='15px Georgia';g.fillText(p.done?'Детали собраны. Каждый слой на своём месте.':t<INTRO?'Готовые детали на подставке → сборка на листе':p.carrying?'Переносим и укладываем деталь':'Возвращаем захват за следующей деталью',500,565);g.font='12px sans-serif';g.fillText('БУМАЖНАЯ МАСТЕРСКАЯ · '+Math.min(m.items.length,p.index+(p.done?1:0))+' / '+m.items.length,500,590);g.restore();s.artStats={style:'paper',parts:m.items.length,assembled:p.index};}
window.PaperWorkshop={build,pose,draw,duration:(s,topic,index)=>build(s,topic,index).duration};
})();
