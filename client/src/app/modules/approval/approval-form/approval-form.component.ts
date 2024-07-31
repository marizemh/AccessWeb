import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-approval-form',
  templateUrl: './approval-form.component.html',
  styleUrls: ['./approval-form.component.scss']
})
export class ApprovalFormComponent implements OnInit {
  requesterEmail: string = '';
  application: string = '';
  environment: string = '';
  duration: string = '';
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.requesterEmail = params['email'];
      this.application = params['application'];
      this.environment = params['environment'];
      this.duration = params['duration'];
    });
  }

  approve() {
    this.http.post('/api/approve-request', { requesterEmail: this.requesterEmail, approved: true })
      .subscribe(response => {
        alert('Solicitud aprobada.');
        this.router.navigate(['/']); // Redirigir a la página principal
      }, error => {
        this.errorMessage = 'Error al aprobar la solicitud.';
      });
  }

  reject() {
    this.http.post('/api/approve-request', { requesterEmail: this.requesterEmail, approved: false })
      .subscribe(response => {
        alert('Solicitud rechazada.');
        this.router.navigate(['/']); // Redirigir a la página principal
      }, error => {
        this.errorMessage = 'Error al rechazar la solicitud.';
      });
  }
}
