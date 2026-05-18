// ----- Countdown -----
(function(){
  const target = new Date('2026-07-11T09:00:00+05:30').getTime();
  const els = {
    days: document.querySelector('[data-cd="days"]'),
    hours: document.querySelector('[data-cd="hours"]'),
    mins: document.querySelector('[data-cd="mins"]'),
    secs: document.querySelector('[data-cd="secs"]')
  };
  function tick(){
    const now = Date.now();
    let diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000); diff -= d*86400000;
    const h = Math.floor(diff / 3600000); diff -= h*3600000;
    const m = Math.floor(diff / 60000); diff -= m*60000;
    const s = Math.floor(diff / 1000);
    const pad = n => String(n).padStart(2,'0');
    if(els.days) els.days.textContent = d;
    if(els.hours) els.hours.textContent = pad(h);
    if(els.mins) els.mins.textContent = pad(m);
    if(els.secs) els.secs.textContent = pad(s);
    if(target - now <= 0){
      document.querySelectorAll('.cd-box').forEach(b => b.classList.add('cd-zero'));
      return;
    }
    requestAnimationFrame(()=>{}); // smooth
  }
  tick();
  setInterval(tick, 1000);
})();

// ----- Nav scroll shadow -----
(function(){
  const nav = document.getElementById('nav');
  function onScroll(){
    if(window.scrollY > 8) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();

// ----- Mobile menu -----
(function(){
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', () => {
    const open = menu.style.display === 'block';
    menu.style.display = open ? 'none' : 'block';
    btn.setAttribute('aria-expanded', String(!open));
    btn.innerHTML = open ? '<i class="fa-solid fa-bars"></i>' : '<i class="fa-solid fa-xmark"></i>';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.style.display = 'none';
    btn.setAttribute('aria-expanded','false');
    btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }));
})();

// ----- Active nav highlight is now set server-side per page (class="active") -----

// ----- Reveal-on-scroll -----
(function(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

// ----- Program day tabs -----
(function(){
  const tabs = document.querySelectorAll('.day-tab');
  const days = { '1': document.getElementById('day1'), '2': document.getElementById('day2') };
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => { x.classList.remove('active'); x.setAttribute('aria-selected','false'); });
    t.classList.add('active'); t.setAttribute('aria-selected','true');
    Object.values(days).forEach(d => d.style.display = 'none');
    days[t.dataset.day].style.display = 'flex';
    // re-trigger reveal for newly visible
    days[t.dataset.day].classList.add('in');
  }));
})();

// ----- Submission form handler (mock Google Drive upload) -----
(function(){
  const form = document.getElementById('submitForm');
  if(!form) return;
  const fileInput = form.querySelector('#f-file');
  const drop = document.getElementById('fileDrop');
  const title = document.getElementById('fdTitle');
  const hint = document.getElementById('fdHint');
  const success = document.getElementById('formSuccess');

  function showFile(file){
    if(!file){ return; }
    if(file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')){
      title.textContent = 'PDF only - please choose a .pdf file';
      hint.textContent = 'Selected: ' + file.name;
      drop.classList.remove('has-file');
      return;
    }
    const mb = (file.size / (1024*1024)).toFixed(2);
    title.textContent = file.name;
    hint.textContent = 'Ready to submit (' + mb + ' MB PDF)';
    drop.classList.add('has-file');
  }

  fileInput.addEventListener('change', e => showFile(e.target.files[0]));
  ;['dragenter','dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('dragover'); }));
  ;['dragleave','drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('dragover'); }));
  drop.addEventListener('drop', e => {
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if(file){ fileInput.files = e.dataTransfer.files; showFile(file); }
  });
  drop.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); fileInput.click(); }
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if(!fileInput.files.length){
      drop.style.borderColor = 'var(--pink)';
      title.textContent = 'A PDF file is required';
      hint.textContent = 'Please attach a PDF before submitting';
      return;
    }
    // === Google Drive upload placeholder ===
    // Wire this to your Google Drive endpoint (e.g. a Google Apps Script Web App
    // with a doPost(e) function that writes the file to a Drive folder).
    // Example: const res = await fetch(YOUR_APPS_SCRIPT_URL, { method: 'POST', body: new FormData(form) });
    success.classList.add('show');
    form.querySelector('button[type=submit]').disabled = true;
    form.querySelector('button[type=submit]').innerHTML = '<i class="fa-solid fa-check"></i>Submitted';
  });
})();

// ----- Information page tabs -----
(function(){
  const tabs = document.querySelectorAll('.info-tab');
  if(!tabs.length) return;
  const panels = document.querySelectorAll('.info-panel');
  function activate(name){
    tabs.forEach(t => {
      const on = t.dataset.panel === name;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', String(on));
    });
    panels.forEach(p => p.classList.toggle('active', p.id === name));
    // Replay reveal
    document.querySelectorAll('.info-panel.active .reveal').forEach(el => el.classList.add('in'));
  }
  tabs.forEach(t => t.addEventListener('click', () => {
    activate(t.dataset.panel);
    history.replaceState(null, '', '#' + t.dataset.panel);
  }));
  // If URL has #venue / #accommodation / #adda, activate it on load
  const hash = (location.hash || '').replace('#','');
  if(hash && document.getElementById(hash) && document.getElementById(hash).classList.contains('info-panel')){
    activate(hash);
  }
})();


// ----- Neural network canvas animation -----
(function(){
  function initNeural(canvas){
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    function resize(){
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const COLORS = ['#B8327F','#D2691E','#8B5CF6','#E89B45','#A855F7','#EC4899'];
    const count = Math.min(40, Math.max(20, Math.floor(canvas.width / 36)));

    const nodes = Array.from({length: count}, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 4 + 2.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      ox: Math.random() * Math.PI * 2,
      oy: Math.random() * Math.PI * 2,
    }));

    let t = 0, raf;
    const MAX_DIST = 170;

    function draw(){
      raf = requestAnimationFrame(draw);
      t += 0.006;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      nodes.forEach(n => {
        n.x += n.vx + Math.sin(t + n.ox) * 0.18;
        n.y += n.vy + Math.cos(t + n.oy) * 0.18;
        if(n.x < -30) n.x = W + 30;
        if(n.x > W + 30) n.x = -30;
        if(n.y < -30) n.y = H + 30;
        if(n.y > H + 30) n.y = -30;
      });

      for(let i = 0; i < nodes.length; i++){
        for(let j = i + 1; j < nodes.length; j++){
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if(d < MAX_DIST){
            const a = (1 - d / MAX_DIST) * 0.38;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = 'rgba(210,180,255,' + a + ')';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        // outer glow
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3.5);
        g.addColorStop(0, n.color + 'AA');
        g.addColorStop(1, n.color + '00');
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        // core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
      });
    }

    draw();

    // Pause when off-screen
    const io = new IntersectionObserver(([e]) => {
      if(e.isIntersecting) draw();
      else cancelAnimationFrame(raf);
    });
    io.observe(canvas);
  }

  // Init all hero canvases
  document.querySelectorAll('#heroCanvas').forEach(c => initNeural(c));
})();

// ----- Contact form success detection -----
(function(){
  const s = document.getElementById('contactSuccess');
  if(!s) return;
  if(location.search.includes('sent=1') || location.hash === '#sent'){
    s.classList.add('show');
    window.scrollTo({top: s.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth'});
  }
})();
