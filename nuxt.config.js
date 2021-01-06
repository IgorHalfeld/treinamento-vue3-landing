
module.exports = {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Treinamento de Vue.js 3 | Curso completo e gratuito de Vue.js 3 do iniciante ao avançado 🚀',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Curso completo e gratuito de Vue.js 3 do iniciante ao avançado 🚀' },

      { name: 'og:title', content: 'Treinamento de Vue.js 3 | Curso completo e gratuito de Vue.js 3 do iniciante ao avançado 🚀' },
      { name: 'og:site_name', content: 'Treinamento de Vue.js 3' },
      { name: 'og:description', content: 'Curso completo e gratuito de Vue.js 3 do iniciante ao avançado 🚀' },
      { name: 'og:image', content: 'https://treinamento.vuejsbrasil.org/banner-image.jpeg' },
      { name: 'og:image:type', content: 'image/png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/md', ssr: true },
    { src: '~/plugins/animate', ssr: true },
    { src: '~/plugins/global', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
