import BoldButton from './BoldButton'
import ItalicsButton from './ItalicsButton'
import React from 'react'
import StrikethroughButton from './StrikethroughButton'
import styles from './Toolbar.module.css'

interface ToolbarProps {
  enabled?: boolean
}

const actions = [
  { element: <BoldButton />, title: 'Bold' },
  { element: <ItalicsButton />, title: 'Italics' },
  { element: <StrikethroughButton />, title: 'Strikethrough' },
]

function Toolbar({ enabled = true }: ToolbarProps) {
  if (!enabled) {
    return null
  }

  return (
    <div className={styles.actions}>
      {actions.map((action) => (
        <React.Fragment key={action.title}>{action.element}</React.Fragment>
      ))}
    </div>
  )
}

export default Toolbar
