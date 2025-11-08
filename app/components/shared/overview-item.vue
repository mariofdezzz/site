<script setup lang="ts">
defineProps<{
	src: string
	title: string
	description: string
	link: string
}>()
</script>

<template>
	<a
		:href="link"
		target="_blank"
		rel="noopener noreferrer"
		:title="description"
	>
		<article>
			<div class="relative mb-2">
				<Icon
					name="material-symbols:open-in-new-rounded"
					class="absolute top-2 right-2 w-4 h-4 text-white opacity-75"
				/>
				<NuxtImg
					:src="src"
					:alt="title"
					sizes="400px"
					format="webp"
					class="object-cover aspect-video rounded-md"
				/>

				<h4 class="absolute bottom-1 left-2 text-xs font-bold text-white">
					{{ title }}
				</h4>
			</div>

			<p class="line-clamp-1 text-sm">
				{{ description }}
			</p>
		</article>
	</a>
</template>
