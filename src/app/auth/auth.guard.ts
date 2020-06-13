import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { BodyComponent } from '../components/home/body/body.component'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private auth0: AuthService, private router: Router, private body: BodyComponent) {}
  canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('logged auth', this.body.logged, this.auth0.loggedIn)

    if (!this.auth0.loggedIn) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
