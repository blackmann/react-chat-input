import {
  $getSelection,
  LexicalNode,
  RangeSelection,
  TextFormatType,
} from 'lexical'
import SpanNode from './span'

function handleTextFormat(format: TextFormatType) {
  const selection = $getSelection() as RangeSelection | null

  if (selection === null) {
    return false
  }

  const text = selection?.getTextContent()
  const nodes = selection.getNodes()
  const [start, end] = selection.getCharacterOffsets()

  console.log(start, end)

  const toInsert: LexicalNode[] = []

  try {
    for (const node of nodes) {
      if (node.getType() === 'paragraph') {
        continue
      }

      if (node.getType() === 'span-node') {
        const spanNode = node as SpanNode
        spanNode.setFormat(format)

        const split = spanNode.splitText(start, end)
        console.log(split)

        toInsert.push(node)
      } else {
        const spanNode = new SpanNode(text)
        spanNode.setFormat(format)

        toInsert.push(spanNode)
      }
    }
  } catch (err) {
    console.log(err)
  }

  selection.removeText()
  selection?.insertNodes(toInsert)

  return true
}

export default handleTextFormat
