import { $getSelection, RangeSelection } from 'lexical'

function handleNewline() {
  return (event: KeyboardEvent) => {
    const selection = $getSelection() as RangeSelection | null
    selection?.insertParagraph()
    return true
  }
}

export default handleNewline
