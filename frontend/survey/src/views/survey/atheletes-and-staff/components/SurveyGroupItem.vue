<template>
  <div
    class="relative mx-auto flex rounded-lg py-6 pl-5 font-mono shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:bg-black hover:text-white"
    @click="select()"
  >
    <span
      class="absolute inline-flex h-3 w-3 animate-ping rounded-full opacity-75"
      :class="[{ 'bg-red-400': deadline }, { 'bg-green-400': !deadline }]"
    ></span>
    <span
      class="relative inline-flex h-3 w-3 rounded-full"
      :class="[{ 'bg-red-400': deadline }, { 'bg-green-400': !deadline }]"
    ></span>
    <div class="text-start">
      <div class="text-xl font-extrabold">
        {{ props.surveyGroupInfo?.name }}
      </div>
      <div class="text-sm font-semibold text-gray-500">
        총 출석조사 수: {{ props.surveyGroupInfo?.surveys.length }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType, Ref, onMounted, ref } from 'vue'
import { SurveyGroup } from '../interfaces/surveyGroup.interface'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  surveyGroupInfo: Object as PropType<SurveyGroup>
})

const deadline: Ref<boolean> = ref(false)

onMounted(() => {
  const firstSurveyDate = props.surveyGroupInfo?.surveys[0].date as string
  new Date(firstSurveyDate).getTime() - 540 * 60 * 1000 <= new Date().getTime()
    ? (deadline.value = true)
    : (deadline.value = false)
})

function select() {
  router.push(`/survey/athletes-and-staff/${props.surveyGroupInfo?.id}`)
}
</script>
<style scoped></style>
