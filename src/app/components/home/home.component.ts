import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anio:number;

  constructor(public auth:AuthService, private userService: UserService) {
    this.anio = new Date().getFullYear();
   }
  

  ngOnInit(): void {
    this.auth.userProfile$.subscribe((perfil:any) => {
      console.log(perfil);
      if(perfil){this.userService.login(perfil.email).subscribe(
        res => {
          console.log(res);
          
          console.log(perfil);
        }
      );}
      /**/
      
    });
  }

}
