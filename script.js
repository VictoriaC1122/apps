const PAGE_CONTENT = {
  zh: {
    brand: "Victoria Cheng's App",
    navApps: "Apps",
    heroTitle: "獨立開發作品集",
    heroBody:
      "這個雙語頁面收錄我獨立構思、設計與開發的 iOS 作品。它們有的源自真實生活裡細微卻反覆出現的需求，有的來自我對情感、秩序與想像力的執著；我希望每一個 app 都不只好用，也能留下語氣、溫度與記憶點。",
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
    brand: "Victoria Cheng's App",
    navApps: "Apps",
    heroTitle: "Selected iOS Works",
    heroBody:
      "This bilingual portfolio gathers iOS projects I conceived, designed, and built independently. Some begin with intimate, recurring needs from everyday life; others grow out of my fascination with emotion, order, and imagination. I want each app to feel not only useful, but memorable in tone, atmosphere, and desire.",
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
        "一款為加密貨幣與區塊鏈初學者打造的入門學習 app，把原本艱澀又分散的概念，整理成更清楚、更友善也更願意讓人持續探索的知識旅程。",
      highlight:
        "作品亮點：讓冰冷而陌生的金融新世界，長成一個可搜尋、可收藏、也更有閱讀慾望的行動知識入口。"
    },
    en: {
      title: "Crypto Guide: Beginner Dictionary for Crypto & Blockchain",
      description:
        "An onboarding app for crypto and blockchain beginners, turning a field that often feels cold, fragmented, and intimidating into a clearer learning journey users actually want to stay with.",
      highlight:
        "Highlight: transforms a scattered financial frontier into a searchable, saveable, and unexpectedly inviting mobile reference."
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
        "一款乾淨、直覺、零廣告的抽獎工具，適用於活動、課堂、聚會與分組情境，讓原本只是幾秒鐘的抽選過程，也能帶著節奏感、期待感與漂亮的完成度。",
      highlight:
        "作品亮點：把日常小工具做得輕盈、俐落又討喜，讓實用性也能帶著一點舞台感。"
    },
    en: {
      title: "Easy Lucky Draw",
      description:
        "A clean, intuitive, zero-ad drawing tool for events, classrooms, parties, and team activities, designed to turn a fleeting moment of selection into something smoother, livelier, and more delightful.",
      highlight:
        "Highlight: gives an ordinary utility a touch of ceremony through restrained visuals and satisfying motion."
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
        "一款結合 AI 任務拆解、專注計時與進度回顧的效率工具，幫助使用者把巨大而模糊的壓力，慢慢整理成可以開始、可以持續、也可以完成的日常節奏。",
      highlight:
        "作品亮點：讓時間管理不再只是冰冷規劃，而更像是一種被理解、被陪伴的前進方式。"
    },
    en: {
      title: "AI Time Management",
      description:
        "A productivity app that combines AI task breakdown, focus timing, and progress review, helping users soften overwhelming goals into rhythms that feel achievable, sustainable, and human.",
      highlight:
        "Highlight: turns productivity from a rigid system into a gentler, more companion-like experience of moving forward."
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
        "一款進階財務試算工具，整合複利、定期定額、財務自由、貸款與退休規劃，並把通膨一起納入，讓長期金錢決策不再只是冰冷公式，而更像對未來生活的細緻想像。",
      highlight:
        "作品亮點：把複雜的財務邏輯翻譯成更清楚、更優雅，也更願意讓人反覆打開的決策介面。"
    },
    en: {
      title: "Compound Interest Calculator",
      description:
        "An advanced finance utility that brings together compound growth, DCA, financial freedom planning, loan analysis, retirement planning, and inflation-aware thinking in one elegant decision space.",
      highlight:
        "Highlight: turns intimidating financial logic into a visual interface that feels lucid, refined, and surprisingly approachable."
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
        "一款以每日保健品管理為核心的健康 app，結合服用紀錄、歷史追蹤、知識整理與個人頁面，讓照顧自己這件事，不必再靠混亂提醒，而能慢慢長成穩定而溫柔的生活習慣。",
      highlight:
        "作品亮點：把日常保健變得更輕柔、更可愛，也更容易讓人真心想持續下去。"
    },
    en: {
      title: "Did You Take Your Vitamins Today?",
      description:
        "A wellness app centered on daily supplement routines, blending intake logs, history tracking, educational content, and a personal profile flow into a calmer and kinder way of caring for yourself.",
      highlight:
        "Highlight: turns everyday self-care into a ritual that feels soft, charming, and easy to return to."
    }
  },
  {
    status: "released",
    version: "1.0",
    icon: "assets/icons/leave-your-dream-behind.png",
    url: {
      zh: "https://apps.apple.com/us/app/%E6%8A%8A%E5%A4%A2%E9%81%BA%E7%95%99%E4%B8%8B%E4%BE%86/id6761692228?l=zh-Hant-TW",
      en: "https://apps.apple.com/us/app/%E6%8A%8A%E5%A4%A2%E9%81%BA%E7%95%99%E4%B8%8B%E4%BE%86/id6761692228"
    },
    zh: {
      title: "把夢遺留下來",
      description:
        "一款圍繞夢境記錄而設計的療癒系 app，支援快速記夢、語音輸入、情緒整理、收藏回顧與提醒功能，讓那些醒來後差點消散的畫面，還有機會被溫柔地留下來。",
      highlight:
        "作品亮點：把夢、情緒與回憶收納進一個安靜而浪漫的介面，讓記錄本身也帶著餘韻。"
    },
    en: {
      title: "Leave Your Dream Behind",
      description:
        "A gentle dream-journaling app for capturing the fragile images that almost disappear after waking, with quick entry, voice input, mood reflection, favorites, and reminders woven into a calm ritual.",
      highlight:
        "Highlight: wraps dream, memory, and emotion in an interface that feels quiet, intimate, and faintly romantic."
    }
  },
  {
    status: "released",
    version: "1.0",
    icon: "assets/icons/pr-diary.png",
    url: {
      zh: "https://apps.apple.com/us/app/%E5%85%AC%E9%97%9C%E6%97%A5%E8%A8%98/id6761694656?l=zh-Hant-TW",
      en: "https://apps.apple.com/us/app/%E5%85%AC%E9%97%9C%E6%97%A5%E8%A8%98/id6761694656"
    },
    zh: {
      title: "公關日記",
      description:
        "一款結合產業介紹與個人紀錄的主題型 app，從台灣酒店文化的術語、店型與消費觀念出發，延伸到客人、小姐／男模與經紀等多角色日記，讓一個原本隱晦而複雜的世界，有了更清晰也更迷人的閱讀入口。",
      highlight:
        "作品亮點：把少見而帶著距離感的產業題材，整理成兼具故事感、資訊性與實用性的行動作品。"
    },
    en: {
      title: "PR Diary",
      description:
        "A themed app that combines industry guidance with personal record-keeping, opening a clearer, more compelling window into Taiwan's nightlife PR culture through multi-role diary experiences.",
      highlight:
        "Highlight: turns a niche and often misunderstood world into a product that feels informative, atmospheric, and sharply distinctive."
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
        "一款以調酒研究室為背景的 18 禁戀愛遊戲，結合角色互動、情感敘事、場景氛圍與分支式推進，讓曖昧、慾望與想像力在遊戲裡慢慢發酵。",
      highlight:
        "作品亮點：把角色魅力、敘事張力與成人向氛圍收束成一場更濃烈、更有誘惑力的互動體驗。"
    },
    en: {
      title: "Larry's Mixology Lab",
      description:
        "An 18+ romance game set inside a mixology lab, where character chemistry, emotional tension, atmospheric scenes, and branching progression slowly ferment into desire.",
      highlight:
        "Highlight: blends sensual mood, narrative tension, and character allure into a concept piece designed to linger in memory."
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
