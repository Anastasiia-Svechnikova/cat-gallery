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
    on(catsApiActions.loadImages, (state, _) =>({...state, loading: true})),
    on(catsApiActions.loadedImages, (state, { cats }) => ({ ...state, loading: false, data: cats })),
    on(catsApiActions.setFilter, (state, _) =>({...state, loading: true}))
)
