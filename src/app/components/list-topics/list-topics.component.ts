import {Component, OnInit} from '@angular/core';
import {ContentsService} from "../../services/contents.service";
import {ContentModel} from "../../models/content.model";

@Component({
  selector: 'app-list-topics',
  templateUrl: './list-topics.component.html',
  styleUrl: './list-topics.component.scss'
})
export class ListTopicsComponent implements OnInit {

  public topics: Array<ContentModel> = [];
  constructor(public serverContent: ContentsService){}
  ngOnInit(): void {
    this.serverContent.getAllContents().subscribe((data:any)=>{
      this.topics = data;

    })
  }
}
