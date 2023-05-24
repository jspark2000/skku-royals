<template>
  <div
    class="relative flex flex-col min-h-screen justify-center pt-2 pb-10 bg-gray-50"
  >
    <div class="flex mx-auto font-mono font-bold text-lg">
      <p>총 {{ pages }}개중 {{ current }}개 완료</p>
    </div>
    <Transition name="slide">
      <div class="flex flex-row mx-auto">
        <SurveyItem
          v-for="page in pages"
          :key="page"
          @currentPage="(page) => (current = page)"
          :totalsPages="pages"
          :currentPage="current"
          :index="page"
        ></SurveyItem>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import SurveyItem from '../components/SurveyItem.vue'

const pages = ref(5)
const current = ref(0)
</script>
<style scpoed>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
</style>
