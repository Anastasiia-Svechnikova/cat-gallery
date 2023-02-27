import { createReducer, on } from '@ngrx/store';
import { InitialStateInterface } from '../components/gallery/gallery.model';

import { catsApiActions } from './gallery.actions';


const initialState: InitialStateInterface = {
  loading: false,
  error: null,
  data: [],
};

export const galleryReducer = createReducer(
  initialState,
  on(catsApiActions.loadImages, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(catsApiActions.loadedImages, (state, { cats }) => ({
    loading: false,
    data: cats,
    error: null,
  })),
  on(catsApiActions.setFilter, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(catsApiActions.loadedError, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
