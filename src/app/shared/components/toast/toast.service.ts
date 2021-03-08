import { GlobalPositionStrategy, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Inject, Injectable, Injector } from '@angular/core';
import { ToastConfig, ToastData, TOAST_CONFIG_TOKEN } from './toast-config';
import { ToastRef } from './toast-ref';
import { ToastComponent } from './toast.component';

/**
 * Service for displaying toasts
 *
 * @export
 * @class ToastService
 */
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private lastToast!: ToastRef;

  constructor(
    private overlay: Overlay,
    private parentInjector: Injector,
    @Inject(TOAST_CONFIG_TOKEN) private toastConfig: ToastConfig
  ) { }

  /**
   * Displays a toast
   *
   * @param {ToastData} data
   * @return {*} ToastRef
   * @memberof ToastService
   */
  show(data: ToastData): ToastRef {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new ToastRef(overlayRef);
    this.lastToast = toastRef;

    const injector = this.getInjector(data, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(ToastComponent, null, injector);

    overlayRef.attach(toastPortal);

    return toastRef;
  }

  /**
   * Gets the position for displaying the toast
   *
   * @return {*}  {GlobalPositionStrategy} position
   * @memberof ToastService
   */
  getPositionStrategy(): GlobalPositionStrategy {
    return this.overlay
      .position()
      .global()
      .top(this.getPosition())
      .right(this.toastConfig?.position?.right + 'px');
  }

  /**
   * Get position of the toast in px format
   *
   * @return {*} position in 'px'
   * @memberof ToastService
   */
  getPosition(): string {
    const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
    const position = lastToastIsVisible ? this.lastToast.getPosition().bottom : this.toastConfig?.position?.top;

    return position + 'px';
  }

  /**
   * Gets the injector for displaying de toast
   *
   * @param {ToastData} data
   * @param {ToastRef} toastRef
   * @param {Injector} parentInjector
   * @return {*} injector
   * @memberof ToastService
   */
  getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector): Injector {

    return Injector.create({
      providers: [
        { provide: ToastData, useValue: data },
        { provide: ToastRef, useValue: toastRef }
      ],
      name: 'ToastService',
      parent: parentInjector
    });
  }
}
