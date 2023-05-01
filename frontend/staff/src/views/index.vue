<template>
  <HelloWorldMobile v-if="mobile" />
  <HelloWorld v-else />
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorldMobile from '@/components/HelloWorldMobile.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>
