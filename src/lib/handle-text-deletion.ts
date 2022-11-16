import { $getSelection, RangeSelection } from 'lexical'

function handleTextDeletion() {
  return (event: boolean) => {
    const selection = $getSelection() as RangeSelection | null
    selection?.deleteCharacter(event)
    return true
  }
}

export default handleTextDeletion
