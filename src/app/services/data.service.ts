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

  getStatus (sensorId): Observable<any> {
    return this.http.post(URI + '/sensor-status', { sensorId: sensorId })
  }

  closeService (sensorId): Observable<any> {
    console.log('CLOSED: ', sensorId,URI + '/sensor-open')
   return this.http.post(URI + '/sensor-open', { sensorId: sensorId })
  }

  openService (sensorId): Observable<any>  {
    console.log('OPENED: ', sensorId)
    return this.http.post(URI + '/sensor-close', { sensorId: sensorId })
  }
}
