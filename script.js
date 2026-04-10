const PAGE_CONTENT = {
  zh: {
    brand: "Victoria Cheng's App",
    navApps: "Apps",
    heroTitle: "獨立開發作品集",
    heroBody:
      "這裡收錄我獨立構思、設計與開發的 iOS 作品。每一個 app 都從真實需求出發，也試著留下自己的語氣、溫度與記憶點。",
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
      "A bilingual portfolio of iOS apps I conceived, designed, and built independently. Each work begins with a real need, then becomes a product with its own tone, warmth, and atmosphere.",
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
        "為加密貨幣與區塊鏈初學者打造的學習字典，把艱澀分散的概念整理成清楚、友善、可持續探索的知識旅程。",
      highlight:
        "亮點：可搜尋、可收藏，也更有閱讀慾望的幣圈入門入口。"
    },
    en: {
      title: "Crypto Guide: Beginner Dictionary for Crypto & Blockchain",
      description:
        "A beginner-friendly crypto and blockchain dictionary that turns scattered concepts into a clearer, more inviting learning journey.",
      highlight:
        "Highlight: a searchable, saveable, unexpectedly inviting reference."
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
        "乾淨、直覺、零廣告的抽獎工具，適用於活動、課堂與聚會，讓幾秒鐘的抽選也能有節奏、期待感與完成度。",
      highlight:
        "亮點：把日常小工具做得輕盈俐落，帶一點舞台感。"
    },
    en: {
      title: "Easy Lucky Draw",
      description:
        "A clean, zero-ad drawing tool for events, classrooms, and parties, turning a quick selection into a smoother, livelier moment.",
      highlight:
        "Highlight: a simple utility with a small sense of ceremony."
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
        "結合 AI 任務拆解、專注計時與進度回顧，幫助使用者把巨大而模糊的壓力，整理成可以開始的日常節奏。",
      highlight:
        "亮點：讓時間管理更像被理解、被陪伴的前進方式。"
    },
    en: {
      title: "AI Time Management",
      description:
        "A productivity app with AI task breakdown, focus timing, and progress review, turning overwhelming goals into achievable rhythms.",
      highlight:
        "Highlight: productivity made gentler and more companion-like."
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
        "進階財務試算工具，整合複利、定期定額、貸款、退休與通膨情境，讓長期金錢決策更清楚、更貼近生活。",
      highlight:
        "亮點：把複雜財務邏輯翻譯成清楚優雅的決策介面。"
    },
    en: {
      title: "Compound Interest Calculator",
      description:
        "An advanced finance utility for compound growth, DCA, loans, retirement planning, and inflation-aware decisions.",
      highlight:
        "Highlight: complex finance made lucid, visual, and approachable."
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
        "以每日保健品管理為核心，結合服用紀錄、歷史追蹤與知識整理，讓照顧自己慢慢長成穩定溫柔的習慣。",
      highlight:
        "亮點：把日常保健變得輕柔、可愛，也更容易持續。"
    },
    en: {
      title: "Did You Take Your Vitamins Today?",
      description:
        "A wellness app for daily supplement routines, blending intake logs, history tracking, and educational content into a kinder self-care flow.",
      highlight:
        "Highlight: self-care made soft, charming, and easy to return to."
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
        "療癒系夢境記錄 app，支援快速記夢、語音輸入、情緒整理與收藏回顧，讓醒來後快消散的畫面被溫柔留下。",
      highlight:
        "亮點：把夢、情緒與回憶收進安靜浪漫的介面。"
    },
    en: {
      title: "Leave Your Dream Behind",
      description:
        "A gentle dream-journaling app for capturing fragile images after waking, with quick entry, voice input, mood reflection, and favorites.",
      highlight:
        "Highlight: dream, memory, and emotion in a quiet, romantic interface."
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
        "結合產業介紹與個人紀錄的主題型 app，從台灣酒店文化出發，延伸到客人、小姐／男模與經紀的多角色日記。",
      highlight:
        "亮點：把少見題材整理成有故事感、資訊性與實用性的作品。"
    },
    en: {
      title: "PR Diary",
      description:
        "A themed app combining industry guidance with multi-role diaries for Taiwan's nightlife PR culture.",
      highlight:
        "Highlight: niche culture made informative, atmospheric, and distinctive."
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
        "以調酒研究室為背景的 18 禁戀愛遊戲，結合角色互動、情感敘事與分支推進，讓曖昧與想像力慢慢發酵。",
      highlight:
        "亮點：角色魅力、敘事張力與成人向氛圍的互動體驗。"
    },
    en: {
      title: "Larry's Mixology Lab",
      description:
        "An 18+ romance game set inside a mixology lab, blending character chemistry, emotional tension, and branching progression.",
      highlight:
        "Highlight: sensual mood, narrative tension, and character allure."
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
