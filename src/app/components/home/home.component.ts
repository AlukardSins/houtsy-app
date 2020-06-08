import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anio:number;

  constructor() {

  }

  ngOnInit(): void {
<<<<<<< HEAD
    this.auth.userProfile$.subscribe((perfil:any) => {
      
      if(perfil){this.userService.login(perfil.email).subscribe(
        res => {
         
          
          console.log(perfil);
        }
      );}
      /**/
      
    });
=======
>>>>>>> 0cb149b6966e4c270d3a50b22c392ef7eef986f7
  }

}
