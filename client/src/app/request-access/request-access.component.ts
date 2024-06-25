// src/app/request-access/request-access.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccessRequestService } from '../services/access-request.service';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss']
})
export class RequestAccessComponent {
  accessForm: FormGroup;

  constructor(private fb: FormBuilder, private accessRequestService: AccessRequestService) {
    this.accessForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/@skydropx\.com$/)]],
      application: ['', Validators.required],
      environment: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.accessForm.valid) {
      this.accessRequestService.createRequest(this.accessForm.value).subscribe(response => {
        // Handle response
      });
    }
  }
}
