
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Entrevistas Tech | Uma MasterClass online onde vamos te ensinar como buscar e conseguir um emprego como desenvolvedor e ter um ótimo salário 🚀',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Uma MasterClass online onde vamos te ensinar como buscar e conseguir um emprego como desenvolvedor e ter um ótimo salário 🚀' },

      { name: 'og:title', content: 'Entrevistas Tech | Uma MasterClass online onde vamos te ensinar como buscar e conseguir um emprego como desenvolvedor e ter um ótimo salário 🚀' },
      { name: 'og:site_name', content: 'Entrevistas Tech' },
      { name: 'og:description', content: 'Uma MasterClass online onde vamos te ensinar como buscar e conseguir um emprego como desenvolvedor e ter um ótimo salário 🚀' },
      { name: 'og:image', content: 'https://entrevistas.tech/banner.png' },
      { name: 'og:image:type', content: 'image/png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    { src: '~/plugins/animate', ssr: true }
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
