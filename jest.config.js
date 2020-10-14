module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.module.css$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['/scripts/'],
}
