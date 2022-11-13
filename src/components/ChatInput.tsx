import AutoCompletePlugin from '../plugins/AutoCompletePlugin'
import Composer from './Composer'
import Footer from './Footer'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import React from 'react'
import TagNode from '../lib/tag'
import Toolbar from './Toolbar'
import TreeViewPlugin from '../plugins/TreeViewPlugin'

import type { AutoCompletePluginProps } from '../plugins/AutoCompletePlugin'

type ChatInputProps = AutoCompletePluginProps

const config = {
  namespace: 'chat-input',
  nodes: [TagNode],
  onError(error: any) {
    console.error(error)
  },
  theme: { placeholder: 'placeholder' },
}

function ChatInput({ autoCompleteProfiles }: ChatInputProps) {
  return (
    <LexicalComposer initialConfig={config}>
      <Toolbar />
      <AutoCompletePlugin autoCompleteProfiles={autoCompleteProfiles} />
      <Composer />
      <Footer />
      <TreeViewPlugin />
    </LexicalComposer>
  )
}

ChatInput.displayName = 'ChatInput'

export default ChatInput
