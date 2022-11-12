import ChatTextPlugin from '../plugins/ChatTextPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import React from 'react'


function Composer() {
  return (
    <>
      <ChatTextPlugin placeholder="Enter a text…" />
      <HistoryPlugin />
    </>
  )
}

export default Composer
