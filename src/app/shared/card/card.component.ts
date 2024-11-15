import { Component, Input, OnInit } from '@angular/core';
import { ContentModel } from "../../models/content.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() public contentData?: ContentModel;


  ngOnInit(): void {
  }
  public redirectForDetails(id?: string): void {
    window.location.href = `/details/${id}`;
  }

}
