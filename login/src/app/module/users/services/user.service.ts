import { Injectable } from '@angular/core';
import { UserModel } from '../model/User.Model';
import { UserMockData } from '../mock/UserMock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public userLogin(user: any): Observable<any> {
    return this.http.post('http://localhost:8000/login', user)
  }

  // private CurrentUser: UserModel | null = null;

  // login(username: string, password: string) : boolean {
  //   const user = UserMockData.find(u => u.Username === username && u.Password === password);

  //   if(user) {
  //     this.CurrentUser = user;
  //     return true;
  //   }
  //   return false;
  // }

  // getCurrentUser() : UserModel | null {
  //   return this.CurrentUser;
  // }
}
