import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Crud } from '../../servicio/crud';
import { FormsModule } from "@angular/forms";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listar-empleado',
  imports: [RouterLink, FormsModule, NgFor],
  templateUrl: './listar-empleado.html',
  styleUrl: './listar-empleado.css',
})
export class ListarEmpleado implements OnInit {
  empleados: any;

  constructor(private crudServicio: Crud) {

  }
  ngOnInit(): void {
    this.crudServicio.ObtenerEmpleados().subscribe(respuesta =>{
      console.log(respuesta);
      this.empleados=respuesta;
    });
  }
  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro?")){
    this.crudServicio.BorrarEmpleado(id).subscribe((respuesta)=>{
      this.empleados.splice(iControl,1);
 
    });
  }
}
}
