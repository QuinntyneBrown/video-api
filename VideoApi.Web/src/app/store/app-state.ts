import { Video } from "../models";

export interface AppState {
    videos: Array<Video>;
    currentUser: any;
    isLoggedIn: boolean;
    token: string;
}