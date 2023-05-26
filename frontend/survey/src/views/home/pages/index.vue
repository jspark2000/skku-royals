<template>
  <div
    class="relative flex flex-col min-h-screen justify-center overflow-hidden text-center pt-2 pb-10 max-w-screen-sm mx-auto"
  >
    <div class="animate-bounce">
      <div class="font-black font-mono text-4xl mb-1 pb-0 skew-y-6">
        로얄스 출석조사
      </div>
      <div
        class="font-extrabold font-mono ml-32 mt-0 pt-0 text-xl text-yellow-500 skew-y-6"
      >
        SEASON {{ year }}
      </div>
    </div>
    <div class="flex flex-col text-center mt-16 px-20">
      <button
        class="rounded-lg font-mono drop-shadow-xl w-full p-3 font-bold text-white mb-4 transition ease-in-out delay-150 bg-yellow-400 hover:-translate-y-1 hover:scale-110 active:-translate-y-1 active:scale-110 duration-300"
        @click="move('athletes-and-staff')"
      >
        선수 및 스태프
      </button>
      <button
        class="rounded-lg font-mono drop-shadow-xl w-full p-3 font-bold text-white transition ease-in-out delay-150 bg-indigo-400 hover:-translate-y-1 hover:scale-110 active:-translate-y-1 active:scale-110 duration-300"
        @click="move('coach')"
      >
        코치진(준비중)
      </button>
    </div>
    <div class="img-container absolute flex flex-row">
      <img src="/atheletes.webp" alt="img" class="img-athlete brightness-150" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const year = new Date().getFullYear()

function move(target: string) {
  target === 'athletes-and-staff'
    ? router.push('/survey/athletes-and-staff')
    : router.push('/survey/coach')
}
</script>
<style scoped>
.img-athlete {
  width: 240px;
}
.img-container {
  bottom: -30px;
  left: -10px;
}
</style>
