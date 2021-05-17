import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private webRequest: WebRequestService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    /**
     * Register user
    */
    this.webRequest.post(`register`, {"email": form.value.email, "password": form.value.password}).subscribe((user: any) => {
      localStorage.setItem('token', user['token']);
      this.router.navigateByUrl('/users');
    })
  }
}
