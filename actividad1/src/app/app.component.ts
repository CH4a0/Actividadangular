import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, // Indica que el componente es standalone
  template: `
  <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
    <input type="text" formControlName="name" name="name" placeholder="Nombre" />
    <input type="email" formControlName="email" name="email" placeholder="Correo electrónico" />
    <button type="submit" [disabled]="!profileForm.valid">Enviar</button>
  </form>
  `,
  styleUrls: ['./app.component.scss'], // Se mantiene la referencia a los estilos
  imports: [CommonModule, ReactiveFormsModule], // Importamos los módulos necesarios
})
export class AppComponent {
  title = 'actividad1';
  
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required), // Campo obligatorio
    email: new FormControl('', [Validators.required, Validators.email]), // Campo obligatorio con email
  });

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Formulario enviado:', this.profileForm.value);
      alert('¡Formulario enviado correctamente!');
    }
  }
}
