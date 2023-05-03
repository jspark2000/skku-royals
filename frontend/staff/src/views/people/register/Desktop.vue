<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-10 py-5">
    <v-row>
      <v-col cols="6">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            부원 등록하기
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
              label="이름"
              clearable
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
            ></v-text-field>
            <v-text-field
              v-model="studentId"
              variant="outlined"
              type="number"
              label="학번 (10자리)"
              :rules="[(v: any) => !!(v.length === 10) || '필수 입력 항목입니다']"
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
import { axiosInstance } from '@/common/store/auth'

const icon = ref('fas fa-user-gear')
const errorMsg = ref('알 수 없는 오류 발생')
const title = ref('부원등록')
const breadcumbs = ref([
  {
    title: '부원관리',
    disabled: false
  },
  {
    title: '부원등록',
    disabled: false
  }
])

const form = ref()
const successModal = ref(false)
const errorModal = ref(false)
const name = ref()
const studentId = ref()

async function registerPeople() {
  const check = await form.value.validate()

  if (check.valid) {
    const registerDTO = {
      name: name.value.trim(),
      studentNo: studentId.value.slice(0, 4),
      studentId: studentId.value
    }

    console.log(registerDTO)

    const result = await axiosInstance
      .post('/api/admin/people', registerDTO)
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
