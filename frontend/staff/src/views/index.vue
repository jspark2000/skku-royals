<template>
  <LandingMobile v-if="mobile" />
  <Landing v-else />
</template>

<script lang="ts" setup>
import Landing from '@/components/Landing.vue'
import LandingMobile from '@/components/LandingMobile.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>
