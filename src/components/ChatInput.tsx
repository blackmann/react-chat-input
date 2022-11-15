import AutoCompletePlugin from '../plugins/AutoCompletePlugin'
import Composer from './Composer'
import FileDrop from './FileDrop'
import Footer from './Footer'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import React from 'react'
import TagNode from '../lib/tag'
import Toolbar from './Toolbar'

import type { AutoCompletePluginProps } from '../plugins/AutoCompletePlugin'
import FilesPreviewPlugin from '../plugins/FilesPreviewPlugin'

interface ChatInputProps extends AutoCompletePluginProps {
  enableFormatting?: boolean
  files?: File[]
  onFilesChange?: (files: File[]) => void
  onSend: OnSendCallback
}

const config = {
  namespace: 'chat-input',
  nodes: [TagNode],
  onError(error: any) {
    console.error(error)
  },
  theme: { placeholder: 'placeholder' },
}

function ChatInput({
  autoCompleteProfiles,
  enableFormatting,
  files,
  onFilesChange,
  onSend,
}: ChatInputProps) {
  return (
    <LexicalComposer initialConfig={config}>
      <FileDrop files={files} onChange={onFilesChange}>
        <Toolbar enabled={enableFormatting} />
        <AutoCompletePlugin autoCompleteProfiles={autoCompleteProfiles} />
        <Composer />
        <FilesPreviewPlugin />
        <Footer onSend={onSend} />
      </FileDrop>
    </LexicalComposer>
  )
}

ChatInput.displayName = 'ChatInput'

export default ChatInput
