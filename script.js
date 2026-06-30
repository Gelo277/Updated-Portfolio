/* ============================================================
   MARK ANGELO AYAG — Portfolio Script
   ============================================================ */

// ── CUSTOM CURSOR ──
const dot  = document.getElementById('cdot');
const ring = document.getElementById('cring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});
(function loop() {
  rx += (mx - rx) * .13;
  ry += (my - ry) * .13;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(loop);
})();

// ── BARCODE DECORATION ──
const barHeights = [28,20,32,18,28,22,36,14,28,18,32,20,24,32,18,26,28,16,32,22,18,28,24,36,20,28];
document.getElementById('barcode').innerHTML =
  barHeights.map(h => `<div class="bar" style="height:${h}px"></div>`).join('');

// ── SCROLL REVEAL ──
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
  });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── SKILL BARS ──
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(b => b.style.width = b.dataset.w + '%');
      barObs.unobserve(e.target);
    }
  });
}, { threshold: .3 });
document.querySelectorAll('.skills-layout').forEach(el => barObs.observe(el));

// ── TIMELINE ITEMS ──
const tlObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .2 });
document.querySelectorAll('.tl-item').forEach(el => tlObs.observe(el));

// ══════════════════════════════════════════════════════
//  GALLERY DATA
//  To add real images: change img: null → img: 'Images/filename.png'
// ══════════════════════════════════════════════════════
const galleries = {
  logos: {
    label: 'Logo & Branding', title: 'Brand Identity Design',
    accent: '#e63329', bg: 'linear-gradient(135deg,#e63329,#a01f17)', icon: '✏️',
    items: [
      { name: 'Armadillo Logo',      tool: 'Adobe Illustrator', img: 'Images/Armadilo.png' },
      { name: 'Handgun Logo',        tool: 'Adobe Illustrator', img: 'Images/HANDGUN-LOGO-.png' },
      { name: 'Logo Design 2',       tool: 'Adobe Illustrator', img: 'Images/Logo-2.png' },
      { name: 'Coffee Logo',         tool: 'Adobe Illustrator', img: 'Images/logo-coffe.png' },
      { name: 'Main Logo',           tool: 'Adobe Illustrator', img: 'Images/LOGO.png' },
      { name: 'Logo 1',              tool: 'Adobe Illustrator', img: 'Images/Logo1.png' },
      { name: 'Logo 3',              tool: 'Adobe Illustrator', img: 'Images/Logo3-.png' },
      { name: 'Watch Logo',          tool: 'Adobe Illustrator', img: 'Images/watch logo.png' },
    ]
  },

  logos: {
    label: 'Logo & Branding', title: 'Brand Identity Design',
    accent: '#e63329', bg: 'linear-gradient(135deg,#e63329,#a01f17)', icon: '✏️',
    items: [
      { name: 'Armadillo Logo',      tool: 'Adobe Illustrator', img: 'Images/Armadilo.png' },
      { name: 'Handgun Logo',        tool: 'Adobe Illustrator', img: 'Images/HANDGUN-LOGO-.png' },
      { name: 'Logo Design 2',       tool: 'Adobe Illustrator', img: 'Images/Logo-2.png' },
      { name: 'Coffee Logo',         tool: 'Adobe Illustrator', img: 'Images/logo-coffe.png' },
      { name: 'Main Logo',           tool: 'Adobe Illustrator', img: 'Images/LOGO.png' },
      { name: 'Logo 1',              tool: 'Adobe Illustrator', img: 'Images/Logo1.png' },
      { name: 'Logo 3',              tool: 'Adobe Illustrator', img: 'Images/Logo3-.png' },
      { name: 'Watch Logo',          tool: 'Adobe Illustrator', img: 'Images/watch logo.png' },
    ]
  },
  posters: {
    label: 'Poster Design', title: 'Event & Promotional Posters',
    accent: '#1a1612', bg: 'linear-gradient(135deg,#1a1612,#3a3025)', icon: '🎭',
    items: [
      { name: 'Poster 2',            tool: 'Adobe Photoshop', img: 'Images/Poster 2.png' },
      { name: 'Poster 3',            tool: 'Adobe Photoshop', img: 'Images/Poster 3.png' },
      { name: 'Poster 4',            tool: 'Adobe Photoshop', img: 'Images/Poster 4.png' },
      { name: 'Ayag Poster 1',       tool: 'Adobe Photoshop', img: 'Images/AYAG-POSTERr-1.jpg' },
      { name: 'Menu Design',         tool: 'Adobe Photoshop', img: 'Images/Menu.png' },
      { name: 'Main Poster',         tool: 'Adobe Photoshop', img: 'Images/POSTER.png' },
      { name: 'Shoes Poster',        tool: 'Adobe Photoshop', img: 'Images/shoes.png' },
      { name: 'Watch Poster',        tool: 'Adobe Photoshop', img: 'Images/Watch poster.png' },
      { name: 'Nogie 2',             tool: 'Adobe Photoshop', img: 'Images/nogie 2.png' },
      { name: 'Announcement',        tool: 'Adobe Photoshop', img: 'Images/Announcement.png' },
      { name: 'Step by Step',        tool: 'Adobe Photoshop', img: 'Images/step by step.jpg' },
      { name: 'Gift Giving Program', tool: 'Adobe Photoshop', img: 'Images/Gift Giving Program.jpg' },
      { name: "Children's Day",      tool: 'Adobe Photoshop', img: 'Images/Children Day.jpg' },
      { name: "Austism Day",         tool: 'Adobe Photoshop', img: 'Images/Autism.png' },
    ]
  },
  packaging: {
    label: 'Packaging Design', title: 'Product Packaging',
    accent: '#8b6914', bg: 'linear-gradient(135deg,#8b6914,#5a4408)', icon: '📦',
    items: [
      { name: 'Juice Packaging',     tool: 'Adobe Photoshop', img: 'Images/juicepackaging.png' },
      { name: 'Juice Packaging 1',   tool: 'Adobe Photoshop', img: 'Images/juicepackaging1.png' },
      { name: 'Juice Packaging 2',   tool: 'Adobe Photoshop', img: 'Images/juicepackaging2.png' },
      { name: 'Juice Packaging 3',   tool: 'Adobe Photoshop', img: 'Images/juicepackaging3.png' },
      { name: 'Juice Packaging 4',   tool: 'Adobe Photoshop', img: 'Images/juicepackaging4.png' },
      { name: 'Coffee Packaging',    tool: 'Adobe Photoshop', img: 'Images/Packaging coffee.png' },
      { name: 'Tea Packaging',       tool: 'Adobe Photoshop', img: 'Images/packaging tea.png' },
      { name: 'Watch Packaging',     tool: 'Adobe Photoshop', img: 'Images/Packaging watches.png' },
      { name: 'UI Packaging',        tool: 'Adobe XD',        img: 'Images/PACKAGING UI.png' },
      { name: 'Soft Packaging',        tool: 'Adobe XD',        img: 'Images/FINAL SOAP.png' },
    ]
  },
  tarpaulin: {
    label: 'Tarpaulin & Flyers Design', title: 'Tarps & Flyers',
    accent: '#1a3a2a', bg: 'linear-gradient(135deg,#1a3a2a,#0d2018)', icon: '🖨️',
    items: [
      { name: 'Final Tarp 3x7',      tool: 'Adobe Photoshop', img: 'Images/Final Tarp 3x7.png' },
      { name: 'Invitation Card',     tool: 'Adobe Photshop',  img: 'Images/Invitation.jpg'},
      { name: 'Flyers',              tool: 'Adobe Photoshop', img: 'Images/Flyers.jpg'},

    ]
  },
  uiux: {
    label: 'UI & UX Design', title: 'Interface & Experience Design',
    accent: '#2c3e50', bg: 'linear-gradient(135deg,#2c3e50,#1a2535)', icon: '🖥️',
    items: [
      { name: 'UI Design',           tool: 'Adobe XD',     img: 'Images/UI.png' },
      { name: 'UX Design',           tool: 'Adobe XD',     img: 'Images/AYAG UX.jpg' },
      { name: 'Mobile UI',           tool: 'Adobe XD',     img: 'Images/ALL UI.png' },
      { name: 'Home Page / Contact', tool: 'Adobe XD',     img: 'Images/HOME PAGE - CONTACT US UX.png' },
    ]
  },
  tshirt: {
    label: 'T-Shirt Design', title: 'Apparel & Jersey Design',
    accent: '#3a2518', bg: 'linear-gradient(135deg,#3a2518,#1a0f08)', icon: '👕',
    items: [
      { name: 'T-Shirt Design',      tool: 'Adobe Photoshop', img: 'Images/Tshirt design.jpg' },
      { name: 'Jersey 1',            tool: 'Adobe Photoshop', img: 'Images/Jersey1.png' },
      { name: 'Jersey',              tool: 'Adobe Photoshop', img: 'Images/Jersey.jpg' },
      { name: 'T-Shirt',             tool: 'Adobe Photoshop', img: 'Images/Tshirt.png' },
      { name: 'OT T-Shirt Design',   tool: 'Adobe Photoshop', img: 'Images/OT TSHIRT DESIGN.png' },
    ]
  },
  booth: {
    label: 'Booth Design', title: 'Trade Booth & Display',
    accent: '#2a1a3a', bg: 'linear-gradient(135deg,#2a1a3a,#180d2d)', icon: '🏪',
    items: [
      { name: 'Poison Juice Booth',  tool: 'Adobe Photoshop/Sketch Up', img: 'Images/Poison juice booth.png' },
      { name: 'Puriflash Booth',     tool: 'Adobe Photoshop/Sketch Up', img: 'Images/Puriflash booth.png' },
    ]
  },
  animation: {
    label: '2D Animation', title: 'Animation Works',
    accent: '#7b2fff', bg: 'linear-gradient(135deg,#7b2fff,#4a1acc)', icon: '🎬',
    items: [
      // To add your link: paste your YouTube or Google Drive share URL in the link field
      // Thumbnail image is optional — leave thumb: null for a play-icon placeholder
      { name: 'Animation Project 1',        tool: 'Adobe Animate · NC II',  link: 'https://drive.google.com/file/d/1yLAAhQ2SrZFAGuUi1vcYPCXw0eahFuTf/view?usp=sharing',           thumb: null },
      { name: 'Animation Project 2',        tool: 'Adobe Animate · NC III', link: 'https://drive.google.com/file/d/19OGY-GjQO8qces3dwMmLFWS-CLqZkeuJ/view?usp=sharing',           thumb: null },
      { name: 'Character Jump on the Poop', tool: 'Adobe Animate · NC III', link: 'https://drive.google.com/file/d/1GXO3yAZ9EBtDgCLV_k8yfKpHDFYulh5K/view?usp=sharing',           thumb: null },
      { name: 'Digital',                    tool: 'Adobe Animate · NC III', link: 'https://drive.google.com/file/d/1p71vtgqnjRsjfy2eunlMVi7u0A7o55aB/view?usp=sharing',           thumb: null },
      { name: 'Frame-by-Frame Scene',       tool: 'Adobe Animate · NC III', link: 'https://drive.google.com/file/d/16qx7vNA-lQu0aguS3v0aVNLYMIRB5GWv/view?usp=sharing',           thumb: null },
    ]
  },
  video: {
    label: 'Video Editing', title: 'Video Production',
    accent: '#e6820a', bg: 'linear-gradient(135deg,#e6820a,#a35800)', icon: '🎞️',
    items: [
      // Paste your YouTube or Google Drive share link in the link field
      // Add a thumb image path if you have a thumbnail, otherwise leave thumb: null
      { name: 'School Music Video Project', tool: 'CapCut',                    link: 'https://drive.google.com/file/d/1xGE_GPiR3qCDj4C4kPD-rnraGxKmT7rj/view?usp=sharing',        thumb: null },
      { name: 'Conference Meeting',         tool: 'Adobe Premiere Pro',        link: 'https://drive.google.com/file/d/1f-nSHE4nZeu4ggT7AKu7A3_CBHjmZjci/view?usp=sharing',        thumb: null },
      { name: 'Event Highlights',           tool: 'CapCut · Premiere Pro',     link: 'https://drive.google.com/file/d/11uYSlJ57LSmF2RXKEGtpCGChvddwneWo/view?usp=drive_link',     thumb: null },
      { name: 'Reminder Video',             tool: 'Adobe After Effects',       link: 'https://drive.google.com/file/d/1DuP6lBkLF3-loqwFXGIs5wBiHWsT9aUd/view?usp=sharing',        thumb: null },
    ]
  },
  certs: {
    label: 'Certifications', title: 'TESDA National Certificates',
    accent: '#2d7a3a', bg: 'linear-gradient(135deg,#1a2a3a,#0d1f2d)', icon: '🏆',
    items: [
      { name: 'Animation NC II',                 tool: 'TESDA · Official Certificate', img: 'Certification/Animation Certification.png' },
      { name: 'Visual Graphics Design NC III',   tool: 'TESDA · Official Certificate', img: 'Certification/Visual Graphics Design Certification.png' },
      { name: '2D Animation NC III',             tool: 'TESDA · Official Certificate', img: 'Certification/2D Animation Certification.png' },
      { name: 'Computer System Servicing NC II', tool: 'TESDA · Official Certificate', img: 'Certification/coming soon.png' },
      { name: 'Web Development NC III',           tool: 'TESDA · Official Certificate', img: 'Certification/coming soon.png' },
    ]
  }
};

// ── GALLERY STATE ──
let currentGallery = null;
let currentLbIdx   = 0;

// ── OPEN GALLERY MODAL ──
function openGallery(key) {
  const g = galleries[key];
  currentGallery = key;

  document.getElementById('gmCatLabel').textContent = g.label;
  document.getElementById('gmTitle').textContent    = g.title;
  document.getElementById('gmCount').textContent    = `${g.items.length} piece${g.items.length !== 1 ? 's' : ''}`;
  document.getElementById('gmAccentBar').style.background = g.accent;

  buildGrid(g);

  const modal = document.getElementById('galleryModal');
  modal.classList.add('open');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

// ── BUILD THUMBNAIL GRID ──
function buildGrid(g) {
  const grid = document.getElementById('gmGrid');
  grid.innerHTML = g.items.map((item, i) => {
    const isLink = !!item.link;
    const ph = `<div class='gm-placeholder' style='background:${g.bg}'><span class='gm-ph-icon'>${isLink ? '▶' : g.icon}</span><span class='gm-ph-num'>${String(i+1).padStart(2,'0')}</span></div>`;
    let thumbContent;
    if (isLink) {
      thumbContent = item.thumb
        ? `<img src="${item.thumb}" alt="${item.name}" loading="lazy" onerror="this.parentElement.innerHTML='${ph.replace(/'/g,"\'")}'"><div class="gm-overlay"><span class="gm-zoom">▶</span></div><div class="gm-video-badge">▶ WATCH</div>`
        : `${ph}<div class="gm-overlay"><span class="gm-zoom">▶</span></div><div class="gm-video-badge">▶ WATCH</div>`;
    } else {
      thumbContent = `<img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.parentElement.innerHTML='${ph.replace(/'/g,"\'")}'"><div class="gm-overlay"><span class="gm-zoom">⊕</span></div>`;
    }
    const clickHandler = isLink
      ? `window.open('${item.link}','_blank')`
      : `openLightbox(${i})`;
    return `
      <div class="gm-thumb${isLink ? ' gm-thumb-link' : ''}" onclick="${clickHandler}" style="animation-delay:${i*45}ms">
        <div class="gm-thumb-img">${thumbContent}</div>
        <div class="gm-info">
          <div class="gm-name">${item.name}</div>
          <div class="gm-tool">${item.tool}</div>
        </div>
      </div>`;
  }).join('');

  requestAnimationFrame(() => {
    grid.querySelectorAll('.gm-thumb').forEach(el => el.classList.add('in'));
  });
}

// ── CLOSE GALLERY MODAL ──
function closeGallery() {
  closeLightbox();
  document.getElementById('galleryModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Click outside inner panel to close
function handleModalClick(e) {
  if (e.target === document.getElementById('galleryModal')) closeGallery();
}

// ── OPEN LIGHTBOX ──
function openLightbox(idx) {
  currentLbIdx = idx;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
}

// ── CLOSE LIGHTBOX ──
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

// ── RENDER LIGHTBOX CONTENT ──
function renderLightbox() {
  const g    = galleries[currentGallery];
  const item = g.items[currentLbIdx];
  // Skip lightbox for link items — they open directly in new tab
  if (item.link) return;
  const wrap = document.getElementById('lbImgWrap');
  wrap.innerHTML = `
    <img src="${item.img}" alt="${item.name}"
      onerror="this.parentElement.innerHTML='<div class=lb-placeholder style=background:${encodeURIComponent(g.bg)}><span class=lb-ph-icon>${g.icon}</span><div class=lb-ph-text>Image not found<br>${item.img}</div></div>'">
  `;
  document.getElementById('lbName').textContent    = item.name;
  document.getElementById('lbTool').textContent    = item.tool;
  document.getElementById('lbCounter').textContent = `${currentLbIdx + 1} / ${g.items.length}`;
  document.getElementById('lbCatTag').textContent  = g.label;
  document.getElementById('lbCatTag').style.background = g.accent + '22';
  document.getElementById('lbCatTag').style.color      = g.accent;
  document.querySelectorAll('.gm-thumb').forEach((el, i) =>
    el.classList.toggle('active', i === currentLbIdx)
  );
}

// ── LIGHTBOX NAVIGATION ──
function lbNav(dir) {
  const len = galleries[currentGallery].items.length;
  currentLbIdx = (currentLbIdx + dir + len) % len;
  renderLightbox();
}

// ── KEYBOARD SHORTCUTS ──
document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').classList.contains('open')) {
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'ArrowLeft')  lbNav(-1);
    if (e.key === 'Escape')     closeLightbox();
  } else if (document.getElementById('galleryModal').classList.contains('open')) {
    if (e.key === 'Escape') closeGallery();
  }
});

// ── SWIPE SUPPORT (MOBILE) ──
let touchStartX = 0;
const lbWrap = document.getElementById('lbImgWrap');
lbWrap.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
lbWrap.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40) lbNav(dx < 0 ? 1 : -1);
});

// ── CONTACT FORM ──
function sendMsg(e) {
  e.preventDefault();
  const btn = document.getElementById('contact-btn');
  btn.innerHTML = '<span>Message sent! ✓</span>';
  btn.style.background = '#2d7a3a';
  setTimeout(() => {
    btn.innerHTML = '<span>Send message</span><span>→</span>';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}