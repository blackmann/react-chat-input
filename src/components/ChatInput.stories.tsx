import ChatInput from './ChatInput'
import React from 'react'

export const SimpleChatInput = () => <ChatInput />

const autoCompleteProfiles: AutoCompleteProfile[] = [
  {
    filter: (option: string, keyword: string) =>
      option.toLowerCase().includes(keyword.toLocaleLowerCase()),
    matchRegex: /[\w\d]+/,
    name: 'mention',
    options: ['Not Gr', 'Jamestown', 'Janet Doe'],
    render: (option: string) => option,
    select: (option: string) => ({ text: option, value: option }),
    trigger: '@',
  },
]

export const WithMentions = () => (
  <ChatInput autoCompleteProfiles={autoCompleteProfiles} />
)
