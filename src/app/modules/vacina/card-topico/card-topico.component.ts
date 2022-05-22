import { Component, Input, OnInit } from '@angular/core';
import { ITopicoDoenca } from 'src/assets/data/vacinas';

@Component({
  selector: 'app-card-topico',
  templateUrl: './card-topico.component.html',
  styleUrls: ['./card-topico.component.scss']
})
export class CardTopicoComponent implements OnInit {
  @Input() topico: ITopicoDoenca | undefined;
  @Input() isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
