<script setup lang="ts">
const { data: articles } = useFetch('/api/articles')

const { locale } = useI18n()

const dateFormatter = computed(
	() =>
		new Intl.DateTimeFormat(locale.value, {
			dateStyle: 'medium',
		}),
)
</script>

<template>
	<section>
		<h2 class="text-xl font-bold pb-4">Articles</h2>

		<a
			v-for="article in articles"
			:key="article.link"
			:href="article.link"
			target="_blank"
			class="flex items-baseline gap-3 font-medium"
		>
			<h3
				class="text-lg shrink overflow-hidden text-ellipsis whitespace-nowrap"
			>
				{{ article.title }}
			</h3>

			<div class="flex-1 overflow-hidden flex gap-0.5 text-xs" rhidden="true">
				<span v-for="i in 200" :key="i">.</span>
			</div>

			<p class="whitespace-nowrap">
				{{ dateFormatter.format(new Date(article.date)) }}
			</p>
		</a>
	</section>
</template>
