<script setup lang="ts">
// import { useElementBounding } from '@vueuse/core'

const props = defineProps<{
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  attach: HTMLElement;
  show: boolean
}>()

const figure = ref<HTMLElement|null>(null)
const attach = computed(() => props.attach)

const { top, left } = usePopover(figure as Ref<HTMLElement>, attach, 15)

const figureStyle = computed(() => ({
  top: top.value + 'px',
  left: left.value + 'px'
}))

</script>

<template>
  <figure ref="figure" :style="figureStyle" :class="{ show }">
    <img :src="imageSrc" :alt="imageAlt">
    <figcaption>{{ title }}</figcaption>
  </figure>
</template>

<style scoped lang="scss">
figure {
  position: absolute;
  background-color: $bg;
  width: 20rem;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 16px #ccc;
  opacity: 0;
  pointer-events: none;
  transition: opacity ease-in-out 100ms;

  &.show {
    opacity: 1;
  }

  figcaption {
    padding: 0.5rem 1rem;
    font-weight: bold;
  }
}
</style>
