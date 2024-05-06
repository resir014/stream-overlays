import { type Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    './src/(components|lib|pages)/**/*.(ts|tsx|js|jsx)',
    '!./src/(components|lib|pages)/**/__tests__/**/*.test.(ts|tsx|js|jsx)',
    '!./src/(components|lib|pages)/**/__mocks__/**/*.(ts|tsx|js|jsx)',
  ],
  testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(jestConfig);
