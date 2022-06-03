module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react-hooks', 'react', 'unused-imports', 'simple-import-sort', 'prettier'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: { regex: '^I[A-Z]', match: false },
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-redeclare': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',

    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',

    'new-cap': ['warn', { properties: false }],
    'no-redeclare': 'off',
    'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-extra-boolean-cast': 'off',
    radix: 'off',

    // Unused imports rules
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        args: 'none',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    // Import ordering rules
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effect imports
          ['^\\u0000'],
          // React Package(s) comes first as seperate group
          ['^react(-dom(/client)?)?$'],
          // All other imports
          ['^@?\\w'],
          ['^((?!\\u0000$)|/.*|$)'],
          ['^\\.'],
          // Type imports: keep these last!
          ['^@?\\w.*\\u0000$'],
          ['^.*\\u0000$'],
          ['^\\..*\\u0000$'],
        ],
      },
    ],
  },
  settings: { react: { version: 'detect' } },
}
