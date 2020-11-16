<template>
  <div class="flex flex-col items-center justify-center py-24 bg-gray-200">
    <div class="flex flex-col items-center justify-center max-w-4xl">
      <div class="flex flex-col justify-center max-w-3xl">
        <h3 class="z-20 text-2xl font-black text-center text-gray-800 lg:text-4xl">
          Bonus!
        </h3>
        <h4 class="z-20 text-xl font-medium text-center text-gray-800 lg:text-3xl">
          O que mais tá incluso?
        </h4>

        <div class="flex flex-col w-full px-3">
          <card
            svg="telegram"
            title="Grupo privado no Telegram"
            class="mt-12"
          >
            Acesso ao grupo do telegram privado para networking e tirar
            dúvidas esporádicas.
          </card>

          <card
            svg="cv"
            title="Revisão de CV e Linkedin"
            class="mt-5"
            :special="true"
          >
            Oferecemos uma revisão no seu currículo e perfil do linkedIn para contribuir na sua busca por um novo emprego.
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../Card'

export default {
  components: { Card }
}
</script>
