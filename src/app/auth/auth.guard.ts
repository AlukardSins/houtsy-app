import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BodyComponent } from '../components/home/body/body.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private auth0: AuthService, private router: Router, private body: BodyComponent) {}
  canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token = localStorage.getItem('userToken');
    
    
    if (!token) {
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }
}
