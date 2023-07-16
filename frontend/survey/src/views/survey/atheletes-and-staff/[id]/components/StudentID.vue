<template>
  <div class="mx-auto flex p-6 font-mono">
    <div class="rounded-lg bg-white pb-6 shadow-lg">
      <div
        class="relative flex flex-wrap justify-center rounded-t-xl bg-black py-6 pb-6"
      >
        <h1
          class="relative mb-2 w-full flex-none text-center text-2xl font-semibold text-white"
        >
          학번 정보 입력
        </h1>
      </div>
      <div class="mb-10 flex justify-center">
        <div
          class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 px-10 font-mono sm:grid-cols-6"
        >
          <div class="col-span-full">
            <label
              for="studentId"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              학번
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="studentId"
                id="studentId"
                placeholder="(ex 2023311001)"
                v-model="studentId"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <Transition name="slide-fade">
              <p
                v-if="!valid"
                class="mt-1 text-sm font-semibold text-red-500 transition ease-in-out"
              >
                {{ invalidMsg }}
              </p>
            </Transition>
          </div>
        </div>
      </div>
      <div class="mb-4 flex justify-center text-sm font-medium">
        <div class="flex">
          <button
            class="h-12 border-2 border-black bg-teal-400 px-6 font-semibold uppercase tracking-wider text-black ease-in"
            @click="identify()"
          >
            다음으로
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { axiosInstance } from '@/common/axios'
import { ref } from 'vue'

const studentId = ref()
const valid = ref(true)
const invalidMsg = ref('')
const emit = defineEmits(['identified'])

async function identify() {
  if (!studentId.value) {
    valid.value = false
    invalidMsg.value = '필수 입력 항목입니다.'
  } else {
    valid.value = true
    const check = await axiosInstance
      .get(`/api/people/${studentId.value}`)
      .then((result) => result.data)
      .catch(() => {
        return false
      })
    if (check) {
      emit('identified', { studentId: studentId.value })
    } else {
      valid.value = false
      invalidMsg.value = '잘못된 부원 정보입니다.'
    }
  }
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
