const PAGE_CONTENT = {
  zh: {
    brand: "Victoria Cheng Apps",
    navApps: "Apps",
    heroTitle: "獨立開發作品集",
    heroBody:
      "這個雙語頁面收錄我獨立構思、設計與開發的 iOS 作品。每一個 app 都從一個真實需求或清晰命題出發，並在介面語言、互動節奏與產品定位之間，尋找更完整而耐讀的呈現方式。",
    sectionKicker: "Selected Works",
    carouselKicker: "Portfolio Selection",
    carouselTitle: "作品選輯",
    storeLabel: "前往 App Store",
    comingSoon: "下載連結整理中",
    detailsHint: "獨立 iOS 作品",
    stats: {
      total: "收錄作品",
      released: "已發佈",
      pending: "審查中"
    },
    statuses: {
      released: "已發佈",
      pending: "正在等待審查"
    },
    metaSeparator: "・"
  },
  en: {
    brand: "Victoria Cheng Apps",
    navApps: "Apps",
    heroTitle: "Selected iOS Works",
    heroBody:
      "This bilingual portfolio gathers iOS projects I conceived, designed, and built independently. Each app begins with a concrete human need and is shaped into a more deliberate product experience through interface language, interaction rhythm, and editorial clarity.",
    sectionKicker: "Selected Works",
    carouselKicker: "Portfolio Selection",
    carouselTitle: "App Collection",
    storeLabel: "View on App Store",
    comingSoon: "Download link coming soon",
    detailsHint: "Independent iOS work",
    stats: {
      total: "Works featured",
      released: "Published",
      pending: "In review"
    },
    statuses: {
      released: "Published",
      pending: "In review"
    },
    metaSeparator: " · "
  }
};

const APPS = [
  {
    status: "released",
    version: "1.0",
    icon: "assets/icons/crypto-guide.png",
    url: {
      zh: "https://apps.apple.com/tw/app/%E5%B9%A3%E5%9C%88%E7%A5%9E%E5%99%A8-%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3-%E5%8D%80%E5%A1%8A%E9%8F%88%E5%AD%B8%E7%BF%92%E5%AD%97%E5%85%B8/id6761411130?l=zh-Hant-TW",
      en: "https://apps.apple.com/tw/app/%E5%B9%A3%E5%9C%88%E7%A5%9E%E5%99%A8-%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3-%E5%8D%80%E5%A1%8A%E9%8F%88%E5%AD%B8%E7%BF%92%E5%AD%97%E5%85%B8/id6761411130?l=en-GB"
    },
    zh: {
      title: "幣圈神器-加密貨幣&區塊鏈學習字典",
      description:
        "一款為加密貨幣與區塊鏈初學者設計的入門學習 app，整合名詞字典、學習路徑、重點收藏與閱讀脈絡，協助使用者以更有秩序的方式理解陌生而龐雜的知識領域。",
      highlight:
        "作品亮點：將高度碎片化的幣圈資訊整理為可搜尋、可收藏、可循序閱讀的行動知識入口。"
    },
    en: {
      title: "Crypto Guide: Beginner Dictionary for Crypto & Blockchain",
      description:
        "An onboarding-focused learning app for crypto and blockchain beginners, bringing together glossary lookup, guided learning paths, saved concepts, and contextual reading support within a single, coherent flow.",
      highlight:
        "Highlight: reframes a scattered and intimidating field into a searchable, saveable, and progressively readable mobile reference."
    }
  },
  {
    status: "released",
    version: "1.1",
    icon: "assets/icons/easy-lucky-draw.png",
    url: {
      zh: "https://apps.apple.com/us/app/%E8%BC%95%E9%AC%86%E6%8A%BD%E7%8D%8E%E7%A8%8B%E5%BC%8F/id6755403297?l=zh-Hant-TW",
      en: "https://apps.apple.com/us/app/%E8%BC%95%E9%AC%86%E6%8A%BD%E7%8D%8E%E7%A8%8B%E5%BC%8F/id6755403297"
    },
    zh: {
      title: "輕鬆抽獎程式",
      description:
        "一款乾淨、直覺、零廣告的抽獎工具，適用於活動、課堂、聚會與分組情境，支援名單整理、重複控制與即時抽選動態，讓簡單功能也能擁有完整體驗。",
      highlight:
        "作品亮點：以節制而清楚的視覺語言，為日常工具型 app 建立流暢、可信且愉悅的互動感。"
    },
    en: {
      title: "Easy Lucky Draw",
      description:
        "A clean, intuitive, zero-ad drawing tool for events, classrooms, parties, and team activities, with list cleanup, repeat control, and real-time draw animation shaped into a frictionless experience.",
      highlight:
        "Highlight: elevates a lightweight utility through restrained visual design and immediate, satisfying interaction feedback."
    }
  },
  {
    status: "released",
    version: "1.4",
    icon: "assets/icons/ai-time-management.png",
    url: {
      zh: "https://apps.apple.com/us/app/ai%E6%99%82%E9%96%93%E7%AE%A1%E7%90%86/id6754973616?l=zh-Hant-TW",
      en: "https://apps.apple.com/us/app/ai%E6%99%82%E9%96%93%E7%AE%A1%E7%90%86/id6754973616"
    },
    zh: {
      title: "AI時間管理",
      description:
        "一款結合 AI 任務拆解、專注計時與進度回顧的效率工具，協助使用者把模糊的大目標轉譯為可執行、可持續、可回顧的日常節奏。",
      highlight:
        "作品亮點：將 AI 建議、專注管理與行為回饋整合為一個更貼近日常實作的時間設計介面。"
    },
    en: {
      title: "AI Time Management",
      description:
        "A productivity app that combines AI task breakdown, focus timing, and progress review to help users translate vague ambitions into structured, sustainable working rhythms.",
      highlight:
        "Highlight: brings AI guidance, focus structure, and behavioral reflection into a workflow designed for everyday use rather than abstract planning."
    }
  },
  {
    status: "released",
    version: "1.5",
    icon: "assets/icons/compound-interest-calculator.png",
    url: {
      zh: "https://apps.apple.com/tw/app/%E8%A4%87%E5%88%A9%E8%A8%88%E7%AE%97%E5%99%A8-%E8%83%BD%E8%A8%88%E7%AE%97%E9%80%9A%E8%86%A8%E7%9A%84%E9%80%B2%E9%9A%8E%E5%B7%A5%E5%85%B7/id6756014104?l=zh-Hant-TW",
      en: "https://apps.apple.com/tw/app/%E8%A4%87%E5%88%A9%E8%A8%88%E7%AE%97%E5%99%A8-%E8%83%BD%E8%A8%88%E7%AE%97%E9%80%9A%E8%86%A8%E7%9A%84%E9%80%B2%E9%9A%8E%E5%B7%A5%E5%85%B7/id6756014104?l=en-GB"
    },
    zh: {
      title: "複利計算器-能計算通膨的進階工具",
      description:
        "一款進階財務試算工具，整合複利、定期定額、財務自由、貸款與退休規劃，並將通膨因素一併納入，協助使用者以更貼近現實條件的方式思考長期決策。",
      highlight:
        "作品亮點：將投資、通膨與退休規劃等複雜金融邏輯，轉譯為清晰、可視化且易於操作的介面。"
    },
    en: {
      title: "Compound Interest Calculator",
      description:
        "An advanced finance utility that combines compound growth, DCA, financial freedom planning, loan analysis, retirement planning, and inflation-aware calculations within a single decision-making interface.",
      highlight:
        "Highlight: translates investing, inflation, and long-horizon planning into a visual interface that feels approachable without sacrificing analytical depth."
    }
  },
  {
    status: "released",
    version: "1.0",
    icon: "assets/icons/did-you-take-your-vitamins-today.svg",
    url: {
      zh: "https://apps.apple.com/tw/app/%E4%BD%A0%E4%BB%8A%E5%A4%A9%E7%B6%AD%E4%BB%96%E5%91%BD%E4%BA%86%E5%97%8E/id6761441866?l=zh-Hant-TW",
      en: "https://apps.apple.com/tw/app/%E4%BD%A0%E4%BB%8A%E5%A4%A9%E7%B6%AD%E4%BB%96%E5%91%BD%E4%BA%86%E5%97%8E/id6761441866?l=en-GB"
    },
    zh: {
      title: "你今天維他命了嗎",
      description:
        "一款以每日保健品管理為核心的健康 app，結合服用紀錄、歷史追蹤、知識整理與個人頁面，幫助使用者把零散的提醒轉化為更穩定、溫和且可持續的日常習慣。",
      highlight:
        "作品亮點：以柔和而清晰的互動語氣，承接日常健康追蹤、資訊整理與個人化紀錄。"
    },
    en: {
      title: "Did You Take Your Vitamins Today?",
      description:
        "A wellness app centered on daily supplement routines, combining intake logs, history tracking, educational content, and a personal profile flow into a calm, habit-supportive experience.",
      highlight:
        "Highlight: turns everyday health tracking into a gentle mobile ritual with clarity, warmth, and continuity."
    }
  },
  {
    status: "pending",
    version: "1.0",
    icon: "assets/icons/larrys-mixology-lab.png",
    url: null,
    zh: {
      title: "賴瑞的調酒研究室",
      description:
        "一款以調酒研究室為世界觀的互動遊戲作品，結合角色敘事、場景氛圍與主題式探索，試圖建立一個更具角色感、空間感與記憶點的遊玩世界。",
      highlight:
        "作品亮點：將角色設定、視覺敘事與遊戲互動收束為一個具有主題性與氣氛密度的作品。"
    },
    en: {
      title: "Larry's Mixology Lab",
      description:
        "A character-driven interactive game set inside a mixology lab, weaving narrative atmosphere, themed exploration, and a distinct visual identity into a more theatrical mobile experience.",
      highlight:
        "Highlight: brings character design, narrative framing, and playful interaction into a concept-driven work with a strong sense of mood."
    }
  }
];

const template = document.querySelector("#appCardTemplate");
const rail = document.querySelector("#appsRail");
const toggle = document.querySelector("#langToggle");
const heroStats = document.querySelector("#heroStats");
const scrollPrev = document.querySelector("#scrollPrev");
const scrollNext = document.querySelector("#scrollNext");

const STORAGE_KEY = "victoria_apps_language";
const DEFAULT_LANGUAGE = "zh";

let language = getInitialLanguage();

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (savedLanguage === "zh" || savedLanguage === "en") {
    return savedLanguage;
  }

  return document.documentElement.lang.startsWith("zh") ? "zh" : DEFAULT_LANGUAGE;
}

function getPage() {
  return PAGE_CONTENT[language];
}

function getAppCounts() {
  return {
    total: APPS.length,
    released: APPS.filter((app) => app.status === "released").length,
    pending: APPS.filter((app) => app.status === "pending").length
  };
}

function getLocalizedApp(app) {
  return app[language];
}

function getAppUrl(app) {
  if (!app.url) return null;
  if (typeof app.url === "string") return app.url;
  return app.url[language] || app.url.en || app.url.zh || null;
}

function createMetaText(app, page) {
  return ["iOS", app.version, page.statuses[app.status]].join(page.metaSeparator);
}

function renderStaticText(page) {
  document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  document.title = language === "zh" ? "Victoria Cheng Apps | 我開發的 App 們" : "Victoria Cheng Apps | Apps I Built";
  toggle.textContent = language === "zh" ? "EN" : "中文";
  toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切換成中文");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = page[key];
  });
}

function renderStats(page) {
  const counts = getAppCounts();
  const stats = [
    { value: counts.total, label: page.stats.total },
    { value: counts.released, label: page.stats.released },
    { value: counts.pending, label: page.stats.pending }
  ];

  heroStats.innerHTML = "";
  stats.forEach((stat) => {
    const item = document.createElement("div");
    item.className = "hero-stat";
    item.innerHTML = `
      <p class="hero-stat-value">${stat.value}</p>
      <p class="hero-stat-label">${stat.label}</p>
    `;
    heroStats.appendChild(item);
  });
}

function renderApps(page) {
  rail.innerHTML = "";

  APPS.forEach((app) => {
    const localizedApp = getLocalizedApp(app);
    const card = template.content.cloneNode(true);
    const icon = card.querySelector(".app-icon");
    const title = card.querySelector(".app-title");
    const meta = card.querySelector(".app-meta");
    const summary = card.querySelector(".app-summary");
    const highlight = card.querySelector(".app-highlight");
    const statusPill = card.querySelector(".status-pill");
    const statusText = card.querySelector(".status-text");
    const button = card.querySelector(".app-button");

    icon.src = app.icon;
    icon.alt = `${localizedApp.title} icon`;
    title.textContent = localizedApp.title;
    meta.textContent = createMetaText(app, page);
    summary.textContent = localizedApp.description;
    highlight.textContent = localizedApp.highlight;

    statusPill.dataset.status = app.status;
    statusText.textContent = page.statuses[app.status];

    const appUrl = getAppUrl(app);
    if (appUrl) {
      button.href = appUrl;
      button.textContent = page.storeLabel;
      button.setAttribute("aria-label", `${page.storeLabel}: ${localizedApp.title}`);
      button.setAttribute("title", localizedApp.title);
      button.classList.remove("is-disabled");
      button.removeAttribute("aria-disabled");
    } else {
      button.removeAttribute("href");
      button.textContent = page.comingSoon;
      button.setAttribute("aria-label", `${localizedApp.title}: ${page.comingSoon}`);
      button.removeAttribute("title");
      button.classList.add("is-disabled");
      button.setAttribute("aria-disabled", "true");
    }

    rail.appendChild(card);
  });
}

function renderPage() {
  const page = getPage();
  renderStaticText(page);
  renderStats(page);
  renderApps(page);
  window.localStorage.setItem(STORAGE_KEY, language);
  updateCarouselControls();
}

function getScrollAmount() {
  return Math.max(Math.floor(rail.clientWidth * 0.82), 260);
}

function updateCarouselControls() {
  const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
  const isScrollable = maxScrollLeft > 8;
  const nearStart = rail.scrollLeft <= 8;
  const nearEnd = rail.scrollLeft >= maxScrollLeft - 8;

  scrollPrev.disabled = !isScrollable || nearStart;
  scrollNext.disabled = !isScrollable || nearEnd;
}

function scrollRail(direction) {
  rail.scrollBy({ left: direction * getScrollAmount(), behavior: "smooth" });
}

toggle.addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  renderPage();
});

scrollPrev.addEventListener("click", () => {
  scrollRail(-1);
});

scrollNext.addEventListener("click", () => {
  scrollRail(1);
});

rail.addEventListener("scroll", updateCarouselControls, { passive: true });
window.addEventListener("resize", updateCarouselControls);

renderPage();
