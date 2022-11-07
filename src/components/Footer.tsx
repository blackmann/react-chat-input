import { $generateHtmlFromNodes } from '@lexical/html'
import { $getRoot } from 'lexical'
import EmojiButton from './EmojiButton'
import React from 'react'
import styles from './Footer.module.css'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import MentionButton from './MentionButton'

function Footer() {
  const [editor] = useLexicalComposerContext()

  function handleSend() {
    editor.update(() => {
      const html = $generateHtmlFromNodes(editor)
      const root = $getRoot()
      console.log(html, root.getChildren())
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
