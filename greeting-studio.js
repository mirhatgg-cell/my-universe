(()=>{'use strict';
// Each skin has its own composition, material and typography; the occasion supplies the accent.
const skins=[
['cinematic','Кинематограф','Широкий кадр, тёмное стекло и постановочный свет'],
['realism','Реализм','Объёмные сцены — геометрия, материалы и тени. 2D и бумага пока сохраняют исходную технику.'],
['anime','Аниме','Небесный свет, яркие контуры и воздушные панели'],
['comic','Комикс','Толстый контур, полутоновые точки и реплики'],
['manga','Манга','Монохром, диагональные панели и штриховка'],
['manhwa','Манхва','Вертикальные цветные эпизоды и длинные световые переходы'],
['postcard','Открытка','Почтовая рамка, марки и личная подпись'],
['book','Книга','Разворот, корешок и крупная буквица'],
['artdeco','Ар-деко','Золотая геометрия, ступенчатые рамки и симметрия'],
['nouveau','Ар-нуво','Растительные линии и округлые витражные окна'],
['cyberpunk','Киберпанк','Тёмный город, неоновые кромки и приборные панели'],
['solarpunk','Соларпанк','Солнечные сады, тёплый свет и органические формы'],
['synthwave','Синтвейв','Закатные полосы, сетка горизонта и розовый неон'],
['spaceage','Космическое ретро','Иллюминаторы, орбитальные линии и хром'],
['noir','Нуар','Чёрно-белый свет, полосы жалюзи и сдержанный кадр'],
['watercolor','Акварель','Полупрозрачные цветовые пятна и мягкие края'],
['ukiyoe','Укиё-э','Волны, плоские силуэты и красный печатный акцент'],
['pixel','Пиксельный мир','Ступенчатые рамки и интерфейс приключения'],
['glass','Световое стекло','Прозрачные слои и цветные преломления'],
['aurora','Полярное сияние','Глубокая ночь и ленты мягкого свечения'],
['blueprint','Чертёж мечты','Координатная сетка, тонкие линии и подписи'],
['editorial','Журнал','Крупная типографика, колонки и редакционная сетка'],
['bauhaus','Баухаус','Круг, квадрат, основные цвета и строгая композиция'],
['memphis','Мемфис','Игривые узоры, контрастные блоки и цветные тени'],
['collage','Коллаж','Накладные карточки, ленты и смещённые края'],
['stainedglass','Витраж','Цветные стеклянные грани и арочные рамки'],
['fantasy','Звёздная сказка','Светящиеся арки, глубокий космос и волшебные орнаменты']
]; // Seven requested directions + twenty additional choices.
const textFields=[['headline','Главный заголовок',140],['intro','Текст под заголовком',500],['body','Полный текст письма (заменяет автоматический)',3500],['closing','Заключение',500],['reason1','Первая тёплая мысль',300],['reason2','Вторая тёплая мысль',300],['reason3','Третья тёплая мысль',300],['wishes','Пожелания — каждое с новой строки',900]];
const clean=(v,n)=>typeof v==='string'?[...v.trim()].slice(0,n).join(''):'';
function validId(id){if(window.PersonalScenes?.is(id))return true;const m=typeof id==='string'&&id.match(/^pack:([a-z0-9]+):([0-2]):([0-2])$/);return !!(m&&AnimationArt.catalog[m[1]]);}
function normalize(v={}){return {skin:skins.some(x=>x[0]===v.skin)?v.skin:'fantasy',customScenes:v.customScenes===true,selectedScenes:Array.isArray(v.selectedScenes)?v.selectedScenes.filter(x=>x&&validId(x.id)).slice(0,9).map(x=>({id:x.id,title:clean(x.title,120),text:clean(x.text,400),personal:{phrase:clean(x.personal?.phrase,100),memory:clean(x.personal?.memory,220),ending:clean(x.personal?.ending,100),look:PersonalScenes.looks.some(v=>v[0]===x.personal?.look)?x.personal.look:'auto'}})):[],texts:Object.fromEntries(textFields.map(([id,,max])=>[id,clean(v.texts?.[id],max)]))};}
const previewDots=Array.from({length:1000},(_,i)=>({a:i*2.399,s:(i*47%997)/997,r:Math.sqrt((i*79%991)/991),z:0,x:i*43%1000,y:i*67%600}));
let panel,rows,mode,skin,skinNote,textInputs={},current={selectedScenes:[]};
const $=id=>document.getElementById(id);
function cfg(){return {holiday:$('holiday-input')?.value||'just',tone:$('tone-input')?.value||'friend',journey:$('journey-input')?.value||'pack_0'};}
function notify(){document.dispatchEvent(new Event('studio-change'));$('form')?.dispatchEvent(new Event('input',{bubbles:true}));}
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n;}
function label(text,node){const n=el('label','',text);n.append(node);return n;}
function read(){if(!panel)return current;return normalize({skin:skin.value,customScenes:mode.checked,selectedScenes:current.selectedScenes,texts:Object.fromEntries(Object.entries(textInputs).map(([k,n])=>[k,n.value]))});}
function defaultScenes(){return (AnimationPacks.select(cfg())||['pack:just:0:0','pack:just:0:1','pack:just:0:2']).map(id=>({id,title:'',text:''}));}
function drawRows(){rows.replaceChildren();rows.hidden=!mode.checked;const count=el('p','form-tip',current.selectedScenes.length+' / 9 анимаций. Порядок здесь — порядок в поздравлении.');rows.append(count);
current.selectedScenes.forEach((item,i)=>{const row=el('article','scene-choice'),top=el('div','scene-choice-top'),number=el('strong','','Анимация '+(i+1));top.append(number);
for(const [caption,delta] of [['↑',-1],['↓',1]]){const b=el('button','text-button',caption);b.type='button';b.disabled=i+delta<0||i+delta>=current.selectedScenes.length;b.setAttribute('aria-label',caption==='↑'?'Поднять анимацию':'Опустить анимацию');b.onclick=()=>{[current.selectedScenes[i],current.selectedScenes[i+delta]]=[current.selectedScenes[i+delta],current.selectedScenes[i]];drawRows();notify();};top.append(b);}
const remove=el('button','text-button','Удалить');remove.type='button';remove.onclick=()=>{current.selectedScenes.splice(i,1);drawRows();notify();};top.append(remove);row.append(top);
const filter=el('input');filter.type='search';filter.placeholder='Найти по названию, теме или стилю';filter.setAttribute('aria-label','Найти анимацию '+(i+1));const select=el('select');select.setAttribute('aria-label','Выбрать анимацию '+(i+1));
const all=Object.entries(AnimationArt.catalog).flatMap(([topic,packs])=>packs.flatMap((_,p)=>[0,1,2].map(style=>{const id=`pack:${topic}:${p}:${style}`;return {id,text:(UniverseMessages.occasions[topic]?.name||({friendship:'Дружба',custom:'Особый повод',friendbirthday:'День рождения друга'}[topic])||topic)+' · '+['3D','2D','Бумага'][style]+' · '+AnimationPacks.info(id)[0]};})));
for(let n=0;n<PersonalScenes.effects.length;n++)all.push({id:`pack:personal:${n}:1`,text:'Личная анимация · '+PersonalScenes.effects[n][0]});
function options(){select.replaceChildren();for(const x of all.filter(x=>x.id===item.id||x.text.toLocaleLowerCase('ru').includes(filter.value.toLocaleLowerCase('ru')))){const o=el('option','',x.text);o.value=x.id;select.append(o);}select.value=item.id;}
filter.oninput=options;options();select.onchange=()=>{item.id=select.value;refresh();notify();};row.append(filter,select);
const canvas=el('canvas','choice-preview');canvas.width=500;canvas.height=300;canvas.setAttribute('aria-hidden','true');row.append(canvas);
const title=el('input');title.maxLength=120;title.value=item.title;const text=el('textarea');text.maxLength=400;text.rows=2;text.value=item.text;title.oninput=()=>{item.title=title.value;notify();};text.oninput=()=>{item.text=text.value;notify();};row.append(label('Название сцены',title),label('Твои слова к этой анимации',text));
item.personal??={};const personalEditor=el('details','personal-editor');personalEditor.append(el('summary','','Слова внутри анимации и ваша история'));personalEditor.append(el('p','form-tip','{имя} подставит имя получателя. Пустые поля используют текст выбранного праздника. В обычных сценах слова появляются в финале.'));
for(const [key,caption,max] of [['phrase','Главная фраза',100],['memory','Ваше воспоминание / важные слова',220],['ending','Последние слова / подпись',100]]){const input=el(key==='memory'?'textarea':'input');input.maxLength=max;input.value=item.personal[key]||'';input.placeholder=key==='phrase'?PersonalScenes.defaults(cfg().holiday)[0]:key==='memory'?'Например: помнишь, как мы встретили рассвет у реки?':'С теплом, от меня';input.oninput=()=>{item.personal[key]=input.value;refresh();notify();};personalEditor.append(label(caption,input));}
const technique=el('select');for(const [value,caption] of PersonalScenes.looks){const o=el('option','',caption);o.value=value;technique.append(o);}technique.value=item.personal.look||'auto';technique.onchange=()=>{item.personal.look=technique.value;refresh();notify();};personalEditor.append(label('Материал личной анимации',technique));row.append(personalEditor);
function refresh(){const info=AnimationPacks.info(item.id);title.placeholder=info[0];text.placeholder=info[1];const g=canvas.getContext('2d');if(g){g.setTransform(.5,0,0,.5,0,0);AnimationPacks.draw({ctx:g,type:item.id,x:0,y:0,dots:previewDots,personal:item.personal,holiday:cfg().holiday,sender:$('from-input')?.value||'',name:$('to-input')?.value||'Для тебя'},AnimationPacks.duration(item.id)*.65);}}
refresh();rows.append(row);});
const add=el('button','secondary','＋ Добавить анимацию');add.type='button';add.disabled=current.selectedScenes.length>=9;add.onclick=()=>{current.selectedScenes.push({id:defaultScenes()[0].id,title:'',text:''});drawRows();notify();};rows.append(add);const personalAdd=el('button','primary','＋ Личная анимация с твоими словами');personalAdd.type='button';personalAdd.disabled=current.selectedScenes.length>=9;personalAdd.onclick=()=>{current.selectedScenes.push({id:`pack:personal:${PersonalScenes.defaults(cfg().holiday)[2]}:1`,title:'',text:'',personal:{}});drawRows();notify();};rows.append(personalAdd);}
function setup(){if(panel||!$('form'))return;panel=el('section','greeting-studio');panel.id='greeting-studio';panel.append(el('h3','','Твоя режиссура'),el('p','form-tip','Выбери готовые сцены или добавь личные: неон, созвездие, письмо, светлячки и другие. Фразы и воспоминания сохранятся в личной ссылке.'));
skin=el('select');skin.id='skin-input';for(const [id,name] of skins){const o=el('option','',name);o.value=id;skin.append(o);}skin.value='fantasy';skinNote=el('p','form-tip');const showSkin=()=>{skinNote.textContent=skins.find(x=>x[0]===skin.value)[2];document.body.dataset.skin=skin.value;notify();};skin.onchange=showSkin;panel.append(label('Оформление всего поздравления',skin),skinNote);skinNote.textContent=skins.at(-1)[2];
const gallery=el('details','skin-gallery');gallery.append(el('summary','','Посмотреть все 27 оформлений'));const grid=el('div','skin-grid');for(const [id,name,description] of skins){const b=el('button','skin-tile');b.type='button';b.dataset.look=id;b.title=description;const mark=el('span','skin-sample','Aa');mark.setAttribute('aria-hidden','true');b.append(mark,el('strong','',name));b.onclick=()=>{skin.value=id;showSkin();};grid.append(b);}gallery.append(grid);panel.append(gallery);
mode=el('input');mode.type='checkbox';mode.id='custom-scenes';panel.append(label(' Выбирать анимации самостоятельно',mode));rows=el('div','scene-choices');panel.append(rows);mode.onchange=()=>{if(mode.checked&&!current.selectedScenes.length)current.selectedScenes=defaultScenes();drawRows();notify();};
const copy=el('button','secondary','Взять тексты из предпросмотра');copy.type='button';copy.onclick=()=>{if(document.querySelector('main').hidden){$('status').textContent='Сначала укажи имена и нажми «Посмотреть глазами получателя».';return;}for(const [key,id] of [['headline','headline'],['intro','intro'],['closing','closing'],['reason1','reason1'],['reason2','reason2'],['reason3','reason3']])textInputs[key].value=$(id).textContent;textInputs.body.value=[...$('letter-body').querySelectorAll('p')].map(p=>p.textContent).join('\n\n');textInputs.wishes.value=[...document.querySelectorAll('.wish-copy li')].map(p=>p.textContent).join('\n');notify();};
const texts=el('details','text-editor');texts.append(el('summary','','Изменить тексты поздравления'));texts.append(copy);texts.append(el('p','form-tip','Пустое поле оставляет тематический текст. Полный текст письма заменяет его содержимое целиком.'));
for(const [id,name,max] of textFields){const n=el(id==='headline'?'input':'textarea');n.id='custom-'+id;n.maxLength=max;if(n.tagName==='TEXTAREA')n.rows=id==='body'?7:3;textInputs[id]=n;texts.append(label(name,n));}
panel.append(texts);$('share').parentNode.insertBefore(panel,$('form').querySelector('button[type="submit"]'));drawRows();}
function fill(v){current=normalize(v);if(!panel)return;skin.value=current.skin;mode.checked=current.customScenes;skinNote.textContent=skins.find(x=>x[0]===skin.value)[2];for(const [k,n] of Object.entries(textInputs))n.value=current.texts[k]||'';drawRows();document.body.dataset.skin=current.skin;}
function apply(c){document.body.dataset.skin=c.skin||'fantasy';const t=c.texts||{};for(const [key,id] of [['headline','headline'],['intro','intro'],['closing','closing'],['reason1','reason1'],['reason2','reason2'],['reason3','reason3']])if(t[key])$(id).textContent=t[key];if(t.body){$('letter-body').replaceChildren(...t.body.split(/\n\s*\n|\n/).filter(Boolean).map(text=>{const p=el('p','',text);p.dataset.scene=c.scene;return p;}));}if(t.wishes){const list=document.querySelector('.wish-copy ul');list?.replaceChildren(...t.wishes.split('\n').filter(x=>x.trim()).map(x=>el('li','',x.trim())));}}
// Spatial navigation for remotes, without taking arrow keys away from editors.
document.addEventListener('keydown',e=>{if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key))return;const active=document.activeElement;if(!active||!['BUTTON','A','SUMMARY'].includes(active.tagName))return;const scope=document.querySelector('.cinema-open')||document;const a=active.getBoundingClientRect(),ax=a.left+a.width/2,ay=a.top+a.height/2;let best=null,score=Infinity;for(const n of scope.querySelectorAll('button,a[href],input,select,textarea,summary')){if(n===active||n.disabled||n.closest('[hidden]')||!n.getClientRects().length)continue;const r=n.getBoundingClientRect(),dx=r.left+r.width/2-ax,dy=r.top+r.height/2-ay;const vertical=e.key==='ArrowUp'||e.key==='ArrowDown',along=vertical?dy:dx,cross=vertical?dx:dy,sign=e.key==='ArrowUp'||e.key==='ArrowLeft'?-1:1;if(along*sign<5)continue;const distance=Math.abs(along)+Math.abs(cross)*2.5;if(distance<score){score=distance;best=n;}}if(best){e.preventDefault();best.focus();best.scrollIntoView({block:'nearest',inline:'nearest'});}});
window.GreetingStudio={skins,textFields,normalize,read,fill,setup,apply,validId};
})();
