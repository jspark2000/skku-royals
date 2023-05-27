<template>
  <div class="flex mx-auto p-6 font-mono">
    <div class="pb-6 rounded-lg shadow-lg bg-white">
      <div
        class="relative flex flex-wrap justify-center py-6 bg-black rounded-t-xl pb-6"
      >
        <h1
          class="relative text-center w-full flex-none mb-2 text-2xl font-semibold text-white"
        >
          학번 정보 입력
        </h1>
      </div>
      <div class="flex justify-center mb-10">
        <div
          class="mt-10 px-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 font-mono"
        >
          <div class="col-span-full">
            <label
              for="studentId"
              class="block text-sm font-semibold leading-6 text-gray-900"
              >학번</label
            >
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
                class="transition ease-in-out mt-1 text-red-500 text-sm font-semibold"
              >
                {{ invalidMsg }}
              </p>
            </Transition>
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-4 text-sm font-medium">
        <div class="flex">
          <button
            class="px-6 h-12 ease-in uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
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
