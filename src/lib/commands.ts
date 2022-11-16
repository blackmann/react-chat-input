import { LexicalCommand, createCommand } from 'lexical'

import type { SelectionValue, TextSpanResults } from '../types'

interface AutoCompletionValue {
  selectionValue: SelectionValue
  textSpan: TextSpanResults
}

const INSERT_AUTOCOMPLETION: LexicalCommand<AutoCompletionValue> =
  createCommand()

const SEND: LexicalCommand<void> = createCommand()

export { INSERT_AUTOCOMPLETION, SEND }

export type { AutoCompletionValue }
