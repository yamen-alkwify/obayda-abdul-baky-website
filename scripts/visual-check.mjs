import { chromium } from 'playwright';
import { mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const baseUrl = process.env.SITE_URL ?? 'http://127.0.0.1:4173';
const output = await mkdtemp(join(tmpdir(), 'obayda-visual-'));
const browser = await chromium.launch(process.env.CHROME_PATH
  ? { headless: true, executablePath: process.env.CHROME_PATH }
  : { headless: true, channel: 'chrome' });
const results = [];

try {
  for (const [width, height, viewportName] of [[1440, 900, 'desktop'], [768, 1024, 'tablet'], [390, 844, 'mobile']]) {
    for (const language of ['ar', 'en']) {
      for (const theme of ['dark', 'light']) {
        const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
        await page.goto(baseUrl, { waitUntil: 'networkidle' });
        await page.evaluate(({ language, theme }) => {
          localStorage.setItem('obayda-language', language);
          localStorage.setItem('obayda-theme', theme);
        }, { language, theme });
        await page.reload({ waitUntil: 'networkidle' });
        await page.evaluate(async () => {
          await document.fonts.ready;
          for (let y = 0; y < document.body.scrollHeight; y += innerHeight * .8) {
            scrollTo(0, y);
            await new Promise(resolve => setTimeout(resolve, 28));
          }
          scrollTo(0, 0);
          document.querySelectorAll('.reveal').forEach(node => node.classList.add('visible'));
        });
        await page.waitForTimeout(350);

        const state = await page.evaluate(() => {
          const title = document.querySelector('.hero-title');
          const photo = document.querySelector('.about-scene img');
          const glass = document.querySelector('.leadership-card');
          const glassIcon = document.querySelector('#language-toggle');
          const menuStroke = document.querySelector('.menu-button span');
          return {
            lang: document.documentElement.lang,
            theme: document.documentElement.dataset.theme,
            pageWidth: document.documentElement.scrollWidth,
            viewportWidth: innerWidth,
            titleClipped: title.scrollWidth > title.clientWidth + 1,
            photoLoaded: photo.complete && photo.naturalWidth > 0,
            glassBlur: getComputedStyle(glass).backdropFilter,
            iconBlur: getComputedStyle(glassIcon).backdropFilter,
            menuStrokePosition: getComputedStyle(menuStroke).position,
          };
        });
        const tag = `${viewportName}-${language}-${theme}`;
        if ((viewportName === 'desktop' && language === 'ar' && theme === 'dark') ||
            (viewportName === 'mobile' && language === 'en' && theme === 'light') ||
            (viewportName === 'mobile' && language === 'ar' && theme === 'dark')) {
          await page.screenshot({ path: join(output, `${tag}-viewport.png`) });
          await page.screenshot({ path: join(output, `${tag}-full.png`), fullPage: true });
          for (const section of ['about', 'leadership', 'journey', 'expertise', 'contact']) {
            await page.locator(`#${section}`).screenshot({ path: join(output, `${tag}-${section}.png`) });
          }
        }
        if (viewportName === 'desktop' && language === 'ar' && theme === 'dark') {
          await page.locator('.desktop-nav a[href="#leadership"]').hover();
          await page.waitForTimeout(400);
          state.navGlowOpacity = await page.locator('.desktop-nav a[href="#leadership"]').evaluate(element => getComputedStyle(element, '::before').opacity);
        }
        if (viewportName === 'mobile' && language === 'en' && theme === 'light') {
          await page.locator('#menu-toggle').click();
          state.menuOpened = await page.locator('#menu-toggle').getAttribute('aria-expanded');
          await page.keyboard.press('Escape');
          state.menuClosed = await page.locator('#menu-toggle').getAttribute('aria-expanded');
        }
        results.push({ tag, ...state, errors });
        await context.close();
      }
    }
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify({ output, results }, null, 2));
if (results.some(result => result.errors.length || result.pageWidth > result.viewportWidth + 1 || result.titleClipped || !result.photoLoaded || result.glassBlur === 'none' || result.iconBlur === 'none' || result.menuStrokePosition !== 'absolute')) process.exitCode = 1;
