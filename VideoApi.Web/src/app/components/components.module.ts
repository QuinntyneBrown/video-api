import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from './login.component';
import { NavComponent } from './nav.component';

const declarables = [LoginComponent, NavComponent];
const providers = [];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class ComponentsModule { }
