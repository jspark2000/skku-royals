<template>
  <div
    class="relative flex flex-col min-h-screen overflow-hidden justify-center pt-2 pb-10 bg-gray-50"
  >
    <SurveyCounter></SurveyCounter>
    <SurveyItem></SurveyItem>
  </div>
</template>
<script lang="ts" setup>
import SurveyCounter from '../components/SurveyCounter.vue'
import SurveyItem from '../components/SurveyItem.vue'
</script>
<style></style>
