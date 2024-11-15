import { Component, OnInit } from '@angular/core';
import { ContentsService } from "../../services/contents.service";
import { ChangeDetectorRef } from '@angular/core'; // Importa o ChangeDetectorRef

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit {

  public contents: any = [];
  public resultQuiz: any;
  public currentQuestionIndex: number = 0;

  constructor(private serv: ContentsService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.resultQuiz = history.state;

    if (this.resultQuiz?.perguntasErradas?.length > 0) {
      this.getContents(this.resultQuiz.perguntasErradas[this.currentQuestionIndex].idPergunta);
    }
  }

  public getContents(id: number): void {
    this.serv.getContentById(id).subscribe((data: any) => {
      this.contents = data;
      this.cdRef.detectChanges();
    });
  }

  public redirectTo() {
    window.location.href = '/home';
  }

  public nextQuestion() {
    if (this.currentQuestionIndex < this.resultQuiz.perguntasErradas.length - 1) {
      this.currentQuestionIndex++;
      this.getContents(this.resultQuiz.perguntasErradas[this.currentQuestionIndex].idPergunta);
    }
  }

  public prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.getContents(this.resultQuiz.perguntasErradas[this.currentQuestionIndex].idPergunta);
    }
  }
}
