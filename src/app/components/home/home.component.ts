import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anio:number;

  constructor(public auth:AuthService) {
    this.anio = new Date().getFullYear();
   }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe((perfil:any) => {
      console.log(perfil);
    });
  }

}
