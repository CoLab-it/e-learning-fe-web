import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment.prod';
import { login } from '../login.interface';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
   
  token!:any
  userapi= environment.userapi
  
  constructor(private http:HttpClient) { }

  userSignup(data:login){
    return this.http.post<any>(`${this.userapi}/signup`,data);
  }
}
