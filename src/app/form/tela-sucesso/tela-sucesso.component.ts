import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { QuestionarioStateService } from '../../services/form/questionario-state.service';

@Component({
  selector: 'app-tela-sucesso',
  standalone: true,
  imports: [MatIcon, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tela-sucesso.component.html',
  styleUrls: ['./tela-sucesso.component.scss']
})
export class TelaSucessoComponent implements OnInit {
  respostas: any;

  constructor(private questionarioStateService: QuestionarioStateService) {}

  ngOnInit() {
    this.respostas = this.questionarioStateService.obterRespostas();
    console.log(this.respostas)
  }
}