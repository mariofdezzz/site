<script setup lang="ts">
const colorMode = useColorMode()
const options = [
	{
		label: $t('footer.select.color-modes.light'),
		value: 'light',
		icon: 'ph:sun',
	},
	{
		label: $t('footer.select.color-modes.dark'),
		value: 'dark',
		icon: 'ph:moon',
	},
	{
		label: $t('footer.select.color-modes.system'),
		value: 'system',
		icon: 'ph:monitor',
	},
]

const icon = computed(() => {
	const option = options.find((opt) => opt.value === colorMode.preference)

	return option?.icon ?? ''
})
</script>

<template>
	<SharedSelect
		v-model="colorMode.preference"
		:options
		:aria-label="$t('footer.select.aria-label.color-mode')"
	>
		<div class="flex gap-2 items-center">
			<Icon :name="icon" width="16" />

			<span>
				{{ $t(`footer.select.color-modes.${colorMode.preference}`) }}
			</span>
		</div>
	</SharedSelect>
</template>
