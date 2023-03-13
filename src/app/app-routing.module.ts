import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreedsResolver } from './components/gallery/breeds.resolver';
import { GalleryComponent } from './components/gallery/gallery.component';


const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    resolve: { breeds: BreedsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
