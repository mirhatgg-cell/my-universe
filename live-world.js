/* Procedural moving environments; no raster illustrations or image filters as a source. */
(()=>{'use strict';const TAU=Math.PI*2;
function draw(g,t,skin,topic='just'){const mono=skin==='manga'||skin==='noir',pixel=skin==='pixel',cyber=skin==='cyberpunk',retro=skin==='synthwave',warm=['summer','birthday','nauryz'].includes(topic),winter=topic==='newyear';
const C=mono?['#faf9f2','#dddcd5','#a4a4a0','#454747','#171919']:winter?['#293b67','#8dabcb','#607f9b','#35485f','#182c40']:warm?['#537cb0','#ecc9a1','#9aa98e','#546e64','#293e4a']:['#3d6298','#d9b5c7','#9297b3','#596c8d','#28394e'];
g.save();g.shadowBlur=0;g.globalAlpha=1;g.lineCap='round';g.lineJoin='round';const grad=g.createLinearGradient(0,0,0,600);grad.addColorStop(0,C[0]);grad.addColorStop(.65,C[1]);grad.addColorStop(1,C[3]);g.fillStyle=grad;g.fillRect(0,0,1000,600);
const poly=(p,c)=>{g.beginPath();p.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fillStyle=c;g.fill();if(mono){g.strokeStyle='#222';g.lineWidth=1.5;g.stroke();}};
const line=(x,y,X,Y,c,w=1)=>{g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(x,y);g.lineTo(X,Y);g.stroke();};
const disk=(x,y,r,c)=>{g.fillStyle=c;g.beginPath();g.arc(x,y,r,0,TAU);g.fill();};
const box=(x,y,w,h,c)=>{g.fillStyle=c;g.fillRect(x,y,w,h);};
if(retro||cyber){box(0,0,1000,600,retro?'#211537':'#132333');disk(650,210,110,retro?'#db8fa2':'#adc3ba');if(retro){for(let j=0;j<10;j++)box(520,200+j*13,260,3+j*.55,'#211537');for(let j=-10;j<=10;j++)line(500+j*24,360,500+j*150,600,'#7b4b8d');for(let j=0;j<18;j++){const y=360+((j*15+t*19)%240)**1.1*.58;line(0,y,1000,y,'#7b4b8d');}}
for(let j=0;j<30;j++){const x=j*38-50,h=60+j*53%150;box(x,375-h,30,h,'#1d2841');for(let y=385-h;y<360;y+=15)for(let k=0;k<2;k++)box(x+6+k*12,y,5,7,j%3?'#b3978533':'#93a5ca66');}if(cyber)for(let j=0;j<65;j++){const x=j*157%1000,y=(j*83+t*100)%600;line(x,y,x-9,y+30,'#aac4d33b');}}
else if(skin==='blueprint'){box(0,0,1000,600,'#143750');for(let x=0;x<1000;x+=25)line(x,0,x,600,'#a9d6df19');for(let y=0;y<600;y+=25)line(0,y,1000,y,'#a9d6df19');const r=110+Math.sin(t*.5)*3;g.strokeStyle='#c8e1e7';g.lineWidth=2;g.beginPath();g.arc(670,250,r,Math.PI,0);g.lineTo(780,400);g.lineTo(560,400);g.closePath();g.stroke();for(let j=0;j<8;j++)line(560+j*31,250,560+j*31,400,'#97c7d580');line(480,440,855,440,'#e2c08c');line(670,90,670,480,'#e2c08c');line(670,250,670+Math.cos(t*.5)*r,250+Math.sin(t*.5)*r,'#ecce9b');}
else if(['artdeco','bauhaus','memphis','stainedglass','nouveau'].includes(skin)){const deco=skin==='artdeco',glass=skin==='stainedglass';box(0,0,1000,600,deco?'#182630':glass?'#202738':C[0]);const colors=['#b49c65','#7c9b94','#a88089','#9eabbd'];for(let j=0;j<16;j++){const a=j*TAU/16,rr=220+Math.sin(t*.5+j)*8;poly([[650,300],[650+Math.cos(a)*rr,300+Math.sin(a)*rr],[650+Math.cos(a+TAU/16)*rr,300+Math.sin(a+TAU/16)*rr]],colors[j%4]);if(glass)line(650,300,650+Math.cos(a)*rr,300+Math.sin(a)*rr,'#18232c',5);}disk(650,300,100,deco?'#162630':'#ecdec4');for(let j=0;j<12;j++){const a=j*TAU/12+t*.08;line(650+Math.cos(a)*115,300+Math.sin(a)*115,650+Math.cos(a)*178,300+Math.sin(a)*178,deco?'#e9c987':'#415264',2);}if(skin==='nouveau')for(let j=0;j<8;j++){g.beginPath();g.moveTo(90+j*18,600);g.bezierCurveTo(60+j*32,300,260-j*20,180,100+j*45,60);g.strokeStyle='#a8bd93';g.lineWidth=3;g.stroke();}}
else {
 disk(730,145,mono?45:53,mono?'#fff':'#f9dfbe');
 for(let c=0;c<7;c++){const x=(c*203+t*(3+c%3))%1250-150,y=65+c%3*53;for(let j=0;j<5;j++){g.globalAlpha=.25;g.fillStyle=mono?'#fff':'#f6e6e1';g.beginPath();g.ellipse(x+j*24,y+Math.sin(j)*9,48-j*4,15+j%3*4,0,0,TAU);g.fill();}g.globalAlpha=1;}
 for(let layer=0;layer<4;layer++){const pts=[[0,600]];for(let x=0;x<=1020;x+=20)pts.push([x,300+layer*52+Math.sin(x*.007+layer)*40+Math.cos(x*.019+layer)*13]);pts.push([1000,600]);poly(pts,C[2+Math.min(layer,2)]);}
 // Windowed houses establish a lived-in landscape, with all bases on the same ridge.
 for(let j=0;j<15;j++){const x=j*79-40,y=410+Math.sin(x*.009)*14,h=30+j%4*13;box(x,y-h,50,h,C[3]);poly([[x-5,y-h],[x+25,y-h-23],[x+55,y-h]],C[4]);for(let k=0;k<3;k++)box(x+7+k*13,y-h+12,7,10,mono?'#ddd':'#dfcaa1');}
 if(skin==='watercolor'){g.globalAlpha=.09;for(let j=0;j<80;j++)disk(j*173%1000,j*97%600,4+j%9,C[4]);g.globalAlpha=1;}
}
// A near terrace gives depth and a stable place for foreground objects.
poly([[0,470],[1000,490],[1000,600],[0,600]],mono?'#e3e2db':'#344550');for(let j=0;j<13;j++)line(j*100-150,470,j*155-300,600,mono?'#bbb':'#a1abb028');line(0,465,1000,485,mono?'#252727':'#c3c9be',4);
for(const x of [45,930]){box(x,345,7,143,C[4]);line(x,345,x+55,345,C[4],5);}line(0,357,1000,377,C[4],5);
if(!['blueprint','bauhaus','artdeco'].includes(skin)){for(let j=0;j<22;j++){const x=j<11?j*9:920+(j-11)*8,y=535-j%4*10;const bend=Math.sin(t*.9+j)*6;line(x,y,x+bend,y-45-j%3*13,mono?'#333':'#829687',2);disk(x+bend,y-45-j%3*13,4,mono?'#777':j%2?'#dfb0bc':'#e7d3a1');}}
// The paper glider enters from outside the frame and follows a continuous flight path.
const u=(t*.055)%1,x=-150+1300*u,y=230-60*Math.sin(u*Math.PI*2);g.save();g.translate(x,y);g.rotate(-.2*Math.cos(u*Math.PI*2));poly([[-32,-10],[42,0],[-22,15],[-8,0]],mono?'#fff':'#eee5d3');line(-32,-10,-8,0,mono?'#111':'#807d75');line(-8,0,42,0,mono?'#111':'#807d75');g.restore();
if(winter)for(let j=0;j<65;j++)disk((j*137+t*3)%1000,(j*83+t*20)%600,1+j%3*.5,mono?'#aaa':'#edf2f3');
if(mono){g.globalAlpha=.13;for(let y=0;y<470;y+=7)for(let x=y%14;x<1000;x+=7){if((x+y)%29<15)disk(x,y,.6,'#111');}g.globalAlpha=1;}
g.restore();}
window.LiveWorld={draw};})();
