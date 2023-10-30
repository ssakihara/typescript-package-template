/// <reference types="vitest" />

import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  define: {
    'import.meta.vitest': false,
  },
  test: {
    globals: true,
    include: ['test/unit/**/*.test.ts'],
    setupFiles: './test/unit/vitest.setup.ts',
    testTimeout: 1000 * 60 * 1,
  },
  plugins: [tsconfigPaths(), dts()],
});
