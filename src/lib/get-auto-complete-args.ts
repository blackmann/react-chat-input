import { $getSelection, EditorState, RangeSelection } from 'lexical'
import getTextSpan from './get-text-span'

import type { AutoCompleteProfile, TextSpanResults } from '../types'

function getAutocompleteArgs(
  state: EditorState,
  autoCompleteProfiles: AutoCompleteProfile[]
): TextSpanResults | null {
  let spanResult: TextSpanResults | null = null

  state.read(() => {
    const selection = $getSelection() as RangeSelection
    const [start, end] = selection.getCharacterOffsets()
    if (start !== end) {
      // this is an highlight, so skip
      return
    }

    const [node] = selection.getNodes()
    const text = node.getTextContent()

    spanResult = getTextSpan({ autoCompleteProfiles, cursor: start, text })
  })

  return spanResult
}

export default getAutocompleteArgs
