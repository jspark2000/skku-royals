<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-4 pb-10">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4 mb-3">
            초대코드
          </v-card-title>
          <v-card-text class="text-subtitle-1 font-weight-medium">
            {{ inviteCode }}
            <p
              class="text-subtitle-2 font-weight-regular text-grey-darken-1 mt-5"
            >
              24시간 주기로 초대코드가 변경됩니다.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="errorModal" width="auto">
      <v-alert type="error" title="ERROR" border>
        {{ errorMsg }}
      </v-alert>
    </v-dialog>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import { onMounted } from 'vue'

const icon = ref('fas fa-envelope')
const title = ref('초대코드 조회')
const breadcumbs = ref([
  {
    title: '초대코드',
    disabled: false
  },
  {
    title: '초대코드 조회',
    disabled: false
  }
])

const errorModal = ref(false)
const errorMsg = ref('알 수 없는 오류 발생')
const inviteCode = ref()

onMounted(async () => {
  await axiosInstance
    .get('/api/auth/invite-code')
    .then((result) => (inviteCode.value = result.data))
    .catch((error) => {
      errorMsg.value = error.response.data.message ?? '알 수 없는 오류 발생'
      errorModal.value = true
    })
})
</script>
