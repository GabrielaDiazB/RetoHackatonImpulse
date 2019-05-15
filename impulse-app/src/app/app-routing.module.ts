import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './components/courses/topics/topics.component';
import { TopicmultimediaComponent } from './components/courses/topicmultimedia/topicmultimedia.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { Quiz1Component } from './components/quiz1/quiz1.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'temas', component: TopicsComponent},
  { path: 'temas/curso', component: TopicmultimediaComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'quiz1', component: Quiz1Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
