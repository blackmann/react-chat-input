import APIRefPlugin, { ChatInputRef } from '../plugins/APIRefPlugin'
import AutoCompletePlugin from '../plugins/AutoCompletePlugin'
import Composer from './Composer'
import FileDrop from './FileDrop'
import FilesPreviewPlugin from '../plugins/FilesPreviewPlugin'
import Footer from './Footer'
import { ClearEditorPlugin as LexicalClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import React from 'react'
import TagNode from '../lib/tag'
import Toolbar from './Toolbar'

import type { AutoCompletePluginProps } from '../plugins/AutoCompletePlugin'
import type { OnSendCallback } from '../types'

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

const ChatInput = React.forwardRef(
  (
    {
      autoCompleteProfiles,
      enableFormatting,
      files,
      onFilesChange,
      onSend,
    }: ChatInputProps,
    ref: React.Ref<ChatInputRef> | null
  ) => {
    return (
      <LexicalComposer initialConfig={config}>
        <FileDrop files={files} onChange={onFilesChange}>
          <Toolbar enabled={enableFormatting} />
          <AutoCompletePlugin autoCompleteProfiles={autoCompleteProfiles} />
          <Composer />
          <FilesPreviewPlugin />
          <Footer onSend={onSend} />
          <APIRefPlugin
            passedRef={ref as React.MutableRefObject<ChatInputRef> | null}
          />
          <LexicalClearEditorPlugin />
        </FileDrop>
      </LexicalComposer>
    )
  }
)

ChatInput.displayName = 'ChatInput'

export default ChatInput
