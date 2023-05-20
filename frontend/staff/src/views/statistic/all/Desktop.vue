<template>
  <bread-crumb :title="title" :items="breadcumbs" :icon="icon" />
  <v-responsive class="d-flex px-10 py-5">
    <v-row>
      <v-col cols="6">
        <v-card class="pa-2" elevation="3">
          <v-card-title class="text-indigo-darken-4">
            출석 통계 불러오기
          </v-card-title>
          <v-form
            ref="form"
            @submit.prevent
            @submit="getAllStatistic()"
            class="pa-5"
          >
            <v-text-field
              v-model="start"
              variant="outlined"
              type="date"
              label="시작날짜"
              clearable
              :rules="[(v: any) => !!v || '필수 입력 항목입니다']"
            ></v-text-field>
            <v-text-field
              v-model="end"
              variant="outlined"
              type="date"
              label="종료날짜"
              :rules="[(v: any) => !!(v.length === 10) || '필수 입력 항목입니다']"
            ></v-text-field>
            <v-btn type="submit" block class="bg-green-darken-1">
              불러오기
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="errorModal" width="auto">
      <v-alert type="error" title="ERROR" border>
        {{ errorMsg }}
      </v-alert>
    </v-dialog>
  </v-responsive>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BreadCrumb from '@/components/Breadcrumbs.vue'
import { axiosInstance } from '@/common/store/auth'
import ExcelJS from 'exceljs'

const icon = ref('fas fa-chart-simple')
const title = ref('전체 출석 통계')
const breadcumbs = ref([
  {
    title: '출석통계',
    disabled: false
  },
  {
    title: '전체 출석 통계',
    disabled: false
  }
])

const errorModal = ref(false)
const errorMsg = ref('알 수 없는 오류 발생')

const form = ref()

const start = ref()
const end = ref()

async function getAllStatistic() {
  const check = await form.value.validate()

  if (check.valid) {
    if (start.value < end.value) {
      const params = {
        start: start.value,
        end: end.value
      }
      const result = await axiosInstance
        .get(`/api/statistic/people/all`, { params })
        .then((result) => result.data)
        .catch((error) => {
          errorMsg.value = error.response.data.message ?? '알 수 없는 오류 발생'
          return false
        })

      if (result) {
        console.log(result)
        const workbook = new ExcelJS.Workbook()
        workbook.creator = 'staff-team'
        workbook.lastModifiedBy = 'staff-team'
        workbook.created = new Date()
        workbook.modified = new Date()
        const worksheetA = workbook.addWorksheet('출석통계(재학생)')
        const worksheetB = workbook.addWorksheet('출석통계(신입생)')

        const columns = [
          {
            header: '이름',
            key: 'name'
          },
          {
            header: '학번',
            key: 'studentNo'
          },
          {
            header: '오펜스',
            key: 'offPosition'
          },
          {
            header: '디펜스',
            key: 'defPosition'
          },
          {
            header: '전체',
            key: 'total'
          },
          {
            header: '출석률',
            key: 'percentage'
          },
          {
            header: '참석',
            key: 'present'
          },
          {
            header: '불참',
            key: 'absent'
          }
        ]

        worksheetA.columns = columns
        worksheetA.insertRows(
          2,
          result.filter((item: any) => !item.newbie)
        )
        worksheetB.insertRows(
          2,
          result.filter((item: any) => item.newbie)
        )

        const buffer = await workbook.xlsx.writeBuffer()
        const blob = new Blob([buffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        })
        const url = window.URL.createObjectURL(blob)
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.download = `${start.value}~${end.value} 전체 부원 출석결과.xlsx`
        anchor.click()
        window.URL.revokeObjectURL(url)
      } else {
        errorModal.value = true
      }
    }
  }
}
</script>
<style></style>
