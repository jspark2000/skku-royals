<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-10 py-5">
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            삭제할 출석날짜 선택
            <v-card-subtitle class="d-inline px-0">
              | {{ season }} season
            </v-card-subtitle>
          </v-card-title>
          <v-card-text class="font-weight-medium mt-lg-3">
            <EasyDataTable
              :headers="headers"
              :items="items"
              :rows-per-page="10"
              table-class-name="attendance-delete-table"
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
                  class="bg-red-darken-2"
                  @click="getDeleteModal(item)"
                  icon="fas fa-trash-can"
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
      <v-sheet width="400" class="pa-10 mx-auto">
        <h5 class="text-h6 font-weight-bold mb-3">출석삭제</h5>
        <p class="text-body-2 mb-5">
          삭제할 출석의 날짜를 정확하게 입력해주세요
        </p>
        <v-form ref="form" @submit.prevent @submit="deleteAttendance()">
          <v-text-field
            v-model="checkInput"
            variant="outlined"
            :rules="[
              (v: any) => v === targetDate || '날짜를 정확하게 입력해주세요'
            ]"
            :label="targetDate"
          ></v-text-field>
          <v-btn type="submit" class="bg-red-darken-2 mt-3">삭제하기</v-btn>
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
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import { Header } from 'vue3-easy-data-table'

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
const season = ref(new Date().getFullYear())
const items: Ref<AttendanceDatesDTO[]> = ref([])
const checkModal = ref(false)
const checkInput = ref('')
const targetDate = ref('')

type AttendanceDatesDTO = {
  date: string
  isGame: boolean
}

const headers: Header[] = [
  { text: '운동날짜', value: 'date', sortable: true },
  { text: '시합여부', value: 'isGame', sortable: true },
  { text: '삭제', value: 'select' }
]

const icon = ref('fas fa-table-list')
const title = ref('출석정보 삭제')
const breadcumbs = ref([
  {
    title: '출석관리',
    disabled: false
  },
  {
    title: '출석정보 삭제',
    disabled: false
  }
])

async function getDeleteModal(item: AttendanceDatesDTO) {
  targetDate.value = item.date.slice(0, 10)
  checkModal.value = true
}

const form = ref()
const resultModal = ref(false)
const checkResult = ref()
const checkTitle = ref()
const checkText = ref()

async function deleteAttendance() {
  const result = await form.value.validate()
  if (result.valid) {
    const result = await axiosInstance
      .delete('/api/attendance', {
        data: {
          date: targetDate.value
        }
      })
      .then((result) => result.data)
      .catch((error) => {
        console.log(error)
        return false
      })

    console.log(result)

    if (result) {
      items.value = items.value.filter(
        (item) => item.date.slice(0, 10) !== targetDate.value
      )
      checkResult.value = 'success'
      checkTitle.value = '삭제 성공'
      checkText.value = `총 ${result.count}건 삭제되었습니다`
    } else {
      checkResult.value = 'error'
      checkTitle.value = '삭제 실패'
      checkText.value = `오류가 발생했습니다.`
    }

    checkModal.value = false
    resultModal.value = true
  }
}
</script>

<style>
.attendance-delete-table {
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
