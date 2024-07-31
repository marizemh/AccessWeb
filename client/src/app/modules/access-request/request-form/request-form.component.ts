import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent {
  applications = [
    { name: 'Shipkraken', email: 'shipkraken-developers@skydropx.com', approvers: ['Diego Martínez', 'Daniel Laloush', 'Juanma Maffei'] },
    { name: 'SoloEnvios', email: 'soloenvios-developers-production@soloenvios.com', approvers: ['Juanma Maffei', 'Ricardo Angeles'] },
    { name: 'Skydropx Pro', email: 'skydropx-pro-developers-production@skydropx.com', approvers: ['Juanma Maffei', 'Ricardo Angeles'] },
    { name: 'Carrier Service', email: 'carrier-service-developers-production@skydropx.com', approvers: ['Arturo Mendoza', 'Jhonattan Camargo'] },
    // Agregar más aplicaciones según sea necesario
  ];

  environments = ['production', 'staging', 'sandbox', 'development'];
  associatedEmail: string | null = null;
  approvers: string[] = [];
  selectedApplication: string = '';
  selectedEnvironment: string = '';
  selectedDuration: number | string = 60;
  errorMessage: string = '';

  durationOptions = [
    { value: 15, label: '15 minutos' },
    { value: 60, label: '1 hora' },
    { value: 180, label: '3 horas' },
    { value: 360, label: '6 horas' },
    { value: 540, label: '9 horas' },
    { value: 1680, label: '1 semana' },
    { value: 'N/A', label: 'N/A' }
  ];

  constructor(private http: HttpClient) {}

  onApplicationChange(application: string) {
    const selectedApp = this.applications.find(app => app.name === application);
    if (selectedApp) {
      this.associatedEmail = selectedApp.email;
      this.approvers = selectedApp.approvers;
    } else {
      this.associatedEmail = null;
      this.approvers = [];
    }
  }

  onSubmit() {
    if (!this.selectedApplication || !this.selectedEnvironment || !this.associatedEmail) {
      this.errorMessage = 'Por favor, complete todos los campos requeridos.';
      return;
    }

    const requestData = {
      email: this.associatedEmail,
      application: this.selectedApplication,
      environment: this.selectedEnvironment,
      duration: this.selectedDuration
    };

    this.http.post('/api/access-request', requestData)
      .subscribe(response => {
        console.log('Solicitud enviada', response);
        this.errorMessage = '';
      }, error => {
        console.error('Error al enviar la solicitud', error);
        this.errorMessage = 'Ocurrió un error al enviar la solicitud. Intente nuevamente.';
      });
  }
}
