export function usePreferredDark() {
	const prefersDark = ref(false)

	onMounted(() => {
		if (
			typeof window === 'undefined' ||
			typeof window.matchMedia !== 'function'
		) {
			prefersDark.value = false
			return
		}

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const updatePreference = () => {
			prefersDark.value = mediaQuery.matches
		}

		updatePreference()
		mediaQuery.addEventListener?.('change', updatePreference)

		onBeforeUnmount(() => {
			mediaQuery.removeEventListener?.('change', updatePreference)
		})
	})

	return { prefersDark }
}
