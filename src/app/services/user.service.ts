import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {User} from '../share/user.model'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class UserService {

  selectedUser: User = {
    userType: '',
    idType: '',
    idNumber: '',
    address: '',
    aptId: '',
    email: '',
    phoneNumber: ''
    
  };

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  serverErrorMessages: string;


  constructor(private http: HttpClient) { }

  login(email): Observable<any> {
    let actaulUrl = `http://localhost:8000/api/get-user/${email}`;
    return this.http.get(actaulUrl, { headers: this.headers })
      .pipe(        
       
        map((res: Response) => {
                   
          return res || {}
        })
      )
   // return this.http.get(URL + '/get-user', authCredentials);
  }
}
