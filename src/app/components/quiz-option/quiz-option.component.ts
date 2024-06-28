import {Component, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-quiz-option',
  templateUrl: './quiz-option.component.html',
  styleUrl: './quiz-option.component.scss'
})
export class QuizOptionComponent {
  @Input() letter!: string;
  @Input() question!: string;
  @Input() isSelected!: boolean;
  public selectedLetter: string = '';
  public teste = true;
  constructor() { }

  public optionSelected(event: string) {
    console.log(event);
    this.selectedLetter = this.letter
  }

}
