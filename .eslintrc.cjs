module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  ignorePatterns: ['**/*.css', '**/*.stories.tsx'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'prettier/prettier': 'warn',
    'react/jsx-sort-props': 'warn',
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys': 'warn',
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
}
