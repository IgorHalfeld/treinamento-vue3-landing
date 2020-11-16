<template>
  <div class="flex flex-col items-center justify-center py-24 bg-gray-200">
    <div class="flex flex-col items-center justify-center max-w-4xl">
      <div class="flex flex-col justify-center max-w-3xl">
        <h3 class="z-20 text-2xl font-black text-center text-gray-800 lg:text-4xl">
          O que você vai aprender?
        </h3>
        <h4 class="z-20 text-xl font-medium text-center text-gray-800 lg:text-3xl">
          Tópicos que você verá na MasterClass
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
            variant="bg-gray-500"
            class="mt-5 opacity-50 hover:opacity-100"
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
    title: 'A jornada se inicia',
    desc: 'Por onde começar?',
    subModules: [
      {
        title: 'Onde e como buscar as melhores oportunidades de trabalho?'
      },
      {
        title: 'Como e quais os pontos importantes ao analisar uma empresa e oportunidade?'
      }
    ]
  },
  {
    title: 'Marca pessoal e presença',
    desc: 'Ganhe visibilidade!',
    subModules: [
      { title: 'Como trabalhar sua Marca Pessoal Online (Github, LinkedIn, etc) e currículo?' },
      { title: 'Importância das comunidades e participação em eventos' }
    ]
  },
  {
    title: 'Entrevista não técnica',
    desc: 'Como se destacar?',
    subModules: [
      { title: 'Técnicas práticas para trabalhar o nervosismo' },
      { title: 'Como passar segurança e confiança na sua linguagem corporal e voz?' },
      { title: 'O que estudar previamente sobre a empresa?' },
      { title: 'Lidando com situações desconfortáveis' }
    ]
  },
  {
    title: 'Entrevista técnica',
    desc: 'Show me the code!',
    subModules: [
      { title: 'Quais os tipos possíveis de testes e como se preparar para cada um?' },
      { title: 'Como e onde treinar?' },
      { title: 'Hard Skills vs Soft Skills' },
      { title: 'Lidando com situações desconfortáveis' }
    ]
  },
  {
    title: 'Entrevista de cultura',
    desc: 'The last one!',
    subModules: [
      { title: 'Alinhamento' },
      { title: 'Negociação de salário' },
      { title: 'Lidando com situações desconfortáveis' }
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
