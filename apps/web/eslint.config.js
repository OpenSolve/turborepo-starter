import reactConfig from '@acme/linting/react';
import baseConfig from '@acme/linting/base';

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseConfig,
  ...reactConfig,
  {
    files: ['src/**/*.{ts,tsx}'],
  },
];
