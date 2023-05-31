import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/template/header';
import { FooterModule } from './components/template/footer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HeaderModule,
        FooterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
