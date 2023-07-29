export type Meta = {
  'title'?: string
  'og:title'?: string
  'og:image'?: string
  'og:image:alt'?: string
  'og:site_name'?: string
  'og:type'?: string
  'og:url'?: string
};

export function useFetchMeta (url: string) {
  const data = ref<Meta | null>(null)

  useFetch(url).then(({ data: res }) => {
    if (typeof res.value === 'string') {
      const meta = getMeta(res.value)
      meta.title = getTitle(res.value)

      // console.log('🔖', meta)

      data.value = meta
    }
  })

  return { data }
}

function getHead (doc: string): string | undefined {
  const regex = /<head>(?<head>.*)<\/head>/

  return regex.exec(doc)?.groups?.head
}

function getMeta (doc: string) {
  const regex = /<meta property=\\?"(?<property>.*?)\\?" content=\\?"(?<content>.*?)\\?"\s?\/?>/g
  const dict: Meta = {}

  for (const match of doc.matchAll(regex)) {
    const groups = match?.groups

    if (groups !== undefined) {
      const { property, content } = groups

      dict[property as keyof Meta] = content
    }
  }

  return dict
}

function getTitle (doc:string) {
  const regex = /<title>(?<title>.*)<\/title>/

  return regex.exec(doc)?.groups?.title
}
