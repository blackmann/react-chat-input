import ChatTextPlugin from '../plugins/ChatTextPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import React from 'react'
import SpanNode from '../lib/span'

interface ComposerProps {
  footer?: React.ReactNode
  header?: React.ReactNode
}

const config = {
  namespace: 'chat-input',
  nodes: [SpanNode],
  onError() {},
  theme: { placeholder: 'placeholder' },
}

function Composer({ footer, header }: ComposerProps) {
  return (
    <LexicalComposer initialConfig={config}>
      <>{header}</>

      <ChatTextPlugin placeholder="Enter a text…" />
      <HistoryPlugin />

      <>{footer}</>
    </LexicalComposer>
  )
}

export default Composer
