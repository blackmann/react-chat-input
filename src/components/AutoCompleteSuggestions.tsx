import React from 'react'
import styles from './AutoCompleteSuggestions.module.css'

function AutoCompleteSuggestions({
  trigger,
  profiles,
  keyword,
}: AutoCompleteSuggestionsProps) {
  const profile = React.useMemo(() => {
    return profiles.find((profile) => profile.trigger === trigger)
  }, [profiles, trigger])

  const filtered = React.useMemo(() => {
    return profile?.options.filter((option) =>
      profile.filter(option, keyword ?? '')
    )
  }, [keyword, profile])

  if (trigger === null || !profile) {
    return null
  }

  return (
    <div>
      {filtered?.map((candidate, index) => (
        <div className={styles.suggestion} key={index}>
          {profile.render(candidate)}
        </div>
      ))}
    </div>
  )
}

export default AutoCompleteSuggestions
