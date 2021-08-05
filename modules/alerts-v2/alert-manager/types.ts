export interface AlertSettings {
  id?: string
  index?: number
  content: React.ReactNode
  dismissAfter?: number
  onRemove?: (id?: string) => void
}

export type AlertHandler = (settings: AlertSettings) => AlertSettings
