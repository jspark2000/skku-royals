<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-sheet width="300" class="mx-auto">
        <v-img
          src="@/assets/royals_logo.png"
          width="75%"
          class="mb-5 mx-auto"
        />

        <v-btn
          color="green-darken-3"
          width="75%"
          :href="oauth2Url"
          rel="noopener noreferrer"
          size="x-large"
          variant="flat"
        >
          <v-icon icon="fas fa-right-to-bracket" size="md" start />
          <p class="text-body-1 font-weight-medium">밴드로 로그인</p>
        </v-btn>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const oauth2Url = ref(import.meta.env.VITE_OATUH2_URL)
</script>
