import { test, expect } from 'playwright/test';

test('test', async ({ page }) => {
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('abcd');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('pwd');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('h1')).toContainText('TTACart');
  await expect(page.locator('[data-test="login-container"]')).toMatchAriaSnapshot(`
    - textbox "Username": abcd
    - textbox "Password": pwd
    - alert: "Epic sadface: Username and password do not match any user in this service"
    - button "Login"
    `);
});