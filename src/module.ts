import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';
import { defu } from 'defu';

export interface ModuleOptions {
  clientId: number;
  enabled: boolean;
  scriptSrc: string;
}

export interface ModulePublicRuntimeConfig {
  varioqub: ModuleOptions;
}

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
  interface NuxtConfig {
    varioqub?: ModuleOptions;
  }
  interface NuxtOptions {
    varioqub: ModuleOptions;
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-varioqub',
    configKey: 'varioqub',
    compatibility: {
      nuxt: '^3.0.0 || ^4.0.0',
    },
  },
  defaults: {
    enabled: true,
    scriptSrc: 'https://abt.s3.yandex.net/expjs/latest/exp.js',
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.public.varioqub = defu(
      nuxt.options.runtimeConfig.public.varioqub,
      options,
    );

    addPlugin({ src: resolver.resolve('./runtime/plugins/varioqub.server'), mode: 'server' });
    addPlugin({ src: resolver.resolve('./runtime/plugins/varioqub.client'), mode: 'client' });
  },
});
