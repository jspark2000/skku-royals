<template>
  <v-app-bar color="white" id="app-bar" height="60">
    <router-link to="/home">
      <v-avatar size="80px" :tile="true" class="mx-5">
        <v-img src="@/assets/royals_staff.svg" alt="logo" />
      </v-avatar>
    </router-link>
    <v-app-bar-nav-icon @click="() => (drawer = !drawer)"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn stacked>
      <v-badge color="error" dot>
        <v-icon icon="fas fa-bell" size="small"></v-icon>
      </v-badge>
    </v-btn>

    <v-btn stacked @click="logout()">
      <v-icon icon="fas fa-right-from-bracket" size="small"></v-icon>
    </v-btn>
    <v-dialog
      v-model="is_show"
      z-index="100005"
      location-strategy="static"
      persistent
    >
      <v-alert
        :type="logoutResult"
        :title="logoutTitle"
        :text="logoutText"
        width="100%"
        border
        class="align-self-center px-10"
      >
        <v-row class="mt-2">
          <v-col>
            <v-btn @click="close" class="bg-green-darken-4">확인</v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-dialog>
  </v-app-bar>

  <v-navigation-drawer id="side-bar" v-model="drawer" class="px-5" width="300">
    <v-list density="compact" nav active-color="indigo">
      <v-list-subheader class="font-weight-bold">메인 화면</v-list-subheader>
      <v-list-item to="/home">
        <template v-slot:prepend>
          <v-icon icon="fas fa-house-chimney" size="16px"></v-icon>
        </template>
        <v-list-item-title class="font-weight-medium">Home</v-list-item-title>
      </v-list-item>

      <v-list-subheader class="font-weight-bold mt-3">
        일반 기능
      </v-list-subheader>
      <v-list-group value="people">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <template v-slot:prepend>
              <v-icon icon="fas fa-user-gear" size="16px"></v-icon>
            </template>
            <v-list-item-title class="font-weight-medium">
              부원관리
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          v-for="([title, url], i) in people"
          :key="i"
          :title="title"
          :to="url"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="attendance">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <template v-slot:prepend>
              <v-icon icon="fas fa-table-list" size="16px"></v-icon>
            </template>
            <v-list-item-title class="font-weight-medium">
              출석관리
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          v-for="([title, url], i) in attendance"
          :key="i"
          :title="title"
          :to="url"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="game">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <template v-slot:prepend>
              <v-icon icon="fas fa-football" size="16px"></v-icon>
            </template>
            <v-list-item-title class="font-weight-medium">
              시합관리
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          v-for="([title, url], i) in game"
          :key="i"
          :title="title"
          :to="url"
        ></v-list-item>
      </v-list-group>

      <v-list-subheader class="font-weight-bold mt-3">
        관리자 기능
      </v-list-subheader>
      <v-list-group value="peopleAdmin">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <template v-slot:prepend>
              <v-icon icon="fas fa-user-gear" size="16px"></v-icon>
            </template>
            <v-list-item-title class="font-weight-medium">
              부원관리
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          v-for="([title, url], i) in peopleAdmin"
          :key="i"
          :title="title"
          :to="url"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="attendanceAdmin">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <template v-slot:prepend>
              <v-icon icon="fas fa-table-list" size="16px"></v-icon>
            </template>
            <v-list-item-title class="font-weight-medium">
              출석관리
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          v-for="([title, url], i) in attendanceAdmin"
          :key="i"
          :title="title"
          :to="url"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="surveyAdmin">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <template v-slot:prepend>
              <v-icon icon="fas fa-magnifying-glass" size="16px"></v-icon>
            </template>
            <v-list-item-title class="font-weight-medium">
              출석조사
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          v-for="([title, url], i) in surveyAdmin"
          :key="i"
          :title="title"
          :to="url"
        ></v-list-item>
      </v-list-group>

      <v-list-subheader class="font-weight-bold mt-3">실험실</v-list-subheader>
      <v-list-group value="chat-gpt">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <template v-slot:prepend>
              <v-icon icon="fas fa-rocket" size="16px"></v-icon>
            </template>
            <v-list-item-title class="font-weight-medium">
              ChatGPT
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          v-for="([title, url], i) in chatGPT"
          :key="i"
          :title="title"
          :to="url"
        ></v-list-item>
      </v-list-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block class="bg-amber-lighten-2 text-white">
          Version 1.0.1(Beta)
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { useAuthStore } from '@/common/store/auth'
const drawer = ref(window.innerWidth > 1264 ? true : false)
const is_show = ref(false)
const logoutResult: Ref<'success' | 'error' | 'info' | undefined> = ref()
const logoutTitle = ref('')
const logoutText = ref('')

function close() {
  is_show.value = false
  location.href = '/'
}

async function logout() {
  const authStore = useAuthStore()
  try {
    await authStore.logout()
    close()
  } catch (error) {
    logoutResult.value = 'error'
    logoutTitle.value = '로그아웃 실패'
    logoutText.value = '로그아웃 과정에서 에러가 발생했습니다.'
    is_show.value = true
  }
}

const people = ref([
  ['부원명단', '/people/list'],
  ['부상자 명단', '/people/injury/list'],
  ['코칭스태프 명단', '/people/coaching-staff/list']
])

const peopleAdmin = ref([
  ['부원정보수정', '/people/update'],
  ['부원등록', '/people/register'],
  ['코칭스태프 등록', '/people/coaching-staff/register'],
  ['코칭스태프 수정', '/people/coaching-staff/update']
])

const game = ref([['시합정보 조회', '/game/list']])

const attendance = ref([
  ['출석명단 조회', '/attendance/list'],
  ['출석체크', '/attendance/check']
])

const attendanceAdmin = ref([
  ['출석내용 변경', '/attendance/update'],
  ['출석삭제', '/attendance/delete']
])

const surveyAdmin = ref([['미응답자 확인', '/survey/not-submitted']])

const chatGPT = ref([['ChatGPT', '/chat-gpt/main']])
</script>

<style>
.v-icon--size-default {
  font-size: 16px;
}

#app-bar {
  box-shadow: 0px 2px 20px rgb(1 41 112 / 10%);
}

#side-bar {
  border: 0;
  box-shadow: 0px 0px 20px rgb(1 41 112 / 10%);
}
</style>
