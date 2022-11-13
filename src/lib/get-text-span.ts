

interface GetTextSpanOptions {
  cursor: number
  text: string
  matchOptions: MatchOption[]
}


function getTextSpan({
  cursor,
  matchOptions,
  text,
}: GetTextSpanOptions): TextSpanResults | null {
  const leads = matchOptions.map(({ lead }) => lead)

  let i = cursor - 1
  let word = ''
  while (i >= 0) {
    const char = text[i]
    if (!char || char === ' ') {
      // TODO: or stops matching the regex
      break
    }

    word = char + word

    i -= 1
  }

  let matchOption: MatchOption | null = null

  const leadIndex = leads.indexOf(word[0])
  if (leadIndex > -1) {
    matchOption = matchOptions[leadIndex]
  }

  if (!matchOption) {
    return null
  }

  let j = cursor
  while (j < text.length) {
    if (text[j] === ' ') {
      break
    }

    word += text[j]

    j++
  }

  if (!matchOption.regex.test(word)) {
    return null
  }

  return { lead: word[0], range: [i + 1, j - 1], text: word.substring(1) }
}

export default getTextSpan
