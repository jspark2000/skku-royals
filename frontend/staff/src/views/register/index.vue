<template>
  <Mobile v-if="mobile" />
  <Desktop v-else />
</template>

<script lang="ts" setup>
import Mobile from './Mobile.vue'
import Desktop from './Desktop.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>
