export interface ToasterSettings {
  id?: string
  index?: number
  content: React.ReactNode
  dismissAfter?: number
  onRemove?: () => void
}

export type ToasterHandler = (settings: ToasterSettings) => ToasterSettings
