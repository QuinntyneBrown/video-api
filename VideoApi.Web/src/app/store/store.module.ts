import { NgModule } from '@angular/core';
import * as ngrxStore from '@ngrx/store';
import { compose } from "@ngrx/core/compose";
import { localStorageSync } from "ngrx-store-localstorage";
import { videosReducer } from "./video.reducer";
import { currentUserReducer } from "./current-user.reducer";
import { tokenReducer } from "./token.reducer";

import { AppStore } from "./app-store";
import { initialState } from "./initial-state";

const providers = [
    AppStore
];

@NgModule({
    imports: [
        ngrxStore.StoreModule.provideStore(
            {
                videos: videosReducer,
                currentUser: currentUserReducer,
                token: tokenReducer
            },
            [initialState]
        )],
    providers: providers
})
export class StoreModule { }
