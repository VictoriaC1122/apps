const content = {
  zh: {
    brand: "Victoria Cheng Apps",
    navApps: "Apps",
    navMainSite: "Main Site",
    navGithub: "GitHub",
    heroTitle: "我開發的 App 們",
    heroBody:
      "這是一個專門收錄 Victoria Cheng 個人開發作品的雙語頁面，集中展示 app 圖示、下載入口與作品亮點。",
    sectionKicker: "Featured Apps",
    storeLabel: "前往 App Store",
    comingSoon: "下載連結整理中",
    apps: [
      {
        title: "AI Time Management",
        meta: "iOS App・2025・獨立設計與開發",
        description:
          "一款結合 AI 任務拆解、專注計時與進度回顧的效率工具，幫助使用者把模糊的大目標轉成可執行的專注流程。",
        highlight:
          "作品重點：結合 AI 建議、穩定計時與真實專注洞察，讓日常規劃更容易落地。",
        icon: "assets/icons/ai-time-management.png",
        url: "https://apps.apple.com/us/app/ai%E6%99%82%E9%96%93%E7%AE%A1%E7%90%86/id6754973616?l=zh-Hant-TW"
      },
      {
        title: "Easy Lucky Draw",
        meta: "iOS App・2025・獨立設計與開發",
        description:
          "一款乾淨、直覺、零廣告的抽獎工具，適合活動、聚會、課堂分組與名單抽選，支援名單整理與即時抽選動畫。",
        highlight:
          "作品重點：把實用性、視覺質感與即時互動結合，快速完成消費型工具 app 的完整體驗。",
        icon: "assets/icons/easy-lucky-draw.png",
        url: "https://apps.apple.com/us/app/%E8%BC%95%E9%AC%86%E6%8A%BD%E7%8D%8E%E7%A8%8B%E5%BC%8F/id6755403297?l=zh-Hant-TW"
      },
      {
        title: "Compound Interest Calculator",
        meta: "iOS App・2025・獨立設計與開發",
        description:
          "一款進階財務試算工具，整合複利、定期定額、財務自由、貸款與退休規劃，幫助使用者把複雜參數轉成清楚決策。",
        highlight:
          "作品重點：把投資、通膨與退休規劃等金融邏輯，翻譯成直覺、可視化且容易操作的介面。",
        icon: "assets/icons/compound-interest-calculator.png",
        url: null
      },
      {
        title: "Did You Take Your Vitamins Today?",
        meta: "iOS App・2026・獨立設計與開發",
        description:
          "一款以日常補充品管理為核心的健康工具，包含首頁、歷史、知識與個人頁面，協助使用者建立穩定的保健習慣。",
        highlight:
          "作品重點：把健康追蹤、知識整理與個人化紀錄整合進溫和清楚的行動介面。",
        icon: "assets/icons/did-you-take-your-vitamins-today.png",
        url: null
      }
    ]
  },
  en: {
    brand: "Victoria Cheng Apps",
    navApps: "Apps",
    navMainSite: "Main Site",
    navGithub: "GitHub",
    heroTitle: "Apps I Built",
    heroBody:
      "This bilingual showcase gathers Victoria Cheng's independently designed and developed apps in one dedicated place, with icons, download links, and project highlights.",
    sectionKicker: "Featured Apps",
    storeLabel: "View on App Store",
    comingSoon: "Download link coming soon",
    apps: [
      {
        title: "AI Time Management",
        meta: "iOS App · 2025 · Independently designed and developed",
        description:
          "A productivity app that combines AI task breakdown, focus timing, and progress review to help users turn vague goals into structured, actionable sessions.",
        highlight:
          "Project highlight: blends AI guidance, reliable timers, and practical focus insights into a workflow people can actually use every day.",
        icon: "assets/icons/ai-time-management.png",
        url: "https://apps.apple.com/us/app/ai%E6%99%82%E9%96%93%E7%AE%A1%E7%90%86/id6754973616"
      },
      {
        title: "Easy Lucky Draw",
        meta: "iOS App · 2025 · Independently designed and developed",
        description:
          "A clean, intuitive, zero-ad mobile drawing tool for events, classrooms, parties, and team activities, with list cleanup and lively draw animation.",
        highlight:
          "Project highlight: turns a simple utility into a polished consumer app through thoughtful visuals and immediate interaction feedback.",
        icon: "assets/icons/easy-lucky-draw.png",
        url: "https://apps.apple.com/us/app/%E8%BC%95%E9%AC%86%E6%8A%BD%E7%8D%8E%E7%A8%8B%E5%BC%8F/id6755403297"
      },
      {
        title: "Compound Interest Calculator",
        meta: "iOS App · 2025 · Independently designed and developed",
        description:
          "An advanced finance utility that brings compound growth, DCA, FIRE planning, loan analysis, and retirement planning into a single readable experience.",
        highlight:
          "Project highlight: translates sophisticated financial logic into approachable, visual, decision-ready product flows.",
        icon: "assets/icons/compound-interest-calculator.png",
        url: null
      },
      {
        title: "Did You Take Your Vitamins Today?",
        meta: "iOS App · 2026 · Independently designed and developed",
        description:
          "A health-tracking app centered on supplement routines, with dedicated home, history, knowledge, and profile views for everyday habit support.",
        highlight:
          "Project highlight: combines wellness tracking, educational content, and personal records in a gentle, friendly mobile interface.",
        icon: "assets/icons/did-you-take-your-vitamins-today.png",
        url: null
      }
    ]
  }
};

const template = document.querySelector("#appCardTemplate");
const grid = document.querySelector("#appsGrid");
const toggle = document.querySelector("#langToggle");
let language = "zh";

function renderPage() {
  const page = content[language];

  document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  toggle.textContent = language === "zh" ? "EN" : "中文";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = page[key];
  });

  grid.innerHTML = "";

  page.apps.forEach((app) => {
    const card = template.content.cloneNode(true);
    const icon = card.querySelector(".app-icon");
    const title = card.querySelector(".app-title");
    const meta = card.querySelector(".app-meta");
    const description = card.querySelector(".app-description");
    const highlight = card.querySelector(".app-highlight");
    const button = card.querySelector(".app-button");

    icon.src = app.icon;
    icon.alt = `${app.title} icon`;
    title.textContent = app.title;
    meta.textContent = app.meta;
    description.textContent = app.description;
    highlight.textContent = app.highlight;

    if (app.url) {
      button.href = app.url;
      button.textContent = page.storeLabel;
      button.classList.remove("is-disabled");
      button.removeAttribute("aria-disabled");
    } else {
      button.removeAttribute("href");
      button.textContent = page.comingSoon;
      button.classList.add("is-disabled");
      button.setAttribute("aria-disabled", "true");
    }

    grid.appendChild(card);
  });
}

toggle.addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  renderPage();
});

renderPage();
