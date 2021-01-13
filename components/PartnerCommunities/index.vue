<template>
  <div class="flex flex-col items-center justify-center py-24">
    <div class="flex flex-col items-center justify-center max-w-3xl">
      <div class="flex flex-col justify-center max-w-3xl">
        <h3 class="z-20 text-2xl font-black text-center text-gray-800 lg:text-4xl">
          Comunidades Parceiras
        </h3>
        <div class="flex flex-row flex-wrap justify-center px-5 lg:px-0">
          <div
            v-for="(community, index) in communities"
            :key="index"
            class="w-32 max-w-3xl mt-10 mb-5 lg:w-48 lg:mb-0"
            :title="community.name"
            @click="openUrl(community.url)"
          >
            <custom-image
              :alt="community.name"
              :source="community.source"
              class="w-full p-3 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomImage from '../CustomImage'
export default {
  components: { CustomImage },
  data: () => ({
    communities: [
      {
        name: 'Vue.JS MS',
        source: require('../../static/vue-ms.jpeg'),
        url: 'https://t.me/vuejsms'
      },
      {
        name: 'Vue.JS Norte',
        source: require('../../static/vue-norte.jpeg'),
        url: 'https://www.meetup.com/pt-BR/Vue-js-Norte/'
      },
      {
        name: 'Vue.JS Vix',
        source: require('../../static/vue-vix.jpeg'),
        url: 'https://t.me/vuejsvix/'
      },
      {
        name: 'Nerdzão',
        source: require('../../static/nerdzao.png'),
        url: 'https://www.meetup.com/Nerdzao/'
      },
      {
        name: 'CodersInRio',
        source: require('../../static/codersinrio.jpeg'),
        url: 'https://www.meetup.com/Coders-in-Rio/'
      },
      {
        name: 'DevelopersBR',
        source: require('../../static/developersbr.jpg'),
        url: 'https://www.meetup.com/pt-BR/DevelopersBr/'
      },
      {
        name: 'NodeBR',
        source: require('../../static/nodebr.jpg'),
        url: 'https://www.meetup.com/pt-BR/nodebr/'
      },
      {
        name: 'JSSP',
        source: require('../../static/jssp.png'),
        url: 'https://www.meetup.com/pt-BR/Javascript-SP/'
      }
    ]
  }),
  methods: {
    openUrl (url) {
      window.open(url, '_blank', 'noopener')
    }
  }
}
</script>
