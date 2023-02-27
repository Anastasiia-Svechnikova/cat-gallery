import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { catsApiActions } from 'src/app/store/gallery.actions';
import { GalleryApiService } from '../gallery-api.service';
import { IBreed } from '../gallery.model';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  breeds: IBreed[] = []

  searchForm: FormGroup;
  formSubscription!: Subscription;

  amount = ['10', '20', '30'];

  constructor(
    private fb: FormBuilder,
    public http: GalleryApiService,
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.searchForm = this.fb.group({
      breed: { id: '', name: 'all' },
      limit: '10',
    });
  }
  ngOnInit() {
    this.breeds = [ { id: '', name: 'all' }, ...this.route.snapshot.data['breeds']]


    this.formSubscription = this.searchForm.valueChanges.subscribe((value) => {
      const payload = { ...value, breed: value.breed.id };
      this.store.dispatch(catsApiActions.setFilter(payload));
    });
  }
}