import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import React from 'react'
import registerChatTextPlugin from './registerChatTextPlugin'
import styles from './ChatTextPlugin.module.css'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import useShowPlaceholder from '../hooks/useShowPlaceholder'

interface ChatTextPluginProps {
  placeholder?: React.ReactNode
}

function ChatTextPlugin({ placeholder }: ChatTextPluginProps) {
  const [editor] = useLexicalComposerContext()
  const showPlaceholder = useShowPlaceholder(editor)

  React.useEffect(() => {
    registerChatTextPlugin(editor)
  }, [])

  return (
    <div className={styles.chatInput}>
      <ContentEditable className={styles.contentEditable} />
      {showPlaceholder && (
        <span className={styles.placeholder}>{placeholder}</span>
      )}
    </div>
  )
}

export default ChatTextPlugin
