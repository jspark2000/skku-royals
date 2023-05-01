<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-5 pb-10">
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
            class="ms-4 mt-3 w-50"
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
              <template #item-modify="item">
                <v-btn @click="getInjuryModal(item)" class="bg-amber-lighten-2">
                  <v-icon icon="fas fa-pencil" size="12px"></v-icon>
                </v-btn>
              </template>
            </EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="modal">
      <v-sheet class="mx-auto pa-10 w-100">
        <h5 class="text-h6 font-weight-bold mb-5">부상정보 수정</h5>
        <v-form @submit.prevent @submit="updateInjury()">
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
            disabled
          ></v-text-field>
          <v-text-field
            v-model="studentNo"
            variant="outlined"
            type="number"
            label="학번"
            disabled
          ></v-text-field>
          <v-text-field
            v-model="description"
            variant="outlined"
            label="부상내용"
          ></v-text-field>
          <v-text-field
            v-model="startDate"
            variant="outlined"
            type="date"
            label="부상시점"
          ></v-text-field>
          <v-text-field
            v-model="endDate"
            variant="outlined"
            type="date"
            label="복귀시점"
          ></v-text-field>
          <v-btn type="submit" block class="bg-amber-lighten-2">수정하기</v-btn>
          <v-btn
            @click="() => (modal = false)"
            block
            class="mt-3 bg-green-lighten-2"
          >
            뒤로가기
          </v-btn>
        </v-form>
      </v-sheet>
    </v-dialog>
    <v-dialog v-model="errorModal" width="auto">
      <v-alert type="error" title="ERROR" border>
        {{ errorMsg }}
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
const errorMsg = ref('')

const season = ref(new Date().getFullYear())
const icon = ref('fas fa-user-gear')
const title = ref('부상정보 수정')
const breadcumbs = ref([
  {
    title: '부원관리',
    disabled: false
  },
  {
    title: '부상정보 수정',
    disabled: false
  }
])

const items: Ref<PeopleResponseDTO[]> = ref([])
const headers: Header[] = [
  { text: '이름', value: 'name', sortable: true },
  { text: '학번', value: 'studentNo', sortable: true },
  { text: '부상내용', value: 'description', sortable: true },
  { text: '부상시점', value: 'startDate', sortable: true },
  { text: '복귀시점', value: 'endDate', sortable: true },
  { text: '수정', value: 'modify' }
]

type PeopleResponseDTO = {
  id: number
  name: string
  studentNo: number
  description: string
  startDate: string
  endDate: string
}

const targetId = ref()
const name = ref()
const studentNo = ref()
const description = ref()
const startDate = ref()
const endDate = ref()

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

async function getInjuryModal(item: PeopleResponseDTO) {
  targetId.value = item.id
  name.value = item.name
  studentNo.value = item.studentNo
  description.value = item.description
  startDate.value = item.startDate.slice(0, 10)
  endDate.value = item.endDate.slice(0, 10)

  modal.value = true
}

async function updateInjury() {
  if (new Date(startDate.value) > new Date(endDate.value)) {
    errorMsg.value = '복귀 시점이 부상 시점보다 빠릅니다'
    errorModal.value = true
  } else {
    const updateDTO = {
      description: description.value,
      startDate: startDate.value,
      endDate: endDate.value
    }

    const result = await axiosInstance
      .patch(`/api/injury/${targetId.value}`, updateDTO)
      .then((result) => result.data)
      .catch((error) => {
        console.log(error)
        errorMsg.value = error.response.data.message ?? '알 수 없는 오류 발생'
        errorModal.value = true
        return false
      })
      .finally(() => (modal.value = false))

    if (result) {
      console.log(result)
      items.value.forEach((item) => {
        if (item.id === result.id) {
          item.description = result.description
          item.startDate = result.startDate.slice(0, 10)
          item.endDate = result.endDate.slice(0, 10)
        }
      })
      successModal.value = true
    }
  }
}
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
