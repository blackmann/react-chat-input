import ChatInputProvider from '../contexts/chat-input-context'
import Composer from './Composer'
import Footer from './Footer'
import React from 'react'
import Toolbar from './Toolbar'

function ChatInput() {
  return (
    <ChatInputProvider>
      <Composer footer={<Footer />} header={<Toolbar />} />
    </ChatInputProvider>
  )
}

ChatInput.displayName = 'ChatInput'

export default ChatInput
