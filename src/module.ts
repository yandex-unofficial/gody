import { defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'nuxt-varioqub',
    configKey: 'varioqub',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {},
  setup(options, nuxt) {
    console.log('setup', options, nuxt);
  },
});
