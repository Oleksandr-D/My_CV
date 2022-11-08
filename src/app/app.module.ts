import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

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
import { SafeguardComponent } from './pages/safeguard/safeguard.component';
import { MonosushiComponent } from './pages/monosushi/monosushi.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';




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
    SafeguardComponent,
    MonosushiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
