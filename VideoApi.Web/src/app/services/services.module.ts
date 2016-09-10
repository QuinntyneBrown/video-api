import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { VideoService } from './video.service';

const declarables = [];
const providers = [VideoService];

@NgModule({
    imports: [CommonModule, HttpModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class ServicesModule { }
