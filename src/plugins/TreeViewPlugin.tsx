import React from 'react'
import { TreeView } from '@lexical/react/LexicalTreeView'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

function TreeViewPlugin() {
  const [editor] = useLexicalComposerContext()

  return (
    <TreeView
      editor={editor}
      timeTravelButtonClassName="debug-timetravel-button"
      timeTravelPanelButtonClassName="debug-timetravel-panel-button"
      timeTravelPanelClassName="debug-timetravel-panel"
      timeTravelPanelSliderClassName="debug-timetravel-panel-slider"
      viewClassName="tree-view-output"
    />
  )
}

export default TreeViewPlugin
