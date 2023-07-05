import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) {}

    baseurl="http://localhost:5246/api/User";

    getUser() : Observable<user[]>{
      return this.httpclient.get<user[]>(this.baseurl);
    }
   
}
