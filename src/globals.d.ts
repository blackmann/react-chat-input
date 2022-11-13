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
  name: string
  options: any[]
  render: (options: any) => React.ReactNode
  // Select returns the value that will be added to the input tags results
  select: (option: any) => SelectionValue
  trigger: string
}

declare interface AutoCompleteSuggestionsProps {
  keyword: string | null
  trigger: string | null
  profiles: AutoCompleteProfile[]
}
