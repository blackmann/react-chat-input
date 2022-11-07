import { FORMAT_TEXT_COMMAND } from 'lexical'
import React from 'react'
import StrikethroughIcon from '../svgs/StrikethroughIcon'
import ToolButton from './ToolButton'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

function StrikethroughButton() {
  const [editor] = useLexicalComposerContext()

  function dispatchBold() {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
  }

  return (
    <ToolButton onClick={dispatchBold}>
      <StrikethroughIcon />
    </ToolButton>
  )
}

export default StrikethroughButton
