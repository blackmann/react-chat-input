import {
  EditorConfig,
  SerializedTextNode,
  TextFormatType,
  TextNode,
} from 'lexical'

class SpanNode extends TextNode {
  private format: Record<string, boolean> = {
    bold: false,
    italic: false,
    strikethrough: false,
  }

  private applyFormat(el: HTMLElement) {
    const classList = Object.keys(this.format).filter((k) => this.format[k])
    el.className = classList.join(' ')
  }

  createDOM(config: EditorConfig): HTMLElement {
    const el = super.createDOM(config)

    this.applyFormat(el)

    return el
  }

  exportJSON(): SerializedTextNode {
    throw new Error('todo: exportJSON()')
  }

  setFormat(format: number | TextFormatType): this {
    this.format[format] = !this.format[format]
    return this
  }

  updateDOM(
    prevNode: SpanNode,
    dom: HTMLElement,
    config: EditorConfig
  ): boolean {
    this.format = prevNode.format
    this.applyFormat(dom)
    return true
  }

  static clone(node: SpanNode): SpanNode {
    return new SpanNode(node.__text, node.__key)
  }

  static getType(): string {
    return 'span-node'
  }

  static importJSON(node: SerializedTextNode): SpanNode {
    throw new Error('todo: importJSON')
  }
}

export default SpanNode
