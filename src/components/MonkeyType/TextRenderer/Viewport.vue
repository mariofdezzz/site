<script setup lang="ts">
import Word from './Word.vue'

const props = defineProps<{
  words: string[];
  currentWords: string[];
}>()
// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'wordLines', wordLines: number[]): void
}>()

const wordRefs = useTemplateRef('wordRef')
const wordTopPositions = ref<number[]>([])

const wordsZipped = computed(() =>
  props.words.map((word, index) => [word, props.currentWords[index] ?? ''])
)
const wordLines = computed(() => {
  let line = -1

  return wordTopPositions.value.map((pos, index) =>
    pos === wordTopPositions.value[index - 1] ? line : ++line
  )
})
const currentWordIndex = computed(() =>
  props.currentWords.length - 1
)
const renderedTextOffset = computed(() => {
  const offset = wordLines.value[currentWordIndex.value] - 1

  return offset < 0 ? 0 : offset
})

onMounted(() => {
  window.addEventListener('resize', setWordTopPositions)
  setWordTopPositions()
})

function setWordTopPositions () {
  wordTopPositions.value = wordRefs.value?.map(
    el => el?.$el.getBoundingClientRect().top ?? 0
  ) ?? []
}

watch(wordLines, wordLines => emit('wordLines', wordLines))
</script>

<template>
  <div id="viewport">
    <div id="viewport-rendered-text" :style="{ top: renderedTextOffset * -3 + 'rem' }">
      <Word
        v-for="([word, input], wordIndex) in wordsZipped"
        ref="wordRef"
        :key="wordIndex"
        :word="word"
        :input="input"
        :finished="wordIndex < currentWords.length - 1"
      />
    </div>
  </div>
</template>

<style scoped>
#viewport {
  width: 100%;
  height: calc(3rem * 4);
  overflow-y: hidden;
}

#viewport-rendered-text {
  display: flex;
  column-gap: 1ch;
  flex-wrap: wrap;
  position: relative;
  /* top: -9rem; */
}
</style>
