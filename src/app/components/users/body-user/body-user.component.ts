import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { timer, Observable, Subject } from 'rxjs';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: ['./body-user.component.css']
})
export class BodyUserComponent implements OnInit {
  private userId = localStorage.getItem('userToken');
  private data: Observable<any> =  this.dataService.getData(this.userId);
  subscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    const source = interval(60000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => console.log("datos", this.data)
    );
    /*let userId = localStorage.getItem('userToken');
    this.dataService.getData(userId).subscribe((res: any) =>{
      console.log({res});
      
    })*/
  }


  ngOnDestroy(): void{


  }

}
