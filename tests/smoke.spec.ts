import { test, expect } from "@playwright/test";

test("hero renders with launch copy and CTAs", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/launching first in san jose/i).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /your city.s south asian community/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /get early access/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /join the waitlist/i }).first()).toBeVisible();
  await expect(page.getByRole("button", { name: /^talk to the team$/i })).toBeVisible();
});

test("page has the expected sections", async ({ page }) => {
  await page.goto("/");
  const sections = await page.locator("section").count();
  expect(sections).toBeGreaterThanOrEqual(8);
});

test("built-by section names no individuals", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /throwing the events/i })).toBeVisible();
  await expect(page.getByText(/isn.t built in a boardroom/i)).toBeVisible();
  // The section is deliberately unattributed — no founder bios, no names.
  await expect(page.getByText(/founder/i)).toHaveCount(0);
});

test("waitlist dialog validates email", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /join the waitlist/i }).first().click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("heading", { name: /join the waitlist/i })).toBeVisible();

  await dialog.locator("input[type=email]").fill("not-an-email");
  await dialog.getByRole("button", { name: /join waitlist/i }).click();
  await expect(page.getByText(/please use a valid email/i)).toBeVisible();
});

test("waitlist accepts a valid email", async ({ page }) => {
  // Stub our forms API — without this the test writes a real row to
  // marketing_submissions and emails the team.
  await page.route("**/api/forms", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: '{"success":true}' }),
  );

  await page.goto("/");
  await page.getByRole("button", { name: /join the waitlist/i }).first().click();
  const dialog = page.getByRole("dialog");
  await dialog.locator("input[type=email]").fill("test@example.com");
  await dialog.getByRole("button", { name: /join waitlist/i }).click();
  await expect(page.getByText(/you.re in/i)).toBeVisible({ timeout: 5_000 });
});

test("team dialog opens and validates", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /^talk to the team$/i }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("heading", { name: /talk to the team/i })).toBeVisible();
  await dialog.getByRole("button", { name: /send message/i }).click();
  await expect(page.getByText(/please fill in all fields/i)).toBeVisible();
});

test("nav Demo button opens the demo request form", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /^demo$/i }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("heading", { name: /request a demo/i })).toBeVisible();
  // Demo variant adds the organization field and its own submit label.
  await expect(dialog.getByPlaceholder(/organization or event/i)).toBeVisible();
  await dialog.getByRole("button", { name: /request demo/i }).click();
  await expect(page.getByText(/please fill in all fields/i)).toBeVisible();
});

test("final CTA offers both the team and waitlist actions", async ({ page }) => {
  await page.goto("/");
  const cta = page.locator("#waitlist");
  await expect(cta.getByRole("button", { name: /talk to the team/i })).toBeVisible();
  await expect(cta.getByRole("button", { name: /join the waitlist/i })).toBeVisible();
});
