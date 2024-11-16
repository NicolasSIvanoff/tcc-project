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
    const quizResult = [
        {
          idRespostaQuiz: 4,
          idQuiz: 2,
          data: "2024-11-11T12:00:00",
          pontuacao: 85,
          respostas: [
            { idResposta: 4, perguntaId: 1, opcaoSelec: 2 },
            { idResposta: 5, perguntaId: 2, opcaoSelec: 4 },
            { idResposta: 6, perguntaId: 3, opcaoSelec: 1 }
          ]
        },
        {
          idRespostaQuiz: 20,
          idQuiz: 1,
          data: "2024-11-15T21:15:20.343368",
          pontuacao: 200,
          respostas: [
            { idResposta: 78, perguntaId: 1, opcaoSelec: 1 },
            { idResposta: 79, perguntaId: 2, opcaoSelec: 1 },
            { idResposta: 80, perguntaId: 3, opcaoSelec: 2 },
            { idResposta: 81, perguntaId: 4, opcaoSelec: 2 },
            { idResposta: 82, perguntaId: 5, opcaoSelec: 1 }
          ]
        },
        {
          idRespostaQuiz: 7,
          idQuiz: 3,
          data: "0001-01-01T00:00:00",
          pontuacao: 0,
          respostas: [
            { idResposta: 13, perguntaId: 1, opcaoSelec: 3 },
            { idResposta: 14, perguntaId: 2, opcaoSelec: 3 },
            { idResposta: 15, perguntaId: 3, opcaoSelec: 3 },
            { idResposta: 16, perguntaId: 4, opcaoSelec: 3 },
            { idResposta: 17, perguntaId: 5, opcaoSelec: 3 }
          ]
        }
      ];
    this.serviceQuiz.getYourQuizResults().subscribe((data) => {
    })
    console.log(quizResult);
    this.quizzes = quizResult;
  }
}
