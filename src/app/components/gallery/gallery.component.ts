import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { catsApiActions } from 'src/app/store/gallery.actions';
import {
  selectCats,
  selectError,
  selectLoading,
} from 'src/app/store/gallery.selectors';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  storedCats$ = this.store.select(selectCats);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(catsApiActions.loadImages());
  }
}
