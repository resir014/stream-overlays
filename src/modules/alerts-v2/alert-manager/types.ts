export interface AlertSettings {
  id?: string
  index?: number
  content: React.ReactNode
  dismissAfter?: number
  onRemove?: () => void
}

export type AlertHandler = (settings: AlertSettings) => AlertSettings
