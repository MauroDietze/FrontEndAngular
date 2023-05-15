import { HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInfoComponent } from "./components/personal-info/personal-info.component";
import { AboutComponent } from './components/about/about.component';
import { ExpComponent } from './components/exp/exp.component';
import { InitSessionComponent } from './components/init-session/init-session.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PortfolioService } from './services/portfolio.service';
import { InterceptorService } from './services/interceptor.service';
import { PersInfoModalComponent } from './components/modals/pers-info-modal/pers-info-modal.component';
import { EduComponent } from './components/edu/edu.component';
import { ExpInfoModalComponent } from './components/modals/exp-info-modal/exp-info-modal.component';
import { EduInfoModalComponent } from './components/modals/edu-info-modal/edu-info-modal.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillInfoModalComponent } from './components/modals/skill-info-modal/skill-info-modal.component';
import { ProjectInfoModalComponent } from './components/modals/project-info-modal/project-info-modal.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PersonalInfoComponent,
        AboutComponent,
        ExpComponent,
        InitSessionComponent,
        PortfolioComponent,
        PersInfoModalComponent,
        PersInfoModalComponent,
        EduComponent,
        ExpInfoModalComponent,
        EduInfoModalComponent,
        SkillsComponent,
        ProjectsComponent,
        SkillInfoModalComponent,
        ProjectInfoModalComponent
    ],
    providers: [
        PortfolioService, 
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
        ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
