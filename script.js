// Site behaviour. The video list lives in videos.js.
(function () {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------- Shared: popups (native <dialog>) ---------- */
  let lastFocus = null;
  function openDialog(dialog) {
    lastFocus = document.activeElement;
    dialog.showModal();
    document.body.classList.add('is-locked');
  }
  function closeDialog(dialog) {
    if (dialog.open) dialog.close();
  }
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('close', () => {
      document.body.classList.remove('is-locked');
      dialog.dispatchEvent(new Event('dialog:closed'));
      if (lastFocus) lastFocus.focus();
    });
    // Click on the dark backdrop closes the popup.
    dialog.addEventListener('click', e => { if (e.target === dialog) closeDialog(dialog); });
    $$('[data-close]', dialog).forEach(btn => btn.addEventListener('click', () => closeDialog(dialog)));
  });

  /* ---------- Mobile navigation ---------- */
  const menuBtn = $('.menu-toggle');
  const nav = $('#site-nav');
  function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); } });
  document.addEventListener('click', e => { if (nav.classList.contains('is-open') && !e.target.closest('.site-header')) setMenu(false); });

  /* ---------- Video portfolio ---------- */
  const CATEGORIES = [
    { id: 'all', filter: 'All' },
    { id: 'ugc', filter: 'AI UGC', badge: 'AI UGC' },
    { id: 'animation', filter: 'Animations', badge: 'Animation' },
    { id: 'podcast', filter: 'Podcast Videos', badge: 'Podcast' },
    { id: 'vsl', filter: 'VSLs', badge: 'VSL' }
  ];
  const INITIAL_COUNT = 8; // cards shown before "Show all"
  // videos.js declares `const videos` at the top level, so it is a global binding, not a window property.
  const list = typeof videos !== 'undefined' && Array.isArray(videos) ? videos : [];
  const grid = $('#videoGrid');
  const filters = $('#videoFilters');
  const moreBtn = $('#videoMore');
  let current = 'all';
  let expanded = false;

  const badgeFor = id => (CATEGORIES.find(c => c.id === id) || {}).badge || '';
  const escapeHtml = s => String(s ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

  $$('[data-video-count]').forEach(el => { el.textContent = list.length; });

  filters.innerHTML = CATEGORIES
    .map(c => ({ ...c, count: c.id === 'all' ? list.length : list.filter(v => v.category === c.id).length }))
    .filter(c => c.count > 0)
    .map(c => `<button class="filter" type="button" data-filter="${c.id}" aria-pressed="${c.id === current}">${c.filter}<span>${c.count}</span></button>`)
    .join('');

  filters.addEventListener('click', e => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    current = btn.dataset.filter;
    expanded = false;
    $$('[data-filter]', filters).forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    renderVideos();
  });

  moreBtn.addEventListener('click', () => {
    expanded = true;
    renderVideos();
    // Move focus to the first newly shown card for keyboard users.
    const next = grid.children[INITIAL_COUNT];
    if (next) next.querySelector('button').focus();
  });

  function renderVideos() {
    const matches = list.filter(v => current === 'all' || v.category === current);
    const shown = expanded ? matches : matches.slice(0, INITIAL_COUNT);
    if (!matches.length) {
      grid.innerHTML = '<p class="notice">No videos in this category yet.</p>';
    } else {
      grid.innerHTML = shown.map((v, i) => {
        const index = list.indexOf(v);
        const landscape = v.orientation === 'landscape';
        return `<div class="vc-item"><button class="video-card" type="button" data-video="${index}" aria-label="Play video: ${escapeHtml(v.title)}">
          <span class="vc-thumb${landscape ? ' is-landscape' : ''}">
            ${v.thumbnail ? `<img src="${escapeHtml(v.thumbnail)}" alt="" loading="${i < 4 ? 'eager' : 'lazy'}" decoding="async" referrerpolicy="no-referrer" onerror="this.remove()">` : ''}
            <span class="vc-badges"><span class="badge">${badgeFor(v.category)}</span>${v.clientWork ? '<span class="badge badge-client">Client work</span>' : ''}${landscape ? '<span class="badge">16:9</span>' : ''}</span>
            <span class="vc-play" aria-hidden="true"></span>
          </span>
          <span class="vc-body"><span class="vc-title">${escapeHtml(v.title)}</span><span class="vc-desc">${escapeHtml(v.description)}</span></span>
        </button></div>`;
      }).join('');
    }
    const hidden = matches.length - shown.length;
    moreBtn.hidden = hidden <= 0;
    moreBtn.textContent = `Show all ${matches.length} videos`;
  }

  grid.addEventListener('click', e => {
    const card = e.target.closest('[data-video]');
    if (card) openVideo(list[Number(card.dataset.video)]);
  });

  /* Video player popup. Drive's /preview URL is the only Drive player that
     plays reliably inside a page for visitors without the Drive app. */
  const videoDialog = $('#videoDialog');
  const frameBox = $('#vdFrame');
  const loading = $('#vdLoading');

  function openVideo(v) {
    if (!v) return;
    $('#vdLabel').textContent = badgeFor(v.category) + (v.clientWork ? ' · Client work' : '');
    $('#vdTitle').textContent = v.title;
    $('#vdDesc').textContent = v.description || '';
    videoDialog.classList.toggle('is-landscape', v.orientation === 'landscape');

    const openLink = $('#vdOpen');
    $$('iframe', frameBox).forEach(f => f.remove());
    if (v.driveId) {
      const id = encodeURIComponent(v.driveId);
      openLink.href = `https://drive.google.com/file/d/${id}/view`;
      openLink.hidden = false;
      loading.textContent = 'Loading video…';
      loading.hidden = false;
      const iframe = document.createElement('iframe');
      iframe.title = `Video player: ${v.title}`;
      iframe.allow = 'autoplay; fullscreen; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.addEventListener('load', () => { loading.hidden = true; });
      iframe.src = `https://drive.google.com/file/d/${id}/preview`;
      frameBox.appendChild(iframe);
    } else {
      openLink.hidden = true;
      loading.textContent = 'This video is not available yet.';
      loading.hidden = false;
    }
    openDialog(videoDialog);
  }
  // Removing the iframe on close stops playback.
  videoDialog.addEventListener('dialog:closed', () => $$('iframe', frameBox).forEach(f => f.remove()));

  renderVideos();

  /* ---------- Image viewer (certificates, photos, slides) ---------- */
  const imageDialog = $('#imageDialog');
  const ivImg = $('#ivImg');
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-viewer]');
    if (!trigger) return;
    const src = trigger.dataset.viewer;
    const thumb = trigger.querySelector('img');
    ivImg.src = src;
    ivImg.alt = thumb ? thumb.alt : '';
    $('#ivCaption').textContent = trigger.dataset.caption || '';
    $('#ivOpen').href = src;
    openDialog(imageDialog);
  });
  const BLANK = ivImg.src;
  imageDialog.addEventListener('dialog:closed', () => { ivImg.src = BLANK; });

  /* ---------- Contact form ---------- */
  const form = $('#contactForm');
  const status = $('#formStatus');
  const submitBtn = form.querySelector('[type="submit"]');
  const EMAIL = 'johnmichaeljabuen11@gmail.com';
  const emailOk = s => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

  const rules = {
    name: v => v.trim() ? '' : 'Please enter your name.',
    email: v => !v.trim() ? 'Please enter your email address.' : emailOk(v.trim()) ? '' : 'Please enter a valid email, like name@example.com.',
    inquiry: v => v ? '' : 'Please choose what you need.',
    message: v => v.trim().length >= 10 ? '' : 'Please write a short message (at least 10 characters).'
  };

  function validateField(field) {
    const rule = rules[field.name];
    if (!rule) return true;
    const msg = rule(field.value);
    $('#' + field.getAttribute('aria-describedby')).textContent = msg;
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }
  Object.keys(rules).forEach(name => {
    const field = form.elements[name];
    field.addEventListener('blur', () => { if (field.value) validateField(field); });
    field.addEventListener('input', () => { if (field.getAttribute('aria-invalid') === 'true') validateField(field); });
  });

  function setStatus(html, kind) {
    status.className = 'form-status' + (kind ? ' is-' + kind : '');
    status.innerHTML = html;
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const fields = Object.keys(rules).map(n => form.elements[n]);
    const invalid = fields.filter(f => !validateField(f));
    if (invalid.length) { invalid[0].focus(); setStatus('Please fix the highlighted fields.', 'error'); return; }
    if (form.elements._gotcha.value) return; // bot

    const data = Object.fromEntries(fields.map(f => [f.name, f.value.trim()]));
    const endpoint = form.dataset.endpoint.trim();

    // Not connected to a form service yet: hand the message to the visitor's email app.
    if (!endpoint) {
      const subject = `${data.inquiry} inquiry from ${data.name}`;
      const body = `${data.message}\n\n— ${data.name} (${data.email})`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus(`Your email app should open with the message ready to send. If it didn't, email me at <a href="mailto:${EMAIL}">${EMAIL}</a>.`);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    setStatus('Sending your message…');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Portfolio: ${data.inquiry} inquiry from ${data.name}` })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      form.reset();
      fields.forEach(f => f.removeAttribute('aria-invalid'));
      setStatus('Thanks! Your message was sent. I will reply to your email soon.', 'success');
    } catch (err) {
      setStatus(`Sorry, your message could not be sent. Please email me at <a href="mailto:${EMAIL}">${EMAIL}</a> or message me on <a href="https://wa.me/639813743029" target="_blank" rel="noopener">WhatsApp</a>.`, 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });

  /* ---------- Footer year ---------- */
  $('#year').textContent = new Date().getFullYear();
})();
