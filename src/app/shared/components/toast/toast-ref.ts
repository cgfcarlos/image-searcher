import { OverlayRef } from '@angular/cdk/overlay';

export class ToastRef {
  constructor(private readonly overlay: OverlayRef) {}

  /**
   * Closes the toast
   *
   * @memberof ToastRef
   */
  close() {
    this.overlay.dispose();
  }

  /**
   * Checks if the toast is visible or not
   *
   * @return {*} visible
   * @memberof ToastRef
   */
  isVisible(): boolean {
    return !!this.overlay && !!this.overlay.overlayElement;
  }

  /**
   * Gets the toast position
   *
   * @return {*} posicion
   * @memberof ToastRef
   */
  getPosition(): DOMRect {
    return this.overlay.overlayElement.getBoundingClientRect();
  }
}
