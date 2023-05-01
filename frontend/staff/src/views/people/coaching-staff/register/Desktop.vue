<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-10 py-5">
    <v-row>
      <v-col cols="6">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            코칭스태프 등록하기
          </v-card-title>
          <v-form
            ref="form"
            @submit.prevent
            @submit="registerPeople()"
            class="pa-5"
          >
            <v-text-field
              v-model="name"
              variant="outlined"
              class="pb-5"
              label="이름"
              clearable
              :rules="[(v) => !!v || '필수 입력 항목입니다']"
            ></v-text-field>
            <v-text-field
              v-model="admissionYear"
              variant="outlined"
              class="pb-5"
              type="number"
              label="입학년도 (ex 2020)"
              :rules="[(v) => !!v || '필수 입력 항목입니다']"
            ></v-text-field>
            <v-text-field
              v-model="position"
              variant="outlined"
              class="pb-5"
              label="담당 포지션"
              clearable
              :rules="[(v) => !!v || '필수 입력 항목입니다']"
            ></v-text-field>
            <v-select
              v-model="teamRole"
              variant="outlined"
              class="pb-5"
              label="직책"
              :items="teamRoles"
              :rules="[(v) => !!v || '필수 입력 항목입니다']"
            ></v-select>
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
import { axiosInstance } from '@/common/store/auth'
import { TeamRole } from '@/common/enums/teamRole.enum'

const icon = ref('fas fa-user-gear')
const errorMsg = ref('알 수 없는 오류 발생')
const title = ref('코칭스태프 등록')
const breadcumbs = ref([
  {
    title: '부원관리',
    disabled: false
  },
  {
    title: '코칭스태프 등록',
    disabled: false
  }
])

const form = ref()
const successModal = ref(false)
const errorModal = ref(false)
const name = ref()
const admissionYear = ref()
const position = ref()
const teamRole = ref()

const teamRoles = ref([
  { title: '감독', value: TeamRole.HeadCoach },
  { title: '코치', value: TeamRole.Coach }
])

async function registerPeople() {
  const check = await form.value.validate()

  if (check.valid) {
    const registerDTO = {
      name: name.value.trim(),
      admissionYear: admissionYear.value,
      position: position.value,
      teamRole: teamRole.value
    }

    console.log(registerDTO)

    const result = await axiosInstance
      .post('/api/admin/people/coaching-staff', registerDTO)
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
