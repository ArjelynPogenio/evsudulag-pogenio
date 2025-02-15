import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RoutesModule } from './routes.module';



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    RoutesModule
  ]
})
export class UsersModule { }
