import { chromium } from "@playwright/test";
import { spawn } from "node:child_process";

const widths = [390, 430];
const server = spawn("npx", ["--yes", "serve", "out", "-l", "5050"], {
  stdio: "ignore",
  cwd: new URL("..", import.meta.url).pathname,
});
await new Promise((r) => setTimeout(r, 3000));

try {
  const browser = await chromium.launch();
  for (const width of widths) {
    const ctx = await browser.newContext({
      viewport: { width, height: 800 },
      deviceScaleFactor: 2,
    });
    const page = await ctx.newPage();
    await page.goto("http://localhost:5050");
    await page.waitForLoadState("networkidle");

    // Check for horizontal overflow on the document
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const hOverflow = scrollWidth > clientWidth + 1;
    console.log(
      `width=${width}px: scrollWidth=${scrollWidth} clientWidth=${clientWidth} overflow=${hOverflow}`
    );

    // Screenshot to /tmp for visual inspection
    await page.screenshot({ path: `/tmp/jantax-mobile-${width}.png`, fullPage: true });

    await ctx.close();
  }
  await browser.close();
} finally {
  server.kill();
}
