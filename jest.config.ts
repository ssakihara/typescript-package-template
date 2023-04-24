import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: {
    '^#app/(.*)$': '<rootDir>/src/features/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/tests/unit'],
  setupFiles: ['<rootDir>/tests/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default config;
