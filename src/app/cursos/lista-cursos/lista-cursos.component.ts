import { Component, OnInit } from '@angular/core';
import { Curso } from '../../core/model';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {

  cursos: Curso[] = [
    {id: 1, nomecurso: 'Desenvolvimento de Sistemas'},
    {id: 2, nomecurso: 'Administração'},
    {id: 3, nomecurso: 'Química'},
    {id: 4, nomecurso: 'Contabilidade'},
    {id: 5, nomecurso: 'Robótica'},
    {id: 6, nomecurso: 'Engenharia'}
  ];
  displayedColumns = ['id','nomecurso'];

  constructor() { }

  ngOnInit(): void {
  }

}
