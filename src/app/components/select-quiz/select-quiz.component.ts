import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-quiz',
  templateUrl: './select-quiz.component.html',
  styleUrl: './select-quiz.component.scss'
})
export class SelectQuizComponent {

  constructor() {
  }


  public redirectForQuiz(){
   window.parent.location.href = '/quiz';
  }

}
