import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Crud } from '../../servicio/crud';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-agregar-empleado',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './agregar-empleado.html',
  styleUrl: './agregar-empleado.css',
})
export class AgregarEmpleado implements OnInit {

  formularioDeEmpleado: FormGroup; 

  constructor(
    public formulario: FormBuilder,
    private crudServicio: Crud,
    private Routeador: Router  
  ) {

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
    this.crudServicio.AgregarEmpleado(this.formularioDeEmpleado.value).subscribe();
    this.Routeador.navigateByUrl('/listar-empleado');
}
}
