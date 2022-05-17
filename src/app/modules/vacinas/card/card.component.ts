import { Component, Input, OnInit } from '@angular/core';
import { ITimelineItem } from 'src/assets/data/timeline';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: ITimelineItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
