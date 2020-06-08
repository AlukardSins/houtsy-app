import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {User} from '../share/user.model'

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

  constructor(private http: HttpClient) { }

  login(authCredentials){
    return this.http.post(environment.URL + '/get-user', authCredentials);
  }
}
