<template>
  <main class="w-full h-full">
    <hero />
    <what />
    <video-why />
    <program />
    <instructors />
    <bonus />
    <when-and-where />
    <buy />
    <custom-footer />
    <client-only>
      <cta />
    </client-only>
  </main>
</template>

<script>
import Hero from '../components/Hero'
import What from '../components/What'
import VideoWhy from '../components/VideoWhy'
import Program from '../components/Program'
import Instructors from '../components/Instructors'
import Bonus from '../components/Bonus'
import WhenAndWhere from '../components/WhenAndWhere'
import Buy from '../components/Buy'
import CustomFooter from '../components/CustomFooter'
import Cta from '../components/Cta'

export default {
  components: {
    Hero,
    What,
    VideoWhy,
    Program,
    Instructors,
    Bonus,
    WhenAndWhere,
    Buy,
    CustomFooter,
    Cta
  }
}
</script>
