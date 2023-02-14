import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInfoComponent } from "./components/personal-info/personal-info.component";
import { AboutComponent } from './components/about/about.component';
import { ExpComponent } from './components/exp/exp.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PersonalInfoComponent,
        AboutComponent,
        ExpComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ]
})
export class AppModule { }
