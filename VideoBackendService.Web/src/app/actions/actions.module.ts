import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { VideoActions } from './video.actions';

const declarables = [];
const providers = [VideoActions];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class ActionsModule { }
