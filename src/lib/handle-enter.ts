function handleEnter(event: KeyboardEvent) {
  if (event.shiftKey) {
    return false
  }

  return true
}

export default handleEnter
