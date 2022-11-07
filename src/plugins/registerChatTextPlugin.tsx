import {
  COMMAND_PRIORITY_EDITOR,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  DELETE_CHARACTER_COMMAND,
  LexicalCommand,
  LexicalEditor,
} from 'lexical'
import { CommandListener, CommandListenerPriority } from 'lexical/LexicalEditor'
import handleControlledTextInsertion from '../lib/handle-controlled-text-insertion'
import handleTextDeletion from '../lib/handle-text-deletion'
import { mergeRegister } from '@lexical/utils'

interface CommandHandles {
  command: LexicalCommand<any>
  handler: CommandListener<any>
  priority: CommandListenerPriority
}

const commandHandles: CommandHandles[] = [
  {
    command: CONTROLLED_TEXT_INSERTION_COMMAND,
    handler: handleControlledTextInsertion,
    priority: COMMAND_PRIORITY_EDITOR,
  },
  {
    command: DELETE_CHARACTER_COMMAND,
    handler: handleTextDeletion,
    priority: COMMAND_PRIORITY_EDITOR,
  },
]

function registerChatTextPlugin(editor: LexicalEditor) {
  const removeListener = mergeRegister(
    ...commandHandles.map(({ command, handler, priority }) =>
      editor.registerCommand(command, handler, priority)
    )
  )

  return removeListener
}

export default registerChatTextPlugin
