<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-sheet width="300" class="mx-auto">
        <v-img src="@/assets/royals_logo.png" class="mb-5" />

        <v-form fast-fail @submit.prevent>
          <v-text-field label="이름" hide-details="auto"></v-text-field>
          <v-text-field label="학번(입학년도)"></v-text-field>
        </v-form>

        <v-btn
          color="green-darken-3"
          width="100%"
          :href="oauth2Url"
          rel="noopener noreferrer"
          size="x-large"
          variant="flat"
        >
          <v-icon icon="fas fa-right-to-bracket" size="large" start />

          밴드로 로그인
        </v-btn>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const oauth2Url = ref(import.meta.env.VITE_OATUH2_URL)
</script>
