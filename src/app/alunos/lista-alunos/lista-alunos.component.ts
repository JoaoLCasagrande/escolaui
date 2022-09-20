import { Component, OnInit } from '@angular/core';

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
