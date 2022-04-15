/* eslint-disable @typescript-eslint/no-invalid-this */
/* eslint-disable consistent-return */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AlertManager from './alert-manager';
import { AlertHandler, AlertSettings } from './types';

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

/**
 * Base class for interacting with the notifications system.
 */
class Alert {
  private alertHandler?: AlertHandler = undefined;

  constructor() {
    if (!isBrowser) return;

    const container = document.createElement('div');
    container.setAttribute('data-notification-container', '');
    document.body.appendChild(container);

    ReactDOM.render(<AlertManager bindAlert={this.bindAlert} />, container);
  }

  public sendAlert = (settings: AlertSettings): AlertSettings | undefined => {
    if (!this.alertHandler) {
      return;
    }

    return this.alertHandler({ ...settings });
  };

  private bindAlert = (handler: AlertHandler) => {
    this.alertHandler = handler;
  };
}

export const alert = new Alert();
