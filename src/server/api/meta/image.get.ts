import { Duplex } from 'stream'

const cache = new Map<string, Uint8Array>()

export default defineEventHandler(async (event) => {
  const params = getQuery(event)
  const src = String(params.src)

  if (src) {
    const buffer = await getBuffer(src)

    const duplex = new Duplex()
    duplex.push(buffer)
    duplex.push(null)

    return sendStream(event, duplex)
  }

  return createError({
    statusCode: 400
  })
})

async function getBuffer (src: string): Promise<Uint8Array> {
  if (cache.has(src)) return cache.get(src)!

  const response = await fetch(src)
  const blob = await response.arrayBuffer()
  const buffer = new Uint8Array(blob)

  cache.set(src, buffer)

  return buffer
}
