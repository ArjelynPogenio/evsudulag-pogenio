import { Injectable } from '@angular/core';
import { UserModel } from '../model/User.Model';
import { UserMockData } from '../mock/UserMock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private CurrentUser: UserModel | null = null;

  login(username: string, password: string) : boolean {
    const user = UserMockData.find(u => u.Username === username && u.Password === password);

    if(user) {
      this.CurrentUser = user;
      return true;
    }
    return false;
  }

  getCurrentUser() : UserModel | null {
    return this.CurrentUser;
  }
}
