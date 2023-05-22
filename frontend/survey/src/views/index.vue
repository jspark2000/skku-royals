<template>
  <v-container class="fill-height" :class="{ 'd-none': landing }">
    <v-responsive class="align-center text-center fill-height">
      <v-img contain height="160" src="@/assets/intro.svg" />

      <div class="text-h5 font-weight-bold mt-3 mb-1">출석 조사</div>

      <p class="text-subtitle-2 font-weight-regular">
        주간 출석조사를 진행합니다
      </p>

      <div class="py-8" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="12">
          <v-btn
            color="green-darken-2 text-white"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
            @click="() => (landing = true)"
          >
            <v-icon icon="fas fa-right-to-bracket" size="small" start />
            선수단 및 스태프
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn
            color="indigo-darken-1 text-white"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
            @click="() => (snackbar = true)"
          >
            <v-icon icon="fas fa-right-to-bracket" size="small" start />
            코치진
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-container class="fill-height" :class="{ 'd-none': !landing }">
    <v-responsive class="align-center text-center fill-height px-5">
      <div class="text-h5 font-weight-bold mt-3 mb-10">출석조사 목록</div>
      <v-row>
        <v-col>
          <div
            class="my-5"
            v-for="(surveyGroup, index) in surveyGroups"
            :key="index"
          >
            <v-btn
              :id="index"
              size="large"
              rounded="lg"
              variant="outlined"
              @click="getSurveys(surveyGroup.id)"
              block
            >
              {{ surveyGroup.name }}
            </v-btn>
          </div>
          <v-btn
            class="mt-10 bg-red-darken-2"
            size="large"
            rounded="lg"
            @click="() => (landing = false)"
          >
            뒤로가기
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
    <v-snackbar
      elevation="24"
      color="red-darken-2"
      v-model="snackbar"
      :timeout="timeout"
    >
      준비중인 기능입니다
    </v-snackbar>
  </v-container>
</template>

<script lang="ts" setup>
import { axiosInstance } from '@/common/axios'
import { Ref } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const landing = ref(false)
const snackbar = ref(false)
const timeout = ref(2000)

const router = useRouter()

const surveyGroups: Ref<{ id: number; name: string }[]> = ref([])

axiosInstance
  .get('/api/survey/list')
  .then((result) => (surveyGroups.value = result.data))

function getSurveys(id: number) {
  router.push(`/athletes-and-staff/survey/${id}`)
}
</script>
