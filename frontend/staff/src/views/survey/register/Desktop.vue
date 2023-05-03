<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-10 py-5">
    <v-row>
      <v-col cols="8">
        <v-form ref="form" @submit.prevent @submit="registerSurveyGroup()">
          <v-card class="px-4 py-5" elevation="2">
            <v-text-field
              v-model="name"
              variant="outlined"
              label="출석조사 이름 (ex x월 y주차 출석조사)"
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
              clearable
            ></v-text-field>
          </v-card>
          <v-card
            class="px-4 py-5 mt-3"
            elevation="2"
            v-for="(item, index) in surveys"
            :key="index"
          >
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="item.date"
                  variant="outlined"
                  type="date"
                  label="운동날짜"
                  :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="item.type"
                  variant="outlined"
                  label="종류"
                  :items="['통합운동', '개별운동']"
                  :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
                  clearable
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="item.description"
                  variant="outlined"
                  label="설명 (ex x요일, 명륜 통합훈련/캠퍼스별 훈련, x시 ~ y시)"
                  :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
                  clearable
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
          <v-card class="px-4 py-5 mt-3" elevation="2">
            <v-row>
              <v-col cols="6">
                <v-btn block class="bg-indigo-lighten-1" @click="addSurvey()">
                  추가하기
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn block class="bg-red-lighten-1" @click="deleteSurvey()">
                  삭제하기
                </v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn type="submit" block class="bg-green-lighten-1">
                  등록하기
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-form>
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
import { ref, Ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { AttendanceType } from '@/common/enums/attendanceType.enum'
import { axiosInstance } from '@/common/store/auth'

const icon = ref('fas fa-magnifying-glass')
const title = ref('출석조사 등록')
const breadcumbs = ref([
  {
    title: '출석조사',
    disabled: false
  },
  {
    title: '출석조사 등록',
    disabled: false
  }
])

const successModal = ref(false)
const errorModal = ref(false)
const errorMsg = ref('알 수 없는 오류 발생')
const name = ref()
const form = ref()

let id = 0

const surveys: Ref<
  { id: number; date: string; type: string; description: string }[]
> = ref([
  { id: id++, date: '', type: '', description: '' },
  { id: id++, date: '', type: '', description: '' },
  { id: id++, date: '', type: '', description: '' }
])

function addSurvey() {
  surveys.value.push({ id: id++, date: '', type: '', description: '' })
}

function deleteSurvey() {
  surveys.value.pop()
  id--
}

type registerSurveyDTO = {
  name: string
  surveys: SurveyInfo[]
}

type SurveyInfo = {
  date: string
  type: AttendanceType
  description: string
}

async function registerSurveyGroup() {
  const check = await form.value.validate()
  if (check.valid) {
    const surveyGroupDTO: registerSurveyDTO = {
      name: name.value,
      surveys: surveys.value.map((survey) => {
        return {
          date: survey.date,
          description: survey.description,
          type:
            survey.type === '통합운동'
              ? AttendanceType.Integrated
              : AttendanceType.Dispersion
        }
      })
    }

    const result = await axiosInstance
      .post('/api/admin/survey/create', surveyGroupDTO)
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
