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
  plugins: ['@typescript-eslint', 'typescript-sort-keys'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'prettier',
  ],
  ignorePatterns: [
    '.eslintrc.cjs',
    'commitlint.config.cjs',
    'jest.config.ts',
    'playwright.config.ts',
    'prettierrc.cjs',
    'release.config.cjs',
    'vite.config.ts',
    'vite.doc.config.ts',
  ],
};
