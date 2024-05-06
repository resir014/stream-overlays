import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', 'react-intersection-observer/test-utils'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    './(components|lib|pages)/**/*.(ts|tsx|js|jsx)',
    '!./(components|lib|pages)/**/__tests__/**/*.test.(ts|tsx|js|jsx)',
    '!./(components|lib|pages)/**/__mocks__/**/*.(ts|tsx|js|jsx)',
  ],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(jestConfig);
