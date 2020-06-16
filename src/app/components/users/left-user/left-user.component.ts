import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-left-user',
  templateUrl: './left-user.component.html',
  styleUrls: ['./left-user.component.css']
})
export class LeftUserComponent implements OnInit {

  constructor(private auth: AuthService, private userService: UserService) { }

  email = "";
  direccion = "";
  idNumber = "";



  ngOnInit(): void {
    this.userService.datosUsuario(localStorage.getItem('userToken')).subscribe((res:any)=>{
      this.email = res.data.email;
      this.direccion = res.data.address;
      this.idNumber = res.data.idNumber;
    });
  }

  logOut(): void{
    localStorage.removeItem('userToken');
    this.auth.logout();
  }
}
