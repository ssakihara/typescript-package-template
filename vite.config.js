import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
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
});
