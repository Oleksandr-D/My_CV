import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { FirstProjectComponent } from './pages/first-project/first-project.component';
import { SecondProjectComponent } from './pages/second-project/second-project.component';
import { MyTeamSiteComponent } from './pages/my-team-site/my-team-site.component';
import { AngularTasksComponent } from './pages/angular-tasks/angular-tasks.component';
import { SafeguardComponent } from './pages/safeguard/safeguard.component';
import { MonosushiComponent } from './pages/monosushi/monosushi.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'contact', component:ContactComponent} ,
  { path: 'about', component:AboutComponent },
  { path: 'work', component:WorkComponent },
  { path: 'first-project', component:FirstProjectComponent },
  { path: 'second-project', component:SecondProjectComponent },
  { path: 'my-time-site', component:MyTeamSiteComponent },
  { path: 'angular-tasks', component:AngularTasksComponent },
  { path: 'safeguard', component:SafeguardComponent },
  { path: 'monosoushi', component:MonosushiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
