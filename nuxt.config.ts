// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },


  app: {
    head: {
      title: "まのちゃんず！ | 魔ノむえる非公式ファンサイト",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'サイト説明文を書いて' },
        { name: 'keywords', content: 'Mano Muelle, 魔ノむえる, VTuber, 歌枠, Vocal Performances, まの, VTuber 歌, Live Songs' },
        { name: 'author', content: 'Mano Muelle Fansite Team CQ' },

        { property: 'og:title', content: 'まのちゃんず！ | 魔ノむえる非公式ファンサイト' },
        { property: 'og:description', content: '魔ノむえるの歌枠セトリを1曲ずつ鑑賞できるファンサイト。Discover every song from Mano Muelle\'s vocal performances.' },
        { property: 'og:image', content: 'siteURL' },
        { property: 'og:url', content: 'siteURL' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'まのちゃんず！ | 魔ノむえる非公式ファンサイト' },
        { name: 'twitter:description', content: 'サイト説明文' },
        { name: 'twitter:image', content: 'siteURL/ogp.jpg' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kaisei+Decol&display=swap' }
      ]
    },
  },

  aos: {
    // 説明
    offset: 100, // 要素が画面のどの位置でフェードインするか
    duration: 300, // アニメーションの時間
    easing: 'ease-in-out', // アニメーションのイージング
    once: true, // アニメーションを一度だけ再生するか
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: ["@nuxt/image", 'nuxt-aos' , 'nuxt-microcms-module'],

  // microCMS
  microCMS: {
    serviceDomain: 'manochans',
    apiKey: 'ZcQJV7DcuwfsgLx22aVAWJbR3CNo9fdhoPDk',
  },

  css: [
    "/assets/style/app.scss",
  ]
})