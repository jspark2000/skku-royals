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
          {{ props.surveyData?.date.substring(5, 10) }}
        </div>
        <div class="relative text-teal-400 ml-3">
          {{
            props.surveyData?.type === AttendanceType.Integrated
              ? '통합훈련'
              : '개별훈련'
          }}
        </div>
      </div>
      <div class="flex justify-center mb-10">
        <div
          class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 font-mono"
        >
          <div
            v-if="props.surveyData?.type === AttendanceType.Dispersion"
            class="sm:col-span-3"
          >
            <label
              for="location"
              class="block text-sm font-semibold leading-6 text-gray-900"
              >캠퍼스</label
            >
            <div class="mt-2">
              <select
                id="location"
                name="location"
                v-model="location"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option :value="Location.Seoul">명륜</option>
                <option :value="Location.Suwon">율전</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="survey"
              class="block text-sm font-semibold leading-6 text-gray-900"
              >출석</label
            >
            <div class="mt-2">
              <select
                id="survey"
                name="survey"
                v-model="survey"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option :value="AttendanceStatus.Present">참석</option>
                <option :value="AttendanceStatus.Tardy">늦참</option>
                <option :value="AttendanceStatus.Absent">불참</option>
              </select>
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="reason"
              class="block text-sm font-semibold leading-6 text-gray-900"
              >늦참 혹은 불참 사유</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="reason"
                id="reason"
                v-model="reason"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <Transition name="slide-fade">
              <p
                v-if="!valid"
                class="transition ease-in-out mt-1 text-red-500 text-sm font-semibold"
              >
                필수 입력 항목입니다.
              </p>
            </Transition>
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-4 text-sm font-medium">
        <div class="flex">
          <button
            v-if="props.pageInfo?.currentPage !== 0"
            class="px-6 h-12 ease-in uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black mr-4"
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
        <div class="flex">
          <button
            v-if="props.pageInfo?.currentPage === props.pageInfo?.totalPages as number - 1"
            class="px-6 h-12 ease-in uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
            @click="increment()"
          >
            제출하기
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
import { Location } from '@/common/enums/location.enum'

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
const location = ref(Location.Seoul)
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
      date: props.surveyData?.date,
      survey: survey.value,
      reason: reason.value,
      location:
        survey.value === AttendanceStatus.Absent
          ? Location.Integrated
          : props.surveyData?.type === AttendanceType.Integrated
          ? Location.Integrated
          : location.value
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
