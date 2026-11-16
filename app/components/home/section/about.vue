<template>
	<section class="[&_p]:pb-5 [&_p]:last:pb-0">
		<HomeSectionAboutPortrait />

		<h1 class="text-2xl font-bold pb-2">Mario Ferrero</h1>

		<HomeSectionAboutLinks class="pb-6" />

		<p>{{ $t('home.about.p1') }}</p>

		<i18n-t keypath="home.about.p2" tag="p">
			<template #airbus>
				<a
					href="https://www.airbus.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Airbus
				</a>
			</template>
		</i18n-t>

		<i18n-t keypath="home.about.p3" tag="p">
			<template #graphql>
				<a
					href="https://graphql-network.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					GraphQL Network
				</a>
			</template>
		</i18n-t>
	</section>
</template>
