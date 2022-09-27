import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/core/model';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.scss']
})
export class ListaAlunosComponent implements OnInit {

  alunos: Aluno[] = [];
  displayedColumns = ['id','nomaluno'];

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosService.list();
  }

}
