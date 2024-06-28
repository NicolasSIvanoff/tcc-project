import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  questions = [
    { text: "O que é a taxa selic?",
      options: [
        {letter: "A", question: "É a taxa básica de juros da economia, que influencia outras taxas de juros do país"},
        {letter: "B", question: "É uma taxa de juros utilizada nos empréstimos entre os bancos"},
        {letter: "C", question: "É uma taxa sobre o lucro líquido das companhias de capital aberto"}
      ] },
    { text: "O que é o IPCA?",
      options: [
        {letter: "A", question: "Índice de Preços ao Consumidor Amplo, que mede a inflação no país"},
        {letter: "B", question: "Índice de Preços ao Consumidor Ampliado, que mede a inflação no país"},
        {letter: "C", question: "Índice de Preços ao Consumidor Anual, que mede a inflação no país"}
      ] },
    { text: "O que é o CDI?",
      options: [
        {letter: "A", question: "Certificado de Depósito Interbancário, que é uma taxa de juros utilizada nos empréstimos entre os bancos"},
        {letter: "B", question: "Certificado de Depósito Interbancário, que é uma taxa de juros utilizada nos empréstimos entre os bancos"},
        {letter: "C", question: "Certificado de Depósito Interbancário, que é uma taxa de juros utilizada nos empréstimos entre os bancos"}
      ] },
    { text: "O que é o IGP-M?",
      options: [
        {letter: "A", question: "Índice Geral de Preços do Mercado, que mede a inflação no país"},
        {letter: "B", question: "Índice Geral de Preços do Mercado, que mede a inflação no país"},
        {letter: "C", question: "Índice Geral de Preços do Mercado, que mede a inflação no país"}
      ] },
    { text: "O que é o INPC?",
      options: [
        {letter: "A", question: "Índice Nacional de Preços ao Consumidor, que mede a inflação no país"},
        {letter: "B", question: "Índice Nacional de Preços ao Consumidor, que mede a inflação no país"},
        {letter: "C", question: "Índice Nacional de Preços ao Consumidor, que mede a inflação no país"}
      ] }
  ];

  currentQuestionIndex = 0;
  selectedOption: string = '';
  progress = 20;

  public onSelectOption(option: string) {
    this.selectedOption = option;
    console.log(this.selectedOption)
  }

  public onNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = '';
      this.updateProgress();
    }
  }

  public updateProgress() {
    this.progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }
}
