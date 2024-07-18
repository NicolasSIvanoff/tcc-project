import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {TopicDetailComponent} from "./components/topic-detail/topic-detail.component";
import {ErrorComponent} from "./shared/error/error.component";
import {ListTopicsComponent} from "./components/list-topics/list-topics.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {QuizFinalizationComponent} from "./components/quiz-finalization/quiz-finalization.component";
import {QuizDetailsComponent} from "./components/quiz-details/quiz-details.component";
import {SelectQuizComponent} from "./components/select-quiz/select-quiz.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: TopicDetailComponent },
  { path: 'topics', component: ListTopicsComponent },
  { path: 'selectQuiz', component:  SelectQuizComponent },
  { path: 'quizFinalization', component:  QuizFinalizationComponent },
  { path: 'quizDetails', component:  QuizDetailsComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
