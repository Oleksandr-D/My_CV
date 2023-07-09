import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { FirstProjectComponent } from './pages/first-project/first-project.component';
import { SecondProjectComponent } from './pages/second-project/second-project.component';
import { MyTeamSiteComponent } from './pages/my-team-site/my-team-site.component';
import { AngularTasksComponent } from './pages/angular-tasks/angular-tasks.component';
import { MonosushiComponent } from './pages/monosushi/monosushi.component';
import { Task1Component } from './pages/angular-tasks/task1/task1.component';
import { Task2Component } from './pages/angular-tasks/task2/task2.component';
import { Task3Component } from './pages/angular-tasks/task3/task3.component';
import { Task4Component } from './pages/angular-tasks/task4/task4.component';
import { Task5Component } from './pages/angular-tasks/task5/task5.component';
import { Task6Component } from './pages/angular-tasks/task6/task6.component';
import { ChildComponent } from './pages/angular-tasks/task3/child/child.component';
import { AdminComponent } from './pages/angular-tasks/task6/admin/admin.component';
import { UserPostsComponent } from './pages/angular-tasks/task6/user-posts/user-posts.component';
import { NoaComponent } from './pages/noa/noa.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { environment } from '../environments/environment';

import { SearchPipe } from './shared/pipes/search.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    WorkComponent,
    FirstProjectComponent,
    SecondProjectComponent,
    MyTeamSiteComponent,
    AngularTasksComponent,
    MonosushiComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    Task6Component,
    ChildComponent,
    SearchPipe,
    SortPipe,
    AdminComponent,
    UserPostsComponent,
    NoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
