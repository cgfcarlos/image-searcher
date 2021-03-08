import { AnimationEvent } from '@angular/animations';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { toastAnimations, ToastAnimationState } from './toast-animation';
import { ToastConfig, ToastData, TOAST_CONFIG_TOKEN } from './toast-config';
import { ToastRef } from './toast-ref';


@Component({
  selector: 'onlinestore-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [toastAnimations.fadeToast],
})
export class ToastComponent implements OnInit, OnDestroy {
  animationState: ToastAnimationState = 'default';
  iconType: string;

  private intervalId!: any;

  constructor(
    readonly data: ToastData,
    readonly ref: ToastRef,
    @Inject(TOAST_CONFIG_TOKEN) private _toastConfig: ToastConfig
  ) {
    this.iconType = data.type === 'success' ? 'done' : data.type;
  }

  ngOnInit() {
    this.intervalId = setTimeout(() => (this.animationState = 'closing'), 4000);
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  /**
   * Close the toast
   *
   * @memberof ToastComponent
   */
  close() {
    this.ref.close();
  }

  /**
   * When the animation is finished the toast closes by itself
   *
   * @param {AnimationEvent} event evento
   * @memberof ToastComponent
   */
  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ToastAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }

  /**
   * Toast config getter
   *
   * @readonly
   * @type {*}
   * @memberof ToastComponent
   */
  get config(): any {
    return this._toastConfig;
  }
}
