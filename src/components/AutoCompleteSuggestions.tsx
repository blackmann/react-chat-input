import { INSERT_AUTOCOMPLETION } from '../lib/commands'
import React from 'react'
import styles from './AutoCompleteSuggestions.module.css'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

import type { AutoCompletionValue } from '../lib/commands'

function AutoCompleteSuggestions({
  trigger,
  profiles,
  keyword,
}: AutoCompleteSuggestionsProps) {
  const [editor] = useLexicalComposerContext()

  const profile = React.useMemo(() => {
    return profiles.find((profile) => profile.trigger === trigger)
  }, [profiles, trigger])

  const filtered = React.useMemo(() => {
    return profile?.options.filter((option) =>
      profile.filter(option, keyword ?? '')
    )
  }, [keyword, profile])

  function handleSelection(candidate: any) {
    const value = profile?.select(candidate) as SelectionValue
    const selectionValue: AutoCompletionValue = {
      prefix: trigger as string,
      ...value,
    }
    editor.dispatchCommand(INSERT_AUTOCOMPLETION, selectionValue)
  }

  if (trigger === null || !profile) {
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
