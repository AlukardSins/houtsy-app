import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: ['./body-user.component.css']
})
export class BodyUserComponent implements OnInit {

  constructor(private dataService: DataService, private auth: AuthService) { }

  ngOnInit(): void {
    let userId = localStorage.getItem('userToken');
    this.dataService.getData(userId).subscribe((res: any) =>{
      console.log({res});
      
    })
  }

  logOut(): void{
    localStorage.removeItem('userToken');
    this.auth.logout();
  }

  ngOnDestroy(): void{

  }


}
