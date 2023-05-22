<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-4 pb-10">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            코칭스태프 명단
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
          <v-card-text class="font-weight-medium">
            <EasyDataTable
              :headers="headers"
              :items="items"
              :rows-per-page="10"
              :search-value="searchValue"
              table-class-name="coaching-staff-table-mo"
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
import { TeamRole } from '@/common/enums/teamRole.enum'

const searchValue = ref()

const season = ref(new Date().getFullYear())
const icon = ref('fas fa-user-gear')
const title = ref('코칭스태프 수정')
const breadcumbs = ref([
  {
    title: '부원관리',
    disabled: false
  },
  {
    title: '코칭스태프 수정',
    disabled: false
  }
])

const items: Ref<PeopleResponseDTO[]> = ref([])
const headers: Header[] = [
  { text: '이름', value: 'name', sortable: true },
  { text: '학번', value: 'admissionYear', sortable: true },
  { text: '직책', value: 'teamRole', sortable: true },
  { text: '담당 포지션', value: 'position', sortable: true }
]

type PeopleResponseDTO = {
  id: number
  name: string
  teamRole: TeamRole
  admissionYear: number
  position: string
}

watchEffect(async () => {
  const coachingStaff: PeopleResponseDTO[] = await axiosInstance
    .get('/api/people/coaching-staff/list')
    .then((result) => {
      return result.data
    })
    .catch((error) => {
      console.log(error)
      return false
    })

  if (coachingStaff) {
    items.value = coachingStaff
  }
})
</script>

<style>
.coaching-staff-table-mo {
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
