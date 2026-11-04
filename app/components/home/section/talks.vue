<script setup lang="ts">
const { prefersDark } = usePreferredDark()
</script>

<template>
	<section>
		<h2 class="text-xl font-bold pb-4">Talks & Media</h2>

		<div
			class="w-full aspect-9/16 sm:aspect-9/4 grid grid-cols-2 grid-rows-[81fr_47fr_81fr_47fr] sm:grid-cols-4 sm:grid-rows-[81fr_47fr] gap-4"
		>
			<article class="row-span-2 rounded-xl overflow-hidden relative">
				<a
					href="https://www.instagram.com/reel/DcwSzIBo2e3/?utm_source=mariof.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<NuxtImg
						src="/images/gql-gofigeeks-talk/reel-1.webp"
						:alt="$t('home.talks.gql-reel-1')"
						sizes="sm:400px 800px"
						format="webp"
						class="w-full h-full object-cover"
					/>

					<HomeSectionTalksBadge>Reel</HomeSectionTalksBadge>
				</a>
			</article>

			<article
				class="row-start-1 sm:row-start-auto col-span-2 rounded-xl overflow-hidden relative"
			>
				<a
					href="https://youtu.be/1F4uP8zj2H0?si=grBbtFbbk1QqsuTf&utm_source=mariof.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<NuxtImg
						src="/images/gql-gofigeeks-talk/video-cover.jpeg"
						:alt="$t('home.talks.gql-video-cover')"
						sizes="sm:400px 800px"
						format="webp"
						class="w-full h-full object-cover"
					/>

					<HomeSectionTalksBadge>Video</HomeSectionTalksBadge>
				</a>
			</article>

			<article
				class="sm:col-start-4 row-span-2 rounded-xl overflow-hidden relative"
			>
				<a
					href="https://www.instagram.com/reel/Db6HFHDMmZo/?utm_source=mariof.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<NuxtImg
						src="/images/gql-gofigeeks-talk/reel-2.webp"
						:alt="$t('home.talks.gql-reel-2')"
						sizes="sm:400px 800px"
						format="webp"
						class="w-full h-full object-cover"
					/>

					<HomeSectionTalksBadge>Reel</HomeSectionTalksBadge>
				</a>
			</article>

			<article
				class="row-start-2 sm:row-start-auto rounded-xl overflow-hidden border border-on-base-border relative"
			>
				<a
					href="https://slides.mariofdezzz.com/11-07-2026/1"
					target="_blank"
					rel="noopener noreferrer"
				>
					<NuxtImg
						:src="
							prefersDark
								? '/images/gql-gofigeeks-talk/slides-cover-dark.png'
								: '/images/gql-gofigeeks-talk/slides-cover.png'
						"
						:alt="$t('home.talks.gql-slides-cover')"
						sizes="sm:400px 800px"
						format="webp"
						class="w-full h-full object-cover"
					/>

					<HomeSectionTalksBadge corner="bottom-left">
						Slides
					</HomeSectionTalksBadge>
				</a>
			</article>

			<article
				class="row-start-2 sm:row-start-auto rounded-xl flex flex-col gap-2 justify-center p-4 text-xs border border-on-base-border h-full"
			>
				<p class="font-semibold text-muted">TALK · GOFIGEEKS</p>

				<p class="font-bold">REST in Peace</p>

				<p>GraphQL workshop · Jul 11</p>
			</article>
		</div>
	</section>
</template>
