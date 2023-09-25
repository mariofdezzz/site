<script setup lang="ts">
import { Option } from '~/components/Common/Selector.vue'

const colorMode = useColorMode()

const options: Option<string>[] = [
  {
    label: 'System',
    value: 'system'
  },
  {
    label: 'Light',
    value: 'light'
  },
  {
    label: 'Dark',
    value: 'dark'
  }
]

const icon = computed(() => {
  const icons: {[key: string]: string} = {
    system: 'ph:monitor',
    light: 'ph:sun',
    dark: 'ph:moon'
  }

  return icons[colorMode.preference]
})
</script>

<template>
  <CommonSelector
    v-model="colorMode.preference"
    :options="options"
    :icon-name="icon"
    :aria-label="$t('footer.select.ariaLabel.colorMode')"
  />
</template>
