/* Scenic backdrops: all motion uses the scene clock, so pause and seek stay exact. */
(()=>{'use strict';
const settings={
just:['garden','#193b43','#638477','#ffe2a2'],friendship:['city','#172441','#555c82','#ffd99e'],custom:['gallery','#272341','#716486','#e6c7ff'],birthday:['party','#412744','#896277','#ffd788'],friendbirthday:['camp','#162c43','#516b73','#efc48f'],march:['garden','#294846','#879b86','#ffd1d8'],romance:['city','#302b51','#976c89','#ffc8af'],may7:['mountain','#233c50','#819a9b','#f5d589'],newyear:['winter','#112e45','#527686','#ffe0a5'],september:['study','#283d48','#758d88','#ffe0a2'],summer:['sea','#245c73','#95c8bd','#fff0b8'],memorial:['quiet','#283b44','#7c9192','#efe6c9'],newborn:['nursery','#394060','#9b9caf','#f9dbb2'],nauryz:['garden','#194d4b','#7fa28c','#f4d287'],anniversary:['gallery','#49323b','#ae8b77','#ffe1a8'],halloween:['haunted','#211d3c','#625c78','#ffb86b'],wedding:['garden','#455363','#a6b5ae','#ffe9c5'],graduation:['study','#283950','#7e92a1','#f8d69b'],housewarming:['room','#493d43','#aa8d7a','#ffdfa5'],success:['gallery','#203c50','#73928f','#ffdc8b'],recovery:['garden','#365351','#a0b5a0','#f4e9b7']};
// Locations are selected for the action, separately for each visual style.
const places={
just:[['room','greenhouse','room'],['garden','garden','workshop']],
friendship:[['workshop','observatory','workshop'],['garden','city','theatre']],
custom:[['gallery','library','gallery'],['workshop','workshop','garden']],
birthday:[['party','observatory','room'],['city','theatre','party']],
friendbirthday:[['room','camp','city'],['library','camp','theatre']],
march:[['greenhouse','greenhouse','gallery'],['greenhouse','theatre','pavilion']],
romance:[['gallery','room','room'],['city','workshop','sea']],
may7:[['gallery','mountain','gallery'],['mountain','workshop','city']],
newyear:[['winter','winter','room'],['winter','workshop','winter']],
september:[['study','observatory','study'],['study','workshop','library']],
summer:[['sea','sea','garden'],['sea','mountain','pavilion']],
memorial:[['quiet','quiet','quiet'],['quiet','quiet','sea']],
newborn:[['nursery','nursery','nursery'],['garden','nursery','nursery']],
nauryz:[['pavilion','greenhouse','pavilion'],['workshop','greenhouse','garden']],
anniversary:[['gallery','room','gallery'],['library','gallery','garden']],
halloween:[['haunted','haunted','room'],['haunted','city','haunted']],
wedding:[['gallery','pavilion','party'],['pavilion','garden','party']],
graduation:[['study','library','observatory'],['library','workshop','mountain']],
housewarming:[['room','room','garden'],['workshop','room','greenhouse']],
success:[['gallery','mountain','theatre'],['theatre','workshop','theatre']],
recovery:[['greenhouse','room','garden'],['garden','greenhouse','garden']]};
function draw(g,t,topic,index,style){const [defaultKind,top,low,accent]=settings[topic]||settings.just,paper=style==='paper',kind=style==='drawing'?defaultKind:(places[topic]?.[paper?1:0]?.[index]||defaultKind);g.save();g.globalAlpha=1;g.shadowBlur=0;g.shadowOffsetY=0;
const bg=g.createLinearGradient(0,0,0,600);bg.addColorStop(0,paper?'#eee6d8':top);bg.addColorStop(1,paper?'#d5d4bd':low);g.fillStyle=bg;g.fillRect(0,0,1000,600);
const disk=(x,y,r,c,a=1)=>{g.globalAlpha=a;g.fillStyle=c;g.beginPath();g.arc(x,y,r,0,Math.PI*2);g.fill();};
const line=(x,y,X,Y,c,w=1,a=1)=>{g.globalAlpha=a;g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(x,y);g.lineTo(X,Y);g.stroke();};
const poly=(pts,c,a=1)=>{g.globalAlpha=a;g.fillStyle=c;g.beginPath();pts.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fill();};
const ink=paper?'#7a968a':low;const sunX=770-index*45,ownsSun=paper&&['just:1','romance:2','summer:0','memorial:2','halloween:1'].includes(topic+':'+index);
const glow=g.createRadialGradient(sunX,115,0,sunX,115,260);glow.addColorStop(0,paper?'#fff7db99':accent+'42');glow.addColorStop(1,accent+'00');g.globalAlpha=1;g.fillStyle=glow;g.fillRect(0,0,1000,600);
if(['garden','sea','winter','mountain','camp','quiet'].includes(kind)){
 if(!ownsSun)disk(sunX,110,32,accent,paper?.45:.65);
 for(let layer=0;layer<3;layer++){const pts=[[0,500]];for(let x=0;x<=1000;x+=25)pts.push([x,320+layer*43+28*Math.sin(x*.006+index+layer)+15*Math.cos(x*.013+layer)]);pts.push([1000,600],[0,600]);poly(pts,ink,.12+layer*.08);}
}
if(['city','haunted'].includes(kind)){
 if(style!=='drawing'&&!ownsSun)disk(sunX,100,35,accent,.65);
 for(let j=0;j<19;j++){const x=j*58-22,h=65+(j*43%130);g.globalAlpha=paper?.16:.32;g.fillStyle=paper?'#7c898c':'#122337';g.fillRect(x,380-h,49,h);for(let k=0;k<3;k++)for(let r=0;r<Math.floor(h/25)-1;r++){g.fillStyle=accent;g.globalAlpha=(j+k+r)%3===0?.22:.06;g.fillRect(x+8+k*13,390-h+r*23,5,9);}}
}
if(['gallery','room','nursery','study'].includes(kind)){
 for(const x of [48,817]){g.globalAlpha=paper?.14:.19;g.fillStyle=accent;g.fillRect(x,76,135,228);line(x+67,76,x+67,304,ink,5,.35);line(x,178,x+135,178,ink,5,.35);poly([[x,304],[x+135,304],[x+250,505],[x+65,505]],accent,.055);}
 line(0,475,1000,475,accent,1,.18);
 for(let j=0;j<11;j++)line(j*100,475,500+(j*100-500)*1.5,600,accent,1,.07);
 if(kind==='study')for(let j=0;j<7;j++){g.globalAlpha=.3;g.fillStyle=j%2?accent:ink;g.fillRect(27+j*17,344-(j%3)*9,12,63+(j%3)*9);} 
}
if(['party','city','gallery'].includes(kind)&&topic!=='memorial'){
 g.beginPath();g.moveTo(0,34);g.quadraticCurveTo(500,150,1000,34);g.globalAlpha=.3;g.strokeStyle=accent;g.lineWidth=1.5;g.stroke();
 for(let j=0;j<16;j++){const x=25+j*64,y=34+116*(x/1000)*(1-x/1000);disk(x,y,3.5,accent,.55+.12*Math.sin(t*1.2+j));if(kind==='party')poly([[x-10,y+5],[x+10,y+5],[x+Math.sin(t+j)*3,y+25]],j%2?accent:'#e9abb5',.4);}
}
if(['garden','camp','winter','mountain'].includes(kind))for(const side of [0,1])for(let j=0;j<3;j++){
 const x=side?975-j*29:25+j*29,h=100+j*35,base=470;line(x,base,x,base-h,ink,4,.4);
 if(kind==='winter'||kind==='camp'||kind==='mountain')poly([[x-37,base-15],[x,base-h],[x+37,base-15]],ink,.33);
 else {for(let k=0;k<5;k++){const y=base-h+k*24,dx=(k%2?1:-1)*(24+Math.sin(t*.7+k)*2);g.save();g.translate(x+dx/2,y);g.rotate(dx>0?-.5:.5);g.globalAlpha=.24;g.fillStyle=ink;g.beginPath();g.ellipse(0,0,22,9,0,0,Math.PI*2);g.fill();g.restore();}}
}
if(kind==='sea')for(let j=0;j<8;j++){const y=340+j*18;line(25,y,160+18*Math.sin(t*.6+j),y,accent,2,.15);line(840,y+6,975,y+6,accent,2,.15);}
if(kind==='nursery'){for(let j=0;j<5;j++){const x=100+j*195;line(x,0,x,58+j%2*25,accent,1,.25);disk(x,65+j%2*25,8,accent,.25);}}
if(topic==='nauryz')for(const x of [20,980])for(let j=0;j<13;j++)poly([[x,20+j*39],[x+10,34+j*39],[x,48+j*39],[x-10,34+j*39]],accent,.3);
if(kind==='winter')for(let j=0;j<55;j++){const x=(j*137+Math.sin(t*.4+j)*9)%1000,y=(j*79+t*(9+j%5))%520;disk(x,y,1+j%3*.4,'#f2f7fa',.25);}
// Bespoke sets keep the center clear for the existing choreography.
if(kind==='observatory'){
 for(let j=0;j<45;j++)disk(j*173%1000,35+j*71%270,1+(j%3)*.5,accent,.2+.15*Math.sin(t*.4+j)**2);
 for(let k=0;k<2;k++){g.save();g.translate(k?850:130,150);g.rotate(k?-.4:.3);g.beginPath();g.ellipse(0,0,125,75,0,0,Math.PI*2);g.strokeStyle=accent;g.globalAlpha=.16;g.lineWidth=1;g.stroke();g.restore();}
 const points=[[35,85],[95,125],[135,60],[198,145],[245,105]];for(let j=1;j<points.length;j++)line(...points[j-1],...points[j],accent,1,.2);for(const pt of points)disk(...pt,3,accent,.5);
}
if(kind==='theatre'){
 for(const side of [0,1]){const x=side?930:0;for(let j=0;j<7;j++){g.globalAlpha=.22+j%2*.13;g.fillStyle=paper?'#ae7a78':'#6f344f';g.fillRect(x+j*10,0,12,450-j*7);}}
 poly([[90,0],[150,0],[420,465],[30,465]],accent,.065);poly([[850,0],[910,0],[970,465],[580,465]],accent,.065);
 g.beginPath();g.moveTo(60,24);g.quadraticCurveTo(500,180,940,24);g.strokeStyle=accent;g.globalAlpha=.2;g.lineWidth=14;g.stroke();line(30,475,970,475,accent,2,.2);
}
if(kind==='greenhouse'||kind==='pavilion'){
 for(const x of [55,945])line(x,130,x,465,ink,7,.25);
 g.beginPath();g.moveTo(55,140);g.bezierCurveTo(55,-15,945,-15,945,140);g.strokeStyle=ink;g.lineWidth=5;g.globalAlpha=.25;g.stroke();
 if(kind==='greenhouse'){for(const x of [170,830])line(x,64,x,445,ink,2,.13);line(55,165,945,165,ink,2,.1);}
 for(const side of [0,1])for(let j=0;j<9;j++){const x=side?942-13*Math.sin(j):58+13*Math.sin(j),y=170+j*30;disk(x,y,10,ink,.17);if(j%3===0){disk(x+9,y-8,8,accent,.6);disk(x+12,y-6,2,paper?'#c88e75':'#e6b898',.6);}}
}
if(kind==='workshop'||kind==='library'){
 line(30,190,178,190,ink,6,.3);line(825,190,970,190,ink,6,.3);line(30,307,178,307,ink,6,.3);
 for(let j=0;j<8;j++){const x=36+j*18,h=40+j*13%36;g.globalAlpha=.24;g.fillStyle=j%2?accent:ink;g.fillRect(x,190-h,12,h);line(x+2,183,x+10,183,paper?'#f7edda':accent,1,.3);}
 if(kind==='workshop'){for(let j=0;j<4;j++){line(842+j*22,138,851+j*22,181,ink,4,.35);disk(842+j*22,133,5,accent,.5);}poly([[56,295],[106,225],[156,295]],ink,.18);poly([[73,286],[106,245],[139,286]],paper?'#eee6d8':top,.8);}
 else for(let j=0;j<6;j++){g.globalAlpha=.23;g.fillStyle=j%2?accent:ink;g.fillRect(832+j*22,140-j%3*9,17,50+j%3*9);}
}
// Fine deterministic fibers give paper its material without an image download.
if(paper)for(let j=0;j<190;j++){const x=j*173%1000,y=j*97%600;line(x,y,x+4+j%8,y+1,'#766953',.5,.08);}
// Darken the edge, leave the action in the middle readable.
const vignette=g.createRadialGradient(500,280,210,500,280,660);vignette.addColorStop(0,'#10203300');vignette.addColorStop(1,paper?'#62574518':'#07122555');g.globalAlpha=1;g.fillStyle=vignette;g.fillRect(0,0,1000,600);
g.restore();}
window.SceneSetting={draw,settings,places};})();
