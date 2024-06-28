import {Component, OnInit} from '@angular/core';
import { ContentModel } from "../../models/content.model";
import {ContentsService} from "../../services/contents.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public topics: Array<ContentModel> = [];

  constructor(private serverContent: ContentsService) { }

  ngOnInit(): void {
    this.serverContent.getContents().subscribe((data:any)=>{
      this.topics = data;
    })
  }

  public redirectForTopics(): void {
    window.location.href = 'topics';
  }
}
