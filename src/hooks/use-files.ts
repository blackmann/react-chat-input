import { FilesContext } from '../components/FileDrop'
import React from 'react'

function useFiles() {
  return React.useContext(FilesContext)
}

export default useFiles
