<template>
  <img
    :src="source"
    :alt="alt"
  >
</template>

<script>
export default {
  props: {
    source: { type: String, required: true },
    alt: { type: String, default: 'Imagem' }
  }
}
</script>
