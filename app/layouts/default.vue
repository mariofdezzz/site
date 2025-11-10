<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
	<div class="h-full antialiased">
		<div id="layout" class="grid gap-x-4 gap-y-8 text-on-base">
			<LayoutHeader />

			<main>
				<slot />
			</main>

			<LayoutFooter />
		</div>

		<SpeedInsights />
	</div>
</template>

<style>
#layout {
	grid-template:
		auto 1fr auto / 1fr min(var(--max-text-width), calc(100% - 2rem))
		1fr;
}

header,
footer {
	grid-column: 1 / -1;
}

main {
	grid-column: 2;
}
</style>
