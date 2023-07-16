<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-4 pb-10">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            부상자 명단 테이블
            <v-card-subtitle class="d-inline px-0">
              | {{ season }} season
            </v-card-subtitle>
          </v-card-title>
          <v-text-field
            v-model="searchValue"
            density="comfortable"
            label="Search"
            variant="solo"
            class="w-50 ms-4 mt-3"
            clearable
          ></v-text-field>
          <v-card-text class="font-weight-medium">
            <EasyDataTable
              :headers="headers"
              :items="items"
              :rows-per-page="10"
              :search-value="searchValue"
              table-class-name="injury-table-mo"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #item-startDate="item">
                {{ item.startDate.slice(0, 10) }}
              </template>
              <template #item-endDate="item">
                {{ item.endDate.slice(0, 10) }}
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

const searchValue = ref()

const season = ref(new Date().getFullYear())
const icon = ref('fas fa-people-group')
const title = ref('부상자 명단')
const breadcumbs = ref([
  {
    title: '부원관리',
    disabled: false
  },
  {
    title: '부상자 명단',
    disabled: false
  }
])

const items: Ref<PeopleResponseDTO[]> = ref([])
const headers: Header[] = [
  { text: '이름', value: 'name', sortable: true },
  { text: '학번', value: 'studentNo', sortable: true },
  { text: '부상내용', value: 'description', sortable: true },
  { text: '부상시점', value: 'startDate', sortable: true },
  { text: '복귀시점', value: 'endDate', sortable: true }
]

type PeopleResponseDTO = {
  id: number
  name: string
  studentNo: number
  description: string
  startDate: Date
  endDate: Date
}

watchEffect(async () => {
  const injuries: PeopleResponseDTO[] = await axiosInstance
    .get('/api/injury/all')
    .then((result) => {
      return result.data
    })
    .catch((error) => {
      console.log(error)
      return false
    })

  if (injuries) {
    items.value = injuries
  }
})
</script>

<style>
.injury-table-mo {
  --easy-table-header-font-size: 12px;
  --easy-table-header-height: 50px;
  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 11px;
  --easy-table-body-row-font-weight: 700;

  --easy-table-body-row-hover-font-color: #e8eaf6;
  --easy-table-body-row-hover-background-color: #3949ab;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;
}
</style>
