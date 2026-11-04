<script setup lang="ts">
withDefaults(
	defineProps<{
		corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
	}>(),
	{
		corner: 'top-left',
	},
)
</script>

<template>
	<p
		class="absolute bg-black/70 text-white rounded-full px-2 py-0.5 text-[10px] font-semibold"
		:class="{
			'top-2 left-2': corner === 'top-left',
			'top-2 right-2': corner === 'top-right',
			'bottom-2 left-2': corner === 'bottom-left',
			'bottom-2 right-2': corner === 'bottom-right',
		}"
	>
		<slot />
	</p>
</template>
