import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app';

  onSubmit() {
    // Lógica de manejo de envío aquí
    console.log('Formulario enviado');
  }
}
