import { defineNuxtPlugin, useRuntimeConfig, useHead } from '#imports';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const { scriptSrc } = config.public.varioqub;

  useHead({
    link: [
      {
        rel: 'preload',
        as: 'script',
        href: scriptSrc,
      },
    ],
    script: [
      {
        id: 'varioqub',
        key: 'varioqub',
        type: 'text/javascript',
        innerHTML: `(function(e, x, pe, r, i, me, nt){e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
                        me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],nt.parentNode.insertBefore(me,nt)})
                        (window, document, 'script', '${scriptSrc}', 'ymab');`,
      },
    ],
  });
});
