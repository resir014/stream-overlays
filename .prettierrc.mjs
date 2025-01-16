import defaultConfig from '@epic-web/config/prettier';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  ...defaultConfig,
  printWidth: 100,
  semi: true,
  trailingComma: 'es5',
  useTabs: false,
};

export default config;
