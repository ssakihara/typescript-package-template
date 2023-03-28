import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const timeout = 1000 * 60 * 5;

export default defineConfig({
  testDir: 'tests/e2e',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    // trueならブラウザを立ち上げずに起動する
    headless: false,
    trace: 'on-first-retry',
    httpCredentials: {
      // Basic認証がある場合
      username: 'username',
      password: 'password',
    },
    // 動作を遅くして内容を確認したいとき
    launchOptions: {
      slowMo: 500,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 2400 } },
    },
  ],
  timeout,
});
