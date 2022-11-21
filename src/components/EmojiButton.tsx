import 'emoji-picker-element'
import { $getSelection } from 'lexical'
import EmojiIcon from '../svgs/EmojiIcon'
import React from 'react'
import ReactDOM from 'react-dom'
import ToolButton from './ToolButton'
import styles from './EmojiButton.module.css'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

function EmojiButton() {
  const [editor] = useLexicalComposerContext()
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const emojiPickerRef = React.useRef<any>()

  const [showPicker, setShowPicker] = React.useState(false)

  const [xy, setXy] = React.useState([0, 0])

  function handleClick() {
    editor.update(() => {
      const domSelection = window.getSelection()

      if (domSelection) {
        const range = domSelection.getRangeAt(0)
        const boundingRect = range.getBoundingClientRect()

        const x =
          (boundingRect.left ||
            buttonRef.current?.getBoundingClientRect().left) ??
          0
        const y =
          (boundingRect.top ||
            buttonRef.current?.getBoundingClientRect().top) ??
          0

        setXy([x, y])
      }
    })

    setShowPicker(true)
  }

  function hidePicker() {
    setShowPicker(false)
  }

  React.useEffect(() => {
    function handleEmojiEntry(event: any) {
      editor.update(() => {
        const selection = $getSelection()
        selection?.insertText(event.detail.unicode)
      })
    }

    const emojiPicker = emojiPickerRef.current
    emojiPicker?.addEventListener('emoji-click', handleEmojiEntry)

    return () =>
      emojiPicker?.removeEventListener('emoji-click', handleEmojiEntry)
  })

  return (
    <>
      <ToolButton
        className={styles.emojiButton}
        onClick={showPicker ? undefined : handleClick}
        ref={buttonRef}
        size="medium"
      >
        <EmojiIcon />
      </ToolButton>

      {showPicker && (
        <>
          {ReactDOM.createPortal(
            <div
              className={styles.emojiPicker}
              style={{ left: xy[0], top: xy[1] }}
            >
              {/** @ts-expect-error */}
              <emoji-picker onBlur={hidePicker} ref={emojiPickerRef} />
            </div>,
            document.body
          )}

          {ReactDOM.createPortal(
            <div className={styles.interceptor} onClick={hidePicker}></div>,
            document.body
          )}
        </>
      )}
    </>
  )
}

export default EmojiButton
