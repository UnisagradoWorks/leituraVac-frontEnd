import { VacinaComponent } from './modules/vacina/vacina.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinasComponent } from './modules/vacinas/vacinas.component';

const routes: Routes = [
  {
    path: 'vacinas',
    component: VacinasComponent,
  },
  {
    path: 'vacinas/:id',
    component: VacinaComponent,
  },
  {
    path: '',
    redirectTo: 'vacinas',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
