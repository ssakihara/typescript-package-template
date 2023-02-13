import { devices } from '@playwright/test';

const config = {
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
      slowMo: 1000,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};

export default config;
