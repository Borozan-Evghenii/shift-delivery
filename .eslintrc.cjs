/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    'dist',
    'node_modules/',
    '.eslintrc.cjs',
    '*.config.js',
    '*.config.ts',
    'vite.config.ts',
    'coverage'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react-refresh'],
  rules: {
    'no-underscore-dangle': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-throw-literal': 0,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-throw-literal': 0,

    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false }
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'react/no-unstable-nested-components': [
      2,
      {
        allowAsProps: true
      }
    ],
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    '@typescript-eslint/no-loop-func': 0,
    // 'sort-keys': [1, 'asc', { natural: true, allowLineSeparatedGroups: true }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        ignoreCase: true,
        reservedFirst: true
      }
    ],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/export': 0,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal'
          }
        ],
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  }
};
