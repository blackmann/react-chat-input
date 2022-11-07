import React from 'react'

interface ChatInputProviderProps extends React.PropsWithChildren {}

const ChatInputContext = React.createContext(null)

function ChatInputProvider({ children }: ChatInputProviderProps) {
  return (
    <ChatInputContext.Provider value={null}>
      {children}
    </ChatInputContext.Provider>
  )
}

export default ChatInputProvider
