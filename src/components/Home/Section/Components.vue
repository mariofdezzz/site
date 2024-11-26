<script setup lang="ts">
const { data: components } = await useAsyncData('components', queryContent('components').find)

</script>

<template>
  <section style="margin-top: 2rem;">
    <ul>
      <li v-for="(component, index) of components" :key="index">
        <NuxtLink :to="component._path">
          {{ component.title }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
