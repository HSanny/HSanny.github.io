/* Language switching, lens paths, work cards and illustrations. No framework, no build step, no trackers. */
(function () {
  const LANGS = ['en', 'zh', 'ja'];
  let lang = 'en';
  try {
    const saved = localStorage.getItem('lang');
    if (LANGS.includes(saved)) lang = saved;
    else {
      const n = (navigator.language || '').toLowerCase();
      if (n.startsWith('zh')) lang = 'zh';
      else if (n.startsWith('ja')) lang = 'ja';
    }
  } catch (e) {}
  const asked = new URL(location.href).searchParams.get('lang');
  if (LANGS.includes(asked)) lang = asked;

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const t = (k) => (window.I18N[lang] && window.I18N[lang][k]) ?? window.I18N.en[k] ?? k;
  const L = (o) => (o && (o[lang] ?? o.en)) || '';
  // Pages inside /work/ need ../ in front of site-relative links.
  const base = document.body.dataset.base || '';

  function card(w) {
    const href = w.external ? w.href : base + w.href;
    const target = w.external ? ' target="_blank" rel="noopener"' : '';
    const badges = [...w.badges.map((b) => `<span class="badge${b === 'FLAGSHIP' || b === 'LIVE PRODUCT' ? ' amber' : ''}">${esc(b)}</span>`), w.soon ? `<span class="badge">${esc(t('case.soon'))}</span>` : ''].join('');
    const kpis = w.k.length ? `<div class="kpis">${w.k.map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(L(l))}</span></div>`).join('')}</div>` : '';
    return `<a class="card" href="${href}"${target}><div class="art">${window.ART[w.id] || ''}</div><div class="body"><div class="badges">${badges}</div><h3>${esc(L(w.t))}</h3><p>${esc(L(w.d))}</p>${kpis}<div class="verified">${window.icon('check')}<span>${esc(L(w.v))}</span></div><span class="more">${esc(w.flagship ? t('case.read') : t('case.open'))}</span></div></a>`;
  }

  function render() {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;
    $$('[data-t]').forEach((el) => (el.textContent = t(el.dataset.t)));
    $$('[data-th]').forEach((el) => (el.innerHTML = t(el.dataset.th)));
    $$('.langs button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    const art = $('.hero-art');
    if (art && window.heroArt) {
      const icons = ['users', 'gauge', 'code', 'check', 'send', 'pulse'];
      const steps = icons.map((i, n) => ({ i, t: esc(t('w' + (n + 1))), s: esc(t('w' + (n + 1) + '.s')) }));
      const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
      art.innerHTML = window.heroArt(steps, [esc(t('w.c')), esc(t('w.cs'))], !still);
    }
    $$('[data-cards]').forEach((el) => {
      const ids = el.dataset.cards.split(',');
      el.innerHTML = window.WORK.filter((w) => ids.includes(w.id)).map(card).join('');
    });
  }

  $$('.langs button').forEach((b) =>
    b.addEventListener('click', () => {
      lang = b.dataset.lang;
      try {
        localStorage.setItem('lang', lang);
      } catch (e) {}
      render();
    }),
  );

  // Lens paths: ?lens=hiring|engineer|explore|all, remembered in the URL so it can be shared.
  function setLens(lens, scroll) {
    $$('.lens').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lens === lens)));
    $$('.path').forEach((p) => p.classList.toggle('on', lens === 'all' || p.dataset.path === lens));
    // With every path open, the Work section already lists all cards; don't repeat them.
    document.body.classList.toggle('lens-all', lens === 'all');
    const url = new URL(location.href);
    if (lens) url.searchParams.set('lens', lens);
    history.replaceState(null, '', url);
    if (scroll) $('#paths')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  $$('.lens').forEach((b) => b.addEventListener('click', () => setLens(b.dataset.lens, true)));
  $('.skip')?.addEventListener('click', () => setLens('all', true));
  const initial = new URL(location.href).searchParams.get('lens');
  if (initial) setLens(initial, false);

  const yr = $('#yr');
  if (yr) yr.textContent = '2026';
  window.paintArt();
  render();
})();
