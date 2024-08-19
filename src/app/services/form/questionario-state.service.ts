import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface QuestionResponse {
  name: string;
  questionId: number;
  question: string;
  selectedOption: string;
  selectedOptionText: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuestionarioStateService {
  private respostasSubject = new BehaviorSubject<QuestionResponse[]>([]);
  respostas$ = this.respostasSubject.asObservable();

  constructor() {}

  atualizarResposta(resposta: QuestionResponse) {
    const respostasAtuais = this.respostasSubject.value;
    const index = respostasAtuais.findIndex(
      (r) => r.questionId === resposta.questionId
    );

    if (index !== -1) {
      respostasAtuais[index] = resposta;
    } else {
      respostasAtuais.push(resposta);
    }

    this.respostasSubject.next(respostasAtuais);
  }

  obterRespostas(): QuestionResponse[] {
    return this.respostasSubject.value;
  }
}
