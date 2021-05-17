import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';
import { AuthService } from './shared/auth.service';



const routes: Routes = [
  {path: '', component: UsersComponent, canActivate:[AuthService] },
  {path: 'users', component: UsersComponent, canActivate:[AuthService]},
  {path: 'user/:id', component: UserDetailComponent, canActivate:[AuthService]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
