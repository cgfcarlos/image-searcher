import { Injectable } from '@angular/core';

@Injectable()
export class GestureServices {
  private lock = false;
  private active: ActivableHandler | null = null;

  public adquireLock(handler: any) {
    if (this.active && this.active !== handler) {
      this.active.inactive();
    }
    this.lock = true;
  }
  public releaseLock() {
    this.lock = false;
  }
  public isLock() {
    return this.lock;
  }
  public setActive(active: ActivableHandler) {
    this.active = active;
  }
  public getActive(): ActivableHandler | null {
    return this.active;
  }
}

export interface ActivableHandler {
  inactive(): void;
}
