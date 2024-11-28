<script setup lang="ts">

const { data } = await useAsyncData('home', () => queryContent('craft').find())

</script>

<template>
  <section>
    <h2>
      Craft
    </h2>

    <a v-for="(craft, index) in data" :key="index" :href="craft._path">
      <div class="craft">
        <img :src="craft['og-image']" :alt="craft.description">
      </div>
    </a>
  </section>
</template>

<style scoped lang="scss">
.craft {
  max-width: 300px;
  border: 1px solid $border;
  border-radius: 10px;
  padding: 3px;

  img {
    border-radius: 7px;
  }
}
</style>
