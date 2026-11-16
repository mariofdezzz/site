<template>
	<figure
		class="w-44 aspect-square margin-auto sm:float-left sm:mr-10 sm:mb-5"
		style="
			shape-outside: polygon(
				0 0,
				100% 0,
				100% 66.66%,
				85% 85%,
				50% 100%,
				15% 85%,
				0 66.66%
			);
		"
	>
		<NuxtImg
			src="/images/profile.jpeg"
			:alt="$t('home.about.portrait.alt')"
			sizes="200px"
			format="webp"
			width="200"
			class="w-full rounded-full object-cover"
		/>
	</figure>
</template>
