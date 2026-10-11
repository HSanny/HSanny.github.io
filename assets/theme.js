/* Light / dark mode. Loaded in <head> so the saved theme applies before first paint; follows the system until the visitor picks one. */
(function () {
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  } catch (e) {}

  const current = () => root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>';
  const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';

  function sync() {
    const dark = current() === 'dark';
    document.querySelectorAll('.theme').forEach((b) => {
      b.innerHTML = dark ? SUN : MOON;
      b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      b.title = b.getAttribute('aria-label');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme').forEach((b) =>
      b.addEventListener('click', () => {
        const next = current() === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        try {
          localStorage.setItem('theme', next);
        } catch (e) {}
        sync();
        document.dispatchEvent(new Event('themechange'));
      }),
    );
    matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => {
      sync();
      document.dispatchEvent(new Event('themechange'));
    });
    sync();
  });
})();
