/* Stylize every moving frame. Geometry and its time line are never replaced with an image. */
(()=>{'use strict';let pbr=null,loadStarted=false;const raw=AnimationPacks.draw;const processed=new Set(['anime','manga','comic','manhwa','pixel','noir','blueprint','ukiyoe','watercolor','synthwave','cyberpunk','bauhaus','artdeco','stainedglass','cinematic','nouveau','solarpunk','spaceage','postcard','book','glass','aurora','editorial','memphis','collage','fantasy']);
function draw(s,t){if(window.PersonalScenes?.is(s.type))return raw(s,t);const skin=s.skin||document.body.dataset.skin||'fantasy';if(s._unstyled)return raw(s,t);if(['realism','glass','spaceage'].includes(skin)&&s.type.endsWith(':0')){
if(!loadStarted){loadStarted=true;import('./physical-packs.js').then(m=>{pbr=m;document.dispatchEvent(new Event('motion-change'));Universe.wake();}).catch(()=>{});}if(pbr){try{const capture={...s,captureMesh:true,_unstyled:true};raw(capture,t);pbr.draw(s,capture.sceneMeshes||[],s.ctx);s.renderTechnique='pbr-geometry';return;}catch{pbr=null;s.renderTechnique='software-fallback';}}
}
if(!processed.has(skin)){raw(s,t);return;}
const pixel=skin==='pixel',width=pixel?250:Math.round(Math.max(240,Math.min(600,s.ctx.canvas?.width||400))/5)*5,height=width*.6;
if(!s.styleBuffer||s.styleBuffer.width!==width){s.styleBuffer=document.createElement('canvas');s.styleBuffer.width=width;s.styleBuffer.height=height;}
const g=s.styleBuffer.getContext('2d');g.setTransform(width/1000,0,0,width/1000,0,0);g.clearRect(0,0,1000,600);const sampleTime=['anime','manga','comic','manhwa'].includes(skin)?Math.floor(t*12)/12:t;
const copy={...s,ctx:g,canvas:s.styleBuffer,_unstyled:true};raw(copy,sampleTime);s.depthBuffer=copy.depthBuffer;
const frame=g.getImageData(0,0,width,height),a=frame.data,source=new Uint8ClampedArray(a);const mono=skin==='manga'||skin==='noir',comic=skin==='comic',inked=['anime','manhwa','comic','manga','ukiyoe'].includes(skin);
for(let y=0;y<height;y++)for(let x=0;x<width;x++){const i=(y*width+x)*4,l=.2126*source[i]+.7152*source[i+1]+.0722*source[i+2];let edge=0;if(x>0&&y>0&&x<width-1&&y<height-1){for(const off of [4,-4,width*4,-width*4])edge=Math.max(edge,Math.abs(l-(.2126*source[i+off]+.7152*source[i+off+1]+.0722*source[i+off+2])));}
if(mono){const threshold=skin==='noir'?100:160;let value=l>threshold?245:l<65?25:185;if(skin==='manga'&&l>=65&&l<threshold){const radius=l<110?1.7:1.1;value=Math.hypot(x%5-2,y%5-2)<radius?25:245;}if(edge>24)value=18;a[i]=a[i+1]=a[i+2]=value;}
else if(['book','postcard','collage'].includes(skin)){a[i]=Math.min(255,l*1.03+14);a[i+1]=Math.min(255,l*.96+10);a[i+2]=Math.min(255,l*.83+6);if(edge>35){a[i]*=.7;a[i+1]*=.7;a[i+2]*=.7;}}
else if(skin==='watercolor'){for(let c=0;c<3;c++){const left=source[Math.max(0,i-4)+c],right=source[Math.min(source.length-4,i+4)+c];a[i+c]=(source[i+c]*2+left+right)/4*.85+34+((x*17+y*31)%7-3);}}
else if(skin==='artdeco'){a[i]=l>.5*255?l:30;a[i+1]=l>.5*255?l*.85:42;a[i+2]=l>.5*255?l*.52:49;if(edge>30){a[i]=206;a[i+1]=179;a[i+2]=109;}}
else if(skin==='blueprint'){a[i]=20;a[i+1]=52;a[i+2]=78;if(edge>20){a[i]=185;a[i+1]=220;a[i+2]=230;}}
else{const steps=pixel?5:skin==='anime'||skin==='manhwa'?6:4;for(let c=0;c<3;c++)a[i+c]=Math.round(source[i+c]/255*steps)/steps*255;if(inked&&edge>30){a[i]=24;a[i+1]=27;a[i+2]=35;}if(comic&&l<180&&x%4===0&&y%4===0){a[i]*=.5;a[i+1]*=.5;a[i+2]*=.5;}if(skin==='stainedglass'&&edge>18){a[i]=a[i+1]=a[i+2]=20;}}
}
g.setTransform(1,0,0,1,0,0);g.putImageData(frame,0,0);s.ctx.save();s.ctx.imageSmoothingEnabled=!pixel;s.ctx.drawImage(s.styleBuffer,0,0,1000,600);s.ctx.restore();s.renderTechnique=skin;}
AnimationPacks.draw=draw;window.AnimationStyle={draw,raw};})();
