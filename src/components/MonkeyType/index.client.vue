<script setup lang="ts">
import english1k from './dictionaries/english_1k.json'
import { generateText } from './dictionaries/generate-text'
import type { GameStatus } from './types'

const text = generateText(english1k.words)

const gameStatus = ref<GameStatus>('idle')

function startGame () {
  if (gameStatus.value === 'idle') {
    gameStatus.value = 'playing'
  }
}
</script>

<template>
  <div id="monkey-type">
    <MonkeyTypeTimer
      :style="{ visibility: gameStatus === 'playing' ? 'visible' : 'hidden' }"
      :game-status
      @timeout="gameStatus = 'finished'"
    />

    <MonkeyTypeInput
      v-if="gameStatus !== 'finished'"
      :text
      @start-typing="startGame()"
    />
  </div>
</template>

<style scoped lang="scss">
#monkey-type {
  text-align: start;
  font-family: 'Geist Mono', Menlo, monospace;
  font-size: 2rem;

  & * {
    line-height: 3rem;
  }
}
</style>
