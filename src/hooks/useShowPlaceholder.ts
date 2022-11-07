import { $canShowPlaceholderCurry } from '@lexical/text'
import { LexicalEditor } from 'lexical'
import React from 'react'
import { mergeRegister } from '@lexical/utils'

function canShowPlaceholder(editor: LexicalEditor) {
  return editor
    .getEditorState()
    .read($canShowPlaceholderCurry(editor.isComposing(), editor.isEditable()))
}

function useShowPlaceholder(editor: LexicalEditor) {
  const [showPlaceholder, setShowPlaceholder] = React.useState(true)

  React.useLayoutEffect(() => {
    function setShow() {
      setShowPlaceholder(canShowPlaceholder(editor))
    }

    return mergeRegister(
      editor.registerUpdateListener(() => setShow()),
      editor.registerEditableListener(() => setShow())
    )
  }, [editor])

  return showPlaceholder
}

export default useShowPlaceholder
