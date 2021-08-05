module.exports = {
  ...require('./jest-common'),
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/lib/**/__tests__/*.test.(ts|tsx|js|jsx)'],
};
