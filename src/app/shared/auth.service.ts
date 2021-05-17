import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  /**
   * User authentication based on Access Token
   * 
   * @returns boolean
  */
  canActivate(): boolean {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login');
      return false
    }
    return true;
  }
}
