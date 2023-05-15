import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { InitSessionComponent } from './components/init-session/init-session.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'portfolio-admin', component:InitSessionComponent, canActivate: [GuardGuard]},
  {path: '', redirectTo:"portfolio", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
