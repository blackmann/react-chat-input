import { ParagraphNode, RootNode } from 'lexical'
import TagNode, { $isTagNode } from './tag'
import { Element } from '../types'

function parseNodes(root: RootNode): Element[][] {
  const children = root.getChildren()
  const paragraphs: any[] = []

  for (const child of children) {
    const paragraph: any[] = []

    const paragraphNode = child as ParagraphNode

    for (const node of paragraphNode.getChildren()) {
      if ($isTagNode(node)) {
        const tagNode = node as TagNode
        paragraph.push({
          text: tagNode.getTextContent(),
          type: tagNode.type,
          value: tagNode.value,
        })
      } else {
        paragraph.push({ text: node.getTextContent(), type: 'text' })
      }
    }

    paragraphs.push(paragraph)
  }

  return paragraphs
}

export default parseNodes
