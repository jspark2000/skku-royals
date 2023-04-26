<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-5 pb-10"></v-responsive>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'

const icon = ref('fas fa-magnifying-glass')
const title = ref('미응답자 확인')
const breadcumbs = ref([
  {
    title: '출석조사',
    disabled: false
  },
  {
    title: '미응답자 확인',
    disabled: false
  }
])
</script>
