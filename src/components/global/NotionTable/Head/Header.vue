<script setup lang="ts">
import { Property } from '../../types'

defineProps<{
  property: Property
}>()
const edit = ref(false)
</script>

<template>
  <th>
    <div class="col-header" @click="edit = !edit">
      <div class="icon">
        <Icon name="teenyicons:pin-alt-solid" />
      </div>

      <span> {{ property.name }} </span>

      <NotionTableHeadPropertyEdit :show="edit" />
    </div>
  </th>
</template>

<style scoped lang="scss">
.col-header {
  position: relative;
}
</style>
