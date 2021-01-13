<template>
  <div class="flex flex-col items-center justify-center py-24 bg-gray-200">
    <div class="flex flex-col items-center justify-center max-w-4xl">
      <div class="flex flex-col justify-center max-w-3xl">
        <h3 class="z-20 text-2xl font-black text-center text-gray-800 lg:text-4xl">
          Você é uma empresa?
        </h3>
        <div class="flex justify-center w-full">
          <a
            class="mt-12 custom-mailto"
            href="mailto:igorluizhalfeld@gmail.com"
          >
            Patrocine essa iniciativa
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.custom-mailto {
  background-color: rgba(65, 184, 131, 0.7);
  color: white;
  padding: 1em 1.5em;
  border-radius: 30px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
</style>
