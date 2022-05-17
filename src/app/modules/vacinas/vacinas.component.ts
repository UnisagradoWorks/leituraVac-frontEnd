import { Component, OnInit } from '@angular/core';
import { TIMELINE_DATA } from 'src/assets/data/timeline';

@Component({
  selector: 'app-vacinas',
  templateUrl: './vacinas.component.html',
  styleUrls: ['./vacinas.component.scss']
})
export class VacinasComponent implements OnInit {
  public timelineData = TIMELINE_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
