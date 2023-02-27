import { createReducer, on } from "@ngrx/store";
import { ICat } from "../components/gallery/gallery.model";

import { catsApiActions } from "./gallery.actions";

export interface InitialCatsInterface {
    loading: boolean;
    data: ReadonlyArray<ICat>
    error: '' | null;
}

const initialState: InitialCatsInterface = {
    loading: false,
    error: null,
    data: []
}
    

export const galleryReducer = createReducer(
    initialState,
    on(catsApiActions.loadImages, state =>({...state, loading: true, error: null})),
    on(catsApiActions.loadedImages, (state, { cats }) => ({loading: false, data: cats, error: null })),
    on(catsApiActions.setFilter, state => ({ ...state, loading: true, error: null })),
    on(catsApiActions.loadedError, (state, { error })=>({...state,loading: false,  error: error}))
)
