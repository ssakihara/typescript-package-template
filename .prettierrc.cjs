const organizeImports = require('prettier-plugin-organize-imports');

module.exports = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: [organizeImports],
};
