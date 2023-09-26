const indexMeta = {
  description: 'pages.index.description',
  image: '/images/profile/og-image.jpg'
}

export default function () {
  const route = useRoute()
  const { t } = useI18n()
  const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
  })

  const baseTitle = 'Mario Fdez'
  const domain = 'https://mariofdezzz.dev'
  const title = computed(() => route.meta.title
    ? `${baseTitle} | ${route.meta.title}`
    : baseTitle
  )
  const description = computed(() => t(route.meta.description ?? indexMeta.description))
  const image = computed(() => domain + (route.meta.image ?? indexMeta.image))

  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: image,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image
  })
  useServerHead({
    htmlAttrs: {
      lang: head.value.htmlAttrs!.lang,
      dir: head.value.htmlAttrs!.dir
    },
    link: [
      ...(head.value.link || []),
      { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
      { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }
    ],
    meta: [...(head.value.meta || [])]
  })
}
