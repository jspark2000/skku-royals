<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-5 py-5">
    <v-row>
      <v-col cols="12" :class="{ 'd-none': hello }">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            출석 테이블(통계)
            <v-card-subtitle class="d-inline px-0">
              | {{ attendanceDate }}
            </v-card-subtitle>
          </v-card-title>
          <v-tabs v-model="tabStatistic" class="ms-4" bg-color="white">
            <v-tab value="Integrated" @click="filterLocation('Integrated')">
              통합
            </v-tab>
            <v-tab value="Seoul" @click="filterLocation('Seoul')">명륜</v-tab>
            <v-tab value="Suwon" @click="filterLocation('Suwon')">율전</v-tab>
          </v-tabs>
          <v-card-text class="font-weight-medium mt-lg-3">
            <EasyDataTable
              ref="positionStatisticTable"
              :headers="attendanceStatisticHeaders"
              :items="filteredAttendanceStatisticItems"
              :rows-per-page="25"
              table-class-name="attendance-date-table"
              theme-color="#1d90ff"
              show-index
              alternating
            ></EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" :class="{ 'd-none': hello }">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            출석 테이블
            <v-card-subtitle class="d-inline px-0">
              | {{ attendanceDate }}
            </v-card-subtitle>
          </v-card-title>
          <v-text-field
            v-model="searchValue"
            density="comfortable"
            label="Search"
            variant="solo"
            class="ms-4 mt-3 w-50"
            clearable
          ></v-text-field>
          <v-tabs v-model="tab" class="ms-4" bg-color="white">
            <v-tab value="ALL" @click="filterPosition('ALL')">전체</v-tab>
            <v-tab value="STAFF" @click="filterPosition('STAFF')">STAFF</v-tab>
            <v-tab value="Newbie" @click="filterPosition('Newbie')">
              신입생
            </v-tab>
            <v-tab value="QB" @click="filterPosition('QB')">QB</v-tab>
            <v-tab value="OL" @click="filterPosition('OL')">OL</v-tab>
            <v-tab value="WR" @click="filterPosition('WR')">WR</v-tab>
            <v-tab value="RB" @click="filterPosition('RB')">RB</v-tab>
            <v-tab value="DL" @click="filterPosition('DL')">DL</v-tab>
            <v-tab value="LB" @click="filterPosition('LB')">LB</v-tab>
            <v-tab value="HYB" @click="filterPosition('HYB')">HYB</v-tab>
            <v-tab value="DB" @click="filterPosition('DB')">DB</v-tab>
          </v-tabs>
          <v-card-text class="font-weight-medium mt-lg-3">
            <EasyDataTable
              ref="attendanceListTable"
              :headers="attendanceHeaders"
              :items="filteredAttendanceItems"
              :rows-per-page="10"
              :search-value="searchValue"
              table-class-name="attendance-search-table"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #expand="item">
                <div style="padding: 15px">{{ item.reason }}</div>
              </template>
              <template #item-newbie="item">
                {{ item.newbie ? '신입생' : '재학생' }}
              </template>
              <template #item-injured="item">
                {{ item.injured ? 'O' : 'X' }}
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
            </EasyDataTable>
            <v-btn
              prepend-icon="fas fa-print"
              rounded="lg"
              class="bg-deep-purple-darken-1 mt-5"
              @click="issueDailySurveyReport()"
            >
              엑셀파일로 내보내기
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            출석 날짜 선택 테이블
            <v-card-subtitle class="d-inline px-0">
              | {{ season }} season
            </v-card-subtitle>
          </v-card-title>
          <v-card-text class="font-weight-medium mt-lg-3">
            <EasyDataTable
              :headers="headers"
              :items="items"
              :rows-per-page="10"
              table-class-name="attendance-search-table"
              theme-color="#1d90ff"
              show-index
              alternating
              :loading="tableLoading"
            >
              <template #item-date="item">
                {{ item.date.slice(0, 10) }}
              </template>
              <template #item-select="item">
                <v-btn
                  class="bg-blue-darken-2"
                  @click="getAttendances(item)"
                  icon="fas fa-magnifying-glass"
                  rounded="lg"
                  size="x-small"
                ></v-btn>
              </template>
            </EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog width="auto" v-model="invalid">
      <v-card class="pt-3">
        <v-card-title class="text-center text-amber-accent-2">
          <v-icon
            class="align-center"
            icon="fas fa-triangle-exclamation"
            size="large"
          ></v-icon>
        </v-card-title>
        <v-card-text class="text-center">
          {{ errorMessage }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="invalid = false">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import { Header } from 'vue3-easy-data-table'
import ExcelJS from 'exceljs'

const tab = ref()
const tabStatistic = ref()

const attendanceListTable = ref()
const positionStatisticTable = ref()
const searchValue = ref()

const invalid = ref(false)
const errorMessage = ref('알 수 없는 오류 발생')

axiosInstance
  .get('/api/attendance/date-list')
  .then((result) => {
    items.value = result.data
  })
  .catch((error) => {
    console.log(error)
    return false
  })
  .finally(() => (tableLoading.value = false))

const tableLoading = ref(true)

const hello = ref(true)

const icon = ref('fas fa-table-list')
const title = ref('출석명단')
const breadcumbs = ref([
  {
    title: '출석관리',
    disabled: false
  },
  {
    title: '출석명단 조회',
    disabled: false
  }
])

const season = ref(new Date().getFullYear())

const items: Ref<AttendanceDatesDTO[]> = ref([])

type AttendanceDatesDTO = {
  date: string
  isGame: boolean
}

const headers: Header[] = [
  { text: '운동날짜', value: 'date', sortable: true },
  { text: '시합여부', value: 'isGame', sortable: true },
  { text: '선택', value: 'select' }
]

type AttendanceDTO = {
  id: number
  date: string
  name: string
  actual: string
  studentNo: number
  location: string
  survey: string
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

async function getAttendances(item: AttendanceDatesDTO) {
  const attendances: AttendanceDTO[] = await axiosInstance
    .get(`/api/attendance/${item.date}`)
    .then((result) => result.data)
    .catch((error) => {
      console.log(error)
      return false
    })

  const positionStatistic: AttendanceStatisticDTO[] = await axiosInstance
    .get(`/api/attendance/count/position/${item.date}`)
    .then((result) => result.data)
    .catch((error) => {
      console.log(error)
      return false
    })

  if (attendances) {
    attendanceListTable.value.updatePage(1)
    attendanceDate.value = item.date.slice(0, 10)
    attendanceItems.value = attendances
    filteredAttendanceItems.value = [...attendances]
  }

  if (positionStatistic) {
    positionStatisticTable.value.updatePage(1)
    attendanceDate.value = item.date.slice(0, 10)
    attendanceStatisticItems.value = positionStatistic
    filteredAttendanceStatisticItems.value = [
      ...positionStatistic.filter((item) => item.location === 'Integrated')
    ]
    hello.value = false
  }
}

function filterPosition(position: string) {
  attendanceListTable.value.updatePage(1)
  if (position === 'ALL') {
    filteredAttendanceItems.value = attendanceItems.value
  } else if (position === 'Newbie') {
    filteredAttendanceItems.value = attendanceItems.value.filter(
      (attendance) => attendance.newbie
    )
  } else {
    filteredAttendanceItems.value = attendanceItems.value.filter(
      (attendance) =>
        attendance.offPosition === position ||
        attendance.defPosition === position
    )
  }
}

function filterLocation(location: string) {
  positionStatisticTable.value.updatePage(1)
  filteredAttendanceStatisticItems.value =
    attendanceStatisticItems.value.filter(
      (statistic) => statistic.location === location
    )
}

const attendanceDate = ref('')
const filteredAttendanceItems: Ref<AttendanceDTO[]> = ref([])
const attendanceItems: Ref<AttendanceDTO[]> = ref([])
const attendanceHeaders: Header[] = [
  { text: '이름', value: 'name' },
  { text: '학번', value: 'studentNo' },
  { text: '위치', value: 'location', sortable: true },
  { text: '부상', value: 'injured', sortable: true },
  { text: '응답', value: 'survey', sortable: true }
]

const attendanceStatisticHeaders: Header[] = [
  { text: '포지션', value: 'position' },
  { text: '재학생', value: 'current' },
  { text: '신입생', value: 'newbie' }
]

const attendanceStatisticItems: Ref<AttendanceStatisticDTO[]> = ref([])
const filteredAttendanceStatisticItems: Ref<AttendanceStatisticDTO[]> = ref([])

async function issueDailySurveyReport() {
  const result = await axiosInstance
    .get(`/api/attendance/report/survey/${attendanceDate.value}`)
    .then((result) => result.data)
    .catch((error) => {
      if (error.response.status === 404) {
        errorMessage.value = error.response.data.message
      }
      invalid.value = true
    })

  if (result) {
    const workbook = new ExcelJS.Workbook()
    workbook.creator = 'staff-team'
    workbook.lastModifiedBy = 'staff-team'
    workbook.created = new Date()
    workbook.modified = new Date()
    const worksheetA = workbook.addWorksheet('재학생(선수)')
    const worksheetS = workbook.addWorksheet('재학생(스태프)')
    const worksheetN = workbook.addWorksheet('신입생(전체)')

    const columns = [
      {
        header: '이름',
        key: 'name'
      },
      {
        header: '학번',
        key: 'studentNo'
      },
      {
        header: '부상',
        key: 'injured'
      },
      {
        header: '오펜스',
        key: 'offPosition'
      },
      {
        header: '디펜스',
        key: 'defPosition'
      },
      {
        header: '출석 캠퍼스',
        key: 'location'
      },
      {
        header: '출석조사응답',
        key: 'survey'
      },
      {
        header: '사유',
        key: 'reason'
      }
    ]

    worksheetA.columns = columns
    worksheetS.columns = columns
    worksheetN.columns = columns

    worksheetA.insertRows(
      2,
      result.filter((item: any) => !item.newbie && !item.staff)
    )
    worksheetS.insertRows(
      2,
      result.filter((item: any) => !item.newbie && item.staff)
    )
    worksheetN.insertRows(
      2,
      result.filter((item: any) => item.newbie)
    )

    const buffer = await workbook.xlsx.writeBuffer()
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    })
    const url = window.URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `${attendanceDate.value} 출석조사결과.xlsx`
    anchor.click()
    window.URL.revokeObjectURL(url)
  }
}
</script>

<style>
.attendance-search-table {
  --easy-table-header-font-size: 12px;
  --easy-table-header-height: 50px;
  --easy-table-header-item-padding: 10px 10px;

  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 11px;
  --easy-table-body-row-font-weight: 700;

  --easy-table-body-row-hover-font-color: #e8eaf6;
  --easy-table-body-row-hover-background-color: #3949ab;

  --easy-table-body-item-padding: 10px 10px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;
}
</style>
