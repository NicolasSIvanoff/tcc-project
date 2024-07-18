import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-finalization',
  templateUrl: './quiz-finalization.component.html',
  styleUrl: './quiz-finalization.component.scss'
})
export class QuizFinalizationComponent {

  public redirectTo() {
    window.location.href = 'quizDetails';
  }
}
