import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService} from '../../../services/user.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public auth: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe((perfil:any) => {
      
      if(perfil){this.userService.login(perfil.email).subscribe(
        res => {
         
          
          console.log(perfil);
        }
      );}
      /**/
      
    });
  }
  }
