import { useElementBounding } from '@vueuse/core'

export function usePopover (
  element: MaybeRef<HTMLElement>,
  attach: MaybeRef<HTMLElement>,
  margin = 0
) {
  const elementBounding = useElementBounding(element)
  const attachBounding = useElementBounding(attach)
  const { vw, vh } = useWindow()

  const top = computed<number>(() => {
    return -elementBounding.height.value
  })
  const left = computed<number>(() => {
    const left = attachBounding.width.value / 2 - elementBounding.width.value / 2

    const x = left + attachBounding.x.value
    const xLast = x + elementBounding.width.value + margin
    const overflowsRight = xLast > vw.value

    return vw.value > 0 && overflowsRight
      ? vw.value - xLast + left
      : left
  })

  return {
    top,
    left
  }
}
