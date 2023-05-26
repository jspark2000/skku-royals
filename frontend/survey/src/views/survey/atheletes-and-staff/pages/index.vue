<template>
  <div
    class="relative flex flex-col min-h-screen text-center justify-center py-10 max-w-screen-sm mx-auto"
  >
    <div class="font-black font-mono text-3xl mb-10">출석조사 목록</div>
    <div class="flex flex-col text-center px-10">
      <div>
        <!-- <div
          v-for="(surveyGroup, index) in sruveyGroups"
          :key="index"
          class="my-5"
        >
          <SurveyGroupItem
            :surveyGroupInfo="surveyGroups[index]"
          ></SurveyGroupItem>
        </div> -->
      </div>
      <button
        class="rounded-lg drop-shadow-xl w-full p-3 font-bold font-mono text-white mt-10 transition ease-in-out delay-150 bg-red-400 hover:-translate-y-1 hover:scale-110 duration-300"
        @click="router.back()"
      >
        뒤로가기
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
// import SurveyGroupItem from '../components/SurveyGroupItem.vue'
import { Ref, onMounted, ref } from 'vue'
import { axiosInstance } from '@/common/axios'
import { SurveyGroup } from '../interfaces/surveyGroup.interface'

const router = useRouter()
const sruveyGroups: Ref<Partial<Array<SurveyGroup>>> = ref([])

onMounted(async () => {
  await axiosInstance
    .get('/api/survey/list')
    .then((result) => (sruveyGroups.value = result.data))
})
</script>
<style></style>
