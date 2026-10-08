/* A staged construction, not a scale/fade reveal. Dimensions are consistent in scene units. */
(() => {
  'use strict';
  const TAU=Math.PI*2,clamp=x=>Math.max(0,Math.min(1,x)),ease=x=>{x=clamp(x);return x*x*(3-2*x);},lerp=(a,b,t)=>a+(b-a)*t;
  const definitions=[
    {start:0,pack:1.2,roll:6.2,r:66,endX:650,targetY:414},
    {start:11,pack:12.1,roll:15.3,lift:16.8,carry:18.1,place:19,r:45,endX:430,targetY:303,high:261},
    {start:24,pack:25.1,roll:27.7,lift:29.2,carry:30.5,place:31.3,r:31,endX:445,targetY:227,high:174}
  ];
  function ballState(d,t){
    const packed=ease((t-d.start)/(d.pack-d.start)),u=ease((t-d.pack)/(d.roll-d.pack));
    const r0=12,r=Math.cbrt(r0**3+u*(d.r**3-r0**3)),distance=(d.endX-145)*u;
    // Integral dx/r(x), rather than x/r(final): rolling stays in contact as radius grows.
    const A=d.r**3-r0**3,angle=A?((d.endX-145)*3/(2*A))*(r*r-r0*r0):0;
    let x=145+distance,y=480-r,phase=t<d.pack?'pack':'roll';
    if(d.lift&&t>=d.roll){
      if(t<d.lift){y=lerp(480-d.r,d.high,ease((t-d.roll)/(d.lift-d.roll)));phase='lift';}
      else if(t<d.carry){x=lerp(d.endX,650,ease((t-d.lift)/(d.carry-d.lift)));y=d.high;phase='carry';}
      else{ x=650;y=lerp(d.high,d.targetY,ease((t-d.carry)/(d.place-d.carry)));phase=t<d.place?'place':'done'; }
    }else if(t>=d.roll)phase='done';
    return {x,y,r: t<d.pack?12:r,angle,packed,phase,exists:t>=d.start};
  }
  const props=[
    {type:'stickL',start:31.6,end:32.7,source:[837,462],target:[608,306]},
    {type:'stickR',start:32.7,end:33.8,source:[864,465],target:[692,306]},
    {type:'eyes',start:33.8,end:34.9,source:[885,449],target:[650,219]},
    {type:'carrot',start:34.9,end:36.0,source:[850,449],target:[657,232]},
    {type:'buttons',start:36.0,end:37.1,source:[898,454],target:[650,298]},
    {type:'scarf',start:37.1,end:38.4,source:[900,470],target:[650,257]},
    {type:'hat',start:38.4,end:40.0,source:[900,427],target:[650,198]}
  ];
  props.forEach((p,i)=>{p.start=31.8+i*2.4;p.end=p.start+2.4;});
  function propState(p,t){const u=ease((t-p.start-.9)/(p.end-p.start-.9));return{x:lerp(p.source[0],p.target[0],u),y:lerp(p.source[1],p.target[1],u)-Math.sin(u*Math.PI)*85,u};}
  function draw(s,time){
    const t=Math.max(0,time),g=s.ctx,states=definitions.map(d=>ballState(d,t));
    const ink='#4b5258',snow='#f5f1e6',blue='#8dabb5',rose='#bb7772',gold='#bc9a60',ground=480;
    g.save();g.globalAlpha=1;g.shadowBlur=0;g.lineCap='round';g.lineJoin='round';
    const bg=g.createLinearGradient(0,0,0,600);bg.addColorStop(0,'#dddcd2');bg.addColorStop(1,'#ece4d3');g.fillStyle=bg;g.fillRect(0,0,1000,600);
    function line(x,y,xx,yy,c,w=2){g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(x,y);g.lineTo(xx,yy);g.stroke();}
    function poly(points,c){g.fillStyle=c;g.beginPath();points.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.closePath();g.fill();}
    function disk(x,y,r,c){g.fillStyle=c;g.beginPath();g.arc(x,y,Math.max(.05,r),0,TAU);g.fill();}
    function oval(x,y,rx,ry,c,angle=0){g.fillStyle=c;g.beginPath();g.ellipse(x,y,Math.max(.05,rx),Math.max(.05,ry),angle,0,TAU);g.fill();}
    function rect(x,y,w,h,c){g.fillStyle=c;g.fillRect(x,y,w,h);}
    function label(text,y,size=19){g.font=size+'px Georgia,serif';g.textAlign='center';g.fillStyle=ink;g.fillText(text,500,y,900);}
    // Established set and supplies are present in the opening shot.
    for(let n=0;n<6;n++){
      const x=70+n*175,h=70+n%3*20;poly([[x,ground],[x,ground-h],[x+40,ground-h-40],[x+80,ground-h],[x+80,ground]],'#c2cac5');
    }
    rect(0,ground,1000,120,'#f4efdf');line(40,ground,960,ground,'#b3c1bd',2);
    rect(807,471,128,9,'#967f69');rect(820,478,8,25,'#967f69');rect(916,478,8,25,'#967f69');
    // Three visible patches of powder. A collected patch is replaced by a compressed track.
    for(let n=0;n<3;n++){
      const d=definitions[n],b=states[n],rolling=clamp((t-d.pack)/(d.roll-d.pack));
      for(let i=0;i<36;i++){
        const x=148+i*(d.endX-148)/35,consumed=b.exists&&b.phase!=='pack'&&x<b.x+b.r*.5;
        const y=483+n*9+(i%3)*2;
        if(consumed){line(x-3,y,x+3,y,'#c4ceca',1.4);}
        else{oval(x,y,4+i%3,2+i%2,snow);disk(x-2,y-3,2.3,snow);}
      }
    }
    function limb(A,B,len1,len2,side,color,width){
      const dx=B[0]-A[0],dy=B[1]-A[1],distance=Math.hypot(dx,dy),d=Math.min(len1+len2-.01,Math.max(.01,distance));
      const ux=distance?dx/distance:0,uy=distance?dy/distance:1;
      const a=(len1*len1-len2*len2+d*d)/(2*d),h=Math.sqrt(Math.max(0,len1*len1-a*a));
      const ex=A[0]+ux*a-uy*h*side,ey=A[1]+uy*a+ux*h*side;
      line(A[0],A[1],ex,ey,color,width);line(ex,ey,B[0],B[1],color,width);return[ex,ey];
    }
    let active=-1;for(let i=0;i<3;i++)if(states[i].exists&&states[i].phase!=='done')active=i;
    const hands=[];
    function person(x,task,color,dir,index){
      let hipY=ground-88,shoulderY=ground-170,lean=0,walk=0,targetA,targetB;
      if(task&&task.phase!=='decorate'&&task.phase!=='idle'){
        const b=task;
        if(b.phase==='pack'){hipY=ground-44;shoulderY=ground-89;lean=dir*26;targetA=[145-dir*(20-8*b.packed),463];targetB=[145-dir*(17-6*b.packed),476];}
        else if(b.phase==='roll'){hipY=ground-56;shoulderY=ground-112;lean=dir*22;walk=t*10;const contactAngle=dir===1?Math.PI+.28:-.28;targetA=[b.x+Math.cos(contactAngle)*b.r,b.y+Math.sin(contactAngle)*b.r];targetB=[b.x-dir*b.r*.8,b.y+b.r*.32];}
        else{shoulderY=ground-190;targetA=[b.x-dir*b.r*.77,b.y+b.r*.64];targetB=[b.x-dir*b.r*.56,b.y+b.r*.82];walk=b.phase==='carry'?t*7:0;}
      }else if(task?.phase==='decorate'){
        shoulderY=Math.max(ground-190,Math.min(ground-90,task.y+35));
        targetA=[task.x+7,task.y+6];targetB=[task.x-8,task.y+5];walk=t*7;
      }else{targetA=[x+dir*22,ground-68];targetB=[x-dir*22,ground-74];walk=task?.walk||0;}
      const hip=[x,hipY],shoulder=[x+lean,shoulderY];
      const stride=Math.sin(walk)*8;
      limb([x-8,hipY],[x-18+stride,ground-3],48,43,-1,ink,10);
      limb([x+8,hipY],[x+18-stride,ground-3],48,43,1,ink,10);
      oval(x-18+stride,ground-2,14,4,ink);oval(x+18-stride,ground-2,14,4,ink);
      poly([[hip[0]-21,hipY+5],[shoulder[0]-20,shoulderY-9],[shoulder[0]+20,shoulderY-9],[hip[0]+23,hipY+5]],color);
      limb([shoulder[0]-11,shoulderY],targetB,58,58,-dir,color,11);
      limb([shoulder[0]+11,shoulderY],targetA,58,58,dir,color,11);
      disk(shoulder[0],shoulderY-30,17,'#d7b69a');
      g.fillStyle=color;g.beginPath();g.arc(shoulder[0],shoulderY-34,19,Math.PI,TAU);g.fill();rect(shoulder[0]-20,shoulderY-37,40,7,color);disk(shoulder[0],shoulderY-56,6,color);
      disk(shoulder[0]+dir*7,shoulderY-30,1.8,ink);rect(shoulder[0]-19,shoulderY-14,38,9,gold);
      if(task&&task.phase!=='idle')hands.push([...targetA,color],[...targetB,color]);
      else{oval(...targetA,9,6,color);oval(...targetB,9,6,color);}
    }
    // Walk back to the supplies between balls. A task change never teleports a builder.
    const finishedStance=i=>{const d=definitions[i],pad=i?44:62;return [650-d.r-pad,650+d.r+pad];};
    let decorate=null,decoratorX=null;
    for(let i=0;i<props.length;i++){const prop=props[i];if(t>=prop.start&&t<prop.end){
      const pos=propState(prop,t),from=i?props[i-1].target[0]+80:772;
      decoratorX=t<prop.start+.9?lerp(from,Math.min(945,prop.source[0]+80),ease((t-prop.start)/.9)):Math.min(945,pos.x+80);
      if(t>=prop.start+.9)decorate=pos;break;
    }}
    if(active>=0){
      const b=states[active],d=definitions[active];let x1,x2;
      if(b.phase==='pack'){x1=71;x2=219;}
      else if(b.phase==='roll'){x1=b.x-b.r-62;x2=b.x+b.r+62;}
      else{const pad=62-18*ease((t-d.roll)/.35);x1=b.x-b.r-pad;x2=b.x+b.r+pad;}
      person(x1,b,rose,1,0);person(x2,b,blue,-1,1);
    }else{
      const previous=t<11?0:t<24?1:2,done=definitions[previous].place||definitions[previous].roll;
      const from=finishedStance(previous),to=previous<2?[71,219]:[510,772],next=previous<2?definitions[previous+1].start:32.1;
      const progress=ease((t-done)/(next-done)),walking=progress>0&&progress<1?t*8:0;
      person(lerp(from[0],to[0],progress),{walk:walking,phase:'idle'},rose,1,0);
      if(decorate)person(decoratorX,{...decorate,phase:'decorate'},blue,-1,1);
      else person(decoratorX??(t>=48.6?lerp(730,772,ease((t-48.6)/1.2)):lerp(from[1],to[1],progress)),{walk:decoratorX!==null?t*8:walking,phase:'idle'},blue,-1,1);
    }
    function snowball(b,index){
      if(!b.exists)return;
      if(b.phase==='pack'){
        // Loose snow clumps are gathered first, rather than a sphere scaling from zero.
        for(let i=0;i<18;i++){let a=i*2.399,rr=(20+(i%5)*4)*(1-b.packed)+8;disk(145+Math.cos(a)*rr,470+Math.sin(a)*rr*.24,3.5,snow);}
        if(b.packed<.6)return;
      }
      const y=b.phase==='pack'?468:b.y;
      const shadowR=b.r*(b.phase==='roll'||b.phase==='done'?1:.5);oval(b.x,482,shadowR,4,'#a8bab933');
      disk(b.x,y,b.r,snow);
      g.save();g.beginPath();g.arc(b.x,y,b.r,0,TAU);g.clip();
      for(let n=0;n<90;n++){
        let angle=n*2.399+b.angle,rr=Math.sqrt(((n*73)%97)/97)*b.r;
        disk(b.x+Math.cos(angle)*rr,y+Math.sin(angle)*rr,1+(n%3)*.4,n%3?'#d6dfd466':'#ffffffa0');
      }
      // Compacted lower rim; angular marks make rolling perceptible.
      g.strokeStyle='#c3d0c3';g.lineWidth=2;g.beginPath();g.arc(b.x,y,b.r-.8,.3,Math.PI-.25);g.stroke();g.restore();
    }
    for(let i=0;i<3;i++)snowball(states[i],i);
    if(t>=19){oval(650,348,23,8,snow);}
    if(t>=31.3){oval(650,258,18,6,snow);}
    // Mittens sit over the surface they touch, then withdraw after release.

    function prop(p,pos){
      const x=pos.x,y=pos.y,u=pos.u;g.save();g.translate(x,y);
      switch(p.type){
        case 'stickL':line(0,0,-56,-37,'#8d795f',5);line(-30,-20,-35,-39,'#8d795f',3);break;
        case 'stickR':line(0,0,55,-35,'#8d795f',5);line(34,-21,35,-42,'#8d795f',3);break;
        case 'eyes':disk(-12,-1,3,ink);disk(12,-1,3,ink);break;
        case 'carrot':poly([[-3,-5],[32,3],[-3,8]],'#c18b5f');break;
        case 'buttons':for(let j=0;j<3;j++)disk(0,j*17,3.5,ink);break;
        case 'scarf':rect(-30,-4,60,9,rose);poly([[16,2],[28,2],[32+Math.sin(t)*3,45],[17+Math.sin(t)*2,45]],rose);break;
        case 'hat':rect(-31,-4,62,7,ink);rect(-21,-38,42,34,ink);rect(-21,-12,42,7,rose);break;
      }
      g.restore();
    }
    for(const p of props)prop(p,propState(p,t));
    for(const [x,y,c] of hands)oval(x,y,9,6,c);
    // Light packing along the two joints after stacking: loose crumbs compact at contact.
    for(const [at,y] of [[19,348],[31.3,258]])if(t>=at&&t<at+.7){const u=(t-at)/.7;for(let i=0;i<8;i++)disk(650+(i-3.5)*5*(1-u),y+Math.sin(i*2)*5*(1-u),2,snow);}
    let caption=t<1.2?'Собираем рыхлый снег в первый ком':t<6.2?'Катим: снег собирается, шар тяжелеет':t<11?'Возвращаемся за следующей порцией снега':t<15.3?'Готовим шар поменьше':t<19?'Поднимаем вдвоём и ставим на опору':t<24?'Идём за снегом для головы':t<27.7?'Катаем самый маленький шар':t<31.3?'Осторожно устанавливаем голову':t<48.6?'Добавляем ветки, морковку и тёплый шарф':'Сделали вместе. Теперь можно улыбнуться.';
    label(caption,555,21);label('Снег → катание → подъём → сборка',581,13);
    g.restore();s.artStats={style:'paper',story:'snow-construction',balls:states};
  }
  window.SnowWorkshop={draw,ballState,definitions,props,propState,duration:51};
})();
