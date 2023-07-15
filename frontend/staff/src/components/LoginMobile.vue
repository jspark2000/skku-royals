<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height" id="login-modal">
      <v-sheet class="mx-auto" width="300">
        <v-img src="@/assets/royals_logo.png" class="mb-5" />
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="아이디"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            label="패스워드"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-btn
            block
            class="mb-3 bg-green-lighten-2 text-white"
            @click="validate"
          >
            로그인
          </v-btn>
          <v-btn
            class="mb-3 bg-amber-lighten-2 text-white"
            block
            @click="register"
          >
            회원가입
          </v-btn>
        </v-form>
      </v-sheet>
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
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/common/store/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()

const router = useRouter()

const valid = ref()
const showPassword = ref(false)
const password = ref()
const username = ref()
const loading = ref(false)

const usernameRules = [(v: string) => !!v || '아이디를 입력해주세요']
const passwordRules = [(v: string) => !!v || '패스워드를 입력해주세요']

async function validate() {
  if (valid.value) {
    try {
      loading.value = true
      await authStore.login(username.value, password.value)
      router.push('/home')
    } catch (error: any) {
      alert(error.response.data.message)
    } finally {
      loading.value = false
    }
  }
}

function register() {
  router.push('/register')
}
</script>
