<template>
  <div class="flex flex-col items-center p-5 bg-white rounded-lg">
    <div class="flex items-center justify-between w-full cursor-pointer" @click="toggle">
      <div class="flex flex-col">
        <h4 class="text-xl font-bold text-left text-gray-800 underline lg:text-2xl">
          <span class="underline">Modulo {{ number }}</span>: {{ title }}
        </h4>
        <p class="text-base font-medium text-left text-gray-800 lg:text-lg">
          {{ desc }}
        </p>
      </div>

      <button class="p-5">
        {{ label }}
      </button>
    </div>

    <div
      v-if="isOpen"
      class="flex flex-col w-full mt-5"
    >
      <template v-if="subModules.length">
        <div
          v-for="(sub, index) in subModules"
          :key="index"
          class="my-1 animated fadeInDown fast"
        >
          <p class="text-gray-800 font-regular">
            {{ sub.title }}
          </p>
          <p v-if="!!sub.desc" class="ml-6 text-gray-600 font-lightitalic">
            {{ sub.desc }}
          </p>
        </div>
      </template>
      <p v-else class="text-gray-800 font-regular">
        Ainda não foram definidos os modulos.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alreadyOpened: { type: Boolean, default: false },
    number: { type: Number, required: true },
    title: { type: String, default: 'Title' },
    desc: { type: String, default: 'Desc' },
    special: { type: Boolean, default: false },
    subModules: { type: Array, default: () => [] }
  },
  data () {
    return {
      isOpen: this.alreadyOpened
    }
  },
  computed: {
    label () {
      return this.isOpen ? '➖' : '➕'
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
