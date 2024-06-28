import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    public redirectTo(route: string): void {
      window.location.href = route;
    }
}
