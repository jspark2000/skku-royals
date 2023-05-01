<template>
  <v-app>
    <toolbar-mobile v-if="mobile" />
    <tool-bar v-else />
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from './View.vue'
import ToolBar from './Toolbar.vue'
import ToolbarMobile from './ToolbarMobile.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>
