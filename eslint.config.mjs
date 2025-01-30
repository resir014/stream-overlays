import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config as defaultConfig } from '@epic-web/config/eslint';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...defaultConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['.astro/*'],
  },
  ...compat.extends('eslint-config-gsap').map((config) => ({
    ...config,
    files: ['templates/**/*.{js,jsx,ts,tsx}'],
  })),
  {
    files: ['templates/**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.jquery,
        gsap: true,
        md5: true,
      },
    },

    rules: {},
  },
  {
    files: ['**/*.(d.)?ts(x)?'],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.json',
      },
    },

    rules: {},
  },
];
