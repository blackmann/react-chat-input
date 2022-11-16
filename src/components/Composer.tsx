import ChatTextPlugin from '../plugins/ChatTextPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import React from 'react'
import { useDecorators } from '../hooks/use-decorators'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

function Composer() {
  const [editor] = useLexicalComposerContext()
  const decorators = useDecorators(editor, LexicalErrorBoundary)

  return (
    <>
      <ChatTextPlugin placeholder="Type a message…" />
      <HistoryPlugin />
      {decorators}
    </>
  )
}

export default Composer
