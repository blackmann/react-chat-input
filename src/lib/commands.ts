import { LexicalCommand, createCommand } from 'lexical'

interface AutoCompletionValue {
  selectionValue: SelectionValue
  textSpan: TextSpanResults
}

const INSERT_AUTOCOMPLETION: LexicalCommand<AutoCompletionValue> =
  createCommand()

export { INSERT_AUTOCOMPLETION }

export type { AutoCompletionValue }
