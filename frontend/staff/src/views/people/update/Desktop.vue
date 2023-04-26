<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-10 py-5">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            부원 명단 테이블
            <v-card-subtitle class="d-inline px-0">
              | {{ season }} season
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
          <v-card-text class="font-weight-medium">
            <EasyDataTable
              :headers="headers"
              :items="items"
              :search-value="searchValue"
              table-class-name="attendance-table"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #item-newbie="item">
                {{ item.newbie ? '신입생' : '재학생' }}
              </template>
              <template #item-absence="item">
                {{ item.absence ? '휴학' : '재학' }}
              </template>
              <template #item-attendanceTarget="item">
                {{ item.attendanceTarget ? 'O' : 'X' }}
              </template>
              <template #item-modify="item">
                <v-btn @click="getPeopleModal(item)" class="bg-amber-lighten-2">
                  <v-icon icon="fas fa-pencil" size="12px"></v-icon>
                </v-btn>
              </template>
            </EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="modal">
      <v-sheet width="300" class="mx-auto pa-10 w-50">
        <v-form @submit.prevent @submit="updatePeople()">
          <v-text-field
            v-model="targetId"
            variant="outlined"
            label="id"
            disabled
          ></v-text-field>
          <v-text-field
            v-model="name"
            variant="outlined"
            label="이름"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="studentId"
            variant="outlined"
            type="number"
            label="학번"
          ></v-text-field>
          <v-text-field
            v-model="year"
            variant="outlined"
            type="number"
            label="입부년도"
          ></v-text-field>
          <v-select
            v-model="attendanceTarget"
            variant="outlined"
            label="출석대상"
            :items="['O', 'X']"
          ></v-select>
          <v-select
            v-model="newbie"
            variant="outlined"
            label="구분"
            :items="['재학생', '신입생']"
          ></v-select>
          <v-select
            v-model="absence"
            variant="outlined"
            label="상태"
            :items="['재학', '휴학']"
          ></v-select>
          <v-select
            v-model="offPosition"
            variant="outlined"
            label="오펜스포지션"
            :items="['STAFF', 'QB', 'OL', 'WR', 'RB']"
          ></v-select>
          <v-select
            v-model="defPosition"
            variant="outlined"
            label="디펜스포지션"
            :items="['STAFF', 'DL', 'LB', 'DB', 'HYB']"
          ></v-select>
          <v-select
            v-model="splPosition"
            variant="outlined"
            label="스페셜포지션"
            :items="['STAFF', 'NORMAL', 'KICKER', 'RETURNER', 'SNAPPER']"
          ></v-select>
          <v-btn type="submit" block class="bg-amber-lighten-2">수정하기</v-btn>
          <v-btn @click="closeModal()" block class="mt-3 bg-green-lighten-2">
            뒤로가기
          </v-btn>
        </v-form>
      </v-sheet>
    </v-dialog>
    <v-dialog v-model="errorModal" width="auto">
      <v-alert type="error" title="ERROR" border>
        요청을 처리하는중 오류가 발생했습니다.
      </v-alert>
    </v-dialog>
    <v-dialog v-model="successModal" width="auto">
      <v-alert type="success" title="SUCCESS" border>
        성공적으로 업데이트 했습니다.
      </v-alert>
    </v-dialog>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref, watchEffect, Ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import { Header } from 'vue3-easy-data-table'
import EasyDataTable from 'vue3-easy-data-table'

const searchValue = ref()

const modal = ref(false)
const errorModal = ref(false)
const successModal = ref(false)
const targetId = ref()
const name = ref()
const year = ref()
const studentId = ref()
const newbie = ref()
const absence = ref()
const attendanceTarget = ref()
const offPosition = ref()
const defPosition = ref()
const splPosition = ref()

const season = ref(new Date().getFullYear())
const icon = ref('fas fa-user-gear')
const title = ref('부원정보수정')
const breadcumbs = ref([
  {
    title: '부원관리',
    disabled: false
  },
  {
    title: '부원정보수정',
    disabled: false
  }
])

const items: Ref<PeopleResponseDTO[]> = ref([])
const headers: Header[] = [
  { text: '이름', value: 'name', sortable: true },
  { text: '학번', value: 'studentId', sortable: true },
  { text: '구분', value: 'newbie', sortable: true },
  { text: '입부년도', value: 'year', sortable: true },
  { text: '출석대상', value: 'attendanceTarget', sortable: true },
  { text: '상태', value: 'absence', sortable: true },
  { text: '오펜스', value: 'offPosition', sortable: true },
  { text: '디펜스', value: 'defPosition', sortable: true },
  { text: '스페셜', value: 'splPosition', sortable: true },
  { text: '수정', value: 'modify' }
]

type PeopleResponseDTO = {
  id: number
  name: string
  studentNo: number
  studentId: string
  attendanceTarget: boolean
  year: number
  newbie: boolean
  absence: boolean
  offPosition: string
  defPosition: string
  splPosition: string
}

function closeModal() {
  modal.value = false
}

async function getPeopleModal(item: PeopleResponseDTO) {
  const id = item.id
  const result: PeopleResponseDTO = await axiosInstance
    .get(`/api/admin/people/${id}`)
    .then((result) => result.data)
    .catch((error) => {
      console.log(error)
      errorModal.value = true
    })

  if (result) {
    targetId.value = item.id
    name.value = result.name
    studentId.value = result.studentId
    year.value = result.year
    attendanceTarget.value = result.attendanceTarget ? 'O' : 'X'
    newbie.value = result.newbie ? '신입생' : '재학생'
    absence.value = result.absence ? '휴학' : '재학'
    offPosition.value = result.offPosition
    defPosition.value = result.defPosition
    splPosition.value = result.splPosition
    modal.value = true
  }
}

async function updatePeople() {
  const updateDTO = {
    name: name.value,
    studentId: studentId.value,
    year: year.value,
    attendanceTarget: attendanceTarget.value === 'O' ? true : false,
    newbie: newbie.value === '재학생' ? false : true,
    absence: absence.value === '재학' ? false : true,
    offPosition: offPosition.value,
    defPosition: defPosition.value,
    splPosition: splPosition.value
  }

  const result = await axiosInstance
    .patch(`/api/admin/people/${targetId.value}`, updateDTO)
    .then((result) => result.data)
    .catch((error) => {
      console.log(error)
      errorModal.value = true
    })
    .finally(() => (modal.value = false))

  if (result) {
    items.value.forEach((item) => {
      if (item.id === targetId.value) {
        item.name = name.value
        item.studentId = studentId.value
        item.attendanceTarget = attendanceTarget.value === 'O' ? true : false
        item.newbie = newbie.value === '신입생' ? true : false
        item.absence = absence.value === '재학' ? false : true
        item.year = year.value
        item.offPosition = offPosition.value
        item.defPosition = defPosition.value
        item.splPosition = splPosition.value
      }
    })
    successModal.value = true
  }
}

watchEffect(async () => {
  const attendances: PeopleResponseDTO[] = await axiosInstance
    .get('/api/people/list')
    .then((result) => {
      return result.data
    })
    .catch((error) => {
      console.log(error)
      return false
    })

  if (attendances) {
    items.value = attendances
  }
})
</script>

<style>
.attendance-table {
  --easy-table-header-font-size: 15px;
  --easy-table-header-height: 50px;
  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 13px;
  --easy-table-body-row-font-weight: 700;

  --easy-table-body-row-hover-font-color: #e8eaf6;
  --easy-table-body-row-hover-background-color: #3949ab;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;
}
</style>
