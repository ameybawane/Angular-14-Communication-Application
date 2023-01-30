import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaurdUserGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = Number(route.paramMap.get('id'));
    if (isNaN(id) || id < 1) {
      alert("Invalid user Id!");
      // redirect to user management component
      this.router.navigate(['/usermgt']); 
      return false;
    }
    return true;
    
  }

}
