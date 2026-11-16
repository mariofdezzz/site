<script setup lang="ts">
const { locales, locale: currentLocale, setLocale } = useI18n()
const locale = ref(currentLocale.value)

const options = computed(() =>
	locales.value.map(({ code, name }) => ({
		label: name!,
		value: code,
	})),
)

function update(newLocale: string | undefined) {
	if (newLocale) setLocale(newLocale as any)
}
</script>

<template>
	<div
		class="h-full grid grid-rows-[1fr_auto] grid-cols-[auto_minmax(0,50rem)_auto] gap-6"
	>
		<main class="col-start-2 pt-12">
			<slot />
		</main>

		<footer
			class="row-start-2 col-start-2 pb-6 flex items-center justify-between"
		>
			<IconSignature class="h-16" />

			<SharedSelect
				v-model="locale"
				:options="options"
				@change="update"
				variant="ghost"
				aria-label="Select language"
			>
				<Icon name="lucide:languages" />
			</SharedSelect>
		</footer>
	</div>
</template>
