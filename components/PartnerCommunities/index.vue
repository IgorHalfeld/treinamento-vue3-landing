<template>
  <div class="flex flex-col items-center justify-center py-24">
    <div class="flex flex-col items-center justify-center max-w-3xl">
      <div class="flex flex-col justify-center max-w-3xl">
        <h3 class="z-20 text-2xl font-black text-center text-gray-800 lg:text-4xl">
          Comunidades Parceiras
        </h3>
        <div class="flex flex-row ">
          <div
            v-for="(community, index) in communities"
            :key="index"
            class="w-32 max-w-3xl mb-5 lg:w-48 lg:mb-0 mt-10"
            :title="community.name"
            @click="openUrl(community.url)"
          >
            <custom-image
              :alt="community.name"
              :source="community.source"
              class="cursor-pointer p-3 w-full"
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
    communities: [{
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
    }]
  }),
  methods: {
    openUrl (url) {
      window.open(url, '_blank', 'noopener')
    }
  }
}
</script>
