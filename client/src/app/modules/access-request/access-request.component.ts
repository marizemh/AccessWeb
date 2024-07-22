import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-access-request',
	templateUrl: './access-request.component.html',
	styleUrls: ['./access-request.component.scss'],
})
export class AccessRequestComponent {
	accessForm: FormGroup;
	applications = ['Shipkraken', 'SoloEnvios', 'Skydropx Pro', 'Carrier Service', 'ecommerce-service'];
	environments = ['production', 'staging', 'sandbox', 'development'];
	approvers = [
		{ name: 'Diego Martínez', email: 'diego@skydropx.com' },
		{ name: 'Juanma Maffei', email: 'juanma.maffei@skydropx.com' },
		{ name: 'Ricardo Angeles', email: 'ricardo@skydropx.com' },
	];

	constructor(private fb: FormBuilder, private http: HttpClient) {
		this.accessForm = this.fb.group({
			email: ['', [Validators.required, Validators.email, Validators.pattern(/@skydropx\.com$/)]],
			application: ['', Validators.required],
			environment: ['', Validators.required],
			accessDuration: ['', Validators.required],
			approver: ['', Validators.required],
		});
	}

	onSubmit() {
		if (this.accessForm.valid) {
			this.http.post('/api/access-request', this.accessForm.value).subscribe(
				(response) => {
					alert('Solicitud enviada exitosamente');
					this.accessForm.reset();
				},
				(error) => {
					alert('Error al enviar la solicitud');
				}
			);
		}
	}
}
