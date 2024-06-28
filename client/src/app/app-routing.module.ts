import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessRequestListComponent } from './modules/access-requests/access-request-list/access-request-list.component';
import { AccessRequestDetailComponent } from './modules/access-requests/access-request-detail/access-request-detail.component';

const routes: Routes = [
  // ... otras rutas existentes
  {
    path: 'access-requests',
    component: AccessRequestListComponent
  },
  {
    path: 'access-requests/:id',
    component: AccessRequestDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
