<script setup lang="ts">
const projects = [
	{
		src: '/images/projects/threads.jpeg',
		title: 'Threads API',
		description:
			'Simple project to practice API best practices. Domain-Driven Design, RESTful, Events, Repositories.',
		link: 'https://github.com/mariofdezzz/threads-api',
	},
	{
		src: '/images/projects/toruk.jpeg',
		title: 'Toruk',
		description:
			'API router framework for Deno. Simple, extensible and close to platform best practices.',
		link: 'https://github.com/mariofdezzz/toruk',
	},
]
</script>

<template>
	<section>
		<h2 class="text-2xl font-bold mb-4">Projects</h2>

		<div class="projects">
			<SharedOverviewItem
				v-for="{ src, title, description, link } in projects"
				:key="src"
				:src
				:title
				:description
				:link
			/>
		</div>
	</section>
</template>

<style scoped>
.projects {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}
</style>
