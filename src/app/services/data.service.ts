import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(userId){
    let actaulUrl = `http://localhost:8000/api/data/data-user`
    return this.http.post(actaulUrl, {userId: userId});
  }

  getStatus(_id): Observable<any>{
    let statusUri = `http://localhost:8000/api/data/sensor-status`
    return this.http.get(statusUri, _id);
  }

  closeService(_id): void{
    console.log("\n\n\nCLOSEEEEE: ", _id, "\n\n\n\n\n");
    
    let closeUri = `http://localhost:8000/api/data/sensor-close`
    this.http.post(closeUri, {_id});
  }

  openService(_id): void{
    console.log("\n\n\nopenEEEEE: ", _id, "\n\n\n\n\n");  
    let openUri = `http://localhost:8000/api/data/sensor-open`
    this.http.post(openUri, {_id});
  }

}
