import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {
    
  colorFondo = signal<string>('#3498db');
  tamano = signal<number>(150);
  tieneLentes = signal<boolean>(false);
  tipoExpresion = signal<number>(1);

  //Manejo de nombre
  nombreInput = signal<string>(''); 
  nombreMostrado = signal<string>('');

  cambiarColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
    // El nombre cambiará automáticamente en el HTML porque 
    // usaremos colorFondo() para su estilo.
  }

  cambiarTamano(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tamano.set(parseInt(input.value));
  }

  toggleLentes() {
    this.tieneLentes.update((flag) => !flag);
  }

  setExpresion(tipo: number) {
    this.tipoExpresion.set(tipo);
  }

  // Métodos para el nombre
  actualizarInputNombre(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nombreInput.set(input.value);
  }

  generarNombre() {
    this.nombreMostrado.set(this.nombreInput());
  }
}