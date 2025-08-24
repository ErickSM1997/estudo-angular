import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ServicoComponent } from './servico/servico.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ServicoComponent,
    CadastroFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
