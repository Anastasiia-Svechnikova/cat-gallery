import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export class UnSubscriber implements OnDestroy {
  destroyed$ = new Subject<void>();
  constructor() {}
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
