<template>
  <HomeMobile v-if="mobile" />
  <Home v-else />
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import Home from './Home.vue'
import HomeMobile from './HomeMobile.vue'

const { mobile } = useDisplay()
</script>
