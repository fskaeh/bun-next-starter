/** @type {import('lint-staged').Config} */
const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,md,html,json}': ['prettier --write'],
  '*.{css,scss}': ['stylelint'],
}

module.exports = config
