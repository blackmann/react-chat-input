import React from 'react'
import styles from './ToolButton.module.css'

interface ToolButtonProps extends React.ComponentProps<'button'> {}

function ToolButton({ children, ...props }: ToolButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}

export default ToolButton
