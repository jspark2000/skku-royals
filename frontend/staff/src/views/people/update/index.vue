<template>
  <Mobile v-if="mobile" />
  <Desktop v-else></Desktop>
</template>

<script lang="ts" setup>
import Desktop from './Desktop.vue'
import Mobile from './Mobile.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>
