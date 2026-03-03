import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importante para el *ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Cambia esto por tu nombre real
  protected readonly studentName = signal('Tu Nombre Aquí');
  protected readonly labName = signal('Laboratorio 3 - Multimedia II');

  constructor(public router: Router) {}
}