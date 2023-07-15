<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-10 pb-5">
    <v-row class="pb-15">
      <v-col cols="4">
        <v-card class="pa-2" rounded="lg" elevation="3">
          <v-card-title class="text-indigo-darken-4">
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
                class="align-self-center text-subtitle-1 mt-2 text-grey-darken-1"
                justify="center"
              >
                {{ role }}
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card class="pa-2 fill-height" rounded="lg" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            패치노트
            <v-card-subtitle class="d-inline px-0"
              >| 1.0.1(Beta)-b</v-card-subtitle
            >
          </v-card-title>
          <v-card-text class="mt-0">
            <p class="text-subtitle-1 font-weight-bold">출석통계 기능 추가</p>
            <p class="mb-2">출석통계 기능이 추가되었습니다.</p>
            <li class="ms-1">일반 기능 > 출석통계 > 전체 출석 통계</li>
            <li class="ms-1">일반 기능 > 출석통계 > 개별 출석 통계</li>
            <p class="text-subtitle-1 font-weight-bold mt-4">
              회원가입 기능 추가
            </p>
            <p class="mb-2">
              이제 초대코드 입력을 통한 회원 가입이 가능합니다.
            </p>
            <li class="ms-1">관리자 기능 > 초대코드 > 초대코드 조회</li>
            <li class="ms-1">필요권한: SuperAdmin</li>
            <p class="text-subtitle-1 font-weight-bold mt-4">
              출석명단 필터기능 추가
            </p>
            <p class="mb-2">
              데스크탑 버전에서 출석명단 & 시합정보 테이블에 필터를 사용할 수
              있습니다.
            </p>
            <li class="ms-1">
              컬럼명 옆에
              <span><v-icon icon="fas fa-filter" size="x-small"></v-icon></span>
              아이콘을 클릭하여 필터 적용
            </li>
            <li class="ms-1">필요권한: All</li>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="pa-2 transition-swing"
            v-bind="props"
            rounded="lg"
            to="/attendance/check"
            :elevation="isHovering ? 16 : 3"
            :class="{ 'on-hover': isHovering }"
          >
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
                  class="align-self-center text-subtitle-2 mt-4 text-grey-darken-1"
                  justify="center"
                >
                  출석체크 페이지로 이동합니다
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="pa-2 transition-swing"
            v-bind="props"
            rounded="lg"
            to="/attendance/list"
            :elevation="isHovering ? 16 : 3"
            :class="{ 'on-hover': isHovering }"
          >
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
                  class="align-self-center text-subtitle-2 mt-4 text-grey-darken-1"
                  justify="center"
                >
                  출석명단 페이지로 이동합니다
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="4">
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
                  class="align-self-center text-subtitle-2 mt-4 text-grey-darken-1"
                  justify="center"
                >
                  시합정보 페이지로 이동합니다
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="pa-2 transition-swing"
            v-bind="props"
            rounded="lg"
            href="https://docs.skku-royals.football"
            :elevation="isHovering ? 16 : 3"
            :class="{ 'on-hover': isHovering }"
          >
            <v-card-text>
              <v-container>
                <v-row justify="center">
                  <v-avatar size="70px" class="bg-brown-lighten-4">
                    <v-icon
                      icon="fas fa-book"
                      size="40px"
                      class="text-brown"
                    ></v-icon>
                  </v-avatar>
                </v-row>
                <v-row
                  class="font-weight-bold text-h6 mt-7"
                  justify="center"
                  :class="{ 'text-brown-darken-1': isHovering }"
                >
                  사용가이드
                </v-row>
                <v-row
                  class="align-self-center text-subtitle-2 mt-4 text-grey-darken-1"
                  justify="center"
                >
                  사용가이드 페이지(외부링크)로 이동합니다
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
