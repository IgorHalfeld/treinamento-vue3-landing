<template>
  <button
    :class="classes"
    class="font-bold text-white uppercase rounded-full text-md lg:text-lg hover:bg-base-200"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: { type: String, default: 'bg-base-100' },
    link: { type: String, default: null },
    size: { type: String, default: 'p-5' }
  },
  computed: {
    classes () {
      return `${this.variant} ${this.size}`
    }
  },
  methods: {
    handleClick () {
      if (!this.link) {
        return
      }

      window.open(this.link, '_blank')
    }
  }
}
</script>
