import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      '.turbo/**',
      'dist/**',
      '*.config.mjs', // exclude config files from ESLint
      '*.config.js', // exclude JS config files too
    ],
  },

  // extend configs: Next.js + Airbnb + TypeScript
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ),

  // ensure parserOptions.project is passed
  ...compat.config({
    parserOptions: {
      project: resolve(__dirname, './tsconfig.json'),
      tsconfigRootDir: __dirname,
    },
  }),

  // override problematic rules that cause "rule not found" errors
  // Some older versions of eslint-config-airbnb-typescript enable rules
  // like @typescript-eslint/brace-style, which don't exist in @typescript-eslint
  {
    rules: {
      // remove or replace invalid rules
      '@typescript-eslint/brace-style': 'off', // Not a real rule in @typescript-eslint
      'brace-style': ['error', '1tbs', { allowSingleLine: true }], // Use base ESLint rule

      // Optional: Fix common conflicts
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
        },
      ],
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js (React is auto-imported)
      'react/jsx-props-no-spreading': 'warn',
      'no-console': 'warn',
    },
  },
];
