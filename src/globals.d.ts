declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare interface AutoCompleteProfile {
  filter: (option: any, keyword: string) => boolean
  options: any[]
  render: (options: any) => React.ReactNode
  select: (option: any) => any
  trigger: string
}

declare interface AutoCompleteSuggestionsProps {
  keyword: string | null
  trigger: string | null
  profiles: AutoCompleteProfile[]
}
