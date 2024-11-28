<script setup lang='ts'>
import { computed, ref } from 'vue'
import TextRenderer from './TextRenderer.vue'

const props = defineProps<{
  text: string;
}>()
// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'startTyping'): void;
}>()

const input = ref('')
const inputRef = ref<HTMLInputElement>()
const words = computed(() => props.text.split(' '))
const currentWords = computed(() => input.value.split(' '))
const isInputFocused = ref(true)
const showFocusHint = ref(false)
let lastFocusRequest: string | number | NodeJS.Timeout | undefined

function requestFocus () {
  isInputFocused.value = false

  lastFocusRequest = setTimeout(() => {
    showFocusHint.value = true
  }, 1000)
}

function focusInput () {
  inputRef.value?.focus()
}

function onFocusIn () {
  isInputFocused.value = true
  showFocusHint.value = false
  clearTimeout(lastFocusRequest)
}

onMounted(() => {
  window.addEventListener('keydown', (event) => {
    if (
      !inputRef.value?.matches(':focus') &&
      !event.metaKey &&
      !['Enter', 'Tab', 'Control', 'Shift', 'Alt', 'Meta'].includes(event.key)
    ) {
      event.preventDefault()
      focusInput()
    }
  })
})

watch(input, (input, oldInput) => {
  if (input.length > 0 && oldInput.length === 0) {
    emit('startTyping')
  }
})
</script>

<template>
  <div
    id="text-renderer-wrapper"
    @click="focusInput()"
  >
    <div id="request-focus" :style="{ opacity: showFocusHint ? 1 : 0 }">
      Click here or press any key to focus
    </div>

    <TextRenderer :words :current-words :focused="isInputFocused" />
  </div>

  <input
    ref="inputRef"
    v-model="input"
    type="text"
    autofocus
    @focusout="requestFocus()"
    @focusin="onFocusIn()"
  >
</template>

<style scoped lang="scss">
input {
  height: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
}

#text-renderer-wrapper {
  position: relative;

  #request-focus {
    position: absolute;
    top: -10px;
    left: -20px;
    width: calc(100% + 40px);
    height: calc(100% + 20px);
    backdrop-filter: blur(10px);
    z-index: 1;
    user-select: none;
    transition: opacity ease-in-out 150ms;
    display: grid;
    place-items: center;
    font-size: 1.3rem;
  }
}
</style>
