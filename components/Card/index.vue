<template>
  <div class="flex flex-col items-center p-5 bg-white rounded-lg lg:flex-row">
    <div class="w-32 max-w-3xl mb-5 lg:w-48 lg:mb-0">
      <custom-svg-image :name="svg" class="w-full" />
    </div>
    <div class="flex flex-col max-w-lg lg:ml-8">
      <h4 class="text-xl font-bold text-center text-gray-800 underline lg:text-left">
        {{ title }}
      </h4>
      <p class="text-lg font-medium text-center text-gray-800 lg:text-left">
        <slot />
      </p>
      <p
        v-if="special"
        class="text-sm font-medium text-center lg:text-left text-base-100"
      >
        Apenas para os <span class="underline">6 primeiros alunos</span>!
      </p>
    </div>
  </div>
</template>

<script>
import CustomSvgImage from '../CustomSvgImage'

export default {
  components: { CustomSvgImage },
  props: {
    svg: { type: String, required: true },
    title: { type: String, default: 'Title' },
    special: { type: Boolean, default: false }
  }
}
</script>
