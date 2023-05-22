<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-4 pb-10">
    <v-row>
      <v-col cols="12" md="6">
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
              table-class-name="attendance-date-table-mo"
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
                  @click="getAttendances(item.date)"
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
import { useRouter } from 'vue-router'

const router = useRouter()
const invalid = ref(false)
const errorMessage = ref('알 수 없는 오류 발생')

const tableLoading = ref(true)

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
  { text: '선택', value: 'select' }
]

axiosInstance
  .get('/api/attendance/date-list')
  .then((result) => {
    items.value = result.data.filter((item: any) => !item.isGame)
  })
  .catch((error) => {
    console.log(error)
    return false
  })
  .finally(() => (tableLoading.value = false))

function getAttendances(date: string) {
  router.push(`/attendance/list/${date.substring(0, 10)}`)
}
</script>

<style>
.attendance-date-table-mo {
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
