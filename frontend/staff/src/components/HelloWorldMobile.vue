<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="170" src="@/assets/intro.svg" />

      <div class="text-body-2 font-weight-regular my-1">SKKU ROYALS</div>

      <h1 class="text-h4 font-weight-black">STAFF TEAM</h1>

      <div class="py-8" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="12" md="auto">
          <v-btn
            href="https://docs.skku-royals.football"
            min-width="120"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon icon="fas fa-book" size="md" start />

            Documents
          </v-btn>
        </v-col>

        <v-col cols="12" md="auto">
          <v-btn
            class="bg-amber-accent-2 text-white"
            to="/login"
            min-width="200"
            rel="noopener noreferrer"
            size="large"
            variant="flat"
          >
            <v-icon icon="fas fa-right-to-bracket" size="md" start />

            로그인하기
          </v-btn>
        </v-col>

        <v-col cols="12" md="auto">
          <v-btn
            href="https://github.com/jspark2000/royals-staff"
            min-width="120"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon icon="fa-brands fa-github" size="md" start />

            github
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

onMounted(() => {
  console.log(mobile.value)
})
</script>
