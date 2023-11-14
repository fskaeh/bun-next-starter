/** @type {import('lint-staged').Config} */
const config = {
  '**/*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --config ./.prettierrc.js --write',
  ],
  '**/*.{css,scss,md,html,json}': [
    'prettier --config ./.prettierrc.js --write',
  ],
}

module.exports = config
