<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-5 pb-10">
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
            class="ms-4 mt-3 w-50"
            clearable
          ></v-text-field>
          <v-tabs v-model="tab" class="ms-4" bg-color="white">
            <v-tab value="ALL" @click="filterPeople('ALL')">전체</v-tab>
            <v-tab value="Present" @click="filterPeople('Present')">
              재학생
            </v-tab>
            <v-tab value="Newbie" @click="filterPeople('Newbie')">신입생</v-tab>
            <v-tab value="Absence" @click="filterPeople('Absence')">
              휴학생
            </v-tab>
            <v-tab value="No" @click="filterPeople('No')">
              출석체크 비대상자
            </v-tab>
          </v-tabs>
          <v-card-text class="font-weight-medium">
            <EasyDataTable
              ref="peopleTable"
              :headers="headers"
              :items="filteredPeople"
              :rows-per-page="10"
              :search-value="searchValue"
              table-class-name="attendance-table-mo"
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
            </EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref, watchEffect, Ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import { Header } from 'vue3-easy-data-table'
import EasyDataTable from 'vue3-easy-data-table'

const searchValue = ref()
const tab = ref('ALL')
const peopleTable = ref()

const season = ref(new Date().getFullYear())
const icon = ref('fas fa-people-group')
const title = ref('부원명단')
const breadcumbs = ref([
  {
    title: '부원관리',
    disabled: false
  },
  {
    title: '부원명단',
    disabled: false
  }
])

const items: Ref<PeopleResponseDTO[]> = ref([])
const headers: Header[] = [
  { text: '이름', value: 'name', sortable: true },
  { text: '학번', value: 'studentId', sortable: true },
  { text: '구분', value: 'newbie', sortable: true },
  { text: '상태', value: 'absence', sortable: true },
  { text: '오펜스', value: 'offPosition', sortable: true },
  { text: '디펜스', value: 'defPosition', sortable: true },
  { text: '스페셜', value: 'splPosition', sortable: true }
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
    filteredPeople.value = items.value
  }
})

const filteredPeople: Ref<PeopleResponseDTO[]> = ref([])

function filterPeople(value: string) {
  peopleTable.value.updatePage(1)
  if (value === 'ALL') {
    filteredPeople.value = items.value.filter((item) => item.attendanceTarget)
  } else if (value === 'Present') {
    filteredPeople.value = items.value.filter(
      (item) => item.attendanceTarget && !item.newbie
    )
  } else if (value === 'Newbie') {
    filteredPeople.value = items.value.filter(
      (item) => item.attendanceTarget && item.newbie
    )
  } else if (value === 'Absence') {
    filteredPeople.value = items.value.filter((item) => item.absence)
  } else if (value === 'No') {
    filteredPeople.value = items.value.filter((item) => !item.attendanceTarget)
  }
}
</script>

<style>
.attendance-table-mo {
  --easy-table-header-font-size: 12px;
  --easy-table-header-height: 50px;
  --easy-table-header-item-padding: 10px 10px;

  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 11px;

  --easy-table-body-row-hover-font-color: #e8eaf6;
  --easy-table-body-row-hover-background-color: #3949ab;

  --easy-table-body-item-padding: 10px 10px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;
}
</style>
