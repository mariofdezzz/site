<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useId } from 'vue'

const model = defineModel<string>()

defineProps<{
	options: Array<{ label: string; value: string }>
}>()

const emit = defineEmits<{
	change: [string | undefined]
}>()

const triggerId = useId().replace(/:/g, '')
const menuId = `${triggerId}-menu`
const triggerRef = ref<HTMLButtonElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)

const updateMenuPosition = () => {
	if (!triggerRef.value || !menuRef.value) return

	const triggerRect = triggerRef.value.getBoundingClientRect()
	const menu = menuRef.value
	const menuHeight = menu.offsetHeight || 220
	const gap = 8
	const spaceBelow = window.innerHeight - triggerRect.bottom
	const spaceAbove = triggerRect.top
	const shouldOpenAbove =
		spaceBelow < menuHeight + gap && spaceAbove > menuHeight + gap

	const top = shouldOpenAbove
		? triggerRect.top - menuHeight - gap
		: triggerRect.bottom + gap

	const left = Math.min(
		Math.max(gap, triggerRect.left),
		window.innerWidth - menu.offsetWidth - gap,
	)

	menu.style.position = 'fixed'
	menu.style.left = `${left}px`
	menu.style.top = `${Math.max(gap, top)}px`
	menu.style.minWidth = `${triggerRect.width}px`
	menu.style.width = `${Math.max(triggerRect.width, menu.offsetWidth)}px`
}

const togglePopover = () => {
	if (!menuRef.value) return

	if (menuRef.value.matches(':popover-open')) {
		menuRef.value.hidePopover()
		isOpen.value = false
		return
	}

	menuRef.value.showPopover()
	updateMenuPosition()
	isOpen.value = true
}

const closePopover = () => {
	if (!menuRef.value) return

	menuRef.value.hidePopover()
	isOpen.value = false
}

const selectOption = (value: string | undefined) => {
	model.value = value
	emit('change', value)
	closePopover()
}

onMounted(() => {
	window.addEventListener('resize', updateMenuPosition)
	window.addEventListener('scroll', updateMenuPosition, true)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateMenuPosition)
	window.removeEventListener('scroll', updateMenuPosition, true)
})
</script>

<template>
	<div class="relative inline-block">
		<button
			type="button"
			:id="triggerId"
			ref="triggerRef"
			class="cursor-pointer rounded-md border border-slate-300 bg-white px-3 py-2 text-left text-sm text-slate-700 outline-none transition focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
			:aria-controls="menuId"
			aria-haspopup="listbox"
			:aria-expanded="isOpen"
			@click="togglePopover"
			@keydown.escape.prevent="closePopover"
		>
			<slot />
		</button>

		<ul
			:id="menuId"
			ref="menuRef"
			role="listbox"
			popover="auto"
			:aria-label="'Select an option'"
			class="z-50 rounded-md border border-slate-200 bg-white p-1 shadow-lg focus:outline-none"
			@keydown.escape.prevent="closePopover"
		>
			<li
				v-for="option in options"
				:key="option.value"
				role="option"
				:aria-selected="model === option.value"
				:tabindex="0"
				class="cursor-pointer rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none"
				@click="selectOption(option.value)"
				@keydown.enter.prevent="selectOption(option.value)"
				@keydown.space.prevent="selectOption(option.value)"
			>
				{{ option.label }}
			</li>
		</ul>
	</div>
</template>

<style scoped>
ul {
	position: fixed;
	left: 0;
	top: 0;
	max-height: min(16rem, 50vh);
	overflow-y: auto;
}
</style>
