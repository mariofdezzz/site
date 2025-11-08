<script setup lang="ts"></script>

<template>
	<div id="layout" class="grid gap-x-4 gap-y-8 bg-base text-on-base">
		<LayoutHeader />

		<main>
			<slot />
		</main>

		<LayoutFooter />
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
