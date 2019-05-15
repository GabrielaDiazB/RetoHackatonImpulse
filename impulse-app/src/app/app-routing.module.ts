import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './components/courses/topics/topics.component';
import { TopicmultimediaComponent } from './components/courses/topicmultimedia/topicmultimedia.component';

const routes: Routes = [
  { path: '', redirectTo: '/temas', pathMatch: 'full'},
  { path: 'temas', component: TopicsComponent},
  { path: 'temas/curso', component: TopicmultimediaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
