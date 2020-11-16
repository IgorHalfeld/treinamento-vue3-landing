<template>
  <div
    :style="{
      backgroundImage: 'url(banner-image.png)'
    }"
    class="flex flex-col items-center justify-center w-full h-full bg-center bg-no-repeat bg-cover animation"
  >
    <span
      :style="{
        backgroundImage: 'linear-gradient(133.29deg, rgba(255, 87, 185, 0.7) 27.52%, rgba(167, 4, 253, 0.5) 90.8%)',
      }"
      class="absolute top-0 left-0 z-10 w-full h-full"
    />

    <div class="flex flex-col justify-center max-w-3xl">
      <h1 class="z-20 px-5 text-3xl font-black text-white lg:px-0 lg:text-6xl">
        Curso <span class="underline">gratuito</span> completo de <span class="underline">Vue.js 3</span> do <span class="underline">iniciante</span> ao <span class="underline">avançado</span>
      </h1>
      <p class="z-20 px-5 text-xl font-medium text-white lg:px-0 lg:text-4xl">
        Aprenda a versão 3 do Vue construido uma aplicação completa!
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
