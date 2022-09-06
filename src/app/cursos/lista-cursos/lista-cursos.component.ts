import { Component, OnInit } from '@angular/core';
import { Curso } from '../../core/model';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {

  cursos: Curso[] = [
    {id: 1, nomecurso: 'Desenvolvimento de Sistemas'}
  ];

  displayedColumns = ['nomecurso'];

  constructor() { }

  ngOnInit(): void {
  }

}
