import { CLEAR_EDITOR_COMMAND } from 'lexical'
import React from 'react'
import useFiles from '../hooks/use-files'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

interface ChatInputRef {
  clear: VoidFunction
}

interface APIRefPluginProps {
  passedRef?: React.Ref<ChatInputRef> | null
}

function APIRefPlugin({ passedRef }: APIRefPluginProps) {
  const [editor] = useLexicalComposerContext()
  const { onChange: setFiles } = useFiles()

  const clearInput = React.useCallback(() => {
    editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined)
    setFiles?.([])
  }, [editor, setFiles])

  React.useEffect(() => {
    if (!passedRef || typeof passedRef === 'function') {
      return
    }

    ;(passedRef as React.MutableRefObject<ChatInputRef>).current = {
      clear: clearInput,
    }
  }, [clearInput, passedRef])

  return null
}

export default APIRefPlugin

export type { ChatInputRef }
