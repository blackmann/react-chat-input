import AutoCompleteSuggestions from '../components/AutoCompleteSuggestions'
import { EditorState } from 'lexical'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import React from 'react'
import getAutocompleteArgs from '../lib/get-auto-complete-args'
import registerAutoComplete from './register-auto-complete'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

interface AutoCompletePluginProps {
  autoCompleteProfiles?: AutoCompleteProfile[]
}

function AutoCompletePlugin({ autoCompleteProfiles }: AutoCompletePluginProps) {
  const [editor] = useLexicalComposerContext()

  const [scanResults, setScanResults] = React.useState<TextSpanResults | null>(
    null
  )

  const handleChange = React.useCallback(
    (state: EditorState) => {
      const args = getAutocompleteArgs(state, autoCompleteProfiles ?? [])
      setScanResults(args)
    },
    [autoCompleteProfiles]
  )

  React.useEffect(() => {
    return registerAutoComplete(editor)
  }, [editor])

  if (!autoCompleteProfiles || autoCompleteProfiles.length === 0) {
    return null
  }

  return (
    <>
      <OnChangePlugin onChange={handleChange} />
      <AutoCompleteSuggestions
        profiles={autoCompleteProfiles}
        textSpan={scanResults}
      />
    </>
  )
}

export default AutoCompletePlugin

export type { AutoCompletePluginProps }
