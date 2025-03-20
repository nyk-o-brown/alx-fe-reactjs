// Ensure the code runs in a Node.js environment
if (typeof module === 'undefined') {
  var module = {};
}

module.exports = {
  // Map CSS (or other style files) to our mock file
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  testEnvironment: 'jsdom'
};