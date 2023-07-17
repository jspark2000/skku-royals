<template>
  <v-dialog v-model="loading" :scrim="false" persistent width="auto">
    <v-card color="warning">
      <v-card-text>
        이메일 인증하는 중...
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
import { axiosInstance } from '@/common/store/auth'
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const loading = ref(true)

onMounted(async () => {
  const route = useRoute()
  const router = useRouter()

  const query = route.query
  const email = query.email
  const pin = query.pin

  const result = await axiosInstance
    .post('/api/auth/verify-email', { email, pin })
    .then(() => true)
    .catch(() => false)
    .finally(() => (loading.value = false))

  if (result) {
    alert('이메일 인증 성공')
    router.push('/')
  } else {
    alert('이메일 인증 실패')
  }
})
</script>
