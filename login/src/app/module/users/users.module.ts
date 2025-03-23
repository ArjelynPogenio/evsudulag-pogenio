import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RoutesModule } from './routes.module';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms'
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [ LoginComponent, UserInfoComponent, DashboardComponent ],
  imports: [
    CommonModule,
    RoutesModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
