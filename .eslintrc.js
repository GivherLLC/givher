module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // Adds TypeScript-specific linting rules
    'prettier', // Ensures compatibility with Prettier
    'next/core-web-vitals',
  ],
  plugins: ['prettier', '@typescript-eslint'], // Adds Prettier and TypeScript plugins
  rules: {
    // Prettier formatting rules
    'prettier/prettier': ['error', { semi: true }],

    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all', // Check all variables
        args: 'after-used', // Check only arguments that are defined but unused
        argsIgnorePattern: '^_', // Ignore variables that start with an underscore
        ignoreRestSiblings: true, // Ignore unused rest siblings in destructuring
      },
    ],

    // Disable base ESLint rules that conflict with TypeScript-specific rules
    'no-unused-vars': 'off', // Disable ESLint's default rule

    // Other custom rules
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
};
