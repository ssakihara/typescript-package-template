module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'typescript-sort-keys'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:require-extensions/recommended',
    'plugin:consistent-default-export-name/fixed',
    'prettier',
  ],
  ignorePatterns: ['dist', 'docs', '.eslintrc.cjs'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'import/no-relative-parent-imports': [
      'error',
      {
        ignore: ['#app', '@/', '@tests/'],
      },
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      { selector: 'memberLike', format: ['strictCamelCase'] },
      { selector: 'method', format: ['strictCamelCase'] },
      { selector: 'property', format: ['strictCamelCase', 'snake_case', 'UPPER_CASE'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'variableLike', format: ['strictCamelCase', 'UPPER_CASE'], modifiers: ['async'] },
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],
  },
};
