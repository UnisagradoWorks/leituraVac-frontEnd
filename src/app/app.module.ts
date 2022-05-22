import { VacinasComponent } from './modules/vacinas/vacinas.component';
import { VacinaComponent } from './modules/vacina/doenca.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CardComponent } from './modules/vacinas/card/card.component';
import { CardTopicoComponent } from './modules/vacina/card-topico/card-topico.component';

@NgModule({
  declarations: [
    AppComponent,
    VacinaComponent,
    VacinasComponent,
    CardComponent,
    CardTopicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
