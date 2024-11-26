<script setup lang="ts">
import type { PageWithProps, Property } from '../types'

const props = defineProps<{
  properties: Property[];
  pages: PageWithProps[];
  selecteds: boolean[];
}>()
const emit = defineEmits(['update:pages', 'update:selecteds'])

const pagesModel = computed({
  get () {
    return props.pages
  },
  set (value) {
    emit('update:pages', value)
  }
})
const selectedRows = computed({
  get () {
    return props.selecteds
  },
  set (value) {
    emit('update:selecteds', value)
  }
})
</script>

<template>
  <tbody>
    <NotionTableBodyRow
      v-for="(_, idx) of pagesModel"
      :key="idx"
      v-model:page="pagesModel[idx]"
      v-model:selected="selectedRows[idx]"
      :properties="properties"
    />
  </tbody>
</template>

<style lang="scss">
tbody {
  td,
  th {
    font-size: 14px;
    padding: 5px 8px;
    cursor: pointer;
  }

  th {
    font-weight: 500;
  }

}
</style>
