import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {ignores: ['**/*.config.*']},
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    plugins: {
      import: importPlugin,
      turbo: turboPlugin,
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      ...turboPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
      '@typescript-eslint/no-misused-promises': [2, {checksVoidReturn: {attributes: false}}],
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: true,
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'error',
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'no-console': 'error',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    linterOptions: {reportUnusedDisableDirectives: true},
    languageOptions: {parserOptions: {projectService: true}},
  },
);
