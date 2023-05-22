<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-4 pb-10">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            밴드 계정 테이블
          </v-card-title>
          <v-card-text class="font-weight-medium mt-lg-3">
            <EasyDataTable
              :headers="headers"
              :items="items"
              :rows-per-page="10"
              table-class-name="band-user-table-mo"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #item-profileUrl="item">
                <v-avatar size="30px">
                  <v-img :src="item.profileUrl"></v-img>
                </v-avatar>
              </template>
              <template #item-update="item">
                <v-btn
                  icon="fas fa-pencil"
                  rounded="lg"
                  size="x-small"
                  @click="getUpdateModal(item)"
                  class="bg-green-darken-2"
                ></v-btn>
              </template>
              <template #item-delete="item">
                <v-btn
                  icon="fas fa-trash-can"
                  rounded="lg"
                  size="x-small"
                  @click="getDeleteModal(item)"
                  class="bg-red-darken-2"
                ></v-btn>
              </template>
            </EasyDataTable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="modal">
      <v-sheet class="mx-auto w-100 pa-10">
        <v-form @submit.prevent @submit="updatePeople()">
          <v-text-field
            v-model="targetId"
            variant="outlined"
            label="id"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="name"
            variant="outlined"
            label="밴드 닉네임"
            clearable
          ></v-text-field>
          <v-select
            v-model="role"
            variant="outlined"
            label="권한"
            :items="['Newbie', 'Normal', 'Admin', 'SuperAdmin']"
          ></v-select>
          <v-btn type="submit" block class="bg-amber-lighten-2">변경하기</v-btn>
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
    <v-dialog v-model="deleteModal" width="auto">
      <v-sheet class="mx-auto pa-10">
        <h5 class="text-h6 font-weight-bold mb-3">밴드계정 삭제하기</h5>
        <p class="mb-5">삭제할 계정의 밴드 닉네임을 정확하게 입력해주세요</p>
        <v-form ref="form" @submit.prevent @submit="deletePeople()">
          <v-text-field
            v-model="checkName"
            variant="outlined"
            :label="name"
            :rules="[
              (v: any) => v === name || '밴드 닉네임을 정확하게 입력해주세요'
            ]"
          ></v-text-field>
          <v-btn type="submit" block class="bg-red-darken-2">삭제하기</v-btn>
          <v-btn
            @click="() => (deleteModal = false)"
            block
            class="mt-3 bg-indigo-darken-2"
          >
            뒤로가기
          </v-btn>
        </v-form>
      </v-sheet>
    </v-dialog>
    <v-dialog v-model="errorModal" width="auto">
      <v-alert type="error" title="ERROR" border>
        {{ errorMessage }}
      </v-alert>
    </v-dialog>
    <v-dialog v-model="successModal" width="auto">
      <v-alert type="success" title="SUCCESS" border>
        성공적으로 수정했습니다.
      </v-alert>
    </v-dialog>
    <v-dialog v-model="successDelete" width="auto">
      <v-alert type="success" title="SUCCESS" border>
        성공적으로 삭제했습니다.
      </v-alert>
    </v-dialog>
    <v-dialog v-model="loading" :scrim="false" persistent width="auto">
      <v-card color="primary">
        <v-card-text>
          요청을 처리하는 중입니다...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref, Ref, watchEffect } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { Header } from 'vue3-easy-data-table'
import { axiosInstance } from '@/common/store/auth'

const icon = ref('fas fa-lock')
const title = ref('권한관리')
const breadcumbs = ref([
  {
    title: '권한관리',
    disabled: false
  },
  {
    title: '권한변경',
    disabled: false
  }
])

type BandUserResponseDTO = {
  id: number
  userNickname: string
  profileUrl: string
  role: string
}

const items: Ref<BandUserResponseDTO[]> = ref([])
const headers: Header[] = [
  { text: '밴드 프로필', value: 'profileUrl' },
  { text: '밴드 닉네임', value: 'userNickname' },
  { text: '권한', value: 'role' },
  { text: '변경', value: 'update' },
  { text: '삭제', value: 'delete' }
]

watchEffect(async () => {
  const bandUsers: BandUserResponseDTO[] = await axiosInstance
    .get('/api/band/user/list')
    .then((result) => {
      return result.data
    })
    .catch((error) => {
      console.log(error)
      return false
    })

  if (bandUsers) {
    items.value = bandUsers
  }
})

const successModal = ref(false)
const errorModal = ref(false)
const deleteModal = ref(false)
const successDelete = ref(false)
const modal = ref(false)
const targetId = ref()
const name = ref()
const role = ref()
const checkName = ref()
const form = ref()
const loading = ref(false)
const errorMessage = ref('오류가 발생했습니다')

async function getUpdateModal(item: BandUserResponseDTO) {
  targetId.value = item.id
  name.value = item.userNickname
  role.value = item.role
  modal.value = true
}

async function getDeleteModal(item: BandUserResponseDTO) {
  targetId.value = item.id
  name.value = item.userNickname
  deleteModal.value = true
}

async function updatePeople() {
  loading.value = true

  const updateDTO = {
    id: targetId.value,
    name: name.value.trim(),
    role: role.value
  }

  const result = await axiosInstance
    .patch('/api/band/role', updateDTO)
    .then((result) => result.data)
    .catch((e) => {
      if (e.response.status === 400) {
        errorMessage.value = e.response.data.message
      }
      errorModal.value = true
      return false
    })
    .finally(() => (modal.value = false))

  loading.value = false

  if (result) {
    items.value.forEach((item) => {
      if (item.id === result.id) {
        item.role = result.role
        item.userNickname = result.userNickname
      }
    })
    successModal.value = true
  }
}

async function deletePeople() {
  const check = await form.value.validate()
  if (check.valid) {
    loading.value = true
    const result = await axiosInstance
      .delete(`/api/band/${targetId.value}`)
      .then((result) => result.data)
      .catch((e) => {
        if (e.response.status === 400) {
          errorMessage.value = e.response.data.message
        }
        errorModal.value = true
        return false
      })
      .finally(() => (deleteModal.value = false))

    loading.value = false
    if (result) {
      items.value = items.value.filter((item) => item.id !== result.id)
      successDelete.value = true
    }
  }
}
</script>
<style>
.band-user-table-mo {
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
