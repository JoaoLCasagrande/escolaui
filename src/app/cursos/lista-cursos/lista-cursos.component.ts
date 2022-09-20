import { Component, OnInit } from '@angular/core';
import { Curso } from '../../core/model';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {

  cursos: Curso[] = [];
  displayedColumns = ['id','nomecurso'];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.list();
  }

}
