import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryApiService } from './gallery-api.service';
import { IBreed } from './gallery.model';

@Injectable({
  providedIn: 'root',
})
export class BreedsResolver implements Resolve<IBreed[]> {
  constructor(private httpService: GalleryApiService) {}
  resolve(): Observable<IBreed[]> {
    return this.httpService.getBreedList();
  }
}
