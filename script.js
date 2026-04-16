const PAGE_CONTENT = {
  zh: {
    brand: "Victoria Cheng's App",
    navApps: "Apps",
    heroTitle: "獨立開發作品集",
    heroBody:
      "這裡收錄我獨立構思、設計與開發的 iOS 作品。每一個 app 都從真實需求出發，並在功能、視覺語言與使用情境之間，建立清楚而有記憶點的產品表達。",
    sectionKicker: "Selected Works",
    carouselKicker: "Portfolio Selection",
    carouselTitle: "作品選輯",
    sortNote: "依照目前下載受歡迎程度排序。",
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
    brand: "Victoria Cheng's App",
    navApps: "Apps",
    heroTitle: "Selected iOS Works",
    heroBody:
      "A bilingual portfolio of iOS apps I conceived, designed, and built independently. Each work begins with a real user need and evolves into a product with clear utility, visual intent, and a memorable point of view.",
    sectionKicker: "Selected Works",
    carouselKicker: "Portfolio Selection",
    carouselTitle: "App Collection",
    sortNote: "Sorted by current download popularity.",
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
    version: "2.0",
    icon: "assets/icons/compound-interest-calculator.png",
    url: {
      zh: "https://apps.apple.com/tw/app/%E8%A4%87%E5%88%A9%E8%A8%88%E7%AE%97%E5%99%A8-%E8%83%BD%E8%A8%88%E7%AE%97%E9%80%9A%E8%86%A8%E7%9A%84%E9%80%B2%E9%9A%8E%E5%B7%A5%E5%85%B7/id6756014104?l=zh-Hant-TW",
      en: "https://apps.apple.com/tw/app/%E8%A4%87%E5%88%A9%E8%A8%88%E7%AE%97%E5%99%A8-%E8%83%BD%E8%A8%88%E7%AE%97%E9%80%9A%E8%86%A8%E7%9A%84%E9%80%B2%E9%9A%8E%E5%B7%A5%E5%85%B7/id6756014104?l=en-GB"
    },
    zh: {
      title: "複利計算器-能計算通膨的進階工具",
      description:
        "進階財務試算工具，整合複利、定期定額、貸款、退休與通膨情境，幫助使用者以更清楚、更貼近現實條件的方式思考長期金錢決策。",
      highlight:
        "亮點：將複雜財務邏輯轉譯為清楚、視覺化且更容易反覆使用的決策介面。"
    },
    en: {
      title: "Compound Interest Calculator",
      description:
        "An advanced finance utility for compound growth, DCA, loans, retirement planning, and inflation-aware decisions, designed to make long-term planning easier to compare.",
      highlight:
        "Highlight: makes complex financial logic more visual, lucid, and approachable without losing decision depth."
    }
  },
  {
    status: "released",
    version: "1.2",
    icon: "assets/icons/easy-lucky-draw.png",
    url: {
      zh: "https://apps.apple.com/us/app/%E8%BC%95%E9%AC%86%E6%8A%BD%E7%8D%8E%E7%A8%8B%E5%BC%8F/id6755403297?l=zh-Hant-TW",
      en: "https://apps.apple.com/us/app/%E8%BC%95%E9%AC%86%E6%8A%BD%E7%8D%8E%E7%A8%8B%E5%BC%8F/id6755403297"
    },
    zh: {
      title: "輕鬆抽獎程式",
      description:
        "乾淨、直覺、零廣告的抽獎工具，適用於活動、課堂、聚會與名單抽選情境，支援名單整理與即時抽選，讓短暫流程也能有節奏與完成度。",
      highlight:
        "亮點：以輕盈俐落的互動節奏，讓工具型 app 兼具實用性、可信度與一點舞台感。"
    },
    en: {
      title: "Easy Lucky Draw",
      description:
        "A clean, zero-ad drawing tool for events, classrooms, parties, and list-based selections, with a simple flow that makes quick decisions feel smoother and more polished.",
      highlight:
        "Highlight: brings clarity, trust, and a small sense of ceremony to an everyday utility."
    }
  },
  {
    status: "released",
    version: "1.3",
    icon: "assets/icons/crypto-guide.png",
    url: {
      zh: "https://apps.apple.com/tw/app/%E5%B9%A3%E5%9C%88%E7%A5%9E%E5%99%A8-%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3-%E5%8D%80%E5%A1%8A%E9%8F%88%E5%AD%B8%E7%BF%92%E5%AD%97%E5%85%B8/id6761411130?l=zh-Hant-TW",
      en: "https://apps.apple.com/tw/app/%E5%B9%A3%E5%9C%88%E7%A5%9E%E5%99%A8-%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3-%E5%8D%80%E5%A1%8A%E9%8F%88%E5%AD%B8%E7%BF%92%E5%AD%97%E5%85%B8/id6761411130?l=en-GB"
    },
    zh: {
      title: "幣圈神器-加密貨幣&區塊鏈學習字典",
      description:
        "為加密貨幣與區塊鏈初學者打造的學習字典，整合名詞查詢、學習脈絡與收藏功能，把艱澀分散的概念整理成清楚、友善、可持續探索的知識入口。",
      highlight:
        "亮點：將陌生的金融新知轉譯為可搜尋、可收藏、也更容易持續閱讀的行動學習工具。"
    },
    en: {
      title: "Crypto Guide: Beginner Dictionary for Crypto & Blockchain",
      description:
        "A beginner-friendly crypto and blockchain dictionary that combines glossary lookup, learning context, and saved concepts into a clearer, more inviting knowledge entry point.",
      highlight:
        "Highlight: translates a complex financial frontier into a searchable, saveable, and approachable mobile reference."
    }
  },
  {
    status: "released",
    version: "1.2",
    icon: "assets/icons/did-you-take-your-vitamins-today.svg",
    url: {
      zh: "https://apps.apple.com/tw/app/%E4%BD%A0%E4%BB%8A%E5%A4%A9%E7%B6%AD%E4%BB%96%E5%91%BD%E4%BA%86%E5%97%8E/id6761441866?l=zh-Hant-TW",
      en: "https://apps.apple.com/tw/app/%E4%BD%A0%E4%BB%8A%E5%A4%A9%E7%B6%AD%E4%BB%96%E5%91%BD%E4%BA%86%E5%97%8E/id6761441866?l=en-GB"
    },
    zh: {
      title: "你今天維他命了嗎",
      description:
        "以每日保健品管理為核心，結合服用紀錄、歷史追蹤、知識整理與個人頁面，協助使用者把健康提醒整理成更穩定、更溫柔的生活習慣。",
      highlight:
        "亮點：以柔和清楚的互動語氣，讓日常保健追蹤更容易被理解、記住與持續。"
    },
    en: {
      title: "Did You Take Your Vitamins Today?",
      description:
        "A wellness app for daily supplement routines, blending intake logs, history tracking, educational content, and profile flows into a kinder self-care experience.",
      highlight:
        "Highlight: makes everyday health tracking softer, clearer, and easier to return to."
    }
  },
  {
    status: "released",
    version: "1.1",
    icon: "assets/icons/larrys-mixology-lab.png",
    url: {
      zh: "https://apps.apple.com/us/app/%E8%B3%B4%E7%91%9E%E7%9A%84%E8%AA%BF%E9%85%92%E7%A0%94%E7%A9%B6%E5%AE%A4/id6761377948?l=zh-Hant-TW",
      en: "https://apps.apple.com/us/app/%E8%B3%B4%E7%91%9E%E7%9A%84%E8%AA%BF%E9%85%92%E7%A0%94%E7%A9%B6%E5%AE%A4/id6761377948"
    },
    zh: {
      title: "賴瑞的調酒研究室",
      description:
        "以調酒研究室為背景的 18 禁戀愛遊戲，結合角色互動、情感敘事、場景氛圍與分支推進，讓曖昧、張力與想像力慢慢發酵。",
      highlight:
        "亮點：以成人向戀愛遊戲為定位，整合角色魅力、敘事張力與更鮮明的情境氛圍。"
    },
    en: {
      title: "Larry's Mixology Lab",
      description:
        "An 18+ romance game set inside a mixology lab, blending character chemistry, emotional tension, atmospheric scenes, and branching progression.",
      highlight:
        "Highlight: brings character allure, narrative tension, and adult romantic mood into a memorable interactive experience."
    }
  },
  {
    status: "released",
    version: "1.2",
    icon: "assets/icons/leave-your-dream-behind.png",
    url: {
      zh: "https://apps.apple.com/us/app/%E6%8A%8A%E5%A4%A2%E9%81%BA%E7%95%99%E4%B8%8B%E4%BE%86/id6761692228?l=zh-Hant-TW",
      en: "https://apps.apple.com/us/app/%E6%8A%8A%E5%A4%A2%E9%81%BA%E7%95%99%E4%B8%8B%E4%BE%86/id6761692228"
    },
    zh: {
      title: "把夢遺留下來",
      description:
        "療癒系夢境記錄 app，支援快速記夢、語音輸入、情緒整理、收藏回顧與提醒功能，讓醒來後快消散的畫面被更安靜、更有秩序地留下。",
      highlight:
        "亮點：將夢境書寫、情緒辨識與個人回顧整理成溫柔而可持續的日常儀式。"
    },
    en: {
      title: "Leave Your Dream Behind",
      description:
        "A gentle dream-journaling app for capturing fragile images after waking, with quick entry, voice input, mood reflection, favorites, and reminders.",
      highlight:
        "Highlight: organizes dream writing, emotional reflection, and recall into a quiet and sustainable ritual."
    }
  },
  {
    status: "released",
    version: "1.7",
    icon: "assets/icons/ai-time-management.png",
    url: {
      zh: "https://apps.apple.com/us/app/ai%E6%99%82%E9%96%93%E7%AE%A1%E7%90%86/id6754973616?l=zh-Hant-TW",
      en: "https://apps.apple.com/us/app/ai%E6%99%82%E9%96%93%E7%AE%A1%E7%90%86/id6754973616"
    },
    zh: {
      title: "AI時間管理",
      description:
        "結合 AI 任務拆解、專注計時與進度回顧，協助使用者把巨大而模糊的目標整理成可開始、可追蹤、可持續執行的日常節奏。",
      highlight:
        "亮點：把 AI 建議、行為回饋與專注流程整合成更貼近日常使用的效率體驗。"
    },
    en: {
      title: "AI Time Management",
      description:
        "A productivity app with AI task breakdown, focus timing, and progress review, helping users turn overwhelming goals into trackable and sustainable daily rhythms.",
      highlight:
        "Highlight: integrates AI guidance, behavioral feedback, and focus structure into a practical everyday workflow."
    }
  },
  {
    status: "released",
    version: "1.3",
    icon: "assets/icons/pr-diary.png",
    url: {
      zh: "https://apps.apple.com/us/app/%E5%85%AC%E9%97%9C%E6%97%A5%E8%A8%98/id6761694656?l=zh-Hant-TW",
      en: "https://apps.apple.com/us/app/%E5%85%AC%E9%97%9C%E6%97%A5%E8%A8%98/id6761694656"
    },
    zh: {
      title: "公關日記",
      description:
        "結合產業介紹與個人紀錄的主題型 app，從台灣酒店文化出發，延伸到客人、小姐／男模與經紀的多角色日記，兼具知識整理與日常管理用途。",
      highlight:
        "亮點：將少見產業題材轉化為有故事感、資訊性與實用價值的行動作品。"
    },
    en: {
      title: "PR Diary",
      description:
        "A themed app combining industry guidance with multi-role diaries for Taiwan's nightlife PR culture, supporting both cultural understanding and personal record-keeping.",
      highlight:
        "Highlight: turns a niche subject into an informative, atmospheric, and practical mobile product."
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
