import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestAccessComponent } from './request-access/request-access.component';
import { ApproveRequestComponent } from './approve-request/approve-request.component';

const routes: Routes = [
  { path: 'request-access', component: RequestAccessComponent },
  { path: 'approve-request', component: ApproveRequestComponent },
  { path: '', redirectTo: '/request-access', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
