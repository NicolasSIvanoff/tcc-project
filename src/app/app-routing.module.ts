import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {TopicDetailComponent} from "./components/topic-detail/topic-detail.component";
import {ErrorComponent} from "./shared/error/error.component";
import {ListTopicsComponent} from "./components/list-topics/list-topics.component";
import {WaitForLoadingComponent} from "./components/login/wait-for-loading/wait-for-loading.component";
import {BeforeQuizComponent} from "./components/quiz/before-quiz/before-quiz.component";
import {QuizFinalizationComponent} from "./components/quiz-finalization/quiz-finalization.component";
import {QuizDetailsComponent} from "./components/quiz-details/quiz-details.component";
import {YourProgressComponent} from "./components/your-progress/your-progress.component";
import {ReportsComponent} from "./components/reports/reports.component";
import {SelectQuizComponent} from "./components/select-quiz/select-quiz.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {authGuard} from "./shared/guard/auth-guard";
import { ModalComponent } from './shared/modal/modal.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'waitForLoading', component: WaitForLoadingComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'details/:id', component: TopicDetailComponent, canActivate: [authGuard] },
  { path: 'topics', component: ListTopicsComponent, canActivate: [authGuard] },
  { path: 'startQuiz', component:  BeforeQuizComponent, canActivate: [authGuard] },
  { path: 'selectQuiz', component:  SelectQuizComponent, canActivate: [authGuard] },
  { path: 'quizFinalization', component:  QuizFinalizationComponent, canActivate: [authGuard] },
  { path: 'quizDetails', component:  QuizDetailsComponent, canActivate: [authGuard] },
  { path: 'quiz/:id', component:  QuizComponent, canActivate: [authGuard] },
  { path: 'seuProgresso', component: YourProgressComponent, canActivate: [authGuard] },
  { path: 'relatorios', component: ReportsComponent, canActivate: [authGuard] },
  { path: 'modal', component: ModalComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
