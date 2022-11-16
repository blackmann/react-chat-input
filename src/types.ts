// This is the value returned from an auto completion profile (.select)
export interface SelectionValue {
  text: string
  value: any
}

export interface AutoCompleteProfile {
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

export interface AutoCompleteSuggestionsProps {
  profiles: AutoCompleteProfile[]
  textSpan: TextSpanResults | null
}

export interface MatchOption {
  lead: string
  regex: RegExp
}

export interface TextSpanResults {
  lead: string
  range: [number, number]
  typedText: string
  type: string
}

export interface Element {
  type: string
  text: string
  value: any
}

export interface Data {
  text: string
  textElements: Element[]
}

export type OnSendCallback = (data: Data) => void
