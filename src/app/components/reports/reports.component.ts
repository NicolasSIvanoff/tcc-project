import {Component, OnInit} from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
  public quizzes: any = [];

  constructor( private serviceQuiz: QuizService) {
  }

  ngOnInit(): void {
    this.requestReports();
  }

  public requestReports(){
    this.serviceQuiz.getYourQuizResults().subscribe((data) => {
      this.quizzes = data;
    })
  }
}
