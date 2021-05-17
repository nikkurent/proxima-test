import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private webRequest: WebRequestService, private router: Router) {
  }

  users: any[] = [];
  currentPage: number = 1;
  totalPages: number;

  ngOnInit(): void {
    // Get users
    this.webRequest.get('users/').subscribe((users: any) => {
      this.users = users.data;
      this.totalPages = users.total_pages;
    })
  }

  /**
   * On click get user on next page
  */
  nextPage(){
    this.webRequest.get(`users?page=${this.currentPage + 1}`).subscribe((users: any) => {
      this.users = users.data;
    });
    this.currentPage += 1;
  }

  /**
   * On click get user on previous page
  */
  previousPage(){
    this.webRequest.get(`users?page=${this.currentPage - 1}`).subscribe((users: any) => {
      this.users = users.data;
    });
    this.currentPage -= 1;
  }

  // Get user deatils
  UserDetailView(userId: number) {
    this.router.navigateByUrl(`/user/${userId}`)
  }

  // Logout user
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
