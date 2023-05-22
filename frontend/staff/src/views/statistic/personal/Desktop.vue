<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-10 pb-10">
    <v-row>
      <v-col cols="12">
        <v-card rounded="lg" class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            통계를 확인할 부원 선택
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
              ref="peopleTable"
              :headers="headers"
              :items="filteredPeople"
              :rows-per-page="100"
              :search-value="searchValue"
              table-class-name="people-table"
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
              <template #item-select="item">
                <v-btn
                  class="bg-green-darken-1"
                  @click="getAttendanceStatistic(item.id)"
                  icon="fas fa-right-long"
                  rounded="lg"
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
import { ref, Ref, onMounted } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import { Header } from 'vue3-easy-data-table'
import { useRouter } from 'vue-router'

const searchValue = ref()
const peopleTable = ref()
const router = useRouter()
const icon = ref('fas fa-simple-chart')
const title = ref('개별 출석 통계')
const breadcumbs = ref([
  {
    title: '출석통계',
    disabled: false
  },
  {
    title: '개별 출석 통계',
    disabled: false
  }
])

const items: Ref<PeopleResponseDTO[]> = ref([])
const headers: Header[] = [
  { text: '이름', value: 'name', sortable: true },
  { text: '구분', value: 'newbie', sortable: true },
  { text: '입학년도', value: 'studentNo', sortable: true },
  { text: '오펜스', value: 'offPosition', sortable: true },
  { text: '디펜스', value: 'defPosition', sortable: true },
  { text: '선택', value: 'select' }
]

const filteredPeople: Ref<PeopleResponseDTO[]> = ref([])

type PeopleResponseDTO = {
  id: number
  name: string
  studentId: string
  studentNo: number
  attendanceTarget: boolean
  year: number
  newbie: boolean
  absence: boolean
  offPosition: string
  defPosition: string
  splPosition: string
}

onMounted(async () => {
  const attendances: PeopleResponseDTO[] = await axiosInstance
    .get('/api/people/list')
    .then((result) => {
      return result.data.filter(
        (item: PeopleResponseDTO) => item.attendanceTarget
      )
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

function getAttendanceStatistic(id: number) {
  router.push(`/statistic/personal/${id}`)
}
</script>

<style>
.people-table {
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
