<template>
  <v-container class="align-center fill-height">
    <v-responsive class="px-5 pb-10">
      <v-form @submit.prevent @submit="submitSurvey()" ref="form">
        <v-row class="align-content-center mt-4 justify-center">
          <v-col>
            <div class="text-center text-h4 mb-12 font-weight-bold">
              출석조사
            </div>
          </v-col>

          <v-col cols="12" class="mb-5">
            <v-sheet
              width="auto"
              elevation="5"
              class="bg-blue-grey-lighten-2 pa-8"
              rounded="lg"
            >
              <div class="text-subtitle-1 font-weight-bold mb-10">
                #0. 기본 정보
              </div>
              <v-text-field
                label="학번 (ex. 2022310123)"
                v-model="studentId"
                variant="outlined"
                type="number"
                :rules="[(v) => !!v || '필수 입력 항목입니다']"
              ></v-text-field>
            </v-sheet>
          </v-col>

          <v-col
            v-for="(survey, index) in surveys"
            :key="index"
            cols="12"
            class="mb-5"
          >
            <v-sheet
              width="auto"
              elevation="5"
              class="bg-grey-lighten-5 pa-8"
              rounded="lg"
            >
              <div class="text-subtitle-1 font-weight-bold mb-10">
                #{{ index + 1 }}. {{ survey.date.slice(5, 10) }},
                {{ survey.description }}
              </div>
              <v-text-field
                label="학번"
                v-model="studentId"
                variant="outlined"
                class="mb-3"
                disabled
              ></v-text-field>
              <v-select
                v-if="survey.type === AttendanceType.Dispersion"
                label="출석 캠퍼스"
                v-model="formInputs[index].location"
                :items="locationSelects"
                :rules="[(v) => !!v || '필수 입력 항목입니다']"
                variant="outlined"
                class="mb-3"
              ></v-select>
              <v-select
                label="출석"
                v-model="formInputs[index].survey"
                :items="attendanceSelects"
                :rules="[(v) => !!v || '필수 입력 항목입니다']"
                variant="outlined"
                class="mb-3"
              ></v-select>
              <v-text-field
                v-model="formInputs[index].reason"
                label="늦참 또는 불참 사유"
                :rules="[(v) => checkReason(v, index)]"
                variant="outlined"
              ></v-text-field>
            </v-sheet>
          </v-col>
          <v-col class="d-flex justify-center">
            <v-btn type="submit" class="mx-3" variant="outlined" size="large">
              제출하기
            </v-btn>
            <v-btn class="mx-3" variant="outlined" size="large" @click="back()">
              뒤로가기
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-responsive>
    <v-dialog v-model="dialogFailed">
      <v-card class="pt-3">
        <v-card-title class="text-center text-red-darken-2">
          <v-icon class="align-center" :icon="icon"></v-icon>
        </v-card-title>
        <v-card-text class="text-center">
          {{ dialogMessage }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialogFailed = false">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogSuccess">
      <v-card class="pt-3">
        <v-card-title class="text-center text-amber-accent-2">
          <v-icon class="align-center" :icon="icon"></v-icon>
        </v-card-title>
        <v-card-text class="text-center">
          {{ dialogMessage }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="next()">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts" setup>
import { AttendanceStatus } from '@/common/enums/attendanceStatus.enum'
import { AttendanceType } from '@/common/enums/attendanceType.enum'
import { Location } from '@/common/enums/location.enum'
import { axiosInstance } from '@/common/axios'
import { Ref, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const surveys: Ref<Survey[]> = ref([])
const form = ref()
const studentId = ref()
const formInputs: Ref<FormInputs[]> = ref([])
const dialogFailed = ref(false)
const dialogSuccess = ref(false)
const dialogMessage = ref()
const icon = ref()

const locationSelects = ref([
  { title: '명륜', value: Location.Seoul },
  { title: '율전', value: Location.Suwon }
])

const attendanceSelects = ref([
  { title: '참석', value: AttendanceStatus.Present },
  { title: '늦참', value: AttendanceStatus.Tardy },
  { title: '불참', value: AttendanceStatus.Absent }
])

type Survey = {
  id: number
  description: string
  groudId: number
  date: string
  type: AttendanceType
}

type FormInputs = {
  location: any
  survey: any
  reason: any
  date: string
}

type SubmitItems = {
  location: Location
  survey: AttendanceStatus
  date: string
  reason: string | undefined
}

axiosInstance
  .get(`/api/survey/${route.params.id}`)
  .then((result) => {
    surveys.value = result.data
    surveys.value.forEach((survey) => {
      formInputs.value.push({
        location:
          survey.type === AttendanceType.Integrated
            ? Location.Integrated
            : undefined,
        survey: undefined,
        reason: undefined,
        date: survey.date.slice(0, 10)
      })
    })
  })
  .catch((error) => {
    dialogMessage.value = error.response.data.message ?? '알 수 없는 오류 발생'
    icon.value = 'fas fa-triangle-exclamation'
    dialogFailed.value = true
  })

function back() {
  router.push('/')
}

async function checkReason(reason: any, index: number): Promise<true | string> {
  if (formInputs.value[index].survey !== AttendanceStatus.Present) {
    if (!reason) {
      return '필수 입력 항목입니다.'
    } else {
      return true
    }
  } else {
    return true
  }
}

async function submitSurvey() {
  const check = await form.value.validate()
  if (check.valid && formInputs.value.length !== 0) {
    const items: SubmitItems[] = []
    formInputs.value.forEach((input) => {
      items.push({
        location:
          input.survey === AttendanceStatus.Absent
            ? Location.Integrated
            : input.location,
        survey: input.survey,
        reason: input.reason ?? '',
        date: input.date
      })
    })

    const submitDTO = {
      studentId: studentId.value,
      surveys: items
    }

    const result = await axiosInstance
      .post('/api/survey/submit', submitDTO)
      .then((result) => result.data)
      .catch((error) => {
        dialogMessage.value =
          error.response.data.message ?? '알 수 없는 오류 발생'
        icon.value = 'fas fa-triangle-exclamation'
        return false
      })

    if (result) {
      icon.value = 'fas fa-check'
      dialogMessage.value = '출석조사 완료'
      dialogSuccess.value = true
    } else {
      icon.value = 'fas fa-triangle-exclamation'
      dialogFailed.value = true
    }
  }
}

function next() {
  dialogSuccess.value = false
  back()
}
</script>
