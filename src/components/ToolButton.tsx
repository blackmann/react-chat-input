import React from 'react'
import clsx from 'clsx'
import styles from './ToolButton.module.css'

interface ToolButtonProps extends React.ComponentProps<'button'> {
  size?: 'normal' | 'medium' | 'large'
}

function ToolButton({
  children,
  className,
  size = 'normal',
  ...props
}: ToolButtonProps) {
  return (
    <button className={clsx(styles.button, className, size)} {...props}>
      {children}
    </button>
  )
}

export default ToolButton
