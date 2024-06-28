import {Component, OnInit} from '@angular/core';
import {TopicDetailService} from "../../services/topic-detail.service";
import {ActivatedRoute} from "@angular/router";
import {ContentsService} from "../../services/contents.service";
import {ContentModel} from "../../models/content.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrl: './topic-detail.component.scss'
})
export class TopicDetailComponent implements OnInit {

  public idTopic!: string | null;
  public topicDetail: ContentModel | undefined ;

  constructor(public serviceContent: ContentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idTopic = params.get('id');
      this.getTopicDetail(parseInt(this.idTopic!));
    });
  }

  public getTopicDetail(id:number){
  this.serviceContent.getContentById(id).subscribe((content:ContentModel)=>{
    this.topicDetail = content;
    })
  }

  public goBack(){
    window.history.back();
  }
}
