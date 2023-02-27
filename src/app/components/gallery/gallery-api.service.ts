import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  ApiResponseBreeds,
  ApiResponseImages,
  ICat,
} from './gallery.model';

interface IBreed {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class GalleryApiService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getImages({limit = '10', breed = ''} ): Observable<ICat[]> {
    return this.http
      .get<ApiResponseImages>(`${this.url}images/search?limit=${limit}&breed_ids=${breed}`)
      .pipe(map((data) => data.map(({ url, breeds }) => ({ url, breeds }))));
  }

  public getBreedList(): Observable<IBreed[]> {
    return this.http
      .get<ApiResponseBreeds>(`${this.url}breeds`)
      .pipe(map((data) => data.map(({ id, name }) => ({ id, name }))));
  }
}
