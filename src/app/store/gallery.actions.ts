import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICat } from '../components/gallery/gallery.model';

export const catsApiActions = createActionGroup({
  source: 'Gallery',
  events: {
    'Load images': emptyProps(),
    'Loaded images': props<{ cats: ReadonlyArray<ICat> }>(),
    'Set Filter': props<{ breed: string; limit: string }>(),
    'Loaded Error': props<{ error: any }>(),
  },
});
