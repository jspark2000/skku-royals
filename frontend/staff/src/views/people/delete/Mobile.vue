<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-4 pb-10">
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
            class="w-50 ms-4 mt-3"
            clearable
          ></v-text-field>
          <v-card-text class="font-weight-medium">
            <EasyDataTable
              :headers="headers"
              :items="items"
              :rows-per-page="10"
              :search-value="searchValue"
              table-class-name="attendance-table-mo"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #item-delete="item">
                <v-btn
                  icon="fas fa-trash-can"
                  rounded="lg"
                  size="x-small"
                  @click="getPeopleModal(item)"
                  class="bg-red-darken-2"
                ></v-btn>
              </template>
            </EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="modal" width="auto">
      <v-sheet class="w-100 pa-10 mx-auto">
        <h5 class="text-h6 font-weight-bold mb-3">부원 삭제하기</h5>
        <p class="mb-5">삭제할 부원의 이름을 정확하게 입력해주세요</p>
        <v-form ref="form" @submit.prevent @submit="deletePeople()">
          <v-text-field
            v-model="validation"
            variant="outlined"
            :label="name"
            :rules="[(v: any) => v === name || '이름을 정확하게 입력해주세요']"
          ></v-text-field>
          <v-btn type="submit" block class="bg-red-darken-2 mt-3">
            삭제하기
          </v-btn>
          <v-btn @click="closeModal()" block class="bg-green-darken-2 mt-3">
            뒤로가기
          </v-btn>
        </v-form>
      </v-sheet>
    </v-dialog>
    <v-dialog v-model="errorModal" width="auto">
      <v-alert type="error" title="ERROR" border>오류가 발생했습니다.</v-alert>
    </v-dialog>
    <v-dialog v-model="successModal" width="auto">
      <v-alert type="success" title="SUCCESS" border>
        성공적으로 삭제 했습니다.
      </v-alert>
    </v-dialog>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref, watchEffect, Ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import { Header } from 'vue3-easy-data-table'

const searchValue = ref()

const modal = ref(false)
const errorModal = ref(false)
const successModal = ref(false)
const targetId = ref()
const name = ref()
const validation = ref()
const form = ref()

const season = ref(new Date().getFullYear())
const icon = ref('fas fa-user-gear')
const title = ref('부원삭제')
const breadcumbs = ref([
  {
    title: '부원관리',
    disabled: false
  },
  {
    title: '부원삭제',
    disabled: false
  }
])

const items: Ref<PeopleResponseDTO[]> = ref([])
const headers: Header[] = [
  { text: '이름', value: 'name', sortable: true },
  { text: '입학년도', value: 'studentNo', sortable: true },
  { text: '삭제하기', value: 'delete' }
]

type PeopleResponseDTO = {
  id: number
  name: string
  studentNo: number
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
    modal.value = true
  }
}

async function deletePeople() {
  const check = await form.value.validate()
  if (check.valid) {
    const result = await axiosInstance
      .delete(`/api/admin/people/${targetId.value}`)
      .then((result) => result.data)
      .catch((error) => {
        console.log(error)
        errorModal.value = true
      })
      .finally(() => (modal.value = false))

    if (result) {
      items.value = items.value.filter((item) => item.id !== targetId.value)
      successModal.value = true
    }
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
.attendance-table-mo {
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
