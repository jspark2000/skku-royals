<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-10 py-5">
    <v-row>
      <v-col cols="12" :class="{ 'd-none': attendanceCheckTable }">
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
            class="ms-4 mt-3 w-25"
            clearable
          ></v-text-field>
          <v-tabs v-model="tab" class="ms-4" bg-color="white">
            <v-tab value="ALL" @click="filterLocation('ALL')">전체</v-tab>
            <v-tab value="Integrated" @click="filterLocation('Integrated')">
              통합
            </v-tab>
            <v-tab value="Seoul" @click="filterLocation('Seoul')">명륜</v-tab>
            <v-tab value="Suwon" @click="filterLocation('Suwon')">율전</v-tab>
            <v-tab value="불참" @click="filterLocation('불참')">불참</v-tab>
          </v-tabs>
          <v-card-text class="font-weight-medium mt-lg-3">
            <EasyDataTable
              ref="attendanceCheckTableRef"
              :headers="attendanceHeaders"
              :items="filteredAttendanceItems"
              :rows-per-page="10"
              :search-value="searchValue"
              table-class-name="attendance-date-table"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #item-location="item">
                {{
                  item.location === 'Integrated'
                    ? '통합'
                    : item.location === 'Suwon'
                    ? '율전'
                    : '명륜'
                }}
              </template>
              <template #item-response="item">
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
              <template #item-check="item">
                <v-btn
                  :class="{ 'd-none': item.checked }"
                  class="bg-teal-darken-2 text-white"
                  @click="getCheckModal(item)"
                  icon="fas fa-check-double"
                  rounded="lg"
                  size="x-small"
                ></v-btn>
              </template>
            </EasyDataTable>
            <v-btn
              prepend-icon="fas fa-print"
              rounded="lg"
              class="bg-deep-purple-darken-1 mt-5"
              @click="issueDailyReport()"
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
              table-class-name="attendance-date-table"
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
                  class="bg-green-darken-2"
                  @click="getAttendances(item)"
                  icon="fas fa-hand-pointer"
                  rounded="lg"
                  size="x-small"
                ></v-btn>
              </template>
            </EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="checkModal" width="auto">
      <v-sheet width="350" class="mx-auto pa-10">
        <h5 class="text-h6 font-weight-bold mb-5">출석체크</h5>
        <v-form @submit.prevent @submit="checkAttendance()">
          <v-text-field
            v-model="targetId"
            variant="outlined"
            label="id"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="targetName"
            variant="outlined"
            label="이름"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="targetStudentNo"
            variant="outlined"
            type="number"
            label="입학년도"
            readonly
          ></v-text-field>
          <v-select
            v-model="targetLocation"
            variant="outlined"
            label="위치"
            :items="['통합', '명륜', '율전']"
          ></v-select>
          <v-select
            v-model="actualAttendance"
            variant="outlined"
            label="실제출석"
            :items="['참석', '늦참', '불참']"
          ></v-select>
          <v-btn type="submit" block class="bg-indigo-darken-2">체크하기</v-btn>
          <v-btn
            @click="() => (checkModal = false)"
            block
            class="mt-3 bg-amber-darken-2 text-white"
          >
            뒤로가기
          </v-btn>
        </v-form>
      </v-sheet>
    </v-dialog>
    <v-dialog
      v-model="resultModal"
      z-index="100005"
      location-strategy="static"
      persistent
    >
      <v-alert
        :type="checkResult"
        :title="checkTitle"
        :text="checkText"
        width="60%"
        border
        class="align-self-center"
      >
        <v-row class="mt-2">
          <v-col>
            <v-btn @click="resultModal = false" class="bg-green-darken-4">
              확인
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-dialog>
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
import EasyDataTable from 'vue3-easy-data-table'
import ExcelJS from 'exceljs'

const invalid = ref(false)
const errorMessage = ref('알 수 없는 오류 발생')
const attendanceCheckTableRef = ref()
const searchValue = ref()

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

const attendanceCheckTable = ref(true)

const icon = ref('fas fa-table-list')
const title = ref('출석체크')
const breadcumbs = ref([
  {
    title: '출석관리',
    disabled: false
  },
  {
    title: '출석체크',
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
  studentNo: number
  location: string
  actual: string
  survey: string
  offPosition: string
  defPosition: string
  checked: boolean
}

async function getAttendances(item: AttendanceDatesDTO) {
  const attendances: AttendanceDTO[] = await axiosInstance
    .get(`/api/attendance/${item.date}`)
    .then((result) => result.data)
    .catch((error) => {
      console.log(error)
      return false
    })

  if (attendances) {
    attendanceCheckTableRef.value.updatePage(1)
    attendanceDate.value = item.date.slice(0, 10)
    attendanceItems.value = attendances.filter(
      (attendance) => !attendance.checked
    )
    filteredAttendanceItems.value = [
      ...attendances.filter((attendance) => !attendance.checked)
    ]
    attendanceCheckTable.value = false
  }
}

const attendanceDate = ref('')
const filteredAttendanceItems: Ref<AttendanceDTO[]> = ref([])
const attendanceItems: Ref<AttendanceDTO[]> = ref([])
const attendanceHeaders: Header[] = [
  { text: '이름', value: 'name' },
  { text: '학번', value: 'studentNo' },
  { text: '위치', value: 'location' },
  { text: '응답', value: 'response' },
  { text: '체크하기', value: 'check' }
]

const checkModal = ref(false)

const targetId = ref()
const targetName = ref()
const targetStudentNo = ref()
const targetLocation = ref()
const actualAttendance = ref()

async function getCheckModal(item: AttendanceDTO) {
  targetId.value = item.id
  targetName.value = item.name
  targetStudentNo.value = item.studentNo
  targetLocation.value =
    item.location === 'Integrated'
      ? '통합'
      : item.location === 'Seoul'
      ? '명륜'
      : '율전'
  actualAttendance.value =
    item.actual === 'Present'
      ? '참석'
      : item.actual === 'Tardy'
      ? '늦참'
      : '불참'
  checkModal.value = true
}

type AttendanceCheckDTO = {
  id: number
  location: string
  actual: string
  checked: boolean
}

const resultModal = ref(false)
const checkResult = ref()
const checkTitle = ref()
const checkText = ref()

async function checkAttendance() {
  const data: AttendanceCheckDTO = {
    id: targetId.value,
    location:
      targetLocation.value === '통합'
        ? 'Integrated'
        : targetLocation.value === '명륜'
        ? 'Seoul'
        : 'Suwon',
    actual:
      actualAttendance.value === '참석'
        ? 'Present'
        : actualAttendance.value === '늦참'
        ? 'Tardy'
        : 'Absent',
    checked: true
  }

  const result = await axiosInstance
    .put('/api/attendance/check', data)
    .then((result) => result.data)
    .catch((error) => {
      console.log(error)
      return false
    })

  if (result) {
    attendanceItems.value = attendanceItems.value.filter(
      (attendance) => attendance.id !== result.id
    )
    filteredAttendanceItems.value = filteredAttendanceItems.value.filter(
      (attendance) => attendance.id !== result.id
    )
    checkResult.value = 'success'
    checkTitle.value = '성공'
    checkText.value = '출석체크 성공'
  } else {
    checkResult.value = 'error'
    checkTitle.value = '실패'
    checkText.value = '출석체크 실패'
  }
  checkModal.value = false
  resultModal.value = true
}

const tab = ref('ALL')

function filterLocation(location: string) {
  attendanceCheckTableRef.value.updatePage(1)
  if (location === 'ALL') {
    filteredAttendanceItems.value = attendanceItems.value
  } else if (location === 'Integrated') {
    filteredAttendanceItems.value = attendanceItems.value.filter(
      (attendance) =>
        attendance.survey !== 'Absent' && attendance.location === location
    )
  } else if (location === '불참') {
    filteredAttendanceItems.value = attendanceItems.value.filter(
      (attendance) => attendance.survey === 'Absent'
    )
  } else {
    filteredAttendanceItems.value = attendanceItems.value.filter(
      (attendance) => attendance.location === location
    )
  }
}

async function issueDailyReport() {
  const result = await axiosInstance
    .get(`/api/attendance/report/${attendanceDate.value}`)
    .then((result) => result.data)
    .catch((error) => {
      if (error.response.status === 400) {
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
    const worksheetM = workbook.addWorksheet('출석변동인원')

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
        header: '출석 캠퍼스',
        key: 'location'
      },
      {
        header: '출석조사응답',
        key: 'survey'
      },
      {
        header: '실제출석',
        key: 'result'
      }
    ]

    worksheetA.columns = columns
    worksheetS.columns = columns
    worksheetN.columns = columns
    worksheetM.columns = columns

    worksheetA.insertRows(
      2,
      result.filter((item: any) => item.newbie === '재학생' && !item.staff)
    )
    worksheetS.insertRows(
      2,
      result.filter((item: any) => item.newbie === '재학생' && item.staff)
    )
    worksheetN.insertRows(
      2,
      result.filter((item: any) => item.newbie === '신입생')
    )
    worksheetM.insertRows(
      2,
      result.filter((item: any) => item.survey !== item.result)
    )

    const buffer = await workbook.xlsx.writeBuffer()
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    })
    const url = window.URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `${attendanceDate.value} 출석체크결과.xlsx`
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
</style>
