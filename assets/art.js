/* Line icons and project illustrations. Inline SVG coloured by CSS variables, so they follow light and dark mode. */
(function () {
  const ICON = {
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    check: '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.3l2.4 2.4 4.6-5"/>',
    coins: '<circle cx="12" cy="12" r="8.5"/><path d="M14.7 9.4c-.5-1-1.5-1.6-2.7-1.6-1.5 0-2.7.9-2.7 2 0 2.7 5.6 1.4 5.6 4.3 0 1.2-1.3 2.1-2.9 2.1-1.3 0-2.4-.6-2.9-1.6M12 6.2v1.6M12 16.2v1.6"/>',
    schema: '<rect x="3" y="3.5" width="8" height="6" rx="1.5"/><rect x="13" y="14.5" width="8" height="6" rx="1.5"/><path d="M7 9.5v4a2 2 0 0 0 2 2h4"/>',
    trace: '<path d="M8.5 6H20M8.5 12H20M8.5 18H16"/><circle cx="4.5" cy="6" r="1.2"/><circle cx="4.5" cy="12" r="1.2"/><circle cx="4.5" cy="18" r="1.2"/>',
    scale: '<path d="M12 4v16M7.5 20h9M5 7h14"/><path d="M5 7l-2.8 6a2.8 2.8 0 0 0 5.6 0z"/><path d="M19 7l-2.8 6a2.8 2.8 0 0 0 5.6 0z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>',
    code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5.5l-3 13"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    agent: '<path d="M4 5h16v11H9.5L5 20v-4H4z"/><path d="M12 7.5l1.1 2.4 2.4 1.1-2.4 1.1L12 14.5l-1.1-2.4L8.5 11l2.4-1.1z"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="0.8"/>',
    gauge: '<path d="M4 16a8 8 0 1 1 16 0"/><path d="M12 16l4-5"/><path d="M4 19.5h16"/>',
    eye: '<path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    bank: '<path d="M3 9l9-5 9 5M5.5 9v9M9.8 9v9M14.2 9v9M18.5 9v9M3 20h18"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
    swap: '<path d="M4 8h15l-3.5-3.5M20 16H5l3.5 3.5"/>',
    funnel: '<path d="M3 5h18l-7 8v6l-4-2v-4z"/>',
    flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/>',
    route: '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 7v10M6 10c0 5 12 3 12 7"/>',
    pulse: '<path d="M3 12h4l3-7 4 14 3-7h4"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
    spark: '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>',
    db: '<ellipse cx="12" cy="5.5" rx="7" ry="2.5"/><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    chart: '<path d="M4 20V4M4 20h16"/><path d="M7.5 15l4-4 3 3 5-6"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17" cy="9" r="2.6"/><path d="M16.5 13.6c2.6.2 4.5 2.1 4.5 5"/>',
    send: '<path d="M21 3L10 14"/><path d="M21 3l-7 18-4-7-7-4z"/>',
    file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M9 17h4"/>',
  };
  const icon = (n, cls = '') =>
    `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n] || ''}</svg>`;

  const S = (inner) => `<svg viewBox="0 0 320 130" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${inner}</svg>`;
  const LINE = 'stroke="var(--faint)" stroke-width="1.6" fill="none"';

  // Sensor trace inside a normal band, with one real spike.
  const alertTrace = 'M12 84 L24 80 L36 86 L48 78 L60 82 L72 76 L84 84 L96 80 L108 86 L120 79 L132 83 L144 77 L156 85 L168 80 L180 82 L192 78 L204 84 L214 30 L224 86 L236 80 L248 83 L260 77 L272 84 L284 79 L296 82 L308 80';
  const staffTicks = Array.from({ length: 13 }, (_, i) => {
    const y = 18 + i * 9;
    return `<rect x="141" y="${y}" width="${i % 2 ? 7 : 13}" height="4" fill="var(--signal)"/>`;
  }).join('');
  const candles = [[0, 58, 74, 1], [1, 62, 80, 0], [2, 54, 70, 1], [3, 46, 62, 1], [4, 50, 66, 0], [5, 40, 56, 1], [6, 36, 50, 1]]
    .map(([i, top, bottom, up]) => {
      const x = 42 + i * 8;
      return `<path d="M${x + 2} ${top - 5}V${bottom + 5}" stroke="var(--faint)"/><rect x="${x}" y="${top}" width="4" height="${bottom - top}" fill="${up ? 'var(--ok)' : 'var(--bad)'}"/>`;
    }).join('');
  const pill = (x, label, dir) =>
    `<rect x="${x}" y="50" width="56" height="26" rx="13" fill="var(--panel)" stroke="var(--rule)"/><text x="${x + 22}" y="67" text-anchor="middle" font-size="10.5" fill="var(--ink)">${label}</text><text x="${x + 45}" y="67" text-anchor="middle" font-size="11" fill="${dir > 0 ? 'var(--ok)' : 'var(--bad)'}">${dir > 0 ? '▲' : '▼'}</text>`;
  const histBars = [52, 60, 48, 66, 58, 72, 64].map((h, i) => `<rect x="${24 + i * 26}" y="${108 - h}" width="16" height="${h}" rx="2" fill="var(--water-soft)" stroke="var(--water)"/>`).join('');
  const foreBars = [70, 78, 74].map((h, i) => `<rect x="${206 + i * 26}" y="${108 - h}" width="16" height="${h}" rx="2" fill="none" stroke="var(--signal)" stroke-dasharray="3 3"/>`).join('');

  const ART = {
    agent: S(`
      <rect x="18" y="38" width="78" height="44" rx="10" fill="var(--panel)" stroke="var(--rule)"/>
      <path d="M30 54h50M30 66h32" stroke="var(--faint)" stroke-width="5" stroke-linecap="round"/>
      <path class="flow" d="M98 60h22" ${LINE}/>
      <rect x="124" y="34" width="72" height="52" rx="12" fill="var(--signal-soft)" stroke="var(--signal)"/>
      <path d="M160 46l3.5 10.5L174 60l-10.5 3.5L160 74l-3.5-10.5L146 60l10.5-3.5z" fill="var(--signal)"/>
      <path class="flow" d="M198 60h16" ${LINE}/>
      <g stroke="var(--ink)" stroke-width="1.6" fill="var(--panel)"><rect x="216" y="56" width="16" height="13" rx="3"/><path d="M220 56v-4a4 4 0 0 1 8 0v4" fill="none"/></g>
      <path class="flow" d="M234 62h16" ${LINE}/>
      <path d="M254 40v40a26 7 0 0 0 52 0V40" fill="var(--water-soft)" stroke="var(--water)" stroke-width="1.6"/>
      <ellipse cx="280" cy="40" rx="26" ry="7" fill="var(--water-soft)" stroke="var(--water)" stroke-width="1.6"/>
      <text x="280" y="70" text-anchor="middle" font-size="12" fill="var(--water)">19M</text>
      <path d="M160 86v11M280 88v20H173" stroke="var(--ok)" stroke-width="1.6" fill="none" stroke-dasharray="3 3"/>
      <circle cx="160" cy="108" r="11" fill="var(--panel)" stroke="var(--ok)" stroke-width="1.8"/>
      <path d="M155 108.5l3.5 3.5 6.5-7" stroke="var(--ok)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
    alerts: S(`
      <rect x="12" y="68" width="296" height="26" fill="var(--water-soft)"/>
      <path d="${alertTrace}" stroke="var(--water)" stroke-width="1.6" fill="none" stroke-linejoin="round"/>
      <circle class="ping" cx="214" cy="30" r="5" fill="none" stroke="var(--bad)" stroke-width="1.6"/>
      <circle cx="214" cy="30" r="4.5" fill="var(--bad)"/>
      <g transform="translate(232 14)" stroke="var(--bad)" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 13h14l-1.6-2.4V7a5.4 5.4 0 0 0-10.8 0v3.6z"/><path d="M8 16a2 2 0 0 0 4 0"/></g>
      <text x="258" y="27" font-size="10" fill="var(--bad)">SMS · Telegram</text>
      <text x="16" y="114" font-size="10" fill="var(--faint)">normal band</text>`),
    vision: S(`
      <path d="M104 96 q18 -6 36 0 t36 0 t36 0 t36 0 t36 0 t36 0 V130 H104z" fill="var(--water-soft)" stroke="var(--water)" stroke-width="1.4"/>
      <rect x="140" y="14" width="24" height="116" fill="var(--panel)" stroke="var(--ink)" stroke-width="1.4"/>
      ${staffTicks}
      <rect x="130" y="8" width="44" height="122" rx="4" fill="none" stroke="var(--signal)" stroke-width="1.6" stroke-dasharray="5 4"/>
      <path d="M118 96 H198" stroke="var(--ok)" stroke-width="2"/>
      <text x="202" y="88" font-size="11" fill="var(--ok)">± ~1px</text>
      <g transform="translate(34 30)" stroke="var(--muted)" stroke-width="1.4" fill="none">
        <rect x="8" y="8" width="36" height="36" rx="4" fill="var(--panel)"/><rect x="17" y="17" width="18" height="18" rx="2"/>
        <path d="M16 2v6M26 2v6M36 2v6M16 44v6M26 44v6M36 44v6M2 16h6M2 26h6M2 36h6M44 16h6M44 26h6M44 36h6"/></g>
      <text x="60" y="104" text-anchor="middle" font-size="10" fill="var(--muted)">CPU only</text>`),
    tapesense: S(`
      <rect x="28" y="12" width="68" height="108" rx="12" fill="var(--panel)" stroke="var(--ink)" stroke-width="1.4"/>
      <path d="M54 20h16" stroke="var(--faint)" stroke-width="3" stroke-linecap="round"/>
      <g stroke-width="1.2">${candles}</g>
      <path d="M40 100h44M40 108h28" stroke="var(--faint)" stroke-width="4" stroke-linecap="round"/>
      ${pill(112, 'CPI', 1)}
      <path d="M170 63h8" stroke="var(--faint)" stroke-width="1.6"/>
      ${pill(180, 'USD', 1)}
      <path d="M238 63h8" stroke="var(--faint)" stroke-width="1.6"/>
      ${pill(248, 'Gold', -1)}
      <circle cx="276" cy="104" r="9" fill="none" stroke="var(--ok)" stroke-width="1.6"/>
      <path d="M272 104.5l3 3 5-5.5" stroke="var(--ok)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <text x="262" y="108" text-anchor="end" font-size="10" fill="var(--ok)">vs real prices</text>`),
    forecast: S(`
      <path d="M12 108h296" stroke="var(--rule)" stroke-width="1.4"/>
      ${histBars}
      <path d="M200 50 L222 30 L248 36 L274 26 L300 30 L300 52 L274 50 L248 60 L222 54 Z" fill="var(--signal-soft)"/>
      ${foreBars}
      <path d="M198 14v94" stroke="var(--faint)" stroke-dasharray="3 3"/>
      <text x="204" y="20" font-size="10" fill="var(--signal)">forecast</text>
      <g transform="translate(22 14)"><rect width="74" height="26" rx="8" fill="var(--panel)" stroke="var(--rule)"/><text x="37" y="17" text-anchor="middle" font-size="10" fill="var(--muted)">+ evidence</text></g>`),
    motion: S(`
      <g transform="translate(18 44)" stroke="var(--ink)" stroke-width="1.4" fill="var(--panel)">
        <rect x="0" y="6" width="40" height="28" rx="5"/><path d="M40 14l14-7v26l-14-7z"/><circle cx="20" cy="20" r="7" fill="none"/></g>
      <path d="M200 10v112" stroke="var(--signal)" stroke-width="1.8" stroke-dasharray="6 5"/>
      <path d="M96 96 C140 90 170 70 236 54" stroke="var(--water)" stroke-width="1.6" fill="none" stroke-dasharray="2 4"/>
      <path d="M100 40 C150 46 180 60 262 84" stroke="var(--water)" stroke-width="1.6" fill="none" stroke-dasharray="2 4"/>
      <rect x="226" y="44" width="20" height="20" rx="3" fill="none" stroke="var(--water)" stroke-width="1.6"/><circle cx="236" cy="54" r="3" fill="var(--water)"/>
      <rect x="252" y="74" width="20" height="20" rx="3" fill="none" stroke="var(--water)" stroke-width="1.6"/><circle cx="262" cy="84" r="3" fill="var(--water)"/>
      <rect x="150" y="100" width="20" height="20" rx="3" fill="none" stroke="var(--faint)" stroke-width="1.6"/><circle cx="160" cy="110" r="3" fill="var(--faint)"/>
      <text x="208" y="24" font-size="11" fill="var(--signal)">+2</text>`),
  };

  // Hero: the delivery loop used on every project. Labels come from the page language.
  // steps = [{ t, s, i }] clockwise from the top; centre = [title, sub].
  function heroArt(steps, centre, animate) {
    const cx = 220, cy = 205, rx = 160, ry = 140, dur = 12;
    const nodes = steps.map((st, n) => {
      const a = (-90 + n * 60) * Math.PI / 180;
      const x = +(cx + rx * Math.cos(a)).toFixed(1), y = +(cy + ry * Math.sin(a)).toFixed(1);
      return `<g class="step">
        <circle cx="${x}" cy="${y}" r="25" fill="var(--panel)" stroke="var(--rule)" stroke-width="1.6" style="animation-delay:${(n * dur / steps.length).toFixed(2)}s"/>
        <g transform="translate(${x - 11} ${y - 11}) scale(0.9167)" fill="none" stroke="var(--signal)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICON[st.i] || ''}</g>
        <text x="${x}" y="${y + 44}" text-anchor="middle" font-size="14" font-weight="600" fill="var(--ink)">${st.t}</text>
        <text x="${x}" y="${y + 60}" text-anchor="middle" font-size="11" fill="var(--muted)">${st.s}</text></g>`;
    }).join('');
    const loop = `M${cx} ${cy - ry} A${rx} ${ry} 0 0 1 ${cx} ${cy + ry} A${rx} ${ry} 0 0 1 ${cx} ${cy - ry}`;
    const dot = animate ? `<circle r="5" fill="var(--signal)"><animateMotion dur="${dur}s" repeatCount="indefinite" path="${loop}"/></circle>` : '';
    return `<svg viewBox="0 0 440 420" role="img" aria-label="${centre[0]}: ${steps.map((st) => st.t).join(' → ')}">
      <path d="${loop}" fill="none" stroke="var(--rule)" stroke-width="1.6" stroke-dasharray="4 6"/>
      ${dot}${nodes}
      <text x="${cx}" y="${cy + 20}" text-anchor="middle" font-size="24" fill="var(--ink)" class="serif">${centre[0]}</text>
      <text x="${cx}" y="${cy + 40}" text-anchor="middle" font-size="11" fill="var(--muted)">${centre[1]}</text>
    </svg>`;
  }

  // Fill every [data-icon] element with its icon (static, language-independent).
  function paint(root = document) {
    root.querySelectorAll('[data-icon]').forEach((el) => {
      if (!el.firstElementChild || !el.firstElementChild.classList.contains('ic')) el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon));
    });
    root.querySelectorAll('[data-art]').forEach((el) => {
      el.innerHTML = ART[el.dataset.art] || '';
    });
  }

  window.ICON = ICON;
  window.icon = icon;
  window.ART = ART;
  window.paintArt = paint;
  window.heroArt = heroArt;
})();
