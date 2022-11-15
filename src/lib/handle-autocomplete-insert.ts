import { $getSelection, $insertNodes, RangeSelection, TextNode } from 'lexical'
import { $createTagNode } from './tag'

import type { AutoCompletionValue } from './commands'

function handleAutoCompleteInsert({
  selectionValue,
  textSpan,
}: AutoCompletionValue) {
  const selection = $getSelection() as RangeSelection
  const [node] = selection.getNodes()

  const [start, end] = textSpan.range

  selection.setTextNodeRange(node as TextNode, start, node as TextNode, end + 1)

  $insertNodes([
    $createTagNode({
      prefix: textSpan.lead,
      text: selectionValue.text,
      type: textSpan.type,
      value: selectionValue.value,
    }),
  ])

  return true
}

export default handleAutoCompleteInsert
