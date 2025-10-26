import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Crud } from '../../servicio/crud';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-empleado',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editar-empleado.html',
  styleUrl: './editar-empleado.css',
})
export class EditarEmpleado implements OnInit {
  formularioDeEmpleado: FormGroup;
  elID:any;
  constructor(
    public formulario: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private crudService: Crud,
    private Routeador: Router  
  ) { 
    this.elID = this.rutaActiva.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.ObtenerEmpleado(this.elID).subscribe((respuesta)=>{
      console.log(respuesta);
      this.formularioDeEmpleado.setValue({
        nombre: respuesta[0]['nombre'],
        correo: respuesta[0]['correo']
      });
  });

    this.formularioDeEmpleado = this.formulario.group({
      nombre: [''],
      correo: ['']
    });
  }

  ngOnInit(): void {
}

  enviarDatos(): any {
    console.log(this.elID);
    console.log(this.formularioDeEmpleado.value);
    this.crudService.EditarEmpleado(this.elID, this.formularioDeEmpleado.value).subscribe(()=>{
      this.Routeador.navigateByUrl('/listar-empleado');
    });
}
}
