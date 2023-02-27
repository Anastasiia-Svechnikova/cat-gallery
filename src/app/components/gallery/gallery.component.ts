import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { catsApiActions } from 'src/app/store/gallery.actions';
import { selectCats, selectLoading } from 'src/app/store/gallery.selectors';


import { GalleryApiService } from './gallery-api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  storedCats$ = this.store.select(selectCats)
  loading$ = this.store.select(selectLoading)
  constructor(public httpService: GalleryApiService, private store: Store){}

  ngOnInit() { 
    this.store.dispatch(catsApiActions.loadImages())
  }
  
}
