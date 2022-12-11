import React from 'react'
import styles from './FileDrop.module.css'

interface FileDropProps extends React.PropsWithChildren {
  files?: File[]
  onChange?: (files: File[]) => void
}
interface FileDropContextValue extends FileDropProps {
  enabled: boolean
}

const FilesContext = React.createContext<FileDropContextValue>({
  enabled: false,
  files: [],
  onChange: () => {
    console.error('Missing `FilesProvide`')
  },
})

function FilesProvider({ children, files, onChange }: FileDropProps) {
  return (
    <FilesContext.Provider
      value={{ enabled: Boolean(onChange), files, onChange }}
    >
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

  function addFiles(newFiles: File[]) {
    onChange?.([...(files ?? []), ...newFiles])
  }

  function handleDrop(event: React.DragEvent) {
    event.preventDefault()

    if (!onChange) {
      return
    }

    const droppedFiles = Array.from(event.dataTransfer.files)
    addFiles(droppedFiles)

    setShowDropHint(false)
  }

  function handleFilePaste(event: React.ClipboardEvent<HTMLDivElement>) {
    const files = event.clipboardData.files
    if (!files.length) {
      return
    }

    addFiles(Array.from(files))
  }

  return (
    <FilesProvider files={files} onChange={onChange}>
      <div
        className={styles.fileDrop}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onPaste={handleFilePaste}
      >
        {showDropHint && <div className={styles.dropHint}>Drop files here</div>}
        {children}
      </div>
    </FilesProvider>
  )
}

export default FileDrop

export { FilesContext, FileDropProps, FileDropContextValue }
