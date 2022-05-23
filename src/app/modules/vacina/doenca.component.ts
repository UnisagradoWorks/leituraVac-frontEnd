import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOENCAS, IDoenca } from 'src/assets/data/doencas';

@Component({
  selector: 'app-doenca',
  templateUrl: './doenca.component.html',
  styleUrls: ['./doenca.component.scss']
})
export class VacinaComponent implements OnInit {
  public doenca: IDoenca | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.doenca = this.getDoenca(params['id']);
      if (!this.doenca)
        this.router.navigate(['/vacinas']);
    })
  }

  getDoenca(id: string): IDoenca | undefined{
    return this.doenca = DOENCAS.find(v => v.id == id);
  }

}
