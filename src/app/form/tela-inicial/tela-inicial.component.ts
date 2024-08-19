import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalTermosComponent } from '../modal-termos/modal-termos.component';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent {
  readonly dialog = inject(MatDialog);
  constructor(private router: Router) {}

  escolherSim() {
    this.router.navigate(['/questionario']);
  }
  
  abrirModal() {
    const dialogRef = this.dialog.open(ModalTermosComponent, {
      height: '400px',
    });
  }
}