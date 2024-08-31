import type { Linter } from 'eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs['flat/recommended'],
  eslintConfigPrettier
] satisfies Linter.Config[];
