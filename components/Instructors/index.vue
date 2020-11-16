<template>
  <div
    :style="{
      backgroundImage: 'url(instructors.png)'
    }"
    class="relative flex flex-col items-center w-full h-full py-24 bg-no-repeat bg-cover animation"
  >
    <span
      :style="{
        backgroundImage: 'linear-gradient(130.99deg, rgba(255, 87, 185, 0.47) 27.52%, rgba(167, 4, 253, 0.65) 90.8%)',
      }"
      class="absolute top-0 left-0 z-10 w-full h-full"
    />

    <div class="flex flex-col justify-center max-w-3xl">
      <h3 class="z-20 text-2xl font-black text-center text-white lg:text-4xl">
        Conheça seus instrutores
      </h3>
      <h4 class="z-20 text-xl font-medium text-center text-white lg:text-3xl">
        Quem somos nós?
      </h4>
    </div>

    <div class="flex flex-col justify-between w-11/12 max-w-6xl mt-24 lg:mt-64 lg:flex-row">
      <div class="flex flex-col items-center text-white">
        <h4 class="z-20 items-center text-xl font-bold text-center lg:text-3xl">
          Thaíssa Candella
        </h4>
        <p class="z-20 text-lg text-center lg:text-xl">
          Head Developer Relations &amp; <br>
          Professora de comunicação &amp; <br>
          Organizadora de Comunidades
        </p>
        <a title="linkedin" href="https://www.linkedin.com/in/thaissacandella/" target="_blank" class="z-20 mt-6">
          <custom-svg-image name="linkedin" class="w-8 h-8" />
        </a>
      </div>

      <div class="flex flex-col items-center mt-16 text-white lg:mt-0">
        <h4 class="z-20 text-xl font-bold text-center lg:text-3xl">
          Igor Halfeld
        </h4>
        <p class="z-20 text-lg text-center lg:text-xl">
          Engenheiro de Software Senior &amp; <br>
          Organizador de Comunidades Tech &amp; <br>
          Palestrante
        </p>
        <a title="linkedin" href="https://www.linkedin.com/in/igorhalfeld/" target="_blank" class="z-20 mt-6">
          <custom-svg-image name="linkedin" class="w-8 h-8" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSvgImage from '../CustomSvgImage'

export default {
  components: { CustomSvgImage }
}
</script>
