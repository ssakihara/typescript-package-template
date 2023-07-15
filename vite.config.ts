/// <reference types="vitest" />

import { resolve } from 'path';
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
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: (format, fileName) => {
        const ext = format === 'es' ? 'mjs' : 'js';
        return `${fileName}.${ext}`;
      },
    },
  },
  plugins: [tsconfigPaths(), dts()],
});
