import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../core/model';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  constructor(private http: HttpClient) {}

  list(): Aluno[] {
    return [
      { id: 1, nomealuno: 'Daniel Orivaldo da Silva' },
      { id: 2, nomealuno: 'Josefinho Stralin' },
      { id: 3, nomealuno: 'Lucas Lenin' },
      { id: 4, nomealuno: 'Katarov Trotsky' },
      { id: 5, nomealuno: 'Leandro Muçolini' },
      { id: 6, nomealuno: 'Gabriel Vargas' },
    ];
  }
}
