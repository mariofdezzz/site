<script setup lang="ts">
definePageMeta({
	description: 'pages.index.description',
	image: '/images/profile/og-image.jpg',
})
</script>

<template>
	<div>
		<HomeSectionAbout />

		<HomeSectionProjects class="clear-both mb-10" />

		<HomeSectionArticles />
	</div>
</template>
