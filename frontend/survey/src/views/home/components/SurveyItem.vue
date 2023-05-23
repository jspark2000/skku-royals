<template>
  <div class="flex mx-auto p-6 font-mono">
    <form class="pb-6 rounded-lg shadow-lg bg-white" @submit.prevent="submit">
      <div
        class="relative flex flex-wrap justify-center py-6 bg-black rounded-t-xl pb-6"
      >
        <h1
          class="relative text-center w-full flex-none mb-2 text-2xl font-semibold text-white"
        >
          수요일, 명륜 통합 운동
        </h1>
        <div class="relative text-lg text-white">05/23</div>
        <div class="relative text-teal-400 ml-3">통합운동</div>
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
          <p
            v-if="!valid"
            class="transition ease-in-out mt-1 ml-4 text-red-500 text-sm font-semibold"
          >
            필수 입력 항목입니다.
          </p>
        </label>
      </div>
      <div class="flex justify-center space-x-4 mb-4 text-sm font-medium">
        <div class="flex">
          <button
            class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
          >
            뒤로가기
          </button>
        </div>
        <div class="flex">
          <button
            class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
            type="submit"
          >
            다음으로
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { AttendanceStatus } from '@/common/enums/attendanceStatus.enum'
import { ref, watch } from 'vue'

const show = ref(true)
const valid = ref(true)
const survey = ref()
const reason = ref()

watch(survey, () => {
  survey.value !== AttendanceStatus.Present
    ? (show.value = false)
    : (show.value = true)

  survey.value === AttendanceStatus.Present ? (reason.value = '') : undefined
})

function submit() {
  if (survey.value !== AttendanceStatus.Present && !reason.value) {
    valid.value = false
  } else {
    valid.value = true
  }
}
</script>
<style></style>
