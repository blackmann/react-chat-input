import {
  DecoratorNode,
  LexicalNode,
  NodeKey,
  SerializedTextNode,
} from 'lexical'
import React from 'react'
import Tag from '../components/Tag'

interface TagValue {
  prefix: string
  text: string
  type: string
  value: any
}

class TagNode extends DecoratorNode<React.ReactNode> {
  prefix: string
  text: string
  type: string
  value: any

  constructor({ prefix, text, type, value }: TagValue, key?: NodeKey) {
    super(key)
    this.prefix = prefix
    this.text = text
    this.type = type
    this.value = value
  }

  createDOM(): HTMLElement {
    return document.createElement('span')
  }

  decorate(): React.ReactNode {
    return <Tag prefix={this.prefix}>{this.text}</Tag>
  }

  getTextContent(): string {
    return `${this.prefix}${this.text}`
  }

  exportJSON(): SerializedTextNode {
    throw new Error('todo: exportJSON()')
  }

  isInline(): boolean {
    return true
  }

  updateDOM(): boolean {
    return true
  }

  static getType(): string {
    return 'tag'
  }

  static clone(node: TagNode): LexicalNode {
    return new TagNode({
      prefix: node.prefix,
      text: node.text,
      type: node.type,
      value: node.value,
    })
  }

  static importJSON(node: SerializedTextNode): TagNode {
    throw new Error('todo: importJSON')
  }
}

function $createTagNode(tagValue: TagValue) {
  return new TagNode(tagValue)
}

function $isTagNode(node: LexicalNode) {
  return node instanceof TagNode
}

export default TagNode

export { $createTagNode, $isTagNode }
