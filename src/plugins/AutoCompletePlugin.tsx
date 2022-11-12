import { EditorState, LexicalEditor } from 'lexical'
import AutoCompleteSuggestions from '../components/AutoCompleteSuggestions'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import React from 'react'
import getAutocompleteArgs from './get-auto-complete-args'
import registerAutoComplete from './register-auto-complete'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

import type { ScanResult } from './get-auto-complete-args'

interface AutoCompletePluginProps {
  autoCompleteProfiles?: AutoCompleteProfile[]
}

function AutoCompletePlugin({ autoCompleteProfiles }: AutoCompletePluginProps) {
  const [editor] = useLexicalComposerContext()
  const [scanResults, setScanResults] = React.useState<ScanResult>({
    arg: null,
    trigger: null,
  })

  const handleChange = React.useCallback(
    (state: EditorState, editor: LexicalEditor) => {
      const args = getAutocompleteArgs(state, editor)
      setScanResults(() => args)
    },
    []
  )

  React.useEffect(() => {
    return registerAutoComplete(editor)
  }, [])

  if (!autoCompleteProfiles || autoCompleteProfiles.length === 0) {
    return null
  }

  return (
    <>
      <OnChangePlugin onChange={handleChange} />
      <AutoCompleteSuggestions
        keyword={scanResults.arg}
        profiles={autoCompleteProfiles}
        trigger={scanResults.trigger}
      />
    </>
  )
}

export default AutoCompletePlugin

export type { AutoCompletePluginProps }
