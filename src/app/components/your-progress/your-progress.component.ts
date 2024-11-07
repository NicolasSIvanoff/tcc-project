import {Component, OnInit} from '@angular/core';
import { ContentsService } from '../../services/contents.service';
import { ContentModel } from '../../models/content.model';

@Component({
  selector: 'app-your-progress',
  templateUrl: './your-progress.component.html',
  styleUrl: './your-progress.component.scss'
})
export class YourProgressComponent implements OnInit{
  public topics: Array<ContentModel> = [];

  constructor(private serverContent: ContentsService) { }

  ngOnInit(): void {
    this.serverContent.getContentsVisited().subscribe((data:any)=>{
      this.topics = data;
    })
  }

  public redirectForHome(): void {
    window.location.href = 'home';
  }
}
