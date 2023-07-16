<template>
  <div
    class="relative mx-auto flex min-h-screen max-w-screen-sm flex-col justify-center py-10 text-center"
    mx-auto
  >
    <div class="mb-10 font-mono text-3xl font-black">출석조사 목록</div>
    <div class="flex flex-col px-10 text-center">
      <div>
        <div
          v-for="(surveyGroup, index) in surveyGroups"
          :key="index"
          class="my-5"
        >
          <SurveyGroupItem :surveyGroupInfo="surveyGroup"></SurveyGroupItem>
        </div>
      </div>
      <button
        class="mt-10 w-full rounded-lg bg-red-300 p-3 font-mono font-bold text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        @click="router.back()"
      >
        뒤로가기
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import SurveyGroupItem from '../components/SurveyGroupItem.vue'
import { Ref, onMounted, ref } from 'vue'
import { axiosInstance } from '@/common/axios'
import { SurveyGroup } from '../interfaces/surveyGroup.interface'

const router = useRouter()
const surveyGroups: Ref<Partial<Array<SurveyGroup>>> = ref([])

onMounted(async () => {
  await axiosInstance
    .get('/api/survey/list')
    .then((result) => (surveyGroups.value = result.data))
})
</script>
<style></style>
