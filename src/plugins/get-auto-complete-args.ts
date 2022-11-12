import {
  $getSelection,
  EditorState,
  LexicalEditor,
  RangeSelection,
} from 'lexical'

interface ScanResult {
  arg: string | null
  trigger: string | null
}

function getAutocompleteArgs(
  state: EditorState,
  editor: LexicalEditor
): ScanResult {
  const scan: ScanResult = { arg: null, trigger: null }

  state.read(() => {
    const selection = $getSelection() as RangeSelection
    const [start, end] = selection.getCharacterOffsets()
    if (start !== end) {
      // this is an highlight, so skip
      return
    }

    const [node] = selection.getNodes()
    const text = node.getTextContent()

    const chars = new Array<string>(start)
    let index = 0
    let cursor = start - 1
    while (cursor >= 0) {
      if (text[cursor] === ' ') {
        // we don't look past space
        break
      }
      chars[index] = text[cursor]

      index += 1
      cursor -= 1
    }

    index -= 1

    // TODO: We can also look ahead and check for the rest of the text

    const trigger = chars[index--]
    if (trigger === '@') {
      let arg = ''

      while (index >= 0) {
        arg += chars[index]
        index -= 1
      }

      scan.arg = arg
      scan.trigger = trigger
    }
  })

  return scan
}

export default getAutocompleteArgs

export type { ScanResult }
