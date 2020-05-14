export interface AirtableRecord {
  id: string
  fields: {
    [key: string]: any
  }
  createdTime: string
}

export interface AirtableData {
  records: AirtableRecord[]
}

export type AlertKinds = 'raid' | 'cheer' | 'host' | 'donation' | 'follow' | 'sub'

export interface APIResponse<TResponse = any> {
  status: 'ok' | 'error'
  data: TResponse
}
