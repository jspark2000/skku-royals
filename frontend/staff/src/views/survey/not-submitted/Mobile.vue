<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-5 pb-10">
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
              table-class-name="attendance-date-table"
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
              table-class-name="attendance-date-table"
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
