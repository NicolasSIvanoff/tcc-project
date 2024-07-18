import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    this.primeira();
  }

  public primeira(){
    console.log('aoba');
  }
}
