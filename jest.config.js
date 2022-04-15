const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig = {
  ...require('./test/jest-common'),
  collectCoverageFrom: [
    './(components|lib|pages)/**/*.(ts|tsx|js|jsx)',
    '!./(components|lib|pages)/**/__tests__/**/*.test.(ts|tsx|js|jsx)',
    '!./(components|lib|pages)/**/__mocks__/**/*.(ts|tsx|js|jsx)',
  ],
  projects: ['./test/jest.client.js', './test/jest.server.js'],
};

module.exports = createJestConfig(jestConfig);
