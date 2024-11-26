<script setup lang="ts">
import { Table } from '../types'

const props = defineProps<{
  properties: Table['properties'];
  selectAll: boolean
}>()
const emit = defineEmits(['update:selectAll'])

const selectAll = computed({
  get () {
    return props.selectAll
  },
  set (value) {
    emit('update:selectAll', value)
  }
})
</script>

<template>
  <thead>
    <tr>
      <th>
        <div class="col-header">
          <input v-model="selectAll" type="checkbox">
        </div>
      </th>

      <NotionTableHeadHeader
        v-for="(property, index) of properties"
        :key="index"
        :property="property"
      />

      <th>
        <div class="col-header">
          <div class="icon">
            <Icon name="ic:baseline-add" />
          </div>
        </div>
      </th>
    </tr>
  </thead>
</template>

<style lang="scss">
thead {
  th {
    padding: 0;

    &:not(:last-child) {
      width: 1px;
    }
  }

  .col-header {
    width: 100%;
    height: 32px;
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    user-select: none;
    cursor: pointer;
    display: flex;
    gap: 6px;

    & > * {
      font-weight: normal;
      color: rgba(55, 53, 47, 0.65);
      font-size: 14px;
      line-height: 16.8px;
    }

    &:not(:has(input[type="checkbox"])):hover {
      background-color: rgba(55, 53, 47, 0.08);
    }

    .icon,
    svg {
      width: 16px;
      color: rgba(55, 53, 47, 0.45);
    }
  }
}
</style>
