import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ServicoComponent } from './servico/servico.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';

const routes: Routes = [
  {path:"cadastro",component:CadastroComponent},
  {path:"servico",component:ServicoComponent},
  {path:"cadastro-funcionario",component:CadastroFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
