<template>
  <main class="w-full h-full">
    <hero />
    <what />
    <video-why />
    <program />
    <instructors />

    <bonus />

    <when-and-where />
    <sponsors />
    <partner-communities />
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
const Sponsors = () => import('../components/Sponsors')
const PartnerCommunities = () => import('../components/PartnerCommunities')

export default {
  components: {
    Hero,
    What,
    VideoWhy,
    Program,
    Instructors,
    WhenAndWhere,
    Bonus,
    CustomFooter,
    Cta,
    Sponsors,
    PartnerCommunities
  }
}
</script>
