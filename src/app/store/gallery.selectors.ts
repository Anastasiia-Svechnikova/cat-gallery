import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialStateInterface } from '../components/gallery/gallery.model';

const selectCatsFeature = createFeatureSelector<InitialStateInterface>('cats');
export const selectCats = createSelector(selectCatsFeature, (state: InitialStateInterface) => state.data)
export const selectLoading = createSelector(selectCatsFeature, (state: InitialStateInterface) => state.loading)
export const selectError = createSelector(selectCatsFeature, (state: InitialStateInterface) => state.error)