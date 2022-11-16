import ChatInput from './ChatInput'
import React from 'react'
import styles from './ChatInput.stories.module.css'

import type { AutoCompleteProfile } from '../types'
import { ChatInputRef } from '../plugins/APIRefPlugin'

export const SimpleChatInput = () => <ChatInput onSend={console.log} />

const autoCompleteProfiles: AutoCompleteProfile[] = [
  {
    filter: (option: string, keyword: string) =>
      option.toLowerCase().includes(keyword.toLocaleLowerCase()),
    matchRegex: /[\w\d]*/,
    name: 'mention',
    options: ['Not Gr', 'Jamestown', 'Janet Doe'],
    render: (option: string) => option,
    select: (option: string) => ({ text: option, value: option }),
    trigger: '@',
  },
]

function ChatInputWithMentions() {
  const [files, setFiles] = React.useState<File[]>([])
  const ref = React.useRef<ChatInputRef>(null)

  function handleSend() {
    ref.current?.clear()
  }

  return (
    <>
      <div className={styles.messages}>
        <div className={styles.message}>
          <header>@above &bull; now</header>
          <p>Hello @world, this is a message to you all.</p>
        </div>
      </div>

      <div className={styles.chatInput}>
        <ChatInput
          autoCompleteProfiles={autoCompleteProfiles}
          enableFormatting={false}
          files={files}
          onFilesChange={(files) => setFiles(files)}
          onSend={handleSend}
          ref={ref}
        />
      </div>
    </>
  )
}

export const WithMentions = () => <ChatInputWithMentions />
