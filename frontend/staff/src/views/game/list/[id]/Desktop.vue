<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-10 py-5">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-2 py-8">
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="4" class="text-center">
                  <p class="text-subtitle-2 font-weight-bold text-blue">HOME</p>
                  <p class="mt-3 text-h4 font-weight-bold">
                    {{ gameData.homeTeamName }}
                  </p>
                </v-col>
                <v-col cols="4" class="text-center">
                  <p class="text-h5 font-weight-bold">
                    {{ gameData.gameName }}
                  </p>
                  <p class="text-subtitle-2 font-weight-regular text-grey">
                    {{ gameData.gameDate?.substring(0, 10) }}
                  </p>
                </v-col>
                <v-col cols="4" class="text-center">
                  <p class="text-subtitle-2 font-weight-bold text-red">AWAY</p>
                  <p class="mt-3 text-h4 font-weight-bold">
                    {{ gameData.awayTeamName }}
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <h5 class="text-subtitle-1 font-weight-bold mb-3">통계 (포지션)</h5>
        <EasyDataTable
          :headers="statisticHeaders"
          :items="statistic"
          :rows-per-page="10"
          table-class-name="game-attendance-table"
          theme-color="#1d90ff"
          class="font-weight-medium"
          alternating
        ></EasyDataTable>
      </v-col>
      <v-col cols="6">
        <h5 class="text-subtitle-1 font-weight-bold mb-3">통계 (인원)</h5>
        <EasyDataTable
          :headers="statisticHeaders"
          :items="peopleNum"
          :rows-per-page="2"
          table-class-name="game-attendance-table"
          theme-color="#1d90ff"
          class="font-weight-medium"
          alternating
        ></EasyDataTable>
      </v-col>
      <v-col cols="12" elevation="3">
        <v-row>
          <v-col cols="7"
            ><h5 class="text-subtitle-1 font-weight-bold mb-3">선수단</h5>
            <EasyDataTable
              :headers="headers"
              :items="athelete"
              :rows-per-page="50"
              table-class-name="game-attendance-table"
              theme-color="#1d90ff"
              class="font-weight-medium"
              show-index
              alternating
            >
              <template #item-injured="item">
                {{ item.injured ? 'O' : 'X' }}
              </template>
              <template #item-newbie="item">
                {{ item.newbie ? '신입생' : '재학생' }}
              </template>
            </EasyDataTable>
          </v-col>
          <v-col cols="5">
            <h5 class="text-subtitle-1 font-weight-bold mb-3">스태프</h5>
            <EasyDataTable
              :headers="staffHeaders"
              :items="staff"
              :rows-per-page="20"
              table-class-name="game-attendance-table"
              theme-color="#1d90ff"
              class="font-weight-medium"
              show-index
              alternating
            >
              <template #item-newbie="item">
                {{ item.newbie ? '신입생' : '재학생' }}
              </template>
            </EasyDataTable>
          </v-col>
          <v-col cols="12">
            <h5 class="text-subtitle-1 font-weight-bold mb-3">불참인원</h5>
            <EasyDataTable
              :headers="absentHeaders"
              :items="absent"
              :rows-per-page="50"
              table-class-name="game-attendance-table"
              theme-color="#1d90ff"
              class="font-weight-medium"
              show-index
              alternating
            >
              <template #item-injured="item">
                {{ item.injured ? 'O' : 'X' }}
              </template>
              <template #item-newbie="item">
                {{ item.newbie ? '신입생' : '재학생' }}
              </template>
            </EasyDataTable>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-btn @click="() => router.back()" class="bg-green-darken-1"
          >뒤로가기</v-btn
        >
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { useRoute } from 'vue-router'
import { Ref } from 'vue'
import { axiosInstance } from '@/common/store/auth'
import { onMounted } from 'vue'
import router from '@/router'
import { Header } from 'vue3-easy-data-table'
import { Location } from '@/common/enums/location.enum'
import { AttendanceStatus } from '@/common/enums/attendanceStatus.enum'

const icon = ref('fas fa-football')
const title = ref('시합정보 조회')
const breadcumbs = ref([
  {
    title: '시합관리',
    disabled: false
  },
  {
    title: '시합정보 조회',
    disabled: false
  }
])

const route = useRoute()
const id = route.params.id

type Game = {
  id: number
  gameName: string
  gameDate: string
  homeTeamName: string
  awayTeamName: string
  homeTeamScore: number
  awayTeamScore: number
}

type AttendanceDTO = {
  id: number
  date: string
  name: string
  actual: string
  studentNo: number
  location: string
  survey: AttendanceStatus
  reason: string
  offPosition: string
  defPosition: string
  newbie: boolean
  injured: boolean
}

type AttendanceStatisticDTO = {
  location: string
  position: string
  current: number
  newbie: number
}

const gameData: Ref<Partial<Game>> = ref({})
const staffHeaders: Header[] = [
  { text: '이름', value: 'name' },
  { text: '학번', value: 'studentNo' },
  { text: '구분', value: 'newbie', sortable: true }
]
const headers: Header[] = [
  { text: '이름', value: 'name' },
  { text: '학번', value: 'studentNo' },
  { text: '구분', value: 'newbie', sortable: true },
  { text: '부상여부', value: 'injured', sortable: true },
  { text: '오펜스', value: 'offPosition', sortable: true },
  { text: '디펜스', value: 'defPosition', sortable: true }
]
const statisticHeaders: Header[] = [
  { text: '포지션', value: 'position' },
  { text: '재학생', value: 'current' },
  { text: '신입생', value: 'newbie' }
]
const absentHeaders: Header[] = [
  { text: '이름', value: 'name' },
  { text: '학번', value: 'studentNo' },
  { text: '구분', value: 'newbie', sortable: true },
  { text: '불참사유', value: 'reason' }
]
const items: Ref<Partial<AttendanceDTO>[]> = ref([])
const athelete: Ref<Partial<AttendanceDTO>[]> = ref([])
const staff: Ref<Partial<AttendanceDTO>[]> = ref([])
const absent: Ref<Partial<AttendanceDTO>[]> = ref([])
const statistic: Ref<AttendanceStatisticDTO[]> = ref([])
const peopleNum: Ref<AttendanceStatisticDTO[]> = ref([])

onMounted(async () => {
  await axiosInstance
    .get(`/api/game/${id}`)
    .then((result) => (gameData.value = result.data))

  await axiosInstance
    .get(`/api/attendance/${gameData.value.gameDate}`)
    .then((result) => (items.value = result.data))

  await axiosInstance
    .get(`/api/statistic/position/${gameData.value.gameDate}`)
    .then((result) => (statistic.value = result.data))

  absent.value = items.value.filter(
    (item) => item.survey === AttendanceStatus.Absent
  )

  items.value = items.value.filter(
    (item) => item.survey !== AttendanceStatus.Absent
  )

  athelete.value = items.value.filter((item) => item.offPosition !== 'STAFF')
  staff.value = items.value.filter((item) => item.offPosition === 'STAFF')
  statistic.value = statistic.value.filter(
    (item) => item.location === Location.Integrated
  )
  peopleNum.value.push({
    position: '선수단',
    location: Location.Integrated,
    current: athelete.value.filter((item) => !item.newbie).length,
    newbie: athelete.value.filter((item) => item.newbie).length
  })
  peopleNum.value.push({
    position: '스태프',
    location: Location.Integrated,
    current: staff.value.filter((item) => !item.newbie).length,
    newbie: staff.value.filter((item) => item.newbie).length
  })
})
</script>
<style>
.game-attendance-table {
  --easy-table-header-font-size: 15px;
  --easy-table-header-height: 50px;
  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;
  --easy-table-body-row-font-weight: 700;

  --easy-table-body-row-hover-font-color: #e8eaf6;
  --easy-table-body-row-hover-background-color: #3949ab;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;
}
</style>
