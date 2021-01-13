<template>
  <div
    :style="{
      backgroundImage: 'url(banner-image.jpeg)'
    }"
    class="flex flex-col items-center justify-center w-full h-full bg-center bg-no-repeat bg-cover animation"
  >
    <span
      :style="{
        backgroundImage: 'linear-gradient(133.29deg, rgba(65, 184, 131, 0.7) 27.52%, rgba(65, 184, 131, 0.3) 90.8%)',
      }"
      class="absolute top-0 left-0 z-10 w-full h-full"
    />

    <div class="flex flex-col justify-center max-w-6xl">
      <h1 class="z-20 px-5 text-3xl font-black text-white lg:px-0 lg:text-6xl">
        Curso completo e <span class="underline">gratuito</span> de <span class="underline">Vue.js 3</span> do <span class="underline">iniciante</span> ao <span class="underline">avançado</span>.
      </h1>
      <p class="z-20 px-5 text-xl font-medium text-white lg:px-0 lg:text-4xl">
        Aprenda a versão 3 do Vue construindo uma aplicação completa by Vue.js Brasil!
      </p>
      <div class="z-20 px-5 lg:px-0">
        <!--link="https://www.sympla.com.br/masterclass---processo-de-selecao__846205"-->
        <custom-button
          class="z-20 mt-12"
          variant="bg-white text-gray-700 hover:bg-gray-200"
          @click.native="handleSubscribeButton"
        >
          Inscrever-se 🔥
        </custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '../CustomButton'

const COURSE_URL = 'https://igorhalfeld.teachable.com/p/treinamento-completo-e-gratuito-de-vue-js-3-do-iniciante-ao-avancado?utm_source=landing_page'

export default {
  components: { CustomButton },
  methods: {
    handleSubscribeButton () {
      // this.$modal.open()
      window.open(COURSE_URL, '_blank', 'noopener')
    }
  }
}
</script>
