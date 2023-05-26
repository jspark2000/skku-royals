<template>
  <div
    v-if="props.pageInfo?.currentPage === props.pageInfo?.index as number - 1"
    class="flex mx-auto p-6 font-mono"
  >
    <div class="pb-6 rounded-lg shadow-lg bg-white">
      <div
        class="relative flex flex-wrap justify-center py-6 bg-black rounded-t-xl pb-6"
      >
        <h1
          class="relative text-center w-full flex-none mb-2 text-2xl font-semibold text-white"
        >
          {{ props.surveyData?.description }}
        </h1>
        <div class="relative text-lg text-white">
          {{ props.surveyData?.date.toLocaleDateString() }}
        </div>
        <div class="relative text-teal-400 ml-3">
          {{
            props.surveyData?.type === AttendanceType.Integrated
              ? '통합훈련'
              : '개별훈련'
          }}
        </div>
      </div>
      <div class="flex justify-center my-6">
        <div class="space-x-6 flex text-sm font-medium">
          <label>
            <input
              class="sr-only peer"
              name="survey"
              type="radio"
              :value="AttendanceStatus.Present"
              v-model="survey"
              checked
            />
            <div
              class="relative rounded-full w-12 h-12 flex items-center justify-center text-black peer-checked:bg-green-500 peer-checked:text-white"
            >
              참석
            </div>
          </label>
          <label>
            <input
              class="sr-only peer"
              name="survey"
              type="radio"
              :value="AttendanceStatus.Tardy"
              v-model="survey"
            />
            <div
              class="relative rounded-full w-12 h-12 flex items-center justify-center text-black peer-checked:bg-amber-300 peer-checked:text-white"
            >
              늦참
            </div>
          </label>
          <label>
            <input
              class="sr-only peer"
              name="survey"
              type="radio"
              :value="AttendanceStatus.Absent"
              v-model="survey"
            />
            <div
              class="relative rounded-full w-12 h-12 flex items-center justify-center text-black peer-checked:bg-red-600 peer-checked:text-white"
            >
              불참
            </div>
          </label>
        </div>
      </div>
      <div class="flex justify-center my-6">
        <div class="space-x-6 flex text-sm font-medium">
          <label>
            <input
              class="sr-only peer"
              name="location"
              type="radio"
              :value="AttendanceStatus.Present"
              v-model="location"
              checked
            />
            <div
              class="relative rounded-full w-12 h-12 flex items-center justify-center text-black peer-checked:bg-green-500 peer-checked:text-white"
            >
              명륜
            </div>
          </label>
          <label>
            <input
              class="sr-only peer"
              name="location"
              type="radio"
              :value="AttendanceStatus.Tardy"
              v-model="location"
            />
            <div
              class="relative rounded-full w-12 h-12 flex items-center justify-center text-black peer-checked:bg-amber-300 peer-checked:text-white"
            >
              율전
            </div>
          </label>
        </div>
      </div>
      <div class="flex justify-center mb-6">
        <label>
          <input
            type="text"
            name="reason"
            class="form-input disabled:opacity-50 px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            v-model="reason"
            placeholder="불참 혹은 늦참 사유"
            :disabled="show"
          />
          <Transition name="slide-fade">
            <p
              v-if="!valid"
              class="transition ease-in-out mt-1 ml-4 text-red-500 text-sm font-semibold"
            >
              필수 입력 항목입니다.
            </p>
          </Transition>
        </label>
      </div>
      <div class="flex justify-center space-x-4 mb-4 text-sm font-medium">
        <div class="flex">
          <button
            v-if="props.pageInfo?.currentPage !== 0"
            class="px-6 h-12 ease-in uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
            @click="decrement"
          >
            뒤로가기
          </button>
        </div>
        <div class="flex">
          <button
            v-if="props.pageInfo?.currentPage !== props.pageInfo?.totalPages as number - 1"
            class="px-6 h-12 ease-in uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
            @click="increment()"
          >
            다음으로
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { AttendanceStatus } from '@/common/enums/attendanceStatus.enum'
import { Survey } from '../interfaces/survey.interface'
import { type PropType, ref, watch } from 'vue'
import { AttendanceType } from '@/common/enums/attendanceType.enum'

type PageInfo = {
  currentPage: number
  totalPages: number
  index: number
}

const props = defineProps({
  pageInfo: Object as PropType<PageInfo>,
  surveyData: Object as PropType<Survey>
})

const emit = defineEmits(['increment', 'decrement'])

const show = ref(true)
const valid = ref(true)
const location = ref()
const survey = ref(AttendanceStatus.Present)
const reason = ref()

watch(survey, () => {
  survey.value !== AttendanceStatus.Present
    ? (show.value = false)
    : (show.value = true)
  survey.value === AttendanceStatus.Present ? (reason.value = '') : undefined
  survey.value === AttendanceStatus.Present ? (valid.value = true) : undefined
})

function increment() {
  if (survey.value !== AttendanceStatus.Present && !reason.value) {
    valid.value = false
  } else {
    valid.value = true
    emit('increment', {
      id: props.surveyData?.id,
      survey: survey.value,
      reason: reason.value
    })
  }
}

function decrement() {
  emit('decrement')
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
