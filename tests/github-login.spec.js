const { test, expect } = require('@playwright/test');

test('GitHub login page validation', async ({ page }) => {

  await page.goto('https://github.com/login');

  await expect(page.locator('#login_field')).toBeVisible();

  await expect(page.locator('#password')).toBeVisible();

  await expect(
    page.locator('input[type="submit"]')
  ).toBeVisible();

});
