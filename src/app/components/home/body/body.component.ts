import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { UserService } from '../../../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: [
    './body.component.css'
  ]
})
export class BodyComponent implements OnInit {
  logged = false

  constructor (public auth: AuthService, private userService: UserService, private router: Router) {}

  ngOnInit (): void {
    
  }

  userLogin(){
    this.auth.login();
  }

}

