<template>
	<div class="w-full rounded-xl overflow-hidden relative p-10">
		<NuxtImg
			src="/images/graphql-network-banner.jpg"
			:alt="$t('home.projects.gql-banner.alt')"
			sizes="sm:400px 800px"
			format="webp"
			class="absolute inset-0 w-full h-full object-cover dark:opacity-80"
		/>

		<div
			class="flex flex-col items-center justify-center gap-3 text-center isolate"
		>
			<h3 class="text-2xl font-bold text-[#fdfdfc]">
				{{ $t('home.projects.gql-banner.title') }}
			</h3>

			<p class="text-[#fdfdfc] opacity-90 max-w-100">
				{{ $t('home.projects.gql-banner.description') }}
			</p>

			<a
				href="https://graphql-network.com"
				target="_blank"
				rel="noopener noreferrer"
				class="button-link"
			>
				{{ $t('home.projects.gql-banner.button') }}
			</a>
		</div>
	</div>
</template>
