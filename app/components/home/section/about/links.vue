<template>
	<div class="flex gap-2">
		<a
			href="https://github.com/mariofdezzz"
			target="_blank"
			rel="noopener noreferrer"
			:aria-label="$t('home.about.links.aria.github')"
		>
			<SharedChip>
				<Icon name="simple-icons:github" class="w-3 h-3" />

				<span>mariofdezzz</span>
			</SharedChip>
		</a>

		<a
			href="https://www.instagram.com/mariofdev"
			target="_blank"
			rel="noopener noreferrer"
			:aria-label="$t('home.about.links.aria.instagram')"
		>
			<SharedChip>
				<Icon name="simple-icons:instagram" class="w-3 h-3" />

				<span>mariofdev</span>
			</SharedChip>
		</a>

		<a
			href="https://www.linkedin.com/in/mario-ferrero"
			target="_blank"
			rel="noopener noreferrer"
			:aria-label="$t('home.about.links.aria.linkedin')"
		>
			<SharedChip>
				<Icon name="simple-icons:linkedin" class="w-3 h-3" />

				<span>mario-ferrero</span>
			</SharedChip>
		</a>
	</div>
</template>
