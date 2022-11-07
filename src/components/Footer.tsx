import { $generateHtmlFromNodes } from '@lexical/html'
import { $getRoot } from 'lexical'
import React from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

function Footer() {
  const [editor] = useLexicalComposerContext()

  function handleSend() {
    editor.update(() => {
      const html = $generateHtmlFromNodes(editor)
      const root = $getRoot()
      console.log(html, root.getChildren())
    })
  }

  return (
    <footer>
      <button className="send" onClick={handleSend}>
        Send
      </button>
    </footer>
  )
}

export default Footer
