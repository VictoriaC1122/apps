# VictoriaC1122 Apps Site

App showcase site for Victoria Cheng, available in the same 50 website languages as FireSparkle.Studio.

## Editing and validation

- `data/catalog.json`: the 18 app IDs, order, versions, icons and confirmed store links.
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

Each language contains 32 interface messages and all 18 app titles, descriptions and highlights (86 fields total). Arabic, Persian, Hebrew and Urdu use RTL layout, including carousel controls. A failed or incomplete language download leaves the current content visible and offers retry; an older response cannot overwrite a later selection. Traditional Chinese is bundled as an immediate fallback. Website language availability is separate from each app’s supported languages. Chinese links use the existing Taiwan storefront; other languages use the confirmed US links.

## Verification

`npm test` verifies 50 complete language files, app IDs, content hashes, template text keys and local links. Browser checks cover the language dialog, search and keyboard selection, URL and saved preference, mobile layout, RTL carousel navigation, delayed responses and failed downloads with retry.

## Notes

- The 2026-11-14 refresh rechecked all 18 app IDs and the developer catalogs in Taiwan and the US, plus author search and standalone Mac listings. There are no new releases, version changes or material metadata changes since the complete 2026-11-13 21:53 catalog. The per-app results and source URLs are saved in `data/catalog-verification-2026-11-14.json`.

- All eighteen featured apps are published and have confirmed App Store links, with Taiwan links for Chinese and US links for other website languages.
- Versions and store titles were checked on 2026-11-14 using Apple's Lookup API for developer `1851202446` (Yung Wen Cheng), in both Taiwan and the US.
- Both Lookup catalogs list the same eighteen apps. The latest refresh adds `Luxury Guide` / `名牌指南` (6830889178) at 1.0, including its official icon and bilingual description. Its App Store categories are Education and Lifestyle.
- All eighteen versions match both storefronts. The existing seventeen versions, store titles, descriptions, release notes, artwork URLs and categories are unchanged from the earlier 2026-11-13 refresh, which added `FinAtlas: Finance & Careers` / `FinAtlas 金融產業與職涯` (6830943408).
- `圖解半導體` now uses its official US App Store title, `SemiVerse: Chips Illustrated`, in English. `Larry's Mixology Lab` and `Easy Lucky Draw` remain translated portfolio titles because their US listings use Chinese names.
- Descriptions reflect Coffee Chat's 20 interface languages, Future Major Guide's 25 interface languages, AI Time Management's on-device rules and templates, and Perfect Pig's option to continue companionship after seven days of growth.
- Sources: [Taiwan catalog](https://itunes.apple.com/lookup?id=1851202446&entity=software&country=tw&limit=200), [US catalog](https://itunes.apple.com/lookup?id=1851202446&entity=software&country=us&limit=200), [developer page](https://apps.apple.com/tw/developer/yung-wen-cheng/id1851202446).
