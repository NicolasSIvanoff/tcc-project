import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public quiz: any;
  public currentQuestionIndex = 0;
  public selectedOption: string = '';
  public progress = 20;
  public score = 0;

  constructor(private service: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.getQuiz();
  }

  public getQuiz() {
    this.service.getQuiz().subscribe((data: any) => {
      this.quiz = data;
    });
  }

  public onSelectOption(option: string) {
    this.selectedOption = option;
  }

  public redirectTo(route: string, state?: any): void {
    this.router.navigate([route], { state });
  }

  public onNextQuestion() {
    if (this.quiz && this.quiz.perguntas && this.quiz.perguntas.length > 0) {
      const currentQuestion = this.quiz.perguntas[this.currentQuestionIndex];
      if (this.selectedOption === currentQuestion.respostaCorreta) {
        this.score += currentQuestion.pontuacao;
      }

      if (this.currentQuestionIndex < this.quiz.perguntas.length - 1) {
        this.currentQuestionIndex++;
        this.selectedOption = '';
        this.updateProgress();
      } else {
        const totalScore = this.quiz.perguntas.reduce((total: any, question: { pontuacao: any; }) => total + question.pontuacao, 0);
        this.service.setScore(this.score, totalScore);
        this.redirectTo('quizFinalization');
      }
    }
  }

  public updateProgress() {
    if (this.quiz && this.quiz.perguntas && this.quiz.perguntas.length > 0) {
      this.progress = ((this.currentQuestionIndex + 1) / this.quiz.perguntas.length) * 100;
    }
  }
}
