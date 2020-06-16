import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { User } from '../share/user.model'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor (private http: HttpClient) {}

  login (email) {
    let actaulUrl = `http://localhost:8000/api/user/verify-user`
    return this.http.post(actaulUrl, { email: email })
  }

<<<<<<< HEAD
  
=======
  datosUsuario (id){
    let actualUrl =`http://localhost:8000/api/user/get-user`
    return this.http.post(actualUrl,{id: id})
  }
>>>>>>> 1a9f5ddd47e9a992570dfcb972c22a1ecbbf4817
}
