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
    include: ['tests/unit/**/*.test.ts'],
    setupFiles: './tests/unit/vitest.setup.ts',
    testTimeout: 1000 * 60 * 1,
  },
  plugins: [tsconfigPaths(), dts()],
});
