import { FORMAT_TEXT_COMMAND } from 'lexical'
import ItalicsIcon from '../svgs/ItalicsIcon'
import React from 'react'
import ToolButton from './ToolButton'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

function ItalicsButton() {
  const [editor] = useLexicalComposerContext()

  function dispatchItalics() {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
  }

  return (
    <ToolButton onClick={dispatchItalics}>
      <ItalicsIcon />
    </ToolButton>
  )
}

export default ItalicsButton
