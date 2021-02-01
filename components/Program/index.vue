<template>
  <div class="flex flex-col items-center justify-center py-24 bg-gray-200">
    <div class="flex flex-col items-center justify-center max-w-4xl">
      <div class="flex flex-col justify-center max-w-3xl">
        <h3 class="z-20 text-2xl font-black text-center text-gray-800 lg:text-4xl">
          O que você vai aprender?
        </h3>
        <h4 class="z-20 text-xl font-medium text-center text-gray-800 lg:text-3xl">
          Todo o conteúdo que você verá no curso
        </h4>

        <div class="flex flex-col justify-center w-full px-3">
          <module-item
            v-for="(module, index) in program"
            :key="module.title"
            :number="index + 1"
            :title="module.title"
            :class="{
              'mt-12': !index,
              'mt-5': !!index
            }"
            :desc="module.desc"
            :already-opened="!index"
            :sub-modules="module.subModules"
          />

          <custom-button
            class="mt-5 bg-base-200"
            @click.native="toggleMore"
          >
            {{ buttonLabel }}
          </custom-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '../CustomButton'
import ModuleItem from '../ModuleItem'

const program = [
  {
    title: 'Introdução (13/01/2021)',
    desc: 'Apresentação e prepação',
    subModules: [
      {
        title: 'Como se preparar pra esse curso'
      },
      {
        title: 'Marcos do front-end'
      },
      { title: 'Filosofia do Vue e o que é' },
      {
        title: 'Apresentação do ecossistema'
      },
      {
        title: 'Configuração do ambiente'
      }
    ]
  },
  {
    title: 'Conceitos do Vue (13/01/2021)',
    desc: 'Principais fundamentos do Vue',
    subModules: [
      { title: 'Single-File Components' },
      { title: 'Data-binding' },
      { title: 'Diretivas' },
      { title: 'Eventos e métodos' },
      { title: 'Nova syntax e antiga' },
      { title: 'Life-cycle hooks' }
    ]
  },
  {
    title: 'Início do projeto (20/01/2021)',
    desc: 'Mãos a massa!',
    subModules: [
      { title: 'Apresentação do nosso projeto: feedbacker (Pequena plataforma de feebacks)' },
      { title: 'Exportando e colocando os assets do design' },
      { title: 'Clonando e rodando backend (pré-pronto) do projeto' }
    ]
  },
  {
    title: 'Criando o dashboard (20/01/2021)',
    desc: 'Fazendo nosso controle de feedbacks',
    subModules: [
      { title: 'Configurando nosso projeto e introdução a rotiamento no Vue' },
      { title: 'Criando tela de inicial (Parte 1)' },
      { title: 'Criando tela de inicial (Parte 2)' },
      { title: 'Criando nosso modal factory (Parte 1)' },
      { title: 'Criando nosso modal factory (Parte 2)' },
      { title: 'Criando modal de login (Parte 1)' },
      { title: 'Criando modal de login (Parte 2)' },
      { title: 'Criando modal de login (Parte 3)' },
      { title: 'Criando modal de login (Parte 4)' },
      { title: 'Criando modal de cadastro' },
      { title: 'Pegando o usuário logado e controlando rotas autenticadas' },
      { title: 'Introdução estado global no Vue 3' },
      { title: 'Criando tela de credenciais (Parte 1)' },
      { title: 'Criando tela de credenciais (Parte 2)' },
      { title: 'Criando tela de credenciais (Parte 3)' },
      { title: 'Criando tela de credenciais (Parte 4)' },
      { title: 'Criando tela de feedbacks (Parte 1)' },
      { title: 'Criando tela de feedbacks (Parte 2)' },
      { title: 'Criando tela de feedbacks (Parte 3)' },
      { title: 'Criando tela de feedbacks (Parte 4)' },
      { title: 'Criando tela de feedbacks (Parte 5)' },
      { title: 'Criando tela de feedbacks (Parte 6)' }
    ]
  },
  {
    title: 'Testes pro dashboard (27/01/2021)',
    desc: 'Fazendo nossos testes brabos',
    subModules: [
      { title: 'Fazendo testes unitários de utils' },
      { title: 'Fazendo testes unitários dos serviços' },
      { title: 'Fazendo testes unitários da store' },
      { title: 'Fazendo testes unitários de componente' },
      { title: 'Fazendo testes de componentes que usam a store' },
      { title: 'Fazendo testes end2end com cypress (Parte 1)' },
      { title: 'Fazendo testes end2end com cypress (Parte 2)' }
    ]
  },
  {
    title: 'Deploy e Github actions (27/01/2021)',
    desc: 'Vamos mandar nossa app para o espaço!',
    subModules: [
      { title: 'Deployando nosso backend na vercel' },
      { title: 'Continuous Deployment com o Github' },
      { title: 'Criando jobs no github actions para rodar os testes' },
      { title: 'Criando dockerfile com multi-stage build pra deploy em outras plataformas' }
    ]
  },
  {
    title: 'Criando nosso widget (10/02/2021)',
    desc: 'Fazendo o coração do nosso projeto',
    subModules: [
      { title: 'Configuração e arquitetura do projeto' },
      { title: 'Introdução ao Typescript e configuração dele no projeto' },
      { title: 'Criando mecânica de popup no site' },
      { title: 'Criando tela de seleção de feedback' },
      { title: 'Integrando com API' }
    ]
  },
  {
    title: 'Testes pro widget (10/02/2021)',
    desc: 'E mais testes!!',
    subModules: [
      { title: 'Fazendo testes unitários pra tela de seleção de feedback' },
      { title: 'Testando nossa camada de serviço' },
      { title: 'Fazendo testes end2end com cypress' }
    ]
  },
  {
    title: 'Deploy e Github actions (10/02/2021)',
    desc: 'Vamos mandar nossa app para o espaço! (de novo haha)',
    subModules: [
      { title: 'Continuous Deployment com o Github' },
      { title: 'Criando jobs no github actions para rodar os testes' },
      { title: 'Criando dockerfile com multi-stage build pra deploy em outras plataformas' }
    ]
  },
  {
    title: 'Próximos passos (10/02/2021)',
    desc: 'Certificado e o que mais aprender?',
    subModules: [
      { title: 'Importância das comunidades e participação em eventos' },
      { title: 'Amadurecimento e migração do Vue 2' }
    ]
  }
]

export default {
  components: { ModuleItem, CustomButton },
  data: () => ({ program: program.slice(0, 3) }),
  computed: {
    buttonLabel () {
      return this.program.length > 3 ? 'Ver menos 💃' : 'Ver mais 💃'
    }
  },
  methods: {
    toggleMore () {
      if (this.program.length > 3) {
        this.program = program.slice(0, 3)
      } else {
        this.program = program
      }

      this.$forceUpdate()
    }
  }
}
</script>
