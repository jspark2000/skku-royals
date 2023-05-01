<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="300" src="@/assets/intro.svg" />

      <div class="text-body-1 font-weight-medium mb-1">SKKU ROYALS</div>

      <h1 class="text-h2 font-weight-bold">STAFF TEAM</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="12" md="auto">
          <v-btn
            href="https://docs.royals-staff.team"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon icon="fas fa-book" size="large" start />

            Documents
          </v-btn>
        </v-col>

        <v-col cols="12" md="auto">
          <v-btn
            color="blue-grey-darken-3"
            to="/login"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
          >
            <v-icon icon="fas fa-right-to-bracket" size="large" start />

            로그인하기
          </v-btn>
        </v-col>

        <v-col cols="12" md="auto">
          <v-btn
            href="https://github.com/jspark2000/royals-staff"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon icon="fa-brands fa-github" size="large" start />

            github
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup></script>
