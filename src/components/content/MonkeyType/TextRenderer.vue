<script setup lang="ts">
import Cursor from './TextRenderer/Cursor.vue'
import Viewport from './TextRenderer/Viewport.vue'

defineProps<{
  words: string[];
  currentWords: string[];
  focused: boolean;
}>()

const wordLines = ref<number[]>([])

</script>

<template>
  <div id="text-renderer">
    <Viewport
      :words
      :current-words
      @word-lines="wordLines = $event"
    />

    <Cursor
      :words
      :current-words
      :word-lines
      :focused
    />
  </div>
</template>

<style scoped>
#text-renderer {
  position: relative;
}
</style>
