import { test, expect } from "@playwright/test";

test("hero renders with coming-soon copy and CTAs", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/coming soon · san jose/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: /a new way to/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /join waitlist/i }).first()).toBeVisible();
  await expect(page.getByRole("button", { name: /talk to the founders/i }).first()).toBeVisible();
});

test("PREVIEW tags appear on bento cards", async ({ page }) => {
  await page.goto("/");
  const count = await page.getByText(/^preview$/i).count();
  expect(count).toBeGreaterThanOrEqual(3);
});

test("page has the expected sections", async ({ page }) => {
  await page.goto("/");
  const sections = await page.locator("section").count();
  expect(sections).toBeGreaterThanOrEqual(8);
});

test("waitlist email validation rejects invalid", async ({ page }) => {
  await page.goto("/");
  await page.locator("#waitlist").scrollIntoViewIfNeeded();
  await page.locator("#waitlist input[type=email]").fill("not-an-email");
  await page.locator("#waitlist button[type=submit]").click();
  await expect(page.getByText(/please use a valid email/i)).toBeVisible();
});

test("waitlist accepts valid email (dry-run mode)", async ({ page }) => {
  await page.goto("/");
  await page.locator("#waitlist").scrollIntoViewIfNeeded();
  await page.locator("#waitlist input[type=email]").fill("test@example.com");
  await page.locator("#waitlist button[type=submit]").click();
  await expect(page.getByText(/you're in/i)).toBeVisible({ timeout: 5_000 });
});

test("founders dialog opens and validates", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /talk to the founders/i }).first().click();
  await expect(page.getByRole("heading", { name: /talk to the founders/i })).toBeVisible();
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(page.getByText(/please fill in all fields/i)).toBeVisible();
});
