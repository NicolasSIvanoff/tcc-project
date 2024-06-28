import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {TopicDetailComponent} from "./components/topic-detail/topic-detail.component";
import {ErrorComponent} from "./shared/error/error.component";
import {ListTopicsComponent} from "./components/list-topics/list-topics.component";
import {QuizComponent} from "./components/quiz/quiz.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: TopicDetailComponent },
  { path: 'topics', component: ListTopicsComponent },
  { path: 'quiz', component:  QuizComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
