<script setup lang="ts">
const route = useRoute()
const contentPath = route.path.split('/').slice(1)
const page = await useAsyncData('page', queryContent(...contentPath).findOne)

const title = computed(() => page.data.value?.title)
const fullWidth = computed(() => !!page.data.value?.fullWidth)
</script>

<template>
  <div>
    <h1>{{ title }}</h1>

    <section id="component" :class="{'full-width': fullWidth}">
      <ContentDoc />
    </section>
  </div>
</template>

<style scoped lang="scss">
h1 {
  margin-bottom: 2rem;
}
</style>

<style lang="scss">
section#component {
  display: flex;
  align-items: center;
  justify-content: center;
  // min-height: 60vh;

  &.full-width > div {
    width: 100%;
  }
}
</style>
