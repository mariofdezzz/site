<script setup lang="ts">
import { useTableStore } from '~/store/notion/table'

const table = useTableStore()
const { selects, selectAll } = useSelectAll(table.pages.length)

</script>

<template>
  <table>
    <NotionTableHead v-model:select-all="selectAll" :properties="table.properties" />
    <NotionTableBody
      v-model:pages="table.pages"
      v-model:selecteds="selects"
      :properties="table.properties"
    />
  </table>
</template>

<style lang="scss">
table {
  border-collapse: collapse;
  border-spacing: 0;
  min-width: 100%;
  color: rgb(55, 53, 47);
  font-size: 14px;

  * {
    text-align: start;
    vertical-align: top;
  }

  tr {
    border-top: 1px solid rgb(233, 233, 231);
    border-bottom: 1px solid rgb(233, 233, 231);
  }

  td:has(input[type="checkbox"]),th:has(input[type="checkbox"]) {
    cursor: pointer;

    input[type="checkbox"] {
      cursor: pointer;

      &:not(:checked) {
        opacity: 0;
      }
    }

    &:hover input[type="checkbox"] {
      opacity: 1;
    }
  }

  tr:has(input[type="checkbox"]:checked) {
    background-color: rgba(35, 131, 226, 0.14);;
  }
}
</style>
