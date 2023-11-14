/** @type {import('lint-staged').Config} */
const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,md,html,json}': ['prettier --write'],
}

module.exports = config
