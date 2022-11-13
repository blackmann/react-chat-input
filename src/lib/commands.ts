import { LexicalCommand, createCommand } from 'lexical'

type AutoCompletionValue = SelectionValue & { prefix: string }

const INSERT_AUTOCOMPLETION: LexicalCommand<AutoCompletionValue> = createCommand()

export { INSERT_AUTOCOMPLETION }

export type { AutoCompletionValue }
