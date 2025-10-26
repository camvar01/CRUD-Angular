import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class Crud {
API: string = 'http://localhost/empleados/index.php';
  constructor(private ClienteHttp: HttpClient) {}
  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.ClienteHttp.post(this.API+"?insertar=1", datosEmpleado);
  }
}