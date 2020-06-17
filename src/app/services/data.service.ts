import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, concat } from 'rxjs'

const URI = 'http://localhost:8000/api/data'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor (private http: HttpClient) {}

  getData (userId) {
    return this.http.post(URI + '/data-user', { userId: userId })
  }

<<<<<<< HEAD
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
=======
  getStatus (sensorId): Observable<any> {
    return this.http.post(URI + '/sensor-status', { sensorId: sensorId })
  }

  closeService (sensorId): void {
    console.log('CLOSED: ', sensorId)
    this.http.post(URI + '/sensor-open', { sensorId: sensorId })
  }

  openService (sensorId): void {
    console.log('OPENED: ', sensorId)
    this.http.post(URI + '/sensor-close', { sensorId: sensorId })
>>>>>>> 5d17afc84d9ae63c9c56a61e9537e48565fa331b
  }
}
