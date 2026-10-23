const $=s=>document.querySelector(s);
$('#skillGrid').innerHTML=SKILLS.map(([t,l])=>`<div class="skill"><h3>${t}</h3><ul>${l.map(i=>`<li>${i}</li>`).join('')}</ul></div>`).join('');
$('#projectGrid').innerHTML=PROJECTS.map(p=>{const im=p.images[0];
 return `<article class="card"><button class="card-btn" data-id="${p.id}" aria-label="Open details for ${p.name}">
 <div class="shot">${im?`<img src="${im[0]}" alt="${im[1]}" loading="lazy">`:`<div class="ph">No screenshot supplied yet</div>`}</div>
 <div class="body"><h3>${p.name}</h3><p>${p.short}</p><div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><span class="more">View project details${p.images.length>1?` (${p.images.length} screenshots)`:''}</span></div></button></article>`}).join('');
const dlg=$('#projectDialog'), box=$('#dialogBody');
function open(id){const p=PROJECTS.find(x=>x.id===id);let cur=0;
 const draw=()=>{const im=p.images[cur];
  box.innerHTML=`<h2 id="dlgTitle">${p.name}</h2>
  ${im?`<figure class="fig"><img src="${im[0]}" alt="${im[1]}"><figcaption>${im[2]}</figcaption></figure>
  ${p.images.length>1?`<div class="thumbs">${p.images.map((x,i)=>`<button class="${i===cur?'on':''}" data-i="${i}" aria-label="Show screenshot ${i+1}"><img src="${x[0]}" alt=""></button>`).join('')}</div>`:''}`:`<div class="ph big">No screenshot supplied yet</div>`}
  <h3>Problem</h3><p>${p.problem}</p><h3>Key features</h3><ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
  <h3>Technologies</h3><div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
  <h3>My contribution</h3><p>${p.contribution}</p><p class="note">${p.note}</p>`;
  box.querySelectorAll('.thumbs button').forEach(b=>b.onclick=()=>{cur=+b.dataset.i;draw();});};
 draw();dlg.showModal();}
document.querySelectorAll('.card-btn').forEach(b=>b.onclick=()=>open(b.dataset.id));
$('#closeDlg').onclick=()=>dlg.close();
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});
const nav=$('#nav'),tg=$('#menuBtn');
tg.onclick=()=>{const o=nav.classList.toggle('open');tg.setAttribute('aria-expanded',o);};
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');tg.setAttribute('aria-expanded',false);});
