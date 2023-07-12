<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const svg = ref<SVGAElement | null>(null)
const animation = ref<SVGAnimateElement | null>(null)

const { pause } = useIntersectionObserver(
  svg,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      pause()
      animation.value?.beginElement()
    }
  }
)
</script>

<template>
  <svg
    id="eVlbvS2fauE1"
    ref="svg"
    cache-id="0f5ec4e705174be88012ac245f91e260"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1190.7 841.995"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
  >
    <g clip-rule="evenodd">
      <path
        d="M112.848,574.287c29.74-41.637,57.072-84.647,84.984-127.476c164.878-253.003,4.549,9.42-18.505,167.912-.864,5.941-16.619,97.47-12.336,98.006c6.89.861,15.52-36.362,17.819-42.492c29.469-78.583,59.195-160.197,101.433-233.021c14.485-24.975,29.682-49.776,45.233-74.019c7.229-11.268,23.121-48.297,17.134-36.323-9.616,19.231-72.455,180.094-50.031,187.102c22.78,7.118,238.169-286.34,260.435-317.32c6.611-9.197,94.471-147.0057,81.557-143.2391C512.756,90.6963,375.829,718.456,484.996,773.04c82.538,41.269,571.974-266.155,664.794-313.893"
        clip-rule="evenodd"
        fill="none"
        stroke="currentColor"
        stroke-width="13.7475"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-dashoffset="3404.640339"
        stroke-dasharray="3404.640339"
      >
        <animate
          id="first"
          ref="animation"
          attributeName="stroke-dashoffset"
          values="3404.640339;0"
          dur="2s"
          begin="indefinite"
          repeatCount="1"
          calcMode="spline"
          keySplines=".5 0 .5 1"
          fill="freeze"
        />
      </path>
      <path
        d="M533.656,526.312c-7.896,7.896-42.344,51.638-31.526,64.423c15.583,18.417,89.5-63.333,80.872-71.962-14.933-14.933-27.265,64.012-6.169,63.053c6.061-.276,91.037-73.395,93.209-65.794c1.84,6.441-36.837,38.503-32.212,41.806c6.514,4.653,37.949-22.026,42.492-25.358c35.606-26.111,124.645-21.937,165.171-53.458"
        clip-rule="evenodd"
        fill="none"
        stroke="currentColor"
        stroke-width="13.7475"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-dashoffset="665.555457"
        stroke-dasharray="665.555457"
      >
        <animate
          id="second"
          attributeName="stroke-dashoffset"
          values="665.555457;0"
          dur="0.9s"
          begin="first.end"
          repeatCount="1"
          fill="freeze"
        />
      </path>
      <path
        d="M761.879,470.798c2.97-.457,5.94-.914,8.91-1.371"
        clip-rule="evenodd"
        fill="none"
        stroke="currentColor"
        stroke-width="13.7475"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-dashoffset="9.014862"
        stroke-dasharray="9.014862"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="9.014862;0"
          dur="0.1s"
          begin="second.end"
          repeatCount="1"
          fill="freeze"
        />
      </path>
    </g>
  </svg>
</template>
