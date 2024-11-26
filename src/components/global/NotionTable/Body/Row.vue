<script setup lang="ts">
import { PageWithProps, Property } from '../../types'

const props = defineProps<{
  selected: boolean;
  properties: Property[];
  page: PageWithProps;
}>()
const emit = defineEmits(['update:page', 'update:selected'])

const pageProps = computed({
  get () {
    return props.page.properties
  },
  set (value) {
    emit('update:page', value)
  }
})
const isSelected = computed({
  get () {
    return props.selected
  },
  set (value) {
    emit('update:selected', value)
  }
})
</script>

<template>
  <tr>
    <td>
      <div class="row-actions">
        <Icon name="ri:draggable" />
      </div>

      <input v-model="isSelected" type="checkbox">
    </td>

    <NotionTableBodyRowProp
      v-for="(value, index) of pageProps"
      :key="index"
      :property="properties[index]"
      :column-index="index"
      :value="value"
      @update:value="pageProps[index] = $event"
    />

    <td />
  </tr>
</template>
<style scoped lang="scss">
td:has(.row-actions) {
  position: relative;

  .row-actions {
    color: rgba(55, 53, 47, 0.35);
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: opacity ease-in-out 200ms;
  }

  input {
    vertical-align: baseline;
  }
}

tr:hover .row-actions {
  opacity: 1;
}
</style>
