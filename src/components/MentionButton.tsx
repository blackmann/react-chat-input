import { $getSelection, $isRangeSelection } from 'lexical'
import MentionIcon from '../svgs/MentionIcon'
import React from 'react'
import ToolButton from './ToolButton'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

function MentionButton() {
  const [editor] = useLexicalComposerContext()

  function handleClick() {
    // TODO: Prevent the `at` sign from entering if autocompletion
    // is already activated
    editor.update(() => {
      const selection = $getSelection()
      if ($isRangeSelection(selection)) {
        selection?.insertText('@')
      }
    })
  }

  return (
    <ToolButton onClick={handleClick} size="medium">
      <MentionIcon />
    </ToolButton>
  )
}

export default MentionButton
