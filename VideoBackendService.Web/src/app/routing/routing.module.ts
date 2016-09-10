import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from "./authentication.guard";


import {
    HomePageComponent,

    LoginPageComponent,

    VideoEditPageComponent,
    VideoListPageComponent

} from "../pages";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    { path: 'home', component: HomePageComponent },
    { path: 'login', component: LoginPageComponent },

    { path: 'video/edit/:videoId', component: VideoEditPageComponent, canActivate: [AuthenticationGuard] },
    { path: 'video/create', component: VideoEditPageComponent, canActivate: [AuthenticationGuard] },
    { path: 'videos', component: VideoListPageComponent, canActivate:[AuthenticationGuard] }
];

export const RoutingModule = RouterModule.forRoot([
    ...routes
]);

export const routedComponents = [
    HomePageComponent,
    LoginPageComponent,
    VideoEditPageComponent,
    VideoListPageComponent
];

