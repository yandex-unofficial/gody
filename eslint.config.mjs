// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    typescript: true,
    // Rules for formatting
    stylistic: {
      quotes: 'single',
      semi: true,
    },
  },
  dirs: {
    src: [
      './playground',
    ],
  },
}).overrideRules({
  '@typescript-eslint/no-empty-object-type': 'off',
  '@typescript-eslint/no-explicit-any': 'warn',
});
