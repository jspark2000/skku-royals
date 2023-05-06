<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-10 py-5">
    <v-row>
      <v-col cols="6">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            시합정보 등록
          </v-card-title>
          <v-form
            ref="form"
            @submit.prevent
            @submit="registerGame"
            class="pa-5"
          >
            <v-text-field
              v-model="gameName"
              variant="outlined"
              label="시합명"
              class="py-3"
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
              clearable
            ></v-text-field>
            <v-text-field
              v-model="gameDate"
              variant="outlined"
              type="date"
              label="시합 날짜"
              class="py-3"
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
            ></v-text-field>
            <v-text-field
              v-model="homeTeamName"
              variant="outlined"
              label="홈팀 이름"
              class="py-3"
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
              clearable
            ></v-text-field>
            <v-text-field
              v-model="awayTeamName"
              variant="outlined"
              label="어웨이팀 이름"
              class="py-3"
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
              clearable
            ></v-text-field>
            <v-btn type="submit" block class="bg-green-darken-1">
              등록하기
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="errorModal" width="auto">
      <v-alert type="error" title="ERROR" border>
        {{ errorMsg }}
      </v-alert>
    </v-dialog>
    <v-dialog v-model="successModal" width="auto">
      <v-alert type="success" title="SUCCESS" border>
        성공적으로 등록했습니다.
      </v-alert>
    </v-dialog>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'

const icon = ref('fas fa-football')
const title = ref('시합정보 등록')
const breadcumbs = ref([
  {
    title: '시합관리',
    disabled: false
  },
  {
    title: '시합정보 등록',
    disabled: false
  }
])

const form = ref()

const gameName = ref()
const gameDate = ref()
const homeTeamName = ref()
const awayTeamName = ref()

const errorMsg = ref('알 수 없는 오류 발생')
const successModal = ref(false)
const errorModal = ref(false)

type Game = {
  gameName: string
  gameDate: string
  homeTeamName: string
  awayTeamName: string
}

async function registerGame() {
  const check = await form.value.validate()

  if (check.valid) {
    const gameDTO: Game = {
      gameName: gameName.value,
      gameDate: gameDate.value,
      homeTeamName: homeTeamName.value,
      awayTeamName: awayTeamName.value
    }

    const result = await axiosInstance
      .post('/api/admin/game', gameDTO)
      .then((result) => result.data)
      .catch((error) => {
        errorMsg.value = error.response.data.message ?? '알 수 없는 오류 발생'
        return false
      })

    if (result) {
      successModal.value = true
    } else {
      errorModal.value = true
    }
  }
}
</script>
