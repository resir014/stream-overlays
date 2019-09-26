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
