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

export interface NotionData {
  id: string
  Description: string
  Category: string
  Series: string
  Date: string
  [key: string]: string
}

export type AlertKinds = 'raid' | 'cheer' | 'host' | 'donation' | 'follow' | 'sub'

export interface APIResponse<TResponse = any> {
  status: 'ok' | 'error'
  data: TResponse
}
