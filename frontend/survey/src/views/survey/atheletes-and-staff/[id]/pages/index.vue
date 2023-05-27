<template>
  <div class="relative flex flex-col min-h-screen justify-center mx-auto">
    <div v-if="!deadline" class="flex mx-auto">
      <div>
        <div class="flex mx-auto font-mono font-black text-3xl">
          마감된 출석조사 입니다
        </div>
        <button
          class="rounded-lg drop-shadow-xl w-full p-3 font-bold font-mono text-white mt-10 transition ease-in-out delay-150 bg-red-300 hover:-translate-y-1 hover:scale-110 duration-300"
          @click="router.back()"
        >
          목록으로
        </button>
      </div>
    </div>
    <div v-else class="flex flex-col mx-auto font-mono">
      <div v-if="!identified">
        <StudentID @identified="(result: any) => identify(result)"></StudentID>
        <div class="px-6 mt-5">
          <button
            class="rounded-lg drop-shadow-xl w-full p-3 font-bold font-mono text-white transition ease-in-out delay-150 bg-gray-400 hover:-translate-y-1 hover:scale-110 duration-300"
            @click="router.back()"
          >
            목록으로
          </button>
        </div>
      </div>
      <div v-else>
        <div class="font-bold text-lg text-center">
          총 {{ pages }}개 중 {{ current + 1 }}번 째
        </div>
        <Transition name="slide">
          <div class="flex flex-row mx-auto">
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
        <div class="px-6 mt-5">
          <button
            class="rounded-lg drop-shadow-xl w-full p-3 font-bold font-mono text-white transition ease-in-out delay-150 bg-gray-400 hover:-translate-y-1 hover:scale-110 duration-300"
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
