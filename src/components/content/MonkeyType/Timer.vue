<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { GameStatus } from './types'

const props = defineProps<{
  gameStatus: GameStatus;
}>()
const { gameStatus } = toRefs(props)
// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'timeout'): void;
}>()

const timer = ref(30)

function start () {
  timer.value = 30

  const intervalId = setInterval(() => {
    timer.value--

    if (timer.value === 0) {
      clearInterval(intervalId)
      emit('timeout')
    }
  }, 1000)
}

watch(gameStatus, (gameStatus) => {
  if (gameStatus === 'playing') { start() }
})
</script>

<template>
  <p>{{ timer }}</p>
</template>
