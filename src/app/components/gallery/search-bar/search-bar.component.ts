import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { UnSubscriber } from 'src/app/shared/unsubscriber';

import { catsApiActions } from 'src/app/store/gallery.actions';
import { GalleryApiService } from '../gallery-api.service';
import { IBreed } from '../gallery.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent
  extends UnSubscriber
  implements OnInit, OnDestroy
{
  breeds: IBreed[] = [];
  searchForm: FormGroup;

  amount = ['10', '20', '30'];

  constructor(
    private fb: FormBuilder,
    public http: GalleryApiService,
    private store: Store,
    private route: ActivatedRoute
  ) {
    super();
    this.searchForm = this.fb.group({
      breed: 'all',
      limit: '10',
    });
  }
  ngOnInit(): void {
    this.breeds = [
      { id: '', name: 'all' },
      ...this.route.snapshot.data['breeds'],
    ];
    this.searchForm.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        const payload = { ...value, breed: value.breed.id };
        this.store.dispatch(catsApiActions.setFilter(payload));
      });
  }
}
