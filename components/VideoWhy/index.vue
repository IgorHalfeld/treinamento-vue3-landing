<template>
  <div class="flex flex-col items-center justify-center py-24">
    <div class="flex flex-col items-center justify-center max-w-3xl">
      <h3 class="z-20 px-5 text-2xl font-black text-center text-gray-800 lg:px-0 lg:text-4xl">
        Veja o que você irá construir e aprender no decorrer do curso!
      </h3>
      <img
        v-if="!videoActive"
        class="w-4/5 mt-12 rounded-lg shadow-xl cursor-pointer"
        src="/preview-with-playbutton.png"
        alt="Imagem de preview de video"
        @click="active"
      >
      <iframe
        v-else
        class="w-4/5 mt-12 rounded-lg shadow-xl"
        height="340"
        :src="url"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    videoActive: false,
    url: 'https://www.youtube-nocookie.com/embed/dNt5FMqh_Po?autoplay=1'
  }),
  methods: {
    active () {
      this.videoActive = true
    }
  }
}
</script>
