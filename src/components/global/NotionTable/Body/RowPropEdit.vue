<script setup lang="ts">
const props = defineProps<{
  type: string
  value: unknown
  isEditing: boolean
}>()
const emit = defineEmits(['update:isEditing', 'updateProp'])
const inputValue = ref(String(props.value))
const input = ref<HTMLInputElement|null>(null)

watch(() => props.isEditing, (isEditing) => {
  if (isEditing) {
    nextTick(() => {
      const textLength = inputValue.value.length

      input.value?.focus()
      input.value?.setSelectionRange(textLength, textLength)
    })
  }
})

function updateValue (value?: string) {
  emit('update:isEditing', false)

  if (value !== undefined) {
    emit('updateProp', value)
  }
}

function onKeyup (event: KeyboardEvent) {
  switch (event.code) {
    case 'Escape':
      updateValue()
      break
    case 'Enter':
    case 'Tab':
      updateValue(inputValue.value as string)
      break
  }
}
</script>

<template>
  <input
    v-show="isEditing"
    ref="input"
    v-model="inputValue"
    :type="type"
    @blur="isEditing && updateValue()"
    @keydown.tab.prevent
    @keyup="onKeyup($event)"
  >
</template>

<style scoped lang="scss">
input {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  outline: 0;
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
  padding: 6px 9px;
  font-size: 14px;
  z-index: 1;

  appearance: textfield;
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
}
</style>
