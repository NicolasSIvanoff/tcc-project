import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public quiz: any; // Dados do quiz carregados do backend
  public currentQuestionIndex = 0; // Índice da questão atual
  public selectedOption: string = ''; // Letra da opção selecionada
  public progress = 0; // Progresso do quiz em %
  public score = 0; // Pontuação total do usuário
  public respostas: Array<any> = []; // Respostas do usuário

  constructor(private service: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.getQuiz();
  }

  // Método para carregar o quiz do backend
  public getQuiz() {
    this.service.getQuiz().subscribe((data: any) => {
      this.quiz = data;
      console.log(data)
      this.updateProgress();
    });
  }

  // Método chamado ao selecionar uma opção
  public onSelectOption(option: string) {
    this.selectedOption = option;
  }

  // Método para redirecionar para outra rota
  public redirectTo(route: string, state?: any): void {
    this.router.navigate([route], { state });
  }

  // Avançar para a próxima pergunta ou finalizar o quiz
  public onNextQuestion() {
    if (this.quiz && this.quiz.perguntas && this.quiz.perguntas.length > 0) {
      const currentQuestion = this.quiz.perguntas[this.currentQuestionIndex];
      const opcaoSelecMap = { A: 1, B: 2, C: 3, D: 4 }; // Mapear letras para números

      // Verificar se a resposta está correta
      const isCorrect = this.selectedOption === currentQuestion.respostaCorreta;
      if (isCorrect) {
        this.score += currentQuestion.pontuacao;
      }
      // Salvar a resposta atual no array de respostas
      this.respostas.push({
        perguntaId: currentQuestion.idPergunta,
        opcaoSelec: opcaoSelecMap[this.selectedOption as keyof typeof opcaoSelecMap], // Converter letra para número
      });

      // Avançar para a próxima pergunta ou finalizar o quiz
      if (this.currentQuestionIndex < this.quiz.perguntas.length - 1) {
        this.currentQuestionIndex++;
        this.selectedOption = '';
        this.updateProgress();
      } else {
        this.saveQuizResults();
      }
    }
  }

  // Atualizar a barra de progresso
  public updateProgress() {
    if (this.quiz && this.quiz.perguntas && this.quiz.perguntas.length > 0) {
      this.progress = ((this.currentQuestionIndex + 1) / this.quiz.perguntas.length) * 100;
    }
  }

  // Salvar os resultados do quiz no backend
  public saveQuizResults() {
    const quizResult = {
      idQuiz: this.quiz.idQuiz,
      respostas: this.respostas,
      pontuacao: this.score,
      data: new Date().toISOString() // Data atual em formato ISO
    };

    this.service.saveQuizResults(quizResult).subscribe({
      next: () => {
        console.log('Resultados salvos com sucesso!');
        this.redirectTo('quizFinalization', { score: this.score });
      },
      error: (err) => {
        console.error('Erro ao salvar resultados:', err);
        // Exibir mensagem de erro ou tratar adequadamente
      }
    });
  }
}
