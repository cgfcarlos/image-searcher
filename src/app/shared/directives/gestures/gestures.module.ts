import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollDirective } from './infinite-scroll.directive';

/**
 * Module definition for gestures
 *
 * @export
 * @class GestureModule
 */
@NgModule({
  imports: [CommonModule],
  declarations: [InfiniteScrollDirective],
  exports: [InfiniteScrollDirective],
  entryComponents: [],
})
export class GestureModule {}
