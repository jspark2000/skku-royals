<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-4 pb-10">
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="pa-2" rounded="lg" elevation="3">
          <v-card-title class="text-h6 text-indigo-darken-4">
            Profile
            <v-card-subtitle class="d-inline px-0">| 내 프로필</v-card-subtitle>
          </v-card-title>
          <v-card-text class="mt-3">
            <v-container>
              <v-row justify="center">
                <v-avatar size="100px">
                  <v-img :src="profileUrl"></v-img>
                </v-avatar>
              </v-row>
              <v-row class="font-weight-bold text-h6 mt-7" justify="center">
                {{ realname }}
              </v-row>
              <v-row
                v-if="emailVerified"
                class="align-self-center text-subtitle-1 text-grey-darken-1 mt-2"
                justify="center"
              >
                {{ role }}
              </v-row>
              <v-row
                v-else
                class="align-self-center text-subtitle-1 text-red-darken-2 mt-5 text-center"
                justify="center"
              >
                이메일 미인증
                <br />
                {{ email }}으로 전송한 이메일을 확인해주세요
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-if="emailVerified" cols="12" md="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="pa-2 transition-swing"
            v-bind="props"
            rounded="lg"
            to="/attendance/check"
            :elevation="isHovering ? 16 : 3"
            :class="{ 'on-hover': isHovering }"
          >
            <v-card-title class="text-indigo-darken-4">
              <v-card-subtitle class="d-inline px-0"></v-card-subtitle>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-avatar size="70px" class="bg-green-lighten-4">
                    <v-icon
                      icon="fas fa-check"
                      size="40px"
                      class="text-green"
                    ></v-icon>
                  </v-avatar>
                </v-row>
                <v-row
                  class="font-weight-bold text-h6 mt-7"
                  justify="center"
                  :class="{ 'text-green-accent-4': isHovering }"
                >
                  출석체크
                </v-row>
                <v-row
                  class="align-self-center text-subtitle-2 text-grey-darken-1 mt-4"
                  justify="center"
                >
                  출석체크 페이지로 이동합니다
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-if="emailVerified" cols="12" md="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="pa-2 transition-swing"
            v-bind="props"
            rounded="lg"
            to="/attendance/list"
            :elevation="isHovering ? 16 : 3"
            :class="{ 'on-hover': isHovering }"
          >
            <v-card-title class="text-indigo-darken-4">
              <v-card-subtitle class="d-inline px-0"></v-card-subtitle>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-avatar size="70px" class="bg-amber-lighten-4">
                    <v-icon
                      icon="fas fa-table-list"
                      size="40px"
                      class="text-amber"
                    ></v-icon>
                  </v-avatar>
                </v-row>
                <v-row
                  class="font-weight-bold text-h6 mt-7"
                  justify="center"
                  :class="{ 'text-amber-accent-3': isHovering }"
                >
                  출석명단
                </v-row>
                <v-row
                  class="align-self-center text-subtitle-2 text-grey-darken-1 mt-4"
                  justify="center"
                >
                  출석명단 페이지로 이동합니다
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-if="emailVerified" cols="12" md="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="pa-2 transition-swing"
            v-bind="props"
            rounded="lg"
            to="/game/list"
            :elevation="isHovering ? 16 : 3"
            :class="{ 'on-hover': isHovering }"
          >
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-avatar size="70px" class="bg-indigo-lighten-4">
                    <v-icon
                      icon="fas fa-football"
                      size="40px"
                      class="text-indigo"
                    ></v-icon>
                  </v-avatar>
                </v-row>
                <v-row
                  class="font-weight-bold text-h6 mt-7"
                  justify="center"
                  :class="{ 'text-indigo-accent-3': isHovering }"
                >
                  시합정보
                </v-row>
                <v-row
                  class="align-self-center text-subtitle-2 text-grey-darken-1 mt-4"
                  justify="center"
                >
                  시합정보 페이지로 이동합니다
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'

const role = ref()
const realname = ref()
const profileUrl = ref()
const email = ref()
const emailVerified = ref(true)

watchEffect(async () => {
  const profile = await axiosInstance
    .get('/api/band/profile')
    .then((result) => {
      return result.data
    })
    .catch((error) => {
      console.log(error)
      return false
    })

  if (profile) {
    role.value = profile.role
    realname.value = profile.realname
    profileUrl.value = profile.profileUrl
    email.value = profile.email
  }

  if (!profile || profile.role === 'Newbie') {
    emailVerified.value = false
  }
})

const icon = ref('fas fa-house-chimney')
const title = ref('Home')
const breadcumbs = ref([
  {
    title: 'Home',
    disabled: false
  }
])
</script>
