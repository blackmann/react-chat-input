import React from 'react'
import shortenString from '../lib/shorten-string'
import styles from './FilesPreview.module.css'
import useFiles from '../hooks/use-files'

function FilesPreviewPlugin() {
  const { files, onChange } = useFiles()

  function handleRemove(file: File) {
    onChange?.(files?.filter((it) => it !== file) ?? [])
  }

  return (
    <div className={styles.preview}>
      {files?.map((file, index) => (
        <div
          className={styles.file}
          key={`${file.name}-${index}`}
          title={file.name}
        >
          <span>{shortenString(file.name, 13)}</span>

          <button
            className={styles.removeButton}
            onClick={() => handleRemove(file)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  )
}

export default FilesPreviewPlugin
