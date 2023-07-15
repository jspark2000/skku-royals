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
          <v-text-field
            v-model="realname"
            :rules="realnameRules"
            label="이름"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="이메일"
            type="email"
          ></v-text-field>
          <v-text-field
            v-model="inviteCode"
            :rules="inviteCodeRules"
            label="초대코드"
          ></v-text-field>
          <v-btn
            class="mb-3 bg-green-lighten-2 text-white"
            block
            @click="validate"
          >
            등록하기
          </v-btn>
          <v-btn
            class="mb-3 bg-red-lighten-2 text-white"
            block
            @click="router.back"
          >
            뒤로가기
          </v-btn>
        </v-form>
      </v-sheet>
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
const realname = ref()
const email = ref()
const inviteCode = ref()

const loading = ref(false)

const usernameRules = [(v: string) => !!v || '아이디를 입력해주세요']
const passwordRules = [
  (v: string) => !!v || '패스워드를 입력해주세요',
  (v: string) =>
    (v && v.length >= 6) || '패스워드는 최소 6글자 이상이어야 합니다.'
]
const realnameRules = [(v: string) => !!v || '이름을 입력해주세요']
const emailRules = [
  (v: string) => !!v || '이메일을 입력해주세요',
  (v: string) => /.+@.+\..+/.test(v) || '유효하지 않은 이메일 형식입니다.'
]
const inviteCodeRules = [(v: string) => !!v || '초대코드를 입력해주세요']

async function validate() {
  if (valid.value) {
    try {
      loading.value = true
      await authStore.register(
        username.value,
        password.value,
        email.value,
        realname.value,
        inviteCode.value
      )
      router.push('/home')
    } catch (error: any) {
      alert(error.response.data.message)
    } finally {
      loading.value = false
    }
  }
}
</script>
