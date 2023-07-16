<template>
  <div class="relative mx-auto flex min-h-screen flex-col justify-center">
    <div v-if="!deadline" class="mx-auto flex">
      <div>
        <div class="mx-auto flex font-mono text-3xl font-black">
          마감된 출석조사 입니다
        </div>
        <button
          class="mt-10 w-full rounded-lg bg-red-300 p-3 font-mono font-bold text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          @click="router.back()"
        >
          목록으로
        </button>
      </div>
    </div>
    <div v-else class="mx-auto flex flex-col font-mono">
      <div v-if="!identified">
        <StudentID @identified="(result: any) => identify(result)"></StudentID>
        <div class="mt-5 px-6">
          <button
            class="w-full rounded-lg bg-gray-400 p-3 font-mono font-bold text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            @click="router.back()"
          >
            목록으로
          </button>
        </div>
      </div>
      <div v-else>
        <div class="text-center text-lg font-bold">
          총 {{ pages }}개 중 {{ current + 1 }}번 째
        </div>
        <Transition name="slide">
          <div class="mx-auto flex flex-row">
            <SurveyItem
              v-for="page in pages"
              :key="page"
              @decrement="() => (current -= 1)"
              @increment="(result: any) => next(result)"
              :pageInfo="{
                totalPages: pages,
                currentPage: current,
                index: page
              }"
              :surveyData="surveyData[page - 1]"
            ></SurveyItem>
          </div>
        </Transition>
        <div class="mt-5 px-6">
          <button
            class="w-full rounded-lg bg-gray-400 p-3 font-mono font-bold text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            @click="router.back()"
          >
            목록으로
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Ref, onMounted, ref } from 'vue'
import SurveyItem from '../components/SurveyItem.vue'
import StudentID from '../components/StudentID.vue'
import { Survey } from '../interfaces/survey.interface'
import { axiosInstance } from '@/common/axios'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const pages: Ref<number> = ref(0)
const current = ref(0)
const surveyData: Ref<Partial<Survey[]>> = ref([])
const submits: Partial<any[]> = []
const route = useRoute()
const router = useRouter()
const deadline = ref(true)
const identified = ref(false)
const studentId = ref('')

function identify(result: any) {
  identified.value = true
  studentId.value = result.studentId
}

async function next(result: any) {
  const target: Array<number> = []

  submits.forEach((submit, index) => {
    if (result.date === submit?.date) {
      target.push(index)
    }
  })

  if (target.length === 0) {
    submits.push(result)
  } else {
    submits[target[0]].date = result.date
    submits[target[0]].survey = result.survey
    submits[target[0]].location = result.location
    submits[target[0]].reason = result.reason ?? ''
  }

  if (current.value + 1 === pages.value) {
    await submit()
  } else {
    current.value += 1
  }
}

async function submit() {
  const surveyDTO = {
    studentId: studentId.value,
    surveys: submits
  }

  await axiosInstance
    .post('/api/survey/submit', surveyDTO)
    .then(() => {
      Swal.fire({
        title: 'Success',
        text: '제출 성공',
        icon: 'success',
        confirmButtonText: '확인'
      })
      router.push('/')
    })
    .catch((error) => {
      Swal.fire({
        title: 'Success',
        text: error.response.data.message ?? '알 수 없는 오류 발생',
        icon: 'error',
        confirmButtonText: '확인'
      })
    })
}

onMounted(async () => {
  await axiosInstance
    .get(`/api/survey/${route.params.id}`)
    .then((result) => {
      surveyData.value = result.data
      pages.value = surveyData.value.length
    })
    .catch(() => (deadline.value = false))
})
</script>
<style></style>
