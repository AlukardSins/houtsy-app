import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: ['./body-user.component.css']
})
export class BodyUserComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    let userId = localStorage.getItem('userToken');
    this.dataService.getData(userId).subscribe((res: any) =>{
      console.log({res});
      
    })
  }

  ngOnDestroy(): void{

  }

}
