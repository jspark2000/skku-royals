<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-10 py-5">
    <v-row>
      <v-col cols="12" :class="{ 'd-none': show }">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            미응답자 명단
            <v-card-subtitle class="d-inline px-0">
              | {{ targetSurveyGroup }}
            </v-card-subtitle>
          </v-card-title>
          <v-card-text class="font-weight-medium mt-lg-3">
            <EasyDataTable
              ref="positionStatisticTable"
              :headers="peopleHeaders"
              :items="people"
              :rows-per-page="10"
              table-class-name="not-submitted-table"
              theme-color="#1d90ff"
              show-index
              alternating
            ></EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            출석조사 선택
          </v-card-title>
          <v-card-text class="font-weight-medium mt-lg-3">
            <EasyDataTable
              ref="attendanceCheckTableRef"
              :headers="headers"
              :items="items"
              :rows-per-page="10"
              table-class-name="not-submitted-table"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #item-select="item">
                <v-btn
                  class="bg-blue-darken-2"
                  icon="fas fa-magnifying-glass"
                  rounded="lg"
                  @click="getNotSubmitted(item)"
                  size="x-small"
                ></v-btn>
              </template>
            </EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import { Header } from 'vue3-easy-data-table'
import { Ref } from 'vue'

const show = ref(true)
const targetSurveyGroup = ref()

const icon = ref('fas fa-magnifying-glass')
const title = ref('미응답자 확인')
const breadcumbs = ref([
  {
    title: '출석조사',
    disabled: false
  },
  {
    title: '미응답자 확인',
    disabled: false
  }
])

type SurveyGroup = {
  id: number
  name: string
}

type NotSubmittedDTO = {
  id: number
  name: string
  studentNo: number
  Attendance: {
    date: Date
  }[]
}

axiosInstance
  .get('/api/survey/list')
  .then((result) => (items.value = result.data))
  .catch(() => undefined)

const items: Ref<SurveyGroup[]> = ref([])
const people: Ref<NotSubmittedDTO[]> = ref([])

const headers: Header[] = [
  { text: '출석조사 이름', value: 'name', sortable: true },
  { text: '선택', value: 'select', sortable: true }
]

const peopleHeaders: Header[] = [
  { text: '이름', value: 'name' },
  { text: '입학년도', value: 'studentNo' }
]

async function getNotSubmitted(item: SurveyGroup) {
  await axiosInstance
    .get(`/api/admin/survey/${item.id}/not-submitted`)
    .then((result) => {
      people.value = result.data
      targetSurveyGroup.value = item.name
      show.value = false
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>
<style>
.not-submitted-table {
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
