// nav active state + mobile toggle
const links=document.querySelectorAll('.navlinks a');
const toggle=document.getElementById('navtoggle');
toggle.addEventListener('click',()=>{
  const nl=document.getElementById('navlinks');
  nl.style.display=nl.style.display==='flex'?'none':'flex';
  nl.style.cssText+=';position:absolute;top:64px;left:0;right:0;flex-direction:column;background:#080b09;padding:10px;border-bottom:1px solid var(--border)';
});
const secs=document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{
  let cur='';
  secs.forEach(s=>{ if(window.scrollY>=s.offsetTop-90) cur=s.id; });
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
});

// data analytics tabs + pipeline sync
document.querySelectorAll('#tabbar .tabbtn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('#tabbar .tabbtn').forEach(b=>b.classList.remove('on'));
    document.querySelectorAll('.tabpanel').forEach(p=>p.classList.remove('on'));
    document.querySelectorAll('#pipeline .pl-step').forEach(p=>p.classList.remove('on'));
    btn.classList.add('on');
    const t=btn.dataset.t;
    document.querySelector('.tabpanel[data-p="'+t+'"]').classList.add('on');
    const step=document.querySelector('#pipeline .pl-step[data-t="'+t+'"]');
    if(step) step.classList.add('on');
  });
});
document.querySelectorAll('#pipeline .pl-step').forEach(step=>{
  step.addEventListener('click',()=>{
    const t=step.dataset.t;
    const tb=document.querySelector('#tabbar .tabbtn[data-t="'+t+'"]');
    if(tb) tb.click();
  });
});

// ML project nav
document.querySelectorAll('#mlnav button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('#mlnav button').forEach(b=>b.classList.remove('on'));
    document.querySelectorAll('.mlpanel').forEach(p=>p.classList.remove('on'));
    btn.classList.add('on');
    document.querySelector('.mlpanel[data-mp="'+btn.dataset.m+'"]').classList.add('on');
  });
});