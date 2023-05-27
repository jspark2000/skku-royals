<template>
  <div
    class="relative flex mx-auto pl-5 py-6 font-mono rounded-lg shadow-lg hover:bg-black hover:text-white hover:rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    @click="select()"
  >
    <span
      class="animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75"
      :class="[{ 'bg-red-400': deadline }, { 'bg-green-400': !deadline }]"
    ></span>
    <span
      class="relative inline-flex rounded-full h-3 w-3"
      :class="[{ 'bg-red-400': deadline }, { 'bg-green-400': !deadline }]"
    ></span>
    <div class="text-start">
      <div class="font-extrabold text-xl">
        {{ props.surveyGroupInfo?.name }}
      </div>
      <div class="font-semibold text-gray-500 text-sm">
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
