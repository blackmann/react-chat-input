import {
  COMMAND_PRIORITY_EDITOR,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  LexicalEditor,
} from 'lexical'
import { INSERT_AUTOCOMPLETION } from '../lib/commands'
import handleAutoCompleteInsert from '../lib/handle-autocomplete-insert'
import { mergeRegister } from '@lexical/utils'

function handleEntry(event: InputEvent) {
  return false
}

function registerAutoComplete(editor: LexicalEditor) {
  const removeAutoCompletePlugin = mergeRegister(
    editor.registerCommand(
      CONTROLLED_TEXT_INSERTION_COMMAND,
      handleEntry,
      COMMAND_PRIORITY_EDITOR
    ),
    editor.registerCommand(
      INSERT_AUTOCOMPLETION,
      handleAutoCompleteInsert,
      COMMAND_PRIORITY_EDITOR
    )
  )

  return removeAutoCompletePlugin
}

export default registerAutoComplete
