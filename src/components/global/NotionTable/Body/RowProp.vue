<script setup lang="ts">
import { Property } from '../../types'

defineProps<{
  property: Property
  columnIndex: number
  value: unknown
}>()
const emit = defineEmits(['update:value'])
const isEditing = ref(false)

function editValue () {
  isEditing.value = true
}
function updateProp (value: number | string) {
  emit('update:value', value)
}
</script>

<template>
  <component
    :is="columnIndex === 0 ? 'th' : 'td'"
    @click="editValue()"
  >
    <span>
      {{ value }}
    </span>

    <NotionTableBodyRowPropEdit
      v-model:is-editing="isEditing"
      :value="value"
      :type="property.type"
      @update-prop="updateProp($event)"
    />
  </component>
</template>

<style scoped lang="scss">
th,td {
  position: relative;
}
</style>
