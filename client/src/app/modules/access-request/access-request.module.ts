import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestFormComponent } from './request-form/request-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RequestFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RequestFormComponent]
})
export class AccessRequestModule { }
