module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: [
    './(components|lib|pages)/**/*.(ts|tsx|js|jsx)',
    '!./(components|lib|pages)/**/__tests__/**/*.test.(ts|tsx|js|jsx)',
    '!./(components|lib|pages)/**/__mocks__/**/*.(ts|tsx|js|jsx)'
  ],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest'
  },
  projects: ['./test/jest.client.js', './test/jest.server.js']
}
