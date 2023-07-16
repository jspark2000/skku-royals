<template>
  <v-responsive v-if="mobile" class="px-4 py-3">
    <v-row align="center">
      <v-col cols="4" class="font-weight-bold text-body-1">
        {{ props.title }}
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="8">
        <v-breadcrumbs
          :items="props.items"
          class="font-weight-medium text-caption justify-end"
        >
          <template v-slot:prepend>
            <v-icon size="small" :icon="props.icon"></v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
  </v-responsive>
  <v-responsive v-else class="px-10 py-5">
    <v-row align="center">
      <v-col cols="4" class="font-weight-bold text-h6">
        {{ props.title }}
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="8">
        <v-breadcrumbs :items="props.items" class="text-subtitle-2 justify-end">
          <template v-slot:prepend>
            <v-icon size="small" :icon="props.icon"></v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
const props = defineProps({
  icon: String,
  title: String,
  items: Array<{ title: string }>
})

const { mobile } = useDisplay()
</script>

<style scoped></style>
