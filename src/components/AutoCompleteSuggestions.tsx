import { INSERT_AUTOCOMPLETION } from '../lib/commands'
import React from 'react'
import styles from './AutoCompleteSuggestions.module.css'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

import type {
  AutoCompleteSuggestionsProps,
  SelectionValue,
  TextSpanResults,
} from '../types'
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
      profile.filter(option, textSpan?.typedText ?? '')
    )
  }, [textSpan?.typedText, profile])

  function handleSelection(candidate: any) {
    const value = profile?.select(candidate) as SelectionValue

    const autoCompleteValue: AutoCompletionValue = {
      selectionValue: value,
      textSpan: textSpan as TextSpanResults,
    }

    editor.dispatchCommand(INSERT_AUTOCOMPLETION, autoCompleteValue)
  }

  if (textSpan === null || !profile || !filtered?.length) {
    return null
  }

  return (
    <div className={styles.suggestionsWrapper}>
      <div className={styles.suggestions}>
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
    </div>
  )
}

export default AutoCompleteSuggestions
