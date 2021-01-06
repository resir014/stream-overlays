/* eslint-disable consistent-return */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ToasterManager from './ToasterManager'
import { ToasterHandler, ToasterSettings } from './types'

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'

/**
 * Base class for interacting with the notifications system.
 */
export default class Toaster {
  private toasterHandler?: ToasterHandler = undefined

  constructor() {
    if (!isBrowser) return

    const container = document.createElement('div')
    container.setAttribute('data-notification-container', '')
    document.body.appendChild(container)

    ReactDOM.render(<ToasterManager bindNotify={this.bindNotify} />, container)
  }

  public notify = (settings: ToasterSettings): ToasterSettings | undefined => {
    if (!this.toasterHandler) {
      return
    }

    return this.toasterHandler({ ...settings })
  }

  private bindNotify = (handler: ToasterHandler) => {
    this.toasterHandler = handler
  }
}
