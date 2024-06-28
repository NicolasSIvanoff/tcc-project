import {Component, Input} from '@angular/core';
import { ContentModel } from "../../models/content.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() public contentData?: ContentModel;


  public redirectForDetails(id?: string): void {
    window.location.href = `/details/${id}`;
  }

}
