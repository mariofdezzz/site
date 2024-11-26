<script setup lang="ts">
withDefaults(
  defineProps<{
    min: number;
  }>(),
  { min: 10 }
)
const value = ref('')
const input = ref<HTMLInputElement | null>(null)
const cursor = ref(false)

const charCount = computed(() => value.value.length)
</script>

<template>
  <label for="responsive">
    Username
    <span>{{ charCount }}/{{ min }}</span>
  </label>
  <div id="wrapper">
    <input
      id="responsive"
      ref="input"
      v-model="value"
      type="text"
      @focus="cursor = !cursor"
    >
    <div id="input" @click="input?.focus()">
      <div>
        <span>
          {{ value }}
        </span>
        <div id="cursor">
          <div id="indicator" :style="{height: Math.min(charCount / min, 1)*100 + '%'}" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
label {
  display: block;
  padding: 0 0.2rem;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0.8;
  margin-bottom: 0.2rem;

  span {
    float: inline-end;
    font-size: 0.75rem;
    opacity: 0.5;
  }
}

#wrapper {
  position: relative;
}

input {
  border: 1px solid hsl(0, 0%, 90%);
  border-radius: 5px;
  outline: none;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  // color: rgb(55, 55, 55);
  opacity: 0;
}

#input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid hsl(0, 0%, 90%);
  border-radius: 5px;
  padding: 3.2px 6px;
  font-size: 0.9rem;
  cursor: text;

  span {
    position: relative;
  }
}

#input #cursor {
  content: '';
  width: 2px;
  height: 20px;
  position: relative;
  top: 0;
  transform: translateY(-50%);
  // left: 0;
  background: salmon;
  border-radius: 5px;
  overflow: hidden;
  transition: width 200ms ease;

  #indicator {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: cadetblue;
    border-radius: 5px;
    transition: height 200ms ease;
  }
}

// width: 2px;
//     height: 20px;
//     background: cadetblue;
//     position: absolute;
//     top: 6px;
//     left: calc(8px + 4ch);
//     border-radius: 5px;
</style>
