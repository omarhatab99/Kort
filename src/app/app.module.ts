import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";

import { StoreModule } from '@ngrx/store';
import { appReducer } from './AppStore/app-reducer';
import { PersisitCache } from './AppStore/persisit-cache';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        StoreModule.forRoot({ AppStore: appReducer }),

    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppModule {
    constructor(private persisitCach: PersisitCache) {
        this.persisitCach.traceState()
    }
}
