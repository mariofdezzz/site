<script setup lang="ts">
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import { Option } from '~/components/Common/Selector.vue'

const { locale, locales, setLocale } = useI18n()

const value = computed({
  get () {
    return locale.value
  },
  set (locale) {
    setLocale(locale)
  }
})
const options = computed<Option<string>[]>(() =>
  (locales.value as LocaleObject[])
    .map(({ name, code }) => ({
      label: name,
      value: code
    }))
)
</script>

<template>
  <CommonSelector
    v-model="value"
    :options="options"
    icon-name="material-symbols:translate-rounded"
    :aria-label="$t('footer.select.ariaLabel.lang')"
    short
  />
</template>
