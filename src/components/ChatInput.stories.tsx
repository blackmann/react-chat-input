import ChatInput from './ChatInput'
import React from 'react'
import styles from './ChatInput.stories.module.css'

export const SimpleChatInput = () => <ChatInput />

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
        />
      </div>
    </>
  )
}

export const WithMentions = () => <ChatInputWithMentions />
