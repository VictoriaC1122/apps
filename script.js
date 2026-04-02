const PAGE_CONTENT = {
  zh: {
    brand: "Victoria Cheng Apps",
    navApps: "Apps",
    heroTitle: "我開發的 App 們",
    heroBody:
      "這是一個專門收錄 Victoria Cheng 個人開發作品的雙語頁面，集中展示 app 圖示、下載入口與作品亮點。",
    sectionKicker: "Featured Apps",
    carouselKicker: "Scrollable Showcase",
    carouselTitle: "App 展示列",
    storeLabel: "前往 App Store",
    comingSoon: "下載連結整理中",
    detailsHint: "Featured app",
    stats: {
      total: "目前展示 App",
      released: "已發佈",
      pending: "等待審查中"
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
    heroTitle: "Apps I Built",
    heroBody:
      "This bilingual showcase gathers Victoria Cheng's independently designed and developed apps in one dedicated place, with icons, download links, and project highlights.",
    sectionKicker: "Featured Apps",
    carouselKicker: "Scrollable Showcase",
    carouselTitle: "App Lineup",
    storeLabel: "View on App Store",
    comingSoon: "Download link coming soon",
    detailsHint: "Featured app",
    stats: {
      total: "Apps featured",
      released: "Ready for sale",
      pending: "Awaiting review"
    },
    statuses: {
      released: "Ready for sale",
      pending: "Awaiting review"
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
        "一款為加密貨幣與區塊鏈初學者設計的入門學習 app，整合名詞字典、學習地圖、重點收藏與閱讀脈絡，幫助使用者用更有系統的方式建立基礎。",
      highlight:
        "作品重點：把分散又陌生的幣圈知識整理成可搜尋、可收藏、可循序學習的行動字典。"
    },
    en: {
      title: "Crypto Guide: Beginner Dictionary for Crypto & Blockchain",
      description:
        "An onboarding-focused learning app for crypto and blockchain beginners, combining glossary lookup, structured learning paths, bookmarks, and guided reading context in one place.",
      highlight:
        "Project highlight: turns scattered and intimidating crypto knowledge into a searchable, saveable, step-by-step mobile learning dictionary."
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
        "一款乾淨、直覺、零廣告的抽獎工具，適合活動、聚會、課堂分組與名單抽選，支援名單整理、重複控制與即時抽選動畫。",
      highlight:
        "作品重點：把實用性、視覺質感與即時互動結合，快速完成消費型工具 app 的完整體驗。"
    },
    en: {
      title: "Easy Lucky Draw",
      description:
        "A clean, intuitive, zero-ad mobile drawing tool for events, classrooms, parties, and team activities, with list cleanup, repeat control, and lively draw animation.",
      highlight:
        "Project highlight: turns a simple utility into a polished consumer app through thoughtful visuals and immediate interaction feedback."
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
        "一款結合 AI 任務拆解、專注計時與進度回顧的效率工具，幫助使用者把模糊的大目標轉成可執行的專注流程。",
      highlight:
        "作品重點：結合 AI 建議、穩定計時與真實專注洞察，讓日常規劃更容易落地。"
    },
    en: {
      title: "AI Time Management",
      description:
        "A productivity app that combines AI task breakdown, focus timing, and progress review to help users turn vague goals into structured, actionable sessions.",
      highlight:
        "Project highlight: blends AI guidance, reliable timers, and practical focus insights into a workflow people can actually use every day."
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
        "一款進階財務試算工具，整合複利、定期定額、財務自由、貸款與退休規劃，並將通膨因素一起納入，幫助使用者做出更貼近真實情境的判斷。",
      highlight:
        "作品重點：把投資、通膨與退休規劃等金融邏輯，翻譯成直覺、可視化且容易操作的介面。"
    },
    en: {
      title: "Compound Interest Calculator",
      description:
        "An advanced finance utility that combines compound growth, DCA, financial freedom planning, loan analysis, retirement planning, and inflation-aware calculations in one experience.",
      highlight:
        "Project highlight: translates investing, inflation, and long-term planning logic into a visual, approachable, decision-ready interface."
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
        "一款以每日保健品管理為核心的健康 app，結合服用紀錄、歷史追蹤、知識整理與個人頁面，幫助使用者建立穩定又好維持的補充習慣。",
      highlight:
        "作品重點：把日常健康追蹤、資訊整理與個人化紀錄整合成一個溫和清楚的行動介面。"
    },
    en: {
      title: "Did You Take Your Vitamins Today?",
      description:
        "A wellness app centered on daily supplement routines, combining intake logs, history tracking, educational content, and a personal profile flow in one gentle experience.",
      highlight:
        "Project highlight: turns everyday health tracking into a calm, approachable, habit-friendly mobile product."
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
        "一款以調酒研究室為世界觀的互動遊戲作品，結合角色敘事、場景氛圍與主題式探索，打造帶有故事感與個性風格的遊玩體驗。",
      highlight:
        "作品重點：把角色設定、視覺敘事與遊戲互動整合成一個完整而有記憶點的主題 app。"
    },
    en: {
      title: "Larry's Mixology Lab",
      description:
        "A character-driven interactive game set inside a mixology lab, combining story atmosphere, themed exploration, and a distinct visual identity into a playful mobile experience.",
      highlight:
        "Project highlight: brings character design, narrative framing, and game interaction together into a memorable concept-driven app."
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
    const statusPill = card.querySelector(".status-pill");
    const statusText = card.querySelector(".status-text");
    const button = card.querySelector(".app-button");

    icon.src = app.icon;
    icon.alt = `${localizedApp.title} icon`;
    title.textContent = localizedApp.title;
    meta.textContent = createMetaText(app, page);
    summary.textContent = localizedApp.description;

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
