<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-10 py-5">
    <v-row>
      <v-col cols="6">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            개별 출석조사 등록
          </v-card-title>
          <v-form
            ref="form"
            @submit.prevent
            @submit="registerSeparately()"
            class="pa-5"
          >
            <v-text-field
              v-model="name"
              variant="outlined"
              label="이름"
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
              clearable
            ></v-text-field>
            <v-text-field
              v-model="studentNo"
              class="my-5"
              variant="outlined"
              type="number"
              label="입학년도"
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
              clearable
            ></v-text-field>
            <v-text-field
              v-model="date"
              variant="outlined"
              type="date"
              label="날짜"
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
            ></v-text-field>
            <v-select
              v-model="location"
              class="my-5"
              variant="outlined"
              :items="['통합', '명륜', '율전']"
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
              label="위치"
            ></v-select>
            <v-select
              v-model="survey"
              variant="outlined"
              :items="['참석', '늦참', '불참']"
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
              label="응답"
            ></v-select>
            <v-text-field
              v-model="reason"
              class="my-5"
              variant="outlined"
              label="사유"
            ></v-text-field>
            <v-btn type="submit" block class="bg-amber-lighten-2">
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
import { AttendanceStatus } from '@/common/enums/attendanceStatus.enum'
import { Location } from '@/common/enums/location.enum'
import { axiosInstance } from '@/common/store/auth'

const icon = ref('fas fa-magnifying-glass')
const title = ref('개별 등록')
const breadcumbs = ref([
  {
    title: '출석조사',
    disabled: false
  },
  {
    title: '개별 등록',
    disabled: false
  }
])

const name = ref()
const studentNo = ref()
const date = ref()
const survey = ref()
const location = ref()
const reason = ref()
const form = ref()

type RegisterDTO = {
  name: string
  studentNo: number
  date: string
  survey: AttendanceStatus
  location: Location
  reason?: string
}

const errorMsg = ref('알 수 없는 오류 발생')
const successModal = ref(false)
const errorModal = ref(false)

async function registerSeparately() {
  const check = await form.value.validate()

  if (check.valid) {
    const registerDTO: RegisterDTO = {
      name: name.value.trim(),
      studentNo: studentNo.value,
      date: date.value,
      survey:
        survey.value === '참석'
          ? AttendanceStatus.Present
          : survey.value === '늦참'
          ? AttendanceStatus.Tardy
          : AttendanceStatus.Absent,
      location:
        location.value === '통합'
          ? Location.Integrated
          : location.value === '명륜'
          ? Location.Seoul
          : Location.Suwon,
      reason: reason.value
    }

    const result = await axiosInstance
      .post('/api/admin/survey/separate', registerDTO)
      .then((result) => result.data)
      .catch((error) => {
        errorMsg.value = error.response.data.message ?? '알 수 없는 오류 발생'
        errorModal.value = true
        return false
      })

    if (result) {
      successModal.value = true
    }
  }
}
</script>
