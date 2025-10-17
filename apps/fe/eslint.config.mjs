import js from '@eslint/js';
import nx from '@nx/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['**/*.cjs'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: reactPlugin,
    },
    rules: {
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Semicolon enforcement
      semi: ['error', 'always'],

      // Unused variable warning
      '@typescript-eslint/no-unused-vars': ['warn'],

      // Ignore useEffect dependencies (use with caution)
      'react-hooks/exhaustive-deps': 'off',

      // Trailing spaces
      'no-trailing-spaces': 'error',
    },
  },
];
