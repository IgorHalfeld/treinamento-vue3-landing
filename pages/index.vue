<template>
  <main class="w-full h-full">
    <hero />
    <what />
    <video-why />
    <program />
    <instructors />

    <bonus />

    <!--
    <buy />
    -->

    <when-and-where />
    <custom-footer />
    <client-only>
      <cta />
    </client-only>
  </main>
</template>

<script>
import Hero from '../components/Hero'
import What from '../components/What'

const VideoWhy = () => import('../components/VideoWhy')
const Program = () => import('../components/Program')
const Instructors = () => import('../components/Instructors')
const WhenAndWhere = () => import('../components/WhenAndWhere')
const CustomFooter = () => import('../components/CustomFooter')
const Cta = () => import('../components/Cta')
const Bonus = () => import('../components/Bonus')
/*
import Buy from '../components/Buy'
*/

export default {
  components: {
    Hero,
    What,
    VideoWhy,
    Program,
    Instructors,
    WhenAndWhere,
    Bonus,

    /*
    Buy,

    */
    CustomFooter,
    Cta
  }
}
</script>
