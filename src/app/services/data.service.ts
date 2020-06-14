import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(userId){
    let actaulUrl = `http://localhost:8000/api/data/data-user`
    return this.http.post(actaulUrl, {userId: userId})
  }
}
