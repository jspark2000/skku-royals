<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-10 pb-10">
    <v-row>
      <v-col cols="5">
        <v-card rounded="lg" class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            출석 테이블(통계)
            <v-card-subtitle class="d-inline px-0">
              | {{ attendanceDate }}
            </v-card-subtitle>
          </v-card-title>
          <v-tabs v-model="tabStatistic" class="ms-4" bg-color="white">
            <v-tab value="Integrated" @click="filterLocation('Integrated')">
              전체
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
      <v-col cols="7">
        <v-card rounded="lg" class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            출석 테이블 (스태프)
            <v-card-subtitle class="d-inline px-0">
              | {{ attendanceDate }}
            </v-card-subtitle>
          </v-card-title>
          <v-card-text class="font-weight-medium mt-lg-3">
            <EasyDataTable
              ref="attendanceListTable"
              :headers="attendanceHeadersStaff"
              :items="attendanceItemsStaff"
              :rows-per-page="10"
              :search-value="searchValue"
              table-class-name="attendance-date-table"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #expand="item">
                <div style="padding: 15px">{{ item.reason }}</div>
              </template>
              <template #item-injured="item">
                {{ item.injured ? 'O' : 'X' }}
              </template>
              <template #item-newbie="item">
                {{ item.newbie ? '신입생' : '재학생' }}
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
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="pa-2" rounded="lg" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            출석 테이블 (선수단)
            <v-card-subtitle class="d-inline px-0">
              | {{ attendanceDate }}
            </v-card-subtitle>
          </v-card-title>
          <v-text-field
            v-model="searchValue"
            density="comfortable"
            label="Search"
            variant="solo"
            class="w-25 ms-4 mt-3"
            clearable
          ></v-text-field>
          <v-card-text class="font-weight-medium mt-1">
            <EasyDataTable
              ref="attendanceListTable"
              :headers="attendanceHeaders"
              :items="filteredAttendanceItems"
              :rows-per-page="10"
              :search-value="searchValue"
              :filter-options="filterOptions"
              table-class-name="attendance-date-table"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #expand="item">
                <div style="padding: 15px">{{ item.reason }}</div>
              </template>
              <template #item-injured="item">
                {{ item.injured ? 'O' : 'X' }}
              </template>
              <template #item-newbie="item">
                {{ item.newbie ? '신입생' : '재학생' }}
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
              <template #header-offPosition="attendanceHeaders">
                <div class="filter-column">
                  <v-icon
                    icon="fas fa-filter"
                    size="x-small"
                    @click.stop="offPositionFilter = !offPositionFilter"
                  />
                  {{ attendanceHeaders.text }}
                  <div v-if="offPositionFilter" class="filter-menu">
                    <select
                      class="selector"
                      v-model="offPositionCriteria"
                      name="offPosition"
                    >
                      <option value="all">전체</option>
                      <option value="QB">QB</option>
                      <option value="OL">OL</option>
                      <option value="WR">WR</option>
                      <option value="RB">RB</option>
                    </select>
                  </div>
                </div>
              </template>
              <template #header-defPosition="attendanceHeaders">
                <div class="filter-column">
                  <v-icon
                    icon="fas fa-filter"
                    size="x-small"
                    @click.stop="defPositionFilter = !defPositionFilter"
                  />
                  {{ attendanceHeaders.text }}
                  <div v-if="defPositionFilter" class="filter-menu">
                    <select
                      class="selector"
                      v-model="defPositionCriteria"
                      name="defPosition"
                    >
                      <option value="all">전체</option>
                      <option value="DL">DL</option>
                      <option value="LB">LB</option>
                      <option value="HYB">HYB</option>
                      <option value="DB">DB</option>
                    </select>
                  </div>
                </div>
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
            <v-btn
              rounded="lg"
              class="bg-red-darken-2 ms-3 mt-5"
              @click="() => router.back()"
            >
              뒤로가기
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog width="auto" v-model="invalid">
      <v-card class="pt-3">
        <v-card-title class="text-amber-accent-2 text-center">
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
import { FilterOption, Header } from 'vue3-easy-data-table'
import ExcelJS from 'exceljs'
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { computed } from 'vue'

const tabStatistic = ref()

const route = useRoute()
const router = useRouter()

const attendanceListTable = ref()
const positionStatisticTable = ref()
const searchValue = ref()

const invalid = ref(false)
const errorMessage = ref('알 수 없는 오류 발생')

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

onMounted(async () => {
  const attendances: AttendanceDTO[] = await axiosInstance
    .get(`/api/attendance/${route.params.date}`)
    .then((result) => result.data)
    .catch((error) => {
      console.log(error)
      return false
    })

  const positionStatistic: AttendanceStatisticDTO[] = await axiosInstance
    .get(`/api/statistic/position/${route.params.date}`)
    .then((result) => result.data)
    .catch((error) => {
      console.log(error)
      return false
    })

  if (attendances) {
    attendanceListTable.value.updatePage(1)
    attendanceDate.value =
      typeof route.params.date === 'string'
        ? route.params.date
        : route.params.date[0]
    attendanceItems.value = attendances
    filteredAttendanceItems.value = attendanceItems.value.filter(
      (item) => item.offPosition !== 'STAFF'
    )
    attendanceItemsStaff.value = attendanceItems.value.filter(
      (item) => item.offPosition === 'STAFF'
    )
    attendanceItems.value = attendanceItems.value.filter(
      (item) => item.offPosition !== 'STAFF'
    )
  }

  if (positionStatistic) {
    positionStatisticTable.value.updatePage(1)
    attendanceDate.value =
      typeof route.params.date === 'string'
        ? route.params.date
        : route.params.date[0]
    attendanceStatisticItems.value = positionStatistic
    filteredAttendanceStatisticItems.value = [
      ...positionStatistic.filter((item) => item.location === 'Integrated')
    ]
  }
})

function filterLocation(location: string) {
  positionStatisticTable.value.updatePage(1)
  filteredAttendanceStatisticItems.value =
    attendanceStatisticItems.value.filter(
      (statistic) => statistic.location === location
    )
}

const offPositionFilter = ref(false)
const offPositionCriteria = ref('all')

const defPositionFilter = ref(false)
const defPositionCriteria = ref('all')

const filterOptions = computed((): FilterOption[] => {
  const filterOptionsArray: FilterOption[] = []
  if (offPositionCriteria.value !== 'all') {
    filterOptionsArray.push({
      field: 'offPosition',
      comparison: '=',
      criteria: offPositionCriteria.value
    })
  }
  if (defPositionCriteria.value !== 'all') {
    filterOptionsArray.push({
      field: 'defPosition',
      comparison: '=',
      criteria: defPositionCriteria.value
    })
  }
  return filterOptionsArray
})

const attendanceDate = ref('')
const filteredAttendanceItems: Ref<AttendanceDTO[]> = ref([])
const attendanceItems: Ref<AttendanceDTO[]> = ref([])
const attendanceItemsStaff: Ref<AttendanceDTO[]> = ref([])
const attendanceHeaders: Header[] = [
  { text: '이름', value: 'name' },
  { text: '학번', value: 'studentNo' },
  { text: '부상', value: 'injured', sortable: true },
  { text: '구분', value: 'newbie', sortable: true },
  { text: '위치', value: 'location', sortable: true },
  { text: '응답', value: 'survey', sortable: true },
  { text: '오펜스', value: 'offPosition' },
  { text: '디펜스', value: 'defPosition' },
  { text: '실제출석', value: 'actual', sortable: true }
]

const attendanceHeadersStaff: Header[] = [
  { text: '이름', value: 'name' },
  { text: '학번', value: 'studentNo' },
  { text: '구분', value: 'newbie' },
  { text: '위치', value: 'location', sortable: true },
  { text: '응답', value: 'survey', sortable: true },
  { text: '실제출석', value: 'actual', sortable: true }
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
    .get(`/api/statistic/survey/${attendanceDate.value}`)
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
.attendance-date-table {
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
.filter-column {
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
}
.filter-icon {
  cursor: pointer;
  display: inline-block;
  width: 15px !important;
  height: 15px !important;
  margin-right: 4px;
}
.filter-menu {
  padding: 15px 30px;
  z-index: 1;
  position: absolute;
  top: 30px;
  width: 200px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
}
.slider {
  margin-top: 36px;
}
.selector {
  width: 100%;
}
</style>
