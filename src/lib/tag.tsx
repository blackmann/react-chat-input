import {
  DecoratorNode,
  LexicalNode,
  NodeKey,
  SerializedTextNode,
} from 'lexical'
import React from 'react'
import Tag from '../components/Tag'

class TagNode extends DecoratorNode<React.ReactNode> {
  prefix: string
  text: string

  constructor(prefix: string, text: string, key?: NodeKey) {
    super(key)
    this.prefix = prefix
    this.text = text
  }

  createDOM(): HTMLElement {
    return document.createElement('span')
  }

  decorate(): React.ReactNode {
    return <Tag prefix={this.prefix}>{this.text}</Tag>
  }

  getTextContent(): string {
    return this.text
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
    return new TagNode(node.prefix, node.text)
  }

  static importJSON(node: SerializedTextNode): TagNode {
    throw new Error('todo: importJSON')
  }
}

function $createTagNode(prefix: string, text: string) {
  return new TagNode(prefix, text)
}

export default TagNode

export { $createTagNode }
