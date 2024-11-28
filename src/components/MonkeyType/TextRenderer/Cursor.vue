<script setup lang="ts">
const props = defineProps<{
  words: string[];
  currentWords: string[];
  wordLines: number[];
  focused: boolean;
}>()

const blockCursor = ref(false)
let lastBlockedCursor: string | number | NodeJS.Timeout | undefined

const cursorWordIndex = computed(() =>
  props.currentWords.length - 1
)
const cursorLine = computed(() =>
  props.wordLines[cursorWordIndex.value] > 0 ? '3rem' : '0'
)

const currentWordsIndex = computed(() => {
  return props.wordLines.findIndex(line => line === props.wordLines[cursorWordIndex.value])
})
const cursorIndex = computed(
  () => {
    const wordsInLine = props.words?.slice(currentWordsIndex.value)
    const currentWordsInLine = props.currentWords?.slice(currentWordsIndex.value)

    return currentWordsInLine
      .slice(0, currentWordsInLine.length - 1)
      .map((word, index) =>
        wordsInLine[index].length > word.length ? wordsInLine[index] : word
      )
      .concat(currentWordsInLine.at(-1) ?? '')
      .join(' ').length
  })

function onType () {
  clearTimeout(lastBlockedCursor)
  blockCursor.value = true

  lastBlockedCursor = setTimeout(() => {
    blockCursor.value = false
  }, 500)
}

watch(cursorIndex, () => onType())
</script>

<template>
  <div
    id="cursor"
    :style="{ left: cursorIndex + 'ch', top: cursorLine }"
    :class="{ blink: focused, blocked: blockCursor }"
  />
</template>

<style scoped lang="scss">
#cursor {
  position: absolute;
  top: 0;
  transition: left ease-in-out 100ms;
}

#cursor {
  &::before {
    content: "|";
    color: rgb(255, 242, 0);
    font-size: 1.1em;
    position: absolute;
    top: -3px;
    left: -0.5ch;
    opacity: 0;
  }
  &.blink:not(.blocked)::before {
    animation: 1s blink infinite ease-in-out;
  }
  &.blocked::before {
    opacity: 1 !important;
  }
}

@keyframes blink {
  0%,
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0;
  }
}
</style>
