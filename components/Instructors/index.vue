<template>
  <div
    :style="{
      backgroundImage: 'url(instructors.png)'
    }"
    class="relative flex flex-col items-center w-full h-full py-24 bg-no-repeat bg-cover animation"
  >
    <span
      :style="{
        backgroundImage: 'linear-gradient(133.29deg, rgba(65, 184, 131, 0.7) 27.52%, rgba(65, 184, 131, 0.6) 90.8%)',
      }"
      class="absolute top-0 left-0 z-10 w-full h-full"
    />

    <div class="flex flex-col items-center justify-center max-w-3xl">
      <h3 class="z-20 text-2xl font-black text-center text-white lg:text-4xl">
        Conheça seu instrutor
      </h3>
      <p class="z-20 text-xl font-medium text-center text-white lg:text-3xl">
        Com quem você vai aprender?
      </p>
    </div>

    <div class="flex flex-col justify-center w-11/12 max-w-6xl mt-5 lg:mt-64 lg:flex-row">
      <div class="flex flex-col items-center mt-16 text-white lg:mt-0">
        <h4 class="z-20 text-xl font-black text-center lg:text-4xl">
          Igor Halfeld
        </h4>
        <p class="z-20 text-lg font-medium text-center lg:text-2xl">
          Engenheiro de Software, Organizador de comunidades <br>
          como o Vue.js Brasil, Vue.js São Paulo, <br>
          Javascript São Paulo, NodeBR e uns dos criadores do <br>
          primeiro evento internacional de Vue.js da <br>
          America Latina, o Vue.js Summit. <br>
          Acompanha o Vue.js desde sua versão 0.11 <br>
        </p>
        <div class="flex mt-6">
          <a title="linkedin" href="https://www.linkedin.com/in/igorhalfeld/" target="_blank" class="z-20">
            <custom-svg-image name="linkedin" class="w-8 h-8" />
          </a>
          <a title="linkedin" href="https://twitter.com/igorhalfeld/" target="_blank" class="z-20 mx-5">
            <custom-svg-image name="twitter" class="w-8 h-8" />
          </a>
          <a title="linkedin" href="https://github.com/igorhalfeld/" target="_blank" class="z-20">
            <custom-svg-image name="github" class="w-8 h-8" />
          </a>
        </div>
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
