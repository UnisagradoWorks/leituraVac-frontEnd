import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITimelineItem } from 'src/assets/data/timeline';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: ITimelineItem | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  abrirDoenca(id: string){
    this.router.navigate(['/vacinas/' + id]);
  }
}
