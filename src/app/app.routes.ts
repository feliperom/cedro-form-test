import { Routes } from '@angular/router';
import { TelaInicialComponent } from './form/tela-inicial/tela-inicial.component';
import { QuestionarioComponent } from './form/questionario/questionario.component';
import { TelaSucessoComponent } from './form/tela-sucesso/tela-sucesso.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tela-inicial', pathMatch: 'full' },
    { path: 'tela-inicial', component: TelaInicialComponent },
    { path: 'questionario', component: QuestionarioComponent },
    { path: 'tela-sucesso', component: TelaSucessoComponent },
];
