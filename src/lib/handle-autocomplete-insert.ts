import { $getSelection, $insertNodes, RangeSelection, TextNode } from 'lexical'
import { $createTagNode } from './tag'

import type { AutoCompletionValue } from './commands'

function handleAutoCompleteInsert(event: AutoCompletionValue) {
  const selection = $getSelection() as RangeSelection
  const [node] = selection.getNodes()

  // track to the last space
  console.log(selection.getCharacterOffsets())

  selection.setTextNodeRange(
    node as TextNode,
    0,
    node as TextNode,
    selection.anchor.offset
  )

  $insertNodes([$createTagNode(event.prefix, event.text)])

  return true
}

export default handleAutoCompleteInsert
