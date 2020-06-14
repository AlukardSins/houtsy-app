import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-left-user',
  templateUrl: './left-user.component.html',
  styleUrls: ['./left-user.component.css']
})
export class LeftUserComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    
  }

  logOut(): void{
    localStorage.removeItem('userToken');
    this.auth.logout();
  }
}
