import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private webRequest: WebRequestService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    /**
     * Login user
    */
    this.webRequest.post(`login`, {"email": form.value.email, "password": form.value.password}).subscribe((token: any) => {
      localStorage.setItem('token', token.token);
      this.router.navigateByUrl('/users');
    })
  }
}