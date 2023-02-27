import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { GalleryApiService } from '../components/gallery/gallery-api.service';
import { catsApiActions } from './gallery.actions';

@Injectable()
export class GalleryEffects {
  loadCats$ = createEffect(() =>
    this.actions.pipe(
      ofType(catsApiActions.loadImages, catsApiActions.setFilter),
      mergeMap((action) => {
        const filters =
          action.type === catsApiActions.setFilter.type
            ? { breed: action.breed, limit: action.limit }
            : {};
        return this.httpService.getImages(filters).pipe(
          map((cats) => catsApiActions.loadedImages({ cats })),
          catchError(() => of({ type: '[Gallery] Images Loaded Error' }))
        );
      })
    )
  );

  constructor(private actions: Actions, private httpService: GalleryApiService) {}
}
