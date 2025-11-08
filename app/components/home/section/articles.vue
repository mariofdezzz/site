<script setup lang="ts">
const { data: articles } = useFetch('/api/articles')
</script>

<template>
	<section>
		<h2 class="text-2xl font-bold mb-4">Articles</h2>

		<div class="articles">
			<SharedOverviewItem
				v-for="{ title, image, link } in articles"
				:key="link"
				:src="image"
				:title
				:link
				external
			/>
		</div>
	</section>
</template>

<style scoped>
.articles {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}
</style>
