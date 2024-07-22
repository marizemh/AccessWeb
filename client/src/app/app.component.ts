import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	/**
	 * Constructor
	 */
	constructor(public auth: AuthService) {}

	login(): void {
		this.auth.loginWithRedirect(); // Método para iniciar sesión
	}

	logout(): void {
		this.auth.logout({ returnTo: window.location.origin }); // Método para cerrar sesión
	}
}
