import { defineNuxtPlugin, useRuntimeConfig, useState } from '#imports';

interface VarioqubState {
  flags: Record<string, boolean>;
  experiments: string;
  testids: Array<number | string>;
}

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  const { clientId } = config.public.varioqub;

  const varioqubState = useState<VarioqubState>('varioqubState', () => ({
    flags: {},
    experiments: '',
    testids: [],
  }));

  if (typeof window.ymab === 'function') {
    window.ymab(`metrika.${clientId}`, 'init', (answer) => {
      const { flags, experiments, testids } = answer;

      varioqubState.value.flags = flags;
      varioqubState.value.experiments = experiments;
      varioqubState.value.testids = testids;
    });
  }
});
