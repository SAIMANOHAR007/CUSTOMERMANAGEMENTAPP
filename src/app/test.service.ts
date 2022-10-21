import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class TestService {


  private url="https://jsonplaceholder.typicode.com/users";
  constructor(private httpclient:HttpClient) { }
  getUsersData():Observable<User[]> {
    return this.httpclient.get<User[]>(this.url);
  }
}
