import {Component, OnInit} from '@angular/core';
import {ContentsService} from "../../services/contents.service";

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.scss'
})
export class QuizDetailsComponent implements OnInit{

  public contents: any = [];
  constructor(private serv: ContentsService ) {
  }
  ngOnInit(): void {
    this.getContents();
  }
  public getContents(): void {
    this.serv.getContents().subscribe((data:any)=>{
      console.log(data);
      this.contents = data[1];
    })
  }

  public redirectTo() {
    window.location.href = '/home';
  }
}
