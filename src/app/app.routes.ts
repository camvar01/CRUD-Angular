import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleado } from './componentes/agregar-empleado/agregar-empleado';
import { EditarEmpleado } from './componentes/editar-empleado/editar-empleado';
import { ListarEmpleado } from './componentes/listar-empleado/listar-empleado';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    {path: '', pathMatch: 'full', redirectTo: 'agregar-empleado'},
    {path: 'agregar-empleado', component: AgregarEmpleado},
    {path: 'editar-empleado/:id', component: EditarEmpleado},
    {path: 'listar-empleado', component: ListarEmpleado}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
