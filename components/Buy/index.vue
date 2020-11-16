<template>
  <div
    :style="{
      backgroundImage: 'url(banner-buy.jpg)'
    }"
    class="relative flex flex-col items-center justify-center w-full py-24 bg-left bg-no-repeat bg-cover lg:bg-center animation"
  >
    <span
      :style="{
        backgroundColor: 'rgba(51, 51, 51, 0.6)',
      }"
      class="absolute top-0 left-0 z-10 w-full h-full"
    />

    <div class="flex flex-col justify-center max-w-3xl">
      <h3 class="z-20 text-2xl font-black text-center text-white lg:text-4xl">
        Reserve seu lugar!
      </h3>
      <h4 class="z-20 text-xl font-medium text-center text-white lg:text-3xl">
        Apenas <span class="font-bold">50 vagas!</span>
      </h4>

      <div class="relative z-20 flex flex-col items-center justify-center h-20 mt-5">
        <span class="p-1 ml-1 -mb-3 text-white font-regular">
          de <s>R$360,00</s>
          por 12x de
        </span>
        <p class="text-4xl font-black text-white">
          R$11,38
        </p>
        <span class="p-1 ml-1 -mt-3 text-white font-regular">
          ou <span class="font-bold"> R$110,00 à vista</span>
        </span>
      </div>

      <custom-button
        link="https://www.sympla.com.br/masterclass---processo-de-selecao__846205"
        class="z-20 mt-12"
      >
        Aproveitar agora 🔥
      </custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from '../CustomButton'

export default {
  components: { CustomButton }
}
</script>
