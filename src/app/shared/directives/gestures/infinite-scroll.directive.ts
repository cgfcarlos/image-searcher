import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { fromEvent, Observable, ObservableInput } from 'rxjs';
import { exhaustMap, filter, map, pairwise, startWith, tap } from 'rxjs/operators';

interface ScrollPosition {
  sH: number;
  sT: number;
  cH: number;
};

const DEFAULT_SCROLL_POSITION: ScrollPosition = {
  sH: 0,
  sT: 0,
  cH: 0
};

@Directive({
  selector: '[infinite-scroll]'
})
export class InfiniteScrollDirective implements AfterViewInit {

  private scrollEvent$!: Observable<any>;

  private userScrolledDown$!: Observable<any>;


  private requestOnScroll$!: Observable<any>;

  @Input()
  scrollCallback!: () => ObservableInput<any>;

  @Input()
  immediateCallback = false;

  @Input()
  scrollPercent = 80;

  constructor(private elm: ElementRef) { }

  ngAfterViewInit() {
    this.registerScrollEvent();
    this.streamScrollEvents();
    this.requestCallbackOnScroll();
  }

  private registerScrollEvent() {
    this.scrollEvent$ = fromEvent(window, 'scroll');
  }

  private streamScrollEvents() {
    this.userScrolledDown$ = this.scrollEvent$.pipe(
      map((e: any): ScrollPosition => {
        console.log(e);
        return {
          sH: e.target.scrollingElement.scrollHeight,
          sT: e.target.scrollingElement.scrollTop,
          cH: e.target.scrollingElement.clientHeight
        };
      }),
      pairwise(),
      filter(positions => this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(positions[1])),
    )
  }

  private requestCallbackOnScroll() {
    this.requestOnScroll$ = this.userScrolledDown$;

    if (this.immediateCallback) {
      this.requestOnScroll$ = this.requestOnScroll$.pipe(
        startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION])
      )
    }

    this.requestOnScroll$.pipe(
      exhaustMap(() => this.scrollCallback())
    ).subscribe((data) => { console.log(data) }, (err) => console.log(err));

  }

  private isUserScrollingDown = (positions: any) => {
    console.log(positions);
    return positions[0].sT < positions[1].sT;
  }

  private isScrollExpectedPercent = (position: any) => {
    console.log(position);
    return ((position.sT + position.cH) / position.sH) > (this.scrollPercent / 100);
  }

}