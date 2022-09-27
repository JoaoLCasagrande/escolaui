import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../../core/model';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {

  cursos: Observable<Curso[]>;
  displayedColumns = ['id','nomecurso'];

  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.list();
  }

  ngOnInit(): void {
  }

}
