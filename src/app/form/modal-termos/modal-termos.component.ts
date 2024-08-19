import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-termos',
  standalone: true,
  imports: [MatButtonModule, MatCheckboxModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './modal-termos.component.html',
  styleUrls: ['./modal-termos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalTermosComponent {
  aceitoTermos = false;

  constructor(private router: Router, public dialogRef: MatDialogRef<ModalTermosComponent>) {}

  check() {
    this.aceitoTermos = !this.aceitoTermos;
  }

  fecharModal() {
    // Fechar modal e retornar à tela inicial
    if (!this.aceitoTermos) {
      this.dialogRef.close();
    } else {
      this.dialogRef.close();
      this.router.navigate(['/tela-sucesso']);
    }
  }
}