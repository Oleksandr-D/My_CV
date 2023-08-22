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
import { NoaComponent } from './pages/noa/noa.component';
import { MonosushiComponent } from './pages/monosushi/monosushi.component';
import { Task1Component } from './pages/angular-tasks/task1/task1.component';
import { Task2Component } from './pages/angular-tasks/task2/task2.component';
import { Task3Component } from './pages/angular-tasks/task3/task3.component';
import { Task4Component } from './pages/angular-tasks/task4/task4.component';
import { Task5Component } from './pages/angular-tasks/task5/task5.component';
import { Task6Component } from './pages/angular-tasks/task6/task6.component';
import { AdminComponent } from './pages/angular-tasks/task6/admin/admin.component';
import { UserPostsComponent } from './pages/angular-tasks/task6/user-posts/user-posts.component';

const routes: Routes = [
  
  { path:'', component: HomeComponent },
  { path:'contact', component:ContactComponent} ,
  { path: 'about', component:AboutComponent },
  { path: 'work', component:WorkComponent },
  { path: 'first-project', component:FirstProjectComponent },
  { path: 'second-project', component:SecondProjectComponent },
  { path: 'my-time-site', component:MyTeamSiteComponent },
  { path: 'angular-tasks', component:AngularTasksComponent, children:[
    { path: 'task1', component:Task1Component },
    { path: 'task2', component:Task2Component },
    { path: 'task3', component:Task3Component },
    { path: 'task4', component:Task4Component },
    { path: 'task5', component:Task5Component },
    { path: 'task6', component:Task6Component, children:[
      { path: 'admin', component:AdminComponent },
      { path: 'user-posts', component:UserPostsComponent },
      { path: '', pathMatch: 'full', redirectTo:'user-posts' }
    ] },
    { path: '', pathMatch: 'full', redirectTo:'task6' }
  ] },
  { path: 'noa', component:NoaComponent },
  { path: 'monosoushi', component:MonosushiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
