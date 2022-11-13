import React from 'react'
import styles from './Tag.module.css'

interface TagProps extends React.PropsWithChildren {
  prefix: string
}

function Tag({ children, prefix }: TagProps) {
  return (
    <span className={styles.tag}>
      <span className={styles.prefix}>{prefix}</span>{children}
    </span>
  )
}

export default Tag
