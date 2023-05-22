<template>
  <v-container fluid class="fill-height">
    <v-row align="center">
      <v-col cols="7">
        <div class="ps-15 ms-15">
          <p class="text-h1 font-weight-bold mb-1">SKKU ROYALS</p>
          <p class="text-h1 font-weight-bold mb-3">STAFF TEAM</p>
          <p class="ms-1 text-h6 font-weight-regular mb-12">
            An integrated team management system for
            <span class="font-weight-bold">ROYALS</span>
          </p>
          <v-btn
            to="/login"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
            class="bg-amber text-white"
          >
            <v-icon icon="fas fa-right-to-bracket" size="large" start />
            Sign in
          </v-btn>
        </div>
        <div class="ps-15 ms-15 mt-12">
          <v-btn
            href="https://docs.skku-royals.football"
            rel="noopener noreferrer"
            target="_blank"
            icon="fas fa-book"
            size="small"
            class="text-white bg-black"
          >
          </v-btn>
          <v-btn
            href="https://github.com/jspark2000/royals-staff"
            rel="noopener noreferrer"
            target="_blank"
            size="small"
            icon="fa-brands fa-github"
            class="text-white bg-black ms-4"
          >
          </v-btn>
          <v-btn
            href="https://www.instagram.com/skku_royals_1957"
            rel="noopener noreferrer"
            target="_blank"
            size="small"
            icon="fa-brands fa-instagram"
            class="text-white bg-black ms-4"
          >
          </v-btn>
          <v-btn
            href="https://www.facebook.com/skkuroyals"
            rel="noopener noreferrer"
            target="_blank"
            size="small"
            icon="fa-brands fa-facebook"
            class="text-white bg-black ms-4"
          >
          </v-btn>
          <v-btn
            href=""
            rel="noopener noreferrer"
            target="_blank"
            size="small"
            icon="fa-brands fa-youtube"
            class="text-white bg-black ms-4"
          >
          </v-btn>
        </div>
      </v-col>
      <v-col cols="5">
        <div class="me-15">
          <v-img contain height="360" src="@/assets/intro.svg" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup></script>
