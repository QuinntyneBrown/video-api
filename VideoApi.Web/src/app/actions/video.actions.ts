import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { VideoService } from "../services";
import { AppState, AppStore } from "../store";
import { ADD_VIDEO_SUCCESS, GET_VIDEO_SUCCESS, REMOVE_VIDEO_SUCCESS } from "../constants";
import { Video } from "../models";
import { Observable } from "rxjs";
import { guid } from "../utilities";

@Injectable()
export class VideoActions {
    constructor(private _videoService: VideoService, private _store: AppStore) { }

    public add(video: Video) {
        const newGuid = guid();
        this._videoService.add(video)
            .subscribe(book => {
                this._store.dispatch({
                    type: ADD_VIDEO_SUCCESS,
                    payload: video
                },newGuid);                
            });
        return newGuid;
    }

    public get() {                          
        return this._videoService.get()
            .subscribe(videos => {
                this._store.dispatch({
                    type: GET_VIDEO_SUCCESS,
                    payload: videos
                });
                return true;
            });
    }

    public remove(options: {id: number}) {
        return this._videoService.remove({ id: options.id })
            .subscribe(video => {
                this._store.dispatch({
                    type: REMOVE_VIDEO_SUCCESS,
                    payload: options.id
                });
                return true;
            });
    }

    public getById(options: { id: number }) {
        return this._videoService.getById({ id: options.id })
            .subscribe(video => {
                this._store.dispatch({
                    type: GET_VIDEO_SUCCESS,
                    payload: [video]
                });
                return true;
            });
    }
}
