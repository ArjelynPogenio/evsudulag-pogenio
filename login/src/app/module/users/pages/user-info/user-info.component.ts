import { Component } from '@angular/core';
import { UserModel } from '../../model/User.Model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-info',
  standalone: false,
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  user: UserModel | null;

  constructor(private userService: UserService) {
    this.user = this.userService.getCurrentUser();
  }
}
