<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-10 py-5">
    <v-row>
      <v-col cols="6">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            시합 목록 테이블
          </v-card-title>
          <v-card-text class="font-weight-medium">
            <EasyDataTable
              :headers="headers"
              :items="items"
              :rows-per-page="10"
              table-class-name="game-delete-table"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #item-date="item">
                {{ item.date.substring(0, 10) }}
              </template>
              <template #item-delete="item">
                <v-btn @click="getGameModal(item)" class="bg-red-darken-2">
                  <v-icon icon="fas fa-trash-can" size="12px"></v-icon>
                </v-btn>
              </template>
            </EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="modal" width="auto">
      <v-sheet width="400" class="mx-auto pa-10">
        <h5 class="text-h6 font-weight-bold mb-3">시합정보 삭제하기</h5>
        <p class="mb-5">삭제할 시합명을 정확하게 입력해주세요</p>
        <v-form ref="form" @submit.prevent @submit="deleteGame()">
          <v-text-field
            v-model="validation"
            variant="outlined"
            :label="gameName"
            :rules="[(v: any) => v === gameName || '시합명을 정확하게 입력해주세요']"
          ></v-text-field>
          <v-btn type="submit" block class="bg-red-darken-2 mt-3">
            삭제하기
          </v-btn>
          <v-btn @click="closeModal()" block class="mt-3 bg-green-darken-2">
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
import { ref, Ref, onMounted } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import { Header } from 'vue3-easy-data-table'

const modal = ref(false)
const errorModal = ref(false)
const successModal = ref(false)
const targetId = ref()
const validation = ref()
const form = ref()
const gameName = ref()

const icon = ref('fas fa-football')
const title = ref('시합정보 삭제')
const breadcumbs = ref([
  {
    title: '시합관리',
    disabled: false
  },
  {
    title: '시합정보 삭제',
    disabled: false
  }
])

const items: Ref<GameDTO[]> = ref([])
const headers: Header[] = [
  { text: '시합명', value: 'name' },
  { text: '시합날짜', value: 'date' },
  { text: '삭제하기', value: 'delete' }
]

onMounted(async () => {
  const attendances: GameDTO[] = await axiosInstance
    .get('/api/game/list')
    .then((result) => {
      console.log(result.data)
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

type GameDTO = {
  id: number
  name: string
  date: string
}

function closeModal() {
  modal.value = false
}

function getGameModal(item: GameDTO) {
  targetId.value = item.id
  gameName.value = item.name

  modal.value = true
}

async function deleteGame() {
  const check = await form.value.validate()
  if (check.valid) {
    const result = await axiosInstance
      .delete(`/api/admin/game/${targetId.value}`)
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
</script>

<style>
.game-delete-table {
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
