<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-4 pb-10">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-2" elevation="3">
          <v-card-title
            class="text-indigo-darken-4 text-h6 mb-2 font-weight-medium"
          >
            변경할 출석 선택
          </v-card-title>
          <v-text-field
            v-model="searchValue"
            label="이름 검색"
            variant="solo"
            class="ms-4 mt-3 w-50"
            clearable
          ></v-text-field>
          <v-card-text class="font-weight-medium">
            <EasyDataTable
              :headers="headers"
              :items="items"
              :rows-per-page="25"
              :search-value="searchValue"
              :search-field="searchField"
              table-class-name="attendance-update-table-mo"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #item-date="item">
                {{ item.date.substring(0, 10) }}
              </template>
              <template #item-location="item">
                {{
                  item.location === Location.Integrated
                    ? '통합'
                    : item.location === Location.Seoul
                    ? '명륜'
                    : '율전'
                }}
              </template>
              <template #item-survey="item">
                {{
                  item.survey === AttendanceStatus.Absent
                    ? '불참'
                    : item.survey === AttendanceStatus.Tardy
                    ? '늦참'
                    : '참석'
                }}
              </template>
              <template #item-actual="item">
                {{
                  item.actual === AttendanceStatus.Absent
                    ? '불참'
                    : item.actual === AttendanceStatus.Tardy
                    ? '늦참'
                    : item.actual === AttendanceStatus.Present
                    ? '참석'
                    : '체크전'
                }}
              </template>
              <template #item-select="item">
                <v-btn
                  class="bg-amber-lighten-1 text-white"
                  icon="fas fa-pencil"
                  rounded="lg"
                  @click="getUpdateModal(item)"
                  size="x-small"
                ></v-btn>
              </template>
            </EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-responsive>
  <v-dialog v-model="updateModal" width="auto">
    <v-sheet width="350" class="mx-auto pa-10">
      <h5 class="text-h6 font-weight-bold mb-5">출석정보 변경</h5>
      <v-form @submit.prevent @submit="updateAttendance()">
        <v-text-field
          v-model="id"
          variant="outlined"
          label="id"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="name"
          variant="outlined"
          label="이름"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="studentNo"
          variant="outlined"
          type="number"
          label="입학년도"
          readonly
        ></v-text-field>
        <v-select
          v-model="location"
          variant="outlined"
          label="위치"
          :items="['통합', '명륜', '율전']"
        ></v-select>
        <v-select
          v-model="survey"
          variant="outlined"
          label="출석조사 응답"
          :items="['참석', '늦참', '불참']"
        ></v-select>
        <v-select
          v-model="actual"
          variant="outlined"
          label="실제출석"
          :items="['참석', '늦참', '불참', '체크전']"
        ></v-select>
        <v-text-field
          v-model="reason"
          variant="outlined"
          label="사유"
        ></v-text-field>
        <v-btn type="submit" block class="bg-indigo-darken-2">체크하기</v-btn>
        <v-btn
          @click="() => (updateModal = false)"
          block
          class="mt-3 bg-amber-darken-2 text-white"
        >
          뒤로가기
        </v-btn>
      </v-form>
    </v-sheet>
  </v-dialog>
  <v-dialog
    v-model="checkModal"
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
          <v-btn @click="checkModal = false" class="bg-green-darken-4">
            확인
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import { Location } from '@/common/enums/location.enum'
import { AttendanceStatus } from '@/common/enums/attendanceStatus.enum'
import { Header } from 'vue3-easy-data-table'

const icon = ref('fas fa-table-list')
const title = ref('출석내용 변경')
const breadcumbs = ref([
  {
    title: '출석관리',
    disabled: false
  },
  {
    title: '출석내용 변경',
    disabled: false
  }
])

const headers: Header[] = [
  { text: '이름', value: 'People.name', sortable: true },
  { text: '입학년도', value: 'People.studentNo', sortable: true },
  { text: '날짜', value: 'date', sortable: true },
  { text: '운동위치', value: 'location', sortable: true },
  { text: '출석조사 응답', value: 'survey', sortable: true },
  { text: '실제출석', value: 'actual', sortable: true },
  { text: '수정하기', value: 'select' }
]

type AttendanceDTO = {
  id: number
  uid: string
  date: Date
  location: Location
  survey: AttendanceStatus
  checked: boolean
  isGame: boolean
  actual: AttendanceStatus | null
  reason: string | null
  People: {
    name: string
    studentNo: number
  }
}

const searchValue = ref()
const searchField = ref('People.name')
const items: Ref<AttendanceDTO[]> = ref([])

axiosInstance
  .get('/api/admin/attendance/list')
  .then((result) => {
    items.value = result.data
  })
  .catch((error) => {
    console.log(error)
    return false
  })

type UpdateDTO = {
  id: number
  location: Location
  survey: AttendanceStatus
  actual?: AttendanceStatus
  reason: string
}

const updateModal = ref(false)
const id = ref()
const location = ref()
const survey = ref()
const actual = ref()
const reason = ref()
const name = ref()
const studentNo = ref()

async function getUpdateModal(item: AttendanceDTO) {
  id.value = item.id
  location.value =
    item.location === Location.Integrated
      ? '통합'
      : item.location === Location.Seoul
      ? '명륜'
      : '율전'
  survey.value =
    item.survey === AttendanceStatus.Absent
      ? '불참'
      : item.survey === AttendanceStatus.Tardy
      ? '늦참'
      : '참석'
  actual.value =
    item.actual === AttendanceStatus.Absent
      ? '불참'
      : item.actual === AttendanceStatus.Tardy
      ? '늦참'
      : item.actual === AttendanceStatus.Present
      ? '참석'
      : '체크전'
  reason.value = item.reason
  name.value = item.People.name
  studentNo.value = item.People.studentNo
  updateModal.value = true
}

const checkModal = ref(false)
const checkResult = ref()
const checkTitle = ref()
const checkText = ref()

async function updateAttendance() {
  const updateDTO: UpdateDTO = {
    id: id.value,
    location:
      location.value === '통합'
        ? Location.Integrated
        : location.value === '명륜'
        ? Location.Seoul
        : Location.Suwon,
    survey:
      survey.value === '참석'
        ? AttendanceStatus.Present
        : survey.value === '늦참'
        ? AttendanceStatus.Tardy
        : AttendanceStatus.Absent,
    reason: reason.value
  }

  if (actual.value !== '체크전') {
    updateDTO.actual =
      actual.value === '참석'
        ? AttendanceStatus.Present
        : actual.value === '늦참'
        ? AttendanceStatus.Tardy
        : AttendanceStatus.Absent
  }

  const result = await axiosInstance
    .patch('/api/admin/attendance/update', updateDTO)
    .then((result) => result.data)
    .catch((error) => {
      console.log(error)
      return false
    })

  if (result) {
    items.value.forEach((item) => {
      if (item.id === result.id) {
        item.location = result.locaiton
        item.survey = result.survey
        item.actual = result.actual
        item.reason = result.reason
      }
    })
    checkResult.value = 'success'
    checkTitle.value = '성공'
    checkText.value = '업데이트 성공'
  } else {
    checkResult.value = 'error'
    checkTitle.value = '실패'
    checkText.value = '업데이트 실패'
  }

  checkModal.value = true
  updateModal.value = false
}
</script>

<style>
.attendance-update-table-mo {
  --easy-table-header-font-size: 12px;
  --easy-table-header-height: 50px;
  --easy-table-header-item-padding: 10px 7px;

  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 11px;
  --easy-table-body-row-font-weight: 700;

  --easy-table-body-row-hover-font-color: #e8eaf6;
  --easy-table-body-row-hover-background-color: #3949ab;

  --easy-table-body-item-padding: 10px 7px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 5px;
  --easy-table-rows-per-page-selector-z-index: 1;
}
</style>
