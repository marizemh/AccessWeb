import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanActivateChild,
	CanLoad,
	Route,
	Router,
	RouterStateSnapshot,
	UrlSegment,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthGuard } from '@auth0/auth0-angular';

@Injectable({
	providedIn: 'root',
})
export class NoAuthGuard implements CanActivate, CanActivateChild, CanLoad {
	/**
	 * Constructor
	 */
	constructor(private _authService: AuthService, private _router: Router, private _authGuard: AuthGuard) {}

	// -----------------------------------------------------------------------------------------------------
	// @ Public methods
	// -----------------------------------------------------------------------------------------------------

	/**
	 * Can activate
	 *
	 * @param route
	 * @param state
	 */
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return !this._authGuard.canActivate(route, state);
	}

	/**
	 * Can activate child
	 *
	 * @param childRoute
	 * @param state
	 */
	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return !this._authGuard.canActivateChild(childRoute, state);
	}

	/**
	 * Can load
	 *
	 * @param route
	 * @param segments
	 */
	canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
		return !this._authGuard.canLoad(route, segments);
	}
}
