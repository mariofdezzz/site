type Feed = {
	items: {
		post: {
			title: string
			description: string | undefined
			post_date: string
			cover_image: string
			canonical_url: string
		}
	}[]
}

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event)

	const response = await fetch(
		(import.meta as any).env.SUBSTACK_PROFILE_API_URL,
	)
	const data: Feed = await response.json()

	const articles = data.items.map(({ post }) => ({
		title: post.title,
		description: post.description,
		image: post.cover_image,
		link: post.canonical_url,
		date: post.post_date,
	}))

	return articles
})
