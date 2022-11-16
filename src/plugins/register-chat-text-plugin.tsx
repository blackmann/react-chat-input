import {
  COMMAND_PRIORITY_EDITOR,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  DELETE_CHARACTER_COMMAND,
  FORMAT_TEXT_COMMAND,
  KEY_ENTER_COMMAND,
  LexicalCommand,
  LexicalEditor,
} from 'lexical'
import { CommandListener, CommandListenerPriority } from 'lexical/LexicalEditor'
import handleControlledTextInsertion from '../lib/handle-controlled-text-insertion'
import handleEnter from '../lib/handle-enter'
import handleNewline from '../lib/handle-newline'
import handleTextDeletion from '../lib/handle-text-deletion'
import handleTextFormat from '../lib/handle-text-format'
import { mergeRegister } from '@lexical/utils'

interface CommandHandles {
  command: LexicalCommand<any>
  handler: (editor: LexicalEditor) => CommandListener<any>
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
  {
    command: KEY_ENTER_COMMAND,
    handler: handleEnter,
    priority: COMMAND_PRIORITY_EDITOR,
  },
  {
    command: KEY_ENTER_COMMAND,
    handler: handleNewline,
    priority: COMMAND_PRIORITY_EDITOR,
  },
  {
    command: FORMAT_TEXT_COMMAND,
    handler: handleTextFormat,
    priority: COMMAND_PRIORITY_EDITOR,
  },
]

function registerChatTextPlugin(editor: LexicalEditor) {
  const removeListener = mergeRegister(
    ...commandHandles.map(({ command, handler, priority }) =>
      editor.registerCommand(command, handler(editor), priority)
    )
  )

  return removeListener
}

export default registerChatTextPlugin
