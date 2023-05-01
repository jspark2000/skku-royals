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

onMounted(async () => {
  const authStore = useAuthStore()
  const route = useRoute()
  const code: any = route.query.code
  try {
    await authStore.login(code)
    logoutResult.value = 'success'
    logoutTitle.value = '로그인 성공'
    logoutText.value = '성공적으로 로그인 했습니다.'
    success.value = true
  } catch (error) {
    console.log(error)
    logoutResult.value = 'error'
    logoutTitle.value = '로그인 실패'
    logoutText.value = '로그인하지 못했습니다.'
  } finally {
    is_show.value = true
  }
})

function login() {
  return success.value ? router.push('/home') : router.push('/')
}
</script>
