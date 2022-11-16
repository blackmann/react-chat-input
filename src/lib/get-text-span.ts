import type { AutoCompleteProfile, TextSpanResults } from '../types'

interface GetTextSpanOptions {
  autoCompleteProfiles: AutoCompleteProfile[]
  cursor: number
  text: string
}

function getTextSpan({
  autoCompleteProfiles,
  cursor,
  text,
}: GetTextSpanOptions): TextSpanResults | null {
  const triggers = autoCompleteProfiles.map(({ trigger }) => trigger)

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

  let autoCompleteProfile: AutoCompleteProfile | null = null

  const triggerIndex = triggers.indexOf(word[0])
  if (triggerIndex > -1) {
    autoCompleteProfile = autoCompleteProfiles[triggerIndex]
  }

  if (!autoCompleteProfile) {
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

  if (!autoCompleteProfile.matchRegex.test(word)) {
    return null
  }

  return {
    lead: word[0],
    range: [i + 1, j - 1],
    type: autoCompleteProfile.name,
    typedText: word.substring(1),
  }
}

export default getTextSpan
