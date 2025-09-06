import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    // ----------------------
    // Ignore build artifacts & config files
    // ----------------------
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      '.turbo/**',
      'next-env.d.ts',
      '*.config.mjs',
      '*.config.js',
    ],
  },

  // All TS/JS files — parser without type info
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2025,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/brace-style': 'off',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'jsx-a11y/label-has-associated-control': [
        'error',
        { required: { some: ['nesting', 'id'] } },
      ],
      'import/extensions': 'off', // ⚠ disable for TS files
      'import/no-unresolved': 'off', // ⚠ disable for TS files
      'no-console': 'warn',
    },
  },

  // ----------------------
  // Pages: function declarations
  // ----------------------
  {
    files: ['pages/**/*.{ts,tsx,js,jsx}'],
    rules: {
      'react/function-component-definition': [
        'error',
        { namedComponents: 'function-declaration' },
      ],
    },
  },

  // ----------------------
  // Components: arrow functions
  // ----------------------
  {
    files: ['components/**/*.{ts,tsx,js,jsx}'],
    rules: {
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
    },
  },
];
