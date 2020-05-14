import * as React from 'react'

import global from 'styles/global'

export default function GlobalStyles() {
  return (
    <style jsx global>
      {global}
    </style>
  )
}
