import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-finalization',
  templateUrl: './quiz-finalization.component.html',
  styleUrl: './quiz-finalization.component.scss'
})
export class QuizFinalizationComponent {

  public score: number = 0;
  public totalScore: number = 0;
  public resultQuiz: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.resultQuiz = history.state.state;
    this.score = this.resultQuiz.pontuacao;
    this.totalScore = this.resultQuiz.pontuacao / 40;
  }

  public redirectTo(): void {
    this.router.navigate(['/quizDetails'], { state: this.resultQuiz });
  }

}
