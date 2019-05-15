import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreserviceService } from './services/firestore/firestoreservice.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserInfoComponent } from './components/profile/user-info/user-info.component';
import { SkillsComponent } from './components/profile/skills/skills.component';
import { CompChallengeComponent } from './components/profile/comp-challenge/comp-challenge.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TopicsComponent } from './components/courses/topics/topics.component';
import { TopicmultimediaComponent } from './components/courses/topicmultimedia/topicmultimedia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    UserInfoComponent,
    SkillsComponent,
    CompChallengeComponent,
    CoursesComponent,
    TopicsComponent,
    TopicmultimediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [AngularFireAuth, FirestoreserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }