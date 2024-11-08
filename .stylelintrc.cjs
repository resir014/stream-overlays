/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-html/html', 'stylelint-config-html/astro'],
  rules: {
    'unit-allowed-list': ['em', 'rem', 'ms', 'ch', 's', 'px', '%', 'deg', 'fr', 'vh', 'vw', 'svh', 'svw'],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
};
