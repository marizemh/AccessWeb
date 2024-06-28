import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from 'environments/environment';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    styleUrls    : ['./sign-in.component.scss']
})
export class AuthSignInComponent implements OnInit
{
    accessForm: FormGroup;
    applications: string[] = [
        'Shipkraken', 'SoloEnvios', 'Skydropx Pro', 'Carrier Service',
        'ecommerce-service', 'ecommerce-service-v3', 'radar-service',
        'rates-service', 'tracking-fetcher-service', 'overweight-verifier',
        'protect-service', 'skydropx-co-service', 'skydropx-landing',
        'billing-service', 'kafka', 'carrier-admin', 'administrative-panel',
        'auth-service', 'labels-webapp'
    ];
    environments: string[] = ['production', 'staging', 'sandbox', 'development'];
    accessDurations: string[] = ['15 minutes', '1 hour', '3 hours', '6 hours', '9 hours', '1 week', 'N/A'];

    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder
    )
    {
    }

    ngOnInit(): void
    {
        this.accessForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email, this.skydropxEmailValidator]],
            application: ['', Validators.required],
            environment: ['', Validators.required],
            duration: ['', Validators.required]
        });
    }

    skydropxEmailValidator(control) {
        const email = control.value;
        if (email && !email.endsWith('@skydropx.com')) {
            return { invalidDomain: true };
        }
        return null;
    }

    onSubmit(): void
    {
        if (this.accessForm.valid) {
            // Here you would call your service to submit the form
            console.log(this.accessForm.value);
        }
    }
}
