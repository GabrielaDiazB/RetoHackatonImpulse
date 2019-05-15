import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreserviceService } from './services/firestore/firestoreservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TopicsComponent } from './components/courses/topics/topics.component';
import { TopicmultimediaComponent } from './components/courses/topicmultimedia/topicmultimedia.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TopicsComponent,
    TopicmultimediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [FirestoreserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
