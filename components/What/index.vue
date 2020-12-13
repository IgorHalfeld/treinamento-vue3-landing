<template>
  <div
    :style="{
      backgroundImage: 'url(banner-what.png)'
    }"
    class="relative flex flex-col items-center justify-center w-full py-16 bg-center bg-no-repeat bg-cover"
  >
    <span
      :style="{
        backgroundColor: 'rgba(51, 51, 51, 0.55)',
      }"
      class="absolute top-0 left-0 z-10 w-full h-full"
    />

    <div class="flex flex-col justify-center max-w-3xl">
      <h3 class="z-20 px-5 text-2xl font-black text-center text-white lg:text-left lg:px-0 lg:text-4xl">
        Um curso online completo <span class="underline">e totalmente gratuito</span> do <span class="underline">básico ao avançado</span> onde você vai aprender
        a versão 3 do Vue.js com direito a <span class="underline">certificado ao completar as aulas</span>.

        <!--
        Uma <span class="underline">MasterClass online</span> em que vamos de forma objetiva te
        ensinar como melhorar sua marca pessoal e se destacar desde
        as <span class="underline">entrevistas com RH até os desafios de código para obter ótimos salários</span>
        -->
      </h3>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
