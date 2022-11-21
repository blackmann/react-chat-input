import React from 'react'
import clsx from 'clsx'
import styles from './ToolButton.module.css'

interface ToolButtonProps extends React.ComponentProps<'button'> {
  size?: 'normal' | 'medium' | 'large'
}

const ToolButton = React.forwardRef(
  (
    { children, className, size = 'normal', ...props }: ToolButtonProps,
    ref: React.Ref<any>
  ) => {
    return (
      <button
        className={clsx(styles.button, className, size)}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

ToolButton.displayName = 'ToolButton'

export default ToolButton
