import { $getRoot, COMMAND_PRIORITY_EDITOR } from 'lexical'
import EmojiButton from './EmojiButton'
import MentionButton from './MentionButton'
import React from 'react'
import hasTextContent from '../lib/has-text'
import parseNodes from '../lib/parse-nodes'
import styles from './Footer.module.css'
import useFiles from '../hooks/use-files'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

import type { OnSendCallback } from '../types'
import { SEND } from '../lib/commands'

interface FooterProps {
  onSend?: OnSendCallback
}

function Footer({ onSend }: FooterProps) {
  const [hasText, setHasText] = React.useState(false)
  const [editor] = useLexicalComposerContext()
  const { enabled: fileUploadEnabled, files } = useFiles()

  const handleSend = React.useCallback(() => {
    editor.getEditorState().read(() => {
      const parsed = parseNodes($getRoot())
      onSend?.({
        text: $getRoot().getTextContent(),
        textElements: parsed,
      })
    })
  }, [editor, onSend])

  const canSend = React.useMemo(
    () => hasText || files?.length,
    [files?.length, hasText]
  )

  React.useEffect(() => {
    return editor.registerCommand(
      SEND,
      () => {
        if (canSend) {
          handleSend()
        }

        return true
      },
      COMMAND_PRIORITY_EDITOR
    )
  }, [editor, canSend, handleSend])

  React.useEffect(() => {
    editor.registerUpdateListener(() => {
      setHasText(hasTextContent(editor))
    })
  }, [editor])

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.widgets}>
          <EmojiButton />
          <MentionButton />

          {fileUploadEnabled && (
            <span className={styles.dropMessage}>
              Drop files here to upload
            </span>
          )}
        </div>

        <button
          className={styles.sendButton}
          disabled={!canSend}
          onClick={handleSend}
        >
          Send
        </button>
      </footer>
    </>
  )
}

export default Footer
