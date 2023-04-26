<template>
  <LoginMobile v-if="mobile" />
  <Login v-else />
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import Login from './login.vue'
import LoginMobile from './LoginMobile.vue'

const { mobile } = useDisplay()
</script>
