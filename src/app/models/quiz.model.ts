export interface Opcao {
  idOpcao: number;
  letra: string;
  questao: string;
  perguntaId: number;
}

export interface Pergunta {
  idPergunta: number;
  enunciado: string;
  respostaCorreta: string;
  tipo: number;
  pontuacao: number;
  quizId: number;
  opcoes: Opcao[];
  respostas: any[];
}

export interface QuizModel {
  idQuiz: number;
  pontuacao: number;
  perguntas: Pergunta[];
}
