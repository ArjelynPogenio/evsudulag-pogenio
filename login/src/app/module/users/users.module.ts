import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RoutesModule } from './routes.module';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms'
import { UserInfoComponent } from './pages/user-info/user-info.component';


@NgModule({
  declarations: [ LoginComponent, UserInfoComponent ],
  imports: [
    CommonModule,
    RoutesModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
