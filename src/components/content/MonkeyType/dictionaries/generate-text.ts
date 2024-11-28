export function generateText (words: string[]) {
  const finalWords = new Array(250).fill('')

  return finalWords.map(() => {
    const randomIndex = Math.floor(Math.random() * words.length)

    return words[randomIndex]
  }).join(' ')
}
