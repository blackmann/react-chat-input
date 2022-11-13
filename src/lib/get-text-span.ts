interface GetTextSpanOptions {
  start: number
  stop: string
  text: string
}

interface TextSpanResults {
  // Then whole text (with look ahead)
  text: string
  range: [number, number]
}

function getTextSpan({ start, stop, text }: GetTextSpanOptions): TextSpanResults {
  let index = start

  while (index >= 0) {
    if (text[index] === ' ') {
      break
    }

    index -= 1
  }

  return {}
}

export default getTextSpan
