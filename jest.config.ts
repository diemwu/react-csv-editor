/* eslint-disable */

export default {
  displayName: 'react-csv-editor',
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
