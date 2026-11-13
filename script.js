// Website translations are validated at build time and loaded from this site's own files.
(() => {
  'use strict';
  const config = window.PORTFOLIO_CONFIG;
  if (!config) return;
  const supported = new Map(config.locales.map(locale => [locale.code, locale]));
  const template = document.querySelector('#appCardTemplate');
  const rail = document.querySelector('#appsRail');
  const heroStats = document.querySelector('#heroStats');
  const opener = document.querySelector('#langToggle');
  const dialog = document.querySelector('#language-dialog');
  const search = document.querySelector('#language-search');
  const options = dialog.querySelector('.language-options');
  const loadStatus = dialog.querySelector('.language-load-status');
  const notice = document.querySelector('#language-notice');
  const previous = document.querySelector('#scrollPrev');
  const next = document.querySelector('#scrollNext');
  const storageKey = 'victoria_apps_language';
  const cache = new Map([['zh-Hant', config.defaultMessages]]);
  let current = 'zh-Hant';
  let messages = config.defaultMessages;
  let request = 0;
  let retryLocale = null;
  const t = key => messages.ui[key];
  const normalizeSearch = value => String(value).normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase();
  const resolveLocale = value => {
    const tag = String(value || '').replace(/_/g, '-').toLowerCase();
    const exact = config.locales.find(locale => locale.code.toLowerCase() === tag);
    if (exact) return exact.code;
    if (tag === 'zh' || tag.startsWith('zh-')) return /hant|tw|hk|mo/.test(tag) || tag === 'zh' ? 'zh-Hant' : 'zh-Hans';
    const prefix = tag.split('-')[0];
    return supported.has(prefix) ? prefix : ({ nb: 'no', nn: 'no', tl: 'fil', iw: 'he' })[prefix];
  };

  function renderStaticText() {
    for (const node of document.querySelectorAll('[data-i18n]')) node.textContent = t(node.dataset.i18n);
    for (const node of document.querySelectorAll('[data-i18n-label]')) node.setAttribute('aria-label', t(node.dataset.i18nLabel));
    search.placeholder = t('searchLanguages');
    document.title = `${t('heroTitle')} | Victoria Cheng Apps`;
    document.querySelector('meta[name="description"]').content = t('heroBody');
    document.querySelector('[data-current-language]').textContent = ({ 'zh-Hant': '繁中', 'zh-Hans': '简中' })[current] || current.toUpperCase();
    opener.setAttribute('aria-label', `${t('language')} · ${supported.get(current).native}`);
    opener.title = supported.get(current).native;
    previous.textContent = document.documentElement.dir === 'rtl' ? '→' : '←';
    next.textContent = document.documentElement.dir === 'rtl' ? '←' : '→';
  }

  function renderStats() {
    const counts = {
      total: config.apps.length,
      released: config.apps.filter(app => app.status === 'released').length,
      pending: config.apps.filter(app => app.status === 'pending').length,
    };
    heroStats.replaceChildren();
    for (const [key, count] of Object.entries(counts)) {
      const stat = document.createElement('div');
      stat.className = 'hero-stat';
      const value = document.createElement('p');
      value.className = 'hero-stat-value';
      value.textContent = String(count);
      value.dir = 'ltr';
      const label = document.createElement('p');
      label.className = 'hero-stat-label';
      label.textContent = t(`stats.${key}`);
      stat.append(value, label);
      heroStats.append(stat);
    }
  }

  function renderApps() {
    const cards = document.createDocumentFragment();
    for (const app of config.apps) {
      const copy = messages.apps[app.id];
      const card = template.content.cloneNode(true);
      card.querySelector('.app-card').dataset.appId = app.id;
      const icon = card.querySelector('.app-icon');
      icon.src = app.icon;
      icon.alt = copy.title;
      icon.width = 104;
      icon.height = 104;
      const title = card.querySelector('.app-title');
      title.textContent = copy.title;
      title.dir = 'auto';
      card.querySelector('.app-summary').textContent = copy.description;
      card.querySelector('.app-highlight').textContent = copy.highlight;
      card.querySelector('.app-open-hint').textContent = t('detailsHint');
      card.querySelector('.status-pill').dataset.status = app.status;
      card.querySelector('.status-text').textContent = t(`statuses.${app.status}`);
      const meta = card.querySelector('.app-meta');
      for (const value of ['iOS', app.version]) {
        const span = document.createElement('bdi');
        span.dir = 'ltr';
        span.textContent = value;
        meta.append(span, document.createTextNode(t('metaSeparator')));
      }
      meta.append(document.createTextNode(t(`statuses.${app.status}`)));
      const button = card.querySelector('.app-button');
      const url = current.startsWith('zh') ? app.url.zh : app.url.en;
      if (url) {
        button.href = url;
        button.textContent = t('storeLabel');
        button.setAttribute('aria-label', `${t('storeLabel')}: ${copy.title}`);
        button.title = copy.title;
      } else {
        button.textContent = t('comingSoon');
        button.classList.add('is-disabled');
        button.setAttribute('aria-disabled', 'true');
      }
      cards.append(card);
    }
    rail.replaceChildren(cards);
  }

  function updateCarouselControls() {
    const max = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const distance = Math.abs(rail.scrollLeft);
    previous.disabled = max <= 8 || distance <= 8;
    next.disabled = max <= 8 || distance >= max - 8;
  }

  function apply(locale, payload) {
    const oldPosition = Math.abs(rail.scrollLeft);
    current = locale.code;
    messages = payload;
    document.documentElement.lang = current;
    document.documentElement.dir = locale.dir;
    document.documentElement.dataset.script = locale.script;
    renderStaticText();
    renderStats();
    renderApps();
    for (const button of options.children) button.setAttribute('aria-current', String(button.dataset.locale === current));
    rail.scrollLeft = (locale.dir === 'rtl' ? -1 : 1) * Math.min(oldPosition, Math.max(0, rail.scrollWidth - rail.clientWidth));
    updateCarouselControls();
  }

  function validatePayload(payload, code) {
    const plain = value => typeof value === 'string' && value.trim() && !/[<>]/.test(value);
    if (payload?.locale !== code || !payload.ui || !payload.apps || config.uiKeys.some(key => !plain(payload.ui[key])) || config.apps.some(app => ['title', 'description', 'highlight'].some(key => !plain(payload.apps[app.id]?.[key])))) throw new Error('Incomplete language file');
  }

  async function changeLanguage(code, { remember = false, updateURL = false } = {}) {
    const locale = supported.get(code);
    if (!locale) return false;
    const serial = ++request;
    retryLocale = code;
    loadStatus.textContent = t('loading');
    dialog.setAttribute('aria-busy', 'true');
    notice.hidden = true;
    try {
      let payload = cache.get(code);
      if (!payload) {
        const response = await fetch(new URL(`locales/${locale.file}`, document.baseURI), { credentials: 'same-origin' });
        if (!response.ok) throw new Error('Language file unavailable');
        payload = await response.json();
        validatePayload(payload, code);
        cache.set(code, payload);
      }
      if (serial !== request) return false;
      apply(locale, payload);
      if (remember) try { localStorage.setItem(storageKey, code); } catch { /* Browsing still works when storage is unavailable. */ }
      if (updateURL) {
        const url = new URL(location.href);
        url.searchParams.set('lang', code);
        history.replaceState(null, '', url.pathname + url.search + url.hash);
      }
      loadStatus.textContent = '';
      retryLocale = null;
      return true;
    } catch {
      if (serial === request) {
        loadStatus.textContent = t('loadError');
        notice.hidden = false;
      }
      return false;
    } finally {
      if (serial === request) dialog.removeAttribute('aria-busy');
    }
  }

  for (const locale of config.locales) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.locale = locale.code;
    button.dataset.search = normalizeSearch(`${locale.code} ${locale.native} ${locale.name} ${locale.zh}`);
    const native = document.createElement('span');
    native.className = 'language-native';
    native.lang = locale.code;
    native.dir = locale.dir;
    native.textContent = locale.native;
    const name = document.createElement('small');
    name.lang = 'en';
    name.dir = 'ltr';
    name.textContent = locale.name;
    const check = document.createElement('span');
    check.className = 'language-check';
    check.setAttribute('aria-hidden', 'true');
    check.textContent = '✓';
    button.append(native, name, check);
    options.append(button);
  }
  function filterLanguages() {
    const query = normalizeSearch(search.value.trim());
    let count = 0;
    for (const button of options.children) {
      button.hidden = !button.dataset.search.includes(query);
      if (!button.hidden) count++;
    }
    dialog.querySelector('[data-no-languages]').hidden = count > 0;
  }
  opener.hidden = false;
  opener.addEventListener('click', () => {
    search.value = '';
    filterLanguages();
    dialog.showModal();
    search.focus();
  });
  dialog.querySelector('[data-language-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => opener.focus());
  dialog.addEventListener('click', async event => {
    const button = event.target.closest('[data-locale]');
    if (button && await changeLanguage(button.dataset.locale, { remember: true, updateURL: true })) dialog.close();
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
  search.addEventListener('input', filterLanguages);
  search.addEventListener('search', filterLanguages);
  search.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      dialog.close();
      return;
    }
    const matches = [...options.children].filter(button => !button.hidden);
    if (event.key === 'Enter' && matches.length === 1) {
      event.preventDefault();
      matches[0].click();
    }
  });
  notice.querySelector('button').addEventListener('click', async () => {
    if (retryLocale && await changeLanguage(retryLocale, { remember: true, updateURL: true }) && dialog.open) dialog.close();
  });
  function scrollRail(direction) {
    const sign = document.documentElement.dir === 'rtl' ? -1 : 1;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    rail.scrollBy({ left: direction * sign * Math.max(Math.floor(rail.clientWidth * 0.82), 260), behavior: reducedMotion ? 'instant' : 'smooth' });
  }
  previous.addEventListener('click', () => scrollRail(-1));
  next.addEventListener('click', () => scrollRail(1));
  rail.addEventListener('scroll', updateCarouselControls, { passive: true });
  window.addEventListener('resize', updateCarouselControls);

  apply(supported.get('zh-Hant'), config.defaultMessages);
  const param = resolveLocale(new URL(location.href).searchParams.get('lang'));
  let stored;
  try { stored = resolveLocale(localStorage.getItem(storageKey)); } catch { /* Use URL or browser language instead. */ }
  const detected = (navigator.languages || [navigator.language]).map(resolveLocale).find(code => supported.has(code));
  const initial = param || stored || detected || 'en';
  changeLanguage(initial, { updateURL: !!param });
})();
