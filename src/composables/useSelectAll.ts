export default function (length:number) {
  const selects = reactive(new Array<boolean>(length).fill(false))
  const selectAll = computed({
    get () {
      return selects.every(select => select)
    },
    set (value) {
      for (const index of Object.keys(selects)) {
        selects[index as any] = value
      }
    }
  })

  return {
    selectAll,
    selects
  }
}
