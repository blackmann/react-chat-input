import type { LexicalEditor } from 'lexical'
import React from 'react'
import ReactDOM from 'react-dom'

interface ErrorBoundaryProps {
  children: JSX.Element
  onError: (error: Error) => void
}
export type ErrorBoundaryType =
  | React.ComponentClass<ErrorBoundaryProps>
  | React.FC<ErrorBoundaryProps>

export function useDecorators(
  editor: LexicalEditor,
  ErrorBoundary: ErrorBoundaryType
): JSX.Element[] {
  const [decorators, setDecorators] = React.useState<
    Record<string, JSX.Element>
  >(() => editor.getDecorators<JSX.Element>())

  // Subscribe to changes
  React.useLayoutEffect(() => {
    return editor.registerDecoratorListener<JSX.Element>((nextDecorators) => {
      ReactDOM.flushSync(() => {
        setDecorators(nextDecorators)
      })
    })
  }, [editor])

  React.useEffect(() => {
    // If the content editable mounts before the subscription is added, then
    // nothing will be rendered on initial pass. We can get around that by
    // ensuring that we set the value.
    setDecorators(editor.getDecorators())
  }, [editor])

  // Return decorators defined as React Portals
  return React.useMemo(() => {
    const decoratedPortals = []
    const decoratorKeys = Object.keys(decorators)

    for (let i = 0; i < decoratorKeys.length; i++) {
      const nodeKey = decoratorKeys[i]
      const reactDecorator = (
        <ErrorBoundary onError={(e) => editor._onError(e)}>
          <React.Suspense fallback={null}>{decorators[nodeKey]}</React.Suspense>
        </ErrorBoundary>
      )
      const element = editor.getElementByKey(nodeKey)

      if (element !== null) {
        decoratedPortals.push(ReactDOM.createPortal(reactDecorator, element))
      }
    }

    return decoratedPortals
  }, [ErrorBoundary, decorators, editor])
}
