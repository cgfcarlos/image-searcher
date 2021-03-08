import { InjectionToken, TemplateRef } from '@angular/core';

export class ToastData {
  type: ToastType = 'info';
  text?: string;
  template?: TemplateRef<any>;
  templateContext?: {};
}

export type ToastType = 'error' | 'warning' | 'info' | 'success';

export interface ToastConfig {
  position?: {
    top: number;
    right: number;
  };
  animation?: {
    fadeOut: number;
    fadeIn: number;
  };
}

export const defaultToastConfig: ToastConfig = {
  position: {
    top: 75,
    right: 30,
  },
  animation: {
    fadeOut: 250,
    fadeIn: 250,
  },
};

export const TOAST_CONFIG_TOKEN = new InjectionToken('toast-config');
