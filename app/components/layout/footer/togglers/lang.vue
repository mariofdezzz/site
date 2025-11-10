<script setup lang="ts">
const { locales, locale: currentLocale, setLocale } = useI18n()
const locale = ref(currentLocale.value)

const options = computed(() =>
	locales.value.map(({ code, name }) => ({
		label: name!,
		value: code,
	}))
)

function update(newLocale?: string) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	if (newLocale) setLocale(newLocale as any)
}
</script>

<template>
	<SharedSelect
		v-model="locale"
		:options="options"
		:aria-label="$t('footer.select.aria-label.lang')"
		@change="update"
	>
		<Icon name="material-symbols:translate-rounded" width="16" />
	</SharedSelect>
</template>
