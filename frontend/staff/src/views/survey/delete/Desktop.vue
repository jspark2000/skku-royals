<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-10 py-5">
    <v-row>
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
                  class="bg-red-darken-2"
                  icon="fas fa-trash-can"
                  rounded="lg"
                  @click="deleteSurveyGroup(item.id)"
                  size="x-small"
                ></v-btn>
              </template>
            </EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogFailed" width="400">
      <v-card>
        <v-card-title class="text-center text-red-darken-2">
          <v-icon class="align-center" icon="fas fa-check"></v-icon>
        </v-card-title>
        <v-card-text class="text-center">
          {{ dialogMessage }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialogFailed = false">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogSuccess" width="400">
      <v-card>
        <v-card-title class="text-center text-amber-accent-2">
          <v-icon
            class="align-center"
            icon="fas fa-triangle-exclamation"
          ></v-icon>
        </v-card-title>
        <v-card-text class="text-center">
          {{ dialogMessage }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialogSuccess = false">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import { Header } from 'vue3-easy-data-table'
import { Ref } from 'vue'

const icon = ref('fas fa-magnifying-glass')
const title = ref('출석조사 삭제')
const breadcumbs = ref([
  {
    title: '출석조사',
    disabled: false
  },
  {
    title: '출석조사 삭제',
    disabled: false
  }
])

type SurveyGroup = {
  id: number
  name: string
}

axiosInstance
  .get('/api/survey/list')
  .then((result) => (items.value = result.data))
  .catch(() => undefined)

const items: Ref<SurveyGroup[]> = ref([])

const headers: Header[] = [
  { text: '출석조사 이름', value: 'name', sortable: true },
  { text: '삭제', value: 'select', sortable: true }
]

const dialogFailed = ref(false)
const dialogSuccess = ref(false)
const dialogMessage = ref()

async function deleteSurveyGroup(id: number) {
  const result = await axiosInstance
    .delete(`/api/admin/survey/${id}`)
    .then((result) => {
      items.value = items.value.filter((item) => {
        return item.id !== result.data.id
      })
      dialogMessage.value = '삭제 성공'
      return result.data
    })
    .catch((error) => {
      dialogMessage.value =
        error.response.data.message ?? '알 수 없는 오류 발생'
      return false
    })

  if (result) {
    dialogSuccess.value = true
  } else {
    dialogFailed.value = true
  }
}
</script>
