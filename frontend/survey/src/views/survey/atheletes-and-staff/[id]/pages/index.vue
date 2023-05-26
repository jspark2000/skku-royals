<template>
  <div
    class="relative flex flex-col min-h-screen justify-center pt-2 pb-10 bg-gray-50"
  >
    <div class="flex mx-auto font-mono font-bold text-lg">
      <p>총 {{ pages }}개 중 {{ current + 1 }}번 째</p>
    </div>
    <Transition name="slide">
      <div class="flex flex-row mx-auto">
        <SurveyItem
          v-for="page in pages"
          :key="page"
          @decrement="() => (current -= 1)"
          @increment="(result) => next(result)"
          :pageInfo="{ totalPages: pages, currentPage: current, index: page }"
          :surveyData="surveyData[page - 1]"
        ></SurveyItem>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import SurveyItem from '../components/SurveyItem.vue'
import { Survey } from '../interfaces/survey.interface'
import { AttendanceType } from '@/common/enums/attendanceType.enum'

const pages = ref(4)
const current = ref(0)
const surveyData: Survey[] = [
  {
    id: 1,
    date: new Date('2023-05-20'),
    description: '월요일, 캠퍼스별 운동',
    type: AttendanceType.Dispersion
  },
  {
    id: 2,
    date: new Date('2023-05-21'),
    description: '화요일, 캠퍼스별 운동',
    type: AttendanceType.Dispersion
  },
  {
    id: 3,
    date: new Date('2023-05-22'),
    description: '수요일, 명륜 통합 운동',
    type: AttendanceType.Integrated
  },
  {
    id: 4,
    date: new Date('2023-05-23'),
    description: '목요일, 율전 통합 운동',
    type: AttendanceType.Integrated
  }
]

function next(result: any) {
  current.value += 1
  console.log(result)
}
</script>
<style></style>
