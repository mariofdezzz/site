<script setup lang="ts">
import { computed, ref } from 'vue'

const enum WordCheck {
  Correct = 'correct',
  Fail = 'fail',
}

const props = defineProps<{
  word: string;
  input: string;
  finished: boolean;
}>()

const element = ref<HTMLDivElement|null>(null)

const checks = computed(() =>
  props.input
    .split('')
    .map((char, index) =>
      props.word[index] === char ? WordCheck.Correct : WordCheck.Fail
    )
)
const wordFailed = computed(() =>
  checks.value.includes(WordCheck.Fail) ||
  (props.finished && props.input.length < props.word.length)
)
const extraLetters = computed(() =>
  props.input.split('').slice(props.word.length).join('')
)

</script>

<template>
  <div ref="element" class="word" :class="{ fail: wordFailed }">
    <span
      v-for="(char, idx) in word"
      :key="idx"
      class="letter"
      :class="[checks[idx]]"
    >
      {{ char }}
    </span>

    <span
      v-for="(char, idx) in extraLetters"
      :key="idx"
      class="letter fail"
    >
      {{ char }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.word.fail {
  text-decoration: underline;
  text-decoration-color: rgba(255, 0, 0, 0.5);
}

.letter {
  color: rgba(33, 53, 71, 0.5);

  &.correct {
    color: rgba(33, 53, 71, 1);
  }

  &.fail {
    color: rgba(255, 0, 0, 0.5);
  }

  &.extrafail {
    color: rgb(145, 1, 1, 0.5);
  }
}
</style>
