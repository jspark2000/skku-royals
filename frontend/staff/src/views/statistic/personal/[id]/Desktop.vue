<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-10 py-5">
    <v-row>
      <v-col cols="4">
        <h5 class="text-subtitle-1 font-weight-bold mb-3">부원 정보</h5>
        <v-card class="pa-10 text-center" elevation="1">
          <h5 class="text-h5 font-weight-bold mb-3">
            {{ people.name }}
            <span class="text-subtitle-2 text-grey-darken-2"
              >|
              {{ people.studentNo ? people.studentNo % 100 : '??' }} 학번</span
            >
          </h5>
          <h5 class="text-subtitle-1 font-weight-bold mb-3">
            {{ people.offPosition }} / {{ people.defPosition }}
          </h5>
          <v-btn class="bg-green-darken-1 mt-5" @click="router.back()">
            뒤로가기
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="8">
        <h5 class="text-subtitle-1 font-weight-bold mb-3">출석 통계</h5>
        <EasyDataTable
          :headers="statisticHeaders"
          :items="statistic"
          :rows-per-page="10"
          table-class-name="statistic-table"
          theme-color="#1d90ff"
          class="font-weight-medium"
          alternating
        >
          <template #item-percentage="item">
            {{
              item.percentage
                ? item.percentage.toString().substring(0, 4) + '%'
                : '0%'
            }}
          </template>
        </EasyDataTable>
      </v-col>
      <v-col cols="12">
        <h5 class="text-subtitle-1 font-weight-bold mb-3">출결 목록</h5>
        <EasyDataTable
          :headers="AttendanceHeaders"
          :items="attendances"
          :rows-per-page="50"
          table-class-name="statistic-table"
          theme-color="#1d90ff"
          class="font-weight-medium"
          show-index
          alternating
        >
          <template #item-date="item">
            {{ item.date.substring(0, 10) }}
          </template>
          <template #item-isGame="item">
            {{ item.isGame ? 'O' : 'X' }}
          </template>
          <template #item-location="item">
            {{
              item.location === 'Integrated'
                ? '통합'
                : item.location === 'Suwon'
                ? '율전'
                : '명륜'
            }}
          </template>
          <template #item-survey="item">
            <v-chip
              class="font-weight-bold"
              :class="
                item.survey === 'Present'
                  ? 'bg-green-darken-3'
                  : item.survey === 'Tardy'
                  ? 'bg-amber-darken-2 text-white'
                  : 'bg-red-darken-4'
              "
              size="small"
            >
              {{
                item.survey === 'Present'
                  ? '참석'
                  : item.survey === 'Tardy'
                  ? '늦참'
                  : '불참'
              }}
            </v-chip>
          </template>
          <template #item-actual="item">
            <v-chip
              class="font-weight-bold"
              :class="
                item.actual
                  ? item.actual === 'Present'
                    ? 'bg-green-darken-3'
                    : item.actual === 'Tardy'
                    ? 'bg-amber-darken-2 text-white'
                    : 'bg-red-darken-4'
                  : 'bg-grey-darken-3'
              "
              size="small"
            >
              {{
                item.actual
                  ? item.actual === 'Present'
                    ? '참석'
                    : item.actual === 'Tardy'
                    ? '늦참'
                    : '불참'
                  : '체크전'
              }}
            </v-chip>
          </template>
        </EasyDataTable>
      </v-col>
    </v-row>
    <v-dialog v-model="errorModal" width="400">
      <v-card>
        <v-card-title class="text-center text-red-darken-2">
          <v-icon
            class="align-center"
            icon="fas fa-triangle-exclamation"
            size="36px"
          ></v-icon>
        </v-card-title>
        <v-card-text class="text-center">
          {{ errorMsg }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="router.back()"> 확인 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { useRoute, useRouter } from 'vue-router'
import { axiosInstance } from '@/common/store/auth'
import { AttendanceStatus } from '@/common/enums/attendanceStatus.enum'
import { Location } from '@/common/enums/location.enum'
import { Header } from 'vue3-easy-data-table'
import { Ref } from 'vue'

const route = useRoute()
const router = useRouter()
const errorModal = ref(false)
const errorMsg = ref()
const icon = ref('fas fa-simple-chart')
const title = ref('개별 출석 통계')
const breadcumbs = ref([
  {
    title: '출석통계',
    disabled: false
  },
  {
    title: '개별 출석 통계',
    disabled: false
  }
])

type People = {
  name: string
  studentNo: number
  offPosition: string
  defPosition: string
  year: number
}

type Attendance = {
  date: string
  location: Location
  isGame: boolean
  survey: AttendanceStatus
  actual: AttendanceStatus
  reason: string
}

type Statistic = {
  absent: number
  present: number
  total: number
  notChecked: number
  percentage: number
}

const people: Ref<Partial<People>> = ref({})
const statistic: Ref<Partial<Statistic[]>> = ref([])
const attendances: Ref<Partial<Attendance[]>> = ref([])
const statisticHeaders: Header[] = [
  { text: '총합', value: 'total' },
  { text: '참석', value: 'present' },
  { text: '불참', value: 'absent' },
  { text: '미체크', value: 'notChecked' },
  { text: '출석률', value: 'percentage' }
]
const AttendanceHeaders: Header[] = [
  { text: '날짜', value: 'date', sortable: true },
  { text: '위치', value: 'location' },
  { text: '시합여부', value: 'isGame' },
  { text: '출석조사 응답', value: 'survey' },
  { text: '실제출석', value: 'actual' },
  { text: '사유', value: 'reason' }
]

onMounted(async () => {
  await axiosInstance
    .get(`/api/statistic/people/${route.params.id}`)
    .then((result) => {
      console.log(result.data)
      statistic.value.push(result.data.statistic)
      attendances.value = result.data.attendances
      people.value = result.data.peopleInfo
    })
    .catch((error) => {
      errorMsg.value = error.response.data.message ?? '알 수 없는 오류 발생'
      errorModal.value = true
    })
})
</script>

<style>
.statistic-table {
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
