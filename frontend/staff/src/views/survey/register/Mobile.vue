<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-4 pb-10"></v-responsive>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'

const icon = ref('fas fa-magnifying-glass')
const title = ref('출석조사 등록')
const breadcumbs = ref([
  {
    title: '출석조사',
    disabled: false
  },
  {
    title: '출석조사 등록',
    disabled: false
  }
])
</script>
