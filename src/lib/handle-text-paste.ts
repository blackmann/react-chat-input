import { $getSelection } from 'lexical'

function handleTextPaste() {
  return (event: ClipboardEvent) => {
    const text = event.clipboardData?.getData('text')
    if (!text) {
      return false
    }

    const selection = $getSelection()
    selection?.insertText(text)

    return true
  }
}

export default handleTextPaste
