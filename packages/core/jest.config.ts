export default {
  verbose: true,
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['jest-extended', '<rootDir>/enzyme.config.ts'],
  testMatch: ['<rootDir>/src/**/*.test.ts(x)?'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
}
