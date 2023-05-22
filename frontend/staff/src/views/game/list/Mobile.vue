<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="px-4 pb-10">
    <v-row>
      <v-col cols="12">
        <v-card rounded="lg" class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            시합 목록
            <v-card-subtitle class="d-inline px-0"> </v-card-subtitle>
          </v-card-title>
          <v-card-text class="font-weight-medium mt-lg-3">
            <EasyDataTable
              ref="positionStatisticTable"
              :headers="gameListHeaders"
              :items="gameListItems"
              :rows-per-page="25"
              table-class-name="game-date-table-mo"
              theme-color="#1d90ff"
              show-index
              alternating
            >
              <template #item-select="item">
                <v-btn
                  class="bg-blue-darken-2"
                  @click="move(item.id)"
                  icon="fas fa-magnifying-glass"
                  rounded="lg"
                  size="x-small"
                ></v-btn>
              </template>
              <template #item-date="item">
                {{ item.date.substring(0, 10) }}
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
import { Header } from 'vue3-easy-data-table'
import { Ref } from 'vue'
import { axiosInstance } from '@/common/store/auth'
import { useRouter } from 'vue-router'

const icon = ref('fas fa-football')
const title = ref('시합정보 조회')
const breadcumbs = ref([
  {
    title: '시합관리',
    disabled: false
  },
  {
    title: '시합정보 조회',
    disabled: false
  }
])

type GameListItem = {
  id: number
  name: string
  date: string
}

const gameListHeaders: Header[] = [
  { text: '시합명', value: 'name', sortable: true },
  { text: '날짜', value: 'date' },
  { text: '선택', value: 'select' }
]

const gameListItems: Ref<GameListItem[]> = ref([])

const router = useRouter()

axiosInstance
  .get('/api/game/list')
  .then((result) => (gameListItems.value = result.data))

function move(id: number) {
  router.push(`/game/list/${id}`)
}
</script>
<style>
.game-date-table-mo {
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
