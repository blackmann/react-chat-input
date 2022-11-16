import { LexicalEditor } from 'lexical'
import { SEND } from './commands'

function handleEnter(editor: LexicalEditor) {
  return (event: KeyboardEvent) => {
    if (event.shiftKey) {
      return false
    }

    return editor.dispatchCommand(SEND, undefined)
  }
}

export default handleEnter
