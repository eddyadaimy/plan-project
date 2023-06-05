import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbModule } from 'params-xng-breadcrumb';
import { SharedModule } from "./shared/shared.module";
import { SideBarComponent } from './shared/side-bar/side-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SideBarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        BreadcrumbModule,
        SharedModule
    ]
})
export class AppModule { }
