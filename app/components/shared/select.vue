<script setup lang="ts">
import { computed, ref, useId } from 'vue'

interface SelectOption {
	label: string
	value: string
	disabled?: boolean
}

const props = withDefaults(
	defineProps<{
		modelValue: string | null
		options: SelectOption[]
		placeholder?: string
		disabled?: boolean
		variant?: 'outline' | 'ghost'
	}>(),
	{
		placeholder: 'Select an option',
		disabled: false,
		variant: 'outline',
	},
)

const emit = defineEmits<{
	'update:modelValue': [value: string]
	change: [value: string]
}>()

const id = useId()
const popoverId = `select-${id.replaceAll(':', '')}`
const anchorName = `--select-${id.replaceAll(':', '')}`

const popover = ref<HTMLElement | null>(null)
const isOpen = ref(false)

const selectedOption = computed(() =>
	props.options.find((option) => option.value === props.modelValue),
)

function selectOption(option: SelectOption) {
	if (option.disabled) return

	emit('update:modelValue', option.value)
	emit('change', option.value)
	popover.value?.hidePopover()
}

function onToggle(event: Event) {
	isOpen.value = (event as ToggleEvent).newState === 'open'
}
</script>

<template>
	<div class="relative">
		<!-- Trigger -->
		<button
			type="button"
			:popovertarget="popoverId"
			:style="{ anchorName }"
			:disabled="disabled"
			:aria-expanded="isOpen"
			aria-haspopup="listbox"
			class="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-on-base transition-colors hover:bg-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
			:class="{
				'border border-on-base-border bg-base shadow-xs': variant === 'outline',
			}"
		>
			<span
				class="truncate"
				:class="{ 'text-gray-400 dark:text-gray-500': !selectedOption }"
			>
				<slot />
			</span>

			<Icon
				name="lucide:chevron-down"
				class="size-4 shrink-0 text-gray-400 transition-transform"
				:class="{ 'rotate-180': isOpen }"
			/>
		</button>

		<!-- Popover -->
		<div
			:id="popoverId"
			ref="popover"
			popover="auto"
			role="listbox"
			:style="{ positionAnchor: anchorName }"
			class="fixed m-0 min-w-36 overflow-y-auto overscroll-contain rounded-lg border border-on-base-border bg-base p-1 shadow-lg"
			@toggle="onToggle"
		>
			<button
				v-for="option in options"
				:key="option.value"
				type="button"
				role="option"
				:aria-selected="option.value === modelValue"
				:disabled="option.disabled"
				class="flex items-center justify-between gap-4 w-full rounded-md px-2.5 py-2 text-left text-sm text-on-base transition-colors hover:bg-elevated focus-visible:bg-elevated focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40"
				:class="{
					' font-medium': option.value === modelValue,
				}"
				@click="selectOption(option)"
			>
				<span class="truncate">{{ option.label }}</span>

				<Icon
					v-if="option.value === modelValue"
					name="lucide:check"
					class="size-4 shrink-0 text-on-base"
				/>
			</button>
		</div>
	</div>
</template>

<style scoped>
.select-content {
	position-anchor: --select-trigger;
}
</style>

<style>
[popover]:popover-open {
	display: block;
}

@position-try --above {
	top: auto;
	bottom: anchor(top);
	margin-top: 0;
	margin-bottom: 4px;
}

@position-try --align-right {
	left: auto;
	right: anchor(right);
}

@position-try --above-align-right {
	top: auto;
	bottom: anchor(top);
	left: auto;
	right: anchor(right);
	margin-top: 0;
	margin-bottom: 4px;
}

[popover] {
	position: fixed;
	top: anchor(bottom);
	left: anchor(left);
	margin-top: 4px;
	position-try-fallbacks: --align-right, --above, --above-align-right;
}
</style>
