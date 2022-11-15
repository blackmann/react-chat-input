declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

// This is the value returned from an auto completion profile (.select)
declare interface SelectionValue {
  text: string
  value: any
}

declare interface AutoCompleteProfile {
  filter: (option: any, keyword: string) => boolean
  // Used to match the text for filtering candidates
  matchRegex: RegExp
  name: string
  options: any[]
  render: (options: any) => React.ReactNode
  // Select returns the value that will be added to the input tags results
  select: (option: any) => SelectionValue
  trigger: string
}

declare interface AutoCompleteSuggestionsProps {
  profiles: AutoCompleteProfile[]
  textSpan: TextSpanResults | null
}

interface MatchOption {
  lead: string
  regex: RegExp
}

interface TextSpanResults {
  lead: string
  range: [number, number]
  typedText: string
  type: string
}

interface Element {
  type: string
  text: string
  value: any
}

interface Data {
  text: string
  textElements: Element[]
  files?: File[]
}

type OnSendCallback = (data: Data) => void
