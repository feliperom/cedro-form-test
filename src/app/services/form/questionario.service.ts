import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface Question {
  id: number;
  name: string;
  question: string;
  options: { id: string; text: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {
  private questionsUrl = 'api/questions';
  private optionsUrl = 'api/options';
  private formDataSubject = new BehaviorSubject<any>(null);
  formData$ = this.formDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  getOptions(): Observable<any> {
    return this.http.get<any[]>(this.optionsUrl);
  }

  setFormData(data: any) {
    this.formDataSubject.next(data);
  }
}