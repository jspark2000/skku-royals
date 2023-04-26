<template>
  <LoginMobile v-if="mobile" />
  <Login v-else />
</template>

<script lang="ts" setup>
import Login from '@/components/Login.vue'
import LoginMobile from '@/components/LoginMobile.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>
