import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = path => readFile(resolve(root, path), 'utf8');
const digest = data => createHash('sha256').update(data).digest('hex').slice(0, 12);
const context = { window: {} };
vm.runInNewContext(await read('i18n-config.js'), context);
const config = JSON.parse(JSON.stringify(context.window.PORTFOLIO_CONFIG));
const locales = JSON.parse(await read('data/languages.json'));
const catalog = JSON.parse(await read('data/catalog.json'));
assert.equal(config.complete, true, 'Preview builds must never be published');
assert.equal(config.locales.length, 50);
assert.deepEqual(config.apps, catalog);
assert.deepEqual(config.locales.map(({ file, ...locale }) => locale), locales);
const keySet = Object.keys(config.defaultMessages.ui).sort();
const appSet = catalog.map(app => app.id).sort();
for (const locale of config.locales) {
  const data = await read(`locales/${locale.file}`);
  assert.equal(locale.file, `${locale.code}.${digest(data)}.json`, 'Locale asset hash is stale');
  const payload = JSON.parse(data);
  assert.equal(payload.locale, locale.code);
  assert.deepEqual(Object.keys(payload.ui).sort(), keySet);
  assert.deepEqual(Object.keys(payload.apps).sort(), appSet);
  for (const app of Object.values(payload.apps)) {
    assert.deepEqual(Object.keys(app).sort(), ['description', 'highlight', 'title']);
    assert(Object.values(app).every(text => typeof text === 'string' && text.trim() && !/[<>]/.test(text)));
  }
}
const html = await read('index.html');
assert(!/\{\{[A-Z_]+\}\}/.test(html));
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'HTML IDs must be unique');
for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
  const url = new URL(match[1], 'https://example.test/apps/');
  if (url.origin !== 'https://example.test') continue;
  if (url.pathname !== '/apps/') {
    const file = decodeURIComponent(url.pathname.slice('/apps/'.length));
    await access(resolve(root, file));
    if (url.searchParams.has('v')) assert.equal(url.searchParams.get('v'), digest(await read(file)), `Outdated HTML cache key: ${file}`);
  }
  if (url.hash) assert(ids.includes(url.hash.slice(1)), `Missing anchor ${url.hash}`);
}
for (const match of html.matchAll(/data-i18n(?:-label)?="([^"]+)"/g)) assert(keySet.includes(match[1]), `Unknown template message: ${match[1]}`);
console.log(`Verified ${config.locales.length} complete locales × ${keySet.length + appSet.length * 3} messages, ${appSet.length} apps, asset hashes, HTML links and anchors.`);
