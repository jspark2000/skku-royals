<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'

const icon = ref('fas fa-football')
const title = ref('시합결과 조회')
const breadcumbs = ref([
  {
    title: '시합관리',
    disabled: false
  },
  {
    title: '시합결과 조회',
    disabled: false
  }
])
</script>
