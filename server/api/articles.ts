const PROFILE_URL = 'https://substack.com/api/v1/reader/feed/profile/155931818'
type Feed = {
	items: {
		post: {
			title: string
			description: string | undefined
			cover_image: string
			canonical_url: string
		}
	}[]
}

export default defineEventHandler(async () => {
	const response = await fetch(PROFILE_URL)
	const data: Feed = await response.json()

	const articles = data.items.map(({ post }) => ({
		title: post.title,
		description: post.description,
		image: post.cover_image,
		link: post.canonical_url,
	}))

	return articles
})
