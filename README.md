# VictoriaC1122 Apps Site

App showcase site for Victoria Cheng, available in the same 50 website languages as FireSparkle.Studio.

## Editing and validation

- `data/catalog.json`: the 19 app IDs, order, versions, icons and confirmed store links.
- `data/messages.json`: Traditional Chinese and English interface text, app names, descriptions and highlights.
- `data/languages.json`: the same 50 locale codes, native names and writing directions as FireSparkle.Studio.
- `data/locales/<code>.json`: complete translations for the other 48 languages. Product names retain their English portfolio names, except Simplified Chinese uses the Chinese names.
- `src/index.html`: page and language-dialog template; `styles.css` preserves the portfolio design with language-aware typography and RTL layout.
- `script.js`: on-demand language loading, card rendering, language search, preferences and carousel controls.
- `scripts/build.mjs`: validates every translation, generates content-hashed locale files, `i18n-config.js` and `index.html`.
- `assets/icons/`: local app icons from Xcode asset catalogs and official App Store artwork.

Run `npm run build` and `npm test`, then preview with `npm run preview` at `http://127.0.0.1:4174/`. The build needs no dependencies. Commit the generated site files along with the source; GitHub Pages publishes the repository root. `node scripts/build.mjs --preview` can temporarily omit incomplete languages during development. `npm test` rejects partial preview builds; always run the full build before publishing.

## Language behavior

The language chooser searches by native, English or Chinese name and supports the keyboard. Language priority is `?lang=`, a saved `victoria_apps_language` preference, browser language, then English. Existing `zh` preferences continue to mean Traditional Chinese. Language selection updates the URL so it can be shared and is saved locally when storage is available. No translation service is called; only the selected language file is fetched from this site.

Each language contains 37 interface messages and all 19 app titles, descriptions and highlights (94 fields total). Arabic, Persian, Hebrew and Urdu use RTL layout, including carousel controls. A failed or incomplete language download leaves the current content visible and offers retry; an older response cannot overwrite a later selection. Traditional Chinese is bundled as an immediate fallback. Website language availability is separate from each app’s supported languages. Chinese links use the existing Taiwan storefront; other languages use the confirmed US links.

## Verification

`npm test` verifies 50 complete language files, app IDs, content hashes, template text keys and local links. Browser checks cover the language dialog, search and keyboard selection, URL and saved preference, mobile layout, RTL carousel navigation, delayed responses and failed downloads with retry.

## Notes

- The 2026-11-19 update features Larry’s Cocktail Lab on Steam above the original portfolio introduction. The feature uses the official 1920×1080 screenshot, direct purchase and wishlist links, platform labels and a Steam navigation link. Five Steam messages reuse FireSparkle’s existing translations in all 50 languages; existing app copy, versions, icons and popularity order are unchanged. Source evidence is recorded in `data/steam-feature-2026-11-19.json`.

- The 2026-11-18 refresh rechecks the Taiwan and US author catalogs, search, all 19 IDs and standalone Mac listings. No new app is listed. It updates Build It Yourself to 1.3.0, Coffee Chat Note to 1.2.3, SemiVerse to 1.2.2, FinAtlas to 1.2 and ADHD Compass to 1.1.0. All 19 official 512px icons were downloaded and compared: 14 portfolio icons are replaced, including older local artwork, using content-hashed filenames. Every active icon now exactly matches the official download. The existing 50 complete language dictionaries are preserved. Sources and hashes are recorded in `data/catalog-verification-2026-11-18.json` and `data/app-icons-2026-11-18.json`; raw Apple responses are in the FireSparkle repository.

- The 2026-11-17 refresh verifies all 19 apps in Taiwan and the US, with no new releases. Stock Mastery: Paper Trading updates from 2.8.0 to 2.9.0 with its latest official icon; the other 18 apps are unchanged. Per-app versions and source URLs are in `data/catalog-verification-2026-11-17.json`; original Apple responses are preserved in the FireSparkle repository.

- The 2026-11-16 refresh adds ADHD Compass 1.0.0 (6830942101), bringing the portfolio to 19 apps. It updates Investment Growth to 2.6.2, Stock Mastery to 2.8.0, Perfect Pig to 1.6.0, Paper Reading Desk to 1.1.2 and FinAtlas to 1.1. Taiwan and US author catalogs and individual ID checks agree. Results are saved in `data/catalog-verification-2026-11-16.json`; the original responses are in the FireSparkle repository’s `data/apple-lookup-2026-11-16-{tw,us}.json`. ADHD Compass copy describes the public task, timer and record features; in-app screening answers are not advertised as available.

- The 2026-11-14 refresh rechecked all 18 app IDs and the developer catalogs in Taiwan and the US, plus author search and standalone Mac listings. There are no new releases, version changes or material metadata changes since the complete 2026-11-13 21:53 catalog. The per-app results and source URLs are saved in `data/catalog-verification-2026-11-14.json`.

- All nineteen featured apps are published and have confirmed App Store links, with Taiwan links for Chinese and US links for other website languages.
- Versions and store titles were checked on 2026-11-18 using Apple's Lookup API for developer `1851202446` (Yung Wen Cheng), in both Taiwan and the US.
- The 2026-11-13 evening Lookup catalogs listed the same eighteen apps. That refresh added `Luxury Guide` / `名牌指南` (6830889178) at 1.0, including its official icon and bilingual description. Its App Store categories are Education and Lifestyle.
- All nineteen current versions match both storefronts. The earlier 2026-11-13 refresh added `FinAtlas: Finance & Careers` / `FinAtlas 金融產業與職涯` (6830943408); the subsequent evening refresh added Luxury Guide without changes to the previous seventeen apps.
- `圖解半導體` now uses its official US App Store title, `SemiVerse: Chips Illustrated`, in English. `Larry's Mixology Lab` and `Easy Lucky Draw` remain translated portfolio titles because their US listings use Chinese names.
- Descriptions reflect Coffee Chat's 20 interface languages, Future Major Guide's 25 interface languages, AI Time Management's on-device rules and templates, and Perfect Pig's option to continue companionship after seven days of growth.
- Sources: [Taiwan catalog](https://itunes.apple.com/lookup?id=1851202446&entity=software&country=tw&limit=200), [US catalog](https://itunes.apple.com/lookup?id=1851202446&entity=software&country=us&limit=200), [developer page](https://apps.apple.com/tw/developer/yung-wen-cheng/id1851202446).
