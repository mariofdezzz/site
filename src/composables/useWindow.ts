export function useWindow () {
  const vw = ref(0)
  const vh = ref(0)

  onMounted(() => {
    vw.value = window.innerWidth
    vh.value = window.innerHeight
  })

  return {
    vw,
    vh
  }
}
