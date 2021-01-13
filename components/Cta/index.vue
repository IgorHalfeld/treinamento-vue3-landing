<template>
  <div
    v-show="isVisible"
    class="fixed bottom-0 left-0 z-40 flex items-center justify-center w-full h-32 bg-gray-100 lg:h-24 animated fadeInUp fast"
  >
    <div class="flex flex-col items-center justify-between w-3/5 lg:items-start lg:flex-row">
      <div class="flex flex-col">
        <h3 class="z-20 text-lg font-black text-center text-gray-800 uppercase lg:text-left lg:text-2xl">
          Conteúdo top, totalmente grátis!
        </h3>
        <h4 class="z-20 hidden text-xl font-medium text-gray-800 md:block">
          Coloque seu e-mail para ser notificado 🙀
        </h4>
      </div>

      <div class="flex items-center h-full">
        <custom-button
          size="p-3 lg:p-5"
          class="bg-base-200"
          @click.native="handleSubscribe"
        >
          EU QUERO 🔥
        </custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '../CustomButton'

const MAX_SCROLL_TO_PUT_VISIBLE = 580
const COURSE_URL = 'https://igorhalfeld.teachable.com/p/treinamento-completo-e-gratuito-de-vue-js-3-do-iniciante-ao-avancado?utm_source=landing_page'

export default {
  components: { CustomButton },
  data: () => ({
    isVisible: false
  }),
  mounted () {
    window.addEventListener('scroll', this.handleScroll, false)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll, false)
  },
  methods: {
    handleSubscribe () {
      // this.$modal.open()
      window.open(COURSE_URL, '_blank', 'noopener')
    },
    handleScroll () {
      const { scrollY } = window
      if (scrollY >= MAX_SCROLL_TO_PUT_VISIBLE) {
        this.isVisible = true
        return
      }

      this.isVisible = false
    }
  }
}
</script>
