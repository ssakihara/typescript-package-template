module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: [
    '.eslintrc.cjs',
    'commitlint.config.cjs',
    'jest.config.cjs',
    'playwright.config.ts',
    'prettierrc.cjs',
    'release.config.cjs',
    'vite.config.ts',
    'vite.doc.config.ts',
  ],
};
