import EmojiIcon from '../svgs/EmojiIcon'
import React from 'react'
import ToolButton from './ToolButton'

function EmojiButton() {
  return (
    <ToolButton size="medium">
      <EmojiIcon />
    </ToolButton>
  )
}

export default EmojiButton
