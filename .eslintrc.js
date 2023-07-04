/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'kentcdodds',
    'kentcdodds/react',
    'kentcdodds/jsx-a11y',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    // BEGIN: required by trpc
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    // END: required by trpc
    'jsx-a11y/anchor-is-valid': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['templates/**/*.{js,jsx,ts,tsx}'],
      extends: ['eslint-config-gsap'],
      env: {
        browser: true,
        commonjs: true,
        es6: true,
        jquery: true,
      },
      globals: {
        gsap: true,
        md5: true,
      },
      rules: {},
    },
    {
      files: ['**/*.(d.)?ts(x)?'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {},
    },
  ],
};
