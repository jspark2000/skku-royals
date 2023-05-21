<template>
  <v-responsive>
    <v-container class="mt-15">
      <v-card class="text-center px-10 py-8 bg-grey-lighten-5" elevation="5">
        <v-card-title class="mb-5">초대코드 입력</v-card-title>
        <v-text-field
          v-model="inviteCode"
          variant="underlined"
          label="여기에 초대코드 입력"
          class="mb-5"
        ></v-text-field>
        <v-btn @click="register()" class="me-5 bg-green-darken-1 mb-5"
          >회원가입</v-btn
        >
        <v-btn @click="router.push('/')" class="bg-red-darken-2 mb-5"
          >메인으로</v-btn
        >
      </v-card>
    </v-container>
    <v-dialog v-model="errorModal" width="auto">
      <v-alert type="error" title="ERROR" border>
        {{ errorMsg }}
      </v-alert>
    </v-dialog>
    <v-dialog v-model="loading" :scrim="false" persistent width="auto">
      <v-card color="primary">
        <v-card-text>
          회원가입 하는중
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-responsive>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/common/store/auth'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const inviteCode = ref()

const errorMsg = ref()
const errorModal = ref(false)

const loading = ref(false)

const code: string = route.params.code as string

async function register() {
  try {
    loading.value = true
    await useAuthStore().register(code, inviteCode.value)
    router.push('/home')
  } catch (error: any) {
    errorMsg.value = error.response.data.message ?? '알 수 없는 오류 발생'
    errorModal.value = true
  } finally {
    loading.value = false
  }
}
</script>
