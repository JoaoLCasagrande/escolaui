import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';

const routes: Routes = [
  {
    path: '', component: ListaAlunosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
