<template>
  <v-responsive>
    <v-container>
      <v-dialog
        v-model="is_show"
        z-index="100005"
        location-strategy="static"
        persistent
      >
        <v-alert
          :type="logoutResult"
          :title="logoutTitle"
          :text="logoutText"
          width="60%"
          border
          class="align-self-center"
        >
          <v-row class="mt-2">
            <v-col>
              <v-btn @click="login" class="bg-green-darken-4">확인</v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-dialog>
      <v-dialog v-model="loading" :scrim="false" persistent width="auto">
        <v-card color="primary">
          <v-card-text>
            로그인하는중
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </v-responsive>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/common/store/auth'

const is_show = ref(false)
const logoutResult: Ref<'error' | 'success' | 'info' | 'warning' | undefined> =
  ref()
const logoutTitle = ref('')
const logoutText = ref('')
const router = useRouter()
const success = ref(false)
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  const authStore = useAuthStore()
  const route = useRoute()
  const code: any = route.query.code
  try {
    await authStore.login(code)
    success.value = true
    login()
  } catch (error: any) {
    logoutResult.value = 'error'
    logoutTitle.value = '로그인 실패'
    logoutText.value = error.response.data.message ?? '알 수 없는 오류 발생'

    if (error.response.data.code === 101 && error.response.status === 400) {
      router.push(`/register/${code}`)
    }
    is_show.value = true
  } finally {
    loading.value = false
  }
})

function login() {
  return success.value ? router.push('/home') : router.push('/')
}
</script>
