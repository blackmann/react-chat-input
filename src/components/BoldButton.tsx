import BoldIcon from '../svgs/BoldIcon'
import { FORMAT_TEXT_COMMAND } from 'lexical'
import React from 'react'
import ToolButton from './ToolButton'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

function BoldButton() {
  const [editor] = useLexicalComposerContext()

  function dispatchBold() {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
  }

  return (
    <ToolButton onClick={dispatchBold}>
      <BoldIcon />
    </ToolButton>
  )
}

export default BoldButton
