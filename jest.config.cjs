module.exports = {
  roots: ['<rootDir>/tests/unit'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^#app/(.*)$': '<rootDir>/src/features/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
