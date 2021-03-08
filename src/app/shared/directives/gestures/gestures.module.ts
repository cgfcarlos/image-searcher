import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollDirective } from './infinite-scroll.directive';
import { GestureServices } from './gestures.service';

@NgModule({
  imports: [CommonModule],
  declarations: [InfiniteScrollDirective],
  exports: [InfiniteScrollDirective],
  providers: [GestureServices],
  entryComponents: [],
})
export class GestureModule {}
