<template>
  <div
    class="relative mx-auto flex min-h-screen max-w-screen-sm flex-col justify-center overflow-hidden pb-10 pt-2 text-center"
  >
    <div class="animate-bounce">
      <div class="mb-1 skew-y-6 pb-0 font-mono text-4xl font-black">
        로얄스 출석조사
      </div>
      <div
        class="ml-32 mt-0 skew-y-6 pt-0 font-mono text-xl font-extrabold text-yellow-500"
      >
        SEASON {{ year }}
      </div>
    </div>
    <div class="mt-16 flex flex-col px-14 text-center">
      <button
        class="mb-4 w-full rounded-lg bg-green-300 p-3 font-mono font-bold text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 active:-translate-y-1 active:scale-110"
        @click="move('athletes-and-staff')"
      >
        선수 및 스태프
      </button>
      <button
        class="w-full rounded-lg bg-indigo-300 p-3 font-mono font-bold text-white drop-shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 active:-translate-y-1 active:scale-110"
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
import Swal from 'sweetalert2'

const router = useRouter()
const year = new Date().getFullYear()

function move(target: string) {
  target === 'athletes-and-staff'
    ? router.push('/survey/athletes-and-staff')
    : Swal.fire({
        title: 'Comming Soon..',
        text: '준비중입니다',
        icon: 'info',
        confirmButtonText: '확인'
      })
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
