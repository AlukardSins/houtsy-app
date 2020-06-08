import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {  
    this.auth.userProfile$.subscribe((perfil:any) => {
      console.log(perfil);
    });
  }

}
