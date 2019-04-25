import * as React from 'react'
import normalize from 'normalize.css'

import global from '../../styles/global'
import { WorkSans, CrimsonText, Inter } from '../../styles/fonts'

export default function GlobalStyles() {
  return (
    <>
      <style jsx global>
        {WorkSans}
      </style>
      <style jsx global>
        {CrimsonText}
      </style>
      <style jsx global>
        {Inter}
      </style>
      <style jsx global>
        {normalize}
      </style>
      <style jsx global>
        {global}
      </style>
    </>
  )
}
