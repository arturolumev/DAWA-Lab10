import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
/*
export class FormularioComponent {
  nombre: string = '';
  email: string = '';

  onSubmit() {
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
  }
}
*/

export class FormularioComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Agrega más campos y validadores según tus necesidades
    });
  }

  onFieldChange() {
    // Lógica para habilitar o deshabilitar el botón de envío según el estado de los campos
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Mostrar cuadro de confirmación
      const confirmacion = confirm('¿Estás seguro de enviar el formulario?');
      if (confirmacion) {
        // Realizar acciones cuando el formulario es confirmado y válido
        console.log('Formulario enviado');
        console.log(`Nombre: ${this.myForm.value.nombre}`);
        console.log(`Email: ${this.myForm.value.email}`);
        // Aquí puedes enviar el formulario o realizar otras acciones necesarias
                // Abrir una nueva ventana con los datos del formulario
        const datosFormulario = {
          nombre: this.myForm.value.nombre,
          email: this.myForm.value.email
        };
        const nuevaVentana = window.open('', '_blank');
        if (nuevaVentana) {
          nuevaVentana.document.write(`
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
          <h1 style = "text-align:center;">Datos del formulario</h1>
          `);
          nuevaVentana.document.write(`<p style = "text-align:center; padding: 1em; background-color: #f8e39e; color:#581845;  margin-bottom: 2em; strong;">Nombre: ${datosFormulario.nombre}</p>`);
          nuevaVentana.document.write(`<p style = "text-align:center; padding: 1em; background-color: #f8e39e; color:#581845;  margin-bottom: 2em;">Email: ${datosFormulario.email}</p>`);
          nuevaVentana.document.close();
        } else {
          console.error('No se pudo abrir la nueva ventana.');
        }
      }
    } else {
      // Realiza acciones cuando el formulario es inválido
    }
  }
  // ...
}
