import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { QuestionarioService } from '../../services/form/questionario.service';
import { Router } from '@angular/router';
import { QuestionarioStateService, QuestionResponse } from '../../services/form/questionario-state.service';

@Component({
  selector: 'app-questionario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss'],
})
export class QuestionarioComponent implements OnInit {
  questions: any[] = [];
  options: any[] = [];
  questionarioForm!: FormGroup;

  constructor(
    private questionService: QuestionarioService,
    private questionarioState: QuestionarioStateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(
      questions => {
        this.questions = questions;
        this.createForm();
      }
    );
  }

  createForm() {
    const group: any = {};
    this.questionarioForm = new FormGroup({});
    this.questions.forEach(question => {
      group[question.name] = new FormControl('', [Validators.required]);
    });
    this.questionarioForm = new FormGroup(group);
  }

  onOptionSelected(question: any, option: any) {
    const resposta: QuestionResponse = {
      name: question.name,
      questionId: question.id,
      question: question.question,
      selectedOption: option.id,
      selectedOptionText: option.text
    };
    this.questionarioState.atualizarResposta(resposta);
  }

  onSelectOption(question: any, subQuestion: any, event: any) {
    const selectedOptionId = event.value;
    const selectedOption = question.options.find((opt: any) => opt.id === selectedOptionId);
    if (selectedOption) {
      const resposta: any = {
        name: question.name,
        questionId: question.id,
        subQuestionId: subQuestion.id,
        question: subQuestion.text,
        selectedOption: selectedOption.id,
        selectedOptionText: selectedOption.text
      };
      this.questionarioState.atualizarResposta(resposta);
    }
  }

  isFormValid() {
    return this.questionarioForm.invalid;
  }

  onSubmit() {
    if (!this.questionarioForm.valid) {
      this.router.navigate(['/tela-sucesso']);
    }
    console.log(this.questionarioForm);
  }
}
