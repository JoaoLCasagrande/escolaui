import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';


@NgModule({
  declarations: [
    ListaCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule
  ]
})
export class CursosModule { }
