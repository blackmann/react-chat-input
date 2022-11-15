import { $getRoot } from 'lexical'
import EmojiButton from './EmojiButton'
import MentionButton from './MentionButton'
import React from 'react'
import parseNodes from '../lib/parse-nodes'
import styles from './Footer.module.css'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

interface FooterProps {
  onSend?: OnSendCallback
}

function Footer({ onSend }: FooterProps) {
  const [editor] = useLexicalComposerContext()

  function handleSend() {
    editor.getEditorState().read(() => {
      const parsed = parseNodes($getRoot())
      onSend?.({
        text: $getRoot().getTextContent(),
        textElements: parsed,
      })
    })
  }

  return (
    <footer className={styles.footer}>
      <div>
        <EmojiButton />
        <MentionButton />
      </div>

      <button className={styles.sendButton} onClick={handleSend}>
        Send
      </button>
    </footer>
  )
}

export default Footer
