import { INSERT_AUTOCOMPLETION } from '../lib/commands'
import React from 'react'
import styles from './AutoCompleteSuggestions.module.css'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

import type { AutoCompletionValue } from '../lib/commands'

function AutoCompleteSuggestions({
  profiles,
  textSpan,
}: AutoCompleteSuggestionsProps) {
  const [editor] = useLexicalComposerContext()

  const profile = React.useMemo(() => {
    return profiles.find((profile) => profile.trigger === textSpan?.lead)
  }, [profiles, textSpan?.lead])

  const filtered = React.useMemo(() => {
    return profile?.options.filter((option) =>
      profile.filter(option, textSpan?.text ?? '')
    )
  }, [textSpan?.text, profile])

  function handleSelection(candidate: any) {
    const value = profile?.select(candidate) as SelectionValue
    const selectionValue: AutoCompletionValue = {
      textSpan: textSpan!,
      ...value,
    }
    editor.dispatchCommand(INSERT_AUTOCOMPLETION, selectionValue)
  }

  if (textSpan === null || !profile) {
    return null
  }

  return (
    <div>
      {filtered?.map((candidate, index) => (
        <div
          className={styles.suggestion}
          key={index}
          onClick={() => handleSelection(candidate)}
        >
          {profile.render(candidate)}
        </div>
      ))}
    </div>
  )
}

export default AutoCompleteSuggestions
