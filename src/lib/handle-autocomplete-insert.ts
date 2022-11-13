import { $getSelection, $insertNodes, RangeSelection, TextNode } from 'lexical'
import { $createTagNode } from './tag'

import type { AutoCompletionValue } from './commands'

function handleAutoCompleteInsert(event: AutoCompletionValue) {
  const selection = $getSelection() as RangeSelection
  const [node] = selection.getNodes()

  const [start, end] = event.textSpan.range

  selection.setTextNodeRange(
    node as TextNode,
    start,
    node as TextNode,
    end+1
  )

  $insertNodes([$createTagNode(event.textSpan.lead, event.text)])

  return true
}

export default handleAutoCompleteInsert
