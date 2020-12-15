<template>
  <div
    v-if="isActive"
    class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
    @click="close"
  >
    <div
      class="fixed max-w-2xl mx-10"
      @click.stop
    >
      <div class="flex flex-col overflow-hidden bg-white rounded-lg animated fadeInDown faster">
        <form class="flex flex-col p-4 bg-white" @submit.prevent="handleSubscribe">
          <div class="">
            <h1 class="text-lg font-black text-gray-800">
              {{ titleLabel }}
            </h1>
            <p v-if="!isSuccess" class="mt-5 text-lg font-medium text-gray-800">
              O curso será online e lançado <br>
              no dia <span class="underline">13 de janeiro de 2021.</span><br>

              Você receberá mais instruções de <br>
              como ver as aulas por e-mail
            </p>
            <p v-else class="mt-5 text-lg font-medium text-gray-800">
              Não se esqueça se compartilhar <br>
              esse conteúdo com seus amigos e <br>
              nas redes sociais pois ajuda muito <br>
              a comunidade a crescer 😍
            </p>

            <div v-if="!isSuccess" class="max-w-xl mt-5 font-semibold text-gray-600">
              <div class="flex flex-col mt-3">
                <span class="font-medium text-gray-800 text-md">Nome</span>
                <input
                  v-model="name"
                  type="text"
                  class="px-2 py-3 font-medium border-2 border-gray-300 border-solid rounded-md"
                  placeholder="Seu nome completo aqui"
                  name="name"
                  required="required"
                >
              </div>
              <div class="flex flex-col mt-3">
                <span class="font-medium text-gray-800 text-md">E-mail</span>
                <input
                  v-model="email"
                  type="email"
                  class="px-2 py-3 font-medium border-2 border-gray-300 border-solid rounded-md"
                  placeholder="seu_email@aqui.com"
                  name="email"
                  required="required"
                >
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center mt-10">
            <button
              v-if="!isSuccess"
              :disable="isLoading"
              type="submit"
              :class="{
                'opacity-50': isLoading
              }"
              class="w-full py-3 font-medium bg-gray-200 rounded-sm hover:bg-gray-400 transition-all duration-150 focus:outline-none"
            >
              Me inscrever
              <span class="inline-block ml-1" :class="{ 'animate-spin': isLoading }">
                {{ isLoading ? '🦄' : '🚀' }}
              </span>
            </button>
            <a class="mt-2 text-gray-500 underline" href="" @click.prevent="close">fechar</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '../../utils/bus'

export default {
  data: () => ({
    isActive: false,
    isLoading: false,
    isSuccess: false,
    name: '',
    email: '',
    error: ''
  }),
  computed: {
    titleLabel () {
      if (this.error === 'Member Exists') {
        // obs: gambetinha, confia no pai
        setTimeout(() => { // eslint-disable-line
          this.error = ''
          this.email = ''
        }, 1000)
        return 'Ops! esse e-mail já foi cadastrado =/'
      }
      return !this.isSuccess
        ? 'Deixe seu email para ser notificado!'
        : 'Uhuul! Agora é só esperar!'
    }
  },
  mounted () {
    bus.$on('modal:toggle', payload => this.handleModalToggle(payload))
  },
  destroyed () {
    bus.$off('modal:toggle', payload => this.handleModalToggle(payload))
  },
  methods: {
    close () {
      this.isActive = false
    },
    async handleSubscribe () {
      this.isLoading = true

      try {
        const { data } = await axios.post('https://api-treinamento-vue3-landing.vercel.app/api/mailSubscribe', {
          email: this.email.trim(),
          name: this.name.trim()
        })
        if (data.id) {
          this.isSuccess = true
          setTimeout(() => {
            this.isSuccess = false
            this.email = ''
            this.name = ''
            this.close()
          }, 2000)
        }
      } catch (error) {
        this.error = error.response.data.message
      }

      this.isLoading = false
    },
    handleModalToggle ({ status }) {
      this.isActive = status
    }
  }
}
</script>
