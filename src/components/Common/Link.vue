<script setup lang="ts">
const props = defineProps<{
  href: string;
}>()

const { data } = useFetchMeta(props.href)
const attach = ref<HTMLElement|null>(null)
const show = ref(false)
// const imageSrc = ref('')

// onMounted(async () => {
//   const src = data.value?.['og:image']
//   if (src) {
//     const blob = await fetch(src).then(v => v.blob())
//     console.log(blob)

//     imageSrc.value = URL.createObjectURL(blob)
//     // return ''
//   }
// })
</script>

<template>
  <span>
    <CommonLinkPreview
      v-if="data?.['og:image']"
      :title="data?.['og:title'] ?? data?.title"
      :image-src="data?.['og:image']"
      :image-alt="data?.['og:image:alt']"
      :attach="attach!"
      :show="show"
    />
    <a ref="attach" :href="href" @mouseenter="show=true" @mouseleave="show=false">
      <slot />
    </a>
  </span>
</template>

<style scoped lang="scss">
span {
  position: relative;
}
</style>
