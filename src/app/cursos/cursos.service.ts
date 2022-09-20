import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../core/model';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private http: HttpClient) {}

  list(): Curso[] {
    return [
      { id: 1, nomecurso: 'Desenvolvimento de Sistemas' },
      { id: 2, nomecurso: 'Administração' },
      { id: 3, nomecurso: 'Química' },
      { id: 4, nomecurso: 'Contabilidade' },
      { id: 5, nomecurso: 'Robótica' },
      { id: 6, nomecurso: 'Engenharia' },
    ];
  }
}
