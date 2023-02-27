import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialCatsInterface } from "./gallery.reducer";

const selectCatsFeature = createFeatureSelector<InitialCatsInterface>('cats');
export const selectCats = createSelector(selectCatsFeature, (state: InitialCatsInterface) => state.data)
export const selectLoading = createSelector(selectCatsFeature, (state: InitialCatsInterface) => state.loading)