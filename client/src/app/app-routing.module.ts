import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestFormComponent } from './modules/access-request/request-form/request-form.component';
import { ApprovalFormComponent } from './modules/approval/approval-form/approval-form.component';

const routes: Routes = [
  { path: 'access-request', component: RequestFormComponent },
  { path: 'approve-request', component: ApprovalFormComponent },
  // otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
