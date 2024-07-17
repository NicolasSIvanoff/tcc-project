import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-before-quiz',
  templateUrl: './before-quiz.component.html',
  styleUrl: './before-quiz.component.scss'
})
export class BeforeQuizComponent {
  constructor(private router: Router) {}

  public goToQuiz(): void {
    this.router.navigate(['/quiz']).then(() => {});
  }
}
