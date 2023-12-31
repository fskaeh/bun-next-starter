/** @type {import('prettier').Config} */
const config = {
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  arrowParens: 'always',
  bracketSpacing: true,
  jsxSingleQuote: true,
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-tailwindcss'],
}

module.exports = config
