import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {

  @Input() stepsArray:any[] = []

  displayedColumns: string[] = ['x', 'y', 'explanation'];

  constructor() { }

  ngOnInit(): void {
  }

}
