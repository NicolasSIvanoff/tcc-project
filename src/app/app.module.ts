import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModalComponent } from './shared/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CardComponent } from './shared/card/card.component';
import {NgOptimizedImage} from "@angular/common";
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { ErrorComponent } from './shared/error/error.component';
import { ListTopicsComponent } from './components/list-topics/list-topics.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { QuizOptionComponent } from './components/quiz-option/quiz-option.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { MatProgressBar, MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModalComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    TopicDetailComponent,
    ErrorComponent,
    ListTopicsComponent,
    SidebarComponent,
    QuizOptionComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    NgOptimizedImage,
    MatProgressBarModule,
    MatProgressBar,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
