import { $getRoot, LexicalEditor } from 'lexical'

function hasText(editor: LexicalEditor) {
  let res = false
  const editorState = editor.getEditorState()

  editorState.read(() => {
    const text = $getRoot().getTextContent()
    res = text.trim().length > 0
  })

  return res
}

export default hasText
