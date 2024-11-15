import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() isOpen: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() textModal: string = '';
  @Output() isOpenChange = new EventEmitter<boolean>();

  public closeModal(): void {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
