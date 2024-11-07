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

  constructor(private router: Router, private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.score$.subscribe(({ score, totalScore }) => {
      this.score = score;
      this.totalScore = totalScore;
    });
  }

  public redirectTo(): void {
    this.router.navigate(['/quizDetails']);
  }
}
