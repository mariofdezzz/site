<script setup lang="ts">
defineProps<{
  src: string,
  alt: string,
  caption: string,
  sizes?: string,
}>()
</script>

<template>
  <figure>
    <NuxtImg
      :src="src"
      :alt="alt"
      :sizes="sizes"
      format="webp"
    />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<style scoped lang="scss">
$border-radius: 10px;

figure {
  width: 15rem;
  aspect-ratio: 3/4;

  // Mobile
  margin: auto;

  img {
    width: 100%;
    border-radius: $border-radius;
    object-fit: cover;
  }

  figcaption {
    text-align: end;
    font-size: 0.7rem;
    padding: 0.5rem $border-radius;
  }
}

@media (min-width: 550px) {
  figure {
    float: left;
    margin-right: 1.5rem;
  }
}
</style>
