<script setup lang="ts">
const model = defineModel<string>()

defineProps<{
	options: Array<{ label: string; value: string }>
}>()

defineEmits<{
	change: [string | undefined]
}>()
</script>

<template>
	<select
		v-model="model"
		class="border border-disabled rounded-[3px]"
		@change="$emit('change', model)"
	>
		<button class="flex items-center gap-1">
			<span>
				<slot />
			</span>

			<Icon
				id="select-icon"
				class="medium-icon"
				name="heroicons:chevron-up-down"
			/>
		</button>

		<option v-for="option in options" :key="option.value" :value="option.value">
			{{ option.label }}
		</option>
	</select>
</template>

<style scoped>
select,
::picker(select) {
	appearance: base-select;
	font: -webkit-small-control;
}

select::picker-icon,
option::checkmark {
	display: none;
}

select {
	padding: 0.25rem 0.5rem;
	align-items: center;
}

option {
	border-radius: 3px;
	font-size: 1rem;
	padding: 0.4rem 1rem;
	transition-duration: 0.25s;
	/*  reset UA styles, can remove these two lines with patch landing soon  */
	place-items: initial;
	align-items: center;
}

::picker(select) {
	background-color: var(--base);
	color: var(--on-base);
	border: none;
	padding: 0.25rem;
	margin: 0.25rem 0;
	overflow-x: hidden;
	border-radius: 5px;
	/*  resets from UA  */
	min-inline-size: 0;
	box-shadow: 0px 12.8px 28.8px rgba(0, 0, 0, 0.13),
		0px 0px 9.2px rgba(0, 0, 0, 0.11);
}
</style>
