import { VacinasComponent } from './modules/vacinas/vacinas.component';
import { VacinaComponent } from './modules/vacina/vacina.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './modules/vacinas/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    VacinaComponent,
    VacinasComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
