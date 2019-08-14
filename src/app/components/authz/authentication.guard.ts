import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { map, take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  private x: boolean;

  constructor(private auth: AuthenticationService, private router: Router) {
    this.auth.user$.subscribe(x => x != null ? console.log(x.displayName) : null);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // TODO: use snackbar to display meaningful messages
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        !loggedIn ? console.log('not authorized') : this.router.navigate(['/']);
      })
    );

  }

}
