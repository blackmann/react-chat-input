import React from 'react'
import styles from './FileDrop.module.css'

interface FileDropProps extends React.PropsWithChildren {
  files?: File[]
  onChange?: (files: File[]) => void
}

const FilesContext = React.createContext<FileDropProps>({
  files: [],
  onChange: () => {
    console.error('Missing `FilesProvide`')
  },
})

function FilesProvider({ children, files, onChange }: FileDropProps) {
  return (
    <FilesContext.Provider value={{ files, onChange }}>
      {children}
    </FilesContext.Provider>
  )
}

function FileDrop({ children, files, onChange }: FileDropProps) {
  const [showDropHint, setShowDropHint] = React.useState(false)

  function handleDragOver(event: React.DragEvent) {
    event.preventDefault()

    if (!onChange) {
      return
    }

    setShowDropHint(true)
  }

  function handleDragEnd() {
    setShowDropHint(false)
  }

  function handleDrop(event: React.DragEvent) {
    event.preventDefault()

    if (!onChange) {
      return
    }

    const droppedFiles = Array.from(event.dataTransfer.files)
    // TODO: Handle duplicate files
    onChange?.([...(files ?? []), ...droppedFiles])

    setShowDropHint(false)
  }

  return (
    <FilesProvider files={files} onChange={onChange}>
      <div
        className={styles.fileDrop}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {showDropHint && <div className={styles.dropHint}>Drop files here</div>}
        {children}
      </div>
    </FilesProvider>
  )
}

export default FileDrop

export { FilesContext, FileDropProps }
