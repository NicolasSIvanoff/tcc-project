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
  public progress = 0;
  public score = 0;
  public respostas: Array<any> = [];
  constructor(private service: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.getQuiz();
  }

  public getQuiz() {
    this.service.getQuiz().subscribe((data: any) => {
      this.quiz = data;
      this.updateProgress();
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
      const opcaoSelecMap = { A: 1, B: 2, C: 3, D: 4 };

      const isCorrect = this.selectedOption === currentQuestion.respostaCorreta;
      if (isCorrect) {
        this.score += currentQuestion.pontuacao;
      }
      this.respostas.push({
        perguntaId: currentQuestion.idPergunta,
        opcaoSelec: opcaoSelecMap[this.selectedOption as keyof typeof opcaoSelecMap],
      });

      if (this.currentQuestionIndex < this.quiz.perguntas.length - 1) {
        this.currentQuestionIndex++;
        this.selectedOption = '';
        this.updateProgress();
      } else {
        this.saveQuizResults();
      }
    }
  }

  public updateProgress() {
    if (this.quiz && this.quiz.perguntas && this.quiz.perguntas.length > 0) {
      this.progress = ((this.currentQuestionIndex + 1) / this.quiz.perguntas.length) * 100;
    }
  }

  public saveQuizResults() {
    const quizResult = {
      idQuiz: this.quiz.idQuiz,
      respostas: this.respostas,
      pontuacao: this.score,
      data: new Date().toISOString()
    };

    this.service.saveQuizResults(quizResult).subscribe({
      next: (result) => {
        this.redirectTo('quizFinalization', { state: result });
      },
    });
  }
}
