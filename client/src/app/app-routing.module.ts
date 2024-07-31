import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestFormComponent } from './modules/access-request/request-form/request-form.component';
import { ApprovalFormComponent } from './modules/approval/approval-form/approval-form.component';
// Importa otros componentes según sea necesario

const routes: Routes = [
  { path: 'access-request', component: RequestFormComponent },
  { path: 'approve-request', component: ApprovalFormComponent },
  // Otras rutas que puedas tener
  { path: '', redirectTo: '/access-request', pathMatch: 'full' }, // Redirige a la ruta de solicitud de acceso por defecto
  { path: '**', redirectTo: '/access-request' } // Maneja rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
