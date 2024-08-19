import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

enum Options {
  'Nunca Operei' ,
  'Opero pouco e não tenho familiaridade' ,
  'Opero eventualmente e conheço os riscos associados' ,
  'Opero frequentemente e conheço os riscos associados',
}

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions = [
      {
        id: 1,
        name: 'comportamento',
        question: 'Qual o seu comportamento em relação aos seus investimentos?',
        type: 'radio',
        options: [
          { id: 1, text: 'PRESERVAR MEU DINHEIRO SEM CORRER RISCOS' },
          { id: 2, text: 'GANHAR MAIS DINHEIRO, ASSUMINDO RISCOS MODERADOS' },
          { id: 3, text: 'GANHAR MAIS DINHEIRO, ASSUMINDO RISCOS AGRESSIVOS' }
        ]
      },
      {
        id: 2,
        name: 'tempo',
        question: 'Por quanto tempo você deseja manter os seus investimentos?',
        type: 'radio',
        options: [
          { id: 1, text: 'ATÉ 1 ANO' },
          { id: 2, text: 'DE 1 A 3 ANOS' },
          { id: 3, text: 'DE 3 A 5 ANOS' }
        ]
      },
      {
        id: 3,
        name: 'porcentagem',
        question: 'Quantos % desses investimentos você pode precisar em um ano?',
        type: 'radio',
        options: [
          { id: 1, text: 'ACIMA DE 75%' },
          { id: 2, text: 'DE 25% A 74%' },
          { id: 3, text: 'ATÉ 25%' }
        ]
      },
      {
        id: 4,
        name: 'four',
        question: 'Qual sua familiaridade com os tipos de investimentos abaixo? Leve em consideração o valor aplicado nos últimos 2 anos.',
        type: 'select',
        subQuestions: [
          {
            id: 1,
            name: 'titulos',
            text: 'TÍTULOS DE RENDA FIXA OU TESOURO DIRETO',
          },
          {
            id: 2,
            name: 'fundos',
            text: 'FUNDOS DE INVESTIMENTO'
          },
          {
            id: 3,
            name: 'acoes',
            text: 'AÇÕES À VISTA'
          },
          {
            id: 4,
            name: 'aluguel',
            text: 'ALUGUEL DE AÇÕES, TERMOS, OPÇÕES E FUTUROS'
          }
        ],
        options: [
          { id: 1, text: 'Nunca Operei' },
          { id: 2, text: 'Opero pouco e não tenho familiaridade' },
          { id: 3, text: 'Opero eventualmente e conheço os riscos associados' },
          { id: 4, text: 'Opero frequentemente e conheço os riscos associados' }
        ]
      }
    ];
    return { questions };
  }
}