import {Component, OnInit} from '@angular/core';
import {TopicDetailService} from "../../services/topic-detail.service";
import {ActivatedRoute, Router} from "@angular/router";
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

  constructor(public serviceContent: ContentsService,   private route: ActivatedRoute,
              private router: Router, ) { }

  isNextTopicAvailable(): boolean {
  return !!this.topicDetail && typeof this.topicDetail.id === 'number' && this.topicDetail.id < 15;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idTopic = params.get('id');
      if (this.idTopic) {
        this.getTopicDetail(parseInt(this.idTopic));
      }
    });
  }

  public getTopicDetail(id: number): void {
    this.serviceContent.getContentById(id).subscribe((content: ContentModel) => {
      this.topicDetail = content;
    });
  }

  public goBack(): void {
    window.history.back();
  }

  public nextTopic(): void {
    const nextId = (parseInt(this.idTopic!) + 1).toString();
    this.router.navigate(['/details/', nextId]);
  }
}
