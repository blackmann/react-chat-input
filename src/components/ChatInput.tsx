import AutoCompletePlugin from '../plugins/AutoCompletePlugin'
import Composer from './Composer'
import Footer from './Footer'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import React from 'react'
import SpanNode from '../lib/span'
import Toolbar from './Toolbar'

import type { AutoCompletePluginProps } from '../plugins/AutoCompletePlugin'

type ChatInputProps = AutoCompletePluginProps

const config = {
  namespace: 'chat-input',
  nodes: [SpanNode],
  onError() {},
  theme: { placeholder: 'placeholder' },
}

function ChatInput({ autoCompleteProfiles }: ChatInputProps) {
  return (
    <LexicalComposer initialConfig={config}>
      <Toolbar />
      <AutoCompletePlugin autoCompleteProfiles={autoCompleteProfiles} />
      <Composer />
      <Footer />
    </LexicalComposer>
  )
}

ChatInput.displayName = 'ChatInput'

export default ChatInput
