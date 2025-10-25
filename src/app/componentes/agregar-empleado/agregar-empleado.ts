import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-agregar-empleado',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './agregar-empleado.html',
  styleUrl: './agregar-empleado.css',
})
export class AgregarEmpleado implements OnInit {

  formularioDeEmpleado: FormGroup; 

  constructor(public formulario: FormBuilder) {

    this.formularioDeEmpleado = this.formulario.group({
      nombre: [''],
      correo: ['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatos(): any{
    console.log("Datos enviados");
    console.log(this.formularioDeEmpleado.value);
  }
}
