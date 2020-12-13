<template>
  <div class="w-full h-full">
    <modal />
    <nuxt />
  </div>
</template>

<script>
import Modal from '../components/Modal'

export default {
  components: { Modal }
}
</script>

<style>
html,
body,
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
}
</style>
