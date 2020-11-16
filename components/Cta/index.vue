<template>
  <div
    v-show="isVisible"
    class="fixed bottom-0 left-0 z-50 flex items-center justify-center w-full h-24 bg-gray-100 animated fadeInUp fast"
  >
    <div class="flex flex-col items-center justify-between w-3/5 lg:items-start lg:flex-row">
      <div class="flex flex-col">
        <h3 class="z-20 text-lg font-black text-gray-800 uppercase lg:text-2xl">
          Vagas limitadas
        </h3>
        <h4 class="z-20 hidden text-xl font-medium text-gray-800 md:block">
          Garanta seu espaço na MasterClass
        </h4>
      </div>

      <div class="flex items-center h-full">
        <custom-button
          link="https://www.sympla.com.br/masterclass---processo-de-selecao__846205"
          size="p-3 lg:p-5"
        >
          Tenho interesse 🔥
        </custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '../CustomButton'

const MAX_SCROLL_TO_PUT_VISIBLE = 580

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
