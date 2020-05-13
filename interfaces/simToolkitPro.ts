export interface STKPOverlayOptions {
  color: string
  opacity: number
}

export interface STKPOverlayData {
  Departure?: string
  Destination?: string
  Progress?: number
  ETE?: string
  Groundspeed?: string
  AirSpeed?: string
  TrueSpeed?: string
  VSpeed?: string
  Altitude?: number
  Heading?: number
  Callsign?: string
  Network?: string
  Reg?: string
  Airframe?: string
  currentphase?: string
}

export interface STKPOverlayResponse {
  opts: STKPOverlayOptions
  v: STKPOverlayData
}
