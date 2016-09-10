import { Action } from "@ngrx/store";
import { ADD_VIDEO_SUCCESS, GET_VIDEO_SUCCESS, REMOVE_VIDEO_SUCCESS } from "../constants";
import { initialState } from "./initial-state";
import { AppState } from "./app-state";
import { Video } from "../models";
import { addOrUpdate, pluckOut } from "../utilities";

export const videosReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case ADD_VIDEO_SUCCESS:
            var entities: Array<Video> = state.videos;
            var entity: Video = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { videos: entities });

        case GET_VIDEO_SUCCESS:
            var entities: Array<Video> = state.videos;
            var newOrExistingVideos: Array<Video> = action.payload;
            for (let i = 0; i < newOrExistingVideos.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingVideos[i] });
            }                                    
            return Object.assign({}, state, { videos: entities });

        case REMOVE_VIDEO_SUCCESS:
            var entities: Array<Video> = state.videos;
            var id = action.payload;
            pluckOut({ value: id, items: entities });
            return Object.assign({}, state, { videos: entities });

        default:
            return state;
    }
}

